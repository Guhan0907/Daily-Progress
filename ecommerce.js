function incrementCart() {
  const cartCount = document.getElementById("cartValues");
  let currentCount = Number(cartCount.textContent);
  cartCount.textContent = currentCount + 1;
  console.log("Button Pressed");
}
console.log("Script loaded successfully");

if(document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    // const addToCartBtn = document.querySelectorAll('addToCart');
    const addToCartBtn = document.getElementById("checking");
    //  addToCartBtn.addEventListener('click', incrementCart);
    console.log(addToCartBtn);

    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", incrementCart);
      console.log("Button Pressing");
    }
  });
}
// if (document.readyState === "loaded") {
//   document.addEventListener("DOMContentLoaded", function () {
//     // const addToCartBtn = document.querySelectorAll('addToCart');
//     const addToCartBtn = document.getElementById("checking");
//     //  addToCartBtn.addEventListener('click', incrementCart);
//     console.log(addToCartBtn);

//     if (addToCartBtn) {
//       addToCartBtn.addEventListener("click", incrementCart);
//       console.log("Button Pressed");
//     } 
//   });
// }



if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded" , function() {
    const addButton = document.getElementById("addToCartOption");
    console.log(addButton);

    if (addButton) {
      addButton.addEventListener("click", incrementCart)
      console.log("Button la oru try")
    }
  })
}




function handleSubmitBtn() {
  // console.log("handleSubmitBtn function called");
  const inputField = document.getElementById('inputField');
  const submitButton = document.getElementById('submitBtn');

  if (inputField && submitButton) {
    // console.log("Input field and submit button found!");

    submitButton.addEventListener('click', function() {
      const inputValue = inputField.value;
      console.log("User entered:", inputValue);
    });
  } 
  
  else {
    console.error("Error: Could not find one or both of the required elements (inputField or submitBtn).");
  }
}

function consoleValue() {
  console.log("consoleValue function called");
}

// trying the loops in js

// var count = 0;

// function countSelected(selectObject) {
//   let numberSelected = 0;
//   for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// var count = 0;
// const btn = document.getElementById("countBtn");
// const musicSelectTypes = document.getElementById("musicTypes");
// const val = document.getElementById("selectedCountDisplay")

// document.addEventListener("DOMContentLoaded", function () {
//   count = musicSelectTypes.selectedOptions.length;

//   if (val) {
//     val.textContent = count;
//   }
//   console.log("Initial selected count:", count); 
// })

// let selectedOptionsCount = 0;

// // Get references to the HTML elements
// const musicTypesSelect = document.getElementById('musicTypes');
// const selectedCountDisplay = document.getElementById('selectedCountDisplay');
// const countButton = document.getElementById('countBtn'); // Get the button too if needed later


// // Ensure the DOM is fully loaded before trying to access elements
// document.addEventListener('DOMContentLoaded', function() {

//     // Initialize display with current count of selected options on load
//     // This is important because "R&B" is selected by default in your HTML
//     selectedOptionsCount = musicTypesSelect.selectedOptions.length;
//     if (selectedCountDisplay) {
//         selectedCountDisplay.textContent = selectedOptionsCount;
//     }
//     console.log("Initial selected count:", selectedOptionsCount);


//     // Add an event listener to the <select> element for the 'change' event
//     // The 'change' event fires when the selection has been committed (e.g., user clicks off, or tab away)
//     // For multiple select, it fires immediately when an option is clicked.
//     if (musicTypesSelect) {
//         musicTypesSelect.addEventListener('change', function() {
//             // Get the current number of selected options
//             // musicTypesSelect.selectedOptions returns a HTMLCollection of all selected <option> elements
//             selectedOptionsCount = musicTypesSelect.selectedOptions.length;

//             // Update the display in the HTML
//             if (selectedCountDisplay) {
//                 selectedCountDisplay.textContent = selectedOptionsCount;
//             }

//             // Print the updated count to the console
//             console.log("Selected options count increased to:", selectedOptionsCount);
//         });
//     } else {
//         console.error("Error: 'musicTypes' select element not found.");
//     }

//     // You can also still use your original button to explicitly log the count
//     if (countButton) {
//         countButton.addEventListener('click', function() {
//             console.log("Button clicked. Current selected count:", selectedOptionsCount);
//         });
//     }

// }); // End of DOMContentLoaded



function checkingTheLoading() {
  // console.log("The page has been loaded successfully");
const my = ['val' , 78 , 'checking']
const[ck , ...ty] = my;
console.log(ty)
}

