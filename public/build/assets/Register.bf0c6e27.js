import{m as c,o as f,c as _,w as n,e as a,u as e,H as w,g as t,L as g,n as V,p as v,f as d}from"./app.74a6c1d3.js";import{_ as b}from"./GuestLayout.0fc6cf93.js";import{_ as r,a as m}from"./InputLabel.2ef3d81c.js";import{_ as y}from"./PrimaryButton.0eb89c08.js";import{_ as i}from"./TextInput.ce0a52a2.js";import"./ApplicationLogo.55633c00.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=["onSubmit"],k={class:"mt-4"},h={class:"mt-4"},$={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},N=d(" Already registered? "),U=d(" Register "),j={__name:"Register",setup(B){const s=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(p,o)=>(f(),_(b,null,{default:n(()=>[a(e(w),{title:"Register"}),t("form",{onSubmit:v(u,["prevent"])},[t("div",null,[a(r,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(s).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),t("div",k,[a(r,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[1]||(o[1]=l=>e(s).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",h,[a(r,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[2]||(o[2]=l=>e(s).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",$,[a(r,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>e(s).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",q,[a(e(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[N]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:n(()=>[U]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{j as default};