//PARTE 1
function cadastrar_veiculo(){
    
    //função responsável por site sem apagar os dados guardados na garagem
    function rederizar_garagem(){
        const garagem = localStorage.garagem ? JSON.parse(localStorage.garagem) : [];
        garagem.forEach(v => mostrando_veiculoGaragem(v))
    }
    
    
    //função responsável em mostrar veículos cadastrados no html
    function mostrando_veiculoGaragem(veiculo){
    const row = document.createElement('tr') //criando um elemento

    row.innerHTML = `
        <td>${veiculo.modelo_veiculo}</td>
        <td>${veiculo.placa_veiculo}</td>
        <td>${veiculo.horario_entrada}</td>
        <td>
            <button id="botao_horarioSaida">Adicionar Horário Saída</button>
        </td>`;

    //
    document.getElementById('garagem').appendChild(row);
    }

    rederizar_garagem()

    //buscando dados dos inputs
    const modelo_veiculo = document.getElementById('modelo_veiculo').value;
    const placa_veiculo = document.getElementById('placa_veiculo').value;
    const horario_entrada = new Date().toLocaleTimeString('pt-BR')

    //verificando se os dados dos inputs estão vazios
    if(!modelo_veiculo || !placa_veiculo){
        document.getElementById('status').style.color = 'lightcoral'
        document.getElementById('status').innerHTML = 'Preencha Todos os Campos!'
    }else{

    //criando um objeto que terá os dados dos inputs
    const veiculo = {
        modelo_veiculo: modelo_veiculo,
        placa_veiculo: placa_veiculo,
        horario_entrada: horario_entrada
    }

    //armazenando no localstorage
    const garagem = localStorage.garagem ? JSON.parse(localStorage.garagem) : [];    
    garagem.push(veiculo);

    localStorage.garagem = JSON.stringify(garagem)
    console.log(garagem);

    //chamando função e adicionando o objeto criado como parâmetro
    mostrando_veiculoGaragem(veiculo);

    //Ao clicar no botão cadastrar, os inputs serão limpos
    document.getElementById('modelo_veiculo').value = ''
    document.getElementById('placa_veiculo').value = ''


    //exibindo status de veículo cadastrado
    document.getElementById('status').style.color = 'lightgreen'
    document.getElementById('status').innerHTML = 'Veículo Cadastrado!'
    };
}













//Função para abrir lista de veículos cadastrados (pop-up)
function abrir_lista() {
    let lista_veiculosCadastrados = document.getElementById('conteiner_veiculosCadastrados')
    
    lista_veiculosCadastrados.show()
}

function fechar_lista(){
    let lista_veiculosCadastrados = document.getElementById('conteiner_veiculosCadastrados')
    
    lista_veiculosCadastrados.close()
}