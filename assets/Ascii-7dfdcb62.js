var z=Object.defineProperty;var I=(n,t,c)=>t in n?z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[t]=c;var D=(n,t,c)=>(I(n,typeof t!="symbol"?t+"":t,c),c);import{u as P,i as j}from"./action-c9b54af2.js";import{r as u}from"./radix-450ef310.js";import{d as B,z as f,r as _,f as m,c as L,w as p,v as r,j as C,y as K,I as X,k as w,V as A,F as v,q as M,m as q}from"./tool-65d8c39c.js";import"./modulepreload-polyfill-3cfb730f.js";const $=["NUL","SOH","STX","ETX","EOT","ENQ","ACK","BEL","BS","HT","LF","VT","FF","CR","SO","SI","DLE","DC1","DC2","DC3","DC4","NAK","SYN","ETB","CAN","EM","SUB","ESC","FS","GS","RS","US","SPACE","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","DEL"],S={NUL:$t("ascii_code_nul"),SOH:$t("ascii_code_soh"),STX:$t("ascii_code_stx"),ETX:$t("ascii_code_etx"),EOT:$t("ascii_code_eot"),ENQ:$t("ascii_code_enq"),ACK:$t("ascii_code_ack"),BEL:$t("ascii_code_bel"),BS:$t("ascii_code_bs"),HT:$t("ascii_code_tab"),LF:$t("ascii_code_lf"),VT:$t("ascii_code_vt"),FF:$t("ascii_code_ff"),CR:$t("ascii_code_cr"),SO:$t("ascii_code_so"),SI:$t("ascii_code_si"),DLE:$t("ascii_code_dle"),DC1:$t("ascii_code_dc1"),DC2:$t("ascii_code_dc2"),DC3:$t("ascii_code_dc3"),DC4:$t("ascii_code_dc4"),NAK:$t("ascii_code_nak"),SYN:$t("ascii_code_syn"),ETB:$t("ascii_code_etb"),CAN:$t("ascii_code_can"),EM:$t("ascii_code_em"),SUB:$t("ascii_code_sub"),ESC:$t("ascii_code_esc"),FS:$t("ascii_code_fs"),GS:$t("ascii_code_gs"),RS:$t("ascii_code_rs"),US:$t("ascii_code_us"),DEL:$t("ascii_code_del"),SPACE:$t("ascii_code_space")};class G{constructor(t,c="str"){D(this,"decData");let e=-1;switch(t=`${t}`,c!=="str"&&(t=t.toLowerCase()),c){case"str":e=t.charCodeAt(0);break;case"dec":/^[0-9 ]+$/.test(t)&&(e=parseInt(u(t,10,10)));break;case"hex":/^[0-9a-f ]+$/.test(t)&&(e=parseInt(u(t,16,10)));break;case"oct":/^[0-7 ]+$/.test(t)&&(e=parseInt(u(t,8,10)));break;case"bin":/^[0-1 ]+$/.test(t)&&(e=parseInt(u(t.replace(/\b(0+)/gi,""),2,10)));break;default:throw new Error("type error")}if(e<0||e>127)throw new Error(`"${t}": input error`);this.decData=`${e}`}dec(){return this.decData+""}hex(){return(u(this.decData,10,16)+"").toUpperCase()}oct(){return u(this.decData,10,8)+""}bin(){return(u(this.decData,10,2)+"").padStart(8,"0")}str(){const t=$[this.decData],c={SPACE:" ",HT:"	",LF:`
`,CR:"\r"};return t in c?c[t]:Object.keys(S).includes(t)?`[${t}]`:$[this.decData]}}const b=(n,t,c)=>{if(n==="")return"";if(t==="str")for(let i of Object.keys(S))n=n.replace(new RegExp(`\\[${i}\\]`,"g"),String.fromCharCode($.indexOf(i)));let e=[];for(const i of n.split(t==="str"?"":" ")){if(t!=="str"&&i==="")continue;let a=new G(i,t);e.push(a[c]())}return e.join(c==="str"?"":" ")},Q=B({__name:"Reference",setup(n){const t=f(()=>{let e=[];for(let i in $){const a=!($[i]in S);e.push({dec:`${i}`,hex:b(i,"dec","hex"),oct:b(i,"dec","oct"),bin:b(i,"dec","bin"),str:$[i],is_visible:a?$t("ascii_yes"):$t("ascii_no"),explain:a?"":S[$[i]]})}return e}),c=[{title:$t("ascii_input_dec"),key:"dec",width:70},{title:$t("ascii_input_hex"),key:"hex",width:90},{title:$t("ascii_input_oct"),key:"oct",width:70},{title:$t("ascii_input_bin"),key:"bin",width:95},{title:$t("ascii_input_str"),key:"str",width:70},{title:$t("ascii_is_visible"),key:"is_visible",width:90},{title:$t("ascii_description"),key:"explain"}];return(e,i)=>{const a=_("Table"),l=_("HeightResize");return m(),L(l,null,{default:p(({height:E})=>[r(a,{columns:c,lists:C(t),height:E},null,8,["lists","height"])]),_:1})}}}),et=B({__name:"Ascii",async setup(n){let t,c;const e=P(([t,c]=K(()=>j({type:"",input:""},{paste:!1})),t=await t,c(),t));let i=X(!1);const a=s=>{if(e.current.type===""||e.current.input==="")return"";if(e.current.type===s)return e.current.input;try{return b(e.current.input,e.current.type,s)}catch(o){return $error(o)}},l=(s,o)=>{e.current.input=o,e.current.type=s,e.current.input!==""&&e.save()},E=f({get:()=>a("dec"),set:s=>l("dec",s)}),R=f({get:()=>a("hex"),set:s=>l("hex",s)}),T=f({get:()=>a("oct"),set:s=>l("oct",s)}),V=f({get:()=>a("bin"),set:s=>l("bin",s)}),H=f({get:()=>a("str"),set:s=>l("str",s)}),k={dec:E,hex:R,oct:T,bin:V,str:H};return(s,o)=>{const N=_("Textarea"),y=_("Button"),g=_("Align"),F=_("Display"),U=_("HeightResize"),O=_("ExtendPage");return m(),w(v,null,[r(U,null,{default:p(({height:h})=>[r(g,{direction:"vertical"},{default:p(()=>[(m(),w(v,null,M(["str","bin","oct","dec","hex"],d=>r(F,{position:"bottom-right"},{extra:p(()=>[r(g,null,{default:p(()=>[d==="str"?(m(),L(y,{key:0,size:"small",onClick:o[0]||(o[0]=x=>A(i)?i.value=!C(i):i=!C(i)),text:s.$t("main_ui_reference")},null,8,["text"])):q("",!0),r(y,{size:"small",type:"primary",onClick:x=>s.$copy(k[d].value),text:s.$t(`ascii_input_${d}`)},null,8,["onClick","text"])]),_:2},1024)]),default:p(()=>[r(N,{modelValue:k[d].value,"onUpdate:modelValue":x=>k[d].value=x,placeholder:d==="str"?s.$t("ascii_input_str_prompt"):s.$t("ascii_input_prompt",[s.$t(`ascii_input_${d}`)]),height:(h-20)/5},null,8,["modelValue","onUpdate:modelValue","placeholder","height"])]),_:2},1024)),64))]),_:2},1024)]),_:1}),r(O,{modelValue:C(i),"onUpdate:modelValue":o[1]||(o[1]=h=>A(i)?i.value=h:i=h)},{default:p(()=>[r(Q)]),_:1},8,["modelValue"])],64)}}});export{et as default};