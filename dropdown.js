// dropdown menu
console.log('hello world');
//
const dropdown = (domElement) => {
    domElement.style.display = "block";
    console.log('fire');
}
const company = document.querySelector('button.companyBtn');
company.addEventListener('click', () => {
    dropdown(company.nextElementSibling);
});