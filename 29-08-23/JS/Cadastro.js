function cadastrar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == '') {
        alert('digite seu email');
        email.focus();
    } else if (senha == '')
        alert("Digite sua senha")
    senha.focus();
}
else {
    cadastrar(email, senha);
}