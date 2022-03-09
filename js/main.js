const result = document.querySelector(".js-result");
const form = document.querySelector(".js-form");

function handleSubmit(event) {

}

form.addEventListener('submit', handleSubmit);

result.innerHTML = `
    <li>First Item</li>
    <li>Second Item</li>
`;