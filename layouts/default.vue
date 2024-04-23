<template>
    <LayoutsNavBar/>
    <div class="bg">
      <LayoutsLeftNavbar/>
      <div class="slot">
        <slot />
      </div>
    </div>
    
    <!-- <LayoutsFooter /> -->
</template>

<style lang="scss" scoped>
.bg {
  background-color: #eaecee;
  min-height: 100vh;
}
.slot {
  padding: 100px;
  padding-left: 100px;
}
</style>