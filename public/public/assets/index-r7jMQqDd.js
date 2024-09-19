var K=String.prototype.replace,W=/%20/g,A={RFC1738:"RFC1738",RFC3986:"RFC3986"},Q={default:A.RFC3986,formatters:{RFC1738:function(l){return K.call(l,W,"+")},RFC3986:function(l){return String(l)}},RFC1738:A.RFC1738,RFC3986:A.RFC3986},X=Q,C=Object.prototype.hasOwnProperty,O=Array.isArray,b=function(){for(var l=[],e=0;e<256;++e)l.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return l}(),Y=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(O(t)){for(var a=[],n=0;n<t.length;++n)typeof t[n]<"u"&&a.push(t[n]);r.obj[r.prop]=a}}},Z=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},a=0;a<e.length;++a)typeof e[a]<"u"&&(t[a]=e[a]);return t},J=function l(e,r,t){if(!r)return e;if(typeof r!="object"){if(O(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!C.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var a=e;return O(e)&&!O(r)&&(a=Z(e,t)),O(e)&&O(r)?(r.forEach(function(n,i){if(C.call(e,i)){var s=e[i];s&&typeof s=="object"&&n&&typeof n=="object"?e[i]=l(s,n,t):e.push(n)}else e[i]=n}),e):Object.keys(r).reduce(function(n,i){var s=r[i];return C.call(n,i)?n[i]=l(n[i],s,t):n[i]=s,n},a)},ee=function(e,r){return Object.keys(r).reduce(function(t,a){return t[a]=r[a],t},e)},re=function(l,e,r){var t=l.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},te=function(e,r,t,a,n){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),t==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(f){return"%26%23"+parseInt(f.slice(2),16)+"%3B"});for(var s="",u=0;u<i.length;++u){var o=i.charCodeAt(u);if(o===45||o===46||o===95||o===126||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||n===X.RFC1738&&(o===40||o===41)){s+=i.charAt(u);continue}if(o<128){s=s+b[o];continue}if(o<2048){s=s+(b[192|o>>6]+b[128|o&63]);continue}if(o<55296||o>=57344){s=s+(b[224|o>>12]+b[128|o>>6&63]+b[128|o&63]);continue}u+=1,o=65536+((o&1023)<<10|i.charCodeAt(u)&1023),s+=b[240|o>>18]+b[128|o>>12&63]+b[128|o>>6&63]+b[128|o&63]}return s},ne=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],a=0;a<r.length;++a)for(var n=r[a],i=n.obj[n.prop],s=Object.keys(i),u=0;u<s.length;++u){var o=s[u],f=i[o];typeof f=="object"&&f!==null&&t.indexOf(f)===-1&&(r.push({obj:i,prop:o}),t.push(f))}return Y(r),e},ie=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ae=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},le=function(e,r){return[].concat(e,r)},oe=function(e,r){if(O(e)){for(var t=[],a=0;a<e.length;a+=1)t.push(r(e[a]));return t}return r(e)},_={arrayToObject:Z,assign:ee,combine:le,compact:ne,decode:re,encode:te,isBuffer:ae,isRegExp:ie,maybeMap:oe,merge:J},R=_,S=Q,se=Object.prototype.hasOwnProperty,U={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},x=Array.isArray,ue=String.prototype.split,fe=Array.prototype.push,k=function(l,e){fe.apply(l,x(e)?e:[e])},ce=Date.prototype.toISOString,q=S.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:R.encode,encodeValuesOnly:!1,format:q,formatter:S.formatters[q],indices:!1,serializeDate:function(e){return ce.call(e)},skipNulls:!1,strictNullHandling:!1},de=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},he=function l(e,r,t,a,n,i,s,u,o,f,h,p,y,d){var c=e;if(typeof s=="function"?c=s(r,c):c instanceof Date?c=f(c):t==="comma"&&x(c)&&(c=R.maybeMap(c,function(P){return P instanceof Date?f(P):P})),c===null){if(a)return i&&!y?i(r,v.encoder,d,"key",h):r;c=""}if(de(c)||R.isBuffer(c)){if(i){var L=y?r:i(r,v.encoder,d,"key",h);if(t==="comma"&&y){for(var H=ue.call(String(c),","),z="",E=0;E<H.length;++E)z+=(E===0?"":",")+p(i(H[E],v.encoder,d,"value",h));return[p(L)+"="+z]}return[p(L)+"="+p(i(c,v.encoder,d,"value",h))]}return[p(r)+"="+p(String(c))]}var N=[];if(typeof c>"u")return N;var $;if(t==="comma"&&x(c))$=[{value:c.length>0?c.join(",")||null:void 0}];else if(x(s))$=s;else{var B=Object.keys(c);$=u?B.sort(u):B}for(var F=0;F<$.length;++F){var w=$[F],I=typeof w=="object"&&typeof w.value<"u"?w.value:c[w];if(!(n&&I===null)){var G=x(c)?typeof t=="function"?t(r,w):r:r+(o?"."+w:"["+w+"]");k(N,l(I,G,t,a,n,i,s,u,o,f,h,p,y,d))}}return N},pe=function(e){if(!e)return v;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||v.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=S.default;if(typeof e.format<"u"){if(!se.call(S.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var a=S.formatters[t],n=v.filter;return(typeof e.filter=="function"||x(e.filter))&&(n=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:v.addQueryPrefix,allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,delimiter:typeof e.delimiter>"u"?v.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:v.encode,encoder:typeof e.encoder=="function"?e.encoder:v.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:v.encodeValuesOnly,filter:n,format:t,formatter:a,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:v.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:v.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},ye=function(l,e){var r=l,t=pe(e),a,n;typeof t.filter=="function"?(n=t.filter,r=n("",r)):x(t.filter)&&(n=t.filter,a=n);var i=[];if(typeof r!="object"||r===null)return"";var s;e&&e.arrayFormat in U?s=e.arrayFormat:e&&"indices"in e?s=e.indices?"indices":"repeat":s="indices";var u=U[s];a||(a=Object.keys(r)),t.sort&&a.sort(t.sort);for(var o=0;o<a.length;++o){var f=a[o];t.skipNulls&&r[f]===null||k(i,he(r[f],f,u,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var h=i.join(t.delimiter),p=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),h.length>0?p+h:""},j=_,T=Object.prototype.hasOwnProperty,me=Array.isArray,m={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:j.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},ve=function(l){return l.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},V=function(l,e){return l&&typeof l=="string"&&e.comma&&l.indexOf(",")>-1?l.split(","):l},ge="utf8=%26%2310003%3B",be="utf8=%E2%9C%93",we=function(e,r){var t={},a=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,n=r.parameterLimit===1/0?void 0:r.parameterLimit,i=a.split(r.delimiter,n),s=-1,u,o=r.charset;if(r.charsetSentinel)for(u=0;u<i.length;++u)i[u].indexOf("utf8=")===0&&(i[u]===be?o="utf-8":i[u]===ge&&(o="iso-8859-1"),s=u,u=i.length);for(u=0;u<i.length;++u)if(u!==s){var f=i[u],h=f.indexOf("]="),p=h===-1?f.indexOf("="):h+1,y,d;p===-1?(y=r.decoder(f,m.decoder,o,"key"),d=r.strictNullHandling?null:""):(y=r.decoder(f.slice(0,p),m.decoder,o,"key"),d=j.maybeMap(V(f.slice(p+1),r),function(c){return r.decoder(c,m.decoder,o,"value")})),d&&r.interpretNumericEntities&&o==="iso-8859-1"&&(d=ve(d)),f.indexOf("[]=")>-1&&(d=me(d)?[d]:d),T.call(t,y)?t[y]=j.combine(t[y],d):t[y]=d}return t},Oe=function(l,e,r,t){for(var a=t?e:V(e,r),n=l.length-1;n>=0;--n){var i,s=l[n];if(s==="[]"&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var u=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,o=parseInt(u,10);!r.parseArrays&&u===""?i={0:a}:!isNaN(o)&&s!==u&&String(o)===u&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(i=[],i[o]=a):u!=="__proto__"&&(i[u]=a)}a=i}return a},xe=function(e,r,t,a){if(e){var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,u=t.depth>0&&i.exec(n),o=u?n.slice(0,u.index):n,f=[];if(o){if(!t.plainObjects&&T.call(Object.prototype,o)&&!t.allowPrototypes)return;f.push(o)}for(var h=0;t.depth>0&&(u=s.exec(n))!==null&&h<t.depth;){if(h+=1,!t.plainObjects&&T.call(Object.prototype,u[1].slice(1,-1))&&!t.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+n.slice(u.index)+"]"),Oe(f,r,t,a)}},je=function(e){if(!e)return m;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?m.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?m.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||j.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},$e=function(l,e){var r=je(e);if(l===""||l===null||typeof l>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof l=="string"?we(l,r):l,a=r.plainObjects?Object.create(null):{},n=Object.keys(t),i=0;i<n.length;++i){var s=n[i],u=xe(s,t[s],r,typeof l=="string");a=j.merge(a,u,r)}return j.compact(a)},Se=ye,Ee=$e,Ne=Q,M={formats:Ne,parse:Ee,stringify:Se};function g(){return g=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l},g.apply(this,arguments)}class D{constructor(e,r,t){var a,n;this.name=e,this.definition=r,this.bindings=(a=r.bindings)!=null?a:{},this.wheres=(n=r.wheres)!=null?n:{},this.config=t}get template(){const e=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return e===""?"/":e}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var e,r;return(e=(r=this.template.match(/{[^}?]+\??}/g))==null?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))!=null?e:[]}matchesUrl(e){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(i,s,u,o)=>{var f;const h=`(?<${u}>${((f=this.wheres[u])==null?void 0:f.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return o?`(${s}${h})?`:`${s}${h}`}).replace(/^\w+:\/\//,""),[t,a]=e.replace(/^\w+:\/\//,"").split("?"),n=new RegExp(`^${r}/?$`).exec(decodeURI(t));if(n){for(const i in n.groups)n.groups[i]=typeof n.groups[i]=="string"?decodeURIComponent(n.groups[i]):n.groups[i];return{params:n.groups,query:M.parse(a)}}return!1}compile(e){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,t,a)=>{var n,i;if(!a&&[null,void 0].includes(e[t]))throw new Error(`Ziggy error: '${t}' parameter is required for route '${this.name}'.`);if(this.wheres[t]&&!new RegExp(`^${a?`(${this.wheres[t]})?`:this.wheres[t]}$`).test((i=e[t])!=null?i:""))throw new Error(`Ziggy error: '${t}' parameter '${e[t]}' does not match required format '${this.wheres[t]}' for route '${this.name}'.`);return encodeURI((n=e[t])!=null?n:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.config.absolute?/(\.[^/]+?)(\/\/)/:/(^)(\/\/)/,"$1/").replace(/\/+$/,""):this.template}}class Fe extends String{constructor(e,r,t=!0,a){if(super(),this.t=a??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this.t=g({},this.t,{absolute:t}),e){if(!this.t.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this.i=new D(e,this.t.routes[e],this.t),this.o=this.h(r)}}toString(){const e=Object.keys(this.o).filter(r=>!this.i.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>g({},r,{[t]:this.o[t]}),{});return this.i.compile(this.o)+M.stringify(g({},e,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}u(e){e?this.t.absolute&&e.startsWith("/")&&(e=this.l().host+e):e=this.m();let r={};const[t,a]=Object.entries(this.t.routes).find(([n,i])=>r=new D(n,i,this.t).matchesUrl(e))||[void 0,void 0];return g({name:t},r,{route:a})}m(){const{host:e,pathname:r,search:t}=this.l();return(this.t.absolute?e+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:a,query:n,route:i}=this.u();if(!e)return t;const s=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!s)return s;const u=new D(t,i,this.t);r=this.h(r,u);const o=g({},a,n);if(Object.values(r).every(h=>!h)&&!Object.values(o).some(h=>h!==void 0))return!0;const f=(h,p)=>Object.entries(h).every(([y,d])=>Array.isArray(d)&&Array.isArray(p[y])?d.every(c=>p[y].includes(c)):typeof d=="object"&&typeof p[y]=="object"&&d!==null&&p[y]!==null?f(d,p[y]):p[y]==d);return f(r,o)}l(){var e,r,t,a,n,i;const{host:s="",pathname:u="",search:o=""}=typeof window<"u"?window.location:{};return{host:(e=(r=this.t.location)==null?void 0:r.host)!=null?e:s,pathname:(t=(a=this.t.location)==null?void 0:a.pathname)!=null?t:u,search:(n=(i=this.t.location)==null?void 0:i.search)!=null?n:o}}get params(){const{params:e,query:r}=this.u();return g({},e,r)}has(e){return Object.keys(this.t.routes).includes(e)}h(e={},r=this.i){e!=null||(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:a})=>!this.t.defaults[a]);return Array.isArray(e)?e=e.reduce((a,n,i)=>g({},a,t[i]?{[t[i].name]:n}:typeof n=="object"?n:{[n]:""}),{}):t.length!==1||e[t[0].name]||!e.hasOwnProperty(Object.values(r.bindings)[0])&&!e.hasOwnProperty("id")||(e={[t[0].name]:e}),g({},this.p(r),this.$(e,r))}p(e){return e.parameterSegments.filter(({name:r})=>this.t.defaults[r]).reduce((r,{name:t},a)=>g({},r,{[t]:this.t.defaults[t]}),{})}$(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((a,[n,i])=>{if(!i||typeof i!="object"||Array.isArray(i)||!t.some(({name:s})=>s===n))return g({},a,{[n]:i});if(!i.hasOwnProperty(r[n])){if(!i.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${n}' parameter is missing route model binding key '${r[n]}'.`);r[n]="id"}return g({},a,{[n]:i[r[n]]})},{})}valueOf(){return this.toString()}}function Pe(l,e,r,t){const a=new Fe(l,e,r,t);return l?a.toString():a}export{Pe as s};
