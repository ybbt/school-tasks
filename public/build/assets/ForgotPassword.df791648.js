import{p as d,o as i,c as u,w as r,b as t,u as e,H as c,f as _,t as f,x as p,d as a,n as w,q as g,e as b}from"./app.20551f42.js";import{_ as x}from"./GuestLayout.8ef8683f.js";import{_ as y,a as h}from"./InputLabel.eb9d88c7.js";import{_ as k}from"./PrimaryButton.946fd72f.js";import{_ as V}from"./TextInput.e8505741.js";import"./ApplicationLogo.8475768c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},F=b(" Email Password Reset Link "),D={__name:"ForgotPassword",props:{status:String},setup(o){const s=d({email:""}),m=()=>{s.post(route("password.email"))};return(S,l)=>(i(),u(x,null,{default:r(()=>[t(e(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:g(m,["prevent"])},[a("div",null,[t(y,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(h,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),a("div",B,[t(k,{class:w({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:r(()=>[F]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{D as default};