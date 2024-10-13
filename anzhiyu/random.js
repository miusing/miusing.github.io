var posts=["为什么要读书？——探索阅读的真正意义与价值/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };