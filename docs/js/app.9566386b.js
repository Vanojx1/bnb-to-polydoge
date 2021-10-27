(function(t){function e(e){for(var r,c,s=e[0],p=e[1],i=e[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var p=n[c];0!==a[p]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5b10d0e2"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(t);var i=new Error;o=function(e){p.onerror=p.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:p})}),12e4);p.onerror=p.onload=o,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/metamask-network-helper/",s.oe=function(t){throw console.error(t),t};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"364f":function(t,e,n){"use strict";n("bc07")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v("From BNB to Polydoge step by step guide")]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},o=[],c={name:"App",data:function(){return{}}},s=c,p=n("2877"),i=n("6544"),l=n.n(i),u=n("7496"),d=n("40dc"),v=n("f6c4"),f=n("2fa4"),m=n("2a7f"),h=Object(p["a"])(s,a,o,!1,null,null,null),b=h.exports;l()(h,{VApp:u["a"],VAppBar:d["a"],VMain:v["a"],VSpacer:f["a"],VToolbarTitle:m["a"]});n("d3b7"),n("3ca3"),n("ddb0");var y=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-stepper",{attrs:{vertical:""},model:{value:t.polydogeStepper,callback:function(e){t.polydogeStepper=e},expression:"polydogeStepper"}},[n("v-stepper-step",{attrs:{complete:t.polydogeStepper>1,step:"1"}},[t._v(" We need BSC network ")]),n("v-stepper-content",{attrs:{step:"1"}},[n("v-btn",{staticClass:"ma-2",attrs:{loading:!!t.loadingStatus.BSC,disabled:!!t.loadingStatus.BSC,color:"secondary"},on:{click:t.addBsc}},[t._v(" Add BSC to Metamask ")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")])],1),n("v-stepper-step",{attrs:{complete:t.polydogeStepper>2,step:"2"}},[t._v(" Send BNB to your Metamask wallet ")]),n("v-stepper-content",{attrs:{step:"2"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:t.back}},[t._v(" Back ")])],1),n("v-stepper-step",{attrs:{complete:t.polydogeStepper>3,step:"3"}},[t._v(" Swap BNB for ELK ")]),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"860px"}},[n("iframe",{attrs:{width:"100%",height:"100%",seamless:"",src:"https://app.elk.finance/#/swap?inputCurrency=BNB&outputCurrency=ELK"}})]),n("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:t.back}},[t._v(" Cancel ")])],1),n("v-stepper-step",{attrs:{complete:t.polydogeStepper>4,step:"4"}},[t._v(" Move ELK to Polygon network ")]),n("v-stepper-content",{attrs:{step:"4"}},[n("p",[t._v("Select "),n("b",[t._v("Polygon")]),t._v(" as target chain")]),n("p",[t._v('Select "Swap $ELK 1 for gas" if you don\'t have any MATIC on Polygon')]),n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"1100px"}},[n("iframe",{attrs:{width:"100%",height:"100%",seamless:"",src:"https://app.elk.finance/#/elknet"}})]),n("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:t.back}},[t._v(" Cancel ")])],1),n("v-stepper-step",{attrs:{step:"5"}},[t._v(" Switch to Polygon network ")]),n("v-stepper-content",{attrs:{step:"5"}},[n("v-btn",{staticClass:"ma-2",attrs:{loading:!!t.loadingStatus.MATIC,disabled:!!t.loadingStatus.MATIC,color:"secondary"},on:{click:t.addPolygon}},[t._v(" Add Polygon to Metamask ")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:t.back}},[t._v(" Cancel ")])],1),n("v-stepper-step",{attrs:{step:"6"}},[t._v(" Finally we can buy Polydoge ")]),n("v-stepper-content",{attrs:{step:"6"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"860px"}},[n("iframe",{attrs:{width:"100%",height:"100%",seamless:"",src:"https://app.elk.finance/#/swap?inputCurrency=ELK&outputCurrency=0x8A953CfE442c5E8855cc6c61b1293FA648BAE472"}})]),n("v-btn",{attrs:{text:""},on:{click:t.back}},[t._v(" Cancel ")])],1)],1)],1)},k=[],w=n("1da1"),C=(n("96cf"),n("b0c0"),{name:"Home",data:function(){return{polydogeStepper:1,loadingStatus:{}}},methods:{next:function(){this.polydogeStepper+=1},back:function(){this.polydogeStepper-=1},addPolygon:function(){var t={chainId:"0x89",chainName:"Matic Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.maticvigil.com/","https://rpc-mainnet.matic.network/","https://rpc-mainnet.maticvigil.com/"],blockExplorerUrls:["https://explorer.matic.network/"]};this.addNetwork(t)},addBsc:function(){var t={chainId:"0x38",chainName:"Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/","https://bsc-dataseed1.defibit.io/","https://bsc-dataseed1.ninicoin.io/"],blockExplorerUrls:["https://bscscan.com/"]};this.addNetwork(t)},addNetwork:function(t){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("==>",t),e.loadingStatus[t.nativeCurrency.name]=!0,n.next=4,window.ethereum.request({method:"wallet_addEthereumChain",params:[t]});case 4:r=n.sent,console.log(r),e.loadingStatus[t.nativeCurrency.name]=!1;case 7:case"end":return n.stop()}}),n)})))()}}}),S=C,_=(n("364f"),n("8336")),x=n("b0af"),B=n("a523"),P=n("7e85"),E=n("e516"),M=n("56a4"),A=Object(p["a"])(S,g,k,!1,null,"2c2e76c5",null),j=A.exports;l()(A,{VBtn:_["a"],VCard:x["a"],VContainer:B["a"],VStepper:P["a"],VStepperContent:E["a"],VStepperStep:M["a"]}),r["a"].use(y["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],T=new y["a"]({mode:"history",base:"/metamask-network-helper/",routes:O}),N=T,V=n("f309");r["a"].use(V["a"]);var I=new V["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:N,vuetify:I,render:function(t){return t(b)}}).$mount("#app")},bc07:function(t,e,n){}});
//# sourceMappingURL=app.9566386b.js.map