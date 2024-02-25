<template>
  <div>
    <div class="ng-scope" style="padding-bottom: 20px;">
        <!-- biography -->
        <div class="pmb-block ng-scope">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-account zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">BIOGRAPHY</strong>
                </h2>
            </div>
            <div class="pmbb-body p-l-30">
                <p class="pmbb-view">
                    Greetings, my name is Xiuzhen Guo. I am a tenure-track Assistant Professor in College of Control Science and Engineering, 
                    <a href="https://www.zju.edu.cn/" target="_blank" title="前往浙江大学主页">Zhejiang University (ZJU)</a>
                    . I received my Ph.D. degree from School of Software, Tsinghua University in 2021. 
                    I received the ACM China Doctoral Dissertation Award and Shuimu Tsinghua Scholar.  My research interests include Internet of Things (IoT), 
                    wireless networking, and mobile computing.
                </p>
                <p>
                    郭秀珍，浙江大学控制科学与工程学院百人计划研究员，博士生导师；主要研究方向为工业物联网/互联网、无源感知网络和移动计算；
                    2021年6月博士毕业于清华大学，2021年7月到2023年7月在清华大学软件学院担任助理研究员/博士后；2023年8月加入
                    <a href="http://nesc.zju.edu.cn/#/" target="_blank" title="前往课题组NESC">浙江大学工业控制研究所孙优贤院士、陈积明教授“网络传感与控制”课题组 NESC；</a>
                    担任IEEE SECON 2022的Submission Chair（信息系统主席）、IEEE ICPADS 2022的Co-Publicity Chair（共同宣传主席）、
                    ACM TURC China （ACM中国图灵大会）2023的学生活动主席，并受邀担任IEEE SECON、MASS、ICPADS、DCOSS、MSN、ACM EWSN等
                    多个国际学术会议的TPC Member（程序委员会委员）；在国内外顶级学术会议和期刊上发表论文30余篇，
                    包括USENIX NSDI、ACM MobiCom、ACM MobiSys、ACM SenSys、IEEE/ACM IPSN、IEEE INFOCOM、ACM UbiComp、ACM TON、ACM TOSN等，
                    并获得2021年度ACM中国优秀博士论文奖，入选清华大学水木学者计划；担任中国计算机学会物联网专委会委员。
                </p>
                <!-- <p>
                    <strong class="c-cyan">
                        I am looking for self-motivated Ph.D student, Research Assistant and Postdoc fellow (with EE or CS background at best).
                        If you are interested in my research, please never hesitate to contact me!
                    </strong>
                </p> -->
            </div>
        </div>
        <!-- interests -->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-dot-circle zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">INTERESTS</strong>
                </h2>
            </div>
            <div class="pmbb-body p-l-30">
                <div class="pmbb-view">
                    <p class="c-500"> 
                        <strong>研究方向：</strong>工业智能与优化控制；智能检测与感知；工业控制系统安全；机器人与智能无人系统
                    </p>
                    <p class="c-500"> 
                        <strong>研究主题：</strong>物联网；无缘感知网络；无线感知；移动计算
                    </p>
                </div>
            </div>
        </div>
        <!-- news -->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-hc-fw">
                        <el-icon><CirclePlus /></el-icon>
                    </i> -->
                    <strong class="ng-binding">NEWS</strong>
                </h2>
            </div>
            <div class="pmbb-body">
                <div class="listview">
                    <div class="lv-body">
                        <!-- new-1 -->
                        <div class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="item in pinnedNews">
                            <!-- ngInclude: 'template/news.html' -->
                            <div ng-include="'template/news.html'" class="ng-scope">
                                <div class="media ng-scope">
                                    <div class="pull-right"></div>
                                    <div class="media-body">
                                        <p class="lv-body ng-binding c-red" ng-class="{'c-red':item.highlight}">
                                            (1) 2023/10, Oct.: <span ng-bind-html="item.content" class="ng-binding">Congurlations! We won the "Best Paper Award (Runner-up) " and "Graduate Award" at ACM MobiCom 2023.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- new-2 -->
                        <div class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="item in pinnedNews">
                            <!-- ngInclude: 'template/news.html' -->
                            <div ng-include="'template/news.html'" class="ng-scope">
                                <div class="media ng-scope">
                                    <div class="pull-right"></div>
                                    <div class="media-body">
                                        <p class="lv-body ng-binding c-red" ng-class="{'c-red':item.highlight}">
                                            (2) 2023/14, September: 
                                            <span ng-bind-html="item.content" class="ng-binding">Congurlations! We won the "Best Paper Award " at IEEE SECON 2023.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- new-3 -->
                        <div class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="item in pinnedNews">
                            <!-- ngInclude: 'template/news.html' -->
                            <div ng-include="'template/news.html'" class="ng-scope">
                                <div class="media ng-scope">
                                    <div class="pull-right"></div>
                                    <div class="media-body">
                                        <p class="lv-body ng-binding c-red" ng-class="{'c-red':item.highlight}">
                                            (3) 2022/23, September: <span ng-bind-html="item.content" class="ng-binding">Congurlations! Our two demos were given the "Best Demo Award Runner-up" at MobiCom'22.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix">
                        <a class="lv-footer" href="/new" ui-sref="components.pmBody.new">
                            <h5 class="c-blue">[View All]</h5></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Award -->
        <div class="pmb-block ng-scope" style="padding-top: 20px;"> 
            <div class="pmbb-header">
                <h2 class="c-green">
                    <strong class="ng-binding">AWARDS &amp; HONOUR</strong>
                </h2>
            </div>
            <div class="pmbb-body">
                <div class="listview">
                    <div class="lv-body">
                        <!--  -->
                        <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="award in pinnedAwards">
                            <!-- ngInclude: 'template/award.html' -->
                            <div ng-include="'template/award.html'" class="ng-scope">
                                <div class="media ng-scope">
                                    <div class="pull-right">
                                        <span class="label bgm-blue"> ACM</span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="lv-title ng-binding">
                                            1. <span class="ng-binding">ACM MobiCom Best Paper Award (Runner-up)</span>, 2023.
                                        </h5>
                                        <small class="lv-small f-200 c-bluegray ng-binding">
                                            Xiaopeng Zhao, Zhenlin An, Qingrui Pan, Lei Yang
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!--  -->
                        <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="award in pinnedAwards">
                            <div ng-include="'template/award.html'" class="ng-scope">
                                <div class="pull-right">
                                        <span class="label bgm-red"> IEEE</span>
                                </div>
                                <div class="media-body">
                                    <h5 class="lv-title ng-binding">
                                        2. IEEE SECON Best Paper Award, 2023.
                                    </h5>
                                    <small class="lv-small f-200 c-bluegray ng-binding">
                                        Qingrui Pan, Zhenlin An, Xiaopeng Zhao, Lei Yang
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="clearfix">
                        <a class="lv-footer" href="/award" ui-sref="components.pmBody.award">
                            <h5 class="c-blue">[View All]</h5></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- publications -->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <strong class="ng-binding">SELECTED PUBLICATIONS</strong>
                </h2>
            </div>
            <div class="listview">
                <div class="lv-body">
                    <!--  -->
                    <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="award in pinnedPublications">
                        <div ng-include="'template/publication.html'" class="ng-scope">
                            <div class="media ng-scope">
                                <div class="pull-right">
                                    <span class="pub-badge bgm-red"> MobiCom</span>
                                </div>
                                <div class="media-body">
                                    <h5 class="lv-title" style="white-space:pre-line;">
                                        <span class="c-cyan ng-binding" tooltip="NeRF^2: Neural Radio-Frequency Radiance Fields">
                                            (1) NeRF^2: Neural Radio-Frequency Radiance Fields
                                        </span>
                                    </h5>
                                    <h4 class="badge bgm-red ng-scope" ng-if="paper.award" style="margin-top: 0px;">
                                        <span class="f-500 ng-binding">Best Paper Award (Runner-up), 1/93</span>
                                    </h4>
                                    <p class="f-200 c-bluegray ng-binding">
                                        <span template="Xiaopeng Zhao, Zhenlin An, Qingrui Pan, Lei Yang" author="">
                                            <strong class="ng-scope">Xiaopeng Zhao, Zhenlin An, Qingrui Pan, 
                                                <a href="http://young.tagsys.org">Lei Yang</a>
                                            </strong>
                                        </span>
                                        <br>
                                        ACM MobiCom, Oct 2-6, 2023.
                                        <br>
                                        <span ng-if="paper.links['paper']" class="ng-scope">
                                            [ 
                                            <span class="zmdi zmdi-cloud-download" style="font-size:16px;"></span>
                                            <a href="https://dl.acm.org/doi/10.1145/3570361.3592527" target="_blank">Paper</a> 
                                            ]
                                        </span>
                                        <span ng-if="paper.links['slides']" class="ng-scope">
                                            [
                                            <span class="zmdi zmdi-movie-alt" style="font-size:16px;"></span>
                                            <a href="data/files/NeRF2-mobicom23-v4.pptx" target="_blank">Slides</a> 
                                            ]
                                        </span>
                                        <span ng-if="paper.links['video']" class="ng-scope">
                                            [ 
                                            <span class="zmdi zmdi-videocam" style="font-size:16px;"></span>
                                            <a href="https://youtu.be/zytB5peRcsI" target="_blank">Video</a> 
                                            ]
                                        </span>
                                        <span ng-if="paper.links['project-ext']" class="ng-scope">
                                            [ 
                                            <span class="zmdi zmdi-mail-send" style="font-size:16px;"></span>
                                            <a href="https://xpengzhao.github.io/NeRF2/" target="_blank">Project</a> 
                                            ]
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!--  -->
                    <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="award in pinnedPublications">
                        <div ng-include="'template/publication.html'" class="ng-scope">
                            <div class="media ng-scope">
                                <div class="pull-right">
                                    <span class="pub-badge bgm-purple"> SECOM</span>
                                </div>
                                <div class="media-body">
                                    <h5 class="lv-title" style="white-space:pre-line;">
                                        <span class="c-cyan ng-binding" tooltip="Revisiting Backscatter Frequency Drifts for Fingerprinting RFIDs: A Perspective of Frequency Resolution">
                                            (2) Revisiting Backscatter Frequency Drifts for Fingerprinting RFIDs: A Perspective of Frequency Resolution
                                        </span>
                                    </h5>
                                    <p class="f-200 c-bluegray ng-binding">
                                        <span template="Qingrui Pan, Zhenlin An, Xiaopeng Zhao, Lei Yang" author="">
                                            <strong class="ng-scope">Qingrui Pan, Zhenlin An, Xiaopeng Zhao, 
                                                <a href="http://young.tagsys.org">Lei Yang</a>
                                            </strong>
                                        </span>
                                        <br>
                                        IEEE SECON, Sep 11-14, 2023.
                                        <br>
                                        <span ng-if="paper.links['paper']" class="ng-scope">
                                            [ 
                                            <span class="zmdi zmdi-cloud-download" style="font-size:16px;"></span>
                                            <a href="https://dl.acm.org/doi/10.1145/3570361.3592527" target="_blank">Paper</a> 
                                            ]
                                        </span>
                                        <span ng-if="paper.links['slides']" class="ng-scope">
                                            [
                                            <span class="zmdi zmdi-movie-alt" style="font-size:16px;"></span>
                                            <a href="data/files/NeRF2-mobicom23-v4.pptx" target="_blank">Slides</a> 
                                            ]
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="clearfix">
                    <a class="lv-footer" href="" ui-sref="components.pmBody.publication">
                        <h5 class="c-blue">[View All]</h5></a>
                </div>
            </div>
        </div>
        <!-- teaching -->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-dot-circle zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">TEACHING</strong>
                </h2>
            </div>
            <div class="pmbb-body p-l-30">
                <div class="pmbb-view">
                    <!-- 一段经历 -->
                    <h5>
                        <el-icon><School /></el-icon>
                        <span class="zmdi zmdi-dot-circle-alt"></span> 
                        Spring, 2020: Internet Computing and Applications
                        (<a target="_blank">COMP5322</a>).
                    </h5>
                </div>
            </div>
        </div>
        <!-----pinned funds----->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-dot-circle zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">RECENT FUNDS</strong>
                </h2>
            </div>
            <div class="pmbb-body">
                <div class="listview">
                    <div class="lv-body">
                        <!--  -->
                        <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="fund in pinnedFunds">
                            <div ng-include="'template/fund.html'" class="ng-scope">
                                <div class="media ng-scope">
                                    <div class="pull-right">
                                        <span class="label bgm-purple"> ITF</span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="lv-body f-500 c-cyan ng-binding">
                                            1. PI, ''Dual-Channel Near-Field Identification Tags: Deep-Learning Reinforced Design and Electronic-Inks Powered Fabrication''
                                        </h5>
                                        <small class="lv-small f-200 c-bluegray ng-binding">
                                            COMP(ITS/099/21)
                                            <span ng-show="fund.duration" class="ng-binding">, 2023~2024</span>,
                                            <span ng-show="fund.money" class="ng-binding">HKD 1.2 M</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="clearfix">
                        <a class="lv-footer" href="/fund" ui-sref="components.pmBody.fund">
                            <h5 class="c-blue">[View All]</h5></a>
                    </div>
                </div>
            </div>
        </div>
        <!-----pinned students----->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-dot-circle zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">CURRENT TEAM</strong>
                </h2>
            </div>
            <div class="pmbb-body">
                <div class="listview">
                    <div class="lv-body">
                        <!-- student-1 -->
                        <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="student in pinnedStudents">
                            <div ng-include="'template/student.html'" class="ng-scope">
                                <h5 class="lv-title c-cyan ng-scope">
                                    <br>
                                    <a ng-if="student.www" href="https://www2.comp.polyu.edu.hk/~cszan/" target="_blank" class="ng-binding ng-scope">
                                        1. Zhenlin An (PhD)
                                    </a>
                                </h5>
                                <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                    <span class="ng-binding">
                                        Postdoc at PolyU from 2021/10 - Present
                                    </span>
                                </div>
                                <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                    <span class="ng-binding">
                                        PhD from 2017/9 - 2021/10
                                    </span>
                                </div>
                                <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                    <span class="ng-binding">
                                        BSc from Dalian University of Technology
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="clearfix">
                        <a class="lv-footer" href="/team" ui-sref="components.pmBody.team">
                            <h5 class="c-blue">[View All]</h5></a>
                    </div>
                </div>
            </div>
        </div>
        <!-----pinned talk----->
        <div class="pmb-block ng-scope" style="padding-top: 20px;">
            <div class="pmbb-header">
                <h2 class="c-green">
                    <!-- <i class="zmdi zmdi-dot-circle zmdi-hc-fw"></i> -->
                    <strong class="ng-binding">RECENT INVITED TALKS</strong>
                </h2>
            </div>
            <div class="pmbb-body">
                <div class="listview">
                    <div class="lv-body">
                        <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="talk in pinnedTalks">
                            <div ng-include="'template/talk.html'" class="ng-scope">
                                <h5 class="lv-title  c-cyan ng-binding ng-scope">1. "Pushing the Limits of Real-Time Tracking in IoTg"</h5>
                                <small class="lv-small f-500 ng-binding ng-scope">June/10, CCF Forum/Tianjing Chapter</small>
                            </div>
                        </a>
                    </div>
                    <div class="clearfix">
                        <a class="lv-footer" href="/service" ui-sref="components.pmBody.service">
                            <h5 class="c-blue">[View All]</h5></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#profile-main .pmb-block {
    margin-bottom: 20px;
}
.f-500 {
    font-weight: 500 !important;
}
.bgm-purple {
    background-color: #9c27b0 !important;
}
.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
    background-color: #2196f3;
    border-radius: 2px;
}
.pub-badge {
    height: 65px;
    width: 65px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: darkgreen;
    font-weight: bold;
    font-size: 12px;
    color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
}
.bgm-red {
    background-color: #f44336 !important;
}
.listview .lv-item .lv-small {
    font-size: 12px;
    color: #A9A9A9;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    width: 100%;
}
.c-bluegray {
    color: #607d8b !important;
}
.listview:not(.lv-message) .lv-title {
    color: #000;
}
.listview .lv-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.bgm-blue {
    background-color: #2196f3 !important;
}
.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #ffffff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
.c-blue {
    color: #2196f3 !important;
}
.clearfix::before {
    content: " ";
    display: table;
}
.media:first-child {
    margin-top: 0;
}
.lv-footer {
    display: block;
    text-align: center;
    padding: 7px 10px 8px;
    border-top: 1px solid #F0F0F0;
    line-height: 100%;
    font-size: 11px;
    margin-top: 20px;
    color: #828282;
}
.media {
    overflow: visible;
}
.media, .media-body {
    zoom: 1;
    overflow: hidden;
}
.media {
    margin-top: 15px;
}
.media > .pull-right {
    padding-left: 15px;
}
.media-right, .media > .pull-right {
    padding-left: 10px;
}
.pull-right {
    float: right !important;
}
.listview .lv-item {
    position: relative;
    display: block;
    -webkit-transition: background-color;
    -o-transition: background-color;
    transition: background-color;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
}
.c-cyan {
    color: #00bcd4 !important;
}
.listview:not(.lv-lg):not(.lv-message) .lv-item {
    padding: 12px 20px;
}
.c-red {
    color: #f44336 !important;
}
.media-body {
    zoom: 1;
    display: block;
    width: auto;
}
.media-left, .media-right, .media-body {
    display: table-cell;
    vertical-align: top;
}
.media-body {
    width: 10000px;
}
.media, .media-body {
    zoom: 1;
    overflow: hidden;
}
.p-l-30 {
    padding-left: 30px !important;
}
.listview {
    position: relative;
}
.zmdi {
    display: inline-block;
    font: normal normal normal 14px/1 'Material-Design-Iconnic-Font';
    text-rendering: auto;
    font-size: inherit;
}
.zmdi-hc-fw {
    width: 1.28571429em;
    text-align: center;
}
/* .zmdi-account::before {
    content: '\f207';
} */
#profile-main .pmb-block .pmbb-header {
    margin-bottom: 25px;
    position: relative;
}
#profile-main .pmb-block .pmbb-header h2 {
    margin: 0;
    font-weight: 100;
    font-size: 20px;
}
.c-green {
    color: #4caf50 !important;
}
@media (min-width: 1200px) {
    #profile-main .pmb-block {
        padding: 40px 42px 0;
    }
}
@media (max-width: 1199px) {
    #profile-main .pmb-block {
        padding: 30px 20px 0;
    }
}
</style>