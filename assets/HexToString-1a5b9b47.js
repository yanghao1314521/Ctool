import{u as _,i as f}from"./action-b240ad25.js";import{c as g,a as h}from"./index-7e4fc5f6.js";import{D as T,bj as V,n as w,bk as p,aG as a,at as b,y as i,b0 as n}from"./history-85bd2cc3.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";const O=T({__name:"HexToString",async setup(v){let o,r;const t=_(([o,r]=V(()=>f({input:g("hex"),output:h("text")})),o=await o,r(),o));return(A,e)=>{const l=a("TextInput"),s=a("TextOutput"),c=a("Align"),m=a("HeightResize");return b(),w(m,{reduce:5},{default:p(({small:d,large:x})=>[i(c,{direction:"vertical"},{default:p(()=>[i(l,{allow:["hex"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d,upload:"file"},null,8,["modelValue","height"]),i(s,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["text","base64"],content:n(t).current.input.text,height:x,onSuccess:e[2]||(e[2]=u=>n(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{O as default};
