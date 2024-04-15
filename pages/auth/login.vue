<script setup lang="ts">
    definePageMeta({ layout: 'default' })
    
</script>

<template>
    <div class="login">
        <div class="login__container ">
            <h1 class="text-base text-center">Sign in to your account</h1>
            <div class="login__container__btn flex items-center gap-5 justify-center mt-3">
                <img src="/assets/images/google.png" alt="" class="w-8">
                <span class="text-base font-semibold">Continue with Google</span>
            </div>
            <div class="login__container__btn flex items-center justify-center gap-5 mt-4">
                <img src="/assets/images/github.png" alt="" class="w-8">
                <span class="text-base font-semibold">Continue with Github</span>
            </div>
            <div class="login__container__other my-6 text-center">
                <p>Or, sign in with email</p>
            </div>
            <form class="login__container__form">
                <div class="inp">
                    <p>Email</p>
                    <input placeholder="Your email address" type="text">
                </div>
                <div class="inp">
                    <p>Password</p>
                    <input placeholder="Your password" type="text">
                </div>
                <router-link :to="`/`" class="login__container__forgot">Forgot your password?</router-link>
            </form>
        </div>
    </div>
</template>


<style scoped lang="scss">
.login {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    &__container {
        box-shadow: 0 1px 6px 1px transparent, 0 1px 2px 0 transparent;
        padding: 48px;
        background-color: #fff;
        border-radius: 12px;
        width: 400px;

        &__btn {
            border-radius: 20px;
            border: 1px solid #ccc;
            height: 44px;
            cursor: pointer;
        }

        &__other {
            
        }
    }
}
</style>