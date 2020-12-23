<template>
  <div id="app">
    <loading :status="status"/>
   <!-- <money /> -->
   <button @click="handleLoadingDisplay">加载</button>
  </div>
</template>

<script>
import Loading from "@/components/loading/loading";
import Money from "@/components/money/money";

export default {
  name: "App",
  data() {
    return { status: true }
  },
  methods:{ 
    handleLoadingDisplay() {
      this.status = !this.status
    }  
  },
  components: { Loading, Money },
};
</script>
<style lang="scss" scoped>
@import "./LoadingButton.scss"
</style>