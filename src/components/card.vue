<template>
  <div class="card" id="profile-main">
    <div class="pm-overview c-overflow">
        <div class="pmo-pic">
            <div class="p-relative">
                <a>
                    <img class="img-responsive" src="https://person.zju.edu.cn/person//attachments/2023-08/0815023014-1336768480.jpeg" alt>
                    <!-- <img class="img-responsive" src="https://web.comp.polyu.edu.hk/csyanglei/img/yanglei.jpg" alt> -->
                </a>
            </div>
            <div class="pmo-stat bgm-green">
                <h2 class="m-0 c-white" style="border-top: 0px;">郭秀珍</h2>
                <br>
                <h5 class="m-0 c-white f-500">
                    <strong>浙江大学控制学院</strong>
                </h5>
                <br>
            </div>
        </div>
        <div class="pmo-block pmo-contact hidden-xs">
            <h2>Contact</h2>
            <ul>
                <!-- <li class="zmdi zmdi-phone">
                    <el-icon><PhoneFilled /></el-icon>
                    0852-27667280
                </li> -->
                <li class="zmdi zmdi-phone">
                    <el-icon><Message /></el-icon>
                    guoxiuzhen94@gmail.com
                </li>
                <li class="zmdi zmdi-phone">
                    <el-icon><Message /></el-icon>
                    guoxz@zju.edu.cn
                </li>
                <li class="zmdi zmdi-phone">
                    <el-icon><LocationInformation /></el-icon>
                    杭州市浙江大学玉泉校区工控新楼507
                </li>
            </ul>
        </div>
    </div>
    <div class="pm-body clearfix">
        <tab-nav></tab-nav>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import About from './pmBody/about.vue';
import Award from './pmBody/award.vue';
import Fund from './pmBody/fund.vue';
import New from './pmBody/new.vue';
import Service from './pmBody/service.vue';
import Team from './pmBody/team.vue';
import tabNav from './tabNav.vue';
export default {
  components: { tabNav, About, New, Award, Service, Fund, Team }
}
</script>

<style scoped>
.card {
    /* position: relative; */
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;
}
.pm-overview {
    overflow-y: auto;   
}
#profile-main .pmo-pic {
    position: relative;
    margin: 20px;
}
#profile-main {
    min-height: 500px;
    position: relative;
}
.zmid {
    display: inline-block;
    font: normal normal normal 14px/1 'Material-Design-Iconnic-Font';
    text-rendering: auto;

}
.p-relative {
    position: relative !important;
}
#profile-main {
    min-height: 500px;
    position: relative;
}
img {
    vertical-align: middle;
    border: 0;
}
.img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
}
.c-white {
    color: #ffffff !important;
}
.bgm-green {
    background-color: #4caf50 !important;
}
.f-500 {
    font-weight: 500 !important;
}
#profile-main .pmo-pic .pmo-stat {
    border-radius: 0 0 2px 2px;
    color: #fff;
    text-align: center;
    padding: 30px 5px 0;
}
.m-0 {
    margin: 0px !important;
}
.pmo-block {
    padding: 25px;
}
.pmo-block > h2 {
    font-size: 16px;
    margin: 0 0 15px;
}
.pmo-contact ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.pmo-contact ul li {
    position: relative;
    padding: 8px 0 8px 35px;
}
.pmo-contact ul li i {
    font-size: 18px;
    vertical-align: top;
    line-height: 100%;
    position: absolute;
    left: 0;
    width: 18px;
    text-align: center;
    list-style: none;
}
@media (min-width:768px) {
    #profile-main .pm-overview {
        position: absolute;
        left:0;
        top:0;
        height:100%;
        background-color:#f8f8f8;
        border-right:1px solid#eee,
    }
    #profile-main .pmo-pic img {
        width: 100%;
        border-radius: 2px 2px 0 0;
    }
    #profile-main .pmo-pic .pmo-stat {
        background: #ffc107;
        padding-bottom: 15px;
    }
}
@media (min-width: 768px) and (max-width: 1200px) {
    #profile-main .pm-overview {
        width: 250px;
        min-height: 800px;
    }
    #profile-main .pm-body {
        padding-left: 250px;
        min-height: 800px;
    }
}
@media (max-width: 767px) {
    #profile-main .pmo-pic img {
        width: 180px;
        display: inline-block;
        height: 180px;
        border-radius: 50%;
        border: 4px solid #fff;
        box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2),
            0 6px 20px rgba(0, 0, 0, 0.19);
    }
    #profile-main .pm-body {
        padding-left: 0px;
    }
    .hidden-xs {
        display: none !important;
    }
    #profile-main .pm-overview {
        width: 100%;
        background: #333;
        text-align: center;
    }
}
@media (min-width: 1200px) {
    #profile-main .pm-overview {
        width: 300px;
        min-height: 800px;
    }
    #profile-main .pm-body {
        padding-left: 300px;
        min-height: 800px;
    }
}
</style>