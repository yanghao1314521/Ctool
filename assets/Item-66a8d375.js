import{d as c,f as a,k as o,s as i,l as s,m as n,aX as d}from"./tool-65d8c39c.js";const r={class:"ctool-ipcalc-item-value"},m={key:0,class:"ctool-ipcalc-item-title"},u=c({__name:"Item",props:{title:{type:String,default:""},value:{type:[String,Number],default:""}},setup(e){return(l,t)=>(a(),o("div",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=_=>l.$copy(`${e.value}`)),class:"ctool-ipcalc-item"},[i("div",r,s(e.value),1),e.title!==""?(a(),o("div",m,s(e.title),1)):n("",!0)]))}});const v=d(u,[["__scopeId","data-v-15d07d1a"]]);export{v as I};