<template>
    <div>
      <!-- 页面顶部装饰图片 -->
      <div class="header-banner">
        <!-- <img src="@/assets/town-banner.jpg" alt="黄花之乡" /> -->
      </div>
  
      <!-- 主要内容区域 -->
      <section class="town-content">
        <h1>黄花之乡</h1>
        <p class="intro">黄花之乡，位于云州区，是一个充满生机与活力的地方，因盛产黄花而得名。这里的黄花不仅美丽，还代表着这里的文化和精神。</p>
        
        <div class="town-details">
          <div class="town-text">
            <h2>黄花的历史</h2>
            <p>
              黄花是云州区最具代表性的植物之一。这里的黄花有着悠久的种植历史，从古至今，黄花不仅是当地的特产，也是当地文化的重要组成部分。
            </p>
          </div>
          <div class="town-image">
            <img src="@/assets/town-image1.jpg" alt="黄花景色" />
          </div>
        </div>
  
        <div class="town-details">
          <div class="town-text">
            <h2>黄花的文化意义</h2>
            <p>
              在云州区，人们对黄花的喜爱早已超越了植物的范畴，它代表着勤劳、坚韧与美丽，融入了当地的民俗、节庆以及人们的日常生活。
            </p>
          </div>
          <div class="town-image">
            <img src="@/assets/town-image2.jpg" alt="黄花文化" />
          </div>
        </div>
  
        <div class="town-details">
          <div class="town-text">
            <h2>黄花产业的未来</h2>
            <p>
              近年来，随着人们对生态环保的重视，黄花产业逐渐发展成为云州区的重要经济支柱。种植、加工和观光旅游都带动了当地的经济增长，黄花之乡正在走向更加辉煌的未来。
            </p>
          </div>
          <div class="town-image">
            <!-- <img src="@/assets/town-image3.jpg" alt="黄花产业" /> -->
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Town",
  };
  </script>
  
  <style scoped>
  /* 装饰图片样式 */
  .header-banner img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* 主要内容样式 */
  .town-content {
    padding: 2rem;
    font-family: "微软雅黑", sans-serif;
    background-color: #f7f7f7;
    color: #333;
  }
  
  .town-content h1 {
    font-size: 2.5rem;
    color: #d50000;
    margin-bottom: 1rem;
  }
  
  .town-content .intro {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .town-details {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    justify-content: space-between;
  }
  
  .town-text {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .town-image {
    flex: 1;
  }
  
  .town-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .town-details {
      flex-direction: column;
    }
  }
  </style>
  