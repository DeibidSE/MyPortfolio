import{d as b,r as $,c as g,o as B,a as l,b as o,e as t,t as m,u as s,f as d,_ as S,n as j,g as A,F as k,h as C,i as L,w as M,j as D,p as E,k as z,l as O,m as F,q as V,s as U}from"./entry.Ihb40uxR.js";const Z=["id","aria-label"],H={class:"flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto"},Y={class:"flex items-end justify-center w-full h-full p-5 overflow-hidden sm:p-6"},q={class:"w-full text-4xl font-bold text-center sm:text-5xl md:text-7xl"},J={class:"flex items-start justify-center w-full h-full p-5 overflow-hidden sm:p-6"},W={class:"absolute bottom-0 w-full py-4 text-center"},G={class:"flex flex-col animate-bounce text-dark dark:text-light"},K={class:"w-full text-xs sm:text-sm"},Q=b({__name:"MyIntroduction",props:{sectionData:{type:Object,default:()=>({})}},setup(e){const n=e,r=$(""),a=$(!1),i=$(0),u=$(null),p=g(()=>Object.keys(n.sectionData).toString()||""),f=g(()=>p.value.toLowerCase().replace(/\s+/g,"-")),h=g(()=>n.sectionData[p.value]||{});B(()=>{u.value=u,y()});const y=()=>{const c=u.value,_=h.value.job||"";if(c&&_.length>0){a.value?r.value=_.substring(0,r.value.length-1):r.value=_.substring(0,r.value.length+1),c.textContent=r.value;let w=200-Math.random()*100;a.value&&(w/=2),!a.value&&r.value===_?(w=2e3,a.value=!0):a.value&&r.value===""&&(a.value=!1,i.value++,w=500),setTimeout(y,w)}else r.value=_},x=()=>{const c=document.querySelectorAll("section"),_=document.getElementById("header"),w=_?_.offsetHeight:0;if(c&&c.length>=2){const T=c[1],{top:I}=T.getBoundingClientRect();window.scrollTo({top:I+window.scrollY-w,behavior:"smooth"})}};return(c,_)=>{const w=S;return l(),o("section",{id:s(f),class:"min-h-screen bg-primary-light dark:bg-primary-dark","aria-label":s(f)},[t("div",H,[t("div",Y,[t("h1",q,m(s(h).whoAmI||""),1)]),t("div",J,[t("h2",{ref:"typingtext",class:"inline-block text-2xl font-bold text-center text-purple-500 cursor-default sm:text-4xl md:text-5xl animate-blinking-caret"},m(s(r)||""),513)])]),t("div",W,[t("div",G,[t("span",K,m(s(h).scrollDown||""),1),d(w,{name:"uil:angle-double-down",class:"self-center text-4xl cursor-pointer hover:text-purple-500",role:"button","aria-label":"Scroll down",onClick:x})])])],8,Z)}}}),X={class:"overflow-hidden"},ee=t("path",{d:"M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"},null,-1),te=[ee],ae=b({__name:"PageDivider",props:{top:{type:Boolean}},setup(e){return(n,r)=>(l(),o("div",X,[(l(),o("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",class:j(["w-full h-20 fill-light dark:fill-dark",{"rotate-180":e.top}])},te,2))]))}}),le=b({__name:"BadgeComponent",props:{color:{}},setup(e){const n=e,r={blue:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",red:"dark:bg-red-800 bg-red-700 text-red-100",green:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",yellow:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"},a=g(()=>r[n.color]);return(i,u)=>(l(),o("span",{class:j(["text-xs md:text-sm font-medium px-2.5 py-0.5 rounded-full",s(a)])},[A(i.$slots,"default")],2))}}),oe={class:"flex flex-col gap-6 font-terminal"},re={class:"flex items-start gap-2"},ne=t("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$",-1),se={class:"text-dark dark:text-light"},ie={class:"flex flex-col gap-4 xl:grid xl:grid-cols-3"},ce={class:"flex flex-col h-full gap-4 lg:col-span-2"},de={class:"text-5xl font-extrabold text-center text-purple-500"},ue={class:"flex flex-col justify-center h-full gap-3 leading-normal tracking-wide text-dark dark:text-light"},pe={class:"flex flex-col self-center p-4 xl:p-8 w-fit h-fit"},fe={class:"group [perspective:1000px]","aria-label":"Profile Card"},me={class:"relative w-full h-full transition-all duration-500 rounded-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)] shadow-xl shadow-black/40"},_e={class:"inset-0 p-4 border-4 rounded-full md:p-6 dark:bg-primary-dark bg-primary-light border-dark dark:border-light"},he=["src"],ge={class:"absolute inset-0 w-full h-full p-8 text-center border-4 rounded-full dark:bg-primary-dark bg-primary-light border-dark dark:border-light [transform:rotateY(180deg)] [backface-visibility:hidden]"},xe={class:"flex flex-col items-center justify-center min-h-full"},be=t("hr",{class:"border-2 border-gray-400 dark:border-gray-600",role:"separator"},null,-1),ye={class:"flex flex-wrap items-center justify-around w-full gap-4"},we=["href","aria-label"],ve=t("hr",{class:"border-2 border-gray-400 dark:border-gray-600",role:"separator"},null,-1),ke={class:"flex flex-col gap-2 w-max"},$e=t("div",{class:"flex items-start gap-2"},[t("span",{class:"font-semibold tracking-wider dark:text-lime-600 text-lime-800"},"user@localhost:~$"),t("span",{class:"text-dark dark:text-light"},"npx run cv-download")],-1),je={class:"flex items-center gap-2"},Ce=["href","download","onMouseover"],De=b({__name:"TerminalContent",props:{terminalData:{type:Object,default:()=>({})}},setup(e){const n=$(0),r=a=>{n.value=a};return(a,i)=>{var f,h,y,x;const u=S,p=le;return l(),o("div",oe,[t("div",re,[ne,t("span",se,m(e.terminalData.command||""),1)]),t("div",ie,[t("div",ce,[t("h2",de,m(e.terminalData.title||""),1),t("div",ue,[(l(!0),o(k,null,C(e.terminalData.content,(c,_)=>(l(),o("p",{key:_},m(c||""),1))),128))])]),t("div",pe,[t("div",fe,[t("div",me,[t("div",_e,[t("img",{src:a.$config.public.BASE_URL+((h=(f=e.terminalData)==null?void 0:f.profileCard)==null?void 0:h.imagePath),alt:"Photo of the programmer of this portfolio",class:"inset-0 object-cover object-top border-4 rounded-full border-dark dark:border-light aspect-square",loading:"lazy",role:"img","aria-label":"Photo of the programmer",width:"480px",height:"640px"},null,8,he)]),t("div",ge,[t("div",xe,[d(u,{name:"MainIcon",class:"w-full h-auto",role:"img","aria-label":"Profile Icon"})])])])])])]),be,t("div",ye,[(l(!0),o(k,null,C((x=(y=e.terminalData)==null?void 0:y.profileCard)==null?void 0:x.socialLinks,(c,_)=>(l(),o("a",{key:_,href:c.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Contact me via ${c.name}`,class:"flex items-center justify-center px-3 py-1 transition border rounded-full shadow-xl dark:border-light border-dark gap-x-2 hover:scale-125 dark:bg-primary-dark bg-primary-light"},[d(u,{name:c.icon,class:"w-6 h-6",role:"link"},null,8,["name"]),L(" "+m(c.name||""),1)],8,we))),128))]),ve,t("div",ke,[$e,t("div",je,[L(" Status: "),d(p,{color:"red"},{default:M(()=>[L(m(e.terminalData.availability),1)]),_:1})]),(l(!0),o(k,null,C(e.terminalData.cv,(c,_)=>(l(),o("a",{key:_,href:a.$config.public.BASE_URL+c.url,target:"_blank","aria-label":"Download my curriculum vitae",download:c.fileName,class:j({"hover:text-purple-700 dark:hover:text-purple-500":!0,"text-purple-600 dark:text-purple-400":s(n)===_}),role:"link",onMouseover:w=>r(_)}," > "+m(c.label||""),43,Ce))),128))])])}}}),Se={key:0,class:"flex flex-col w-full h-full overflow-hidden rounded-lg",role:"region","aria-label":"Terminal component"},Te={class:"flex items-center w-full p-3 shadow-xl bg-primary-light dark:bg-primary-dark"},Ie={class:"inline-flex gap-2"},Le={key:1,class:"flex items-center justify-center w-full h-full overflow-hidden rounded-lg"},Me=t("h2",{class:"cursor-not-allowed text-9xl"}," :( ",-1),Be=[Me],Ae=b({__name:"TerminalFrame",setup(e){const n=$(!1),r=$(!1),a=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};return(i,u)=>s(n)?(l(),o("div",Le,Be)):(l(),o("div",Se,[t("div",Te,[t("div",Ie,[t("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#ff5f57]",role:"button","aria-label":"Close terminal button",onClick:u[0]||(u[0]=p=>n.value=!s(n))}),t("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#ffbd2e]",role:"button","aria-label":"Minimize terminal button",onClick:u[1]||(u[1]=p=>r.value=!s(r))}),t("div",{class:"w-2.5 h-2.5 rounded-[50%] bg-[#28c940]",role:"button","aria-label":"Maximize terminal button",onClick:a})])]),t("div",{class:j(["flex flex-col flex-grow max-h-full p-4 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark",{"h-0 !overflow-y-hidden":s(r)}])},[A(i.$slots,"default")],2)]))}}),Oe=["id","aria-label"],Pe={class:"flex self-center justify-center w-full h-full scroll-transition"},Ee=b({__name:"MyPresentation",props:{sectionData:{type:Object,default:()=>({})}},setup(e){const n=e,r=g(()=>Object.keys(n.sectionData).toString()||""),a=g(()=>r.value.toLowerCase().replace(/\s+/g,"-")),i=g(()=>n.sectionData[r.value]||{});return(u,p)=>{const f=De,h=Ae;return l(),o("section",{id:s(a),class:"flex flex-col min-h-screen gap-4 p-6 lg:flex-row lg:gap-10 lg:px-32 lg:py-16",role:"region","aria-label":s(a)},[t("div",Pe,[d(h,null,{default:M(()=>[d(f,{"terminal-data":s(i)},null,8,["terminal-data"])]),_:1})])],8,Oe)}}}),ze=e=>(E("data-v-1daffa11"),e=e(),z(),e),Fe={class:"flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},Ve={key:0,d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"},Ne={key:1,d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"},Re={class:"text-xs font-medium sm:text-base ms-3 me-4"},Ue=["href"],Ze=ze(()=>t("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)),He=[Ze],Ye=b({__name:"AlertComponent",props:{data:{type:Object,default:()=>({})},enableClose:{type:Boolean,default:!0},animateEntry:{type:Boolean,default:!0},type:{type:String,default:"info"}},emits:["close"],setup(e){return(n,r)=>e.data?(l(),o("div",{key:0,class:j({"flex items-center p-4 bg-transparent backdrop-blur-xl":!0,"text-red-600 border-2 border-red-600 rounded-lg dark:border-red-500 dark:text-red-500":e.type==="error","text-yellow-600 border-2 border-yellow-600 rounded-lg dark:border-yellow-400 dark:text-yellow-400":e.type==="warning","text-purple-500 border-2 border-purple-500 rounded-lg dark:border-purple-400 dark:text-purple-400":e.type==="info","entrance-anim":e.animateEntry}),role:"alert","aria-live":"assertive"},[(l(),o("svg",Fe,[e.type==="info"?(l(),o("path",Ve)):(l(),o("path",Ne))])),t("div",Re,[L(m(e.data.message||"")+" ",1),e.data.link?(l(),o("a",{key:0,class:"font-semibold underline hover:no-underline",href:e.data.link.url,target:"_blank",rel:"noopener noreferrer",role:"link"},m(e.data.link.label||""),9,Ue)):D("",!0)]),e.enableClose?(l(),o("button",{key:0,type:"button",class:"ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8","aria-label":"Close",onClick:r[0]||(r[0]=a=>n.$emit("close"))},He)):D("",!0)],2)):D("",!0)}}),P=O(Ye,[["__scopeId","data-v-1daffa11"]]),qe=["tooltipText","position"],Je=b({__name:"TooltipComponent",props:{tooltipText:{type:String,default:""},position:{type:String,default:"top"}},setup(e){return(n,r)=>(l(),o("span",{class:"relative before:content-[''] before:z-[1001] before:border-[5px] before:border-solid before:border-transparent after:content-[attr(tooltipText)] after:text-center after:whitespace-nowrap after:min-w-[3em] after:max-w-xs after:overflow-hidden after:text-ellipsis after:shadow-sm after:opacity-30 after:text-white after:z-[1000] after:p-2 after:rounded-md",tooltipText:e.tooltipText,position:e.position,role:"tooltip","aria-live":"polite","aria-atomic":"true"},[A(n.$slots,"default",{},void 0,!0)],8,qe))}}),N=O(Je,[["__scopeId","data-v-fa3cbb40"]]),We=["aria-label"],Ge=["src","alt"],Ke={key:1,class:"flex items-center justify-center text-center w-full aspect-video max-w-[752px] max-h-[400px] transition-transform rounded-lg bg-[repeating-linear-gradient(-45deg,_yellow,_yellow_50px,_black_50px,_black_100px)] bg-fixed bg-repeat"},Qe={class:"w-full p-2 text-2xl font-semibold bg-orange-600 border-black border-y-2 md:p-4 md:text-5xl text-dark font-terminal"},Xe={class:"w-full text-4xl font-bold tracking-wide text-center text-purple-500"},et={class:"self-center w-full text-sm lg:text-lg","aria-label":"Description of the project"},tt={key:2,class:"inline-flex flex-wrap justify-around w-full gap-2 p-4 mx-auto rounded-lg lg:p-6 shadow-inside"},at=["href"],lt=["src","alt","aria-label"],ot=b({__name:"ProjectCard",props:{projectName:{type:String,default:""},projectData:{type:Object,default:()=>({})}},setup(e){return(n,r)=>{const a=N;return l(),o("div",{class:"flex flex-col items-center gap-4 p-4 duration-500 rounded-lg shadow-xl justify-evenly justify-items-center md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition hover:-translate-y-5","aria-label":`Details of the project ${e.projectName}`},[e.projectData.image?(l(),o("img",{key:0,src:n.$config.public.BASE_URL+e.projectData.image,alt:`Image of my project: ${e.projectName}`,class:"w-auto max-h-[400px] m-auto rounded-lg transition-transform",loading:"lazy",width:"752px",height:"400px"},null,8,Ge)):(l(),o("div",Ke,[t("span",Qe,m(e.projectData.text||"Work in Progress"),1)])),t("h3",Xe,m(e.projectName||""),1),t("p",et,m(e.projectData.description||""),1),e.projectData.technologies?(l(),o("div",tt,[(l(!0),o(k,null,C(e.projectData.technologies,(i,u)=>(l(),F(a,{key:u,"tooltip-text":i.name,position:"top"},{default:M(()=>[t("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",class:"cursor-pointer"},[t("img",{src:`${n.$config.public.BASE_URL}/svg/${i.name}.svg`,alt:`The logo of ${i.name}`,class:"w-6 h-6 transition-transform md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125",loading:"lazy",width:"40",height:"40",role:"img","aria-label":`Logo of ${i.name}`},null,8,lt)],8,at)]),_:2},1032,["tooltip-text"]))),128))])):D("",!0)],8,We)}}}),rt=["id","aria-label"],nt={class:"flex items-center gap-4"},st={class:"text-4xl text-purple-500 uppercase md:font-bold font-terminal"},it={class:"flex flex-col gap-8 lg:gap-16 lg:grid lg:grid-cols-2"},ct=b({__name:"MyProjects",props:{sectionData:{type:Object,default:()=>({})},alert:{type:Object,default:()=>({})}},setup(e){const n=e,r=g(()=>Object.keys(n.sectionData).toString()||""),a=g(()=>r.value.toLowerCase().replace(/\s+/g,"-")),i=g(()=>n.sectionData[r.value]||{});return(u,p)=>{const f=S,h=P,y=ot;return l(),o("section",{id:s(a),class:"flex flex-col min-h-screen gap-8 p-6 bg-primary-light dark:bg-primary-dark lg:p-16","aria-label":s(a)},[t("header",nt,[d(f,{name:"FolderIcon",class:"w-9 h-9",alt:"Folder Icon"}),t("h2",st,m(s(r)||""),1)]),d(h,{data:e.alert,"enable-close":!1,"animate-entry":!1,type:"info",class:"scroll-transition"},null,8,["data"]),t("div",it,[(l(!0),o(k,null,C(s(i),(x,c)=>(l(),F(y,{key:c,"project-name":c.toString(),"project-data":x},null,8,["project-name","project-data"]))),128))])],8,rt)}}}),dt={class:"relative border-l-4 border-dark dark:border-light",role:"list"},ut=t("div",{class:"absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white"},null,-1),pt={class:"mb-1 text-sm font-normal leading-none text-purple-400"},ft={class:"text-xl"},mt=["href"],_t={key:1},ht={class:"mb-2 text-base text-gray-800 dark:text-gray-600"},gt={class:"mb-4 text-xs text-gray-600 dark:text-gray-400"},xt=b({__name:"TimeLine",props:{data:{type:Object,default:()=>({})}},setup(e){return(n,r)=>(l(),o("ol",dt,[(l(!0),o(k,null,C(e.data,(a,i)=>(l(),o("li",{key:i,class:"mb-10 ml-4",role:"listitem"},[ut,t("time",pt,m(a.startDate||"")+" - "+m(a.endDate||""),1),t("h3",ft,[a.website?(l(),o("a",{key:0,href:a.website,rel:"noopener noreferrer",class:"text-xl hover:text-purple-500 hover:cursor-pointer",role:"link"},m(a.title||""),9,mt)):(l(),o("span",_t,m(a.title||""),1))]),t("h4",ht,m(a.location||""),1),t("p",gt,m(a.details||""),1)]))),128))]))}}),bt=["id","aria-label"],yt=["aria-label"],wt={class:"flex w-full gap-4"},vt={class:"text-4xl font-bold text-purple-500 uppercase font-terminal"},kt=b({__name:"MyJobsAndStudies",props:{sectionData:{type:Object,default:()=>({})}},setup(e){const n=e,r=g(()=>Object.keys(n.sectionData).toString()||""),a=g(()=>r.value.toLowerCase().replace(/\s+/g,"-")),i=g(()=>n.sectionData[r.value]||{});return(u,p)=>{const f=S,h=xt;return l(),o("section",{id:s(a),class:"flex flex-col min-h-screen gap-6 p-6 lg:grid lg:p-16 lg:grid-cols-3","aria-label":s(r)},[(l(!0),o(k,null,C(s(i),(y,x)=>(l(),o("div",{key:x,class:"flex flex-col gap-8 p-8 border-4 shadow-xl border-dark dark:border-light bg-primary-light dark:bg-primary-dark rounded-xl scroll-transition","aria-label":String(x)},[t("header",wt,[d(f,{name:"FolderIcon",class:"w-9 h-9",alt:"Folder Icon"}),t("h2",vt,m(x||""),1)]),d(h,{data:y},null,8,["data"])],8,yt))),128))],8,bt)}}}),$t={key:0,class:"flex flex-row items-center gap-8 py-4"},jt=["src","alt","aria-label"],Ct={class:"w-full rounded-full"},Dt={class:"flex h-5 overflow-hidden text-xs rounded-lg bg-primary-light dark:bg-primary-dark"},St=b({__name:"TechnicalSkillsList",props:{data:{type:Object,default:()=>({})}},setup(e){const n=e,r=g(()=>{const a=[{class:"bg-red-600",width:25},{class:"bg-orange-500",width:25},{class:"bg-yellow-400",width:25},{class:"bg-green-500",width:25}],i=Math.floor(n.data.progress/25),u=n.data.progress%25;return a.map((p,f)=>f<i?{...p,width:25}:f===i?{...p,width:u}:{...p,width:0}).filter(p=>p.width>0)});return(a,i)=>{const u=N;return e.data&&e.data.image&&e.data.progress?(l(),o("div",$t,[d(u,{"tooltip-text":e.data.name,position:"bottom"},{default:M(()=>[t("img",{src:a.$config.public.BASE_URL+e.data.image,alt:`An image of the official logo of ${e.data.name}`,class:"w-10 h-10 transition-transform hover:scale-125",loading:"lazy",width:"40",height:"40",role:"img","aria-label":`Logo of ${e.data.name}`},null,8,jt)]),_:1},8,["tooltip-text"]),t("div",Ct,[t("div",Dt,[(l(!0),o(k,null,C(s(r),(p,f)=>(l(),o("div",{key:f,class:j([p.class,{"rounded-r-lg":f===s(r).length-1}]),style:V({width:p.width+"%"})},null,6))),128))])])])):D("",!0)}}}),R=e=>(E("data-v-cbddcc9a"),e=e(),z(),e),Tt={class:"relative z-10 flex items-center justify-center p-16 duration-500 translate-y-24 face face1 bg-secondary-light dark:bg-secondary-dark rounded-t-xl"},It={class:"flex flex-col items-center justify-center duration-500 opacity-50 dark:opacity-20"},Lt=["src","alt"],Mt=["aria-label"],Bt={class:"self-center p-4 text-4xl font-bold text-center text-purple-500"},At={key:0,class:"flex flex-row items-center gap-1 p-4 shadow-inside rounded-xl"},Ot=R(()=>t("span",{class:"text-sm"},"🤔",-1)),Pt={class:"w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900"},Et=R(()=>t("span",{class:"text-sm"},"🤓",-1)),zt=b({__name:"TechnicalSkillCard",props:{data:{type:Object,default:()=>({})}},setup(e){return(n,r)=>(l(),o(k,null,[t("div",Tt,[t("div",It,[t("img",{src:n.$config.public.BASE_URL+e.data.image,alt:`An image of the official logo of ${e.data.name}`,class:"w-24 h-24",loading:"lazy",width:"96",height:"96",role:"img"},null,8,Lt)])]),t("div",{class:"flex flex-col justify-center w-full p-6 overflow-x-hidden overflow-y-auto duration-500 -translate-y-24 shadow-xl opacity-0 face face2 rounded-b-xl bg-primary-light dark:bg-primary-dark","aria-label":`Details about ${e.data.name}`},[t("h3",Bt,m(e.data.name||""),1),e.data.progress?(l(),o("div",At,[Ot,t("div",Pt,[t("div",{class:"bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full",style:V(`width: ${e.data.progress}%`)},null,4)]),Et])):D("",!0)],8,Mt)],64))}}),Ft=O(zt,[["__scopeId","data-v-cbddcc9a"]]),Vt=["id","aria-label"],Nt={class:"flex w-full gap-4 px-6 py-8 md:px-16"},Rt={class:"text-4xl text-purple-500 uppercase md:font-bold font-terminal"},Ut={class:"flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4",role:"tablist"},Zt=["aria-selected","onClick"],Ht={class:"flex items-center justify-center gap-2"},Yt={class:"text-xs uppercase md:text-xl font-terminal"},qt=["aria-label"],Jt={class:"flex justify-end mt-2 mr-2","aria-label":"View Toggle"},Wt={class:"inline-flex text-sm leading-none bg-purple-200 border-2 border-purple-400 rounded-full cursor-pointer hover:bg-purple-300 dark:bg-purple-600 hover:dark:bg-purple-500 text-dark dark:text-light shadow-inside"},Gt={key:0,class:"flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16",role:"list"},Kt=b({__name:"MyTechnicalSkills",props:{sectionData:{type:Object,default:()=>({})},alert:{type:Object,default:()=>({})}},setup(e){const n=e,r=$("/frontend"),a=$(!1),i=g(()=>Object.keys(n.sectionData).toString()||""),u=g(()=>i.value.toLowerCase().replace(/\s+/g,"-")),p=g(()=>n.sectionData[i.value][r.value]||[]),f=g(()=>[...p.value].sort((x,c)=>c.progress-x.progress)),h=g(()=>Object.keys(n.sectionData[i.value])),y=x=>{r.value=x};return B(()=>{console.log(`%c                                             
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
                                             `,"font-weight: 700;")}),(x,c)=>{const _=S,w=P,T=St,I=Ft;return l(),o("section",{id:s(u),class:"flex flex-col min-h-screen bg-primary-light dark:bg-primary-dark","aria-label":s(u)},[t("header",Nt,[d(_,{name:"FolderIcon",class:"w-9 h-9",alt:"Folder Icon"}),t("h2",Rt,m(s(i)||""),1)]),t("ul",Ut,[(l(!0),o(k,null,C(s(h),v=>(l(),o("li",{key:v,class:j(["flex-1 md:p-8 p-2 py-8 text-center cursor-pointer rounded-t-xl",s(r)===v?"border-x-4 border-t-4 border-x-purple-400 border-t-purple-400 bg-secondary-light dark:bg-secondary-dark shadow-top":"bg-purple-200 hover:bg-purple-300 dark:bg-purple-600 hover:dark:bg-purple-500"]),role:"tab","aria-selected":s(r)===v,tabindex:"0",onClick:ta=>y(v)},[t("div",Ht,[d(_,{name:"FolderIcon",class:"w-3 h-3 md:w-5 md:h-5"}),t("span",Yt,m(v||""),1)])],10,Zt))),128))]),t("div",{class:"min-h-screen bg-secondary-light dark:bg-secondary-dark","aria-label":s(r)},[t("div",Jt,[t("div",Wt,[t("i",{class:j({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-500 rounded-full shadow-xl":!s(a)}),role:"button",tabindex:"0","aria-label":"Grid View",onClick:c[0]||(c[0]=v=>a.value=!1)},[d(_,{name:"uil:th",class:"w-3 h-3 md:w-4 md:h-4"})],2),t("i",{class:j({"inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none":!0,"bg-secondary-light dark:bg-secondary-dark text-purple-500 rounded-full":s(a)}),role:"button",tabindex:"0","aria-label":"List View",onClick:c[1]||(c[1]=v=>a.value=!0)},[d(_,{name:"uil:list-ul",class:"w-3 h-3 md:w-4 md:h-4"})],2)])]),t("div",{class:j({"flex-wrap justify-around p-6 md:flex md:gap-8 md:p-8 lg:p-16":!s(a)}),"aria-label":"Skills Container"},[s(a)?(l(),o("ul",Gt,[d(w,{data:e.alert,"enable-close":!1,"animate-entry":!1,type:"info",class:"shadow-inside"},null,8,["data"]),(l(!0),o(k,null,C(s(f),v=>(l(),o("li",{key:v.name,role:"listitem"},[d(T,{data:v},null,8,["data"])]))),128))])):(l(!0),o(k,{key:1},C(s(p),v=>(l(),o("div",{key:v.name,class:"w-full card md:w-80 scroll-transition"},[d(I,{data:v},null,8,["data"])]))),128))],2)],8,qt)],8,Vt)}}}),Qt=["data-label"],Xt=b({__name:"ScrollToTopBtn",props:{btnData:{type:Object,default:()=>({})}},setup(e){const n=e,r=$(!1),a=()=>{r.value=window.scrollY>0},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return B(()=>{window.addEventListener("scroll",a)}),U(()=>{window.removeEventListener("scroll",a)}),(u,p)=>{var h;const f=S;return s(r)?(l(),o("button",{key:0,class:j("fixed bottom-4 right-4 group z-40 p-1 w-12 h-12 text-light bg-purple-500 font-semibold flex items-center justify-center justify-items-center shadow-lg cursor-pointer duration-300 overflow-hidden rounded-[50%] border-2 border-light hover:w-36 hover:duration-300 hover:bg-purple-600 hover:rounded-[50px] before:absolute before:content-[attr(data-label)] before:text-[0px] hover:before:text-sm hover:before:duration-300"),"aria-label":"Scroll to top of the page","data-label":((h=n==null?void 0:n.btnData)==null?void 0:h.label)||"Back to Top",onClick:i},[d(f,{name:"uil:arrow-up",class:"text-3xl text-white duration-300 group-hover:duration-300 group-hover:translate-y-[-200%]"})],10,Qt)):D("",!0)}}}),ea={key:0,class:"fixed right-0 z-20 flex w-full p-2 mx-auto top-20 place-content-center lg:w-1/2"},la=b({__name:"index",props:{selectedLanguageData:{type:Array,default:()=>[]}},setup(e){const n=e,r=$(i());function a(p){var f;return((f=n.selectedLanguageData[5])==null?void 0:f.others[p])||{}}function i(){return CSS.supports("animation-timeline: view()")}function u(){r.value=!0}return(p,f)=>{const h=Q,y=ae,x=Ee,c=ct,_=kt,w=Kt,T=Xt,I=P;return l(),o("main",null,[d(h,{"section-data":e.selectedLanguageData[0]},null,8,["section-data"]),d(y),d(x,{"section-data":e.selectedLanguageData[1]},null,8,["section-data"]),d(y,{top:!0}),d(c,{"section-data":e.selectedLanguageData[2],alert:a("projectsAlert")},null,8,["section-data","alert"]),d(y),d(_,{"section-data":e.selectedLanguageData[3]},null,8,["section-data"]),d(y,{top:!0}),d(w,{"section-data":e.selectedLanguageData[4],alert:a("alertSkills")},null,8,["section-data","alert"]),d(T,{"btn-data":a("backToTopButton")},null,8,["btn-data"]),s(r)?D("",!0):(l(),o("div",ea,[d(I,{data:a("alertCompatibility"),type:"warning",onClose:u},null,8,["data"])]))])}}});export{la as default};