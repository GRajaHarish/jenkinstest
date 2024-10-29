
//toggle switch 
const tableWrapper = document.querySelector(".carousel-inner");

const switchInputs = document.querySelectorAll(".switch-wrapper input");
const prices = tableWrapper.querySelectorAll(".prices");
const toggleClass = "hide";

for (const switchInput of switchInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of prices) {
      price.classList.add(toggleClass);
    }
    const activePrices = tableWrapper.querySelectorAll(
      `.prices.${switchInput.id}`
    );
    console.log("varyrha",activePrices)
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggleClass);
    }
  });
}

//desktop toggle switch 
const desktopWrapper = document.querySelector(".main-memebership");

const switchDeskInputs = document.querySelectorAll(".switch-wrapper input");
const desktopprices = desktopWrapper.querySelectorAll(".prices");
const toggledesktopClass = "hide";

for (const switchInput of switchDeskInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of desktopprices) {
      price.classList.add(toggledesktopClass);
    }
    const activePrices = desktopWrapper.querySelectorAll(
      `.prices.${switchInput.id}`
    );

    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggledesktopClass);
    }
  });
}





// For modal

const modalWrapper = document.querySelector(".modal-carousel");
const modalSwitchInputs = document.querySelectorAll(".modal-switch-wrapper input");
const modalprices = modalWrapper.querySelectorAll(".modalPrice");
const toggle = "hide";

for (const modalSwitchInput of modalSwitchInputs) {
  modalSwitchInput.addEventListener("input", function () {
    for (const modalprice of modalprices) {
      modalprice.classList.add(toggle);
    }
    const activePrices = modalWrapper.querySelectorAll(
      `.modalPrice.${modalSwitchInput.id}`
    );
    console.log("varyrha",activePrices)
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggle);
    }
  });
}

// //toggle switch 
// const tableWrapper = document.querySelector(".carousel-inner");

// const switchInputs = document.querySelectorAll(".switch-wrapper input");
// const prices = tableWrapper.querySelectorAll(".prices");
// const toggleClass = "hide";

// for (const switchInput of switchInputs) {
//   switchInput.addEventListener("input", function () {
//     for (const price of prices) {
//       price.classList.add(toggleClass);
//     }
//     const activePrices = tableWrapper.querySelectorAll(
//       `.prices.${switchInput.id}`
//     );
//     console.log("varyrha",activePrices)
//     for (const activePrice of activePrices) {
//       activePrice.classList.remove(toggleClass);
//     }
//   });
// }



