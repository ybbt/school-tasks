import{_ as h,b as g}from"./AddTask.d97fa018.js";import{_ as w}from"./AddTasksOptions.f964d278.js";import{_ as x}from"./PrimaryButton.b2ea05e6.js";import{D as a,_ as k}from"./ResultTable.1b63a28c.js";import{r as T,o as b,c as R,w as o,d as n,b as e,n as v,e as D,B as $}from"./app.93923dc8.js";import"./TextInput.07fe29ba.js";import"./Checkbox.68a16e80.js";const N={class:"flex flex-wrap justify-center mx-2"},y={class:"flex flex-col items-center min-w-max"},C={class:"flex justify-center"},O=D(" \u041D\u043E\u0432\u0456 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 "),S={__name:"Division",props:["operation","results"],setup(c){const t=T({tasksArr:[],DateTimeStart:a.now(),DateTimeEnd:null,optionsArr:null,isAllRightAnswer:!1,isNotFirstOpenPage:!1});function m(s){t.optionsArr=s.optionsList,l()}function f(){t.DateTimeEnd=a.now();let s=t.DateTimeEnd.diff(t.DateTimeStart),u={operation:`\u0434\u0456\u043B\u0435\u043D\u043D\u044F (${t.optionsArr.reduce(function(A,d){return`${A}, ${d}`})})`,resolution_time:s.toFormat("hh:mm:ss"),operation_id:"division"};t.isNotFirstOpenPage&&$.Inertia.post("save_statistics",u),l()}function l(){if(t.tasksArr.length=0,t.optionsArr.length>0)for(let s=0;s<10;s++)t.tasksArr.push(p()),t.DateTimeStart=a.now();t.isNotFirstOpenPage=!0}function p(){let s=Math.floor(Math.random()*(t.optionsArr.length-0)+0),i=Math.floor(Math.random()*(10-1+1))+1,r=t.optionsArr[s];return{a:i*r,b:r,operation:":"}}function _(s){t.isAllRightAnswer=s.isAllRightAnswer}return(s,i)=>(b(),R(h,null,{tasks:o(()=>[n("div",N,[e(w,{onChangeOptionsList:m})]),n("div",y,[e(g,{onChangeIsAllRightAnswer:_,tasksArr:t.tasksArr},null,8,["tasksArr"])]),n("div",C,[e(x,{onClick:f,class:v(["text-xl mt-5",{"bg-blue-900":t.isAllRightAnswer,"bg-gray-400":!t.isAllRightAnswer,"hover:bg-gray-400":!t.isAllRightAnswer,"active:bg-gray-400":!t.isAllRightAnswer}]),disabled:!t.isAllRightAnswer},{default:o(()=>[O]),_:1},8,["class","disabled"])])]),results:o(()=>[e(k,{results:c.results},null,8,["results"])]),_:1}))}};export{S as default};