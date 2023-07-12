/*! For license information please see custom.js.LICENSE.txt */
(()=>{var __webpack_modules__={2743:e=>{!function(t,n){var r=n.jQuery;e.exports=r?t(n,r):function(e){if(e&&!e.fn)throw"Provide jQuery or null";return t(n,e)}}((function(e,t){"use strict";var n=!1===t;t=t&&t.fn?t:e.jQuery;var r,o,i,a,s,l,d,c,p,u,f,g,m,h,v,w,_,b,x,y,$,C,k="v1.0.11",T="_ocp",E=/[ \t]*(\r\n|\n|\r)/g,j=/\\(['"\\])/g,A=/['"\\]/g,S=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,P=/^if\s/,R=/<(\w+)[>\s]/,F=/[\x00`><\"'&=]/,M=/^on[A-Z]|^convert(Back)?$/,N=/^\#\d+_`[\s\S]*\/\d+_`$/,I=/[\x00`><"'&=]/g,O=/[&<>]/g,L=/&(amp|gt|lt);/g,D=/\[['"]?|['"]?\]/g,V=0,U={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},q={amp:"&",gt:">",lt:"<"},B="html",H="object",K="data-jsv-tmpl",J="jsvTmpl",z="For #index in nested block use #getIndex().",Y={},Z={},G=e.jsrender,Q=G&&t&&!t.render,W={template:{compile:function e(n,r,o,i){function s(r){var a,s;if(""+r===r||r.nodeType>0&&(l=r)){if(!l)if(/^\.?\/[^\\:*?"<>]*$/.test(r))(s=c[n=n||r])?r=s:l=document.getElementById(r);else if("#"===r.charAt(0))l=document.getElementById(r.slice(1));else if(t.fn&&!g.rTmpl.test(r))try{l=t(r,document)[0]}catch(e){}l&&("SCRIPT"!==l.tagName&&ye(r+": Use script block, not "+l.tagName),i?r=l.innerHTML:((a=l.getAttribute(K))&&(a!==J?(r=c[a],delete c[a]):t.fn&&(r=t.data(l)[J])),a&&r||(n=n||(t.fn?J:r),r=e(n,l.innerHTML,o,i)),r.tmplName=n=n||a,n!==J&&(c[n]=r),l.setAttribute(K,n),t.fn&&t.data(l,J,r))),l=void 0}else r.fn||(r=void 0);return r}var l,d,u=r=r||"";g._html=p.html,0===i&&(i=void 0,u=s(u));(i=i||(r.markup?r.bnds?ie({},r):r:{})).tmplName=i.tmplName||n||"unnamed",o&&(i._parentTmpl=o);!u&&r.markup&&(u=s(r.markup))&&u.fn&&(u=u.markup);if(void 0!==u)return u.render||r.render?u.tmpls&&(d=u):(r=he(u,i),Ce(u.replace(A,"\\$&"),r)),d||(d=ie((function(){return d.render.apply(d,arguments)}),r),function(e){var t,n,r;for(t in W)e[n=t+"s"]&&(r=e[n],e[n]={},a[n](r,e))}(d)),d}},tag:{compile:function(e,t,n){var r,o,i,a=new g._tg;function s(){var t=this;t._={unlinked:!0},t.inline=!0,t.tagName=e}l(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t});if(o=t.baseTag)for(i in t.flow=!!t.flow,(o=""+o===o?n&&n.tags[o]||f[o]:o)||ye('baseTag: "'+t.baseTag+'" not found'),a=ie(a,o),t)a[i]=ee(o[i],t[i]);else a=ie(a,t);void 0!==(r=a.template)&&(a.template=""+r===r?c[r]||c(r):r);(s.prototype=a).constructor=a._ctr=s,n&&(a._parentTmpl=n);return a}},viewModel:{compile:function(e,n){var r,o,i,a=this,c=n.getters,p=n.extend,u=n.id,f=t.extend({_is:e||"unnamed",unmap:$,merge:y},p),g="",m="",h=c?c.length:0,v=t.observable,w={};function _(e){o.apply(this,e)}function b(){return new _(arguments)}function x(e,t){for(var n,r,o,i,s,l=0;l<h;l++)n=void 0,(o=c[l])+""!==o&&(o=(n=o).getter,s=n.parentRef),void 0===(i=e[o])&&n&&void 0!==(r=n.defaultVal)&&(i=ge(r,e)),t(i,n&&a[n.type],o,s)}function y(e,t,n){e=e+""===e?JSON.parse(e):e;var r,o,i,a,l,c,p,f,g,m,h=0,_=this;if(d(_)){for(p={},g=[],o=e.length,i=_.length;h<o;h++){for(f=e[h],c=!1,r=0;r<i&&!c;r++)p[r]||(l=_[r],u&&(p[r]=c=u+""===u?f[u]&&(w[u]?l[u]():l[u])===f[u]:u(l,f)));c?(l.merge(f),g.push(l)):(g.push(m=b.map(f)),n&&me(m,n,t))}v?v(_).refresh(g,!0):_.splice.apply(_,[0,_.length].concat(g))}else for(a in x(e,(function(e,t,n,r){t?_[n]().merge(e,_,r):_[n]()!==e&&_[n](e)})),e)a===s||w[a]||(_[a]=e[a])}function $(){var e,t,n,r,o=0,i=this;function p(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}if(d(i))return p(i);for(e={};o<h;o++)n=void 0,(t=c[o])+""!==t&&(t=(n=t).getter),r=i[t](),e[t]=n&&r&&a[n.type]?d(r)?p(r):r.unmap():r;for(t in i)!i.hasOwnProperty(t)||"_"===t.charAt(0)&&w[t.slice(1)]||t===s||l(i[t])||(e[t]=i[t]);return e}for(_.prototype=f,r=0;r<h;r++)!function(e){e=e.getter||e,w[e]=r+1;var t="_"+e;g+=(g?",":"")+e,m+="this."+t+" = "+e+";\n",f[e]=f[e]||function(n){if(!arguments.length)return this[t];v?v(this).setProperty(e,n):this[t]=n},v&&(f[e].set=f[e].set||function(e){this[t]=e})}(c[r]);return m=new Function(g,m),o=function(){m.apply(this,arguments),(i=arguments[h+1])&&me(this,arguments[h],i)},o.prototype=f,f.constructor=o,b.map=function(t){t=t+""===t?JSON.parse(t):t;var n,r,o,i,a=0,l=t,p=[];if(d(t)){for(n=(t=t||[]).length;a<n;a++)p.push(this.map(t[a]));return p._is=e,p.unmap=$,p.merge=y,p}if(t){for(x(t,(function(e,t){t&&(e=t.map(e)),p.push(e)})),l=this.apply(this,p),a=h;a--;)if(o=p[a],(i=c[a].parentRef)&&o&&o.unmap)if(d(o))for(n=o.length;n--;)me(o[n],i,l);else me(o,i,l);for(r in t)r===s||w[r]||(l[r]=t[r])}return l},b.getters=c,b.extend=p,b.id=u,b}},helper:{},converter:{}};function X(e,t){return function(){var n,r=this,o=r.base;return r.base=e,n=t.apply(r,arguments),r.base=o,n}}function ee(e,t){return l(t)&&((t=X(e?e._d?e:X(re,e):re,t))._d=(e&&e._d||0)+1),t}function te(e,t){var n,r=t.props;for(n in r)!M.test(n)||e[n]&&e[n].fix||(e[n]="convert"!==n?ee(e.constructor.prototype[n],r[n]):r[n])}function ne(e){return e}function re(){return""}function oe(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function ie(e,t){if(e){for(var n in t)e[n]=t[n];return e}}function ae(){var e=this.get("item");return e?e.index:void 0}function se(){return this.index}function le(e,t,n,r){var o,i,a,s=0;if(1===n&&(r=1,n=void 0),t)for(a=(i=t.split(".")).length;e&&s<a;s++)o=e,e=i[s]?e[i[s]]:e;return n&&(n.lt=n.lt||s<a),void 0===e?r?re:"":r?function(){return e.apply(o,arguments)}:e}function de(n,r,o){var i,a,s,d,c,p,f,m=this,h=!C&&arguments.length>1,v=m.ctx;if(n){if(m._||(c=m.index,m=m.tag),p=m,v&&v.hasOwnProperty(n)||(v=u).hasOwnProperty(n)){if(s=v[n],"tag"===n||"tagCtx"===n||"root"===n||"parentTags"===n)return s}else v=void 0;if((!C&&m.tagCtx||m.linked)&&(s&&s._cxp||(m=m.tagCtx||l(s)?m:!(m=m.scope||m).isTop&&m.ctx.tag||m,void 0!==s&&m.tagCtx&&(m=m.tagCtx.view.scope),v=m._ocps,(s=v&&v.hasOwnProperty(n)&&v[n]||s)&&s._cxp||!o&&!h||((v||(m._ocps=m._ocps||{}))[n]=s=[{_ocp:s,_vw:p,_key:n}],s._cxp={path:T,ind:0,updateValue:function(e,n){return t.observable(s[0]).setProperty(T,e),this}})),d=s&&s._cxp)){if(arguments.length>2)return(a=s[1]?g._ceo(s[1].deps):[T]).unshift(s[0]),a._cxp=d,a;if(c=d.tagElse,f=s[1]?d.tag&&d.tag.cvtArgs?d.tag.cvtArgs(c,1)[d.ind]:s[1](s[0].data,s[0],g):s[0]._ocp,h)return g._ucp(n,r,m,d),m;s=f}return s&&l(s)&&(i=function(){return s.apply(this&&this!==e?this:p,arguments)},ie(i,s)),i||s}}function ce(e,t){var n,r,o,i,a,s,l,c=this;if(c.tagName){if(!(c=((s=c).tagCtxs||[c])[e||0]))return}else s=c.tag;if(a=s.bindFrom,i=c.args,(l=s.convert)&&""+l===l&&(l="true"===l?void 0:c.view.getRsc("converters",l)||ye("Unknown converter: '"+l+"'")),l&&!t&&(i=i.slice()),a){for(o=[],n=a.length;n--;)r=a[n],o.unshift(pe(c,r));t&&(i=o)}if(l){if(void 0===(l=l.apply(s,o||i)))return i;if(n=(a=a||[0]).length,d(l)&&(!1===l.arg0||1!==n&&l.length===n&&!l.arg0)||(l=[l],a=[0],n=1),t)i=l;else for(;n--;)+(r=a[n])===r&&(i[r]=l[n])}return i}function pe(e,t){return(e=e[+t===t?"args":"props"])&&e[t]}function ue(e){return this.cvtArgs(e,1)}function fe(e,t,n,r,o,i,a,s){var l,d,c,p=this,u="array"===t;p.content=s,p.views=u?[]:{},p.data=r,p.tmpl=o,c=p._={key:0,useKey:u?0:1,id:""+V++,onRender:a,bnds:{}},p.linked=!!a,p.type=t||"top",t&&(p.cache={_ct:m._cchCt}),n&&"top"!==n.type||((p.ctx=e||{}).root=p.data),(p.parent=n)?(p.root=n.root||p,l=n.views,d=n._,p.isTop=d.scp,p.scope=(!e.tag||e.tag===n.ctx.tag)&&!p.isTop&&n.scope||p,d.useKey?(l[c.key="_"+d.useKey++]=p,p.index=z,p.getIndex=ae):l.length===(c.key=p.index=i)?l.push(p):l.splice(i,0,p),p.ctx=e||n.ctx):t&&(p.root=p)}function ge(e,t){return l(e)?e.call(t):e}function me(e,t,n){Object.defineProperty(e,t,{value:n,configurable:!0})}function he(e,n){var r,o=h._wm||{},i={tmpls:[],links:{},bnds:[],_is:"template",render:be};return n&&(i=ie(i,n)),i.markup=e,i.htmlTag||(r=R.exec(e),i.htmlTag=r?r[1].toLowerCase():""),(r=o[i.htmlTag])&&r!==o.div&&(i.markup=t.trim(i.markup)),i}function ve(e,t){var n=e+"s";a[n]=function r(o,i,s){var l,d,c,p=g.onStore[e];if(o&&typeof o===H&&!o.nodeType&&!o.markup&&!o.getTgt&&!("viewModel"===e&&o.getters||o.extend)){for(d in o)r(d,o[d],i);return i||a}return o&&""+o!==o&&(s=i,i=o,o=void 0),c=s?"viewModel"===e?s:s[n]=s[n]||{}:r,l=t.compile,void 0===i&&(i=l?o:c[o],o=void 0),null===i?o&&delete c[o]:(l&&((i=l.call(c,o,i,s,0)||{})._is=e),o&&(c[o]=i)),p&&p(o,i,s,l),i}}function we(e){v[e]=v[e]||function(t){return arguments.length?(m[e]=t,v):m[e]}}function _e(e){function t(t,n){this.tgt=e.getTgt(t,n),n.map=this}return l(e)&&(e={getTgt:e}),e.baseMap&&(e=ie(ie({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function be(e,t,n,r,o,a){var s,c,p,u,f,m,v,w=r,_="";if(!0===t?(n=t,t=void 0):typeof t!==H&&(t=void 0),(p=this.tag)?(this,u=(w=w||this.view)._getTmpl(p.template||this.tmpl),arguments.length||(e=p.contentCtx&&l(p.contentCtx)?e=p.contentCtx(e):w)):u=this,u){if(!r&&e&&"view"===e._is&&(w=e),w&&e===w&&(e=w.data),f=!w,C=C||f,f&&((t=t||{}).root=e),!C||h.useViews||u.useViews||w&&w!==i)_=xe(u,e,t,n,w,o,a,p);else{if(w?(m=w.data,v=w.index,w.index=z):(m=(w=i).data,w.data=e,w.ctx=t),d(e)&&!n)for(s=0,c=e.length;s<c;s++)w.index=s,w.data=e[s],_+=u.fn(e[s],w,g);else w.data=e,_+=u.fn(e,w,g);w.data=m,w.index=v}f&&(C=void 0)}return _}function xe(e,t,n,r,o,i,a,s){var l,c,p,u,f,m,h,v,w,_,b,x,y,$="";if(s&&(w=s.tagName,x=s.tagCtx,n=n?Ae(n,s.ctx):s.ctx,e===o.content?h=e!==o.ctx._wrp?o.ctx._wrp:void 0:e!==x.content?e===s.template?(h=x.tmpl,n._wrp=x.content):h=x.content||o.content:h=o.content,!1===x.props.link&&((n=n||{}).link=!1)),o&&(a=a||o._.onRender,(y=n&&!1===n.link)&&o._.nl&&(a=void 0),n=Ae(n,o.ctx),x=!s&&o.tag?o.tag.tagCtxs[o.tagElse]:x),(_=x&&x.props.itemVar)&&("~"!==_[0]&&$e("Use itemVar='~myItem'"),_=_.slice(1)),!0===i&&(m=!0,i=0),a&&s&&s._.noVws&&(a=void 0),v=a,!0===a&&(v=void 0,a=o._.onRender),b=n=e.helpers?Ae(e.helpers,n):n,d(t)&&!r)for((p=m?o:void 0!==i&&o||new fe(n,"array",o,t,e,i,a,h))._.nl=y,o&&o._.useKey&&(p._.bnd=!s||s._.bnd&&s,p.tag=s),l=0,c=t.length;l<c;l++)u=new fe(b,"item",p,t[l],e,(i||0)+l,a,p.content),_&&((u.ctx=ie({},b))[_]=g._cp(t[l],"#data",u)),f=e.fn(t[l],u,g),$+=p._.onRender?p._.onRender(f,u):f;else p=m?o:new fe(b,w||"data",o,t,e,i,a,h),_&&((p.ctx=ie({},b))[_]=g._cp(t,"#data",p)),p.tag=s,p._.nl=y,$+=e.fn(t,p,g);return s&&(p.tagElse=x.index,x.contentView=p),v?v($,p):$}function ye(e){throw new g.Err(e)}function $e(e){ye("Syntax error\n"+e)}function Ce(e,t,n,r,i){function a(t){(t-=h)&&y.push(e.substr(h,t).replace(E,"\\n"))}function s(t,n){t&&(t+="}}",$e((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}var l,d,c,p,u,f=m.allowCode||t&&t.allowCode||!0===v.allowCode,g=[],h=0,_=[],y=g,$=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+b),e=w+e+x),s(_[0]&&_[0][2].pop()[0]),e.replace(o,(function(o,l,d,u,g,m,v,w,b,x,C,k){(v&&l||b&&!d||w&&":"===w.slice(-1)||x)&&$e(o),m&&(g=":",u=B);var T,A,R,F=(l||n)&&[[]],N="",I="",O="",L="",D="",V="",U="",q="",H=!(b=b||n&&!i)&&!g;d=d||(w=w||"#data",g),a(k),h=k+o.length,v?f&&y.push(["*","\n"+w.replace(/^:/,"ret+= ").replace(j,"$1")+";\n"]):d?("else"===d&&(P.test(w)&&$e('For "{{else if expr}}" use "{{else expr}}"'),F=$[9]&&[[]],$[10]=e.substring($[10],k),A=$[11]||$[0]||$e("Mismatched: "+o),$=_.pop(),y=$[2],H=!0),w&&Ee(w.replace(E," "),F,t,n).replace(S,(function(e,t,n,r,o,i,a,s){return"this:"===r&&(i="undefined"),s&&(R=R||"@"===s[0]),r="'"+o+"':",a?(I+=n+i+",",L+="'"+s+"',"):n?(O+=r+"j._cp("+i+',"'+s+'",view),',V+=r+"'"+s+"',"):t?U+=i:("trigger"===o&&(q+=i),"lateRender"===o&&(T="false"!==s),N+=r+i+",",D+=r+"'"+s+"',",p=p||M.test(o)),""})).slice(0,-1),F&&F[0]&&F.pop(),c=[d,u||!!r||p||"",H&&[],Te(L||(":"===d?"'#data',":""),D,V),Te(I||(":"===d?"data,":""),N,O),U,q,T,R,F||0],y.push(c),H&&(_.push($),($=c)[10]=h,$[11]=A)):C&&(s(C!==$[0]&&C!==$[11]&&C,$[0]),$[10]=e.substring($[10],k),$=_.pop()),s(!$&&C),y=$[2]})),a(e.length),(h=g[g.length-1])&&s(""+h!==h&&+h[10]===h[10]&&h[0]),n){for(d=je(g,e,n),u=[],l=g.length;l--;)u.unshift(g[l][9]);ke(d,u)}else d=je(g,t);return d}function ke(e,t){var n,r,o=0,i=t.length;for(e.deps=[],e.paths=[];o<i;o++)for(n in e.paths.push(r=t[o]),r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}function Te(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function Ee(e,n,r,o){var i,a,s,l,d,c=n&&n[0],p={bd:c},u={0:p},f=0,m=0,v=0,w={},_=0,b={},x={},y={},$={0:0},C={0:""},k=0;return"@"===e[0]&&(e=e.replace(D,".")),s=(e+(r?" ":"")).replace(g.rPrm,(function(r,s,T,E,j,S,P,R,F,M,N,I,O,L,D,V,U,q,B,H,K){E&&!R&&(j=E+j),S=S||"",O=O||"",T=T||s||O,j=j||F,M&&(M=!/\)|]/.test(K[H-1]))&&(j=j.slice(1).split(".").join("^")),N=N||q||"";var J,z,Z,G,Q,W,X,ee=H;if(!d&&!l){if(P&&$e(e),U&&c){if(J=y[v-1],K.length-1>ee-(J||0)){if(J=t.trim(K.slice(J,ee+r.length)),z=a||u[v-1].bd,(Z=z[z.length-1])&&Z.prm){for(;Z.sb&&Z.sb.prm;)Z=Z.sb;G=Z.sb={path:Z.sb,bnd:Z.bnd}}else z.push(G={path:z.pop()});Z&&Z.sb===G&&(C[v]=C[v-1].slice(Z._cpPthSt)+C[v],C[v-1]=C[v-1].slice(0,Z._cpPthSt)),G._cpPthSt=$[v-1],G._cpKey=J,C[v]+=K.slice(k,H),k=H,G._cpfn=Y[J]=Y[J]||new Function("data,view,j","//"+J+"\nvar v;\nreturn ((v="+C[v]+("]"===V?")]":V)+")!=null?v:null);"),C[v-1]+=x[m]&&h.cache?'view.getCache("'+J.replace(A,"\\$&")+'"':C[v],G.prm=p.bd,G.bnd=G.bnd||G.path&&G.path.indexOf("^")>=0}C[v]=""}"["===N&&(N="[j._sq("),"["===T&&(T="[j._sq(")}return X=d?(d=!L)?r:O+'"':l?(l=!D)?r:O+'"':(T?(b[++m]=!0,w[m]=0,c&&(y[v++]=ee++,p=u[v]={bd:[]},C[v]="",$[v]=1),T):"")+(B?m?"":(f=K.slice(f,ee),(i?(i=a=!1,"\b"):"\b,")+f+(f=ee+r.length,c&&n.push(p.bd=[]),"\b")):R?(v&&$e(e),c&&n.pop(),i="_"+j,E,f=ee+r.length,c&&((c=p.bd=n[i]=[]).skp=!E),j+":"):j?j.split("^").join(".").replace(g.rPath,(function(e,t,r,s,l,d,u,f){if(Q="."===r,r&&(j=j.slice(t.length),/^\.?constructor$/.test(f||j)&&$e(e),Q||(e=(M?(o?"":"(ltOb.lt=ltOb.lt||")+"(ob=":"")+(s?'view.ctxPrm("'+s+'")':l?"view":"data")+(M?")===undefined"+(o?"":")")+'?"":view._getOb(ob,"':"")+(f?(d?"."+d:s||l?"":"."+r)+(u||""):(f=s?"":l?d||"":r,"")),e=t+("view.data"===(e+=f?"."+f:"").slice(0,9)?e.slice(5):e)+(M?(o?'"':'",ltOb')+(N?",1)":")"):"")),c)){if(z="_linkTo"===i?a=n._jsvto=n._jsvto||[]:p.bd,Z=Q&&z[z.length-1]){if(Z._cpfn){for(;Z.sb;)Z=Z.sb;Z.prm&&(Z.bnd&&(j="^"+j.slice(1)),Z.sb=j,Z.bnd=Z.bnd||"^"===j[0])}}else z.push(j);N&&!Q&&(y[v]=ee,$[v]=C[v].length)}return e}))+(N||S):S||(V?"]"===V?")]":")":I?(x[m]||$e(e),","):s?"":(d=L,l=D,'"'))),d||l||V&&(x[m]=!1,m--),c&&(d||l||(V&&(b[m+1]&&(p=u[--v],b[m+1]=!1),_=w[m+1]),N&&(w[m+1]=C[v].length+(T?1:0),(j||V)&&(p=u[++v]={bd:[]},b[m+1]=!0))),C[v]=(C[v]||"")+K.slice(k,H),k=H+r.length,d||l||((W=T&&b[m+1])&&(C[v-1]+=T,$[v-1]++),"("===N&&Q&&!G&&(C[v]=C[v-1].slice(_)+C[v],C[v-1]=C[v-1].slice(0,_))),C[v]+=W?X.slice(1):X),d||l||!N||(m++,j&&"("===N&&(x[m]=!0)),d||l||!q||(c&&(C[v]+=N),X+=N),X})),c&&(s=C[0]),!m&&s||$e(e)}function je(e,t,n){var r,o,i,a,s,l,d,c,p,u,g,v,w,_,b,x,y,$,C,k,T,A,S,P,R,F,M,N,I,O,L,D,V,U,q=0,H=h.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,K="",J={},z=e.length;for(""+t===t?(y=n?'data-link="'+t.replace(E," ").slice(1,-1)+'"':t,t=0):(y=t.tmplName||"unnamed",t.allowCode&&(J.allowCode=!0),t.debug&&(J.debug=!0),u=t.bnds,x=t.tmpls),r=0;r<z;r++)if(""+(o=e[r])===o)K+='+"'+o+'"';else if("*"===(i=o[0]))K+=";\n"+o[1]+"\nret=ret";else{if(a=o[1],k=!n&&o[2],V=o[3],U=v=o[4],s="\n\tparams:{args:["+V[0]+"],\n\tprops:{"+V[1]+"}"+(V[2]?",\n\tctx:{"+V[2]+"}":"")+"},\n\targs:["+U[0]+"],\n\tprops:{"+U[1]+"}"+(U[2]?",\n\tctx:{"+U[2]+"}":""),I=o[6],O=o[7],o[8]?(L="\nvar ob,ltOb={},ctxs=",D=";\nctxs.lt=ltOb.lt;\nreturn ctxs;"):(L="\nreturn ",D=""),T=o[10]&&o[10].replace(j,"$1"),(P="else"===i)?g&&g.push(o[9]):(M=o[5]||!1!==m.debugMode&&"undefined",u&&(g=o[9])&&(g=[g],q=u.push(1))),H=H||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===i)?a&&(i=a===B?">":a+i):(k&&(($=he(T,J)).tmplName=y+"/"+i,$.useViews=$.useViews||H,je(k,$),H=$.useViews,x.push($)),P||(C=i,H=H||i&&(!f[i]||!f[i].flow),S=K,K=""),A=(A=e[r+1])&&"else"===A[0]),N=M?";\ntry{\nret+=":"\n+",w="",_="",R&&(g||I||a&&a!==B||O)){if((F=new Function("data,view,j","// "+y+" "+ ++q+" "+i+L+"{"+s+"};"+D))._er=M,F._tag=i,F._bd=!!g,F._lr=O,n)return F;ke(F,g),p=!0,w=(b='c("'+a+'",view,')+q+",",_=")"}if(K+=R?(n?(M?"try{\n":"")+"return ":N)+(p?(p=void 0,H=c=!0,b+(F?(u[q-1]=F,q):"{"+s+"}")+")"):">"===i?(d=!0,"h("+v[0]+")"):(!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(l=!0,"\n{view:view,content:false,tmpl:"+(k?x.length:"false")+","+s+"},"),C&&!A){if(K="["+K.slice(0,-1)+"]",b='t("'+C+'",view,this,',n||g){if((K=new Function("data,view,j"," // "+y+" "+q+" "+C+L+K+D))._er=M,K._tag=C,g&&ke(u[q-1]=K,g),K._lr=O,n)return K;w=b+q+",undefined,",_=")"}K=S+N+b+(g&&q||K)+")",g=0,C=0}M&&!A&&(H=!0,K+=";\n}catch(e){ret"+(n?"urn ":"+=")+w+"j._err(e,view,"+M+")"+_+";}"+(n?"":"\nret=ret"))}K="// "+y+(J.debug?"\ndebugger;":"")+"\nvar v"+(l?",t=j._tag":"")+(c?",c=j._cnvt":"")+(d?",h=j._html":"")+(n?(o[8]?", ob":"")+";\n":',ret=""')+K+(n?"\n":";\nreturn ret;");try{K=new Function("data,view,j",K)}catch(e){$e("Compiled template code:\n\n"+K+'\n: "'+(e.message||e)+'"')}return t&&(t.fn=K,t.useViews=!!H),K}function Ae(e,t){return e&&e!==t?t?ie(ie({},t),e):e:t&&ie({},t)}function Se(e,n){var r,o,i,a=n.tag,s=n.props,c=n.params.props,p=s.filter,u=s.sort,f=!0===u,g=parseInt(s.step),m=s.reverse?-1:1;if(!d(e))return e;if(f||u&&""+u===u?((r=e.map((function(e,t){return{i:t,v:""+(e=f?e:le(e,u))===e?e.toLowerCase():e}}))).sort((function(e,t){return e.v>t.v?m:e.v<t.v?-m:0})),e=r.map((function(t){return e[t.i]}))):(u||m<0)&&!a.dataMap&&(e=e.slice()),l(u)&&(e=e.sort((function(){return u.apply(n,arguments)}))),m<0&&(!u||l(u))&&(e=e.reverse()),e.filter&&p&&(e=e.filter(p,n),n.tag.onFilter&&n.tag.onFilter(n)),c.sorted&&(r=u||m<0?e:e.slice(),a.sorted?t.observable(a.sorted).refresh(r):n.map.sorted=r),o=s.start,i=s.end,(c.start&&void 0===o||c.end&&void 0===i)&&(o=i=0),isNaN(o)&&isNaN(i)||(o=+o||0,i=void 0===i||i>e.length?e.length:+i,e=e.slice(o,i)),g>1){for(o=0,i=e.length,r=[];o<i;o+=g)r.push(e[o]);e=r}return c.paged&&a.paged&&$observable(a.paged).refresh(e),e}function Pe(e,n,r){var o=this.jquery&&(this[0]||ye("Unknown template")),i=o.getAttribute(K);return be.call(i&&t.data(o)[J]||c(o),e,n,r)}function Re(e){return U[e]||(U[e]="&#"+e.charCodeAt(0)+";")}function Fe(e,t){return q[t]||""}function Me(e){return null!=e?F.test(e)&&(""+e).replace(I,Re)||e:""}if(a={jsviews:k,sub:{rPath:/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,rPrm:/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(?:(\()\s*)?\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,View:fe,Err:oe,tmplFn:Ce,parse:Ee,extend:ie,extendCtx:Ae,syntaxErr:$e,onStore:{template:function(e,t){null===t?delete Z[e]:e&&(Z[e]=t)}},addSetting:we,settings:{allowCode:!1},advSet:re,_thp:te,_gm:ee,_tg:function(){},_cnvt:function(e,t,n,r){var o,i,a,s,l,d="number"==typeof n&&t.tmpl.bnds[n-1];void 0===r&&d&&d._lr&&(r="");void 0!==r?n=r={props:{},args:[r]}:d&&(n=d(t.data,t,g));if(d=d._bd&&d,e||d){if(o=(i=t._lc)&&i.tag,n.view=t,!o){if(o=ie(new g._tg,{_:{bnd:d,unlinked:!0,lt:n.lt},inline:!i,tagName:":",convert:e,onArrayChange:!0,flow:!0,tagCtx:n,tagCtxs:[n],_is:"tag"}),(s=n.args.length)>1)for(l=o.bindTo=[];s--;)l.unshift(s);i&&(i.tag=o,o.linkCtx=i),n.ctx=Ae(n.ctx,(i?i.view:t).ctx),te(o,n)}o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs()[0],o._er=r&&a}else a=n.args[0];return null!=(a=d&&t._.onRender?t._.onRender(a,t,o):a)?a:""},_tag:function(e,t,n,r,o,a){function s(e){var t=l[e];if(void 0!==t)for(t=d(t)?t:[t],v=t.length;v--;)I=t[v],isNaN(parseInt(I))||(t[v]=parseInt(I));return t||[0]}var l,c,u,f,m,h,v,w,_,b,x,y,$,C,k,T,E,j,A,S,P,R,F,M,I,O,L,D,V,U=0,q="",H=(t=t||i)._lc||!1,K=t.ctx,J=n||t.tmpl,z="number"==typeof r&&t.tmpl.bnds[r-1];"tag"===e._is?(e=(l=e).tagName,r=l.tagCtxs,l.template):(c=t.getRsc("tags",e)||ye("Unknown tag: {{"+e+"}} ")).template;void 0===a&&z&&(z._lr=c.lateRender&&!1!==z._lr||z._lr)&&(a="");void 0!==a?(q+=a,r=a=[{props:{},args:[],params:{props:{}}}]):z&&(r=z(t.data,t,g));for(h=r.length;U<h;U++)T=(b=r[U]).tmpl,(!H||!H.tag||U&&!H.tag.inline||l._er||T&&+T===T)&&(T&&J.tmpls&&(b.tmpl=b.content=J.tmpls[T-1]),b.index=U,b.ctxPrm=de,b.render=be,b.cvtArgs=ce,b.bndArgs=ue,b.view=t,b.ctx=Ae(Ae(b.ctx,c&&c.ctx),K)),(n=b.props.tmpl)&&(b.tmpl=t._getTmpl(n),b.content=b.content||b.tmpl),l?H&&H.fn._lr&&(E=!!l.init):(E=!!(l=new c._ctr).init,l.parent=m=K&&K.tag,l.tagCtxs=r,H&&(l.inline=!1,H.tag=l),l.linkCtx=H,(l._.bnd=z||H.fn)?(l._.ths=b.params.props.this,l._.lt=r.lt,l._.arrVws={}):l.dataBoundOnly&&ye(e+" must be data-bound:\n{^{"+e+"}}")),F=l.dataMap,b.tag=l,F&&r&&(b.map=r[U].map),l.flow||(x=b.ctx=b.ctx||{},u=l.parents=x.parentTags=K&&Ae(x.parentTags,K.parentTags)||{},m&&(u[m.tagName]=m),u[l.tagName]=x.tag=l,x.tagCtx=b);if(!(l._er=a)){for(te(l,r[0]),l.rendering={rndr:l.rendering},U=0;U<h;U++){if(R=(b=l.tagCtx=r[U]).props,l.ctx=b.ctx,!U){if(E&&(l.init(b,H,l.ctx),E=void 0),b.args.length||!1===b.argDefault||!1===l.argDefault||(b.args=S=[b.view.data],b.params.args=["#data"]),$=s("bindTo"),void 0!==l.bindTo&&(l.bindTo=$),void 0!==l.bindFrom?l.bindFrom=s("bindFrom"):l.bindTo&&(l.bindFrom=l.bindTo=$),C=l.bindFrom||$,L=$.length,O=C.length,l._.bnd&&(D=l.linkedElement)&&(l.linkedElement=D=d(D)?D:[D],L!==D.length&&ye("linkedElement not same length as bindTo")),(D=l.linkedCtxParam)&&(l.linkedCtxParam=D=d(D)?D:[D],O!==D.length&&ye("linkedCtxParam not same length as bindFrom/bindTo")),C)for(l._.fromIndex={},l._.toIndex={},w=O;w--;)for(I=C[w],v=L;v--;)I===$[v]&&(l._.fromIndex[v]=w,l._.toIndex[w]=v);H&&(H.attr=l.attr=H.attr||l.attr||H._dfAt),f=l.attr,l._.noVws=f&&f!==B}if(S=l.cvtArgs(U),l.linkedCtxParam)for(P=l.cvtArgs(U,1),v=O,V=l.constructor.prototype.ctx;v--;)(y=l.linkedCtxParam[v])&&(I=C[v],k=P[v],b.ctx[y]=g._cp(V&&void 0===k?V[y]:k,void 0!==k&&pe(b.params,I),b.view,l._.bnd&&{tag:l,cvt:l.convert,ind:v,tagElse:U}));(j=R.dataMap||F)&&(S.length||R.dataMap)&&((A=b.map)&&A.src===S[0]&&!o||(A&&A.src&&A.unmap(),j.map(S[0],b,A,!l._.bnd),A=b.map),S=[A.tgt]),_=void 0,l.render&&(_=l.render.apply(l,S),t.linked&&_&&!N.test(_)&&((n={links:[]}).render=n.fn=function(){return _},_=xe(n,t.data,void 0,!0,t,void 0,void 0,l))),S.length||(S=[t]),void 0===_&&(M=S[0],l.contentCtx&&(M=!0===l.contentCtx?t:l.contentCtx(M)),_=b.render(M,!0)||(o?void 0:"")),q=q?q+(_||""):void 0!==_?""+_:void 0}l.rendering=l.rendering.rndr}l.tagCtx=r[0],l.ctx=l.tagCtx.ctx,l._.noVws&&l.inline&&(q="text"===f?p.html(q):"");return z&&t._.onRender?t._.onRender(q,t,l):q},_er:ye,_err:function(e,t,n){var r=void 0!==n?l(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";m.onError&&void 0!==(n=m.onError.call(t.data,e,n&&r,t))&&(r=n);return t&&!t._lc?p.html(r):r},_cp:ne,_sq:function(e){return"constructor"===e&&$e(""),e}},settings:{delimiters:function e(t,n,r){if(!t)return m.delimiters;if(d(t))return e.apply(a,t);y=r?r[0]:y,/^(\W|_){5}$/.test(t+n+y)||ye("Invalid delimiters");return w=t[0],_=t[1],b=n[0],x=n[1],m.delimiters=[w+_,b+x,y],t="\\"+w+"(\\"+y+")?\\"+_,n="\\"+b+"\\"+x,o="(?:(\\w+(?=[\\/\\s\\"+b+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+b+"]|\\"+b+"(?!\\"+x+"))*?)",g.rTag="(?:"+o+")",o=new RegExp("(?:"+t+o+"(\\/)?|\\"+w+"(\\"+y+")?\\"+_+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+n,"g"),g.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+t+".*"+n),v},advanced:function(e){return e?(ie(h,e),g.advSet(),v):h}},map:_e},(oe.prototype=new Error).constructor=oe,ae.depends=function(){return[this.get("item"),"index"]},se.depends="index",fe.prototype={get:function(e,t){t||!0===e||(t=e,e=void 0);var n,r,o,i,a=this,s="root"===t;if(e){if(!(i=t&&a.type===t&&a))if(n=a.views,a._.useKey){for(r in n)if(i=t?n[r].get(e,t):n[r])break}else for(r=0,o=n.length;!i&&r<o;r++)i=t?n[r].get(e,t):n[r]}else if(s)i=a.root;else if(t)for(;a&&!i;)i=a.type===t?a:void 0,a=a.parent;else i=a.parent;return i||void 0},getIndex:se,ctxPrm:de,getRsc:function(e,t){var n,r,o=this;if(""+t===t){for(;void 0===n&&o;)n=(r=o.tmpl&&o.tmpl[e])&&r[t],o=o.parent;return n||a[e][t]}},_getTmpl:function(e){return e&&(e.fn?e:this.getRsc("templates",e)||c(e))},_getOb:le,getCache:function(e){return m._cchCt>this.cache._ct&&(this.cache={_ct:m._cchCt}),void 0!==this.cache[e]?this.cache[e]:this.cache[e]=Y[e](this.data,this,g)},_is:"view"},g=a.sub,v=a.settings,!(G||t&&t.render)){for(r in W)ve(r,W[r]);if(p=a.converters,u=a.helpers,f=a.tags,g._tg.prototype={baseApply:function(e){return this.base.apply(this,e)},cvtArgs:ce,bndArgs:ue,ctxPrm:de},i=g.topView=new fe,t){if(t.fn.render=Pe,s=t.expando,t.observable){if(k!==(k=t.views.jsviews))throw"jquery.observable.js requires jsrender.js "+k;ie(g,t.views.sub),a.map=t.views.map}}else t={},n&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},g._jq=function(e){e!==t&&(ie(e,t),(t=e).fn.render=Pe,delete t.jsrender,s=t.expando)},t.jsrender=k;for($ in(m=g.settings).allowCode=!1,l=t.isFunction,t.render=Z,t.views=a,t.templates=c=a.templates,m)we($);(v.debugMode=function(e){return void 0===e?m.debugMode:(m._clFns&&m._clFns(),m.debugMode=e,m.onError=e+""===e?function(){return e}:l(e)?e:void 0,v)})(!1),h=m.advanced={cache:!0,useViews:!1,_jsv:!1},f({if:{render:function(e){var t=this,n=t.tagCtx;return t.rendering.done||!e&&(n.args.length||!n.index)?"":(t.rendering.done=!0,void(t.selected=n.index))},contentCtx:!0,flow:!0},for:{sortDataMap:_e(Se),init:function(e,t){this.setDataMap(this.tagCtxs)},render:function(e){var t,n,r,o,i,a=this,s=a.tagCtx,l=!1===s.argDefault,c=s.props,p=l||s.args.length,u="",f=0;if(!a.rendering.done){if(t=p?e:s.view.data,l)for(l=c.reverse?"unshift":"push",o=+c.end,i=+c.step||1,t=[],r=+c.start||0;(o-r)*i>0;r+=i)t[l](r);void 0!==t&&(n=d(t),u+=s.render(t,!p||c.noIteration),f+=n?t.length:1),(a.rendering.done=f)&&(a.selected=s.index)}return u},setDataMap:function(e){for(var t,n,r,o=e.length;o--;)n=(t=e[o]).props,r=t.params.props,t.argDefault=void 0===n.end||t.args.length>0,n.dataMap=!1!==t.argDefault&&d(t.args[0])&&(r.sort||r.start||r.end||r.step||r.filter||r.reverse||n.sort||n.start||n.end||n.step||n.filter||n.reverse)&&this.sortDataMap},flow:!0},props:{baseTag:"for",dataMap:_e((function(e,n){var r,o,i=n.map,a=i&&i.propsArr;if(!a){if(a=[],typeof e===H||l(e))for(r in e)o=e[r],r===s||!e.hasOwnProperty(r)||n.props.noFunctions&&t.isFunction(o)||a.push({key:r,prop:o});i&&(i.propsArr=i.options&&a)}return Se(a,n)})),init:re,flow:!0},include:{flow:!0},"*":{render:ne,flow:!0},":*":{render:ne,flow:!0},dbg:u.dbg=p.dbg=function(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(e){}return this.base?this.baseApply(arguments):e}}),p({html:Me,attr:Me,encode:function(e){return""+e===e?e.replace(O,Re):e},unencode:function(e){return""+e===e?e.replace(L,Fe):e},url:function(e){return null!=e?encodeURI(""+e):null===e?e:""}})}return m=g.settings,d=(t||G).isArray,v.delimiters("{{","}}","^"),Q&&G.views.sub._jq(t),t||G}),window)}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__={};(()=>{"use strict";var jsrender=__webpack_require__(2743),csrfToken=$('meta[name="csrf-token"]').attr("content");function initAllComponents(){select2initialize(),refreshCsrfToken(),alertInitialize(),modalInputFocus(),inputFocus(),IOInitImageComponent(),IOInitSidebar(),togglePassword(),vcardTableCardRemove(),tooltip(),frontTestimonials()}function tooltip(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)}))}function togglePassword(){$('[data-toggle="password"]').each((function(){var e=$(this),t=$(this).parent().find(".input-icon");t.css("cursor","pointer").addClass("input-password-hide"),t.on("click",(function(){t.hasClass("input-password-hide")?(t.removeClass("input-password-hide").addClass("input-password-show"),t.find(".bi").removeClass("bi-eye-slash-fill").addClass("bi-eye-fill"),e.attr("type","text")):(t.removeClass("input-password-show").addClass("input-password-hide"),t.find(".bi").removeClass("bi-eye-fill").addClass("bi-eye-slash-fill"),e.attr("type","password"))}))}))}function alertInitialize(){$(".alert").delay(5e3).slideUp(300)}function refreshCsrfToken(){csrfToken=$('meta[name="csrf-token"]').attr("content"),$.ajaxSetup({headers:{"X-CSRF-TOKEN":csrfToken}})}function select2initialize(){$('[data-control="select2"]').each((function(){$(this).select2()}))}document.addEventListener("turbo:load",initAllComponents),document.addEventListener("click",(function(e){var t=$(e.target).closest('.show[data-ic-dropdown-btn="true"]'),n=$(e.target).closest('.show[data-ic-dropdown="true"]');t.length>0||n.length>0||($('[data-ic-dropdown-btn="true"]').removeClass("show"),$('[data-ic-dropdown="true"]').removeClass("show"))})),document.addEventListener("livewire:load",(function(){window.livewire.hook("message.processed",(function(){$('[data-control="select2"]').each((function(){$(this).select2()}))}))}));var inputFocus=function(){$('input:text:not([readonly="readonly"]):not([name="search"]):not(.front-input)').first().focus()},modalInputFocus=function(){$((function(){$(".modal").on("shown.bs.modal",(function(){$(this).find("input:text")[0]&&$(this).find("input:text")[0].focus()}))}))};function deleteItemAjax(url,header){var callFunction=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;$.ajax({url,type:"DELETE",dataType:"json",success:function success(obj){obj.success&&(window.livewire.emit("resetPageTable"),livewire.emit("refresh")),swal({icon:"success",title:Lang.get("messages.common.deleted")+" !",text:header+" "+Lang.get("messages.common.has_been_deleted"),timer:2e3}),callFunction&&eval(callFunction)},error:function(e){swal({title:"Error",icon:"error",text:e.responseJSON.message,type:"error",timer:4e3})}})}function isEmailEditProfile(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function vcardTableCardRemove(){listenClick("#vcards-tab",(function(){$(".card-check").removeClass("card"),$(".card-body-check").removeClass("card-body")})),listenClick("#overview-tab",(function(){$(".card-check").addClass("card"),$(".card-body-check").addClass("card-body")}))}function frontTestimonials(){$(".pricing-carousel").length>0&&($("#toogler-icon").click((function(){$(this).toggleClass("open")})),$(".pricing-carousel").slick({dots:!0,centerMode:!0,centerPadding:"0",slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:1,centerMode:!0,centerPadding:"250px"}},{breakpoint:1200,settings:{slidesToShow:1,centerMode:!0,centerPadding:"150px"}},{breakpoint:992,settings:{slidesToShow:1,centerMode:!0,centerPadding:"100px"}},{breakpoint:768,settings:{slidesToShow:1,centerMode:!0,centerPadding:"50px",arrows:!1}},{breakpoint:576,settings:{slidesToShow:1,arrows:!1}}]}),$(".testimonial-carousel").slick({autoplaySpeed:1e3,speed:600,draggable:!0,infinite:!0,dots:!0,centerMode:!0,centerPadding:"0",slidesToShow:1,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1199,settings:{slidesToShow:1,centerMode:!0}},{breakpoint:992,settings:{slidesToShow:1}},{breakpoint:768,settings:{slidesToShow:1,centerMode:!0}},{breakpoint:576,settings:{slidesToShow:1}}]}))}$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(document).on("select2:open",(function(){document.querySelector(".select2-search__field").focus()})),toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},window.resetModalForm=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;$(e)[0].reset(),$("select.select2Selector").each((function(e,t){var n="#"+$(this).attr("id");$(n).val(""),$(n).trigger("change")})),$(t).hide()},window.printErrorMessage=function(e,t){$(e).show().html(""),$(e).text(t.responseJSON.message)},window.manageAjaxErrors=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"editValidationErrorsBox";404==e.status?toastr.error(e.responseJSON.message):printErrorMessage("#"+t,e)},window.displaySuccessMessage=function(e){toastr.success(e,Lang.get("messages.common.successful"))},window.displayErrorMessage=function(e){toastr.error(e,Lang.get("messages.common.error"))},window.deleteItem=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;swal({title:Lang.get("messages.common.delete")+" !",text:Lang.get("messages.common.are_you_sure")+' "'+t+'" ?',buttons:{confirm:Lang.get("messages.common.yes"),cancel:Lang.get("messages.common.no")},reverseButtons:!0,icon:sweetAlertIcon}).then((function(r){r&&deleteItemAjax(e,t,n)}))},window.format=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD-MMM-YYYY";return moment(e).format(t)},window.processingBtn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=$(e).find(t);"loading"===n?r.button("loading"):r.button("reset")},window.prepareTemplateRender=function(e,t){return jsrender.templates(e).render(t)},window.changeImg=function(e,t,n,r){isValidFile($(e),t)?displayPhoto(e,n):$("#servicePreview").attr("src",r)},window.isValidFile=function(e,t){var n=$(e).val().split(".").pop().toLowerCase();return-1==$.inArray(n,["png","jpg","jpeg"])?($(e).val(""),$(t).removeClass("d-none"),$(t).html("The image must be a file of type: jpeg, jpg, png.").show(),$(t).delay(5e3).slideUp(300),!1):($(t).hide(),!0)},window.displayPhoto=function(e,t){var n=!0;if(e.files&&e.files[0]){var r=new FileReader;r.onload=function(e){var r=new Image;r.src=e.target.result,r.onload=function(){$(t).attr("src",e.target.result),n=!0}},n&&(r.readAsDataURL(e.files[0]),$(t).show())}},window.removeCommas=function(e){return e.replace(/,/g,"")},window.DatetimepickerDefaults=function(e){return $.extend({},{sideBySide:!0,ignoreReadonly:!0,icons:{close:"fa fa-times",time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-clock-o",clear:"fa fa-trash-o"}},e)},window.isEmpty=function(e){return null==e||""===e},window.screenLock=function(){$("#overlay-screen-lock").show(),$("body").css({"pointer-events":"none",opacity:"0.6"})},window.screenUnLock=function(){$("body").css({"pointer-events":"auto",opacity:"1"}),$("#overlay-screen-lock").hide()},window.onload=function(){window.startLoader=function(){$(".infy-loader").show()},window.stopLoader=function(){$(".infy-loader").hide()},stopLoader()},$(document).ready((function(){$(document).find(".nav-item.dropdown ul li").hasClass("active")&&($(document).find(".nav-item.dropdown ul li.active").parent("ul").css("display","block"),$(document).find(".nav-item.dropdown ul li.active").parent("ul").parent("li").addClass("active"))})),window.urlValidation=function(e,t){return!(""!=e&&!e.match(t))},listenClick(".languageSelection",(function(){var e=$(this).data("prefix-value");$.ajax({type:"POST",url:"/change-language",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{languageName:e},success:function(){location.reload()}})})),$(window).width()>992&&$(".no-hover").on("click",(function(){$(this).toggleClass("open")})),$(document).on("click","#readNotification",(function(e){e.preventDefault();var t=$(this).data("id"),n=$(this);$.ajax({type:"POST",url:readNotification+"/"+t+"/read",data:{notificationId:t},success:function(){n.remove(),0==document.getElementsByClassName("readNotification").length&&($("#readAllNotification").addClass("d-none"),$(".empty-state").removeClass("d-none"),$(".notification-toggle").removeClass("beep"))},error:function(e){manageAjaxErrors(e)}})})),$("#register").on("click",(function(e){e.preventDefault(),$(".open #dropdownLanguage").trigger("click"),$(".open #dropdownLogin").trigger("click")})),$("#language").on("click",(function(e){e.preventDefault(),$(".open #dropdownRegister").trigger("click"),$(".open #dropdownLogin").trigger("click")})),$("#login").on("click",(function(e){e.preventDefault(),$(".open #dropdownRegister").trigger("click"),$(".open #dropdownLanguage").trigger("click")})),window.preparedTemplate=function(){var e=$("#actionTemplate").html();window.preparedTemplate=Handlebars.compile(e)},$(document).delegate("textarea","keydown",(function(e){if(9===(e.keyCode||e.which)){e.preventDefault();var t=this.selectionStart,n=this.selectionEnd,r=$(this).val(),o=r.substring(t,n);$(this).val(r.substring(0,t)+"\t"+o.replace(/\n/g,"\n\t")+r.substring(n)),this.selectionStart=this.selectionEnd=t+1}})),$(document).ready((function(){$("#languageDropdown").click((function(e){e.stopPropagation()}))})),listenSubmit("#userProfileEditForm",(function(){return""==$.trim($("#editProfileFirstName").val())?(displayErrorMessage(Lang.get("messages.placeholder.first_name_required")),!1):""==$.trim($("#editProfileLastName").val())?(displayErrorMessage(Lang.get("messages.placeholder.last_name_required")),!1):isEmailEditProfile($("#isEmailEditProfile").val())?!!$("#userProfileEditForm").find("#error-msg").hasClass("d-none")&&void 0:(displayErrorMessage(Lang.get("messages.placeholder.enter_valid_email")),!1)})),window.openDropdownManually=function(e,t){e.hasClass("show")?(e.removeClass("show"),t.removeClass("show")):(e.addClass("show"),t.addClass("show"))},window.hideDropdownManually=function(e,t){e.removeClass("show"),t.removeClass("show")},window.checkPhpFile=function(e,t){var n=$(e).val().split(".").pop().toLowerCase();return-1!==$.inArray(n,["php"])?($(e).val(""),$(t).removeClass("d-none"),$(t).html("PHP file is not valid type for attachment").show(),$(t).delay(5e3).slideUp(300),!1):($(t).hide(),!0)},window.downloadVcard=function(e,t){$(".fa-download").addClass("d-none"),$(".spinner-border").removeClass("d-none"),$.ajax({url:"/vcards/"+t,type:"GET",success:function(t){if(t.success){var n,r=t.data,o=null!==(n=r.social_link.website)&&void 0!==n?n:appUrl+"/"+r.url_alias,i="BEGIN:VCARD\nVERSION:3.0\n";isEmpty(r.first_name)&&isEmpty(r.last_name)||(i+="N;CHARSET=UTF-8:"+r.last_name+";"+r.first_name+";;;\n"),isEmpty(r.dob)||(i+="BDAY;CHARSET=UTF-8:"+new Date(r.dob)+"\n"),isEmpty(r.email)||(i+="EMAIL;CHARSET=UTF-8:"+r.email+"\n"),isEmpty(r.alternative_email)||(i+="EMAIL;CHARSET=UTF-8:"+r.alternative_email+"\n"),isEmpty(r.job_title)||(i+="TITLE;CHARSET=UTF-8:"+r.job_title+"\n"),isEmpty(r.company)||(i+="ORG;CHARSET=UTF-8:"+r.company+"\n"),isEmpty(r.region_code)||isEmpty(r.phone)||(i+="TEL;TYPE=WORK,VOICE:+"+r.region_code+" "+r.phone+"\n"),isEmpty(r.region_code)||isEmpty(r.alternative_phone)||(i+="TEL;TYPE=WORK,VOICE:+"+r.alternative_region_code+" "+r.alternative_phone+"\n"),isEmpty(r.url_alias)||(i+="URL;CHARSET=UTF-8:"+o+"\n"),isEmpty(r.description)||(i+="NOTE;CHARSET=UTF-8:"+r.description+"\n"),isEmpty(r.location)||(i+="ADR;CHARSET=UTF-8:"+r.location+"\n"),i+="PHOTO;ENCODING=BASE64;TYPE="+r.profile_url.split(".").pop().toUpperCase()+":"+r.profile_url_base64+"\n",i+="REV:"+moment().toISOString()+"\n",i+="END:VCARD";var a=$("<a />");a.attr("download",e),a.attr("href","data:text/vcard;charset=UTF-8,"+encodeURI(i)),$("body").append(a),a[0].click(),$("body").remove(a)}$(".download-icon").removeClass("d-none"),$(".spinner-border").addClass("d-none")},error:function(e){displayError("#enquiryError",e.responseJSON.message)}})},window.allowAlphaNumeric=function(e){e.value=e.value.toUpperCase().split(/[^a-zA-Z0-9_-]/).join("")},window.getCurrencyAmount=function(e,t){var n=t+""+e;return 1==currencyAfterAmount&&(n=e+""+t),n}})()})();