<template>
  <div class="paybill">
    <van-nav-bar
      fixed
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="form" style="margin-top: 2rem;">
      <form action="" style="">
        <div style="height: auto;width: 100%;">
            <div class="input">
              <label>订单金额(元)</label>
              <input type="text" placeholder="请询问服务员后输入" v-model="moneyVal" ref="moneyVal">
            </div>
            <div class="input" style="border-bottom: none;">
              <label>抵扣类别(元)</label>
              <input type="text" placeholder="请选择" v-model="value" disabled="true" ref="disconVal" style="background: white">
            </div>
            <ul class="chosesize" style="background: white" v-if="disconarr.length!=0">
              <li v-for="item in disconarr"><span :class="params.deductionId == item.id ? 'activechose':''" @click="chosesize(item.id,'满'+item.requireValue+'抵'+item.value+'元',item.value)">满{{item.requireValue}}抵{{item.value}}元</span></li>
            </ul>
            <p v-if="disconarr.length==0" style="color: red;margin-top: 20px;">此店暂无可选优惠券~~~~~~~~~~</p>
        </div>
        <button type="button" @click="openMessage">立即抵扣买单</button>
      </form>
    </div>

    <!--<div>-->
      <!--<div class="form">-->
        <!--<form action="">-->
          <!--<div class="input">-->
            <!--<label>订单金额(元)</label>-->
            <!--<input type="text" placeholder="请询问服务员后输入">-->
          <!--</div>-->
          <!--<div class="input" style="border-bottom: none!important;">-->
            <!--<label>抵扣类别(元)</label>-->
            <!--<input type="text" v-model="value" placeholder="请选择" disabled="true" style="background: white">-->
            <!--<ul class="chosesize">-->
              <!--<li><span :class="id == 0 ? 'activechose':''" @click="chosesize(0,'11111')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 1 ? 'activechose':''" @click="chosesize(1,'22222')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 2 ? 'activechose':''" @click="chosesize(2,'33333')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 3 ? 'activechose':''" @click="chosesize(3,'4444444')">满100抵10元</span></li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--<button type="button" @click="openMessage">立即抵扣买单</button>-->
        <!--</form>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    import { Dialog } from 'vant'
    import {Toast} from 'vant'
    import storage from '../util/storage.js'
    export default {
        name: "Paybill",
      data(){
          return{
            id:-1,
            value:'',
            prize:3000,
            disconarr:'',
            title:'',
            discon:'',
            moneyVal:'',
            params:{
              deductionId:'',
              userId:this.$route.query.userId
            }
          }
      },
      methods:{
          chosesize(id,val,discon){
            this.params.deductionId = id;
            this.value = val;
            this.params.money = val;
            this.discon = discon
          },
        openMessage(){
           var regnum = /^[0-9]*$/;
           // alert(this.$refs.moneyVal.value)
            var _this = this;
            if(this.$refs.moneyVal.value!=''&&regnum.test(this.$refs.moneyVal.value)&&this.$refs.disconVal.value!=''){
              Dialog.confirm({
                title: '提示',
                message: '此操作不可撤销，请确认使用跨业通余额'+this.discon+'元抵扣买单'
              }).then(() => {
                _this.params.money = this.moneyVal;
                _this.paydicon(_this.params);
              }).catch(() => {
               return
              });
            }else {
              Toast('请输入正确信息')
              return;
            }
        },
        paydicon(params){
            var _this = this;
          this.$api.payDicon(params).then(function (res) {
              // alert(res.data.code);
              _this.$router.push({
                path:'/paySuccess',
                query:{
                  prize:res.money
                }
              })
          })
        },
        onClickLeft(){
            // alert(this.$route.query.sum);
            window.history.go(-this.$route.query.sum);
        },
        getdiscon(shopid){
            var _this = this;
          this.$api.getDiscon(shopid).then(function (res) {
              _this.disconarr = res.list;
              _this.title = res.title;
          })
        }
      },
      mounted(){
        // this.params.userId=storage.getToken('userId');
      },
      created(){
        var shopid=this.$route.query.shopid;
        // alert(this.$route.query.userId);
          this.getdiscon(shopid);
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
  }
  .activechose{
    background:  #FF0000;
    color: white!important;
  }
  .form{
    width: 94%;
    height: auto;
    /*background: white;*/
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 20px;
  }
  .form form{
    margin: 0px!important;
  }
  .input{
    width: 94%;
    height: 1.68rem;
    line-height: 1.68rem;
    background: white;
    position: relative;
    padding-left: 3%;
    padding-right: 3%;
    border-bottom: 1px solid #F2F2F2;
  }
  .input label{
    float: left;
    font-size: 16px;
  }
  .input input{
    float: right;
    height: 1rem;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -0.55rem;
    border: none;
    outline: none;
    font-size: 0.4rem;
    text-align: right;
    padding-right: 0.3rem;
  }
  ul.chosesize{
    width:94%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    /*margin: 50px auto;*/
    /*background: green;*/
    padding-left: 3%!important;
    padding-right: 3%!important;
    padding-bottom: 10%!important;
    font-size: 12px;
    /*margin-top: 2rem;*/
  }
  ul.chosesize li{
    width: 50%;
    flex: 1;
    min-width: 50%;
    max-width: 50%;
    margin-top: 0.8rem;
    /*margin-bottom: 25px;*/
    color:#FF0000;
  }
  ul.chosesize li span{
    padding: 0.2rem;
    border: 1px solid #FF0000;
    border-radius: 15px;
  }

  button[type=button]{
    width: 100%;
    height: 40px;
    background: #F08400;
    border: none;
    color: white;
    font-size:18px;
    margin-top: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
  }
</style>
