var posts=["posts/c44e.html","posts/5ea3.html","posts/43de.html","posts/6a89.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};