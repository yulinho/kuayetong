<template>
    <div>
      <div class="form">
        <div style="width: 100%;height: auto;background: white;border-radius: 10px;">
          <form action="">
            <div>
              <div>
                <label>开始ID</label>
                <input type="text" v-model="params.fromCardId" placeholder="输入卡片ID">
              </div>
              <div>
                <label>结束ID</label>
                <input type="text" v-model="params.toCardId" placeholder="输入卡片ID">
              </div>
              <div>
                <label>金额</label>
                <input type="text" v-model="params.money" placeholder="输入卡片金额">
              </div>
              <div>
                <label>状态</label>
                  <van-radio-group v-model="params.status" @change="change" style="color: #8f8f8f!important;">
                    <van-radio name="1">未使用</van-radio>
                    <van-radio name="2" style="margin-left: 40px;">已使用</van-radio>
                  </van-radio-group>
                </div>
            </div>
          </form>
        </div>
        <button type="button" class="button" @click="fastSeach">快速查询</button>
        <div v-show="loading" style="height: 30px;width: 30px;position: absolute;top: 50%;margin-top: -15px;left: 50%;margin-left: -15px;">
          <van-loading type="spinner" color="black"/>
        </div>
        <table border="1" width="100%" cellspacing="0" cellpadding="2" style="margin-top: 22px;">
          <thead>
             <tr>
               <th>ID</th>
               <th>卡号</th>
               <th>密码</th>
               <th>金额</th>
               <th>状态</th>
             </tr>
          </thead>
          <tbody v-if="this.total!=0">
          <tr v-for="item in tablearr">
            <td>{{item.id}}</td>
            <td>{{item.cardId}}</td>
            <td>{{item.password}}</td>
            <td>{{item.money}}</td>
            <td v-if="item.status==0" @click="toup(item.cardId)">充值</td>
            <td v-if="item.status==1">{{item.account}}</td>
          </tr>
          </tbody>
        </table>
        <div v-if="this.total==0" style="margin-top: 20px;">
          暂无数据~~~~~~~~
        </div>
        <!--分页-->
        <div style="width: 100%;height: 62px;line-height:62px;position: relative">
            <div>
              <span style="font-size: 16px;font-weight: bold;padding-right: 20px;" @click="pushPage">＜</span>
              <input type="text" placeholder="" v-model="params.pageNum" disabled="disabled" style="height: 20px;width:30px;background:#cfcfcf;border: none;text-align: center;border-radius: 5px;line-height: 20px;">
              <span style="font-size: 16px;font-weight: bold;padding-left: 20px;" @click="addPage">＞</span>
            </div>
          <div style="position: absolute;width: 100px;right: 0px;top: 0px;">
            <span style="float: right">共计{{total}}条</span>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardList",
      data(){
          return{
            params:{
              accountNumber:'15189763158',
              fromCardId:'',
              toCardId:'',
              money:'',
              status:'1',
              pageNum:1,
              num:10
            },
            total:0,
            tablearr:[],
            loading:true,
          }
      },
      methods:{
        fastSeach(){
          this.loading=true;
          this.params.pageNum=1;
          this.getcardlist(this.params);
        },
        change(name){
          this.params.status=name;
          this.getcardlist(this.params);
        },
        //获取列表
        getcardlist(params){
          const _this=this;
          this.$api.getCardlist(params).then((res)=>{
            _this.loading=false;
            _this.total=res.sum;
            _this.tablearr=res.list;
          })
        },
        // 加
        addPage(){
          this.loading=true;
          this.params.pageNum++;
          this.getcardlist(this.params);
        },
        //减
        pushPage(){
          if(this.params.pageNum==1){
            return false;
          }
          this.loading=true;
          this.params.pageNum--;
          this.getcardlist(this.params);
        },
        // 充值
        toup(cardId){
          this.$router.push({
            path:'/toUp',
            query:{
              cardId:cardId
            }
          })
        }
      },
      mounted(){
          var str='';
        var arr=this.$geturl.getL();
        for(var i=0;i<arr.length;i++){
            str=arr[i].split('=')[1]
        };
        this.params.accountNumber=str;
        this.loading=true;
          this.getcardlist(this.params);
      }
    }
</script>

<style scoped>
  .form{
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 10px;
  }
  form label{
    width: 2rem;
    text-align: left;
    padding-left: 20px;
  }
  form{
    font-size: 14px;
    margin-top: 10px;
  }
  form div div{
      display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #f2f2f2;
  }
  form div div:last-child{
    border: none!important;
  }
  form div div input{
    padding-left: 28px;
    border: none;
    line-height: 20px;
    color: #8F8F8F!important;
  }
  .van-radio-group .van-radio .van-radio__label{
    line-height: 40px!important;
  }
  .button{
    width: 100%;
    height: 33px;
    margin-top: 25px;
    text-align: center;
    border: none;
    background: #F08400;
    font-size: 16px;
    line-height: 33px;
    color: white;
    border-radius: 20px;
  }
  table{
    font-size: 12px!important;
  }
  table tr{
    height: 25px;
  }
  table tbody tr td:last-child{
    color: #4AB1FE;
  }
</style>
