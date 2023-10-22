import{_ as h,q as l,s,t as e,v as _,x as d,J as b,K as I,L as m,M as x,N as $,y,O as g,P as w,Q as v,A as C,B as D}from"./entry.5c83ee6f.js";const O={props:{sectionInfo:{type:Object,default:()=>{}}},data(){return{txt:"",isDeleting:!1,loopNum:0}},computed:{title(){return Object.keys(this.sectionInfo).toString()},section(){return this.sectionInfo[this.title]||[]}},mounted(){this.tick()},methods:{tick(){const n=this.$refs.typewriter,i=this.section.job;if(n&&i.length>0){this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),n.textContent=this.txt;let t=200-Math.random()*100;this.isDeleting&&(t/=2),!this.isDeleting&&this.txt===i?(t=2e3,this.isDeleting=!0):this.isDeleting&&this.txt===""&&(this.isDeleting=!1,this.loopNum++,t=500),setTimeout(this.tick,t)}else this.txt=this.section.job},scrollDown(){const n=document.querySelectorAll("section"),i=document.getElementById("header"),t=i?i.offsetHeight:0;if(n&&n.length>=2){const p=n[1],{top:c}=p.getBoundingClientRect();window.scrollTo({top:c+window.scrollY-t,behavior:"smooth"})}}}},L=["id","aria-label"],M={class:"flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto"},P={class:"flex items-end h-full p-6 overflow-hidden"},A={class:"text-5xl font-bold text-center md:tracking-wide md:text-7xl"},F={class:"flex items-start h-full p-6 overflow-hidden"},N={class:"absolute bottom-0 w-full py-4 text-center"},z={class:"flex flex-col animate-bounce text-dark dark:text-light"},B={class:"text-sm"};function V(n,i,t,p,c,o){const r=b;return l(),s("section",{id:o.title,class:"min-h-screen bg-primary-light dark:bg-primary-dark","aria-label":o.title},[e("div",M,[e("div",P,[e("h1",A,_(o.section.whoAmI),1)]),e("div",F,[e("h2",{ref:"typewriter",class:"inline-block text-3xl font-bold text-center text-purple-600 cursor-default md:text-5xl animate-blinking-caret"},_(c.txt),513)])]),e("div",N,[e("div",z,[e("span",B,_(o.section.scrollDown??""),1),d(r,{name:"uil:angle-double-down",class:"self-center text-4xl cursor-pointer hover:text-purple-600",role:"button","aria-label":"Scroll down",onClick:o.scrollDown},null,8,["onClick"])])])],8,L)}const E=h(O,[["render",V]]),Y={},q={class:"flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg",role:"region","aria-label":"Terminal component"},H=e("div",{class:"flex items-center p-3 bg-primary-light dark:bg-primary-dark"},[e("div",{class:"flex gap-[6px]"},[e("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#ff5f57]",role:"button","aria-label":"Close terminal button"}),e("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#ffbd2e]",role:"button","aria-label":"Minimize terminal button"}),e("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#28c940]",role:"button","aria-label":"Maximize terminal button"})])],-1),J={class:"flex flex-col flex-grow max-h-full p-4 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark"};function G(n,i){return l(),s("div",q,[H,e("div",J,[I(n.$slots,"default")])])}const K=h(Y,[["render",G]]),Q={props:{tooltipText:{type:String,default:""},position:{type:String,default:"top"}}};const R=["tooltipText","position"];function U(n,i,t,p,c,o){return l(),s("span",{class:"relative before:content-[''] before:z-[1001] before:border-[5px] before:border-solid before:border-transparent after:content-[attr(tooltipText)] after:text-center after:whitespace-nowrap after:min-w-[3em] after:max-w-xs after:overflow-hidden after:text-ellipsis after:shadow-sm after:opacity-30 after:text-white after:z-[1000] after:p-2 after:rounded-md",tooltipText:t.tooltipText,position:t.position,role:"tooltip","aria-live":"polite","aria-atomic":"true"},[I(n.$slots,"default",{},void 0,!0)],8,R)}const j=h(Q,[["render",U],["__scopeId","data-v-db45ed8e"]]),W={props:{profileInfo:{type:Object,default:()=>{}}}},X={class:"group [perspective:1000px]","aria-label":"Profile Card"},Z={class:"relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"},ee={class:"inset-0 gap-4 p-4 shadow-xl md:p-6 dark:bg-primary-dark bg-primary-light rounded-xl shadow-black/40"},te=["src"],oe={class:"absolute inset-0 h-full w-full rounded-xl dark:bg-primary-dark bg-primary-light p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"},le={class:"flex flex-col items-center justify-center min-h-full"},se={class:"flex flex-row items-center gap-12 mx-auto"},ne=["href","aria-label"];function re(n,i,t,p,c,o){const r=b,f=j;return l(),s("div",X,[e("div",Z,[e("div",ee,[e("img",{src:t.profileInfo.imagePath,alt:"Photo of the programmer of this portfolio",class:"object-cover rounded-xl aspect-[4/5]",role:"img","aria-label":"Photo of the programmer"},null,8,te)]),e("div",oe,[e("div",le,[d(r,{name:"MainIcon",class:"w-full h-auto",role:"img","aria-label":"Profile Icon"}),e("div",se,[(l(!0),s(m,null,x(t.profileInfo.socialLinks,(u,a)=>(l(),$(f,{key:a,"tooltip-text":u.name,position:"top"},{default:y(()=>[e("a",{href:u.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Link to my ${u.name}`,class:"'flex-grow text-2xl text-gray-400 hover:text-purple-600"},[d(r,{name:u.icon,class:"w-7 h-7 hover:scale-150",role:"link"},null,8,["name"])],8,ne)]),_:2},1032,["tooltip-text"]))),128))])])])])])}const ae=h(W,[["render",re]]),ie={props:{sectionInfo:{type:Object,default:()=>{}}},data(){return{activeIndex:0}},computed:{title(){return Object.keys(this.sectionInfo).toString()},section(){return this.sectionInfo[this.title]||[]}},methods:{changeActiveIndex(n){this.activeIndex=n}}},ce=["id","aria-label"],de={class:"lg:w-2/3 scroll-transition"},_e={class:"flex flex-col gap-4 lg:gap-6 font-terminal"},ue={class:"flex items-start gap-2"},fe=e("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$",-1),pe={class:"text-dark dark:text-light"},he={class:"flex flex-col leading-normal tracking-wide text-dark dark:text-light"},me={class:"mb-4 text-5xl font-extrabold text-center text-transparent lg:mb-6 bg-clip-text bg-gradient-to-t from-purple-600 to-pink-500"},xe=e("hr",{class:"border border-gray-600",role:"separator"},null,-1),ge={class:"flex flex-col gap-2 w-max"},be=e("div",{class:"flex items-start gap-2"},[e("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$"),e("span",{class:"text-dark dark:text-light"},"npm run cv-download")],-1),ye=["href","download","onMouseover"],we={class:"self-center lg:w-1/3 scroll-transition"};function ke(n,i,t,p,c,o){const r=K,f=ae;return l(),s("section",{id:o.title,class:"flex flex-col min-h-screen gap-4 p-6 lg:max-h-screen lg:flex-row lg:gap-10 lg:p-16",role:"region","aria-label":o.title},[e("div",de,[d(r,null,{default:y(()=>[e("div",_e,[e("div",ue,[fe,e("span",pe,_(o.section.command??""),1)]),e("div",he,[e("h2",me,_(o.section.title??""),1),(l(!0),s(m,null,x(o.section.content,(u,a)=>(l(),s("p",{key:a},_(u??""),1))),128))]),xe,e("div",ge,[be,(l(!0),s(m,null,x(o.section.cv,(u,a)=>(l(),s("a",{key:a,href:u.url,target:"_blank","aria-label":"Download my curriculum vitae",download:u.fileName,class:g({"hover:text-blue-800 dark:hover:text-blue-500":!0,"text-blue-700 dark:text-blue-400":c.activeIndex===a}),role:"link",onMouseover:k=>o.changeActiveIndex(a)}," > "+_(u.label??""),43,ye))),128))])])]),_:1})]),e("div",we,[d(f,{"profile-info":o.section.profileCard},null,8,["profile-info"])])],8,ce)}const ve=h(ie,[["render",ke]]),$e={props:{projectName:{type:String,default:""},projectData:{type:Object,default:()=>{}}}},je=["aria-label"],Ie=["src","alt"],Se={class:"flex flex-col gap-6 m-auto items-left"},Te={class:"text-4xl font-bold tracking-wide text-center text-purple-600"},Ce={class:"text-sm lg:text-lg","aria-label":"Description of the project"},De={key:0,class:"inline-flex justify-between w-full p-4 mx-auto rounded-lg lg:p-6 shadow-inside"},Oe=["src","alt"];function Le(n,i,t,p,c,o){const r=j;return l(),s("div",{class:"flex flex-col items-center gap-4 p-4 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-8 md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition","aria-label":`Details of the project ${t.projectName}`},[e("img",{src:t.projectData.image,alt:`Image of my project: ${t.projectName}`,class:"w-auto max-h-[400px] m-auto rounded-lg hover:scale-105 hover:rotate-1"},null,8,Ie),e("div",Se,[e("h3",Te,_(t.projectName),1),e("p",Ce,_(t.projectData.description??""),1),t.projectData.langs?(l(),s("div",De,[(l(!0),s(m,null,x(t.projectData.langs,(f,u)=>(l(),$(r,{key:u,"tooltip-text":f,position:"top"},{default:y(()=>[e("img",{src:`/MyPortfolio/svg/${f}.svg`,alt:`The logo of ${f}`,class:"w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125",width:"40",height:"40"},null,8,Oe)]),_:2},1032,["tooltip-text"]))),128))])):w("",!0)])],8,je)}const Me=h($e,[["render",Le]]),Pe={props:{sectionInfo:{type:Object,default:()=>{}}},computed:{title(){return Object.keys(this.sectionInfo).toString()},projects(){return this.sectionInfo[this.title]}}},Ae=["id","aria-label"],Fe={class:"flex items-center gap-4"},Ne={class:"text-4xl text-purple-600 uppercase md:font-bold font-terminal"};function ze(n,i,t,p,c,o){const r=b,f=Me;return l(),s("section",{id:o.title,class:"flex flex-col min-h-screen gap-8 p-6 bg-primary-light dark:bg-primary-dark lg:p-16","aria-label":o.title},[e("header",Fe,[d(r,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9",alt:"Folder Icon"}),e("h2",Ne,_(o.title),1)]),(l(!0),s(m,null,x(o.projects,(u,a)=>(l(),$(f,{key:a,"project-name":a.toString(),"project-data":u},null,8,["project-name","project-data"]))),128))],8,Ae)}const Be=h(Pe,[["render",ze]]),Ve={props:{sectionData:{type:Object,default(){return{}}}}},Ee={class:"relative border-l-4 border-dark dark:border-light",role:"list"},Ye=e("div",{class:"absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white"},null,-1),qe={class:"mb-1 text-sm font-normal leading-none text-purple-400"},He={class:"text-xl"},Je=["href"],Ge={key:1},Ke={class:"mb-2 text-base text-gray-800 dark:text-gray-600"},Qe={class:"mb-4 text-xs text-gray-600 dark:text-gray-400"};function Re(n,i,t,p,c,o){return l(),s("ol",Ee,[(l(!0),s(m,null,x(t.sectionData,(r,f)=>(l(),s("li",{key:f,class:"mb-10 ml-4",role:"listitem"},[Ye,e("time",qe,_(r.startDate)+" - "+_(r.endDate),1),e("h3",He,[r.website?(l(),s("a",{key:0,href:r.website,rel:"noopener noreferrer",class:"text-xl hover:text-purple-600 hover:cursor-pointer",role:"link"},_(r.title),9,Je)):(l(),s("span",Ge,_(r.title),1))]),e("h4",Ke,_(r.location),1),e("p",Qe,_(r.details),1)]))),128))])}const Ue=h(Ve,[["render",Re]]),We={props:{sectionInfo:{type:Object,default:()=>({})}},computed:{title(){return Object.keys(this.sectionInfo).toString()},section(){return this.sectionInfo[this.title]||[]}}},Xe=["id","aria-label"],Ze=["aria-label"],et={class:"flex w-full gap-4"},tt={class:"text-4xl font-bold text-purple-600 uppercase font-terminal"};function ot(n,i,t,p,c,o){const r=b,f=Ue;return l(),s("section",{id:o.title,class:"flex flex-col min-h-screen gap-6 p-6 lg:grid lg:p-16 lg:grid-cols-3","aria-label":o.title},[(l(!0),s(m,null,x(o.section,(u,a)=>(l(),s("div",{key:a,class:"flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition","aria-label":String(a)},[e("header",et,[d(r,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9",alt:"Folder Icon"}),e("h2",tt,_(a),1)]),d(f,{"section-data":u},null,8,["section-data"])],8,Ze))),128))],8,Xe)}const lt=h(We,[["render",ot]]),st={props:{data:{type:Object,default:()=>{}}}},nt={key:0,class:"flex flex-row gap-8 py-4 rounded-lg"},rt=["src","alt","aria-label"],at={class:"w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900 mt-4"};function it(n,i,t,p,c,o){const r=j;return t.data&&t.data.image&&t.data.progress?(l(),s("div",nt,[d(r,{"tooltip-text":t.data.name,position:"bottom"},{default:y(()=>[e("img",{src:t.data.image,alt:`An image of the official logo of ${t.data.name}`,class:"w-10 h-10 hover:scale-125",width:"40",height:"40",role:"img","aria-label":`Logo of ${t.data.name}`},null,8,rt)]),_:1},8,["tooltip-text"]),e("div",at,[e("div",{class:"bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full",style:v(`width: ${t.data.progress}%`)},null,4),e("span",{class:g({"flex justify-end text-xs":t.data.progress,"text-green-600":t.data.progress>=70,"text-yellow-400":t.data.progress>=30&&t.data.progress<70,"text-red-600":t.data.progress<30}),style:v(`width: ${t.data.progress}%`)},_(t.data.progress)+" % ",7)])])):w("",!0)}const ct=h(st,[["render",it]]),dt={props:{data:{type:Object,default:()=>{}}}};const S=n=>(C("data-v-99d26b73"),n=n(),D(),n),_t={class:"relative z-10 flex items-center justify-center p-16 duration-500 translate-y-24 face face1 bg-secondary-light dark:bg-secondary-dark rounded-t-xl"},ut={class:"flex flex-col items-center justify-center duration-500 opacity-50 dark:opacity-20"},ft=["src","alt"],pt=["aria-label"],ht={class:"self-center p-4 text-4xl font-bold text-center text-purple-600"},mt={key:0,class:"flex flex-row items-center gap-1 p-4 shadow-inside rounded-xl"},xt=S(()=>e("span",{class:"text-sm"},"🤔",-1)),gt={class:"w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900"},bt=S(()=>e("span",{class:"text-sm"},"🤓",-1));function yt(n,i,t,p,c,o){return l(),s(m,null,[e("div",_t,[e("div",ut,[e("img",{src:t.data.image,alt:`An image of the official logo of ${t.data.name}`,class:"w-24 h-24",width:"96",height:"96",role:"img"},null,8,ft)])]),e("div",{class:"flex flex-col justify-center w-full p-6 overflow-x-hidden overflow-y-auto duration-500 -translate-y-24 shadow-xl opacity-0 face face2 rounded-b-xl bg-primary-light dark:bg-primary-dark","aria-label":`Details about ${t.data.name}`},[e("h3",ht,_(t.data.name??""),1),t.data.progress?(l(),s("div",mt,[xt,e("div",gt,[e("div",{class:"bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full",style:v(`width: ${t.data.progress}%`)},null,4)]),bt])):w("",!0)],8,pt)],64)}const wt=h(dt,[["render",yt],["__scopeId","data-v-99d26b73"]]),kt={props:{sectionInfo:{type:Object,default:()=>{}}},data(){return{selectedCategory:"/frontend",showList:!1}},computed:{title(){return Object.keys(this.sectionInfo).toString()},filteredSkills(){return this.sectionInfo[this.title][this.selectedCategory]||[]},sortedFilteredSkills(){return this.filteredSkills.slice().sort((n,i)=>i.progress-n.progress)},categories(){return Object.keys(this.sectionInfo[this.title])}},mounted(){console.log(`%c                                             
       ___________________________________   
      |                                   |  
      |  Sneaky peeky!                    |  
      |  You're not supposed to see this  |  
      |_________ _________________________|  
                V                            
       *******                               
      *  o O  *                              
      *   ∆   *                              
      *   3   *                              
       *******                               
                                             `,"font-weight: 700;")},methods:{selectCategory(n){this.selectedCategory=n}}},vt=["id","aria-label"],$t={class:"flex w-full gap-4 px-6 py-8 md:px-16"},jt={class:"text-4xl text-purple-600 uppercase md:font-bold font-terminal"},It={class:"flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4",role:"tablist"},St=["aria-selected","onClick"],Tt={class:"flex items-center justify-center gap-2"},Ct={class:"text-xs uppercase md:text-xl font-terminal"},Dt=["aria-label"],Ot={class:"flex justify-end mt-2 mr-2","aria-label":"View Toggle"},Lt={class:"inline-flex text-sm leading-none border-2 border-purple-600 rounded-full cursor-pointer bg-accent-light dark:bg-accent-dark text-dark dark:text-light"},Mt={key:0,class:"flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16",role:"list"};function Pt(n,i,t,p,c,o){const r=b,f=ct,u=wt;return l(),s("section",{id:o.title,class:"flex flex-col min-h-screen bg-primary-light dark:bg-primary-dark","aria-label":o.title},[e("header",$t,[d(r,{name:"fluent-emoji-flat:open-file-folder",class:"w-9 h-9",alt:"Folder Icon"}),e("h2",jt,_(o.title),1)]),e("ul",It,[(l(!0),s(m,null,x(o.categories,a=>(l(),s("li",{key:a,class:g(["flex-1 md:p-8 p-2 py-8 text-center cursor-pointer rounded-t-xl",c.selectedCategory===a?"border-x-2 border-t-2 border-x-purple-400 border-t-purple-400 bg-secondary-light dark:bg-secondary-dark shadow-top":"bg-accent-light dark:bg-accent-dark"]),role:"tab","aria-selected":c.selectedCategory===a,tabindex:"0",onClick:k=>o.selectCategory(a)},[e("div",Tt,[d(r,{name:"fluent-emoji-flat:open-file-folder",class:"w-3 h-3 md:w-5 md:h-5"}),e("span",Ct,_(a),1)])],10,St))),128))]),e("div",{class:"min-h-screen rounded-lg bg-secondary-light dark:bg-secondary-dark","aria-label":c.selectedCategory},[e("div",Ot,[e("div",Lt,[e("i",{class:g({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full":!c.showList}),role:"button",tabindex:"0","aria-label":"Grid View",onClick:i[0]||(i[0]=a=>c.showList=!1)},[d(r,{name:"uil:th",class:"w-3 h-3 md:w-4 md:h-4"})],2),e("i",{class:g({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full":c.showList}),role:"button",tabindex:"0","aria-label":"List View",onClick:i[1]||(i[1]=a=>c.showList=!0)},[d(r,{name:"uil:list-ul",class:"w-3 h-3 md:w-4 md:h-4"})],2)])]),e("div",{class:g({"flex-wrap justify-around p-6 md:flex md:gap-8 md:p-16":!c.showList}),"aria-label":"Skills Container"},[c.showList?(l(),s("ul",Mt,[(l(!0),s(m,null,x(o.sortedFilteredSkills,a=>(l(),s("li",{key:a.name,role:"listitem"},[d(f,{data:a},null,8,["data"])]))),128))])):(l(!0),s(m,{key:1},x(o.filteredSkills,a=>(l(),s("div",{key:a.name,class:"w-full card md:w-80 scroll-transition"},[d(u,{data:a},null,8,["data"])]))),128))],2)],8,Dt)],8,vt)}const At=h(kt,[["render",Pt]]),Ft={data(){return{showScrollToTop:!1,y:0}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.showScrollToTop=window.scrollY>0},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};function Nt(n,i,t,p,c,o){const r=b;return c.showScrollToTop?(l(),s("button",{key:0,class:"fixed z-40 p-2 bg-purple-600 rounded-full shadow-lg bottom-4 right-4","aria-label":"Scroll to top of the page",onClick:i[0]||(i[0]=(...f)=>o.scrollToTop&&o.scrollToTop(...f))},[d(r,{name:"uil:arrow-circle-up",class:"text-4xl text-white"})])):w("",!0)}const zt=h(Ft,[["render",Nt]]),Bt={props:{sectionInfo:{type:Array,default:()=>[]}}};function Vt(n,i,t,p,c,o){const r=E,f=ve,u=Be,a=lt,k=At,T=zt;return l(),s("main",null,[d(r,{"section-info":t.sectionInfo[0]},null,8,["section-info"]),d(f,{"section-info":t.sectionInfo[1]},null,8,["section-info"]),d(u,{"section-info":t.sectionInfo[2]},null,8,["section-info"]),d(a,{"section-info":t.sectionInfo[3]},null,8,["section-info"]),d(k,{"section-info":t.sectionInfo[4]},null,8,["section-info"]),d(T)])}const Yt=h(Bt,[["render",Vt]]);export{Yt as default};
