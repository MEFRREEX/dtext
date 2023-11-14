const charMap = {
    'а': '뜀', 'б': '뜁', 'в': '뜂', 'г': '뜃', 'д': '뜄',
    'е': '뜅', 'ё': '뜅', 'ж': '뜆', 'з': '뜇', 'и': '뜈',
    'й': '뜉', 'к': '뜊', 'л': '뜋', 'м': '뜌', 'н': '뜍',
    'о': '뜎', 'п': '뜏', 'р': '뜐', 'с': '뜑', 'т': '뜒',
    'у': '뜓', 'ф': '뜔', 'х': '뜕', 'ц': '뜞', 'ч': '뜖',
    'ш': '뜗', 'щ': '뜘', 'ъ': '뜝', 'ы': '뜙', 'ь': '뜝',
    'э': '뜚', 'ю': '뜛', 'я': '뜜'
};

function replace(str) {
    return str.toLowerCase().split('').map(char => charMap[char] || char).join('');
}

function elementText(inputId) {
    return document.getElementById(inputId).value;
}

function copyToClipboard(text, callback) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Async: Copying to clipboard was successful!');
        callback();    
    }).catch(err => {
        console.error('Async: Could not copy text: ', err);
    });
}