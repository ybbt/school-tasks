import{p as u,h as f,o as a,c as _,w as s,b as o,u as e,H as p,f as h,x as g,d as i,n as y,L as b,q as v,e as n}from"./app.20551f42.js";import{_ as x}from"./GuestLayout.8ef8683f.js";import{_ as k}from"./PrimaryButton.946fd72f.js";import"./ApplicationLogo.8475768c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},L=n(" Resend Verification Email "),N=n("Log Out"),q={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,S)=>(a(),_(x,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,e(l)?(a(),h("div",V," A new verification link has been sent to the email address you provided during registration. ")):g("",!0),i("form",{onSubmit:v(d,["prevent"])},[i("div",E,[o(k,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[L]),_:1},8,["class","disabled"]),o(e(b),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[N]),_:1},8,["href"])])],40,B)]),_:1}))}};export{q as default};