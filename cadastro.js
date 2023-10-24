function Verifica(){
    let nome              =document.getElementById('nome').value;
    let email             =document.getElementById('email').value;
    let date              =document.getElementById('campo_data').value;
    let senha             =document.getElementById('senha').value;
    let confirmandosenha  =document.getElementById('confirmandosenha').value;
    let ddd               =document.getElementById('ddd').value;
    let telefone          =document.getElementById('telefone').value;
    let cpf               =document.getElementById('cpf').value;
    let bairro            =document.getElementById('bairro').value;
    let cep               =document.getElementById('cep').value;
    let endereço          =document.getElementById('endereço').value;
    let numero            =document.getElementById('numero').value;
     let cidade            =document.getElementById('cidade').value;
    let estado            =document.getElementById('estado').value;
 

    

     if (!nome || !email || !date || !senha || !confirmandosenha || !ddd || !telefone || !cpf || !bairro || !cep || !endereço || !numero || !cidade || !estado){
        alert ("Campos de preenchimento obrigatorio. favor Preencha!");
     } else{
        alert("Acesso realizado com sucesso!");
     }
     
     if((senha !== '' || confirmandosenha !=='') && (senha == confirmandosenha)) {
        alert("As senhas conferem!");
    } else {
        alert("Senhas não conferem! Por favor digite novamente");
        
    }
}
'use strict'; //Modo restrito // https://viacep.com.br/

//Função para limpar formulário
//Arrow Function
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Responsável pelo preenchimento do formulário 
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
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