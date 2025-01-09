<template>
  <el-container class="sidebar-layout">
    <!-- 顶部栏 -->
    <el-header class="header">
      <div class="header-title">我的地图应用</div>
      <el-input
        v-model="searchQuery"
        placeholder="请输入搜索内容"
        class="search-input"
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          <el-icon><search /></el-icon>
        </template>
      </el-input>
    </el-header>

    <el-container>
      <!-- 侧边导航栏 -->
      <el-aside width="200px">
        <el-menu
          class="sidebar-menu"
          default-active="1"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleMenuSelect"
        >
          <el-menu-item index="1">
            <el-icon><location /></el-icon>
            <span>地图展示</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><setting /></el-icon>
            <span>设置</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>文档</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 右侧内容面板 -->
      <el-main class="content-panel">
        <component :is="currentComponent" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from 'vue';
import { Location, Setting, Document, Search } from '@element-plus/icons-vue';
import MapPage from './MapPage.vue';
import SettingsPage from './SettingsPage.vue';
import DocumentsPage from './DocumentsPage.vue';

export default {
  name: 'SidebarLayout',
  components: {
    Location,
    Setting,
    Document,
    Search,
  },
  setup() {
    const currentComponent = ref(MapPage); // 默认显示地图页面
    const searchQuery = ref(''); // 搜索框内容

    const handleMenuSelect = (index) => {
      switch (index) {
        case '1':
          currentComponent.value = MapPage;
          break;
        case '2':
          currentComponent.value = SettingsPage;
          break;
        case '3':
          currentComponent.value = DocumentsPage;
          break;
        default:
          currentComponent.value = MapPage;
      }
    };

    const handleSearch = () => {
      console.log('搜索内容:', searchQuery.value);
      // 在这里实现搜索逻辑
    };

    return {
      currentComponent,
      searchQuery,
      handleMenuSelect,
      handleSearch,
    };
  },
};
</script>

<style scoped>
/* 根容器占满视口 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* 禁止页面滚动 */
}

.sidebar-layout {
  height: 100vh; /* 占满视口高度 */
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #409eff;
  color: #fff;
  padding: 0 20px;
  height: 60px; /* 固定高度 */
  flex-shrink: 0; /* 防止压缩 */
}

.header-title {
  font-size: 20px;
  font-weight: bold;
}

.search-input {
  width: 300px;
}

.sidebar-menu {
  height: 100%;
}

.content-panel {
  flex: 1; /* 占满剩余空间 */
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto; /* 允许内容区域滚动 */
}

/* 地图页面样式 */
.map-container {
  width: 100%;
  height: 100%; /* 占满父容器 */
}
</style>