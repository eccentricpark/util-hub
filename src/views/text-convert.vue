<template>
  <div>
    <LeftDrawer>

    </LeftDrawer>
    <EnterDelete/>
    <div class="void-box"></div>
    <EnterRevive/>

    <div>
      <h4></h4>
    </div>
  </div>
</template>

<script setup>
import EnterDelete from '@/features/enter-delete/enter-delete.component.vue'
import EnterRevive from '@/features/enter-revive/enter-revive.component.vue'
import LeftDrawer from '@/components/left-drawer.component.vue'

</script>

<style scoped>
.void-box {
  height: 50px;
}
</style>