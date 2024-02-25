<template>
  <ul class="tab-nav tn-justified">
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.about" href="/">
            About
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.new" href="/new">
            News
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.award" href="/award">
            AWARDS
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.publication" href="">
            PUBLICATIONS
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.service" href="/service">
            SERVICES
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.fund" href="/fund">
            FUNDS
        </a>
    </li>
    <li class="btn-wave active" data-ui-sref-active="active">
        <a data-ui-sref="components.pmBody.team" href="/team">
            TEAM
        </a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tab-nav:not(.tn-vertical) {
  white-space: nowrap;
  overflow: auto;
  box-shadow: inset 0 -2px 0 0 #eeeeee;
  width: 100%;
}
.tab-nav:not(.tn-vertical).tn-justified > li {
  display: table-cell;
  width: 1%;
  text-align: center;
}
.tab-nav:not(.tn-vertical) > li {
  /* display: inline block; */
  vertical-align: top;
}
.tab-nav:not(.tn-vertical) > li.active > a {
  color: #000;
}
.tab-nav:not(.tn-vertical) > li > a {
  transition: all;
}
.tab-nav > li > a {
  display: block;text-transform: uppercase;
  position: relative;
  font-weight: 500;
}
@media (min-width: 768px) {
  .tab-nav > li > a {
    padding: 15px;
  }
}
</style>