<template>
  <div class="ng-scope" style="padding-bottom: 20px;">
    <div class="t-view ng-scope">
        <div class="tv-header media">
          <a class="tvh-user pull-left">
            <h3> Invited Talks</h3>
          </a>
        </div>
        <div class="tv-body">
            <div class="listview">
                <div class="lv-body">
                    <!-- ngRepeat: talk in talks -->
                    <a class="lv-item ng-scope" ng-repeat="talk in talks" style="">
                        <div class="media">
                            <div class="media-body">
                                <div ng-include="'template/talk.html'" class="ng-scope">
                                    <h5 class="lv-title  c-cyan ng-binding ng-scope">1. "Pushing the Limits of Real-Time Tracking in IoTg"</h5>
                                    <small class="lv-small f-500 ng-binding ng-scope">June/10, CCF Forum/Tianjing Chapter</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- end ngRepeat: talk in talks -->
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