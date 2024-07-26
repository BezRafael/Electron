/*
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

function remover_veiculo() {
    const placa_remover = document.getElementById('input_removerPlaca').value;
    if(!placa_remover) {
        alert("Por favor, digite uma placa para remover.");
        return;
    }

    let garagem = JSON.parse(localStorage.getItem('garagem')) || [];
    const veiculo = garagem.find(veiculo => veiculo.placa_veiculo === placa_remover);
    
    if(!veiculo) {
        alert("Veículo não encontrado.");
        return;
    }

    // Calculando o horário de saída e valor a pagar
    const horario_saida = new Date().toLocaleTimeString('pt-BR');
    const horario_saida_ms = new Date().getTime();
    const duracao_ms = horario_saida_ms - veiculo.horario_entrada_ms;
    const duracao_horas = Math.ceil(duracao_ms / (1000 * 60 * 60)); // Convertendo milissegundos para horas
    const valor_por_hora = 5; // Definindo um valor por hora
    const valor_total = duracao_horas * valor_por_hora;

    // Exibindo o modal com os detalhes do extrato
    const modal = document.getElementById('modal_extrato');
    const span = document.getElementById('close_modal');
    const extrato_detalhes = document.getElementById('extrato_detalhes');

    extrato_detalhes.innerHTML = `
        <p>Placa: ${veiculo.placa_veiculo}</p>
        <p>Horário de Entrada: ${veiculo.horario_entrada}</p>
        <p>Horário de Saída: ${horario_saida}</p>
        <p>Tempo de Permanência: ${duracao_horas} hora(s)</p>
        <p>Valor a Pagar: R$ ${valor_total},00</p>
    `;

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Removendo o veículo do localStorage
    const nova_garagem = garagem.filter(veiculo => veiculo.placa_veiculo !== placa_remover);
    localStorage.setItem('garagem', JSON.stringify(nova_garagem));
    mostrar_veiculos();

    document.getElementById('input_removerPlaca').value = '';
}



//Função responsável por abrir uma página da lista de veículos cadastrados 
function abrir_lista() {
    window.location.href = "../views/lista_veiculos.html"
}


//Função responsável por voltar a página de cadastro de veículo
function voltar() {
    window.location.href = "../views/cadastro_veiculo.html"
}
*/


//PARTE 1(Função disparada após o click do botão cadastrar)
function cadastrar_veiculo() {
    //PARTE 1.1 (Buscando valores inseridos no input)
    const modelo_veiculo = document.getElementById('modelo_veiculo').value;
    const placa_veiculo = document.getElementById('placa_veiculo').value;
    const horario_entrada = new Date().toLocaleTimeString('pt-BR'); //Horário convertido para PT-BR
    const horario_entrada_ms = new Date().getTime(); // Horário de entrada em milissegundos


    //PARTE 1.2 (Realizando verificação se os dados estão vazios)
    if (!modelo_veiculo || !placa_veiculo) {
        document.getElementById('status').style.color = 'lightcoral';
        document.getElementById('status').innerHTML = 'Preencha Todos os Campos!';
    } else {
        //PARTE 1.3 (Armazenando os dados do input em um objeto)
        const veiculo = {
            modelo_veiculo: modelo_veiculo,
            placa_veiculo: placa_veiculo,
            horario_entrada: horario_entrada,
            horario_entrada_ms: horario_entrada_ms // Armazenando horário de entrada em milissegundos
        };
        
        //PARTE 1.4 (Salvando em Localstorage)
        const garagem = localStorage.garagem ? JSON.parse(localStorage.garagem) : []; 
        garagem.push(veiculo);
        localStorage.garagem = JSON.stringify(garagem);
        console.log(garagem);

        //PARTE 1.5 (Limpa os inputs após serem cadastrados)
        document.getElementById('modelo_veiculo').value = '';
        document.getElementById('placa_veiculo').value = '';

        //PARTE 1.6 (Exibe os status de veículo cadastrado)
        document.getElementById('status').style.color = 'lightgreen';
        document.getElementById('status').innerHTML = 'Veículo Cadastrado!';

        //PARTE 1.7 (Chama a função criada posteriormente)
        mostrar_veiculos();
    }
}

//PARTE 2 (Função disparada após o cadastro do veículo)
function mostrar_veiculos() {

    //PARTE 2.1 (Acessando o Localstorage já criado anteriormente)
    const garagem = JSON.parse(localStorage.getItem('garagem')) || [];
    const tbody = document.querySelector('#tabela-veiculos tbody'); //Chamando o elemento html
    tbody.innerHTML = ''; // Limpa o conteúdo atual do tbody, caso haja alguma linha já presente

    //PARTE 2.2 (Varrendo o localstorage)
    garagem.forEach(veiculo => {// Itera sobre cada objeto do array 'garagem'. Criando novos elementos de célula de tabela (td) para cada informação do veículo
        const tr = document.createElement('tr'); 
        const tdModelo = document.createElement('td');
        const tdPlaca = document.createElement('td');
        const tdHorario = document.createElement('td');

        //Define o texto de cada célula com as propriedades do objeto 'veiculo'
        tdModelo.textContent = veiculo.modelo_veiculo;
        tdPlaca.textContent = veiculo.placa_veiculo;
        tdHorario.textContent = veiculo.horario_entrada;

        //Adiciona cada célula à linha da tabela
        tr.appendChild(tdModelo);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdHorario);
        
        // Adiciona a linha completa ao tbody da tabela
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', mostrar_veiculos);

function abrir_lista() {
    window.location.href = "../views/lista_veiculos.html";
}

function voltar() {
    window.location.href = "../views/cadastro_veiculo.html";
}

function remover_veiculo() {
    const placa_remover = document.getElementById('input_removerPlaca').value;
    if (!placa_remover) {
        alert("Por favor, digite uma placa para remover.");
        return;
    }

    let garagem = JSON.parse(localStorage.getItem('garagem')) || [];
    const veiculo = garagem.find(veiculo => veiculo.placa_veiculo === placa_remover);
    
    if (!veiculo) {
        alert("Veículo não encontrado.");
        return;
    }

    // Calculando o horário de saída e valor a pagar
    const horario_saida = new Date().toLocaleTimeString('pt-BR');
    const horario_saida_ms = new Date().getTime();
    const duracao_ms = horario_saida_ms - veiculo.horario_entrada_ms;
    const duracao_horas = Math.ceil(duracao_ms / (1000 * 60 * 60)); // Convertendo milissegundos para horas
    const valor_por_hora = 5; // Definindo um valor por hora
    const valor_total = duracao_horas * valor_por_hora;

    // Exibindo o modal com os detalhes do extrato
    const modal = document.getElementById('modal_extrato');
    const span = document.getElementById('close_modal');
    const extrato_detalhes = document.getElementById('extrato_detalhes');

    extrato_detalhes.innerHTML = `
        <p>Placa: ${veiculo.placa_veiculo}</p>
        <p>Horário de Entrada: ${veiculo.horario_entrada}</p>
        <p>Horário de Saída: ${horario_saida}</p>
        <p>Tempo de Permanência: ${duracao_horas} hora(s)</p>
        <p>Valor a Pagar: R$ ${valor_total},00</p>
    `;

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Removendo o veículo do localStorage
    const nova_garagem = garagem.filter(veiculo => veiculo.placa_veiculo !== placa_remover);
    localStorage.setItem('garagem', JSON.stringify(nova_garagem));
    mostrar_veiculos();

    document.getElementById('input_removerPlaca').value = '';
}

