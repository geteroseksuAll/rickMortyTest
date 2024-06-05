(function(){"use strict";var t={6144:function(t,e,s){var r=s(5130),a=s(6768);function n(t,e,s,r,n,i){const o=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(o)}var i={name:"App",components:{}},o=s(1241);const c=(0,o.A)(i,[["render",n]]);var l=c,u=s(3367),d=s(1387);const h={class:"flex w-full items-center justify-center bg-black_main p-10"};function f(t,e,s,r,n,i){const o=(0,a.g2)("CurrentPage");return(0,a.uX)(),(0,a.CE)("div",h,[(0,a.bF)(o)])}var p=s(4232);const m={class:"flex w-11/12 justify-center flex-col items-center text-3xl text-white"},g={class:"flex justify-between w-10/12 p-10 text-2xl text-white"},x={class:"flex w-1/2 justify-between items-center text-black text-xl"},v=(0,a.Lk)("option",null,"dead",-1),k=(0,a.Lk)("option",null,"alive",-1),L=(0,a.Lk)("option",null,"unknown",-1),y=[v,k,L],w={class:"flex flex-wrap justify-between w-10/12"},b={class:"imgFlex w-full"},C=["src"],O={class:"infoFlex flex flex-col p-3"},_={class:"flex-1 flex flex-col"},j={class:"text-xl font-medium text-white"},E={class:"text-xs font-medium flex items-center text-white"},S={class:""},M={class:"flex flex-1"},P={class:"text-xs text_gray"},D={class:"text-16px text-white font-medium"},I={class:"flex flex-1"},A={class:"text-xs text_gray"},$={class:"text-16px text-white font-medium"};function F(t,e,s,n,i,o){return(0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("div",g,[(0,a.Lk)("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=e=>o.getCharactersList(t.page-1))}," Стрелочка влево "),(0,a.Lk)("div",x,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.characterName=e),placeholder:"Введите имя",class:"p-4 w-52 rounded-2xl h-12"},null,512),[[r.Jo,t.characterName]]),(0,a.bo)((0,a.Lk)("select",{name:"status","onUpdate:modelValue":e[2]||(e[2]=e=>t.characterStatus=e),class:"p-3 rounded-xl"},y,512),[[r.u1,t.characterStatus]]),(0,a.Lk)("button",{type:"button",onClick:e[3]||(e[3]=t=>o.getCharactersList()),class:"bg-black_card text-white p-3 rounded-xl"}," Применить ")]),(0,a.Lk)("div",{class:"cursor-pointer",onClick:e[4]||(e[4]=e=>o.getCharactersList(t.page+1))}," Стрелочка вправо ")]),(0,a.Lk)("div",w,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.listOfCharacters,(t=>((0,a.uX)(),(0,a.CE)("div",{class:"flex justify-between cardProperties rounded-lg my-3 mx-4 bg-black_card overflow-hidden w-[45%]",key:t.id},[(0,a.Lk)("div",b,[(0,a.Lk)("img",{src:t.image,class:"w-full h-full object-cover"},null,8,C)]),(0,a.Lk)("div",O,[(0,a.Lk)("div",_,[(0,a.Lk)("h2",j,(0,p.v_)(t.name),1),(0,a.Lk)("h2",E,[(0,a.Lk)("span",{class:(0,p.C4)([{red:"Dead"==t.status,green:"Alive"==t.status,gray:"unknown"==t.status},"rounded-full h-2 w-2 mr-1 text-xl font-medium block"])},null,2),(0,a.Lk)("div",S,(0,p.v_)(t.status)+" - "+(0,p.v_)(t.species),1)])]),(0,a.Lk)("div",M,[(0,a.Lk)("div",P,[(0,a.eW)(" Last known location: "),(0,a.Lk)("p",D,(0,p.v_)(t.location.name),1)])]),(0,a.Lk)("div",I,[(0,a.Lk)("div",A,[(0,a.eW)(" First seen in: "),(0,a.Lk)("p",$,(0,p.v_)(o.checkEpisodes(t.episode[0])),1)])])])])))),128))])])}s(4114);var N=s(4373);const X="https://rickandmortyapi.com/api",T=(0,u.nY)("rickMorty",{state:()=>({charactersListData:{},episodesListData:[],idsList:[]}),getters:{charactersList:t=>t.charactersListData,episodesList:t=>t.episodesListData,listOfIds:t=>t.idsList},actions:{getId(t){let e=t.split("/"),s=e[e.length-1];return s},async getCharactersList(t,e,s){let r={page:t,status:e,name:s};const a=await N.A.get(`${X}/character/`,{params:r});let n=a.data.results;return n.forEach((t=>{let e=this.getId(t.episode[0]);this.idsList.includes(e)||this.idsList.push(e)})),this.$state.charactersListData=a.data,this.getCurrentEpisode(this.idsList),a},async getCurrentEpisode(t){let e=[];if(t.forEach((t=>{this.episodesListData.some((e=>this.getId(e.url)==t))||e.push(t)})),e.length){const t=await N.A.get(`${X}/episode/${e.join(",")}`);return console.log(t.data.length),1==e.length?this.episodesListData.push({name:t.data.name,url:t.data.url}):t.data.forEach((t=>{this.episodesListData.push({name:t.name,url:t.url})})),t}}}});var q={name:"CurrentPage",data:()=>({rickMortyStore:T(),notInList:[],characterName:"",characterStatus:"",page:null,status:null,name:null}),methods:{getId(t){let e=t.split("/"),s=e[e.length-1];return s},initParams(){const{page:t,status:e,name:s}=this.$route.query;this.page=+t||1,this.status=e,this.name=s},checkEpisodes(t){const e=this.rickMortyStore.$state.episodesListData,s=e.find((e=>e.url==t));return s?.name},getCharactersList(t){t<1||(this.$router.push({path:"/",query:{page:t,status:this.characterStatus,name:this.characterName}}),this.rickMortyStore.getCharactersList(t,this.characterStatus,this.characterName))}},computed:{listOfCharacters(){return this.rickMortyStore.charactersList.results},listOfEpisodes(){return this.rickMortyStore.episodesList},listOfIds(){return this.rickMortyStore.listOfIds}},mounted(){this.initParams(),this.getCharactersList(this.page)},watch:{"$route.query"(){this.initParams()}}};const W=(0,o.A)(q,[["render",F]]);var U=W,V={name:"MainPage",components:{CurrentPage:U}};const J=(0,o.A)(V,[["render",f]]);var K=J;const R=[{path:"/",name:"MainPage",component:K}],Y=(0,d.aE)({history:(0,d.LA)("/Rick-Morty-test/"),routes:R});var z=Y;const B=(0,r.Ef)(l),G=(0,u.Ey)();B.use(G).use(z).mount("#app")}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,n){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(o=!1,n<i&&(i=n));if(o){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,n,i=r[0],o=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var u=c(s)}for(e&&e(r);l<i.length;l++)n=i[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},r=self["webpackChunkrick_morty_test"]=self["webpackChunkrick_morty_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(6144)}));r=s.O(r)})();
//# sourceMappingURL=app.f2ef05ae.js.map