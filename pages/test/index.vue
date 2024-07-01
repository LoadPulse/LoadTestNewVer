<template>
    <div class="contain">
        <CommonUiKitBaseButton 
            :type="fill"
            :title="title"
        />
    </div>
</template>

<script setup lang="ts" >
const fill = ref('FILL');
const title = ref('Login')

</script>

<style lang="scss" scoped>
.contain {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #fff;
}
</style>