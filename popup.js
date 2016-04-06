//alert('popup.js');
var geturl = "";
//Click listener of click me button
//chrome-extension://lmambdjfhjhcflkihbkcfkkojpicbolb/

$('input[type=file]').change(function (e) {
    file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        //console.log(event.target.result); //contains the file data
        var filePath = $('input[type=file]').val();
        var x = chrome.extension.getURL(filePath);
        console.log(x);
        var img = document.getElementById("yourImgTag");
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});