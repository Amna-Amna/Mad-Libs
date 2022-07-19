let clickBtn = document.querySelector(".click")
let generateBtn = document.querySelector("#generate-btn")
let storySection = document.querySelector("#complete-story")
let insertedText=document.querySelector("inserted-text")


let number = document.querySelector("#number")
let name = document.querySelector("#name")
let colour = document.querySelector("#colour")
let sport = document.querySelector("#sport")
let food = document.querySelector("#food")
let age = document.querySelector("#age")
let beverage = document.querySelector("#beverage")
let place = document.querySelector("#place")
let aim = document.querySelector("#aim")


if (clickBtn) {

    clickBtn.addEventListener("click",function(){
        console.log("button is clicked")
    })
}

if (generateBtn) {

    generateBtn.addEventListener("click", function(){
        localStorage.setItem("number", number.value);
        localStorage.setItem("name", name.value);

    })
}


if (storySection) {

    storySection.innerHTML = `<h3>Your Self</h3>

    <p>I noticed a lot of times that on <span class="inserted text">${localStorage.getItem("number")}</span> date ,something always happen amaizing.
    My name is <span class="inserted text">${localStorage.getItem("name")}</span> and my favourite colour is <span class="inserted text">${localStorage.getItem("colour")}</span>. 
    I like to play <span class="inserted text">${localStorage.getItem("sport")}</span>.
    i like to eat <span class="inserted text">${localStorage.getItem("food")}</span>.I am of <span class="inserted text">${localStorage.getItem("age")}</span> years old.
    I want to shoot add drinking <span class="inserted text">${localStorage.getItem("beverage")}</span> on <span class="inserted text">${localStorage.getItem("place")}</span> during working as a <span class="inserted text">${localStorage.getItem("aim")}</span>.</p>                                                          
     `
}


// const madsubmit = (event) =>{
//     const form = new FormData(event.target)
//     const userSubmission = Object.fromEntries(form)
//     console.log(userSubmission)

//     story =`
// <h3>Your Self</h3>

// <p>
//   I noticed a lot of times that on
//   <span class="inserted text">${userSubmission.number}</span> date
//   ,something always happen amaizing. My name is
//   <span class="inserted text">${userSubmission.name}</span> and my favourite
//   colour is <span class="inserted text">${userSubmission.colour}</span>. I
//   like to play <span class="inserted text">${userSubmission.sport}</span>. i
//   like to eat <span class="inserted text">${userSubmission.food}</span>.I am
//   of <span class="inserted text">${userSubmission.age}</span> years old. I
//   want to shoot add drinking
//   <span class="inserted text">${userSubmission.beverage}</span> on
//   <span class="inserted text">${userSubmission.place}</span> during working
//   as a <span class="inserted text">${userSubmission.aim}</span>.
// </p>
// `
// storySection.innerHTML += story
// }