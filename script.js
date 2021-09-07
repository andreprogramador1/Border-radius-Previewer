const containerInputs = document.querySelector('.container-user-inputs').childNodes
const previewBorder = document.querySelector('.preview-border')
const btnCopy = document.querySelector('.btn-copy')
const main = document.querySelector('main')

const title = document.createElement('h1')
title.innerHTML = 'Border generator'
title.style.marginBottom = "16px"
main.prepend(title)

function inputChange(n, style) {
    containerInputs[n].addEventListener('change', (e) => {
        let userInput = e.target.value
        previewBorder.style[style] = `${userInput}px`;
    });
}

inputChange(1,'borderTopLeftRadius')
inputChange(3,'borderTopRightRadius')
inputChange(5,'borderBottomLeftRadius')
inputChange(7,'borderBottomRightRadius')

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(previewBorder.getAttribute('style'));
    alert("Border style copied: " + previewBorder.getAttribute('style'));
});
