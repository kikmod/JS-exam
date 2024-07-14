document.addEventListener('DOMContentLoaded', () => {
  const meal = JSON.parse(localStorage.getItem('mealDetails'));
  if (!meal) {
    alert('No meal details found!');
    window.location.href = 'index.html'; // Redirect to index.html if no meal details are found
    return;
  }

  const mealImage = document.getElementById('mealImage');
  const mealName = document.getElementById('mealName');
  const mealInstructions = document.getElementById('mealInstructions');
  const mealArea = document.getElementById('mealArea');
  const mealCategory = document.getElementById('mealCategory');
  const mealRecipes = document.getElementById('mealRecipes');
  const mealTags = document.getElementById('mealTags');

  mealImage.src = meal.strMealThumb;
  mealName.textContent = meal.strMeal;
  mealInstructions.textContent = meal.strInstructions;
  mealArea.textContent = meal.strArea;
  mealCategory.textContent = meal.strCategory;
  mealRecipes.textContent = `${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ...`; // Add more ingredients as needed
  mealTags.textContent = meal.strTags;
});
