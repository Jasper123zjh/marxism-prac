<template>
  <div>

    <!-- 测试 -->
    <!-- <p>测试：这是一个 Vue 应用！</p> -->

    <Navbar />
    <router-view /> 
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>
