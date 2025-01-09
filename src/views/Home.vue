<template>
    <div class="home">
      <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-sub-menu index="1">
          <template #title>地图相关</template>
          <el-menu-item index="/map">地图展示</el-menu-item>
          <el-menu-item index="/other">其他功能</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-menu>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
  
  export default {
    name: 'Home',
    components: {
      ElMenu,
      ElMenuItem,
      ElSubMenu,
    },
  };
  </script>
  
  <style scoped>
  .home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  </style>