var posts=["第一章《价格行为基础知识-图表基础》/","为什么要读书？——探索阅读的真正意义与价值/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };