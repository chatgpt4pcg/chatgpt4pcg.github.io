(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{1679:function(e,t,r){var n;!function(i){"use strict";var o,l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,s=Math.ceil,u=Math.floor,c="[BigNumber Error] ",f=c+"Number primitive has more than 15 significant digits: ",a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function h(e){var t=0|e;return e>0||e===t?t:t-1}function d(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(r=14-(t=e[n++]+"").length;r--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function p(e,t){var r,n,i=e.c,o=t.c,l=e.s,s=t.s,u=e.e,c=t.e;if(!l||!s)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-s:l;if(l!=s)return l;if(r=l<0,n=u==c,!i||!o)return n?0:!i^r?1:-1;if(!n)return u>c^r?1:-1;for(l=0,s=(u=i.length)<(c=o.length)?u:c;l<s;l++)if(i[l]!=o[l])return i[l]>o[l]^r?1:-1;return u==c?0:u>c^r?1:-1}function g(e,t,r,n){if(e<t||e>r||e!==u(e))throw Error(c+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var t=e.c.length-1;return h(e.e/14)==t&&e.c[t]%2!=0}function _(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function m(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(n=e.length,++t>n){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(o=function e(t){var r,n,i,o,y,v,T,O,b,N=G.prototype={constructor:G,toString:null,valueOf:null},B=new G(1),E=20,I=4,S=-7,k=21,x=-1e7,P=1e7,L=!1,R=1,C=0,A={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},D="0123456789abcdefghijklmnopqrstuvwxyz",U=!0;function G(e,t){var r,n,i,o,s,c,a,h,d=this;if(!(d instanceof G))return new G(e,t);if(null==t){if(e&&!0===e._isBigNumber){d.s=e.s,!e.c||e.e>P?d.c=d.e=null:e.e<x?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice());return}if((c="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,s=e;s>=10;s/=10,o++);o>P?d.c=d.e=null:(d.e=o,d.c=[e]);return}h=String(e)}else{if(!l.test(h=String(e)))return b(d,h,c);d.s=45==h.charCodeAt(0)?(h=h.slice(1),-1):1}(o=h.indexOf("."))>-1&&(h=h.replace(".","")),(s=h.search(/e/i))>0?(o<0&&(o=s),o+=+h.slice(s+1),h=h.substring(0,s)):o<0&&(o=h.length)}else{if(g(t,2,D.length,"Base"),10==t&&U)return W(d=new G(e),E+d.e+1,I);if(h=String(e),c="number"==typeof e){if(0*e!=0)return b(d,h,c,t);if(d.s=1/e<0?(h=h.slice(1),-1):1,G.DEBUG&&h.replace(/^0\.0*|\./,"").length>15)throw Error(f+e)}else d.s=45===h.charCodeAt(0)?(h=h.slice(1),-1):1;for(r=D.slice(0,t),o=s=0,a=h.length;s<a;s++)if(0>r.indexOf(n=h.charAt(s))){if("."==n){if(s>o){o=a;continue}}else if(!i&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){i=!0,s=-1,o=0;continue}return b(d,String(e),c,t)}c=!1,(o=(h=O(h,t,10,d.s)).indexOf("."))>-1?h=h.replace(".",""):o=h.length}for(s=0;48===h.charCodeAt(s);s++);for(a=h.length;48===h.charCodeAt(--a););if(h=h.slice(s,++a)){if(a-=s,c&&G.DEBUG&&a>15&&(e>9007199254740991||e!==u(e)))throw Error(f+d.s*e);if((o=o-s-1)>P)d.c=d.e=null;else if(o<x)d.c=[d.e=0];else{if(d.e=o,d.c=[],s=(o+1)%14,o<0&&(s+=14),s<a){for(s&&d.c.push(+h.slice(0,s)),a-=14;s<a;)d.c.push(+h.slice(s,s+=14));s=14-(h=h.slice(s)).length}else s-=a;for(;s--;h+="0");d.c.push(+h)}}else d.c=[d.e=0]}function M(e,t,r,n){var i,o,l,s,u;if(null==r?r=I:g(r,0,8),!e.c)return e.toString();if(i=e.c[0],l=e.e,null==t)u=d(e.c),u=1==n||2==n&&(l<=S||l>=k)?_(u,l):m(u,l,"0");else if(o=(e=W(new G(e),t,r)).e,s=(u=d(e.c)).length,1==n||2==n&&(t<=o||o<=S)){for(;s<t;u+="0",s++);u=_(u,o)}else if(t-=l,u=m(u,o,"0"),o+1>s){if(--t>0)for(u+=".";t--;u+="0");}else if((t+=o-s)>0)for(o+1==s&&(u+=".");t--;u+="0");return e.s<0&&i?"-"+u:u}function H(e,t){for(var r,n,i=1,o=new G(e[0]);i<e.length;i++)(n=new G(e[i])).s&&(r=p(o,n))!==t&&(0!==r||o.s!==t)||(o=n);return o}function j(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+14*r-1)>P?e.c=e.e=null:r<x?e.c=[e.e=0]:(e.e=r,e.c=t),e}function W(e,t,r,n){var i,o,l,c,f,h,d,p=e.c;if(p){e:{for(i=1,c=p[0];c>=10;c/=10,i++);if((o=t-i)<0)o+=14,l=t,d=u((f=p[h=0])/a[i-l-1]%10);else if((h=s((o+1)/14))>=p.length){if(n){for(;p.length<=h;p.push(0));f=d=0,i=1,o%=14,l=o-14+1}else break e}else{for(i=1,f=c=p[h];c>=10;c/=10,i++);o%=14,d=(l=o-14+i)<0?0:u(f/a[i-l-1]%10)}if(n=n||t<0||null!=p[h+1]||(l<0?f:f%a[i-l-1]),n=r<4?(d||n)&&(0==r||r==(e.s<0?3:2)):d>5||5==d&&(4==r||n||6==r&&(o>0?l>0?f/a[i-l]:0:p[h-1])%10&1||r==(e.s<0?8:7)),t<1||!p[0])return p.length=0,n?(t-=e.e+1,p[0]=a[(14-t%14)%14],e.e=-t||0):p[0]=e.e=0,e;if(0==o?(p.length=h,c=1,h--):(p.length=h+1,c=a[14-o],p[h]=l>0?u(f/a[i-l]%a[l])*c:0),n)for(;;){if(0==h){for(o=1,l=p[0];l>=10;l/=10,o++);for(l=p[0]+=c,c=1;l>=10;l/=10,c++);o!=c&&(e.e++,1e14==p[0]&&(p[0]=1));break}if(p[h]+=c,1e14!=p[h])break;p[h--]=0,c=1}for(o=p.length;0===p[--o];p.pop());}e.e>P?e.c=e.e=null:e.e<x&&(e.c=[e.e=0])}return e}function z(e){var t,r=e.e;return null===r?e.toString():(t=d(e.c),t=r<=S||r>=k?_(t,r):m(t,r,"0"),e.s<0?"-"+t:t)}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var t,r;if(null!=e){if("object"==typeof e){if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(g(r=e[t],0,1e9,t),E=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(g(r=e[t],0,8,t),I=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(g(r[0],-1e9,0,t),g(r[1],0,1e9,t),S=r[0],k=r[1]):(g(r,-1e9,1e9,t),S=-(k=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)g(r[0],-1e9,-1,t),g(r[1],1,1e9,t),x=r[0],P=r[1];else if(g(r,-1e9,1e9,t),r)x=-(P=r<0?-r:r);else throw Error(c+t+" cannot be zero: "+r)}if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))L=r;else throw L=!r,Error(c+"crypto unavailable")}else L=r}else throw Error(c+t+" not true or false: "+r)}if(e.hasOwnProperty(t="MODULO_MODE")&&(g(r=e[t],0,9,t),R=r),e.hasOwnProperty(t="POW_PRECISION")&&(g(r=e[t],0,1e9,t),C=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))A=r;else throw Error(c+t+" not an object: "+r)}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(c+t+" invalid: "+r);U="0123456789"==r.slice(0,10),D=r}}else throw Error(c+"Object expected: "+e)}return{DECIMAL_PLACES:E,ROUNDING_MODE:I,EXPONENTIAL_AT:[S,k],RANGE:[x,P],CRYPTO:L,MODULO_MODE:R,POW_PRECISION:C,FORMAT:A,ALPHABET:D}},G.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!G.DEBUG)return!0;var t,r,n=e.c,i=e.e,o=e.s;e:if("[object Array]"==({}).toString.call(n)){if((1===o||-1===o)&&i>=-1e9&&i<=1e9&&i===u(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((t=(i+1)%14)<1&&(t+=14),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=1e14||r!==u(r))break e;if(0!==r)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(c+"Invalid BigNumber: "+e)},G.maximum=G.max=function(){return H(arguments,-1)},G.minimum=G.min=function(){return H(arguments,1)},G.random=(r=9007199254740992*Math.random()&2097151?function(){return u(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,n,i,o,l,f=0,h=[],d=new G(B);if(null==e?e=E:g(e,0,1e9),o=s(e/14),L){if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));f<o;)(l=131072*t[f]+(t[f+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),t[f]=n[0],t[f+1]=n[1]):(h.push(l%1e14),f+=2);f=o/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(o*=7);f<o;)(l=(31&t[f])*281474976710656+1099511627776*t[f+1]+4294967296*t[f+2]+16777216*t[f+3]+(t[f+4]<<16)+(t[f+5]<<8)+t[f+6])>=9e15?crypto.randomBytes(7).copy(t,f):(h.push(l%1e14),f+=7);f=o/7}else throw L=!1,Error(c+"crypto unavailable")}if(!L)for(;f<o;)(l=r())<9e15&&(h[f++]=l%1e14);for(o=h[--f],e%=14,o&&e&&(l=a[14-e],h[f]=u(o/l)*l);0===h[f];h.pop(),f--);if(f<0)h=[i=0];else{for(i=-1;0===h[0];h.splice(0,1),i-=14);for(f=1,l=h[0];l>=10;l/=10,f++);f<14&&(i-=14-f)}return d.e=i,d.c=h,d}),G.sum=function(){for(var e=1,t=arguments,r=new G(t[0]);e<t.length;)r=r.plus(t[e++]);return r},O=function(){var e="0123456789";function t(e,t,r,n){for(var i,o,l=[0],s=0,u=e.length;s<u;){for(o=l.length;o--;l[o]*=t);for(l[0]+=n.indexOf(e.charAt(s++)),i=0;i<l.length;i++)l[i]>r-1&&(null==l[i+1]&&(l[i+1]=0),l[i+1]+=l[i]/r|0,l[i]%=r)}return l.reverse()}return function(r,n,i,o,l){var s,u,c,f,a,h,p,g,w=r.indexOf("."),_=E,y=I;for(w>=0&&(f=C,C=0,r=r.replace(".",""),h=(g=new G(n)).pow(r.length-w),C=f,g.c=t(m(d(h.c),h.e,"0"),10,i,e),g.e=g.c.length),c=f=(p=t(r,n,i,l?(s=D,e):(s=e,D))).length;0==p[--f];p.pop());if(!p[0])return s.charAt(0);if(w<0?--c:(h.c=p,h.e=c,h.s=o,p=(h=T(h,g,_,y,i)).c,a=h.r,c=h.e),w=p[u=c+_+1],f=i/2,a=a||u<0||null!=p[u+1],a=y<4?(null!=w||a)&&(0==y||y==(h.s<0?3:2)):w>f||w==f&&(4==y||a||6==y&&1&p[u-1]||y==(h.s<0?8:7)),u<1||!p[0])r=a?m(s.charAt(1),-_,s.charAt(0)):s.charAt(0);else{if(p.length=u,a)for(--i;++p[--u]>i;)p[u]=0,u||(++c,p=[1].concat(p));for(f=p.length;!p[--f];);for(w=0,r="";w<=f;r+=s.charAt(p[w++]));r=m(r,c,s.charAt(0))}return r}}(),T=function(){function e(e,t,r){var n,i,o,l,s=0,u=e.length,c=t%1e7,f=t/1e7|0;for(e=e.slice();u--;)n=f*(o=e[u]%1e7)+(l=e[u]/1e7|0)*c,s=((i=c*o+n%1e7*1e7+s)/r|0)+(n/1e7|0)+f*l,e[u]=i%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,n){var i,o;if(r!=n)o=r>n?1:-1;else for(i=o=0;i<r;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,l,s){var c,f,a,d,p,g,w,_,m,y,v,T,O,b,N,B,E,I=n.s==i.s?1:-1,S=n.c,k=i.c;if(!S||!S[0]||!k||!k[0])return new G(n.s&&i.s&&(S?!k||S[0]!=k[0]:k)?S&&0==S[0]||!k?0*I:I/0:NaN);for(m=(_=new G(I)).c=[],I=o+(f=n.e-i.e)+1,s||(s=1e14,f=h(n.e/14)-h(i.e/14),I=I/14|0),a=0;k[a]==(S[a]||0);a++);if(k[a]>(S[a]||0)&&f--,I<0)m.push(1),d=!0;else{for(b=S.length,B=k.length,a=0,I+=2,(p=u(s/(k[0]+1)))>1&&(k=e(k,p,s),S=e(S,p,s),B=k.length,b=S.length),O=B,v=(y=S.slice(0,B)).length;v<B;y[v++]=0);E=[0].concat(E=k.slice()),N=k[0],k[1]>=s/2&&N++;do{if(p=0,(c=t(k,y,B,v))<0){if(T=y[0],B!=v&&(T=T*s+(y[1]||0)),(p=u(T/N))>1)for(p>=s&&(p=s-1),w=(g=e(k,p,s)).length,v=y.length;1==t(g,y,w,v);)p--,r(g,B<w?E:k,w,s),w=g.length,c=1;else 0==p&&(c=p=1),w=(g=k.slice()).length;if(w<v&&(g=[0].concat(g)),r(y,g,v,s),v=y.length,-1==c)for(;1>t(k,y,B,v);)p++,r(y,B<v?E:k,v,s),v=y.length}else 0===c&&(p++,y=[0]);m[a++]=p,y[0]?y[v++]=S[O]||0:(y=[S[O]],v=1)}while((O++<b||null!=y[0])&&I--);d=null!=y[0],m[0]||m.splice(0,1)}if(1e14==s){for(a=1,I=m[0];I>=10;I/=10,a++);W(_,o+(_.e=a+14*f-1)+1,l,d)}else _.e=f,_.r=+d;return _}}(),n=/^(-?)0([xbo])(?=\w[\w.]*$)/i,i=/^([^.]+)\.$/,o=/^\.([^.]+)$/,y=/^-?(Infinity|NaN)$/,v=/^\s*\+(?=[\w.])|^\s+|\s+$/g,b=function(e,t,r,l){var s,u=r?t:t.replace(v,"");if(y.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!r&&(u=u.replace(n,function(e,t,r){return s="x"==(r=r.toLowerCase())?16:"b"==r?2:8,l&&l!=s?e:t}),l&&(s=l,u=u.replace(i,"$1").replace(o,"0.$1")),t!=u))return new G(u,s);if(G.DEBUG)throw Error(c+"Not a"+(l?" base "+l:"")+" number: "+t);e.s=null}e.c=e.e=null},N.absoluteValue=N.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},N.comparedTo=function(e,t){return p(this,new G(e,t))},N.decimalPlaces=N.dp=function(e,t){var r,n,i;if(null!=e)return g(e,0,1e9),null==t?t=I:g(t,0,8),W(new G(this),e+this.e+1,t);if(!(r=this.c))return null;if(n=((i=r.length-1)-h(this.e/14))*14,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},N.dividedBy=N.div=function(e,t){return T(this,new G(e,t),E,I)},N.dividedToIntegerBy=N.idiv=function(e,t){return T(this,new G(e,t),0,1)},N.exponentiatedBy=N.pow=function(e,t){var r,n,i,o,l,f,a,h,d,p=this;if((e=new G(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+z(e));if(null!=t&&(t=new G(t)),f=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return d=new G(Math.pow(+z(p),f?e.s*(2-w(e)):+z(e))),t?d.mod(t):d;if(a=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new G(NaN);(n=!a&&p.isInteger()&&t.isInteger())&&(p=p.mod(t))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||f&&p.c[1]>=24e7:p.c[0]<8e13||f&&p.c[0]<=9999975e7)))return o=p.s<0&&w(e)?-0:0,p.e>-1&&(o=1/o),new G(a?1/o:o);C&&(o=s(C/14+2))}for(f?(r=new G(.5),a&&(e.s=1),h=w(e)):h=(i=Math.abs(+z(e)))%2,d=new G(B);;){if(h){if(!(d=d.times(p)).c)break;o?d.c.length>o&&(d.c.length=o):n&&(d=d.mod(t))}if(i){if(0===(i=u(i/2)))break;h=i%2}else if(W(e=e.times(r),e.e+1,1),e.e>14)h=w(e);else{if(0==(i=+z(e)))break;h=i%2}p=p.times(p),o?p.c&&p.c.length>o&&(p.c.length=o):n&&(p=p.mod(t))}return n?d:(a&&(d=B.div(d)),t?d.mod(t):o?W(d,C,I,l):d)},N.integerValue=function(e){var t=new G(this);return null==e?e=I:g(e,0,8),W(t,t.e+1,e)},N.isEqualTo=N.eq=function(e,t){return 0===p(this,new G(e,t))},N.isFinite=function(){return!!this.c},N.isGreaterThan=N.gt=function(e,t){return p(this,new G(e,t))>0},N.isGreaterThanOrEqualTo=N.gte=function(e,t){return 1===(t=p(this,new G(e,t)))||0===t},N.isInteger=function(){return!!this.c&&h(this.e/14)>this.c.length-2},N.isLessThan=N.lt=function(e,t){return 0>p(this,new G(e,t))},N.isLessThanOrEqualTo=N.lte=function(e,t){return -1===(t=p(this,new G(e,t)))||0===t},N.isNaN=function(){return!this.s},N.isNegative=function(){return this.s<0},N.isPositive=function(){return this.s>0},N.isZero=function(){return!!this.c&&0==this.c[0]},N.minus=function(e,t){var r,n,i,o,l=this.s;if(t=(e=new G(e,t)).s,!l||!t)return new G(NaN);if(l!=t)return e.s=-t,this.plus(e);var s=this.e/14,u=e.e/14,c=this.c,f=e.c;if(!s||!u){if(!c||!f)return c?(e.s=-t,e):new G(f?this:NaN);if(!c[0]||!f[0])return f[0]?(e.s=-t,e):new G(c[0]?this:3==I?-0:0)}if(s=h(s),u=h(u),c=c.slice(),l=s-u){for((o=l<0)?(l=-l,i=c):(u=s,i=f),i.reverse(),t=l;t--;i.push(0));i.reverse()}else for(n=(o=(l=c.length)<(t=f.length))?l:t,l=t=0;t<n;t++)if(c[t]!=f[t]){o=c[t]<f[t];break}if(o&&(i=c,c=f,f=i,e.s=-e.s),(t=(n=f.length)-(r=c.length))>0)for(;t--;c[r++]=0);for(t=1e14-1;n>l;){if(c[--n]<f[n]){for(r=n;r&&!c[--r];c[r]=t);--c[r],c[n]+=1e14}c[n]-=f[n]}for(;0==c[0];c.splice(0,1),--u);return c[0]?j(e,c,u):(e.s=3==I?-1:1,e.c=[e.e=0],e)},N.modulo=N.mod=function(e,t){var r,n;return(e=new G(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==R?(n=e.s,e.s=1,r=T(this,e,0,3),e.s=n,r.s*=n):r=T(this,e,0,R),(e=this.minus(r.times(e))).c[0]||1!=R||(e.s=this.s),e):new G(this):new G(NaN)},N.multipliedBy=N.times=function(e,t){var r,n,i,o,l,s,u,c,f,a,d,p,g,w=this.c,_=(e=new G(e,t)).c;if(!w||!_||!w[0]||!_[0])return this.s&&e.s&&(!w||w[0]||_)&&(!_||_[0]||w)?(e.s*=this.s,w&&_?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;for(n=h(this.e/14)+h(e.e/14),e.s*=this.s,(u=w.length)<(a=_.length)&&(g=w,w=_,_=g,i=u,u=a,a=i),i=u+a,g=[];i--;g.push(0));for(i=a;--i>=0;){for(r=0,d=_[i]%1e7,p=_[i]/1e7|0,o=i+(l=u);o>i;)s=p*(c=w[--l]%1e7)+(f=w[l]/1e7|0)*d,r=((c=d*c+s%1e7*1e7+g[o]+r)/1e14|0)+(s/1e7|0)+p*f,g[o--]=c%1e14;g[o]=r}return r?++n:g.splice(0,1),j(e,g,n)},N.negated=function(){var e=new G(this);return e.s=-e.s||null,e},N.plus=function(e,t){var r,n=this.s;if(t=(e=new G(e,t)).s,!n||!t)return new G(NaN);if(n!=t)return e.s=-t,this.minus(e);var i=this.e/14,o=e.e/14,l=this.c,s=e.c;if(!i||!o){if(!l||!s)return new G(n/0);if(!l[0]||!s[0])return s[0]?e:new G(l[0]?this:0*n)}if(i=h(i),o=h(o),l=l.slice(),n=i-o){for(n>0?(o=i,r=s):(n=-n,r=l),r.reverse();n--;r.push(0));r.reverse()}for((n=l.length)-(t=s.length)<0&&(r=s,s=l,l=r,t=n),n=0;t;)n=(l[--t]=l[t]+s[t]+n)/1e14|0,l[t]=1e14===l[t]?0:l[t]%1e14;return n&&(l=[n].concat(l),++o),j(e,l,o)},N.precision=N.sd=function(e,t){var r,n,i;if(null!=e&&!!e!==e)return g(e,1,1e9),null==t?t=I:g(t,0,8),W(new G(this),e,t);if(!(r=this.c))return null;if(n=14*(i=r.length-1)+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&this.e+1>n&&(n=this.e+1),n},N.shiftedBy=function(e){return g(e,-9007199254740991,9007199254740991),this.times("1e"+e)},N.squareRoot=N.sqrt=function(){var e,t,r,n,i,o=this.c,l=this.s,s=this.e,u=E+4,c=new G("0.5");if(1!==l||!o||!o[0])return new G(!l||l<0&&(!o||o[0])?NaN:o?this:1/0);if(0==(l=Math.sqrt(+z(this)))||l==1/0?(((t=d(o)).length+s)%2==0&&(t+="0"),l=Math.sqrt(+t),s=h((s+1)/2)-(s<0||s%2),r=new G(t=l==1/0?"5e"+s:(t=l.toExponential()).slice(0,t.indexOf("e")+1)+s)):r=new G(l+""),r.c[0]){for((l=(s=r.e)+u)<3&&(l=0);;)if(i=r,r=c.times(i.plus(T(this,i,u,1))),d(i.c).slice(0,l)===(t=d(r.c)).slice(0,l)){if(r.e<s&&--l,"9999"!=(t=t.slice(l-3,l+1))&&(n||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(W(r,r.e+E+2,1),e=!r.times(r).eq(this));break}if(!n&&(W(i,i.e+E+2,0),i.times(i).eq(this))){r=i;break}u+=4,l+=4,n=1}}return W(r,r.e+E+1,I,e)},N.toExponential=function(e,t){return null!=e&&(g(e,0,1e9),e++),M(this,e,t,1)},N.toFixed=function(e,t){return null!=e&&(g(e,0,1e9),e=e+this.e+1),M(this,e,t)},N.toFormat=function(e,t,r){var n;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=A;else if("object"!=typeof r)throw Error(c+"Argument not an object: "+r);if(n=this.toFixed(e,t),this.c){var i,o=n.split("."),l=+r.groupSize,s=+r.secondaryGroupSize,u=r.groupSeparator||"",f=o[0],a=o[1],h=this.s<0,d=h?f.slice(1):f,p=d.length;if(s&&(i=l,l=s,s=i,p-=i),l>0&&p>0){for(i=p%l||l,f=d.substr(0,i);i<p;i+=l)f+=u+d.substr(i,l);s>0&&(f+=u+d.slice(i)),h&&(f="-"+f)}n=a?f+(r.decimalSeparator||"")+((s=+r.fractionGroupSize)?a.replace(RegExp("\\d{"+s+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):a):f}return(r.prefix||"")+n+(r.suffix||"")},N.toFraction=function(e){var t,r,n,i,o,l,s,u,f,h,p,g,w=this.c;if(null!=e&&(!(s=new G(e)).isInteger()&&(s.c||1!==s.s)||s.lt(B)))throw Error(c+"Argument "+(s.isInteger()?"out of range: ":"not an integer: ")+z(s));if(!w)return new G(this);for(t=new G(B),f=r=new G(B),n=u=new G(B),g=d(w),o=t.e=g.length-this.e-1,t.c[0]=a[(l=o%14)<0?14+l:l],e=!e||s.comparedTo(t)>0?o>0?t:f:s,l=P,P=1/0,s=new G(g),u.c[0]=0;h=T(s,t,0,1),1!=(i=r.plus(h.times(n))).comparedTo(e);)r=n,n=i,f=u.plus(h.times(i=f)),u=i,t=s.minus(h.times(i=t)),s=i;return i=T(e.minus(r),n,0,1),u=u.plus(i.times(f)),r=r.plus(i.times(n)),u.s=f.s=this.s,o*=2,p=1>T(f,n,o,I).minus(this).abs().comparedTo(T(u,r,o,I).minus(this).abs())?[f,n]:[u,r],P=l,p},N.toNumber=function(){return+z(this)},N.toPrecision=function(e,t){return null!=e&&g(e,1,1e9),M(this,e,t,2)},N.toString=function(e){var t,r=this,n=r.s,i=r.e;return null===i?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=i<=S||i>=k?_(d(r.c),i):m(d(r.c),i,"0"):10===e&&U?t=m(d((r=W(new G(r),E+i+1,I)).c),r.e,"0"):(g(e,2,D.length,"Base"),t=O(m(d(r.c),i,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},N.valueOf=N.toJSON=function(){return z(this)},N._isBigNumber=!0,null!=t&&G.set(t),G}()).default=o.BigNumber=o,void 0!==(n=(function(){return o}).call(t,r,t,e))&&(e.exports=n)}(0)},7852:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.printGrid=t.initializeGrid=t.getGridContentHeight=t.getGridContentWidth=t.getBlockPositionOnGrid=t.getBlocksWithPosition=t.shiftBlocksOnGrid=t.getHighestBlock=t.getRightMostBlock=t.getLeftMostBlock=t.STRUCTURE_STARTING_POSITION=t.LEVEL_WIDTH_IN_UNITY=t.ONE_CELL_WIDTH_IN_UNITY=t.GRID_HEIGHT=t.GRID_WIDTH=void 0;let i=r(6899),o=n(r(1679)),l=r(2881);function s(e,t,r){let n=i.Block.getBlockSize(e),o=(n.width-1)/2,l=n.width>1;if(0!==r[r.length-1][t])throw Error("Height boundary is intruded.");let s={x:t,y:r.length-1};for(let e=r.length-1;e>=0&&0===r[e][t]&&(!l||function(e,t,r,n){let i=!0;for(let o=1;o<=n;o++){if(r-o<0||r+o>e[0].length-1)throw Error("Width boundary is intruded.");if(0!==e[t][r-o]||0!==e[t][r+o]){i=!1;break}}return i}(r,e,t,o));e--)s.y=e;return s}function u(e,t){let r=[];for(let n=0;n<t;n++){r.push([]);for(let t=0;t<e;t++)r[n].push(0)}return r}t.GRID_WIDTH=20,t.GRID_HEIGHT=16,t.ONE_CELL_WIDTH_IN_UNITY=new o.default("0.2401"),t.LEVEL_WIDTH_IN_UNITY=new o.default("18"),t.STRUCTURE_STARTING_POSITION=new l.Position(new o.default("2"),new o.default("-3.5")),t.getLeftMostBlock=function(e){let t=e[0];for(let r of e)r.position.x.isLessThan(t.position.x)&&(t=r);return t},t.getRightMostBlock=function(e){let t=e[0];for(let r of e)r.position.x.isGreaterThan(t.position.x)&&(t=r);return t},t.getHighestBlock=function(e){let t=e[0];for(let r of e)r.position.y.isGreaterThan(t.position.y)&&(t=r);return t},t.shiftBlocksOnGrid=function(e,t){let r=t.map(e=>[...e]),n=r[0].length;for(let e=0;e<r[0].length;e++)for(let t of r)0!==t[e]&&(n=Math.min(n,e));for(let t of e)t.position.x=t.position.x.minus(n);for(let e=0;e<r.length;e++){r[e]=r[e].slice(n);for(let t=0;t<n;t++)r[e].push(0)}return[e,r]},t.getBlocksWithPosition=function(e,r="drop_block("){let n=[],c=u(t.GRID_WIDTH,t.GRID_HEIGHT);for(let t of e.split("\n")){if(!t.startsWith(r))continue;let e=function(e,t="drop_block("){let r=e.indexOf(","),n=e.substring(t.length+1,r-1).toUpperCase();return i.BlockType[n]}(t,r),u=function(e){let t=e.indexOf(",");return parseInt(e.substring(t+1).split(")")[0].trim(),10)}(t),f=i.Block.getAvailableBlock(e),a=s(e,u,c);c=function(e,t,r,n){let i=e.map(e=>[...e]),o=n.width>1,l=n.height>1,s=(n.width-1)/2;if(i[t.y][r]=1,o)for(let e=1;e<=s;e++)i[t.y][r-e]=1,i[t.y][r+e]=1;if(l)for(let o=1;o<n.height;o++){if(t.y+o>e.length-1)throw Error("Height boundary is intruded.");i[t.y+o][r]=1}return i}(c,a,u,f.size),f.position=new l.Position(new o.default(a.x),new o.default(a.y)),n.push(f)}return[n,c]},t.getBlockPositionOnGrid=s,t.getGridContentWidth=function(e){let r=0;for(let t of e){let e=t.reduce((e,t)=>e+t,0);e>r&&(r=e)}let n=new o.default(r);return t.STRUCTURE_STARTING_POSITION.x.abs().plus(n.multipliedBy(t.ONE_CELL_WIDTH_IN_UNITY))},t.getGridContentHeight=function(e){let r=0;for(let t=0;t<e.length;t++)e[t].reduce((e,t)=>e+t,0)>0&&(r=t);let n=new o.default(r+1);return t.STRUCTURE_STARTING_POSITION.y.abs().plus(n.multipliedBy(t.ONE_CELL_WIDTH_IN_UNITY))},t.initializeGrid=u,t.printGrid=function(e){let t="";for(let r=e.length-1;r>=0;r--){for(let n of e[r])t+=n;t+="\n"}return console.log(t),t}},4600:function(e,t,r){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.Block=t.BlockType=void 0;let o=r(2881),l=r(7455);(i=n=t.BlockType||(t.BlockType={}))[i.B31=0]="B31",i[i.B13=1]="B13",i[i.B11=2]="B11";class s{constructor(e,t,r){this.id=e,this.type=t,this.rotation=r,this.position=new o.Position,this.size=s.getBlockSize(n[e.toUpperCase()])}static getAvailableBlock(e){if(e===n.B31)return new s("b31","RectSmall",0);if(e===n.B13)return new s("b13","RectSmall",90);if(e===n.B11)return new s("b11","SquareTiny",0);throw Error("BlockType does not exist.")}static getBlockSize(e){if(e===n.B31)return new l.Size(3,1);if(e===n.B13)return new l.Size(1,3);if(e===n.B11)return new l.Size(1,1);throw Error("BlockType does not exist.")}}t.Block=s},6899:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockType=t.Position=t.Size=t.Block=void 0;let n=r(4600);Object.defineProperty(t,"Block",{enumerable:!0,get:function(){return n.Block}}),Object.defineProperty(t,"BlockType",{enumerable:!0,get:function(){return n.BlockType}});let i=r(2881);Object.defineProperty(t,"Position",{enumerable:!0,get:function(){return i.Position}});let o=r(7455);Object.defineProperty(t,"Size",{enumerable:!0,get:function(){return o.Size}})},2881:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Position=void 0;let i=n(r(1679));class o{constructor(e=new i.default("0"),t=new i.default("0")){this.x=e,this.y=t}}t.Position=o},7455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Size=void 0;class r{constructor(e=0,t=0){this.width=e,this.height=t}}t.Size=r},4:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.convertToXML=void 0;let i=r(7852),o=n(r(1679));t.convertToXML=function(e,t="drop_block("){let[r,n]=function(e,t="drop_block("){let r="";r+=`  <GameObjects>
`;let[n,l]=(0,i.getBlocksWithPosition)(e,t),[s,u]=(0,i.shiftBlocksOnGrid)(n,l);for(let e of s){let t=new o.default(e.size.width),n=new o.default(e.size.height),l=t.multipliedBy(i.ONE_CELL_WIDTH_IN_UNITY).dividedBy(2),s=n.multipliedBy(i.ONE_CELL_WIDTH_IN_UNITY).dividedBy(2),u=e.size.width>1?i.ONE_CELL_WIDTH_IN_UNITY:new o.default("0"),c=e.position.x.multipliedBy(i.ONE_CELL_WIDTH_IN_UNITY).plus(l).plus(i.STRUCTURE_STARTING_POSITION.x).minus(u),f=e.position.y.multipliedBy(i.ONE_CELL_WIDTH_IN_UNITY).plus(s).plus(i.STRUCTURE_STARTING_POSITION.y);r+=`    <Block type="${e.type}" material="wood" x="${c.toFixed()}" y="${f.toFixed()}" rotation="${e.rotation}" />
`}return[r+=`  </GameObjects>
`,u,l]}(e,t),l=(0,i.getGridContentWidth)(n),s=(0,i.getGridContentHeight)(n),u=`<Level width="${parseInt(l.dividedBy(i.LEVEL_WIDTH_IN_UNITY).toFixed())+3}">
`;return'<?xml version="1.0" encoding="utf-16"?>\n'+(u+function(e,t){let r=new o.default("1.6"),n=new o.default("5"),l=o.default.max(t.multipliedBy(r),e).multipliedBy(2),s=o.default.max(l,17),u=s.plus(n);return`  <Camera x="${i.STRUCTURE_STARTING_POSITION.x.toFixed()}" y="0" minWidth="${s.toFixed()}" maxWidth="${u.toFixed()}" />
`}(l,s)+'  <Birds>\n    <Bird type="BirdRed" />\n  </Birds>\n'+function(){let e={x:-9,y:-2.5};return`  <Slingshot x="${e.x}" y="${e.y}" />
`}()+r)+"</Level>"}},5247:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.convertTextToBlocks=t.convertTextToXML=t.containObjectTokens=t.containDisallowedCharacters=t.countWords=t.extractCode=t.BlockType=t.Size=t.Position=t.Block=void 0;let i=r(6899);Object.defineProperty(t,"Block",{enumerable:!0,get:function(){return i.Block}}),Object.defineProperty(t,"BlockType",{enumerable:!0,get:function(){return i.BlockType}}),Object.defineProperty(t,"Position",{enumerable:!0,get:function(){return i.Position}}),Object.defineProperty(t,"Size",{enumerable:!0,get:function(){return i.Size}});let o=r(4),l=r(7852),s=n(r(6814));t.extractCode=function(e,t="drop_block"){let r;let n=/```([^`]+)```/g,i=RegExp(`${t}\\(['|"]b[1|3][1|3]['|"], *\\d*\\)`,"g"),o=null;for(;null!==(r=n.exec(e));)o=r;if(!o)return null;let l=o[0].matchAll(i),s="";for(let e of l)s+=e.toString().replaceAll('"',"'")+"\n";return 0===s.length?null:s.toLowerCase()},t.countWords=function(e){return(0,s.default)(e)},t.containDisallowedCharacters=function(e){return 0!==e.replaceAll(/([A-Za-z\d~/\\+,\-*`'".!@#$%^&()_=[\]{}|<>:;?—\u201C\u201D\u2018\u2019 \n\r\t]*)*/g,"").trim().length},t.containObjectTokens=function(e){var t,r;return(null!==(r=null===(t=e.match(/<OBJECT>/g))||void 0===t?void 0:t.length)&&void 0!==r?r:-1)>0},t.convertTextToXML=function(e,t="drop_block("){return(0,o.convertToXML)(e.toLowerCase(),t)},t.convertTextToBlocks=function(e){return(0,l.getBlocksWithPosition)(e.toLowerCase())}},6814:function(e){e.exports=(()=>{"use strict";var e={314:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,wordsCount:()=>l,wordsSplit:()=>s,wordsDetect:()=>o});var n=[",","，",".","。",":","：",";","；","[","]","【","]","】","{","｛","}","｝","(","（",")","）","<","《",">","》","$","￥","!","！","?","？","~","～","'","’",'"',"“","”","*","/","\\","&","%","@","#","^","、","、","、","、"],i={words:[],count:0},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return i;var r=String(e);if(""===r.trim())return i;var o=t.punctuationAsBreaker?" ":"",l=t.disableDefaultPunctuation?[]:n,s=t.punctuation||[];l.concat(s).forEach(function(e){var t=RegExp("\\"+e,"g");r=r.replace(t,o)}),r=(r=(r=(r=r.replace(/[\uFF00-\uFFEF\u2000-\u206F]/g,"")).replace(/\s+/," ")).split(" ")).filter(function(e){return e.trim()});var u=RegExp("(\\d+)|[a-zA-Z\xc0-\xffĀ-ſƀ-ɏɐ-ʯḀ-ỿЀ-ӿԀ-ԯഀ-ൿ]+|[⺀-⻿⼀-⿟　-〿㇀-㇯㈀-㋿㌀-㏿㐀-㿿䀀-䶿一-俿倀-忿怀-濿瀀-翿耀-迿退-鿿豈-﫿぀-ゟ゠-ヿㇰ-ㇿ㆐-㆟ᄀ-ᇿ㄰-㆏ꥠ-꥿가-꿿뀀-뿿쀀-쿿퀀-힯ힰ-퟿]","g"),c=[];return r.forEach(function(e){var t,r=[];do(t=u.exec(e))&&r.push(t[0]);while(t);0===r.length?c.push(e):c=c.concat(r)}),{words:c,count:c.length}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(e,t).count},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(e,t).words};let u=l}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(314)})()}}]);