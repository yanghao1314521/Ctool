var w=Object.defineProperty;var N=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(N(n,typeof e!="symbol"?e+"":e,t),t);import{u as F,i as B}from"./action-cc5da9d8.js";import{A as S,bi as V,bl as A,m as I,bj as m,aF as h,aG as k,as as z,x as s,a$ as p}from"./history-4c0a99f7.js";import"./shim-03580cdb.js";import"./_commonjsHelpers-87174ba5.js";const _=[2**3,2**4,2**5,2**6,2**7,2**8,2**9,2**10,2**11,2**12],f=(n="",e=32,t=0)=>n.length<e?t+"0".repeat(e-1-n.length)+n:n;class C{constructor(e,t){d(this,"input");d(this,"length");if(!/^[0-9+-]+$/.test(e))throw new Error("input error");if(!_.includes(t))throw new Error("length error");this.input=e,this.length=t,this.check()}isNegative(){return this.input[0]==="-"}getNumberString(){return["+","-"].includes(this.input[0])?this.input.slice(1):this.input}number(){return BigInt(`${this.isNegative()?"-":""}${this.getNumberString()}`)}check(){if(this.getNumberString()==="0")return;const e=2n**BigInt(this.length-1)-1n,t=-1n*2n**BigInt(this.length-1);if(this.number()>e||this.number()<t)throw new Error(`length:${this.length} input:${t} ~ ${e}`)}trueForm(){const e=(this.isNegative()?-1n*this.number():this.number()).toString(2);return this.isNegative()?f(e,this.length,1):f(e,this.length,0)}inverse(){const e=this.trueForm();if(!this.isNegative())return e;let t="";for(let r=0;r<this.length;r++){const l=e[r];r===0?t+=l:t+=Math.abs(parseInt(l)-1)}return t}complement(){const e=this.trueForm();return this.isNegative()?f((BigInt(`0b${this.inverse()}`)+1n).toString(2),this.length,1):e}}const D=(n,e,t)=>new C(n,e)[t](),R=S({__name:"Binary",async setup(n){let e,t;const r=F(([e,t]=V(()=>B({input:"",length:8},{paste:i=>/^[\d\-+\n]+$/.test(i)})),e=await e,t(),e)),l=i=>{if(r.current.input.trim()==="")return"";let o=[];for(let a of r.current.input.trim().split(`
`))try{o.push(`${D(a.trim(),r.current.length,i)}`)}catch(g){o.push($t("binary_error",[$error(g)]))}return o.length>0&&r.save(),o.join(`
`)};return(i,o)=>{const a=h("Textarea"),g=h("Select"),b=h("Display"),v=h("Align"),y=h("HeightResize"),$=k("row");return A((z(),I(y,null,{default:m(({height:c})=>[s(b,{position:"top-right"},{extra:m(()=>[s(g,{size:"small",modelValue:p(r).current.length,"onUpdate:modelValue":o[1]||(o[1]=u=>p(r).current.length=u),options:p(_).map(u=>({value:u,label:i.$t("binary_length",[u])}))},null,8,["modelValue","options"])]),default:m(()=>[s(a,{height:c,modelValue:p(r).current.input,"onUpdate:modelValue":o[0]||(o[0]=u=>p(r).current.input=u),placeholder:i.$t("binary_input")},null,8,["height","modelValue","placeholder"])]),_:2},1024),s(v,{direction:"vertical"},{default:m(()=>[s(a,{height:(c-10)/3,"model-value":l("trueForm"),placeholder:i.$t("binary_true_form"),copy:i.$t("binary_true_form")},null,8,["height","model-value","placeholder","copy"]),s(a,{height:(c-10)/3,"model-value":l("inverse"),placeholder:i.$t("binary_inverse"),copy:i.$t("binary_inverse")},null,8,["height","model-value","placeholder","copy"]),s(a,{height:(c-10)/3,"model-value":l("complement"),placeholder:i.$t("binary_complement"),copy:i.$t("binary_complement")},null,8,["height","model-value","placeholder","copy"])]),_:2},1024)]),_:1})),[[$,"1-1"]])}}});export{R as default};
