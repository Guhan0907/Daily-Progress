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

function checkingTheLoading() {
  console.log("The page has been loaded successfully");
}