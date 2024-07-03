function calcular(){
    //capturando os valores dos 4 inputs
    let nota1 =  Number(document.getElementById('nota1').value)
    let nota2 =  Number(document.getElementById('nota2').value)
    let nota3 =  Number(document.getElementById('nota3').value)
    let nota4 =  Number(document.getElementById('nota4').value)

    //Verificando se os campos possuem valores abaixo de 0  e acima de 10 
    if(nota1 < 0 || nota1 > 10){
        document.getElementById('telaCalculadora').innerHTML = 'Insira uma nota entre 0 e 10';
    }else{
        //Verificando se os campos possuem valores abaixo de 0  e acima de 10 
        if (nota2 < 0 || nota2 > 10){ 
            document.getElementById('telaCalculadora').innerHTML = 'Insira uma nota entre 0 e 10';
        }else{
            //Verificando se os campos possuem valores abaixo de 0  e acima de 10 
            if (nota3 < 0 || nota3 > 10){
                document.getElementById('telaCalculadora').innerHTML = 'Insira uma nota entre 0 e 10';
            }else{
                if (nota4 < 0 || nota4 > 10){
                    document.getElementById('telaCalculadora').innerHTML = 'Insira uma nota entre 0 e 10';
                }else{
                    //Verificando se os campos possuem valores vazios
                    if (nota1 == '' && nota2 == '' && nota3 == '') {
                        document.getElementById('telaCalculadora').innerHTML = 'Preencha todos os campos';
                    }else{
                        //Realizando a soma dos 4 campos
                        let soma = nota1 + nota2 + nota3 + nota4
                        //Realizando a média
                        let media = soma / 4
                        //Imprimindo na tela da calculadora
                        document.getElementById('telaCalculadora').innerHTML = `A Média é ${media}`
                        console.log(`A soma é ${soma}`);
                    }
                }
            }
        }
    }
}
