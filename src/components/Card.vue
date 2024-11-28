<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <router-link to="/article">阅读更多</router-link>
  </div>
</template>
  
<script>
  export default {
    props: ['title', 'content'],
  };
</script>
  
<style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: calc(33% - 1rem);
  }
</style>
  