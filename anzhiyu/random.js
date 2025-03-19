var posts=["2025/03/18/Hello-Hexo/","2025/03/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };