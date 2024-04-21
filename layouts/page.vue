
<template>
  <div>
    <LayoutsNavBar/>
    <LayoutsLeftNavbar/>
    <slot class="slot"/>
    <LayoutsFooter />
  </div>
</template>

<style lang="scss" scoped>
.slot {
margin-top: 100px;
margin-left: 100px;
height: 100vh;
}
</style>