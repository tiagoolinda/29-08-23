/* X 
function pesquisaCEP() {
    alert("Acorda mariquinha");
}
/
/* Criando um evento do input CEP */
/*
document.getElementById('cep')
    .addEventListener('focusout',pesquisaCEP);
      */


/* Criando um evento do input CEP */





//arrow function
const pesquisaCEP = async () => {
    const cep = document.getElementById('cep').value;

    //passando o cep para API viacep
    // Usando template script``
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    preencherFormulario(endereco);
};

//Função para preencher o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('cep').value = endereco.cep;


if(endereco.erro){
    alert("CEP Incorreto");
    limpaForm();
    Document.getElementById('cep').value="";
    document.getElementById('cep').focus();
    }
    else{
        preencherFormulario(endereco);
    }
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);
