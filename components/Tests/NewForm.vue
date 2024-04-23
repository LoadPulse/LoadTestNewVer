<template>
    <div class="container__new container__base">
        <div class="container__new__left flex flex-col">
            <div class="container__new__left__header flex items-center gap-2">
                <AtomIconSvg :name="'IcChart'" :height="14" :width="14" fill="#000"/>
                <span class="font-bold">IMPROVE YOUR SITE EXPERIENCE</span>
            </div>
            <h1 class="container__new__left__title font-bold text-4xl my-5">
                Page Speed Monitoring
            </h1>
            <p class="text-sm font-bold">List of all Page Speed Monitoring Tests. Filter tests by name.</p>
        </div>
        <div class="container__new__right">
            <button class="flex items-center gap-4 btn__primary">
                <AtomIconSvg :name="'IcAddTest'" :height="20" :width="20" fill="#fff" />
                <span>NEW TEST</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container__new {
    
    &__left {
        text-align: left;
        &__header {
            span {
                font-size: 16px;
                color: #682bd5;
            }
        }
    }

    &__right {
        
    }
}
</style>