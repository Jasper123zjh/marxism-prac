<template>
  <div>
    <!-- 装饰图片 -->
    <div class="header-banner">
      <img src="@/assets/banner.png" alt="Banner" />
    </div>
    
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
        我的马克思主义情怀
      </div>
      <ul class="nav-links">
        <li :class="{ active: isActive('/') }">
          <router-link to="/">网站首页</router-link>
        </li>
        <li :class="{ active: isActive('/walk') }">
          <router-link to="/walk">走进云州</router-link>
        </li>
        <li :class="{ active: isActive('/town') }">
          <router-link to="/town">黄花之乡</router-link>
        </li>
        <li :class="{ active: isActive('/character') }">
          <router-link to="/character">特色产业</router-link>
        </li>
        <li :class="{ active: isActive('/folk') }">
          <router-link to="/folk">民俗民生</router-link>
        </li>
        <li :class="{ active: isActive('/economics') }">
          <router-link to="/economics">经济发展</router-link>
        </li>
        <li :class="{ active: isActive('/tour') }">
          <router-link to="/tour">旅游观光</router-link>
        </li>
      </ul>
      <div class="search-box">
        <input type="text" placeholder="搜索" />
        <button>搜索</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route; // 判断当前路由是否匹配
    },
  },
};
</script>

<style scoped>
/* 装饰图片样式 */
.banner {
  width: 100%; /* 宽度覆盖整个屏幕 */
  height: auto; /* 高度自适应 */
  overflow: hidden; /* 隐藏超出部分 */
  position: relative; /* 相对定位，用于放置覆盖层或其他元素 */
}

.banner img {
  width: 100%; /* 图片宽度覆盖整个banner */
  height: auto; /* 高度自适应 */
  display: block; /* 块级元素，去除默认的内边距 */
}

/* 导航栏整体样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d50000; /* 红色背景 */
  color: white;
  padding: 0.5rem 2rem;
  font-family: "微软雅黑", sans-serif;
}

/* Logo 部分样式 */
.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-img {
  height: 50px;
  margin-right: 10px;
}

/* 导航链接样式 */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  font-size: 1rem;
  position: relative; /* 为了实现激活状态的下划线 */
}

.nav-links a {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

/* 鼠标悬停样式 */
.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 当前页面的激活状态 */
.nav-links .active a {
  font-weight: bold;
  color: #ffcccb;
}

.nav-links .active::after {
  content: '';
  position: absolute;
  bottom: -3px; /* 下划线距离文字的间距 */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffcccb;
}

/* 搜索框样式 */
.search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-box input {
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
}

.search-box button {
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: #d50000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-box button:hover {
  background-color: #f8d7da;
}
</style>
