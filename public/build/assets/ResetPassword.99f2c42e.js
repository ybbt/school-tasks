import{p as c,o as f,c as _,w as n,b as e,u as o,H as w,f as t,n as V,q as g,d as b}from"./app.b80f6c87.js";import{_ as k}from"./GuestLayout.b20e4d4a.js";import{_ as l,a as i}from"./InputLabel.a12badbb.js";import{_ as v}from"./PrimaryButton.a6111820.js";import{_ as m}from"./TextInput.3ed6ab84.js";import"./ApplicationLogo.5549e61e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},q=b(" Reset Password "),H={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),_(k,null,{default:n(()=>[e(o(w),{title:"Reset Password"}),t("form",{onSubmit:g(u,["prevent"])},[t("div",null,[e(l,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",y,[e(l,{for:"password",value:"Password"}),e(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",P,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[e(v,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:n(()=>[q]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{H as default};