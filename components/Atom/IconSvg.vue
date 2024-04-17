<template>
  <component :is="iconName" :active="$attrs.active" :id="id" :fill="fill" :width="width" :height="height"  />
</template>

<script setup lang="ts" >
    import { defineAsyncComponent } from 'vue'

    import {v4 as uuidv4} from 'uuid';
    const id = uuidv4()
    export interface Props {
        name?: string
        fill?: string
        width?: string | number
        height?: string | number
    }

    const props = withDefaults(defineProps<Props>(), {
        name: '',
        fill: 'currentColor',
        width: 18,
        height: 18  

    })

    const iconName = defineAsyncComponent(() =>
        import(`../../assets/icons/vue/${props.name}.vue`)
    )

    onMounted(() =>{
        console.log(iconName, "check")
    })

</script>

<style scoped lang="scss">
</style>



