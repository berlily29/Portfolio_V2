import{a as x}from"./chunk-FTQAHSBU.js";import{B as s,C as o,D as i,E as m,G as c,N as L,R as g,S as y,T as C,U as M,V as w,W as h,l,n as p,o as u,u as a,v as b}from"./chunk-IIEAM3RJ.js";var d=class e{constructor(n){this.router=n}activeLink="home";ngOnInit(){this.router.events.subscribe(n=>{n instanceof g&&(this.router.url.includes("home")?this.activeLink="home":this.router.url.includes("works")?this.activeLink="works":this.router.url.includes("about")?this.activeLink="about":this.router.url.includes("contact")&&(this.activeLink="contact"))})}static \u0275fac=function(t){return new(t||e)(b(C))};static \u0275cmp=p({type:e,selectors:[["app-topnavbar"]],decls:17,vars:10,consts:[["id","navbar",1,"bg-black","h-100","w-100","center"],[1,"nav","nav-pills","flex","justify-center","items-center","h-100"],[1,"nav-item","mx-5"],["routerLink","home","routerLinkActive","active",1,"nav-link"],["routerLink","works","routerLinkActive","active",1,"nav-link"],[1,"nav-item","w-[100px]","mx-5"],["routerLink","home","routerLinkActive","active",1,"navbar-brand"],["src","logo.png"],["routerLink","about","routerLinkActive","active",1,"nav-link"],["routerLink","contact","routerLinkActive","active",1,"nav-link"]],template:function(t,r){t&1&&(o(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),c(4,"home"),i()(),o(5,"li",2)(6,"a",4),c(7,"works"),i()(),o(8,"li",5)(9,"a",6),m(10,"img",7),i()(),o(11,"li",2)(12,"a",8),c(13,"about"),i()(),o(14,"li",2)(15,"a",9),c(16,"contacts"),i()()()()),t&2&&(a(3),s("disabled",r.activeLink==="home"),a(3),s("disabled",r.activeLink==="works"),a(3),s("disabled",r.activeLink==="home"),a(3),s("disabled",r.activeLink==="about"),a(3),s("disabled",r.activeLink==="contact"))},dependencies:[M,w],styles:[".nav-link.active[_ngcontent-%COMP%]{background-color:#5e3a32;color:#fff}.nav-link[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase}"]})};var v=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-layout"]],decls:6,vars:0,consts:[["src","bg.jpg",2,"position","absolute","opacity",".4","height","100%","width","100%"],[1,"flex","flex-col","min-h-[100vh]","w-full","position-relative"],[1,"h-[10vh]"],[1,"body","min-h-[90vh]"]],template:function(t,r){t&1&&(m(0,"img",0),o(1,"div",1)(2,"div",2),m(3,"app-topnavbar"),i(),o(4,"div",3),m(5,"router-outlet"),i()())},dependencies:[y,d]})};var j=[{path:"",component:v,children:[{path:"",loadChildren:()=>import("./chunk-DHF4WSL6.js").then(e=>e.PagesModule)}]}],f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=u({type:e});static \u0275inj=l({imports:[h.forChild(j),h]})};var P=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=u({type:e});static \u0275inj=l({imports:[L,f,x]})};export{P as LayoutModule};
