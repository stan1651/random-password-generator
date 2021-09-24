function pickFood() {
  var pick;
  var vegetables = [
    "Carrots",
    "Roasted Brussel Sprouts",
    "Cucumber",
    "Kale Chips",
  ];
  var fruits = [
    "Apples",
    "Bananas",
    "Strawberries",
    "Watermelon",
    "Kiwi",
    "Tomatoes",
  ];
  var sweets = ["Donuts", "Cupcakes", "Ice Cream", "Cookies", "Pie"];

  // container for selected foods
  var foodOptions = [];

  // confirm if vegetables should be included
  if (confirm("Include vegetables?")) {
    // add vegetables to foodOptions
    foodOptions = foodOptions.concat(vegetables);
  }

  // confirm if fruits should be included
  if (confirm("Include fruits?")) {
    foodOptions = foodOptions.concat(fruits);
  }

  // confirm if sweets should be included
  if (confirm("Include sweets?")) {
    foodOptions = foodOptions.concat(sweets);
  }

  if (foodOptions.length === 0) {
    alert("You must choose at least one food!");
    return pickFood();
  }

  // if food options is not empty
  // pick random item from foodOptions
  pick = foodOptions[Math.floor(Math.random() * foodOptions.length)];

  // display random pick
  showFood(pick);
}

pickFood();

function showFood(food) {
  var foodEl = document.createElement("h1");
  foodEl.textContent = "Your snack of the day is " + food + "!";
  document.body.appendChild(foodEl);
}
