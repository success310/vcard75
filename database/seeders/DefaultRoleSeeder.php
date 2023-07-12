<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role as CustomRole;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DefaultRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => CustomRole::ROLE_SUPER_ADMIN,
                'display_name' => 'Super Admin',
                'is_default' => true,
            ],
            [
                'name' => CustomRole::ROLE_ADMIN,
                'display_name' => 'Admin',
                'is_default' => true,
            ],
            [
                'name' => CustomRole::ROLE_USER,
                'display_name' => 'User',
                'is_default' => true,
            ],
        ];

        foreach ($roles as $role) {
            $role = Role::create($role);
        }

        /** @var Role $superAdminRole */
        $superAdminRole = Role::whereName(CustomRole::ROLE_SUPER_ADMIN)->first();
        /** @var Role $adminRole */
        $adminRole = Role::whereName(CustomRole::ROLE_ADMIN)->first();
        /** @var Role $userRole */
        $userRole = Role::whereName(CustomRole::ROLE_USER)->first();

        /** @var User $user */
        $superAdminUser = User::whereEmail('sadmin@vcard.com')->first();
        $adminUser = User::whereEmail('admin@vcard.com')->first();
        $user = User::whereEmail('user@vcard.com')->first();

        $superAdminPermission = Permission::pluck('name', 'id');
        $adminPermission = Permission::whereIn('name',
            ['manage_vcards'])->pluck('name', 'id');
        $userPermission = Permission::whereIn('name',
            ['manage_rcards'])->pluck('name', 'id');

        $superAdminRole->givePermissionTo($superAdminPermission);
        $adminRole->givePermissionTo($adminPermission);
        $userRole->givePermissionTo($userPermission);

        if ($superAdminUser) {
            $superAdminUser->assignRole($superAdminRole);
        }
        if ($adminUser) {
            $adminUser->assignRole($adminRole);
        }
        if ($user) {
            $user->assignRole($userRole);
        }
    }
}
