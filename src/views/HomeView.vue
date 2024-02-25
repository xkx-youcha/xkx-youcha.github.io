<template>
  <div>
    <div style="padding-top: 10px; display: block; background-color: transparent;">
      <div class="page-view">
        <div class="contain">
          <block-header />
          <card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blockHeader from '@/components/blockHeader.vue'
import Card from '@/components/card.vue'
export default {
  components: { blockHeader, Card },

}
</script>

<style>
.page-view {
  display: block;
  padding-left: 15px;
  padding-right: 15px;
}
.contain {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 992px) {
  .contain {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .contain {
    width: 100%;
  } 
}
@media (min-width: 1200px) {
  .contain {
    width: 1170px;
  }
}
</style>