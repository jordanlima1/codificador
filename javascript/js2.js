
document.querySelector("#popup2").addEventListener("click", function(){
    document.querySelector(".popup2").classList.add("active");
})

document.querySelector('.popup2 .close-btn2').addEventListener("click", function(){
    document.querySelector(".popup2").classList.remove("active");
})



var codificar2 = document.querySelector('#codificar2')
var decodificar2 = document.querySelector('#decodificar2')
var input2 = document.getElementById('inputs2')
var btn2 = document.querySelector('#button-codificar2')

input2.addEventListener('click', function () {
    if (decodificar2.checked) {
        btn2.innerText = 'Decodificar';
        
    } else if (codificar2.checked){
        btn2.innerText = "Codificar"

    }

    })




    
    



    



























    //     var txtsaida5 = document.querySelector('#txt-saida2')
    //     let txtentrada10 = document.querySelector('#txt-entrada2')
    //     let inputs = [txtsaida5,txtentrada10];
    //     let copybtn = document.getElementById('copytoclipboard')

    //     inputs.forEach( input =>{
    //         input.oninput = () =>{
    //             input.value = input.value.toUpperCase()
    //         }
    //     })

    //     function codificando2(){

    //         let txtentrada10 = document.getElementById('txt-entrada2').value;
    //         let campo = ""
    //         let shiftinput2 = parseInt(document.getElementById('shiftinput2').value)

    //             if(codificar2.checked){
    //         for(var i = 0; i < txtentrada10.length; i++){
    //             let formula = txtentrada10[i].charCodeAt()
    //             let soma = formula + shiftinput2
    //             soma >=65 && soma <=90 ? campo += String.fromCharCode(soma) : soma > 90 ? campo += String.fromCharCode(65 +(soma & 90)) : campo += inputtxt[i]
                    
    //             }}
    //         }



    //      function codificando2() {
    //         let txtentrada10 = document.getElementById('txt-entrada2').value;
    //         let campo = ""
    //         let shiftinput2 = parseInt(document.getElementById('shiftinput2').value)




    //         if(decodificar2.checked){
    //             for(var i = 0; i < txtentrada10.length; i++){
    //             let formula = txtentrada10[i].charCodeAt()                     
    //             let soma = formula + shiftinput2
    //             soma >=65 && soma <=90 ? campo += String.fromCharCode(soma) : soma > 90 ? campo += String.fromCharCode(65 +(soma & 90)) : campo += inputtxt[i]
    //     }

        
        
        

    //     txtsaida5.value = campo
    // }}

        




