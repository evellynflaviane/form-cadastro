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

