let clickBtn = document.querySelector(".click")
let generateBtn = document.querySelector("#generate-btn")
let storySection = document.querySelector("#complete-story")
let insertedText=document.querySelector("inserted-text")

console.log(clickBtn)

clickBtn.addEventListener("click",function(){
    console.log("button is clicked")
})

story =`
<h3>Your Self</h3>

<p>
  I noticed a lot of times that on
  <span class="inserted text">${userSubmission.number}</span> date
  ,something always happen amaizing. My name is
  <span class="inserted text">${userSubmission.name}</span> and my favourite
  colour is <span class="inserted text">${userSubmission.colour}</span>. I
  like to play <span class="inserted text">${userSubmission.sport}</span>. i
  like to eat <span class="inserted text">${userSubmission.food}</span>.I am
  of <span class="inserted text">${userSubmission.age}</span> years old. I
  want to shoot add drinking
  <span class="inserted text">${userSubmission.beverage}</span> on
  <span class="inserted text">${userSubmission.place}</span> during working
  as a <span class="inserted text">${userSubmission.aim}</span>.
</p>
`