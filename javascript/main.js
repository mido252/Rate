let rank = document.querySelectorAll(".rank");
let submitBtn = document.getElementById("submit");
let fristCard = document.querySelector(".card-one");
let secCard = document.querySelector(".card-two");
let rate = document.getElementById("rate");
let card = document.querySelector(".card-info");
rate.addEventListener("click", function (e) {
  if (e.target !== rate) {
    for (let i = 0; i < rank.length; i++) {
      rank[i].style.backgroundColor = "hsl(213, 19%, 22%)";
      submitBtn.classList.remove("d-able");
    }
    console.log(e.target);
    e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  }
  let read = e.target;
  card.innerHTML = `<p class="select">You selected ${read.innerHTML} out of 5</p>
  <h3>thank you!</h3>
  <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`;
});

submitBtn.addEventListener("click", function () {
  fristCard.classList.add("display");
  secCard.classList.remove("display");
});
