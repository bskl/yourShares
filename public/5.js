(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(t,e,r){"use strict";var n=r(27);r.n(n).a},124:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,"\ntable.v-data-table thead tr:last-child th[data-v-512a5ce2] {\n  font-size: 0.9rem !important;\n}\n",""])},125:function(t,e,r){"use strict";r.r(e);var n=r(1),i=r(7),o=r(2),s=r(3),a=r(5),l=r(16),c=r(17),u=r(18),d=r(19),f=r(6);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b={name:"AddShareModal",mixins:[a.a,s.a],components:{Modal:l.a,ModalHeading:c.a,ModalBody:u.a,ModalFooter:d.a,FormErrors:f.a},data:function(){return{waitFor:"store_share",searching:!1,valid:!0,search:null,symbols:[],form:{symbol_id:0,portfolio_id:0}}},computed:h({},Object(n.d)(["showModal"])),watch:{search:function(t){var e=this;null==t||this.symbols.length>0||this.isLoading||(this.searching=!0,this.fetchSymbols().then((function(t){e.symbols=t.data,e.searching=!1})))}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.close()}))},methods:h({},Object(n.b)(["fetchSymbols","storeShare","setShowModal"]),{open:function(t){this.form.portfolio_id=t,this.setShowModal(!0)},close:function(){this.searching=!1,this.clearErrors(),this.$refs.form.reset(),this.setShowModal(!1)},submit:function(){var t=this;this.$refs.form.validate()?(this.startLoading(),this.storeShare(this.form).then((function(e){Object(o.b)(e),t.close()})).catch((function(e){t.syncErrors(e)})).finally((function(){t.stopLoading()}))):this.focusFirstErrorInput()}})},p=r(0),g=Object(p.a)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal",{attrs:{width:460,dialog:t.showModal}},[r("modal-heading",[r("v-toolbar-title",[t._v(t._s(t.$t("Add Symbol")))])],1),t._v(" "),r("modal-body",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},keydown:function(e){return t.clearError(e.target.name)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("form-errors",{attrs:{errors:t.errors}}),t._v(" "),r("v-autocomplete",{ref:"symbol_id",attrs:{name:"symbol_id",id:"symbol_id",outlined:"",clearable:"",items:t.symbols,loading:t.searching,"search-input":t.search,rules:[t.rules.required],label:t.$t("Search Symbol"),"no-data-text":t.$t("No data available"),"error-messages":t.getError("symbol_id"),disabled:t.isLoading,"item-text":"code","item-value":"id"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.form.symbol_id,callback:function(e){t.$set(t.form,"symbol_id",e)},expression:"form.symbol_id"}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("modal-footer",[r("v-spacer"),t._v(" "),r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{indeterminate:""}}),t._v(" "),r("v-btn",{staticClass:"btn-close",attrs:{disabled:t.isLoading},on:{click:t.close}},[t._v("\n      "+t._s(t.$t("Close"))+"\n    ")]),t._v(" "),r("v-btn",{staticClass:"btn-action",attrs:{disabled:t.isLoading},on:{click:t.submit}},[t._v("\n      "+t._s(t.$t("Create"))+"\n    ")])],1)],1)}),[],!1,null,null,null).exports,_=r(28);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w={name:"Home",mixins:[s.a],components:{AddShareModal:g,ItemDetail:_.a},data:function(){return{waitFor:"fetch_symbols_data",itemDetails:i.b}},computed:O({},Object(n.d)(["portfolios"]),{},Object(n.c)(["portfoliosCount","getPortfolioByIndex","isAdmin"])),methods:O({},Object(n.b)(["fetchSymbolsData","setSnackbar"]),{getColor:function(t){return-1==t?"red lighten-1":1==t?"green lighten-1":""},getTextColor:function(t){return-1==t?"red--text":1==t?"green--text":"grey--text"},getSymbolsData:function(){var t=this;this.startLoading(),this.fetchSymbolsData().then((function(t){Object(o.b)(t)})).catch((function(t){Object(o.a)(t)})).finally((function(){t.stopLoading()}))}}),created:function(){for(var t=0,e=this.portfoliosCount;t<e;++t){var r=this.getPortfolioByIndex(t);if(null==r.commission){this.setSnackbar({color:"error",msg:this.$t("Your portfolio commission rate has not been recorded.")}),this.$router.push({name:"EditPortfolio",params:{id:r.id}});break}}}},j=(r(123),Object(p.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isInLoading("fetch_data")?t._e():r("v-row",{attrs:{align:"center",justify:"center"}},[r("add-share-modal",{ref:"addShareModal"}),t._v(" "),t._l(t.portfolios,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"8",md:"4",lg:"10"}},[r("v-card",[r("v-toolbar",{staticClass:"pl-2",attrs:{flat:""}},[r("v-btn",{attrs:{icon:"",disabled:""}},[r("v-icon",[t._v("home")])],1),t._v(" "),r("v-toolbar-title",{staticClass:"pl-2"},[t._v(t._s(e.name))]),t._v(" "),r("v-spacer"),t._v(" "),t.isAdmin?r("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:"",disabled:t.isLoading},on:{click:function(e){return t.getSymbolsData()}}},[r("v-icon",[t._v("refresh")])],1):t._e(),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[r("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",small:"",disabled:t.isLoading,to:"/portfolios/"+e.id+"/edit"}},i),[r("v-icon",{attrs:{color:"green darken-2"}},[t._v("edit")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("Update Portfolio")))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[r("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",small:"",disabled:t.isLoading},on:{click:function(r){return t.$refs.addShareModal.open(e.id)}}},i),[r("v-icon",{attrs:{color:"blue darken-2"}},[t._v("add")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("Add Symbol")))])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-data-table",{attrs:{"item-key":"id","disable-sort":"","mobile-breakpoint":0,items:e.shares,"hide-default-footer":e.shares.length<11,"no-data-text":t.$t("You have not created any symbol."),headers:[{text:t.$t("Symbol"),value:"code",align:"start"},{text:t.$t("Last Price"),value:"last_price",align:"center"},{text:t.$t("Change"),value:"rate_of_change",align:"center"},{text:t.$t("Lots"),value:"lot",align:"center"},{text:t.$t("Average Cost"),value:"average",align:"center"},{text:t.$t("Amount"),value:"amount",align:"center"},{text:t.$t("Average Amount"),value:"average_amount",align:"center"},{text:t.$t("Gain/Loss"),value:"gain",align:"center"}]},scopedSlots:t._u([{key:"item.code",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex align-center justify-start"},[r("v-col",{staticClass:"px-0 text-left font-weight-bold",attrs:{cols:"auto"}},[t._v("\n                "+t._s(n.symbol.code)+"\n              ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto pr-0"}},[r("v-btn",{attrs:{text:"",block:"",small:"",to:"/shares/"+n.id+"/transactions",disabled:t.isLoading}},[r("v-icon",{attrs:{small:""}},[t._v("horizontal_split")])],1)],1)],1)]}},{key:"item.last_price",fn:function(e){var n=e.item;return[r("div",{staticClass:"text--darken-1 text-right",class:t.getTextColor(n.symbol.trend)},[t._v("\n              "+t._s(n.symbol.last_price)+"\n            ")])]}},{key:"item.rate_of_change",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{label:"",small:"",color:t.getColor(n.symbol.trend)}},[t._v("\n              "+t._s(n.symbol.rate_of_change)+"\n            ")])]}},{key:"item.lot",fn:function(e){var n=e.item;return[r("div",{staticClass:"text-right"},[t._v("\n              "+t._s(n.lot)+"\n            ")])]}},{key:"item.average",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex align-center justify-center"},[r("v-col",{staticClass:"pr-0 text-right",attrs:{cols:"auto"}},[t._v("\n                "+t._s(n.average)+"\n              ")]),t._v(" "),r("v-col",{staticClass:"text-right overline font-weight-thin",attrs:{cols:"auto"}},[t._v("\n                ("+t._s(n.average_with_dividend)+")\n              ")])],1)]}},{key:"item.amount",fn:function(e){var n=e.item;return[r("div",{staticClass:"text-right"},[t._v("\n              "+t._s(n.amount)+"\n            ")])]}},{key:"item.average_amount",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex align-center justify-center"},[r("v-col",{staticClass:"pr-0 text-right",attrs:{cols:"auto"}},[t._v("\n                "+t._s(n.average_amount)+"\n              ")]),t._v(" "),r("v-col",{staticClass:"text-right overline font-weight-thin",attrs:{cols:"auto"}},[t._v("\n                ("+t._s(n.average_amount_with_dividend)+")\n              ")])],1)]}},{key:"item.gain",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex align-center justify-center"},[r("v-col",{staticClass:"pr-0 text-right",class:t.getTextColor(n.gain_trend),attrs:{cols:"auto"}},[t._v("\n                "+t._s(n.gain)+"\n              ")]),t._v(" "),r("v-col",{staticClass:"text-right overline font-weight-thin",class:t.getTextColor(n.gain_with_dividend_trend),attrs:{cols:"auto"}},[t._v("\n                ("+t._s(n.gain_with_dividend)+")\n              ")])],1)]}}],null,!0)}),t._v(" "),r("div",{staticClass:"ma-4"},[r("v-icon",{attrs:{"x-small":"",dense:""}},[t._v("access_time")]),t._v(" "),r("span",{staticClass:"mx-1 caption font-weight-thin"},[t._v("SG: "+t._s(t.portfolios[0].shares[0].symbol.session_time))])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",{staticStyle:{"background-color":"#323639"}},[r("v-flex",{staticClass:"px-2"},[r("v-list",{attrs:{dense:"",color:"#323639"}},[t._l(t.itemDetails,(function(n,i){return[r("item-detail",{key:n.key,attrs:{item:n,value:e[n.key],baseLink:"portfolios/"+e.id}}),t._v(" "),i+1<t.itemDetails.length?r("v-divider",{key:i}):t._e()]}))],2)],1)],1)],1)],1)}))],2)}),[],!1,null,"512a5ce2",null));e.default=j.exports},16:function(t,e,r){"use strict";var n={props:["dialog","width"],data:function(){return{dialogWidth:"".concat(this.width,"px")}}},i=r(0),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"","max-width":t.dialogWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=o.exports},17:function(t,e,r){"use strict";var n=r(0),i=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-toolbar",{staticClass:"pl-2",attrs:{flat:""}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},18:function(t,e,r){"use strict";var n=r(0),i=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-card-text",[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},19:function(t,e,r){"use strict";var n=r(0),i=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-card-actions",{staticClass:"pa-4"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},27:function(t,e,r){var n=r(124);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(53)(n,i);n.locals&&(t.exports=n.locals)},28:function(t,e,r){"use strict";var n={props:{item:{type:Object,required:!0},value:{type:[String,Number],required:!1,default:0},baseLink:{type:String,required:!1,default:null}},name:"ItemDetail",computed:{itemLink:function(){return this.item.link?"/".concat(this.baseLink,"/").concat(this.item.link):void 0},disabled:function(){return void 0===this.itemLink}}},i=r(0),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{attrs:{dense:"",disabled:t.disabled,to:t.itemLink}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(t.$t(t.item.key+".title"))}}),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.$t(t.item.key+".description"))}})],1),t._v(" "),r("v-list-item-action",{staticClass:"body-2 font-weight-medium",domProps:{textContent:t._s(t.value)}})],1)}),[],!1,null,null,null);e.a=o.exports},3:function(t,e,r){"use strict";var n=r(1);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={data:function(){return{waitFor:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)(["isInLoading"]),{isLoading:function(){return this.isInLoading(this.waitFor)}}),methods:{startLoading:function(){this.$store.dispatch("startLoadingBy",this.waitFor)},stopLoading:function(){this.$store.dispatch("stopLoadingBy",this.waitFor)}}}},5:function(t,e,r){"use strict";var n=r(40),i=r.n(n);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.a={data:function(){var t=this;return{errors:{},rules:{required:function(e){return!!e||0===e||t.$t("rules.required")},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||t.$t("rules.email")},confirmed:function(e){return function(r){return e==r||t.$t("rules.confirmed")}},gte:function(e){return function(r){return r&&r.length>=e||t.$t("rules.gte",{length:e})}}}}},methods:{syncErrors:function(t){var e=this;if(void 0!==t)if(void 0!==t.response&&t.hasOwnProperty("response")&&t.response.hasOwnProperty("data")){if(t.response.data.hasOwnProperty("errors")){this.errors=Object.assign({},t.response.data.errors);for(var r=0,n=Object.entries(this.errors);r<n.length;r++){var i=n[r];void 0!==this.$refs[i]&&(this.$refs[i].valid=!1)}setTimeout((function(){e.focusFirstErrorInput()}),500)}}else console.log(t)},clearErrors:function(){this.errors={}},clearError:function(t){this.hasErrors(t)&&(i()(this.errors,t),this.errors=Object.assign({},this.errors,this.errors),this.$refs[t].valid=!0)},focusFirstErrorInput:function(){for(var t=0,e=Object.entries(this.form);t<e.length;t++){var r=o(e[t],2),n=r[0];r[1];if(!this.$refs[n].valid){this.$refs[n].focus();break}}},hasErrors:function(t){return this.errors.hasOwnProperty(t)},getError:function(t){return this.hasErrors(t)?this.errors[t][0]:null},getErrors:function(t){return this.hasErrors(t)?this.errors[t]:null}}}},6:function(t,e,r){"use strict";var n=r(43),i=r.n(n),o={props:{errors:{type:Object}},name:"FormErrors",data:function(){return{any:null}},watch:{errors:function(t,e){this.any=!i()(t)}}},s=r(0),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{attrs:{text:"",dismissible:"",type:"error",border:"left",value:t.any}},t._l(t.errors,(function(e){return r("dl",{key:e.id},t._l(e,(function(e){return r("dd",{key:e.id},[t._v(t._s(e))])})),0)})),0)}),[],!1,null,null,null);e.a=a.exports}}]);