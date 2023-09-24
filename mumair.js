var circle = document.querySelector(".cursr");
var button = document.querySelector(".button-1");
var button1 = document.querySelector(".button");
const lerp = (x, y, a) => x * (1 - a) + y * a;
window.addEventListener("mousemove", function (dets) {
  var dims = button.getBoundingClientRect();
  console.log(dims);

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  lerp(-50, 50, zeroone);

  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
    ease: Expo,
  });
});

button.addEventListener("mousemove", function (dets) {
  var dims = button.getBoundingClientRect();
  console.log(dims);

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  var ystart = dims.y;
  var yend = dims.y + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

  gsap.to(circle, {
    scale: 8,
  });

  gsap.to(".button-1 span", {
    x: lerp(-30, 30, zeroone),
    y: lerp(-12, 25, zerooney),
    duration: 0.3,
  });
});

button.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });
  gsap.to(".button-1 span", {
    x: 0,
    y: 0,
    duration: 0.3,
  });
});

button1.addEventListener("mousemove", function (dets) {
  var dims = button.getBoundingClientRect();
  console.log(dims);

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  var ystart = dims.y;
  var yend = dims.y + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

  gsap.to(circle, {
    scale: 8,
  });

  gsap.to(".button p", {
    x: lerp(0, 0, zeroone),
    y: lerp(0, 0, zerooney),
    duration: 0.3,
  });
});

button1.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });
  gsap.to(".button p", {
    x: 0,
    y: 0,
    duration: 0.3,
  });
});

const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content-box");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    all_content.forEach((content) => {
      content.classList.remove("active");
    });

    all_content[index].classList.add("active");
  });
});

const btn = document.querySelectorAll(".btn");
const slide = document.querySelector("#slide-tes");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0vw)";
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-48vw)";
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-96vw)";
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-144vw)";
};
