const dataMock = [
  {
    title: "Burger",
    description:
      "A juicy beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and onions, served on a toasted sesame seed bun. Our signature burger is cooked to perfection and comes with a side of golden french fries.",
    img: "images/img1.jpeg",
  },
  {
    title: "Menu",
    description:
      "Our menu features a delicious selection of handcrafted dishes made with fresh, high-quality ingredients. From juicy burgers and crispy fries to fresh salads and homemade desserts, there's something for everyone. Our chefs take pride in preparing each dish with care and attention to detail. Come experience our warm atmosphere and exceptional food that will keep you coming back for more.",
    img: "images/img2.jpeg",
  },
];

export function displayNews() {
  const newsContainer = document.getElementById("articlesContainer");
  newsContainer.innerHTML = "";

  dataMock.forEach((data, index) => {
    const newsHTML = `
            <div class="article">
                <img src="${data.img}" class="poster">
                <h3 class="title">${data.title}</h3>
                <p>${data.description}</p>
            </div>
        `;
    newsContainer.innerHTML += newsHTML;
  });
}

// Add this at the bottom of the file
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("fetchNewsButton");
  console.log("Calling displayNews");
  button.addEventListener("click", displayNews);
});
