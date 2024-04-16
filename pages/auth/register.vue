<script setup lang="ts">
    definePageMeta({ layout: 'default' })
    
</script>

<template>
    <div class="login">
        <div class="login__container ">
            <h1 class="text-base text-center">create your account</h1>
            <div class="login__container__btn flex items-center gap-5 justify-center mt-3">
                <img src="/assets/images/google.png" alt="" class="w-8">
                <span class="text-base font-semibold">Continue with Google</span>
            </div>
            <div class="login__container__btn flex items-center justify-center gap-5 mt-4">
                <img src="/assets/images/github.png" alt="" class="w-8">
                <span class="text-base font-semibold">Continue with Github</span>
            </div>
            <div class="login__container__other my-6 text-center flex items-center justify-around" >
                <span ></span>
                <p class="text-sm">Or, sign up with email</p>
                <span></span>
            </div>
            <form class="login__container__form">
                <div class="inp">
                    <p class="mb-1">Email</p>
                    <input class="h-11 w-full outline-none p-2 px-4 border-solid border-gray-600 rounded-md" placeholder="Your email address" type="text">
                </div>
                <div class="inp">
                    <p class="mt-3 mb-1">Password</p>
                    <input class="h-11 w-full outline-none p-2 px-4 rounded-md" placeholder="Your password" type="text">
                </div>
                <div class="inp">
                    <p class="mt-3 mb-1">Confirm password </p>
                    <input class="h-11 w-full outline-none p-2 px-4 rounded-md" placeholder="Confirm your password" type="text">
                </div>

                <button class="login__container__submit mt-10 w-full p-3 text-center font-semibold rounded-md text-base">Sign Up</button>

                <div class="login__container__create flex gap-3 mt-6">
                    <span class="text-base">If you have a LoadTesting account</span>
                    <router-link :to="`/auth/login`"class="sign__up font-semibold cursor-pointer">Sign Up</router-link>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped lang="scss">
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
    &__container {
        box-shadow: 0 15px 35px 0 rgb(60 66 87 / 8%), 0 5px 15px 0 rgb(0 0 0 / 12%);
        padding: 48px 48px 40px 48px;
        border-radius: 12px;
        width: 460px;

        &__btn {
            border-radius: 20px;
            border: 1px solid #ccc;
            height: 44px;
            cursor: pointer;
        }

        &__other {
            span {
                height: 1px;
                background-color: #ddd;
                width: 80px;
            }
        }

        &__form {
            .inp {
                input {
                    border: 1px solid #ccc;
                }
            }
        }

        &__submit {
            background-color: #6656fc;
            color: #fff;
        }

        &__create {
            .sign__up {
                color: #6656fc;
            }
        }
    }
}
</style>