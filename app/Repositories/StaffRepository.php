<?php

namespace App\Repositories;

use App\Mail\VerifyMail;
use App\Models\EmailVerification;
use App\Models\MultiTenant;
use App\Models\Club;
use App\Models\Staff;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Mail;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

/**
 * Class StaffRepository
 */
class StaffRepository extends BaseRepository
{
    public $fieldSearchable = [
        'club',
        'name',
        'email',
        'contact',
        'dob',
        'gender',
        'is_active',
        'password',
    ];

    /**
     * {@inheritDoc}
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * {@inheritDoc}
     */
    public function model()
    {
        return Staff::class;
    }

    /**
     * @param $input
     * @return mixed
     */
    public function store($input)
    {
        try {
            DB::beginTransaction();

            $tenant = MultiTenant::create(['tenant_name' => $input['name']]);

            $input['tenant_id'] = $tenant->id;
            $input['password'] = Hash::make($input['password']);
            $staff = Staff::create($input);
            $staff->email_verified_at = Carbon::now();
            $staff->is_active = true;
            if (isset($input['club_id'])) {
                $club = Club::whereId($input['club_id'])->first();
                $staff->club_id = $club->id;
            }
            $staff->save();

            if (isset($input['profile']) && ! empty($input['profile'])) {
                $staff->addMedia($input['profile'])->toMediaCollection(User::PROFILE, config('app.media_disc'));
            }
            
            if (isset($input['is_admin']) == 'false') {
                $staff->sendEmailVerificationNotification();
            }

            DB::commit();

            return $staff;
        } catch (Exception $e) {
            DB::rollBack();

            throw new UnprocessableEntityHttpException($e->getMessage());
        }
    }

    /**
     * @param  array  $input
     * @param  Staff  $staff
     * @return Builder|Builder[]|Collection|Model|int
     */
    public function update($input, $staff)
    {
        if (isset($input['contact'])) {
            $input['contact'] = str_replace(' ', '', $input['contact']);
        }
        
        $staff->update($input);

        if (isset($input['profile']) && ! empty($input['profile'])) {
            $staff->clearMediaCollection(Staff::PROFILE);
            $staff->addMedia($input['profile'])->toMediaCollection(Staff::PROFILE, config('app.media_disc'));
        }

        return $staff;
    }

    /**
     * @param $staffInput
     * @return bool
     */
    public function updateProfile($staffInput)
    {
        try {
            DB::beginTransaction();

            $staff = Staff::where('id', $staffInput['id'])->first();
            $staffInput['contact'] = str_replace(' ', '', $staffInput['contact']);

            if ($staffInput['email'] != $staff->email) {
                $token = Str::random(60);

                EmailVerification::create([
                    'user_id' => $staff->id,
                    'email' => $staffInput['email'],
                    'token' => $token,
                ]);

                $verifyButton = url(config('app_domain').'/change-email-verification/'.$staff->id.'/'.$token);
                $data = [
                    'staff_id' => $staff->id,
                    'staff_name' => $staff->full_name,
                    'email' => $staff->email,
                    'token' => $token,
                    'verify_button' => $verifyButton,
                ];

                Mail::to($staffInput['email'])
                    ->send(new VerifyMail('emails.verify_email', 'Verify Email', $data));
            }

            $staffInput['email'] = $staff->email;
            $staff->update($staffInput);

            if (isset($staffInput['profile']) && ! empty($staffInput['profile'])) {
                $staff->clearMediaCollection(Staff::PROFILE);
                $staff->addMedia($staffInput['profile'])->toMediaCollection(Staff::PROFILE, config('app.media_disc'));
            }

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();

            throw new UnprocessableEntityHttpException($e->getMessage());
        }
    }
}
