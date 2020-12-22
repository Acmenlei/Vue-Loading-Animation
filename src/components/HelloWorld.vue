<template>
<div id="hello">
    {{name}}
    <button @click="handleClick">handle</button>
</div>
</template>
    
<script>
export default {
    name:'helloworld',
    data() {
        return {
            name:"jxl"
        }
    },
    methods:{
        handleClick() {
            this.name = 'update'
        }
    }
}
</script>

<style lang="scss" src="../index.scss"></style>