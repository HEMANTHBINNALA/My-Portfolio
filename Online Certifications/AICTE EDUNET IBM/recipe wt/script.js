async function fetchRecipes() {
  try {
    const response = await fetch("recipes.json");
    return await response.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

async function findRecipe() {
  const input = document.getElementById("ingredients").value
    .toLowerCase()
    .split(",")
    .map(i => i.trim());

  const container = document.getElementById("recipe-result");
  container.innerHTML = "<p class='loading'>🔍 Searching recipes...</p>";

  const recipes = await fetchRecipes();

  const matches = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => input.includes(ingredient))
  );

  if (matches.length > 0) {
    container.innerHTML = matches.map(recipe => `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <img src="${recipe.image.src}" alt="${recipe.image.alt}" />
        <h4>Steps to Prepare:</h4>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
      </div>
    `).join("");
  } else {
    container.innerHTML = "<p>😕 No matching recipe found. Try different ingredients!</p>";
  }
}

async function loadFeaturedRecipes() {
  const container = document.getElementById("recipe-list");
  const recipes = await fetchRecipes();

  container.innerHTML = recipes.slice(0, 6).map(recipe => `
    <div class="recipe-card" onclick="showInstructions('${recipe.name.replace(/'/g, "\\'")}')">
      <img src="${recipe.image.src}" alt="${recipe.image.alt}" />
      <h3>${recipe.name}</h3>
    </div>
  `).join("");
}

async function showInstructions(recipeName) {
  const container = document.getElementById("recipe-result");
  const recipes = await fetchRecipes();
  const recipe = recipes.find(r => r.name === recipeName);

  if (recipe) {
    container.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.image.src}" alt="${recipe.image.alt}" />
      <h3>Steps to Prepare:</h3>
      <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    `;
    container.scrollIntoView({ behavior: "smooth" });
  } else {
    container.innerHTML = "<p>⚠️ Recipe not found.</p>";
  }
}

function addRecipe() {
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  if (isLoggedIn === "true") {
    window.location.href = "add-recipe.html";
  } else {
    alert("Please login to add a new recipe.");
    window.location.href = "login.html";
  }
}

window.onload = loadFeaturedRecipes;