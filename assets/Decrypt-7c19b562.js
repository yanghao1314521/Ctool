import{u as T,i as V}from"./action-741b65e4.js";import{c as k,a as w,T as a}from"./index-b38dfc8b.js";import{b as v}from"./cryptoJS-32abddd0.js";import{A,bi as I,k as B,be as C,m as E,bj as s,aF as o,as as H,x as p,a$ as n}from"./history-a84013f3.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";import"./index-8c295080.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d7672017.js";import"./string_decoder-7fdcd1c7.js";import"./callBound-7203e6b7.js";import"./index-71a93be5.js";const M=A({__name:"Decrypt",async setup(z){let u,c;const m={key:""},t=T(([u,c]=I(()=>V({input:k("base64"),option:m,output:w("text")})),u=await u,c(),u)),l=B(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return a.empty();if(t.current.input.text.isError())return t.current.input.text;try{return a.fromBase64(v.decrypt(t.current.input.text.toBase64(),t.current.option))}catch(i){return a.fromError($error(i))}});return C(()=>l.value,i=>{i.isEmpty()||t.save()},{immediate:!0,deep:!0}),(i,e)=>{const d=o("TextInput"),x=o("HelpTip"),_=o("Input"),f=o("TextOutput"),y=o("Align"),g=o("HeightResize");return H(),E(g,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:s(({small:h,large:b})=>[p(y,{direction:"vertical"},{default:s(()=>[p(d,{modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).current.input=r),allow:["base64","hex"],height:h},null,8,["modelValue","height"]),p(_,{class:"ctool-page-option",modelValue:n(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).current.option.key=r),label:"key"},{suffix:s(()=>[p(x,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),p(f,{modelValue:n(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=r=>n(t).current.output=r),allow:["text"],content:l.value,height:b,encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{M as default};