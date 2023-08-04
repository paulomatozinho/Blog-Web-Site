// Grab elements
const selectElemento = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Algo de errado, verifique se ${selector} existe ou se foi digitado corretamente.`);
};

//Nav styles on scroll

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper