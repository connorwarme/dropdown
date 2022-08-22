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
company.addEventListener('mouseover', () => {
    dropdown(company.nextElementSibling);
});
// event listener (companyBtn): when user moves mouse out of dom element - hide menu
company.addEventListener('mouseleave', () => {
    company.nextElementSibling.style.display = "none";
});
// event listener (dropdown): when user hovers over list, keep it displayed
company.nextElementSibling.addEventListener('mouseover', () => {
    company.nextElementSibling.style.display = "block";
});
// event listener (dropdown): when user moves mouse out of dropdown list - hide menu
company.nextElementSibling.addEventListener('mouseleave', () => {
    company.nextElementSibling.style.display = "none";
})
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
