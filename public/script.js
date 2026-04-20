const posts = [
  {
    id: 1,
    title: "Sunset in Goa",
    image: "https://picsum.photos/400/300?beach",
    content: "Golden sunsets and peaceful waves..."
  },
  {
    id: 2,
    title: "Tokyo Nights",
    image: "https://picsum.photos/400/300?city",
    content: "Neon lights and endless energy..."
  },
  {
    id: 3,
    title: "Paris Streets",
    image: "https://picsum.photos/400/300?paris",
    content: "Romantic walks and cafes..."
  },
  {
    id: 4,
    title: "Mountains of Himachal",
    image: "https://picsum.photos/400/300?mountain",
    content: "Cold winds and scenic beauty..."
  }
];

const container = document.getElementById("posts");

posts.forEach((post, i) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${post.image}">
    <div class="card-content">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>
  `;
  container.appendChild(div);

  setTimeout(() => div.classList.add("visible"), i * 200);
});
