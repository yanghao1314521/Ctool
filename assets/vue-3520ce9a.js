import{p as t}from"./standalone-a7cb244c.js";import{p as r}from"./parser-html-22a78503.js";import{B as e}from"./base-f0edccdd.js";import"./tool-46f7d67b.js";import"./modulepreload-polyfill-3cfb730f.js";const m=new class extends e{async beautify(){return t.format(this.code,{plugins:[r],parser:"vue",tabWidth:this.getOptionValue("tab",4)})}};export{m as formatter};
