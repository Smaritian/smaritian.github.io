var posts=["2025/03/18/hello-world/","2025/03/18/Hello-Hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };