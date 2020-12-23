<template>
  <div id="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created() {
    this.$once("hook:created", () => {
      console.log("VirtualDOM Replace RealDOM");
    });
    console.log("created over");
  }
};
</script>

<style lang="scss" src="./loading.scss"></style>