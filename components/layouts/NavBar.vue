<script setup lang="ts">
</script>

<template>
    <div class="navbar__container flex items-center place-content-between px-8">
        <div class="navbar__container__item flex items-center gap-8">
            <!-- <img class="w-7" src="/assets/icons/list.svg" alt=""> -->
            <AtomIconSvg :name="'IcList'" :height="30" :width="30"  fill="#4e4e4e" />
            
            <RouterLink to="/">
                <div class="logo">
                    <span>LD</span> LOADTEST
                </div>
            </RouterLink>
        </div>
        <div class="navbar__container__item flex items-center gap-4">
            <a href="#" class="link">
                <!-- <img class="w-4" src="/assets/icons/notify.svg" alt=""> -->
                <AtomIconSvg class="svgIcon" :name="'IcNotify'" :height="20" :width="20" fill="#000" />
            </a>
            <a href="#" class="link">
                <!-- <img class="w-5" src="/assets/icons/question.svg" alt=""> -->
                <AtomIconSvg class="svgIcon" :name="'IcQuestion'" :height="20" :width="20"  fill="#000" />
            </a>
            <a href="#" class="link">
                <!-- <img class="w-4" src="/assets/icons/user.svg" alt=""> -->
                <AtomIconSvg class="svgIcon" :name="'IcUser'" :height="20" :width="20"  fill="#000" />
            </a>
            <div class="btn flex items-center gap-4">
                <RouterLink to="/auth/login">
                    <button class="px-5 btn__fill">Sign In</button>
                </RouterLink>
                <RouterLink to="/auth/register">
                    <button class="px-5 btn__nofill">Register</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
    .navbar__container {
        height: 48px;
        background-color: #f5f3f3;
        position: fixed;
        top: 0;
        width: 100%;
        &__item {
            .logo {
                font-size: 22px;
                font-weight: 600;
                color: #918f8f;
                cursor: pointer;
                span {
                    color: #6656fc;
                    font-weight: 700;
                    font-size: 28px;
                }
            }

            .link {
                width: 28px;
                height: 28px;
                border-radius: 60px;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 0 1px rgb(35 38 59 / 5%), 0 1px 3px 0 rgb(35 38 59 / 15%);
            }

            .link:hover {
                color: #fff;
                background-color: #515151;
            }

            .link:hover .svgIcon {
                fill: #fff;
            }

            .btn {
                button {
                    font-size: 14px;
                    border-radius: 6px;
                    height: 32px;
                    font-weight: 600;
                }
                &__fill {
                    background-color: #6656fc;
                    color: #fff;
                }

                &__nofill {
                    background-color: #fff;
                    color: #6656fc;
                    border: 1px solid #6656fc;
                }
            }
        }
    }
</style>