<template>
  <div style="margin-bottom: 61px;">
    <!--<img src="../assets/bg2.jpg" alt="" style="width: 100%;height: 375px;">-->
    <!--图片轮播-->
    <div style="position: relative;width: 100%;height: 375px;">
      <van-swipe :autoplay="3000" :show-indicators="false" @change="change">
        <van-swipe-item v-for="item in imgUrl">
          <img :src="item" alt="" style="width: 100%;height: 375px;">
        </van-swipe-item>
      </van-swipe>
      <div class="slidesum" style=""><span style="padding-right: 2px;">{{index+1}}</span>/<span style="padding-left: 2px;">{{imgUrl.length}}</span></div>
      <img src="../assets/commerce_return_bg@3x.png" alt="" style="position: fixed;width: 32px;height: 32px;top: 23px;left: 10px;z-index: 9999999999999999999999;" @click="getLeft">
      <!--<img v-if="isshangcang!=false" src="../assets/collection_sel@3x.png" style="position: fixed;width: 32px;height: 32px;top: 23px;right: 56px;z-index: 9999999999999999999999;" alt="" @click="shouCang">-->
    </div>

    <div style="height: auto;background: white;padding:10px;">
      <div style="width: 100%;height: 100%;">
        <div style="display: flex;height: 20px;line-height: 20px;">
          <div style="flex: 1;text-align: left">{{source}}价<span style="color: #FF0000;font-size: 16px;padding-left: 10px;">¥{{prize}}元</span></div>
          <div style="flex: 1;text-align: right;color: #717171;font-size: 10px;">销量：{{salesVolume}}件</div>
        </div>
        <div style="display: flex;text-align: left;font-size: 14px;color: #393939;font-weight: bold;padding-top: 10px;">
          {{name}}
        </div>
      </div>
    </div>


    <div style="height: 2.2rem;background: white;margin-top: 10px;padding: 15px 34px;">
      <div style="width: 100%;height: 2rem;position: relative">
        <img src="../assets/commerce_coupons_bg@3x.png" alt="" style="width: 100%;height: 2rem;">
        <div class="leftdiv" style="">
          <p>{{deduction}}<span style="font-size: 12px;">元</span></p>
          <p>本商品可用余额抵扣</p>
          <p>（提交订单时会自动抵扣）</p>
        </div>
        <div class="rightdiv" style="" @click="openpay">
          立即抵扣
        </div>
      </div>
    </div>

    <div style="width: 100%;height: 60px;background: white;margin-top: 10px;border-bottom: 3px solid #F2F2F2;position: relative">
      <div style="width: 5rem;height: 60px;margin: 0 auto;display: flex" class="titleshop" @click="goxiangqing">
        <div style="">
          <img src="../assets/commerce_merchandise_line@3x.png" alt="" class="leftimg">
        </div>
        <div style="height: 60px;width: 3rem;position: absolute;left: 50%;margin-left: -1.5rem;">
          <img src="../assets/commerce_goods@3x.png" alt="" style="width: 18px;height: 18px;vertical-align: middle;padding-bottom:0.1rem;">
          <span style="vertical-align: middle;padding-left: 3px;">商品信息</span>
        </div>
        <div style="">
          <img src="../assets/commerce_merchandise_line2@3x.png" alt="" class="rightimg">
        </div>
        <p style="margin: 0px!important;width: 100%;position: absolute;bottom: -0.5rem;right: 0px;font-size: 12px;color: #4AB1FE" v-if="title!='拼多多'">（查看商品详情）</p>
      </div>
    </div>

    <div v-if="title!='拼多多'" style="height: 373px;background: white;padding-top: 10px;padding-bottom: 10px;" v-for="item in imgUrl">
      <img :src="item" alt="" style="width: 100%;height: 100%;">
    </div>
    <router-view v-else></router-view>
    <!--<iframe  v-else :src="src1" allowtransparency="true"  onload="this.height=160"  id="framecontent" frameborder="0" scrolling="no" width="100%" style="border: none;height: 488px;"></iframe>-->
    <div style="width: 100%;height: 60px;background: white;margin-top: 10px">
      <div style="width: 5rem;height: 60px;margin: 0 auto;display: flex" class="titleshop">
        <div style="">
          <img src="../assets/commerce_merchandise_line@3x.png" alt="" class="leftimg">
        </div>
        <div style="height: 60px;width: 3rem;position: absolute;left: 50%;margin-left: -1.5rem;">
          <img src="../assets/commerce_like@3x.png" alt="" style="width: 18px;height: 18px;vertical-align: middle;padding-bottom:0rem;">
          <span style="vertical-align: middle;padding-left: 3px;">猜你喜欢</span>
        </div>
        <div style="">
          <img src="../assets/commerce_merchandise_line2@3x.png" alt="" class="rightimg">
        </div>
      </div>
    </div>
    <div>
      <van-row>
        <van-col span="8" style="border-radius: 4px;" v-for="item in listArr" :v-lazy="item">
          <div class="shopjieshao" style="border-radius: 4px;height: 8rem!important;" @click="openshop(item.id)">
            <img :src="item.imageUrl" :v-lazy="item.imageUrl"  alt="">
            <div>
              <p style="overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;height: auto"><i><img :src="item.iconUrl" alt="" style="width: 12px;height: 12px;"></i>{{item.name}}</p>
              <div style="width: 100%;">
                <div style="width: 100%;float: left;padding:0.2rem;">
                  <span style="font-size: 0.28rem;color: #717171;">拼多多价</span>
                  <span style="font-size:0.3rem;"><span style="font-size: 0.28rem;color: #FF0000">¥</span><span style="font-size: 0.35rem;padding-left: 0.1rem;color:#FF0000">{{item.price.toFixed(2)}}</span></span>
                  <span style="float:right;font-size: 0.28rem;padding-right: 0.4rem;line-height: 0.45rem;color: #717171;">销量:{{item.salesVolume}}件</span></div>
              </div>
              <div style="width: 100%;" class="disconnum"><span style="padding: 0.2rem;background: red;margin-left: 0.2rem;color: #FFFFFF;border-radius: 15px;">可抵扣¥{{item.deduction.toFixed(2)}}</span></div>
              <!--<p><span style="font-size: 14px;color: #FF0000">可抵¥{{item.deduction.toFixed(2)}}</span></p>-->
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <!--<ul style="height: auto;">-->
    <!--<li style="position: relative;height: 140px;" v-for="item in listArr" :v-lazy="item" @click="openshop(item.id)">-->
    <!--<img src="../assets/bg@3x.png" alt="" style="height: 140px;width: 100%;">-->
    <!--<img :src="item.imageUrl" :v-lazy="item.imageUrl" alt="" style="width: 109px;height: 109px;position: absolute;left: 10px;top: 48%;margin-top: -54px;">-->
    <!--<div style="height: 100px;position: absolute;left:130px;top: 3px;text-align: left;padding-right: 10px;">-->
    <!--<p style="font-size: 12px;overflow: hidden;-->
    <!--text-overflow: ellipsis;-->
    <!--display: -webkit-box;-->
    <!-- -webkit-line-clamp: 2;-->
    <!-- -webkit-box-orient: vertical;">-->
    <!--<img :src="item.iconUrl" alt="" style="width: 12px;height: 12px;">-->
    <!--{{item.name}}-->
    <!--</p>-->
    <!--<p style="height: 20px;line-height: 20px;">{{item.source}}价：<span style="color: #FF0000;font-size: 14px;">{{item.price.toFixed(2)}}</span>元 <span style="float: right;font-size: 10px;color: #717171">销量：{{item.salesVolume}}件</span></p>-->
    <!--<div style="background: #FF0000;width: 94px;height: 24px;line-height: 24px;text-align: center;color: white;border-radius:10px;position: absolute;bottom: -18px;">可抵:{{item.deduction.toFixed(2)}}元</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <img id="btngo" src="../assets/commerce_top@3x.png" alt="" style="width: 35px;height: 35px;position: fixed;bottom: 61px;right: 15px;" @click="goTop">
    <button id="paybtn" type="button" style="position: fixed;bottom: 0px;left: 0px;" @click="openpay">
      立即抵扣购买
    </button>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  import { Toast } from 'vant'
  export default {
    name: "comPurchase",
    data(){
      return{
        params2:{
          id:'',
        },
        params3:{
          userId:this.$route.query.userId,
          id:'',
          type:'2',
        },
        src:'',
        prize:'',
        name:'',
        source:'',
        salesVolume:'',
        index:0,
        deduction:'',
        imgUrl:[],
        listArr:[],
        cliHeight:'',
        logarr:[],
        location:'',
        location2:'',
        title:'',
        src1:'',
      }
    },
    methods:{
      getLeft(){
        window.location.href="http://back.com";
      },
      shouCang(){
        this.isshangcang = true;
        this.getShoucang(this.params3);
      },
      share(){
        window.location.href="http://share.com"
      },
      openpay(){
        var _this=this;
        Dialog.confirm({
          title: '提示',
          message: '此操作不可撤销，请确认使用本平台余额'+this.deduction+'元抵扣购物'
        }).then(() => {
          window.location.href=_this.location;
        }).catch(() => {
          return
        })
      },
      getdinshang(params){
        const _this=this;
        this.$api.getDinshang(params).then((res)=>{
          _this.prize=res.product.price.toFixed(2);
          _this.name=res.product.name;
          _this.source=res.product.source;
          _this.imgUrl.push(res.product.imageUrl);
          _this.salesVolume=res.product.salesVolume;
          _this.deduction=res.product.deduction;
          _this.listArr=res.list;
          _this.location=res.product.qlink;
          _this.title=res.product.source;
          if(_this.title!="拼多多"){
            _this.location2=res.product.detailUrl;
          }else{
            _this.src1=res.product.detailUrl;
          }
          if(_this.title=="拼多多"){
            _this.$router.push({
              path:'/pingDuo',
              query:{
                id:_this.params2.id
              }
            })
          }
        })
      },
      goxiangqing(){
        var _this=this;
        if(this.title!="拼多多"){
          window.location.href=this.location2;
        }else{
        }
      },
      change(index){
        // alert(index);
      },
      goTop(){
        document.body.scrollTop=0;
      },
      openshop(id){
        this.params2.id=id;
        this.isshangcang = false;
        // this.params.pId=id;
        // window.scrollTo(0);
        document.body.scrollTop=0;
        this.listArr=[];
        this.imgUrl=[];
        // this.getcoupon(this.params);
        this.getdinshang(this.params2);
      },
      // getInfo(userId){
      //   this.$api.getInfor(userId).then((res)=>{
      //     alert(JSON.stringify(res));
      //     var channel = res.user.channel;
      //     if(channel=='跨业通'){
      //       localStorage.setItem('channel','%e8%b7%a8%e4%b8%9a%e9%80%9a');
      //     }
      //     if(channel=='天淘通'){
      //       localStorage.setItem('channel','%e5%a4%a9%e6%b7%98%e9%80%9a');
      //     }
      //     if(channel=='淘天通'){
      //       localStorage.setItem('channel','%e6%b7%98%e5%a4%a9%e9%80%9a');
      //     }
      //     if(channel=='惠购通'){
      //       localStorage.setItem('channel','%e6%83%a0%e8%b4%ad%e9%80%9a');
      //     }
      //     if(channel=='华夏信用大师'){
      //       localStorage.setItem('channel','%e5%8d%8e%e5%a4%8f%e4%bf%a1%e7%94%a8%e5%a4%a7%e5%b8%88');
      //     }
      //   })
      // }
    },
    created(){
        var arrstr=[];
        var arr=this.$geturl.getL();
        for(var i=0;i<arr.length;i++){
          arrstr.push(arr[i].split('=')[1]);
        }
        this.logarr=arrstr;
        this.params2.id=arrstr[0];
        // this.getInfo(this.$route.query.userId);
    },
    mounted(){
        var _this=this;
        this.getdinshang(this.params2);
    }
  }
</script>

<style scoped>
  button{
    height: 51px;
    border: none;
    background: #F67419;
    width: 100%;
    font-size: 16px;
    color: white;
  }
  .tab div{
    padding-top: 6px;
  }
  .slidesum{
    position: absolute;bottom: 10px;right: 10px;
    color: #8F8F8F;
    font-size: 14px;
  }
  .leftdiv{
    width: 50%;height: 100%;position: absolute;left: 0px;top: -0.3rem;
    color: white;
  }
  .rightdiv{
    width: 50%;height: 100%;position: absolute;right: 0px;top: 0px;
    color: white;
    line-height: 2.2rem;
    font-size: 18px;
  }
  .leftdiv p{
    margin: 0px!important;
  }
  .leftdiv p:first-child{
    font-size: 24px;
    padding-top: 0.4rem;
    /*margin: 0px!important;*/
  }
  .leftdiv p:nth-child(2){
    font-size: 12px;
    padding-top: 0.1rem;
  }
  .leftdiv p:nth-child(3){
    font-size:8px;
  }
  .titleshop{
    font-size:14px;
    color: #393939;
    line-height: 60px;
  }
  .titleshop div{
    flex: 1;
  }
  .leftimg{
    width: 13px;
    height: 2px;
    margin-right: 0.5rem;
    margin-bottom:0.05rem;
    /*position: absolute;*/
    /*top: 50%;*/
    /*margin-top: -1px;*/
    /*left: 0px;*/
  }
  .rightimg{
    width: 13px;
    height: 2px;
    margin-left:0.5rem;
    margin-bottom:0.05rem;
    /*margin-top: -1px;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*margin-top: -1px;*/
    /*right: 0px;*/
  }
  .allist ul{
    display: flex;
    padding: 5.5px;
  }
  .allist ul li{
    display: 1;
    height: 280px;
    width: 50%;
    /*background: #00c000;*/
    padding-left: 4.5px;
    padding-right: 4.5px;
  }
  .allist ul li div{
    width: 100%;
    height: 100%;
    background: url("../assets/bg3x.png") no-repeat;
    background-size: 100% 100%;
  }



  .van-row{
    background: white;
    padding-bottom: 0.2rem;
  }
  .van-row .van-col{
    width: 50%;
  }
  .van-row .van-col{
    margin-top: 0.3rem!important;
  }
  .van-row .van-col .shopjieshao{
    width: 4.7rem;
    height: auto;
    /*background: yellow;*/
    margin: 0 auto;
    box-shadow: 0 0 10px #b8bbbf;
    text-align: left;
  }
  .van-row .van-col .shopjieshao p:first-child{
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
    height: 1rem;
    font-size: 12px;
  }
  .van-row .van-col .shopjieshao p:nth-child(2){
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    /*margin-bottom: 0.2rem;*/
  }
  .van-row .van-col .shopjieshao img{
    width: 100%;
    height: 182px;
    border-radius: 4px 4px 0px 0px;
  }
  .disconnum{
    padding-top: 0.9rem;
  }
</style>
