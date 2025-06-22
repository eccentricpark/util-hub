<template>
  <div class="drawer-wrapper">
    <!-- 우측 상단 햄버거 버튼 -->
    <header class="drawer-header">
      <button class="hamburger" @click="handleDrawer" aria-label="메뉴 열기/닫기">
        ☰
      </button>
    </header>
    
    <div :class="['drawer', { open: drawerOpen }]">
      <button class="close-btn" @click="handleDrawer">닫기</button>
      <p>여기에 입력하세요</p>
      <ul>
        <li @click="navigateTo('my-profile')">My Profile</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawerOpen = ref(false);
const router = useRouter();
function handleDrawer(){
  drawerOpen.value = !drawerOpen.value
}

// 라우터로 페이지 이동하는 함수
function navigateTo(routeName) {
  router.push({ name: routeName })
}

</script>

<style scoped>
.drawer-wrapper {
  position: relative;
}

.drawer-header {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 10px;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  text-align: end;
}

/* 햄버거 버튼 */
.hamburger {
  position: fixed;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

/* 서랍형 팝업 스타일 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  
  /* 초기 상태: 보이지 않음 */
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 1000;
}

.drawer.open {
  transform: translateX(0);
  opacity: 1;
}


.close-btn {
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;
  width: 120px;
  height: 40px;
}
.close-btn:active{
  border: 1px solid #000;
}
</style>