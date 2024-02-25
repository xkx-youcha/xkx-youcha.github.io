<template>
  <div class="ng-scope" style="padding-bottom: 20px;">
    <div class="t-view ng-scope">
        <div class="tv-body">
            <div class="listview">
                <div class="lv-body">
                    <!-- award_1 -->
                    <a class="lv-item ng-scope" style="padding: 5px 20px;" ng-repeat="award in awards">
                        <div ng-include="'template/award.html'" class="ng-scope">
                            <div class="media ng-scope">
                                <div class="pull-right">
                                    <span class="label bgm-blue"> ACM</span>
                                </div>
                                <div class="media-body">
                                    <h5 class="lv-title ng-binding">
                                        1. 
                                        <span class="ng-binding">
                                            ACM MobiCom Best Paper Award (Runner-up)
                                        </span>
                                        , 2023.
                                    </h5>
                                    <small class="lv-small f-200 c-bluegray ng-binding">Xiaopeng Zhao, Zhenlin An, Qingrui Pan, Lei Yang</small>
                                </div>
                            </div>
                        </div>
                    </a>
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
.listview .lv-item .lv-small {
    font-size: 12px;
    color: #A9A9A9;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    width: 100%;
}
.listview .lv-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.listview:not(.lv-message) .lv-title {
    color: #000;
}
.media-body {
    zoom: 1;
    display: block;
    width: auto;
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
.pull-right {
    float: right !important;
}
.media > .pull-right {
    padding-left: 15px;
}
.media:first-child {
    margin-top: 0;
}
.listview {
    position: relative;
}
.t-view .tv-body {
    padding: 23px 25px;
}
</style>