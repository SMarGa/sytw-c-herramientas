export function clearNews() {
  const fetchButton = document.getElementById("fetchNewsButton");
  const clearButton = document.getElementById("clearNewsButton");
  const articlesContainer = document.getElementById("articlesContainer");

  articlesContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clearNewsButton");
  button.addEventListener("click", clearNews);
});
