function processConvert() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    
    const input = inputElement.value.trim();
    
    if (input === "") {
        resultElement.innerHTML = "Заполните поле выше, оно не может быть пустым!";
    } else {
        const result = replace(input);
        resultElement.innerHTML = result;
    }
}

function processCopy() {
    copyToClipboard(replace(elementText('input')), function() {
        const copiedElement = document.getElementById("copied");
        copiedElement.innerHTML = "Текст скопирован!";
        setTimeout(() => {
            copiedElement.innerHTML = "";
        }, 3000);
    });
}