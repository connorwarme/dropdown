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
company.addEventListener("click", () => {
  dropdown(company.nextElementSibling);
});
// window listener: any click NOT on companyBtn - hides menu
window.onclick = (event) => {
  if (!event.target.matches(".companyBtn")) {
    document.querySelector("div.complist").style.display = "none";
  }
};
// window listener: any mousemove NOT hovering div.company - hides menu
window.onmousemove = () => {
  if (!company.parentElement.matches(":hover")) {
    company.nextElementSibling.style.display = "none";
  }
};
