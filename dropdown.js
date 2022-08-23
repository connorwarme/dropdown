// dropdown menu
console.log("hello world");
// dropdown fn -> takes the dom element
// -> if showing, it hides menu
// -> if hidden, it shows menu
const dropdown = (domElement) => {
  const drop = domElement;
  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
};
const company = document.querySelector("button.companyBtn");
// event listener that fires on 'click'
// company.addEventListener("click", () => {
//   dropdown(company.nextElementSibling);
// });
// event listener (companyBtn): that fires on 'mouseover' aka hover
company.addEventListener("mouseover", () => {
  dropdown(company.nextElementSibling);
});
// event listener (companyBtn): when user moves mouse out of dom element - hide menu
company.addEventListener("mouseleave", () => {
  company.nextElementSibling.style.display = "none";
});
// event listener (dropdown): when user hovers over list, keep it displayed
company.nextElementSibling.addEventListener("mouseover", () => {
  company.nextElementSibling.style.display = "block";
});
// event listener (dropdown): when user moves mouse out of dropdown list - hide menu
company.nextElementSibling.addEventListener("mouseleave", () => {
  company.nextElementSibling.style.display = "none";
});
// window listener: any click NOT on companyBtn - hides menu
// window.onclick = (event) => {
//   if (!event.target.matches(".companyBtn")) {
//     document.querySelector("div.complist").style.display = "none";
//   }
// };
// window listener: any mousemove NOT hovering div.company - hides menu
// window.onmousemove = () => {
//   if (!company.parentElement.matches(":hover")) {
//     company.nextElementSibling.style.display = "none";
//   }
// };
// image slider
// images are stored as objects in array
const container = document.querySelector("div.display");
const photo1 = {
  src: "./icons/Warme-2.jpg",
  alt: "Turkey Rocks",
  value: 1,
};
const photo2 = {
  src: "./icons/Warme-3.jpg",
  alt: "Turkey Rocks",
  value: 2,
};
const photo3 = {
  src: "./icons/Warme-4.jpg",
  alt: "Turkey Rocks",
  value: 3,
};
const photo4 = {
  src: "./icons/Warme-7.jpg",
  alt: "A on Johnny Lat",
  value: 4,
};
const photos = [photo1, photo2, photo3, photo4];
const photosDom = [];
// need current photo, in order to know what is shown, whether to go forward or backward in array
let currentPhoto = 1;
// have all photos created as dom elements, set display = "none";
const createPhotos = (photoArray) => {
  photoArray.forEach((index) => {
    const newPhoto = document.createElement("img");
    newPhoto.src = index.src;
    newPhoto.alt = index.alt;
    newPhoto.value = index.value;
    container.appendChild(newPhoto);
    newPhoto.style.display = "none";
    photosDom.push(newPhoto);
  });
};
createPhotos(photos);
// check if value goes beyond 1-4, if so, restart value
const checkValue = (input) => {
  let value = input;
  if (value < 1) {
    value = 4;
  } else if (input > 4) {
    value = 1;
  }
  return value;
};
// discover if value needs +1/-1 based on what button was clicked
const discoverValue = (previousValue, input) => {
  let value = input;
  if (input === "back") {
    value = previousValue - 1;
  } else if (input === "forward") {
    value = previousValue + 1;
  }
  const check = checkValue(value);
  return check;
};
// slider dots (below image, indicate which slide is currently displayed)
const dotContainer = container.nextElementSibling;
// remove class from all, then assign to selected div
const markDiv = (value) => {
  const dotDivs = Array.from(dotContainer.children);
  dotDivs.forEach((index) => {
    index.removeAttribute("class");
  });
  const div = dotContainer.children[value - 1];
  div.classList.add("full");
};
// hide previous photo, display next photo
const displayPhoto = (previousValue, value) => {
  const hide = photosDom.find((index) => index.value === previousValue);
  hide.style.display = "none";
  const newValue = discoverValue(previousValue, value);
  const display = photosDom.find((index) => index.value === newValue);
  display.style.display = "block";
  currentPhoto = display.value;
  markDiv(newValue);
};
// arrow (back and forward fn)
const back = document.querySelector("div.back");
back.addEventListener("click", () => {
  displayPhoto(currentPhoto, "back");
});
const forward = document.querySelector("div.forward");
forward.addEventListener("click", () => {
  displayPhoto(currentPhoto, "forward");
});
// make slider dots, attach each to photo
// listener: display photo on click
const makeDotDivs = (array) => {
  array.forEach((index) => {
    const div = document.createElement(`div`);
    div.addEventListener("click", () => {
      displayPhoto(currentPhoto, index.value);
    });
    div.value = index.value;
    dotContainer.appendChild(div);
  });
};
makeDotDivs(photos);
displayPhoto(currentPhoto, 1);
