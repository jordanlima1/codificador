
//BASE 64

document.querySelector("#popup1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector('.popup .close-btn').addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})


var codificar = document.querySelector('#codificar')
var decodificar = document.querySelector('#decodificar')
var input = document.querySelector('#inputs')
var btn = document.querySelector('#button-codificar')

input.addEventListener('click', function () {
    if (decodificar.checked) {
        btn.innerText = 'Decodificar';
        
    } else if (codificar.checked){
        btn.innerText = "Codificar"

    }

    })


function codificando()  {
    var textoentrada = document.getElementById("txt-entrada").value
  
    if (codificar.checked) {
        var codificado = btoa(textoentrada)
        document.getElementById("txt-saida").value = codificado
    } else if (decodificar.checked) {
        var decodificado = atob(textoentrada)
        document.getElementById("txt-saida").value = decodificado
    } 
    return apagartxt()


    

    
    
           
    
    
}


 function limpar(){
 if (decodificar==decodificar.checked)
 
 {
    var radio = document.querySelector('input[type=radio][name=radio]:checked');
    radio.checked = false;
}
 }


 function apagartxt(){
    var nameinput = document.getElementById('txt-entrada')
    nameinput.value = ''
}