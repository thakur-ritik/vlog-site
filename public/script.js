<!DOCTYPE html>
<html>
<head>
  <title>Post</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="post-page">
  <img id="image" />
  <h1 id="title"></h1>
  <p id="content"></p>
</div>

<script>
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`/api/posts/${id}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("title").innerText = data.title;
    document.getElementById("content").innerText = data.content;
    document.getElementById("image").src = data.image;
  });
</script>

</body>
</html>
