import{u as g,i as v}from"./action-20425d74.js";import{_ as V,U as x}from"./util-68339617.js";import{a4 as U,b0 as $,Q as z,U as A,b1 as i,aG as n,ay as C,a2 as a,x as r}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";const H=U({__name:"Decoder",async setup(b){let l,p;const e=g(([l,p]=$(()=>v({input:"",type:"unicode_point_default"})),l=await l,p(),l)),c=z(()=>{if(e.current.input!==""){e.save();try{return x.decode(e.current.input,e.current.type)}catch(o){return $error(o)}}});return(o,u)=>{const s=n("Textarea"),d=n("Select"),m=n("Display"),_=n("Align"),h=n("HeightResize");return C(),A(h,{reduce:5},{default:i(({small:f,large:y})=>[a(_,{direction:"vertical"},{default:i(()=>[a(m,null,{extra:i(()=>[a(d,{size:"small",modelValue:r(e).current.type,"onUpdate:modelValue":u[1]||(u[1]=t=>r(e).current.type=t),options:r(V).map(t=>({value:t,label:o.$t(`unicode_mode_${t}`)}))},null,8,["modelValue","options"])]),default:i(()=>[a(s,{modelValue:r(e).current.input,"onUpdate:modelValue":u[0]||(u[0]=t=>r(e).current.input=t),placeholder:o.$t("main_ui_input"),height:f},null,8,["modelValue","placeholder","height"])]),_:2},1024),a(s,{"model-value":c.value,placeholder:o.$t("main_ui_output"),height:y,copy:""},null,8,["model-value","placeholder","height"])]),_:2},1024)]),_:1})}}});export{H as default};