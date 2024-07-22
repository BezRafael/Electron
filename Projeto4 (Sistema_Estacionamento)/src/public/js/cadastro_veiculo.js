//PARTE 1(Função disparada após o click do botão cadastrar)
function cadastrar_veiculo(){

    //PARTE 1.1 (Buscando dados dos inputs)
    const modelo_veiculo = document.getElementById('modelo_veiculo').value;
    const placa_veiculo = document.getElementById('placa_veiculo').value;
    const horario_entrada = new Date().toLocaleTimeString('pt-BR')

    //PARTE 1.2 (Verificando se os dados dos inputs estão vazios)
    if(!modelo_veiculo || !placa_veiculo){
        document.getElementById('status').style.color = 'lightcoral'
        document.getElementById('status').innerHTML = 'Preencha Todos os Campos!'
    }else{

    //PARTE 1.3 (Criando um objeto que terá os dados dos inputs)
    const veiculo = {
        modelo_veiculo: modelo_veiculo,
        placa_veiculo: placa_veiculo,
        horario_entrada: horario_entrada
    }

    //PARTE 1.4 (Armazenando no localstorage)
    const garagem = localStorage.garagem ? JSON.parse(localStorage.garagem) : [];    
    garagem.push(veiculo);

    localStorage.garagem = JSON.stringify(garagem)
    console.log(garagem);

    //PARTE 1.5 (Ao clicar no botão cadastrar, os inputs serão limpos)
    document.getElementById('modelo_veiculo').value = ''
    document.getElementById('placa_veiculo').value = ''


    //PARTE 1.6 (Exibindo status de veículo cadastrado)
    document.getElementById('status').style.color = 'lightgreen'
    document.getElementById('status').innerHTML = 'Veículo Cadastrado!'

    //Chamando a função criada abaixo. Após o cadastro dos dados. 
    mostrar_veiculos()
    };
}


function mostrar_veiculos(){
    const garagem = JSON.parse(localStorage.getItem('garagem')) || [];
    const tbody = document.querySelector('#tabela-veiculos tbody');
    tbody.innerHTML = '';

    garagem.forEach(veiculo => {
        const tr = document.createElement('tr');
        const tdModelo = document.createElement('td');
        const tdPlaca = document.createElement('td');
        const tdHorario = document.createElement('td');

        tdModelo.textContent = veiculo.modelo_veiculo;
        tdPlaca.textContent = veiculo.placa_veiculo;
        tdHorario.textContent = veiculo.horario_entrada;

        tr.appendChild(tdModelo);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdHorario);
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', mostrar_veiculos);


//Função responsável por abrir uma página da lista de veículos cadastrados 
function abrir_lista() {
    window.location.href = "../views/lista_veiculos.html"
}


//Função responsável por voltar a página de cadastro de veículo
function voltar() {
    window.location.href = "../views/cadastro_veiculo.html"
}

