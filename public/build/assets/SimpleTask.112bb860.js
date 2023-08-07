import{_ as k,b as M,a as o}from"./AddTask.d97fa018.js";import{_ as w}from"./AddTasksOptions.f964d278.js";import{_ as L}from"./PrimaryButton.b2ea05e6.js";import{D as l,_ as T}from"./ResultTable.1b63a28c.js";import{r as O,o as x,c as N,w as p,d as c,b as n,n as b,e as $,B as C}from"./app.93923dc8.js";import"./TextInput.07fe29ba.js";import"./Checkbox.68a16e80.js";const R={class:"flex flex-wrap justify-center mx-2"},v={class:"flex flex-col items-center min-w-max"},D={class:"flex justify-center"},I=$(" \u041D\u043E\u0432\u0456 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 "),E={__name:"SimpleTask",props:["operation","results"],setup(m){const i=m,t=O({tasksArr:[],DateTimeStart:l.now(),DateTimeEnd:null,optionsArr:null,isAllRightAnswer:!1,isNotFirstOpenPage:!1});function u(e){t.optionsArr=e.optionsList,f()}function d(){t.DateTimeEnd=l.now();let e=t.DateTimeEnd.diff(t.DateTimeStart),a=t.optionsArr.reduce(function(r,g){return`${r}, ${g}`}),s={operation:null,resolution_time:e.toFormat("hh:mm:ss"),operation_id:null};if(i.operation===o.MULTIPLY.operationMark){let r=`${o.MULTIPLY.operationName} (${a})`;s.operation=r,s.operation_id=o.MULTIPLY.operationMark}else if(i.operation===o.COLON.operationMark){let r=`${o.COLON.operationName} (${a})`;s.operation=r,s.operation_id=o.COLON.operationMark}t.isNotFirstOpenPage&&C.Inertia.post("save_statistics",s),f()}function f(){if(t.tasksArr.length=0,t.optionsArr.length>0)for(let e=0;e<10;e++)i.operation===o.MULTIPLY.operationMark?t.tasksArr.push(h()):i.operation===o.COLON.operationMark&&t.tasksArr.push(A()),t.DateTimeStart=l.now();t.isNotFirstOpenPage=!0}function h(){let e=Math.floor(Math.random()*(t.optionsArr.length-0)+0),a=t.optionsArr[e],s=Math.floor(Math.random()*(10-1+1))+1;return{a,b:s,operation:o.MULTIPLY.sign}}function A(){let e=Math.floor(Math.random()*(t.optionsArr.length-0)+0),a=Math.floor(Math.random()*(10-1+1))+1,s=t.optionsArr[e];return{a:a*s,b:s,operation:o.COLON.sign}}function _(e){t.isAllRightAnswer=e.isAllRightAnswer}return(e,a)=>(x(),N(k,null,{tasks:p(()=>[c("div",R,[n(w,{onChangeOptionsList:u})]),c("div",v,[n(M,{onChangeIsAllRightAnswer:_,tasksArr:t.tasksArr},null,8,["tasksArr"])]),c("div",D,[n(L,{onClick:d,class:b(["text-xl mt-5",{"bg-blue-900":t.isAllRightAnswer,"bg-gray-400":!t.isAllRightAnswer,"hover:bg-gray-400":!t.isAllRightAnswer,"active:bg-gray-400":!t.isAllRightAnswer}]),disabled:!t.isAllRightAnswer},{default:p(()=>[I]),_:1},8,["class","disabled"])])]),results:p(()=>[n(T,{results:m.results},null,8,["results"])]),_:1}))}};export{E as default};