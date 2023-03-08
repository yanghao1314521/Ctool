import{u as T,i as k}from"./action-b240ad25.js";import{c as S,T as D}from"./index-7e4fc5f6.js";import{C as a}from"./index-8c295080.js";import{s as z}from"./index-636623a5.js";import{D as M,bj as U,l as b,bm as j,p as H,y as s,bk as m,aG as d,aH as I,at as w,b0 as p,F as L,aE as F,n as R}from"./history-85bd2cc3.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d7672017.js";import"./string_decoder-7fdcd1c7.js";import"./callBound-7203e6b7.js";import"./index-71a93be5.js";const v=["md5","sha1","sha256","sha512","sm3"],y={md5:(n,t)=>a.HmacMD5(a.enc.Base64.parse(n.toBase64()),a.enc.Base64.parse(t.toBase64())).toString(),sha1:(n,t)=>a.HmacSHA1(a.enc.Base64.parse(n.toBase64()),a.enc.Base64.parse(t.toBase64())).toString(),sha256:(n,t)=>a.HmacSHA256(a.enc.Base64.parse(n.toBase64()),a.enc.Base64.parse(t.toBase64())).toString(),sha512:(n,t)=>a.HmacSHA512(a.enc.Base64.parse(n.toBase64()),a.enc.Base64.parse(t.toBase64())).toString(),sm3:(n,t)=>{const h=(l,r)=>l.length>=r?l:new Array(r-l.length+1).join("0")+l;let e=n.toHexString();const _=[];let f=e.length;f%2!==0&&(e=h(e,f+1)),f=e.length;for(let l=0;l<f;l+=2)_.push(parseInt(e.substr(l,2),16));return z.sm3(_,{key:t.toHexString()})}},V=(n,t,h)=>{if(!Object.keys(y).includes(n))throw new Error(`hmac method 不存在: ${n}`);return y[n](t,h)},te=M({__name:"Hmac",async setup(n){let t,h;const e=T(([t,h]=U(()=>k({input:S(),secret:S("text"),is_uppercase:!1,multiple:!1})),t=await t,h(),t)),_=b(()=>["text"].includes(e.current.input.type)),f=b(()=>{let r={md5:"",sha1:"",sha256:"",sha512:"",sm3:""};if(e.current.input.text.isEmpty()||e.current.secret.text.isEmpty())return r;console.log(123123);let o=!1;for(let i of v)try{if(e.current.input.text.isError())throw new Error(`input:${e.current.input.text.toString()}`);if(e.current.secret.text.isError())throw new Error(`secret:${e.current.secret.text.toString()}`);const u=l(i,e.current.input.text,e.current.secret.text,_.value&&e.current.multiple);r[i]=e.current.is_uppercase?u.toUpperCase():u.toLowerCase()}catch(u){o=!0,r[i]=$error(u)}return o||e.save(),r}),l=(r,o,i,u)=>u?o.toString().split(`
`).map(x=>V(r,D.fromString(x,o.encoding()),i)).join(`
`):V(r,o,i);return(r,o)=>{const i=d("TextInput"),u=d("HeightResize"),x=d("Bool"),A=d("Tooltip"),B=d("Align"),C=d("Display"),E=d("Textarea"),$=I("row");return j((w(),H("div",null,[s(B,{direction:"vertical"},{default:m(()=>[s(C,null,{extra:m(()=>[s(B,null,{default:m(()=>[s(x,{size:"small",modelValue:p(e).current.is_uppercase,"onUpdate:modelValue":o[1]||(o[1]=c=>p(e).current.is_uppercase=c),border:"",label:r.$t("hmac_uppercase")},null,8,["modelValue","label"]),s(A,{content:r.$t("hmac_multiple_tooltip")},{default:m(()=>[s(x,{disabled:!_.value,size:"small",modelValue:p(e).current.multiple,"onUpdate:modelValue":o[2]||(o[2]=c=>p(e).current.multiple=c),border:"",label:r.$t("hmac_multiple")},null,8,["disabled","modelValue","label"])]),_:1},8,["content"])]),_:1})]),default:m(()=>[s(u,{append:[".ctool-page-option"],reduce:5},{default:m(({height:c})=>[s(i,{modelValue:p(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=g=>p(e).current.input=g),height:c,upload:"file",encoding:""},null,8,["modelValue","height"])]),_:1},8,["append"])]),_:1}),s(i,{class:"ctool-page-option",modelValue:p(e).current.secret,"onUpdate:modelValue":o[3]||(o[3]=c=>p(e).current.secret=c),"use-input":r.$t("hmac_secret"),allow:["text","hex","base64"]},null,8,["modelValue","use-input"])]),_:1}),s(u,null,{default:m(({height:c})=>[s(B,{direction:"vertical"},{default:m(()=>[(w(!0),H(L,null,F(p(v),g=>(w(),R(E,{"model-value":f.value[g],height:(c-20)/5,placeholder:`HMAC-${g}`,copy:`HMAC-${g}`},null,8,["model-value","height","placeholder","copy"]))),256))]),_:2},1024)]),_:1})])),[[$,"10-14"]])}}});export{te as default};
