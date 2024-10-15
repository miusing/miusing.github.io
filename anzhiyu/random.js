var posts=["《一起用AI学Python编程》课程介绍/","为什么要读书？——探索阅读的真正意义与价值/","《一起用AI学Python编程》都有啥服务？/","用 AI 学 Python 编程：从入门到进阶的成长路线/","第一章《价格行为基础知识-图表基础》/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };