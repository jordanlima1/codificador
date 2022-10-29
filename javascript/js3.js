
        var txtsaida5 = document.querySelector('#txt-saida2')
        let txtentrada10 = document.querySelector('#txt-entrada2')
        let inputs = [txtsaida5,txtentrada10];
        let copybtn = document.getElementById('copytoclipboard')

        inputs.forEach( input =>{
            input.oninput = () =>{
                input.value = input.value.toLowerCase()
            }
        })

        function codificando2(){

            let txtentrada10 = document.getElementById('txt-entrada2').value;
            let campo = ""
            let shiftinput2 = parseInt(document.getElementById('shiftinput2').value)

                if(codificar2.checked){
            for(var i = 0; i < txtentrada10.length; i++){
                let formula = txtentrada10[i].charCodeAt()
                let soma = formula + shiftinput2
                soma >=97 && soma <=122 ? campo += String.fromCharCode(soma) : soma > 122 ? campo += String.fromCharCode(97 +(soma & 122)) : campo += inputtxt[i]
                    
                }
                txtsaida5.value = campo
                e

                }else if(decodificar2.checked){
            
                    for(var i = 0; i < txtentrada10.length; i++){
                let formula = txtentrada10[i].charCodeAt()                     
                let soma = formula - shiftinput2
                soma >=97 && soma <=122 ? campo += String.fromCharCode(soma) : soma > 122 ? campo += String.fromCharCode(97 +(soma & 122)) : campo += inputtxt[i]

            }       



            txtsaida5.value = campo

            }}

     