import{p as c,o as f,c as _,w as n,b as a,u as e,H as w,d as t,L as g,n as V,q as v,e as d}from"./app.33f38fd1.js";import{_ as b}from"./GuestLayout.57e6f026.js";import{_ as r,a as m}from"./InputLabel.1338d6d9.js";import{_ as y}from"./PrimaryButton.b347bd6b.js";import{_ as i}from"./TextInput.f38241c2.js";import"./ApplicationLogo.d2a87fcc.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=["onSubmit"],k={class:"mt-4"},h={class:"mt-4"},q={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},N=d(" Already registered? "),U=d(" Register "),j={__name:"Register",setup(B){const s=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(p,o)=>(f(),_(b,null,{default:n(()=>[a(e(w),{title:"Register"}),t("form",{onSubmit:v(u,["prevent"])},[t("div",null,[a(r,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(s).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),t("div",k,[a(r,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[1]||(o[1]=l=>e(s).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",h,[a(r,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[2]||(o[2]=l=>e(s).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[a(r,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>e(s).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[a(e(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[N]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:n(()=>[U]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{j as default};
