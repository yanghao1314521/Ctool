import{u as R,i as T}from"./action-cc5da9d8.js";import{d as y,c as q}from"./radix-56f2acb1.js";import{A as J,bi as K,k as o,aA as U,be as O,o as d,x as s,bj as c,F as k,aF as m,aG as Q,as as l,aD as z,m as g,a$ as u,n as W,bu as C,bl as E,p as X,aT as Y,ae as Z}from"./history-4c0a99f7.js";import"./shim-03580cdb.js";import"./_commonjsHelpers-87174ba5.js";const ee={key:0},te={style:{width:"100%","row-gap":"5px"}},re=["onClick"],pe=J({__name:"Radix",async setup(ne){let _,w;const t=R(([_,w]=K(()=>T({type:0,input:"",map:[2,8,10,16,60,64],alphabet:""},{paste:!1})),_=await _,w(),_)),v="large",S=o(()=>C.range(2,65).map(e=>({value:e,label:$t("radix_base",[e])})));let h=U(!1),p=U(t.current.alphabet||y);const F=()=>{p.value=y};O(()=>p.value,e=>{t.current.alphabet=e===y?"":e});const $=o(()=>/^[\-0-9]+$/.test(a(10))&&/^[\-0-1]+$/.test(a(2))),a=e=>{if(p.value.length!==64)return $t("radix_alphabet_length_error");if(t.current.type===0||t.current.input==="")return"";if(t.current.type===e)return t.current.input;try{return q(t.current.input,t.current.type,e,p.value)}catch(n){return $error(n)}},i=(e,n)=>{t.current.input=n,t.current.type=e,t.current.input!==""&&t.save()},I=o({get:()=>a(t.current.map[0]),set:e=>i(t.current.map[0],e)}),N=o({get:()=>a(t.current.map[1]),set:e=>i(t.current.map[1],e)}),H=o({get:()=>a(t.current.map[2]),set:e=>i(t.current.map[2],e)}),P=o({get:()=>a(t.current.map[3]),set:e=>i(t.current.map[3],e)}),j=o({get:()=>a(t.current.map[4]),set:e=>i(t.current.map[4],e)}),G=o({get:()=>a(t.current.map[5]),set:e=>i(t.current.map[5],e)}),f={number0:I,number1:N,number2:H,number3:P,number4:j,number5:G};return(e,n)=>{const x=m("Input"),L=m("Select"),V=m("Button"),A=m("Align"),B=m("Display"),M=m("ExtendPage"),D=Q("row");return l(),d(k,null,[s(A,{direction:"vertical"},{default:c(()=>[(l(!0),d(k,null,z(u(C.range)(0,6),r=>(l(),g(B,{position:"right-center"},{extra:c(()=>[s(A,null,{default:c(()=>[s(L,{modelValue:u(t).current.map[r],"onUpdate:modelValue":b=>u(t).current.map[r]=b,options:S.value,size:"small",disabled:$.value&&u(t).current.map[r]===u(t).current.type},null,8,["modelValue","onUpdate:modelValue","options","disabled"]),$.value?(l(),g(V,{key:0,text:e.$t("main_ui_copy"),onClick:b=>e.$copy(f[`number${r}`].value),size:"small",type:"primary"},null,8,["text","onClick"])):W("",!0)]),_:2},1024)]),default:c(()=>[s(x,{modelValue:f[`number${r}`].value,"onUpdate:modelValue":b=>f[`number${r}`].value=b,placeholder:e.$t("radix_input_placeholder"),size:v},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024))),256)),$.value?E((l(),d("div",ee,[s(V,{size:v,onClick:n[0]||(n[0]=r=>h.value=!0),text:e.$t("main_ui_more")},null,8,["text"]),s(V,{size:v,onClick:n[1]||(n[1]=r=>u(t).current.input=""),text:e.$t("main_ui_clear")},null,8,["text"])])),[[D,"1-100px"]]):(l(),g(B,{key:1,position:"right-center",text:p.value!==u(y)?e.$t("radix_reset"):"",type:"danger",onClick:F},{default:c(()=>[s(x,{modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=r=>p.value=r),placeholder:e.$t("radix_alphabet"),size:v,label:e.$t("radix_alphabet")},null,8,["modelValue","placeholder","label"])]),_:1},8,["text"]))]),_:1}),s(M,{modelValue:h.value,"onUpdate:modelValue":n[3]||(n[3]=r=>h.value=r)},{default:c(()=>[E((l(),d("div",te,[(l(!0),d(k,null,z(u(C.range)(2,65),r=>(l(),g(x,{"model-value":a(r)},{prepend:c(()=>[X("span",{style:Z({...r===u(t).current.type?{color:"red"}:{},width:"20px",cursor:"pointer"}),onClick:()=>e.$copy(a(r))},Y(r),13,re)]),_:2},1032,["model-value"]))),256))])),[[D,"1-1-1"]])]),_:1},8,["modelValue"])],64)}}});export{pe as default};
