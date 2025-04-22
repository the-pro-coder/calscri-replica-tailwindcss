document.addEventListener("DOMContentLoaded", ()=>
{
    // Your code goes here
    const hamburgerBtn = document.getElementById("hamburger-button");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const cardContainer = document.getElementById("card-container");
    const dropdownArrowDown = document.getElementById("dropdown-arrow-down");
    const dropdownArrowUp = document.getElementById("dropdown-arrow-up");
    const dropdownMenu = document.getElementById("dropdown");
    hamburgerBtn.addEventListener("click", ()=>{
        hamburgerBtn.classList.toggle("hamburger-button-open");
        hamburgerMenu.classList.toggle("hidden");
        hamburgerMenu.classList.toggle("flex");
        cardContainer.classList.toggle("problem-card");
        cardContainer.classList.toggle("problem-card-adapted");
    });
    dropdownMenu.addEventListener("click", ()=>
    {
        dropdownArrowDown.classList.toggle("hidden");
        dropdownArrowUp.classList.toggle("hidden");
    })
})