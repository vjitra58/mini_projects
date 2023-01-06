const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  //   console.log(e.pageX, e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  //   console.log(xAxis);
  //   let yAxis = e.pageY / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //popout
  title.style.transform = "translateZ(200px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  card.style.transition = "all 0.5s ease";
  //popin
  title.style.transform = "translateZ(0px)";
});
