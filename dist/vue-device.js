module.exports=function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}({10:function(e,t,i){"use strict";function n(e){i(11)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(13),h=i.n(a),s=i(42),o=i(12),r=n,d=o(h.a,s.a,!1,r,"data-v-6be5bb4f","90a73928");t.default=d.exports},11:function(e,t){},12:function(e,t){e.exports=function(e,t,i,n,a,h){var s,o=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(s=e,o=e.default);var d="function"==typeof o?o.options:o;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),a&&(d._scopeId=a);var c;if(h?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(h)},d._ssrRegister=c):n&&(c=n),c){var u=d.functional,l=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:o,options:d}}},13:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"device",props:{type:{type:String,default:"iPhone8"},landscape:{type:Boolean,default:!1},border:{type:Boolean,default:!1},background:{type:String,default:"white"},picker:{type:Boolean,default:!1},autoscale:{type:Boolean,default:!1}},data:function(){return{devices:i(45),chosen:"iPhone8",chosenLandscape:!1,height:0,width:0,scalingWidth:!1}},methods:{flip:function(){this.chosenLandscape=!this.chosenLandscape},setSize:function(){this.height=window.innerHeight,this.width=window.innerWidth}},computed:{device:function(){var e=this.devices[this.chosen],t={};return this.chosenLandscape?(t.width=e.height,t.height=e.width):t=e,t},style:function(){var e=80/(this.scalingWidth?this.device.width:this.device.height);return{width:this.device.width+"px",height:this.device.height+"px",zoom:this.zoom<1?this.zoom-e:1}},bgStyle:function(){return{background:this.background}},zoom:function(){if(!this.autoscale)return 1;var e=Math.min(this.height/this.device.height,1),t=Math.min(this.width/this.device.width,1),i=Math.min(e,t);return this.scalingWidth=t===i,Math.min(i,1)}},watch:{type:function(e){this.chosen=e,this.setSize()},landscape:function(e){this.chosenLandscape=e,this.setSize()},chosen:function(){this.setSize()}},mounted:function(){this.chosen=this.type,this.chosenLandscape=this.landscape,window.onresize=this.setSize,this.setSize()},destroy:function(){}}},42:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{style:e.bgStyle,attrs:{id:"device"}},[e._ssrNode((e.picker?'<div class="picker" data-v-6be5bb4f><select data-v-6be5bb4f>'+e._ssrList(e.devices,function(t,i){return"<option"+e._ssrAttr("value",i)+" data-v-6be5bb4f>"+e._ssrEscape(e._s(t.name))+"</option>"})+'</select> <span class="dimensions" data-v-6be5bb4f>'+e._ssrEscape(e._s(e.device.width)+" ")+'<span class="by" data-v-6be5bb4f>✕</span>'+e._ssrEscape(" "+e._s(e.device.height)+" ")+'<div class="flip" data-v-6be5bb4f>⤵</div></span>'+(e.zoom<1?"<span data-v-6be5bb4f>"+e._ssrEscape("("+e._s((100*e.zoom).toFixed())+"%)")+"</span>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+" "),e._ssrNode("<div"+e._ssrClass("device",{border:e.border})+e._ssrStyle(null,e.style,null)+" data-v-6be5bb4f>","</div>",[e._t("default")],2)],2)},a=[],h={render:n,staticRenderFns:a};t.a=h},45:function(e,t){e.exports={iPhoneX:{name:"iPhone X",width:375,height:812},"iPhone8+":{name:"iPhone 6+, 6s+, 7+, 8+",width:414,height:736},iPhone8:{name:"iPhone 6, 6s, iPhone 7, iPhone 8",width:375,height:667},iPhone5:{name:"iPhone 5",width:320,height:568},iPhone4:{name:"iPhone 3, iPhone 4",width:320,height:480},iPodTouch:{name:"iPod Touch",width:320,height:568},iPadPro:{name:"iPad Pro",width:1024,height:1366},iPad:{name:"iPad 3, 4, Air, Air2",width:768,height:1024},G5:{name:"LG G5, G4, G3",width:360,height:640},OptimusG:{name:"LG Optimus G",width:384,height:640},"GalaxyS8+":{name:"Samsung Galaxy S8+, S8",width:360,height:740},GalaxyS7:{name:"Samsung Galaxy S7, S7 Edge, S6, S5, S4, S4 Mini, S3",width:360,height:640},GalaxyS3Mini:{name:"Samsung Galaxy S3 Mini, S2, S",width:320,height:533},GalaxyNexus:{name:"Samsung Galaxy Nexus",width:360,height:600},Note8:{name:"Samsung Galaxy Note 8",width:360,height:740},Note4:{name:"Samsung Galaxy Note 4, 3, 2",width:360,height:640},Note:{name:"Samsung Galaxy Note",width:400,height:640},Nexus5:{name:"Lg Nexus 5",width:360,height:640},Nexus4:{name:"Lg Nexus 4",width:384,height:640},Lumia1520:{name:"Microsoft Lumia 1520",width:432,height:768},Lumia1020:{name:"Microsoft Lumia 1020, 925, 920, 900, 830, 620",width:320,height:480},Nexus6:{name:"Motorola Nexus 6",width:412,height:690},HTCOne:{name:"HTC One, Evo 3d",width:360,height:640},HTC8x:{name:"HTC 8x",width:320,height:480},XperiaZ3:{name:"Sony Xperia Z3",width:360,height:598},XperiaZ:{name:"Sony Xperia Z, S, P",width:360,height:640},Mi4:{name:"Xiaomi Mi 4, Mi 3",width:360,height:640},K900:{name:"Lenovo K900",width:360,height:640},Vega:{name:"Pantech Vega N°6",width:360,height:640},BlackberryLeap:{name:"Blackberry Leap",width:390,height:695},BlackberryPassport:{name:"Blackberry Passport",width:504,height:504},BlackberryClassic:{name:"Blackberry Classic",width:390,height:390},BlackberryQ10:{name:"Blackberry Q10",width:346,height:346},BlackberryZ30:{name:"Blackberry Z30",width:360,height:640},BlackberryZ10:{name:"Blackberry Z10",width:384,height:640},Blackberry9800:{name:"Blackberry Torch 9800",width:360,height:480},GrandS:{name:"ZTE Grand S",width:360,height:640},ZTEOpen:{name:"ZTE Open (Firefox Os)",width:320,height:480},GalaxyTab:{name:'Samsung Galaxy Tab 3 10"',width:800,height:1280},GalaxyTab2:{name:'Samsung Galaxy Tab 2 (7")',width:600,height:1024},Nexus10:{name:"Samsung Nexus 10",width:800,height:1280},Nexus9:{name:"HTC Nexus 9",width:768,height:1024},Nexus7v2:{name:"Asus Nexus 7 (v2)",width:600,height:960},Nexus7:{name:"Asus Nexus 7 (v1)",width:604,height:966},GPad:{name:"LG G Pad 8.3",width:600,height:960},FireHD:{name:"Amazon Kindle Fire HD 8.9",width:800,height:1280},FireHD7:{name:"Amazon Kindle Fire HD 7",width:480,height:800},Fire:{name:"Amazon Kindle Fire",width:600,height:1024},SurfacePro3:{name:"Microsoft Surface Pro 3",width:1024,height:1440},SurfacePro:{name:"Microsoft Surface Pro, Pro 2",width:720,height:1280},Surface:{name:"Microsoft Surface",width:768,height:1366},Playbook:{name:"Blackberry Playbook",width:600,height:1024}}},9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(10),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={Device:a.default,install:function(e){e.component(a.default.name,a.default)}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(Device)}});