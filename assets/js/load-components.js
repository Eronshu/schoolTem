document.addEventListener("DOMContentLoaded", function () {
    let language = document.documentElement.lang; // 获取 HTML 语言

    let headerFile = language === "zh-CN" ? "header-ch.html" : "header-en.html";
    let footerFile = language === "zh-CN" ? "footer-ch.html" : "footer-en.html";

    fetch(`assets/includes/${headerFile}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch(`assets/includes/${footerFile}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
