<template>
  <div>
    <section class="banner">
        <!-- <img src="../assets/banner.jpg" alt="Banner"> -->
        
        <!-- 测试 -->
        <!-- <p>test</p> -->
    </section>
    <section class="cards">
        <Card v-for="item in articles" :key="item.id" :title="item.title" :content="item.content" />
    </section>
  </div>
</template>
  
<script>
  import Card from '@/components/Card.vue';
  
  export default {
    components: { Card },
    data() {
      return {
        articles: [
          { id: 1, title: '追寻大同市云州区的足迹', content: '内容简介...' },
          { id: 2, title: '新时代中国式现代化', content: '内容简介...' },
        ],
      };
    },
  };
</script>
  
<style scoped>
  .banner img {
    width: 100%;
    height: auto;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
  }
</style>
  