webpackJsonp([0],{Kzru:function(t,e){},QnNH:function(t,e,a){t.exports=a.p+"static/img/bgimg.66791b4.png"},zD52:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Sharepage",data:function(){return{note:{backgroundImage:"url("+a("QnNH")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},inputWidth:{width:window.screen.width-76+"px"},params:{phone:"",password:"",userId:""}}},methods:{downkyt:function(){window.location.href="http://app.kuayet.com/down/"},startOpen:function(){/^[1][3,4,5,7,8][0-9]{9}$/.test(this.params.phone)?this.params.password.length<6?this.$toast("请输入正确密码"):this.$api.shareRegister(this.params).then(function(t){setTimeout(function(t){window.location.href="http://app.kuayet.com/down/"},1e3)}):this.$toast("请输入正确的手机号")}},mounted:function(){for(var t=[],e=this.$geturl.getL(),a=0;a<e.length;a++)t.push(e[a].split("=")[1]);this.params.userId=t[0]}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagesbg",style:t.note},[a("div",{staticClass:"mod1"},[a("div",{staticStyle:{height:"auto",position:"fixed",bottom:"0px"},style:t.inputWidth},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.params.phone,expression:"params.phone"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.params.phone},on:{input:function(e){e.target.composing||t.$set(t.params,"phone",e.target.value)}}})]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.params.password,expression:"params.password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.params.password},on:{input:function(e){e.target.composing||t.$set(t.params,"password",e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"0"}},[a("button",{staticStyle:{float:"left"},attrs:{type:"button"},on:{click:function(e){t.downkyt()}}},[t._v("直接下载")]),t._v(" "),a("button",{staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.startOpen()}}},[t._v("立即注册")])])])])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("Kzru")},"data-v-95c19dde",null);e.default=s.exports}});
//# sourceMappingURL=0.59128fc48c37fb7650a6.js.map