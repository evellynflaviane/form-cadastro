'use strict'; //Modo restrito // https://viacep.com.br/

//Função para limpar formulário
//Arrow Function
const limparFormulario = () => {    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('campo_data').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('confirmandosenha').value = '';
    document.getElementById('ddd').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('endereço').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Responsável pelo preenchimento do formulário 
const preencherFormulario = (endereco) => {
    document.getElementById('nome').value = endereco.nome;
    document.getElementById('email').value = endereco.email;
    document.getElementById('campo_data').value = endereco.campodata;
    document.getElementById('senha').value = endereco.data;
    document.getElementById('confirmandosenha').value = endereco.confirmandosenha;
    document.getElementById('ddd').value = endereco.ddd;
    document.getElementById('telefone').value = endereco.telefone;
    document.getElementById('cpf').value = endereco.cpf;
    document.getElementById('rua').value = endereco.rua;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cep').value = endereco.cep;
    document.getElementById('endereço').value = endereco.endereço;
    document.getElementById('numero').value = endereco.numero;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
// Função para consumo de API da Via CEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar
        const address = await dados.json(); // retorna dados no formato JSON

        if(address.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(address);
        }
    }else{
        alert('CEP incorreto');
    }

}
// Adicionar um evento DOM no input do CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

