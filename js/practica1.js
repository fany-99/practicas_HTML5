function encontrarMayor() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = "";

    if (num1 > num2) {
      resultado = "El número mayor es " + num1;
    } else if (num1 < num2) {
      resultado = "El número mayor es " + num2;
    } else {
      resultado = "Los números son iguales";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

  function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    // Check if checkbox is checked or not
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}
