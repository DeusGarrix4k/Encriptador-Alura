function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");
 
    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
 
    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto-1").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto-2");
    contenido.select();
    document.execCommand("copy")
    alert("Se ha copiado el texto.");
}
