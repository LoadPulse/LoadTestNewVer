<script lang="ts" setup>
    const route = useRoute();
    const checkRoute = ref('')
    onMounted(() => {
        checkRoute.value = route.path
        console.log(checkRoute.value, "check")
    })
</script>

<template>
    <div class="leftNav__container w-20 h-screen ">
        <router-link :class="{ active: route.path === '/test' }"  to="/test" class="leftNav__container__item p-4 flex items-center justify-center flex-col cursor-pointer">
            <AtomIconSvg :name="'IcBar'" :height="28" :width="28"  />
            <p class="text-xs font-bold mt-1">Tests</p>
        </router-link>
        <router-link :class="{ active: route.path === '/addTest' }" to="/addTest" class="leftNav__container__item  p-3 flex items-center justify-center flex-col cursor-pointer">
            <AtomIconSvg :name="'IcAdd'" :height="28" :width="28" fill="#000"  />
            <p class="text-xs font-bold mt-1">Add test</p>
        </router-link>
        <router-link :class="{ active: route.path === '/integration' }" to="/integration" class="leftNav__container__item p-4 flex items-center justify-center flex-col cursor-pointer">
            <AtomIconSvg :name="'IcSetting'" :height="28" :width="28" fill="#000"  />
            <p class="text-xs font-bold mt-1">Integrations</p>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>

.leftNav__container {
    position: fixed;
    left: 0;
    background-color: #f5f3f3;

    &__item:hover {
        background-color: #e0dfdf;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .active {
        background-color: #e0dfdf;
        border-right: 5px solid #6056fc;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
}



</style>