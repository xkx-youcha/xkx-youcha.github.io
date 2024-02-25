<template>
  <div class="ng-scope" style="padding-bottom: 20px;">
    <div class="t-view ng-scope">
        <div class="tv-header media">
          <a class="tvh-user pull-left">
            <h3>Currently</h3>
          </a>
        </div>
        <div class="tv-body">
            <div class="listview">
                <div class="lv-body">
                    <!-- ngRepeat: student in students | filter:{current:true} -->
                    <a class="lv-item ng-scope" ng-repeat="student in students | filter:{current:true}" style="">
                        <div class="media">
                            <div class="pull-right"></div>
                            <div class="media-body">
                                <div ng-include="'template/student.html'" class="ng-scope">
                                    <h5 class="lv-title c-cyan ng-scope">
                                        <br>
                                        <a ng-if="student.www" href="https://www2.comp.polyu.edu.hk/~cszan/" target="_blank" class="ng-binding ng-scope">1. Zhenlin An (PhD)</a>
                                    </h5>
                                    <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                        <span class="ng-binding">Postdoc at PolyU from 2021/10 - Present</span>
                                    </div>
                                    <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                        <span class="ng-binding">PhD from 2017/9 - 2021/10</span>
                                    </div>
                                    <div class="f-200 c-bluegray ng-scope" ng-repeat="remark in student.remarks">
                                        <span class="ng-binding">BSc from Dalian University of Technology</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- end ngRepeat: student in students | filter:{current:true} -->
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
.t-view {
    border: 1px solid #eee;
    position: relative;
    margin-bottom: 35px;
}
.c-bluegray {
    color: #607d8b !important;
}
.f-500 {
    font-weight: 500 !important;
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
.c-cyan {
    color: #00bcd4 !important;
}
.c-red {
    color: #f44336 !important;
}
.listview .lv-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
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
.pull-right {
    float: right !important;
}
.media > .pull-right {
    padding-left: 15px;
}
.listview {
    position: relative;
}
.t-view .tv-body {
    padding: 23px 25px;
}
.t-view .tvh-user {
    display: block;
}
.h3 {
    font-size: 23px;
}
.media-left, .media > .pull-left {
    padding-right: 10px;
}
.media > .pull-left {
    padding-right: 15px;
}
.media:first-child {
    margin-top: 0;
}
.media {
    overflow: visible;
}
.t-view .tv-header {
    padding: 16px 18px;
    border-bottom: 1px solid #eee;
    background: #F9F9F9;
}
</style>