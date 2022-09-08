import{l as k,h as w,m as x,b as s,o as d,g,p as y,u as v,c,w as m,a,H as V,t as $,k as u,d as r,L as B,n as C,e as L,f as h}from"./app.1105034c.js";import{_ as N,a as R}from"./PrimaryButton.889e5746.js";import{_ as p,a as f,b as _}from"./TextInput.50daff12.js";import"./ApplicationLogo.89db0a7c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=k({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>w((d(),g("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=b=>y(n)?n.value=b:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,S)),[[x,s(n)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],P={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},H=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M={class:"flex items-center justify-end mt-4"},j=h(" Forgot your password? "),z=h(" Log in "),K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),c(N,null,{default:m(()=>[a(s(V),{title:"Log in"}),l.status?(d(),g("div",q,$(l.status),1)):u("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[a(p,{for:"email",value:"Email"}),a(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",P,[a(p,{for:"password",value:"Password"}),a(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",D,[r("label",E,[a(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),H])]),r("div",M,[l.canResetPassword?(d(),c(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[j]),_:1},8,["href"])):u("",!0),a(R,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[z]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{K as default};
