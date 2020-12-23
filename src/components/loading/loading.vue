<template>
  <div id="loading" v-show="status">
    <div class="layer"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    status: { type: Boolean, default: false },
  }
};
</script>

<style lang="scss" src="./loading.scss"></style>