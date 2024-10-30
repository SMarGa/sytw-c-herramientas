// Import images
import burgerImg from "../images/burger.jpg";
import saladImg from "../images/salad.jpeg";
import pizzaImg from "../images/pizza.jpeg";
import dessertImg from "../images/dessert.jpeg";

const dataMock = [
  {
    title: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, and our special sauce, served on a toasted brioche bun. Comes with crispy fries.",
    img: burgerImg,
  },
  {
    title: "Mediterranean Salad",
    description:
      "Fresh mixed greens, cherry tomatoes, cucumber, red onions, Kalamata olives, and feta cheese, drizzled with our house-made vinaigrette.",
    img: saladImg,
  },
  {
    title: "Margherita Pizza",
    description:
      "Hand-stretched dough topped with San Marzano tomato sauce, fresh mozzarella, basil leaves, and extra virgin olive oil. Baked in our wood-fired oven.",
    img: pizzaImg,
  },
  {
    title: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries. A chocolate lover's dream.",
    img: dessertImg,
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
