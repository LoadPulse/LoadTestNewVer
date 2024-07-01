<script setup lang="ts">
</script>

<template>
    <div class="navbar__container flex items-center place-content-between px-8">
        <div class="navbar__container__item flex items-center gap-8">
            <AtomIconSvg :name="'IcList'" :height="30" :width="30"  fill="#4e4e4e" />
            <RouterLink to="/">
                <div class="logo">
                    <span>LP</span> LOADPULSE
                </div>
            </RouterLink>
        </div>
        <div class="navbar__container__item flex items-center gap-4">
            <a href="#" class="link">
                <AtomIconSvg class="svgIcon" :name="'IcNotify'" :height="20" :width="20" fill="#000" />
            </a>
            <a href="#" class="link">
                <AtomIconSvg class="svgIcon" :name="'IcQuestion'" :height="20" :width="20"  fill="#000" />
            </a>
            <a href="#" class="link">
                <AtomIconSvg class="svgIcon" :name="'IcUser'" :height="20" :width="20"  fill="#000" />
            </a>
            <div class="btn flex items-center gap-4">
                <RouterLink to="/auth/login">
                    <CommonUiKitBaseButton 
                        :type="'FILL'"
                        :title="'Login'"
                    />
                </RouterLink>
                <RouterLink to="/auth/register">
                    <CommonUiKitBaseButton 
                        :type="'UNFILL'"
                        :title="'Register'"
                    />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
    .navbar__container {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        height: 78px;
        background-color: #ffff;
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
                    color: $Primary-500;
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
        }
    }
</style>