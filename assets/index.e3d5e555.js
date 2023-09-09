import v from"./Icon.b2c771da.js";import{z as $,_ as g,k as s,l as a,m as e,A as C,B as L,C as x,q as c,s as y,F as h,D as _,E,v as N,t as u,G as b,T as O,H as I,I as A,J as S,K as k,x as R,y as V}from"./entry.1106732e.js";import"./config.d413913f.js";const q=$("theme",{state:()=>({lightmode:!1}),actions:{initTheme(){const o=window.matchMedia("(prefers-color-scheme: dark)").matches,i=localStorage.getItem("theme");this.setTheme(i||(o?"dark":"light"))},setTheme(o){localStorage.setItem("theme",o),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(o),this.lightmode=o==="light"}},getters:{isLightMode:o=>o.lightmode},persist:!0}),B={data(){return{themeStore:q()}},watch:{"themeStore.lightmode"(o){this.themeStore.setTheme(o?"light":"dark")}},mounted(){this.themeStore.initTheme()}},J={class:"flex items-center"},H={for:"lightmodeToggle",class:"cursor-pointer"},F={class:"flex items-center justify-between w-12 h-6 p-1 rounded-full sm:w-14 sm:h-7 shadow-inside bg-accent-light dark:bg-accent-dark"};function z(o,i,t,f,l,r){const n=v;return s(),a("div",J,[e("label",H,[C(e("input",{id:"lightmodeToggle","onUpdate:modelValue":i[0]||(i[0]=m=>l.themeStore.lightmode=m),type:"checkbox",class:"hidden checkbox peer"},null,512),[[L,l.themeStore.lightmode]]),e("div",F,[e("div",{class:x(["flex items-center justify-center w-4 h-4 text-lg transition-transform transform rounded-full sm:text-xl sm:w-6 sm:h-6",{"translate-x-6":l.themeStore.isLightMode,"translate-x-0":!l.themeStore.isLightMode}])},[c(n,{name:l.themeStore.isLightMode?"fluent-emoji:new-moon-face":"fluent-emoji:sun-with-face"},null,8,["name"])],2)])])])}const U=g(B,[["render",z]]),P=$("lang",{state:()=>({language:"en-GB"}),getters:{getLanguage:o=>o.language},actions:{setLanguage(o){this.language=o}},persist:!0}),K={data(){return{showDropdown:!1,languages:[{value:"es-ES",label:"Español",icon:"circle-flags:es-variant"},{value:"en-GB",label:"English",icon:"circle-flags:uk"}],store:P()}},computed:{selectedLang(){return this.languages.find(o=>o.value===this.store.language)||this.languages[0]}},methods:{toggle(){this.showDropdown=!this.showDropdown},selectLang(o){this.store.setLanguage(o.value),this.showDropdown=!1}}};const Y={class:"relative flex items-center p-1 rounded-full cursor-pointer focus:outline-none"},G={key:0,class:"absolute right-0 mt-2 origin-top-right border-2 border-purple-600 rounded-lg md:w-48 md:py-2 bg-secondary-light dark:bg-secondary-dark"},W=["onClick"];function Q(o,i,t,f,l,r){const n=v;return s(),a("div",{class:"relative",onClick:i[0]||(i[0]=(...m)=>r.toggle&&r.toggle(...m))},[e("div",Y,[c(n,{name:r.selectedLang.icon,class:"w-4 h-4 md:w-5 md:h-5"},null,8,["name"]),c(n,{name:"uil:angle-down",class:"w-4 h-4 ml-1 md:w-5 md:h-5"})]),c(O,{name:"dropdown-content"},{default:y(()=>[l.showDropdown?(s(),a("div",G,[(s(!0),a(h,null,_(l.languages,(m,p)=>(s(),a("label",{key:p,class:"flex items-center gap-4 p-4 hover:bg-accent-light dark:hover:bg-accent-dark",onClick:E(d=>r.selectLang(m),["stop"])},[c(n,{name:m.icon},null,8,["name"]),N(" "+u(m.label??""),1)],8,W))),128))])):b("",!0)]),_:1})])}const X=g(K,[["render",Q],["__scopeId","data-v-622daf12"]]),Z={},ee={class:"absolute top-0 z-40 w-full px-6 py-4 shadow-lg md:px-8 backdrop-blur-xl"},te={class:"container flex items-center justify-between h-auto gap-4 mx-auto"},oe={class:"w-48"},se={class:"flex flex-row items-center justify-end gap-3 md:gap-6"};function ae(o,i){const t=v,f=U,l=X;return s(),a("header",ee,[e("nav",te,[e("div",oe,[c(t,{name:"MainLogo",width:"258.808",height:"54.308",class:"w-full h-full fill-current"})]),e("div",se,[c(f),c(l)])])])}const ne=g(Z,[["render",ae]]),ie={props:{info:{type:Object,default:()=>({whoAmI:"Error Loading Data",job:"",scrDown:"Scroll down to see NOTHING"})}},data(){return{txt:"",isDeleting:!1,loopNum:0}},mounted(){this.tick()},methods:{tick(){const o=this.$refs.typewriter,i=this.info.job;if(o&&i.length>0){this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),o.textContent=this.txt;let t=200-Math.random()*100;this.isDeleting&&(t/=2),!this.isDeleting&&this.txt===i?(t=2e3,this.isDeleting=!0):this.isDeleting&&this.txt===""&&(this.isDeleting=!1,this.loopNum++,t=500),setTimeout(this.tick,t)}else this.txt=this.info.job},scrollDown(){const o=document.getElementById("about");if(o){const{top:i}=o.getBoundingClientRect();window.scrollTo({top:i+window.scrollY,behavior:"smooth"})}}}},re={class:"min-h-screen bg-primary-light dark:bg-primary-dark"},le={class:"flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto"},ce={class:"flex items-end h-full p-6 overflow-hidden"},de={class:"text-5xl font-bold tracking-wide text-center md:text-7xl"},me={class:"flex items-start h-full p-6 overflow-hidden"},pe={class:"absolute bottom-0 w-full py-4 text-center"},ue={class:"flex flex-col animate-bounce text-dark dark:text-light"},ge={class:"text-sm"};function fe(o,i,t,f,l,r){const n=v;return s(),a("section",re,[e("div",le,[e("div",ce,[e("h1",de,u(t.info.whoAmI),1)]),e("div",me,[e("h2",{ref:"typewriter",class:"inline-block text-3xl font-bold text-center text-purple-600 cursor-default md:text-5xl blinking-caret"},u(l.txt),513)])]),e("div",pe,[e("div",ue,[e("span",ge,u(t.info.scrDown??""),1),c(n,{name:"uil:angle-double-down",class:"self-center text-4xl cursor-pointer hover:text-purple-600",onClick:r.scrollDown},null,8,["onClick"])])])])}const he=g(ie,[["render",fe]]),_e={},ve={class:"flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg"},xe=A('<div class="bg-primary-light dark:bg-primary-dark flex items-center min-h-[30px] px-2 py-0"><div class="flex"><div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#ff5f57]"></div><div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#ffbd2e]"></div><div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#28c940]"></div></div></div>',1),ye={class:"flex flex-col flex-grow max-h-full p-4 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark"};function be(o,i){return s(),a("div",ve,[xe,e("div",ye,[I(o.$slots,"default")])])}const we=g(_e,[["render",be]]),ke={props:{tooltipText:{type:String,default:""},position:{type:String,default:"top"}}};const Se=["tooltipText","position"];function De(o,i,t,f,l,r){return s(),a("span",{class:"relative before:content-[''] before:z-[1001] before:border-[5px] before:border-solid before:border-transparent after:content-[attr(tooltipText)] after:text-center after:whitespace-nowrap after:min-w-[3em] after:max-w-[21em] after:overflow-hidden after:text-ellipsis after:shadow-[0_1em_2em_-0.5em_rgba(0,0,0,0.35)] after:opacity-30 after:text-white after:z-[1000] after:p-2 after:rounded-[0.3rem]",tooltipText:t.tooltipText,position:t.position},[I(o.$slots,"default",{},void 0,!0)],8,Se)}const D=g(ke,[["render",De],["__scopeId","data-v-db4de19d"]]),$e={props:{profileInfo:{type:Object,default:()=>({imagePath:"/MyPortfolio/images/undefined.webp",socials:[]})}}},Ie={class:"group [perspective:1000px]"},Pe={class:"relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"},Me={class:"inset-0 gap-4 p-4 shadow-xl dark:bg-primary-dark bg-primary-light rounded-xl shadow-black/40"},Te=["src"],je={class:"absolute inset-0 h-full w-full rounded-xl dark:bg-primary-dark bg-primary-light p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"},Ce={class:"flex flex-col items-center justify-center min-h-full"},Le={class:"flex flex-row items-center gap-12 mx-auto"},Ee=["href","aria-label"];function Ne(o,i,t,f,l,r){const n=v,m=D;return s(),a("div",Ie,[e("div",Pe,[e("div",Me,[e("img",{src:t.profileInfo.imagePath,alt:"Photo of the programmer of this portfolio",class:"object-cover rounded-xl aspect-[4/5]"},null,8,Te)]),e("div",je,[e("div",Ce,[c(n,{name:"MainIcon",class:"w-full h-auto"}),e("div",Le,[(s(!0),a(h,null,_(t.profileInfo.socials,(p,d)=>(s(),S(m,{key:d,"tooltip-text":p.name,position:"top"},{default:y(()=>[e("a",{href:p.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Link to my ${p.name}`,class:"'flex-grow text-2xl text-gray-400 hover:text-purple-600"},[c(n,{name:p.icon,class:"w-7 h-7 hover:scale-150"},null,8,["name"])],8,Ee)]),_:2},1032,["tooltip-text"]))),128))])])])])])}const Oe=g($e,[["render",Ne]]),Ae={props:{info:{type:Object,default:()=>({command:"",title:"",content:[""],imagePath:"/MyPortfolio/images/undefined.webp",downloadBtn:{command:"",url:"",fileName:"",label:""}})}},data(){return{activeIndex:0}},methods:{changeActiveIndex(o){this.activeIndex=o}}},Re={id:"about",class:"flex flex-col min-h-screen gap-4 p-6 lg:max-h-screen lg:flex-row lg:gap-10 lg:p-16"},Ve={class:"lg:w-2/3 scroll-transition"},qe={class:"flex flex-col gap-4 lg:gap-6 terminal-font"},Be={class:"flex items-start gap-2"},Je=e("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$",-1),He={class:"text-dark dark:text-light"},Fe={class:"flex flex-col leading-normal tracking-wide text-dark dark:text-light"},ze={class:"mb-4 text-5xl font-extrabold text-center text-transparent lg:mb-6 bg-clip-text bg-gradient-to-t from-purple-600 to-pink-500"},Ue=e("hr",{class:"border border-gray-600"},null,-1),Ke={class:"flex flex-col gap-2 w-max"},Ye=e("div",{class:"flex items-start gap-2"},[e("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$"),e("span",{class:"text-dark dark:text-light"},"npm run cv-download")],-1),Ge=["href","download","onMouseover"],We={class:"self-center lg:w-1/3 scroll-transition"};function Qe(o,i,t,f,l,r){const n=we,m=Oe;return s(),a("section",Re,[e("div",Ve,[c(n,null,{default:y(()=>[e("div",qe,[e("div",Be,[Je,e("span",He,u(t.info.command),1)]),e("div",Fe,[e("h2",ze,u(t.info.title??""),1),(s(!0),a(h,null,_(t.info.content,(p,d)=>(s(),a("p",{key:d},u(p),1))),128))]),Ue,e("div",Ke,[Ye,(s(!0),a(h,null,_(t.info.cv,(p,d)=>(s(),a("a",{key:d,href:p.url,target:"_blank","aria-label":"Download my curriculum vitae",download:p.fileName,class:x({"hover:text-blue-800 dark:hover:text-blue-500":!0,"text-blue-700 dark:text-blue-400":l.activeIndex===d}),onMouseover:w=>r.changeActiveIndex(d)}," > "+u(p.label),43,Ge))),128))])])]),_:1})]),e("div",We,[c(m,{"profile-info":t.info.profileCard},null,8,["profile-info"])])])}const Xe=g(Ae,[["render",Qe]]),Ze={props:{projectName:{type:String,default:""},projectData:{type:Object,default:()=>({image:"/MyPortfolio/images/undefined.webp",description:""})}}},et={class:"flex flex-col items-center gap-4 p-4 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-8 md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition"},tt=["src","alt"],ot={class:"flex flex-col gap-6 m-auto items-left"},st={class:"text-4xl font-bold tracking-wide text-center text-purple-600"},at={class:"text-sm lg:text-lg"},nt={key:0,class:"inline-flex justify-between w-full p-4 mx-auto rounded-lg lg:p-6 shadow-inside"},it=["src","alt"];function rt(o,i,t,f,l,r){const n=D;return s(),a("div",et,[e("img",{src:t.projectData.image,alt:"Image of my project: "+t.projectName,class:"w-auto max-h-[400px] m-auto rounded-lg hover:scale-105 hover:rotate-1"},null,8,tt),e("div",ot,[e("span",st,u(t.projectName),1),e("p",at,u(t.projectData.description??""),1),t.projectData.langs?(s(),a("div",nt,[(s(!0),a(h,null,_(t.projectData.langs,(m,p)=>(s(),S(n,{key:p,"tooltip-text":m,position:"top"},{default:y(()=>[e("img",{src:"/MyPortfolio/svg/"+m+"-icon.svg",alt:"The logo of "+m,class:"w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125",width:"40",height:"40"},null,8,it)]),_:2},1032,["tooltip-text"]))),128))])):b("",!0)])])}const lt=g(Ze,[["render",rt]]),ct={props:{info:{type:Object,default:()=>({Projects:{ERROR:{description:"",image:"/MyPortfolio/images/undefined.webp"}}})}},computed:{title(){return Object.keys(this.info).toString()},projects(){return this.info[this.title]}}},dt={class:"flex flex-col gap-8 p-6 bg-primary-light dark:bg-primary-dark md:p-16"},mt={class:"flex items-center gap-4"},pt={class:"text-4xl text-purple-600 uppercase md:font-bold terminal-font"};function ut(o,i,t,f,l,r){const n=v,m=lt;return s(),a("section",dt,[e("div",mt,[c(n,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9"}),e("h2",pt,u(r.title),1)]),(s(!0),a(h,null,_(r.projects,(p,d)=>(s(),S(m,{key:d,"project-name":d.toString(),"project-data":p},null,8,["project-name","project-data"]))),128))])}const gt=g(ct,[["render",ut]]),ft={props:{sectionData:{type:Object,default(){return{title:"",startDate:"",endDate:"",where:"",details:""}}}}},ht={class:"relative border-l-4 border-dark dark:border-light"},_t=e("div",{class:"absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white"},null,-1),vt={class:"mb-1 text-sm font-normal leading-none text-purple-400"},xt={class:"text-xl"},yt=["href"],bt={key:1},wt={class:"mb-2 text-base text-gray-800 dark:text-gray-600"},kt={class:"mb-4 text-xs text-gray-600 dark:text-gray-400"};function St(o,i,t,f,l,r){return s(),a("ol",ht,[(s(!0),a(h,null,_(t.sectionData,(n,m)=>(s(),a("li",{key:m,class:"mb-10 ml-4"},[_t,e("time",vt,u(n.startDate)+" - "+u(n.endDate),1),e("h3",xt,[n.website?(s(),a("a",{key:0,href:n.website,class:"text-xl hover:text-purple-600 hover:cursor-pointer"},u(n.title),9,yt)):(s(),a("span",bt,u(n.title),1))]),e("h4",wt,u(n.where),1),e("p",kt,u(n.details),1)]))),128))])}const Dt=g(ft,[["render",St]]),$t={props:{info:{type:Object,default:()=>({"/jobs":[],"/studies":[],"/others":[]})}}},It={class:"flex flex-col min-h-screen gap-6 p-6 lg:grid md:p-16 lg:grid-cols-3"},Pt={class:"flex w-full gap-4"},Mt={class:"text-4xl font-bold text-purple-600 uppercase terminal-font"};function Tt(o,i,t,f,l,r){const n=v,m=Dt;return s(),a("section",It,[(s(!0),a(h,null,_(t.info,(p,d)=>(s(),a("div",{key:d,class:"flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition"},[e("div",Pt,[c(n,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9"}),e("h2",Mt,u(d),1)]),c(m,{"section-data":p},null,8,["section-data"])]))),128))])}const jt=g($t,[["render",Tt]]),Ct={props:{data:{type:Object,default:()=>({name:"",image:"/MyPortfolio/images/undefined.webp",progress:0})}}},Lt={class:"flex flex-row gap-8 py-4 rounded-lg"},Et=["src","alt"],Nt={class:"w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900 mt-4"};function Ot(o,i,t,f,l,r){const n=D;return s(),a("div",Lt,[c(n,{"tooltip-text":t.data.name,position:"bottom"},{default:y(()=>[e("img",{src:t.data.image,alt:"An image of the official logo of "+t.data.name,class:"w-10 h-10 hover:scale-125",width:"40",height:"40"},null,8,Et)]),_:1},8,["tooltip-text"]),e("div",Nt,[e("div",{class:"bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full",style:k("width: "+t.data.progress+"%")},null,4),e("span",{class:x({"flex justify-end text-xs":t.data.progress,"text-green-600":t.data.progress>=70,"text-yellow-400":t.data.progress>=30&&t.data.progress<70,"text-red-600":t.data.progress<30}),style:k("width: "+t.data.progress+"%")},u(t.data.progress)+" % ",7)])])}const At=g(Ct,[["render",Ot]]),Rt={props:{data:{type:Object,default:()=>({name:"",image:"/MyPortfolio/images/undefined.webp"})}}};const M=o=>(R("data-v-84509df6"),o=o(),V(),o),Vt={class:"relative z-10 flex items-center justify-center p-16 duration-500 translate-y-24 face face1 bg-secondary-light dark:bg-secondary-dark rounded-t-xl"},qt={class:"flex flex-col items-center justify-center duration-500 opacity-50 dark:opacity-20"},Bt=["src","alt"],Jt={class:"flex flex-col justify-center w-full p-6 overflow-x-hidden overflow-y-auto duration-500 -translate-y-24 shadow-xl opacity-0 face face2 rounded-b-xl bg-primary-light dark:bg-primary-dark"},Ht={class:"self-center p-4 text-4xl font-bold text-center text-purple-600"},Ft={key:0,class:"flex flex-row items-center gap-1 p-4 shadow-inside rounded-xl"},zt=M(()=>e("span",{class:"text-sm"},"🤔",-1)),Ut={class:"w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900"},Kt=M(()=>e("span",{class:"text-sm"},"🤓",-1));function Yt(o,i,t,f,l,r){return s(),a(h,null,[e("div",Vt,[e("div",qt,[e("img",{src:t.data.image,alt:"An image of the official logo of "+t.data.name,class:"w-24 h-24",width:"96",height:"96"},null,8,Bt)])]),e("div",Jt,[e("h3",Ht,u(t.data.name),1),t.data.progress?(s(),a("div",Ft,[zt,e("div",Ut,[e("div",{class:"bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full",style:k("width: "+t.data.progress+"%")},null,4)]),Kt])):b("",!0)])],64)}const Gt=g(Rt,[["render",Yt],["__scopeId","data-v-84509df6"]]),Wt={props:{info:{type:Object,default:()=>({Skills:{"-":[{name:"-",image:"/MyPortfolio/images/undefined.webp"}]}})}},data(){return{selectedCategory:"/frontend",showList:!1}},computed:{title(){return Object.keys(this.info).toString()},filteredSkills(){return this.info[this.title][this.selectedCategory]||[]},sortedFilteredSkills(){return this.filteredSkills.slice().sort((o,i)=>i.progress-o.progress)},categories(){return Object.keys(this.info[this.title])}},methods:{selectCategory(o){this.selectedCategory=o}}},Qt={class:"flex flex-col min-h-screen"},Xt={class:"bg-primary-light dark:bg-primary-dark"},Zt={class:"flex w-full gap-4 px-6 py-8 md:px-16"},eo={class:"text-4xl text-purple-600 uppercase md:font-bold terminal-font"},to={class:"flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4"},oo=["onClick"],so={class:"flex items-center justify-center gap-2"},ao={class:"text-xs uppercase md:text-xl terminal-font"},no={class:"min-h-screen bg-secondary-light dark:bg-secondary-dark"},io={class:"flex justify-end mt-2 mr-2"},ro={class:"inline-flex text-sm leading-none border-2 border-purple-600 rounded-full cursor-pointer bg-accent-light dark:bg-accent-dark text-dark dark:text-light"},lo={key:0,class:"flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16"};function co(o,i,t,f,l,r){const n=v,m=At,p=Gt;return s(),a("section",Qt,[e("div",Xt,[e("div",Zt,[c(n,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9"}),e("h2",eo,u(r.title),1)]),e("ul",to,[(s(!0),a(h,null,_(r.categories,d=>(s(),a("li",{key:d,class:x(["flex-1 md:p-8 p-2 py-8 text-center cursor-pointer rounded-t-xl",l.selectedCategory===d?"border-x-2 border-t-2 border-x-purple-400 border-t-purple-400 bg-secondary-light dark:bg-secondary-dark shadow-top":"bg-accent-light dark:bg-accent-dark"]),onClick:w=>r.selectCategory(d)},[e("div",so,[c(n,{name:"fluent-emoji-flat:open-file-folder",class:"w-3 h-3 md:w-5 md:h-5"}),e("span",ao,u(d),1)])],10,oo))),128))])]),e("div",no,[e("div",io,[e("div",ro,[e("i",{class:x({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full":!l.showList}),onClick:i[0]||(i[0]=d=>l.showList=!1)},[c(n,{name:"uil:th",class:"w-3 h-3 md:w-4 md:h-4"})],2),e("i",{class:x({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full":l.showList}),onClick:i[1]||(i[1]=d=>l.showList=!0)},[c(n,{name:"uil:list-ul",class:"w-3 h-3 md:w-4 md:h-4"})],2)])]),e("div",{class:x({"flex-wrap justify-around p-6 md:flex md:gap-8 md:p-16":!l.showList})},[l.showList?(s(),a("ul",lo,[(s(!0),a(h,null,_(r.sortedFilteredSkills,d=>(s(),a("li",{key:d.name},[c(m,{data:d},null,8,["data"])]))),128))])):(s(!0),a(h,{key:1},_(r.filteredSkills,d=>(s(),a("div",{key:d.name,class:"w-full card md:w-80 scroll-transition"},[c(p,{data:d},null,8,["data"])]))),128))],2)])])}const mo=g(Wt,[["render",co]]),po={data(){return{showScrollToTop:!1,y:0}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.showScrollToTop=window.scrollY>0},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};function uo(o,i,t,f,l,r){const n=v;return l.showScrollToTop?(s(),a("button",{key:0,class:"fixed z-40 p-2 bg-purple-600 rounded-full shadow-lg bottom-4 right-4",onClick:i[0]||(i[0]=(...m)=>r.scrollToTop&&r.scrollToTop(...m))},[c(n,{name:"uil:arrow-circle-up",class:"text-4xl text-white"})])):b("",!0)}const go=g(po,[["render",uo]]),fo={whoAmI:"Hola! Soy David",job:"Desarrollador Web Full Stack",scrDown:"Ve hacia abajo para ver más"},ho={command:"./sobre_mi.sh",title:"BIENVENIDO A MI PORTFOLIO",content:["🧑🏻‍💻 ¡Hola! Soy David, un apasionado Desarrollador Web Full Stack con más de 2 años de experiencia en el emocionante mundo de la programación.","🚀 A lo largo de mi corta trayectoria, he adquirido un amplio conocimiento en el desarrollo de aplicaciones web y siempre estoy en busca de nuevas formas de dar vida a ideas creativas e innovadoras. La programación se ha convertido en mi segundo idioma y disfruto enfrentándome a retos diarios que me permiten crecer profesionalmente y superar mis límites.","🚧 Aunque mi portafolio aún se encuentra en desarrollo, principalmente debido a mi enfoque en proyectos profesionales, estas experiencias me han permitido enfrentar desafíos significativos y aprender de situaciones del mundo real.","🔝 Estoy orgulloso de todo lo que he aprendido y construido hasta el momento, pero también emocionado por las futuras oportunidades que me permitirán expandir mi portafolio con proyectos más diversos y creativos, mostrando así mi capacidad para abordar una amplia gama de soluciones tecnológicas.","😀 ¡Muchas gracias por visitar mi sitio web y por ser parte de mi viaje de crecimiento y desarrollo profesional!"],profileCard:{imagePath:"/MyPortfolio/images/david.webp",socials:[{name:"LinkedIn",icon:"uil:linkedin",url:"https://www.linkedin.com/in/davidsimon98/"},{name:"GitHub",icon:"uil:github",url:"https://github.com/DeibidSE"},{name:"Email",icon:"uil:envelope",url:"mailto:davidsimon98@outlook.com"}]},cv:[{url:"/MyPortfolio/CV - David Simón (ES - 2023).pdf",fileName:"CV - David Simón (ES - 2023).pdf",label:"Descarga mi Curriculum (Versión en Español)"},{url:"/MyPortfolio/CV - David Simón (EN - 2023).pdf",fileName:"CV - David Simón (EN - 2023).pdf",label:"Descarga mi Curriculum (Version en Inglés)"}]},_o={Proyectos:{"Mi trabajo diario":{image:"/MyPortfolio/images/verify.svg",description:"Aquí dedico casi el 100 % de mi tiempo a la programación, centrándome especialmente en proyectos web relacionados con los requisitos KYC (Conozca a su cliente) dentro del sector financiero. Aunque no puedo compartir detalles específicos debido a acuerdos de confidencialidad con la empresa, sí puedo mencionar que mi participación abarca una amplia gama de productos desarrollados mediante diversas tecnologías. He trabajado tanto en el frontend como en el backend, participando en el desarrollo de APIs Rest, la automatización de procesos, la creación de informes avanzados y la implementación de metodologías ágiles, entre otros aspectos."},ddabetic:{image:"/MyPortfolio/images/ddabetic.webp",description:"Pequeño proyecto que continúa en desarrollo y que comencé durante unas vacaciones de verano utilizando Laravel y Vue 3. Esta aplicación web tenía como objetivo gestionar y mejorar el control de la diabetes",langs:["laravel","vue","javascript","sass","tailwind","mysql","laragon"]},MyPortfolio:{image:"/MyPortfolio/images/myportfolio.webp",description:"Quería embarcarme en un proyecto personal durante mi tiempo libre, desconectando del entorno profesional y laboral para explorar mi creatividad sin restricciones. Comencé a experimentar con el framework Nuxt y así es como surgió este portafolio que tienes ante tus ojos.",langs:["nuxt","typescript","sass","tailwind"]},"???":{image:"/MyPortfolio/images/undefined.webp",description:"¿Aprender y empezar un proyecto con React? ¿O quizás algo con el framework Astro? Quién sabe..."}}},vo={"/trabajos":[{title:"Desarrollador Web Full Stack en Simple KYC",startDate:"Feb 2021",endDate:"Presente",where:"Remoto",details:"Este es mi trabajo actual, donde he aprendido una amplia gama de habilidades y tecnologías aplicadas al desarrollo web.",website:"https://www.simplekyc.com/"},{title:"Dominama Análisis Tecnológicos S.L.",startDate:"Octubre 2020",endDate:"Diciembre 2020",where:"Remoto",details:"Mi primera toma de contacto con el mundo laboral, aquí completé las prácticas de 3 meses de duración ofrecidas por el grado superior. Por desgracia, debido a la pandemia de COVID-19, estas prácticas tuvieron que realizarse de manera 100% remota.",website:"http://www.dominama.es/"}],"/estudios":[{title:"Técnico superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",startDate:"Septiembre 2018",endDate:"Junio 2020",where:"Madrid",details:"Aquí empecé mis estudios de programación: Java, Python, SQL, Linux... un mundo de aprendizaje y crecimiento junto a dedicados profesores y compañeros. Estos años sin duda marcaron una época inolvidable en mi camino educativo."},{title:"Bachillerato tecnológico",startDate:2014,endDate:2018,where:"Madrid",details:"Durante este periodo completé el bachillerato de la rama de ciencias, centrado principalmente en asignaturas como matemáticas, química y biología, etc..."}],"/estudios adicionales":[{title:"English Empire College",startDate:2022,endDate:2023,where:"Remoto",details:"Como parte de mi desarrollo profesional, la empresa para la que trabajo nos pagaba clases de inglés enfocadas a mejorar nuestros conocimientos de esta lengua."},{title:"Clases de conducir",startDate:2018,endDate:2019,where:"Madrid",details:"Completé las clases de conducir y obtuve el permiso de conducir de clase B"},{title:"Lingua Generation",startDate:2010,endDate:2020,where:"Madrid",details:"Una academia de inglés con profesores nativos"}]},xo={Habilidades:{"/frontend":[{name:"Vue.js",image:"/MyPortfolio/svg/vue-icon.svg",progress:80},{name:"Nuxt 3",image:"/MyPortfolio/svg/nuxt-icon.svg",progress:75},{name:"TypeScript",image:"/MyPortfolio/svg/typescript-icon.svg",progress:75},{name:"JavaScript",image:"/MyPortfolio/svg/javascript-icon.svg",progress:80},{name:"HTML 5",image:"/MyPortfolio/svg/html5-icon.svg",progress:95},{name:"CSS",image:"/MyPortfolio/svg/css-icon.svg",progress:70},{name:"Sass",image:"/MyPortfolio/svg/sass-icon.svg",progress:70},{name:"Tailwind CSS",image:"/MyPortfolio/svg/tailwind-icon.svg",progress:90}],"/backend":[{name:"Laravel",image:"/MyPortfolio/svg/laravel-icon.svg",progress:85},{name:"PHP",image:"/MyPortfolio/svg/php-icon.svg",progress:85},{name:"MySQL",image:"/MyPortfolio/svg/mysql-icon.svg",progress:80},{name:"Java",image:"/MyPortfolio/svg/java-icon.svg",progress:35},{name:"Python",image:"/MyPortfolio/svg/python-icon.svg",progress:20}],"/herramientas":[{name:"Visual Studio Code",image:"/MyPortfolio/svg/vscode-icon.svg",progress:100},{name:"Docker",image:"/MyPortfolio/svg/docker-icon.svg",progress:80},{name:"Vagrant",image:"/MyPortfolio/svg/vagrant-icon.svg",progress:90},{name:"Laragon",image:"/MyPortfolio/svg/laragon-icon.svg",progress:95},{name:"Android Studio",image:"/MyPortfolio/svg/android-studio-icon.svg",progress:35}]}},yo={INTRODUCTION:fo,PRESENTATION:ho,PROJECTS:_o,JOBS_AND_STUDIES:vo,TECHNICAL_SKILLS:xo},bo={whoAmI:"Hi there! I'm David",job:"Full Stack Web Developer",scrDown:"Scroll down to see more"},wo={command:"./about_me.sh",title:"WELCOME TO MY PORTFOLIO",content:["🧑🏻‍💻 Hi there! I'm David, a passionate Full Stack Web Developer with over 2 years of experience in the exciting world of programming.","🚀 Throughout my brief journey, I've gained extensive knowledge in web application development and I'm always seeking new ways to breathe life into creative and innovative ideas. Programming has become my second language, and I enjoy facing daily challenges that allow me to grow professionally and push my limits.","🚧 Although my portfolio is still in development, mainly due to my focus on professional projects, these experiences have allowed me to face significant challenges and learn from real-world situations.","🔝  I am proud of everything I have learned and built so far, but also excited for future opportunities that will allow me to expand my portfolio with more diverse and creative projects, thus showcasing my ability to tackle a wide range of technology solutions.","😀 Thank you so much for visiting my website and for being part of my journey of growth and professional development!"],profileCard:{imagePath:"/MyPortfolio/images/david.webp",socials:[{name:"LinkedIn",icon:"uil:linkedin",url:"https://www.linkedin.com/in/davidsimon98/"},{name:"GitHub",icon:"uil:github",url:"https://github.com/DeibidSE"},{name:"Email",icon:"uil:envelope",url:"mailto:davidsimon98@outlook.com"}]},cv:[{url:"/MyPortfolio/CV - David Simón (EN - 2023).pdf",fileName:"CV - David Simón (EN - 2023).pdf",label:"Download my Curriculum (English Version)"},{url:"/MyPortfolio/CV - David Simón (ES - 2023).pdf",fileName:"CV - David Simón (ES - 2023).pdf",label:"Download my Curriculum (Spanish version)"}]},ko={Projects:{"My daily Job":{image:"/MyPortfolio/images/verify.svg",description:"Here, I dedicate almost 100% of my time to programming, focusing specifically on web projects related to KYC (Know Your Customer) requirements within the financial sector. While I can't share specific details due to confidentiality agreements with the company, I can mention that my involvement covers a wide range of products developed using various technologies. I've worked on both the frontend and backend, participating in Rest API development, process automation, advanced reporting creation, and the implementation of agile methodologies, among other aspects."},ddabetic:{image:"/MyPortfolio/images/ddabetic.webp",description:"Small project that still under development and I started during a summer vacation using Laravel and Vue 3. This web application aimed to manage and improve diabetes control.",langs:["laravel","vue","javascript","sass","tailwind","mysql","laragon"]},MyPortfolio:{image:"/MyPortfolio/images/myportfolio.webp",description:"I wanted to embark on a personal project during my free time, disconnecting from the professional and work environment to explore my creativity without restrictions. I started experimenting with the Nuxt framework, and that's how I created the portfolio you are currently viewing.",langs:["nuxt","typescript","sass","tailwind"]},"???":{image:"/MyPortfolio/images/undefined.webp",description:"Learn and start a project with React? Or maybe something with the Astro framework? Who knows..."}}},So={"/jobs":[{title:"Full Stack Web Developer at Simple KYC",startDate:"Feb 2021",endDate:"Present",where:"Remote",details:"This is my current job where I have learned a wide range of web development skills and technologies.",website:"https://www.simplekyc.com/"},{title:"Dominama Análisis Tecnológicos S.L.",startDate:"Oct 2020",endDate:"Dec 2020",where:"Remote",details:"My first contact with the working world, here I completed the 3-month internship required by the superior degree. Unfortunately, due to the COVID-19 pandemic, these internships had to be done 100% remotely.",website:"http://www.dominama.es/"}],"/studies":[{title:"Superior Degree in Multi-Platform Applications Development",startDate:"Sept 2018",endDate:"Jun 2020",where:"Madrid",details:"Here I began my programming studies: Java, Python, SQL, Linux... a world of learning and growth with dedicated teachers and colleagues. These years undoubtedly marked an unforgettable time in my educational journey."},{title:"Technological Bachillerato",startDate:2014,endDate:2018,where:"Madrid",details:"In Spain, we have what is referred to as Bachillerato, an educational phase following secondary school that acts as a transition to higher education. This stage prepares students for university studies and vocational avenues alike. Personally, I specialized in the science track, which primarily focuses on subjects like mathematics, chemistry, biology, and more."}],"/additional studies":[{title:"English Empire College",startDate:2022,endDate:2023,where:"Remote",details:"As part of my professional development, the company I work for paid us English classes focused on improving our English language skills."},{title:"Driving lessons",startDate:2018,endDate:2019,where:"Madrid",details:"I completed driving lessons and obtained my class B driver's license"},{title:"Lingua Generation",startDate:2010,endDate:2020,where:"Madrid",details:"An English academy with native teachers"}]},Do={Skills:{"/frontend":[{name:"Vue.js",image:"/MyPortfolio/svg/vue-icon.svg",progress:80},{name:"Nuxt 3",image:"/MyPortfolio/svg/nuxt-icon.svg",progress:75},{name:"TypeScript",image:"/MyPortfolio/svg/typescript-icon.svg",progress:75},{name:"JavaScript",image:"/MyPortfolio/svg/javascript-icon.svg",progress:80},{name:"HTML 5",image:"/MyPortfolio/svg/html5-icon.svg",progress:95},{name:"CSS",image:"/MyPortfolio/svg/css-icon.svg",progress:70},{name:"Sass",image:"/MyPortfolio/svg/sass-icon.svg",progress:70},{name:"Tailwind CSS",image:"/MyPortfolio/svg/tailwind-icon.svg",progress:90}],"/backend":[{name:"Laravel",image:"/MyPortfolio/svg/laravel-icon.svg",progress:85},{name:"PHP",image:"/MyPortfolio/svg/php-icon.svg",progress:85},{name:"MySQL",image:"/MyPortfolio/svg/mysql-icon.svg",progress:80},{name:"Java",image:"/MyPortfolio/svg/java-icon.svg",progress:35},{name:"Python",image:"/MyPortfolio/svg/python-icon.svg",progress:20}],"/tools":[{name:"Visual Studio Code",image:"/MyPortfolio/svg/vscode-icon.svg",progress:100},{name:"Docker",image:"/MyPortfolio/svg/docker-icon.svg",progress:80},{name:"Vagrant",image:"/MyPortfolio/svg/vagrant-icon.svg",progress:90},{name:"Laragon",image:"/MyPortfolio/svg/laragon-icon.svg",progress:95},{name:"Android Studio",image:"/MyPortfolio/svg/android-studio-icon.svg",progress:35}]}},$o={INTRODUCTION:bo,PRESENTATION:wo,PROJECTS:ko,JOBS_AND_STUDIES:So,TECHNICAL_SKILLS:Do},Io={data(){return{langStore:P(),langData:{"es-ES":yo,"en-GB":$o}}},computed:{sectionInfo(){return this.langData[this.langStore.getLanguage]}}};function Po(o,i,t,f,l,r){const n=ne,m=he,p=Xe,d=gt,w=jt,T=mo,j=go;return s(),a("main",null,[c(n),c(m,{info:r.sectionInfo.INTRODUCTION},null,8,["info"]),c(p,{info:r.sectionInfo.PRESENTATION},null,8,["info"]),c(d,{info:r.sectionInfo.PROJECTS},null,8,["info"]),c(w,{info:r.sectionInfo.JOBS_AND_STUDIES},null,8,["info"]),c(T,{info:r.sectionInfo.TECHNICAL_SKILLS},null,8,["info"]),c(j)])}const Co=g(Io,[["render",Po]]);export{Co as default};
