fetch('/api/posts')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('posts');

    data.forEach(post => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 60)}...</p>`;
      
      div.onclick = () => {
        window.location.href = `post.html?id=${post.id}`;
      };

      container.appendChild(div);
    });
  });
