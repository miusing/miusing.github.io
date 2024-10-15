var posts=["用 AI 学 Python 编程：从入门到进阶的成长路线/","为什么要读书？——探索阅读的真正意义与价值/","第一章《价格行为基础知识-图表基础》/","《一起用AI学Python编程》都有啥服务？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };