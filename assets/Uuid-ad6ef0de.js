import{aY as I,aZ as w,d as z,y as C,z as O,o as B,D as _,c as S,w as i,r as s,f as $,v as l,j as a,X as A,S as h}from"./tool-65d8c39c.js";import{u as j,i as k}from"./action-c9b54af2.js";import"./modulepreload-polyfill-3cfb730f.js";function N(p){if(!I(p))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(p.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(p.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(p.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(p.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(p.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}const D=N,H=w,L=z({__name:"Uuid",async setup(p){let e,r;const t=j(([e,r]=C(()=>k({amount:10,hyphens:!0,is_add_quote:!1,isUpper:!1,uint8_array:!1,outputOption:A("text"),result:[]})),e=await e,r(),e)),c=()=>{let n=[];for(let o=0,f=t.current.amount;o<f;o++)n.push(H());t.current.result=n},y=O(()=>t.current.result.length<1?h.empty():h.formObject(t.current.result.map(n=>(t.current.uint8_array&&(n="["+D(n).toString()+"]"),t.current.hyphens||(n=n.replace(/-/g,"")),t.current.isUpper?n.toUpperCase():n.toLowerCase()))));return B(()=>{t.current.result.length<1&&c()}),_(()=>t.current.amount,()=>{c()}),_(()=>t.current,n=>{n.result.length<1||t.save()},{deep:!0,immediate:!0}),(n,o)=>{const f=s("SerializeOutput"),x=s("HeightResize"),V=s("InputNumber"),d=s("Bool"),b=s("Icon"),U=s("Button"),m=s("Align"),g=s("Card");return $(),S(m,{direction:"vertical"},{default:i(()=>[l(x,{reduce:5,append:[".ctool-page-option"]},{default:i(({height:u})=>[l(f,{modelValue:a(t).current.outputOption,"onUpdate:modelValue":o[0]||(o[0]=v=>a(t).current.outputOption=v),allow:["json","xml","yaml","toml","properties","php_array","text"],height:u,content:a(y)},null,8,["modelValue","height","content"])]),_:1},8,["append"]),l(g,{class:"ctool-page-option"},{default:i(()=>[l(m,{horizontal:"center"},{default:i(()=>[l(V,{modelValue:a(t).current.amount,"onUpdate:modelValue":o[1]||(o[1]=u=>a(t).current.amount=u),label:n.$t("uuid_amount"),width:110},null,8,["modelValue","label"]),l(d,{border:"",label:n.$t("uuid_hyphens"),modelValue:a(t).current.hyphens,"onUpdate:modelValue":o[2]||(o[2]=u=>a(t).current.hyphens=u)},null,8,["label","modelValue"]),l(d,{border:"",label:n.$t("uuid_is_upper"),modelValue:a(t).current.isUpper,"onUpdate:modelValue":o[3]||(o[3]=u=>a(t).current.isUpper=u)},null,8,["label","modelValue"]),l(d,{border:"",label:n.$t("uuid_uint8_array"),modelValue:a(t).current.uint8_array,"onUpdate:modelValue":o[4]||(o[4]=u=>a(t).current.uint8_array=u)},null,8,["label","modelValue"]),l(U,{onClick:c},{default:i(()=>[l(b,{name:"refresh"})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{L as default};