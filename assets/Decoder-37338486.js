import{u as x,i as g}from"./action-20425d74.js";import{c as f,a as h}from"./index-e2379d3d.js";import{a4 as V,b0 as w,U as T,b1 as s,aG as a,ay as b,a2 as i,x as n}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";import"./index-cc134824.js";const U=V({__name:"Decoder",async setup(v){let o,r;const t=x(([o,r]=w(()=>g({input:f("base64"),output:h()})),o=await o,r(),o));return(A,e)=>{const p=a("TextInput"),l=a("TextOutput"),c=a("Align"),m=a("HeightResize");return b(),T(m,{reduce:5},{default:s(({small:d,large:_})=>[i(c,{direction:"vertical"},{default:s(()=>[i(p,{allow:["base64"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d},null,8,["modelValue","height"]),i(l,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["text","hex","image","down"],content:n(t).current.input.text,height:_,onSuccess:e[2]||(e[2]=u=>n(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{U as default};