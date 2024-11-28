<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2024 我的马克思主义情怀 | 坚持中国特色社会主义 | 学习与传承马克思主义</p>
      <p>联系我们：<a href="mailto:example@example.com">example@example.com</a></p>
    </div>
    <div class="footer-links">
      <a href="#about">关于我们</a> | 
      <a href="#contact">联系我们</a> | 
      <a href="#terms">隐私政策</a>
    </div>
  </footer>
</template>
  
<script>
  export default {
    name: "Footer",
  };
</script>
  
<style scoped>
  .footer {
    background-color: #f2f2f2;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
    border-top: 1px solid #ddd;
  }
  
  .footer-content {
    margin-bottom: 10px;
  }
  
  .footer-links a {
    color: #0066cc;
    text-decoration: none;
    margin: 0 5px;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
</style>
  