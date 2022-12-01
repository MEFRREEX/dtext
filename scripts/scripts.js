
function process() {
    var str = String(document.getElementById("input").value);
    if (str == "") {
        result = "Заполните поле выше, оно не может быть пустым!";
    } else {
        result = replace(str);
    }
    document.getElementById("result").innerHTML = result;
}
function replace(str) {
    return str
        .replaceAll("а", "뜀").replaceAll("А", "뜀").replaceAll("б", "뜁").replaceAll("Б", "뜁")
        .replaceAll("в", "뜂").replaceAll("В", "뜂").replaceAll("г", "뜃").replaceAll("Г", "뜃")
        .replaceAll("д", "뜄").replaceAll("Д", "뜄").replaceAll("е", "뜅").replaceAll("Е", "뜅")
        .replaceAll("ё", "뜅").replaceAll("Ё", "뜅").replaceAll("ж", "뜆").replaceAll("Ж", "뜆")
        .replaceAll("з", "뜇").replaceAll("З", "뜇").replaceAll("и", "뜈").replaceAll("И", "뜈")
        .replaceAll("й", "뜉").replaceAll("Й", "뜉").replaceAll("к", "뜊").replaceAll("К", "뜊")
        .replaceAll("л", "뜋").replaceAll("л", "뜋").replaceAll("м", "뜌").replaceAll("М", "뜌")
        .replaceAll("н", "뜍").replaceAll("Н", "뜍").replaceAll("о", "뜎").replaceAll("О", "뜎")
        .replaceAll("п", "뜏").replaceAll("П", "뜏").replaceAll("р", "뜐").replaceAll("Р", "뜐")
        .replaceAll("с", "뜑").replaceAll("С", "뜑").replaceAll("т", "뜒").replaceAll("Т", "뜒")
        .replaceAll("у", "뜓").replaceAll("У", "뜓").replaceAll("ф", "뜔").replaceAll("Ф", "뜔")
        .replaceAll("х", "뜕").replaceAll("Х", "뜕").replaceAll("ц", "뜞").replaceAll("Ц", "뜞")
        .replaceAll("ч", "뜖").replaceAll("Ч", "뜖").replaceAll("ш", "뜗").replaceAll("Ш", "뜗")
        .replaceAll("щ", "뜘").replaceAll("Щ", "뜘").replaceAll("ъ", "뜝").replaceAll("Ъ", "뜝")
        .replaceAll("ы", "뜙").replaceAll("Ы", "뜙").replaceAll("ь", "뜝").replaceAll("Ь", "뜝")
        .replaceAll("э", "뜚").replaceAll("Э", "뜚").replaceAll("ю", "뜛").replaceAll("Ю", "뜛")
        .replaceAll("я", "뜜").replaceAll("Я", "뜜");
}
function copyToClipboard(input) {
    var str = String(document.getElementById(input).value);
    var result = replace(str);
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(result);
        return;
    }
    navigator.clipboard.writeText(result).then(function() {
        document.getElementById("copied").innerHTML = "Текст скопирован!";
        function clearAlert() {
            document.getElementById("copied").innerHTML = "";
        }
        setTimeout(clearAlert, 3000);
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}