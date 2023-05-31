function validarTexto(texto){
    var procesar;
    procesar = texto.toLowerCase();
    procesar = procesar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return procesar;
}

var textoReemplazo= ["enter", "imes", "ai", "ober", "ufat"];

function encriptar(texto){
    return texto.replaceAll("e", textoReemplazo[0]).replaceAll("i", textoReemplazo[1]).replaceAll("a",textoReemplazo[2]).replaceAll("o",textoReemplazo[3]).replaceAll("u",textoReemplazo[4]);

}

document.getElementById("encriptar").addEventListener("click", function(){
    matrix();
    var texto = document.getElementById("texto-encrip").value; 
    var textoProcesado = validarTexto(texto)
    var textoEncriptado = encriptar(textoProcesado)
    document.getElementById("muneco").style.display ='none';
    document.getElementById("texto1").style.display ='none';
    document.getElementById("texto2").style.display ='none';
    document.getElementById("resultado").innerHTML = textoEncriptado
    document.getElementById("resultado").style.display ='block';
    document.getElementById("copiar").style.display ='block';
});

function desencriptar(texto){
    return texto.replaceAll(textoReemplazo[0], "e").replaceAll(textoReemplazo[1],"i").replaceAll(textoReemplazo[2],"a").replaceAll(textoReemplazo[3],"o").replaceAll(textoReemplazo[4],"u");
}

document.getElementById("desencriptar").addEventListener("click", function(){
    matrix()
    var texto = document.getElementById("texto-encrip").value; 
    var textoProcesado = validarTexto(texto)
    var textoEncriptado = desencriptar(textoProcesado)
    document.getElementById("muneco").style.display ='none';
    document.getElementById("texto1").style.display ='none';
    document.getElementById("texto2").style.display ='none';
    document.getElementById("resultado").innerHTML = textoEncriptado;
    document.getElementById("resultado").style.display ='block';
    document.getElementById("copiar").style.display ='block';
});

document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").style.display ='none';
    document.getElementById("copiar").style.display ='none';
    document.getElementById("muneco").style.display ='block';
    document.getElementById("texto1").style.display ='block';
    document.getElementById("texto2").style.display ='block';
    document.getElementById("texto-encrip").value = "";
})

document.getElementById("copiar").addEventListener("click", function(){
    var texto = document.getElementById("resultado").textContent;
    console.log(texto)
    navigator.clipboard.writeText(texto)
    .then(texto => {
      console.log('Texto del portapapeles:', texto)
    })
    .catch(err => {
      console.error('Error al leer del portapapeles:', err)
    })

})

var canvas = document.getElementById("canvas");

canvas.height = window.screen.height;
canvas.width = window.screen.width;


var columns = []
for (i = 0; i < 256; columns[i++] = 1);


function step() {
    
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    
   
    canvas.getContext('2d').fillStyle = 'aliceblue';
    
    columns.map(function (value, index) {
       
        var character = String.fromCharCode(3e4 +
                                            Math.random() * 33);
        
        canvas.getContext('2d').fillText(character, 
                                         index * 10, 
                                         value 
                                        );
        
        
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}
setInterval(step, 33)


function matrix(){
    
    document.getElementById("canvas").style.display ='block';
    setInterval(ocultarCanvas, 1000)
}

function ocultarCanvas(){
    document.getElementById("canvas").style.display ='none'
}