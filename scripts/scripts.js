function process() {
    const input = document.getElementById("input").value;
    let result;
    if (input === "") {
      result = "Заполните поле выше, оно не может быть пустым!";
    } else {
      result = replace(input);
    }
    document.getElementById("result").innerHTML = result;
}
  
function replace(str) {
    return str.toLowerCase()
        .replaceAll("а", "뜀").replaceAll("б", "뜁")
        .replaceAll("в", "뜂").replaceAll("г", "뜃")
        .replaceAll("д", "뜄").replaceAll("е", "뜅")
        .replaceAll("ё", "뜅").replaceAll("ж", "뜆")
        .replaceAll("з", "뜇").replaceAll("и", "뜈")
        .replaceAll("й", "뜉").replaceAll("к", "뜊")
        .replaceAll("л", "뜋").replaceAll("м", "뜌")
        .replaceAll("н", "뜍").replaceAll("о", "뜎")
        .replaceAll("п", "뜏").replaceAll("р", "뜐")
        .replaceAll("с", "뜑").replaceAll("т", "뜒")
        .replaceAll("у", "뜓").replaceAll("ф", "뜔")
        .replaceAll("х", "뜕").replaceAll("ц", "뜞")
        .replaceAll("ч", "뜖").replaceAll("ш", "뜗")
        .replaceAll("щ", "뜘").replaceAll("ъ", "뜝")
        .replaceAll("ы", "뜙").replaceAll("ь", "뜝")
        .replaceAll("э", "뜚").replaceAll("ю", "뜛")
        .replaceAll("я", "뜜");
}
  
function copyToClipboard(input) {
    const str = document.getElementById(input).value;
    const result = replace(str);

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
  