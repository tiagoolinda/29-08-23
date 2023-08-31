function verificar() {
    /* validando se o campo está preenchido */
    let email = document.querySelector("#email").value;
    let senha = document.getElementById("senha").value;
    if (senha == "" || email == "") {
        alert("Campo Obrigatório");
        document.querySelector("#email").focus;
    } else {
        pesquisa(email, senha);
    };
};

function pesquisa(email, senha) {
    if (email == "tiago.olinda@outlook.com" && senha == "123456") {
        window.open("../assets/index.html");
        window.close();
    } else {
        alert("Email ou senha inválido");
        document.querySelector("#email").focus();
    }
}

