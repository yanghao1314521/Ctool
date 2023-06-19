import{u as B,i as C}from"./action-c9b54af2.js";import{d as E,y as U,z,D as I,c as A,w as u,r as i,f as H,v as l,j as t,C as $,E as L,T as s}from"./tool-65d8c39c.js";import{m as O,k as S,p as j,a as R}from"./cryptoJS-95356ed2.js";import"./modulepreload-polyfill-3cfb730f.js";import"./index-307f6e5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-b68cc4ed.js";import"./string_decoder-b4ce522c.js";import"./index-18fb1479.js";const Q=E({__name:"Encrypt",async setup(h){let p,m;const y={iv:"",type:"advanced",key:"",fill:!0,mode:"CBC",padding:"Pkcs7",key_size:"128"},e=B(([p,m]=U(()=>C({input:$("text"),option:y,output:L("base64")})),p=await p,m(),p)),c=z(()=>{if(e.current.input.text.isEmpty()||e.current.option.key===""||e.current.option.type==="advanced"&&e.current.option.mode!=="ECB"&&e.current.option.iv==="")return s.empty();if(e.current.input.text.isError())return e.current.input.text;try{if(!e.current.input.text.isText())throw new Error("input content must text / text file");return s.fromBase64(R.encrypt(e.current.input.text.toBase64(),e.current.option))}catch(r){return s.fromError($error(r))}});return I(()=>c.value,r=>{r.isEmpty()||e.save()},{immediate:!0,deep:!0}),(r,o)=>{const f=i("TextInput"),a=i("Select"),d=i("Input"),_=i("Bool"),x=i("Tooltip"),V=i("Align"),g=i("HelpTip"),k=i("Tabs"),b=i("TextOutput"),v=i("HeightResize");return H(),A(v,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:u(({small:T,large:w})=>[l(V,{direction:"vertical"},{default:u(()=>[l(f,{modelValue:t(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).current.input=n),height:T,upload:"file",encoding:""},null,8,["modelValue","height"]),l(k,{modelValue:t(e).current.option.type,"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).current.option.type=n),class:"ctool-page-option",lists:[{name:"advanced",label:r.$t("main_ui_advanced")},{name:"simple",label:r.$t("main_ui_simple")}]},{extra:u(()=>[l(g,{link:"https://github.com/brix/crypto-js"})]),default:u(()=>[l(V,null,{default:u(()=>[l(a,{modelValue:t(e).current.option.mode,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).current.option.mode=n),options:t(O)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.key_size,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).current.option.key_size=n),options:t(S)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.padding,"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).current.option.padding=n),options:t(j)},null,8,["modelValue","options"]),l(d,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).current.option.key=n),width:220,label:"key"},null,8,["modelValue"]),l(d,{modelValue:t(e).current.option.iv,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).current.option.iv=n),width:220,label:"iv",disabled:t(e).current.option.mode==="ECB"},{append:u(()=>[l(x,{content:r.$t("aes_iv_auto_fill")},{default:u(()=>[l(_,{modelValue:t(e).current.option.fill,"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).current.option.fill=n),disabled:t(e).current.option.mode==="ECB"},null,8,["modelValue","disabled"])]),_:1},8,["content"])]),_:1},8,["modelValue","disabled"])]),_:1}),l(d,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).current.option.key=n),label:"key"},null,8,["modelValue"])]),_:1},8,["modelValue","lists"]),l(b,{modelValue:t(e).current.output,"onUpdate:modelValue":o[9]||(o[9]=n=>t(e).current.output=n),allow:["base64","hex"],content:t(c),height:w},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{Q as default};