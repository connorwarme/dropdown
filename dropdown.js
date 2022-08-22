// dropdown menu
console.log('hello world');
//
const dropdown = (domElement) => {
    const drop = domElement;
    if (drop.style.display === "block") {
        drop.style.display = "none";
    } else {
        drop.style.display = "block";
    }
}
const company = document.querySelector('button.companyBtn');
company.addEventListener('click', () => {
    dropdown(company.nextElementSibling);
});
window.onclick = (event) => {
    if (!event.target.matches('.companyBtn')) {
        document.querySelector('div.complist').style.display = "none";
    }
}
window.onmousemove = () => {
    if (!(company.parentElement.matches(':hover'))) {
        company.nextElementSibling.style.display = "none";
    }
}