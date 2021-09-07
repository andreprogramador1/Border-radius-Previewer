const containerInputs = document.querySelector('.container-user-inputs').childNodes
const previewBorder = document.querySelector('.preview-border')
const btnCopy = document.querySelector('.btn-copy')

containerInputs[1].addEventListener('change', (e) => {
    let userInput = e.target.value
    previewBorder.style.borderTopLeftRadius = `${userInput}px`;
});

containerInputs[3].addEventListener('change', (e) => {
    let userInput = e.target.value
    previewBorder.style.borderTopRightRadius = `${userInput}px`;
});

containerInputs[5].addEventListener('change', (e) => {
    let userInput = e.target.value
    previewBorder.style.borderBottomLeftRadius = `${userInput}px`;
});

containerInputs[7].addEventListener('change', (e) => {
    let userInput = e.target.value
    previewBorder.style.borderBottomRightRadius = `${userInput}px`;
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(previewBorder.getAttribute('style'));
    alert("Border style copied: " + previewBorder.getAttribute('style'));
});
