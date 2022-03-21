function login() {
    var lolstring = "Вы ввели неверный логин или пароль";
    var login = document.querySelector(".input_login").value;
    var password = document.querySelector(".input_password").value;
    if (login=="jopa" && password=="pisya") {
        alert("nicecock");
    }
    else if (login == "" || password == "") {
        alert("Вы не ввели логин или пароль");
    }
    else {
        alert(lolstring);
    }
}
function toggle_darktheme() {
    var darknedElems = document.querySelectorAll(".darkned");
    if (darknedElems.length > 0) {
        for (let item of darknedElems) {
            item.classList.remove("darkned");
        }
    }
    else {
        var elems = document.querySelectorAll( 'body *' );
        for (let item of elems) {
            item.classList.add("darkned");
        }
    }
}