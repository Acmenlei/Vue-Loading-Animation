<template>
  <div id="app">
    <hello-world />
   <!-- <money /> -->
  </div>
</template>
    
<script>
import HelloWorld from "@/components/loading/loading";
import money from "@/components/money/money";
export default {
  name: "App",
  components: { HelloWorld, money },
};
</script>