const fetchMeals = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    displayMeals(data.meals);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById('meals');
  mealsContainer.innerHTML = ''; 

  if (meals) {
    meals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('col-md-3', 'meal-card');

      mealCard.innerHTML = `
        <div class="card">
          <div class="card-img-overlay">
            <div class="food-name">${meal.strMeal}</div>
          </div>
          <img src="${meal.strMealThumb}" class="w-100" alt="${meal.strMeal}">
        </div>
      `;

      mealCard.addEventListener('click', () => {
        localStorage.setItem('mealDetails', JSON.stringify(meal));
        window.location.href = 'mealDetails.html'; 
      });

      mealsContainer.appendChild(mealCard);
    });
  } else {
    mealsContainer.innerHTML = '<p class="text-center">No meals found.</p>';
  }
};

document.addEventListener('DOMContentLoaded', fetchMeals);

const menuBtn = document.getElementById('menu-btn');
const sid11 = document.querySelector('.sid11');
const sidebar = document.getElementById('sidebar');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
const searchPage = document.getElementById('searchPage');
const backToMealsBtn = document.getElementById('backToMeals');

menuBtn.addEventListener('click', () => {
  sid11.classList.toggle('open');
  sidebar.classList.toggle('open');
  
  if (sid11.classList.contains('open')) {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>'; 
  } else {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

sidebarCloseBtn.addEventListener('click', () => {
  sid11.classList.remove('open');
  sidebar.classList.remove('open');
  menuBtn.innerHTML = '<i class="fas fa-bars"></i>'; 
});

const searchLink = document.querySelector('#nav-links .nav-link:first-child');
searchLink.addEventListener('click', () => {
  meals.style.display = 'none';
  searchPage.style.display = 'block';
});

backToMealsBtn.addEventListener('click', () => {
  meals.style.display = 'block';
  searchPage.style.display = 'none';
});
