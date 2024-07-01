<template>
    <div class="container__btn">
        <button 
            class="btn"
            :class="{'btn__fill' : props.type === 'FILL', 
                    'btn__unFill' : props.type === 'UNFILL'}"
            >
            {{ props.title }}
        </button>
    </div>
</template>

<script setup lang="ts">   

const props = defineProps<{
    title: string
    type: string
}>()

</script>

<style scoped lang="scss">
.container__btn {

}

.btn {
    @include text-style(16px, 24px, 500, $Success-Base-White);
    height: 50px;
    cursor: pointer;
    min-width: 126px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    transition: box-shadow, background-image, background-color, transform;
    transition-duration: .1s;
    transition-timing-function: ease-in-out;
    box-shadow: 0 0 0 1px rgb(35 38 59 / 5%), 0 1px 3px 0 rgb(35 38 59 / 15%);
}

.btn__fill {
    background-color: $Primary-500;
}

.btn:hover {
    transform: scale(1.05);
}

.btn__unFill {
    color: $Primary-500;
    background-color: $Success-Base-White;
    border: 1px solid $Primary-500;
}

.btn__unFill:hover {
    background-color: $Primary-500;
    color: $Success-Base-White;
}

</style>