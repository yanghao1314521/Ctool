(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[6433],{2398:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},i=[],o=(n(9653),n(92222),n(69600),n(96486)),a=n.n(o),u={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(a().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=u,s=n(1001),l=(0,s.Z)(c,r,i,!1,null,null,null),p=l.exports},46976:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"height:"+t.height},[t._t("default")],2)},i=[],o=n(62032),a=(n(9653),n(92222),n(57327),n(41539),n(26699),n(32023),n(34809));function u(t){var e=document.querySelector(t);if(null===e)return 0;var n=window.getComputedStyle(e),r=parseFloat(n["marginTop"])+parseFloat(n["marginBottom"]);return Math.ceil(e.offsetHeight+r)}var c={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){var t=this;setTimeout((function(){return t.resize()}),2)},resize:function(){var t,e=this,n=window.innerHeight,r=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],i=r.filter((function(t){return!e.remove.includes(t)})).concat(this.append),a=(0,o.Z)(i);try{for(a.s();!(t=a.n()).done;){var c=t.value;n-=u(c)}}catch(s){a.e(s)}finally{a.f()}this.reduce>0&&(n-=this.reduce),n>100&&(n-=5),this.ignore||(this.height=n+"px"),this.$emit("resize",n)}},destroyed:function(){window.removeEventListener(a.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(a.KU,this.reportWindowSize),this.resize()}},s=c,l=n(1001),p=(0,l.Z)(s,r,i,!1,null,null,null),h=p.exports},16433:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("heightResize",{attrs:{append:[".page-option-block"],ignore:""},on:{resize:t.resize}},[n("autoHeightTextarea",{attrs:{height:t.inputHeight,placeholder:t.$t("unicode_input")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}}),n("option-block",{staticClass:"page-option-block"},[n("FormItem",[n("ButtonGroup",[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("encode")}}},[t._v(t._s(t.$t("unicode_encode")))]),n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("decode")}}},[t._v(t._s(t.$t("unicode_decode")))])],1)],1),n("FormItem",[n("Select",{staticStyle:{width:"250px"},model:{value:t.current.type,callback:function(e){t.$set(t.current,"type",e)},expression:"current.type"}},[n("Option",{attrs:{value:"unicode_point_default"}},[t._v(t._s(t.$t("unicode_mode_default"))+" \\u[0-9a-f]{4}")]),n("Option",{attrs:{value:"unicode_point_wide"}},[t._v(t._s(t.$t("unicode_mode_wide"))+" \\u[0-9a-f]{4,6}")]),n("Option",{attrs:{value:"unicode_point_wide_brace"}},[t._v(t._s(t.$t("unicode_mode_wide_bracket"))+" \\u{[0-9a-f]{4,6}}")]),n("Option",{attrs:{value:"unicode_number"}},[t._v(t._s(t.$t("unicode_mode_number"))+" U+[0-9A-F]{4,6}")]),n("Option",{attrs:{value:"html_entity_10"}},[t._v(t._s(t.$t("unicode_mode_html_10"))+" &#[0-9]+;")]),n("Option",{attrs:{value:"html_entity_16"}},[t._v(t._s(t.$t("unicode_mode_html_16"))+" &#x[0-9a-f]{1,6};")]),n("Option",{attrs:{value:"css_entitie"}},[t._v(t._s(t.$t("unicode_mode_css_16"))+" \\[0-9a-f]{4,6}")])],1)],1),t.disable_ignore_ascii_select.includes(t.current.type)?t._e():n("FormItem",[n("Checkbox",{model:{value:t.current.ignore_ascii,callback:function(e){t.$set(t.current,"ignore_ascii",e)},expression:"current.ignore_ascii"}},[t._v(t._s(t.$t("unicode_ignore_ascii")))])],1)],1),n("autoHeightTextarea",{attrs:{height:t.outputHeight,value:t.current.output,placeholder:t.$t("unicode_output")}})],1)},i=[],o=(n(26699),n(32023),n(41539),n(39714),n(95431)),a=n(46976),u=n(2398),c={components:{heightResize:a.Z,autoHeightTextarea:u.Z},created:function(){this.$initToolData("input")},methods:{handle:function(t){if(this.current.input){try{this.current.output="encode"===t?o.Z.encode(this.current.input,this.current.type,!this.disable_ignore_ascii_select.includes(this.current.type)&&this.current.ignore_ascii):o.Z.decode(this.current.input,this.current.type)}catch(e){return this.$Message.error(this.$t("unicode_error",[e.message]).toString())}this.current.operation=t,this.$clipboardCopy(this.current.output),this.$saveToolData(this.current)}},resize:function(t){this.inputHeight=Math.ceil(t/2),this.outputHeight=t-this.inputHeight}},data:function(){return{current:{input:"",output:"",operation:"",type:"unicode_point_default",ignore_ascii:!0},inputHeight:100,outputHeight:100,disable_ignore_ascii_select:["unicode_point_wide","unicode_number","css_entitie"]}}},s=c,l=n(1001),p=(0,l.Z)(s,r,i,!1,null,null,null),h=p.exports},38415:function(t,e,n){"use strict";var r=n(17854),i=n(19303),o=n(41340),a=n(84488),u=r.RangeError;t.exports=function(t){var e=o(a(this)),n="",r=i(t);if(r<0||r==1/0)throw u("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},50863:function(t,e,n){var r=n(1702);t.exports=r(1..valueOf)},92222:function(t,e,n){"use strict";var r=n(82109),i=n(17854),o=n(47293),a=n(43157),u=n(70111),c=n(47908),s=n(26244),l=n(86135),p=n(65417),h=n(81194),d=n(5112),f=n(7392),_=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",y=i.TypeError,v=f>=51||!o((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),b=h("concat"),w=function(t){if(!u(t))return!1;var e=t[_];return void 0!==e?!!e:a(t)},x=!v||!b;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,i,o,a=c(this),u=p(a,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],w(o)){if(i=s(o),h+i>g)throw y(m);for(n=0;n<i;n++,h++)n in o&&l(u,h,o[n])}else{if(h>=g)throw y(m);l(u,h++,o)}return u.length=h,u}})},9653:function(t,e,n){"use strict";var r=n(19781),i=n(17854),o=n(1702),a=n(54705),u=n(31320),c=n(92597),s=n(79587),l=n(47976),p=n(52190),h=n(57593),d=n(47293),f=n(8006).f,_=n(31236).f,g=n(3070).f,m=n(50863),y=n(53111).trim,v="Number",b=i[v],w=b.prototype,x=i.TypeError,S=o("".slice),I=o("".charCodeAt),C=function(t){var e=h(t,"number");return"bigint"==typeof e?e:k(e)},k=function(t){var e,n,r,i,o,a,u,c,s=h(t,"number");if(p(s))throw x("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=y(s),e=I(s,0),43===e||45===e){if(n=I(s,2),88===n||120===n)return NaN}else if(48===e){switch(I(s,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+s}for(o=S(s,2),a=o.length,u=0;u<a;u++)if(c=I(o,u),c<48||c>i)return NaN;return parseInt(o,r)}return+s};if(a(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:b(C(t)),n=this;return l(w,n)&&d((function(){m(n)}))?s(Object(e),n,E):e},$=r?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;$.length>N;N++)c(b,A=$[N])&&!c(E,A)&&g(E,A,_(b,A));E.prototype=w,w.constructor=E,u(i,v,E)}},79841:function(t,e,n){"use strict";var r=n(82109),i=n(28710).codeAt;r({target:"String",proto:!0},{codePointAt:function(t){return i(this,t)}})},94953:function(t,e,n){var r=n(82109),i=n(17854),o=n(1702),a=n(51400),u=i.RangeError,c=String.fromCharCode,s=String.fromCodePoint,l=o([].join),p=!!s&&1!=s.length;r({target:"String",stat:!0,forced:p},{fromCodePoint:function(t){var e,n=[],r=arguments.length,i=0;while(r>i){if(e=+arguments[i++],a(e,1114111)!==e)throw u(e+" is not a valid code point");n[i]=e<65536?c(e):c(55296+((e-=65536)>>10),e%1024+56320)}return l(n,"")}})},82481:function(t,e,n){var r=n(82109),i=n(38415);r({target:"String",proto:!0},{repeat:i})},95431:function(t,e,n){"use strict";var r=n(68932),i=n(62032),o=(n(21703),n(92222),n(74916),n(15306),n(94953),n(69600),n(41539),n(39714),n(79841),n(21249),n(82481),"unicode_number"),a="html_entity_10",u="html_entity_16",c="unicode_point_default",s="unicode_point_wide",l="unicode_point_wide_brace",p="css_entitie";e["Z"]={type:{unicode_point_default:c,unicode_point_wide:s,unicode_point_wide_brace:l,unicode_number:o,html_entity_10:a,html_entity_16:u,css_entitie:p},decode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,n=function(t,e){try{return e&&e()}catch(n){throw new Error("".concat(t," decode error:").concat(n.message))}};switch(e){case this.type.unicode_point_default:return t.replace(/\\u[0-9a-fA-F]{4}/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.toLowerCase().replace("\\u",""))))}))}));case this.type.unicode_point_wide:return t.replace(/\\u[0-9a-fA-F]{1,6}/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.toLowerCase().replace("\\u",""))))}))}));case this.type.unicode_point_wide_brace:return t.replace(/\\u{[0-9a-fA-F]{1,6}}/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.toLowerCase().replace("\\u","").replace("{","").replace("}",""))))}))}));case this.type.unicode_number:return t.replace(/U\+[0-9a-fA-F]{1,6}/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.replace("U","").toLowerCase().replace("+",""))))}))}));case this.type.html_entity_10:return t.replace(/&#[0-9]+;/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("".concat(t.replace("&#","").replace(";",""))))}))}));case this.type.html_entity_16:return t.replace(/&#x[0-9a-fA-F]{1,6};/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.replace("&#x","").toLowerCase().replace(";",""))))}))}));case this.type.css_entitie:return t.replace(/\\[0-9a-fA-F]{1,6}/g,(function(t){return n(t,(function(){return String.fromCodePoint(parseInt("0x".concat(t.replace("\\","").toLowerCase())))}))}))}throw new Error("decode type error")},encode:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=[],u=(0,i.Z)(t);try{for(u.s();!(e=u.n()).done;){var s=e.value,l=s.codePointAt(0).toString(10),p=s.codePointAt(0).toString(16);if(p.length<3&&o)a.push(s);else{var h=this.repair(p);switch(n){case this.type.unicode_point_default:p.length>4?a.push.apply(a,(0,r.Z)(this.charToUtf16(s).map((function(t){return"\\u".concat(t)})))):a.push("\\u".concat(h));break;case this.type.unicode_point_wide:a.push("\\u".concat(h));break;case this.type.unicode_point_wide_brace:a.push("\\u{".concat(p,"}"));break;case this.type.unicode_number:a.push("U+".concat(h.toUpperCase()));break;case this.type.html_entity_10:a.push("&#".concat(l,";"));break;case this.type.html_entity_16:a.push("&#x".concat(p,";"));break;case this.type.css_entitie:a.push("\\".concat(h));break;default:throw new Error("encode type error")}}}}catch(d){u.e(d)}finally{u.f()}return a.join("")},charToUtf16:function(t){for(var e=[],n=0;n<t.length;n++)e[n]=this.repair(t.charCodeAt(n).toString(16));return e},repair:function(t){return t.length>3?t:"".concat("0".repeat(4-t.length)).concat(t)}}},68932:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(23748);function i(t){if(Array.isArray(t))return(0,r.Z)(t)}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(91038);function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=n(48936);n(21703);function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||(0,a.Z)(t)||u()}}}]);