import{a as e,_ as d,b as _}from"./AddTask.99ddfb62.js";import{_ as f}from"./PrimaryButton.753b1b91.js";import{r as h,a as p,o as k,c as b,w as o,b as n,d as M,n as A,e as x}from"./app.17f71fce.js";import"./TextInput.eb628ad4.js";const T={class:"flex justify-center"},g=x(" \u041D\u043E\u0432\u0456 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 "),S={__name:"Addition",setup(w){const a=h({tasksArr:[]});l();function l(){a.tasksArr.length=0;for(let t=0;t<10;t++)switch(u(e)){case e.PLUS:a.tasksArr.push(c());break;case e.MINUS:a.tasksArr.push(i());break}}function c(){let t=Math.floor(Math.random()*81)+10,s=Math.floor(Math.random()*(100-t-10+1))+10;return{a:t,b:s,operation:e.PLUS}}function i(){let t=Math.floor(Math.random()*90)+10,s=Math.floor(Math.random()*(t-10+1))+10;return{a:t,b:s,operation:e.MINUS}}function u(t){const s=Object.keys(t),r=Math.floor(Math.random()*s.length),m=s[r];return t[m]}return(t,s)=>{const r=p("ResultTable");return k(),b(d,null,{tasks:o(()=>[n(_,{tasksArr:a.tasksArr},null,8,["tasksArr"]),M("div",T,[n(f,{onClick:l,class:A(["text-xl bg-blue-900",{hidden:a.isAllRightAnswer===!1}])},{default:o(()=>[g]),_:1},8,["class"])])]),results:o(()=>[n(r,{results:t.results},null,8,["results"])]),_:1})}}};export{S as default};