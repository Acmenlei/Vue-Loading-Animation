<template>
  <div id="hello">
    {{ value }}
  </div>
</template>
    
<script>
export default {
  name: "helloworld",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleClick: function () {
      this.name = this.value;
    },
  },
};
</script>

<style lang="scss" src="../index.scss"></style>