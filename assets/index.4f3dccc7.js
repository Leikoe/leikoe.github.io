import{c as j,r as g,o as r,a as l,b as t,d as c,w as m,n as f,u,e as p,f as I,R as S,t as _,F as x,g as b,h as w,T,p as L,i as N,j as A,k as R,l as C}from"./vendor.88bc436c.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}};H();var V="/favicon.ico",E="/dark_mode_black_24dp.svg",F="/light_mode_white_24dp.svg";const W={class:"sticky top-0 z-50 w-full flex justify-center dark:bg-gray-800/70 bg-gray-50/70"},z={class:"flex items-center justify-between text-gray-700 dark:text-mandy-50 text-2xl md:p-5 md:w-2/3 w-full p-2"},B={class:"flex items-center underline-offset-8"},O={class:"flex items-center w-fit"},q=t("img",{class:"w-10 bg-transparent p-2 px-3",src:V,alt:""},null,-1),G=p("my works"),U=p("contact"),D=t("img",{class:"block dark:hidden",src:E,alt:""},null,-1),M=t("img",{class:"hidden dark:block",src:F,alt:""},null,-1),P=[D,M],K={setup(s){var o=!0;o?document.body.classList.add("dark"):document.body.classList.remove("dark");function i(a){o=!o,o?document.body.classList.add("dark"):document.body.classList.remove("dark")}const n=I(),e=j(()=>n.path);return(a,d)=>{const h=g("RouterLink");return r(),l("nav",W,[t("div",z,[t("div",B,[c(h,{to:"/",class:"font-bold mr-5"},{default:m(()=>[t("div",O,[q,t("h1",{class:f(["font-bold",u(e)=="/"?"underline decoration-mandy-700 decoration-4":""])}," Leiko ",2)])]),_:1}),c(h,{to:"/works",class:f(["hidden md:inline mx-5",u(e)=="/works"?"underline decoration-mandy-700 decoration-4":""])},{default:m(()=>[G]),_:1},8,["class"]),c(h,{to:"/contact",class:f(["hidden md:inline mx-5",u(e)=="/contact"?"underline decoration-mandy-700 decoration-4":""])},{default:m(()=>[U]),_:1},8,["class"])]),t("div",{onClick:d[0]||(d[0]=je=>i()),class:"border-2 rounded-lg p-1 border-mandy-700 m-2"},P)])])}}};const X={class:"flex flex-col justify-center dark:bg-gray-800 bg-eyesaver min-h-screen items-center"},Y={class:"flex flex-col items-center w-4/5"},J=t("h1",{class:"mb-5 dark:text-gray-50 text-gray-700"}," \xA9 2022 Leiko. All Rights Reserved. ",-1),Q={setup(s){return(o,i)=>(r(),l("main",X,[c(K),t("div",Y,[c(u(S)),J])]))}};var Z="/assets/computer_illustration.a2fd6195.svg";const ee={class:"text-gray-700 dark:text-gray-50 flex flex-col items-center text-center p-10"},te=["src"],se={class:"pt-4 text-xl"},oe={class:"text-md font-thin"},ae={class:"flex my-2 flex-wrap w-full"},ne={props:{name:{type:String,required:!0},desc:{type:String,required:!0},text:{type:String,required:!1},date:{type:String,required:!1},skills:{type:Array,required:!1},image:{type:String}},setup(s){return(o,i)=>(r(),l("div",ee,[t("img",{class:"inset-0 w-full object-cover rounded-lg hover:cursor-pointer",src:s.image,alt:""},null,8,te),t("h1",se,_(s.name),1),t("h1",oe,_(s.desc),1),t("div",ae,[(r(!0),l(x,null,b(s.skills,n=>(r(),l("div",{key:n,class:"text-sm font-thin text-gray-50 px-1.5 bg-gray-600 dark:bg-mandy-600 rounded-md mx-1 py-0.5 my-1"},[t("h1",null,_(n),1)]))),128))])]))}},ie={class:"flex flex-col justify-center items-center"},re={class:"flex justify-start items-center flex-col"},le=t("h1",{class:"text-4xl pb-5 font-bold text-gray-800 dark:text-gray-50 mb-5 underline decoration-mandy-700 decoration-4 underline-offset-8"}," My works ",-1),ce={class:"flex flex-col md:flex-row items-center flex-wrap justify-center md:w-1/2"},k={setup(s){var o=[{image:"GUI.png",name:"Stonks",desc:"Hypixel skyblock AH flipping bot",text:"This was my main project for almost 2 years, it is a sniping tool for the game Hypixel Skyblock, it's a bot which scans the ingame market 24/7 and notifies you when an item has been put up for sale for too low, which you can then easely buy with the keybinds of the `ingame mod` or from the `discord bot` feed. I started the project alone and in mid 2021, I met Refactor, a friend who helped me with the project and taught me `c++` aswell as `flask`. This project taught me almost everything I know about low level programming, optimisation, algorithms and networks.",date:"2020",skills:["py","js","go","cpp","rust","java","kotlin"]},{image:"NSG.png",name:"NSG",desc:"NFT sniping bot",text:"NSG is a discord me and some friends which I made along my NFT/WEB3 journey created. In this discord I made a bot which notifies us when nft collections reveal and tells us which nfts are the cheapest on opensea, to then buy and resell for massive profits. I learned rust along the way. Refactor helped me with some performance issues and brainstorming here. I learned a lot more optimisation along the way.",date:"2022 february - ?",skills:["rust"]},{image:"blitzsolver.jpg",name:"WordBlitz Solver",desc:"WordBlitz self playing bot",text:"When I saw my parents play a little scrabble like mobile game, I had the idea of making a bot which plays the game by itself using the scrabble dictionnary (which i had to store in a specific made data structure for lookup performance). Using tesseract to get the board letters into python and using DFS to find the possible words. PYautoGUI was also used to fake mouse inputs and let python play the game on an Android emulator (NOX). This project taught me python oop, aswell as OCR and pyautogui + it was the early introduction to data structures and algorithmic optimisation for me.",date:"2021 january",skills:["python","tesseract"]},{image:"blitzsolver.jpg",name:"Voxel Game engine",desc:"A 3d voxel game engine made in WindowsForms .NET",text:"In class we were taught how to draw lines, points and circles in a windows forms .NET application. I had the idea of making a game loop using the Invalidate() method, which allowed me to then make a rendering engine using matrix maths. This turned into a mincraft clone. This project mostly made me more comfortable about using matrices and Trigonometry.",date:"2022 march - ?",skills:[".NET","c#","WindowsForms"]},{image:"stairsio.jpg",name:"Stairs.io",desc:"A simple flappy bird like mobile game",text:"Stairs.io is my first mobile game, I created it for education purposes and learned c# while making it aswell as Unity.",date:"2020",skills:["Unity","c#"]},{image:"exotic_cafe.png",name:"Exotic Caf\xE9",desc:"A discord for Hypixel Skyblock exotic armor collectors",text:"Exotic Caf\xE9 is the discord community I created for the game Hypixel Skyblock, it's a community for collectors of some special ingame items. I learned community moderation and management aswell as adobe illustrator while making the different logos. The discord was created with my coop Vincent and two other friends (Rias_dono and Axore). I'm extremely grateful for the amazing moderation team and the admins <3.",date:"2020-2022",skills:["Adobe Illustrator","Communication"]}];return(i,n)=>(r(),l("div",ie,[t("div",re,[le,t("div",ce,[(r(!0),l(x,null,b(u(o),e=>(r(),w(ne,{key:e.date,name:e.name,desc:e.desc,text:e.text,date:e.date,image:e.image,skills:e.skills,class:"my-10 md:w-1/2"},null,8,["name","desc","text","date","image","skills"]))),128))])])]))}};var v=(s,o)=>{const i=s.__vccOpts||s;for(const[n,e]of o)i[n]=e;return i};const y=s=>(L("data-v-3b833dfd"),s=s(),N(),s),de={class:"flex flex-col md:flex-row justify-start md:justify-between items-center w-full md:min-h-screen"},me={class:"flex justify-start items-center md:basis-1/2 w-full"},ue={class:"flex font-sans flex-col p-5 dark:text-mandy-50 text-gray-700"},pe=y(()=>t("span",{class:"text-2xl md:text-9xl md:pb-5 font-bold transition-all delay-75 ease-in-out"},[p("Hi,"),t("br",{class:"hidden md:block"}),p(" I'm "),t("span",{class:"text-mandy-700 font-bold"},"L\xE9o"),p(".")],-1)),he=y(()=>t("span",{class:"text:lg md:text-6xl no-underline font-thin"},"backend developper",-1)),fe=y(()=>t("img",{class:"hidden md:block basis-1/2 w-96",src:Z,alt:""},null,-1)),_e={setup(s){return(o,i)=>{const n=g("content");return r(),w(n,{class:"flex flex-col justify-start md:justify-between md:p-10 space-y-20 md:space-y-60 pt-0 items-center"},{default:m(()=>[t("div",de,[t("div",me,[t("h1",ue,[c(T,{"enter-active-class":"opacity-100","enter-from":"opacity-0"},{default:m(()=>[pe]),_:1}),he])]),fe]),c(k)]),_:1})}}};var ye=v(_e,[["__scopeId","data-v-3b833dfd"]]);const ge={},xe={class:"about bg-neutral-100"},be=t("h1",null,"This is an about page",-1),we=[be];function ke(s,o){return r(),l("div",xe,we)}var ve=v(ge,[["render",ke]]);const $e=A({history:R("/"),routes:[{path:"/",name:"Home",component:ye},{path:"/works",name:"Works",component:k},{path:"/contact",name:"contact",component:ve}]});const $=C(Q);$.use($e);$.mount("#app");
