let minPrice = 500;
let maxPrice = 3000;

function updatePriceRange(min, max) {
    minPrice = min;
    maxPrice = max;

    console.log("Minimum Price: ₹" + minPrice);
    console.log("Maximum Price: ₹" + maxPrice);
    console.log("Selected Range: ₹" + minPrice + " - ₹" + maxPrice);
}

updatePriceRange(1000, 4000);
updatePriceRange(1500, 3500);