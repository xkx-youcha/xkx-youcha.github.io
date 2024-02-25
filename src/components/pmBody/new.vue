<template>
  <div class="ng-scope" style="padding-bottom: 20px;">
    <!-- 2023 -->
    <div class="t-view ng-scope">
        <div class="tv-header media">
          <a class="tvh-user pull-left">
            <h3 class="ng-binding"> 2023</h3>
          </a>
          <div class="media-body p-t-5"></div>
        </div>
        <div class="tv-body">
          <div class="listview">
            <div class="lv-body">
              <!-- 2023_1 -->
              <div class="lv-item ng-scope" style="padding:5px 20px;" ng-repeat="item in items[year]">
                <div ng-include="'template/news.html'" class="ng-scope">
                  <div class="media ng-scope">
                    <div class="pull-right"></div>
                    <div class="media-body">
                      <p class="lv-body ng-binding c-red" ng-class="{'c-red':item.highlight}">
                        (1) 2023/10, Oct.: 
                        <span ng-bind-html="item.content" class="ng-binding">
                          Congurlations! We won the "Best Paper Award (Runner-up) " and "Graduate Award" at ACM MobiCom 2023.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2023_2 -->
              <div class="lv-item ng-scope" style="padding:5px 20px;" ng-repeat="item in items[year]">
                <div ng-include="'template/news.html'" class="ng-scope">
                  <div class="media ng-scope">
                    <div class="pull-right"></div>
                    <div class="media-body">
                      <p class="lv-body ng-binding c-red" ng-class="{'c-red':item.highlight}">
                        (2) 2023/14, September: 
                        <span ng-bind-html="item.content" class="ng-binding">
                          Congurlations! We won the "Best Paper Award " at IEEE SECON 2023.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
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
.t-view {
    border: 1px solid #eee;
    position: relative;
    margin-bottom: 35px;
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