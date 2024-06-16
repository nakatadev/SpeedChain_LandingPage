function adicionaRegistro() {

    let nome = document.getElementById("registroNome").value;
    let sobrenome = document.getElementById("registroSobrenome").value;
    let email = document.getElementById("registroEmail").value;
    let senha= document.getElementById("registroSenha").value;
    let numero = document.getElementById("numeroTel").value;

        if (nome && sobrenome && email && senha && numero) {

            let registro = {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                numero: numero,
            }
        

            let registros = JSON.parse(localStorage.getItem("registros")) || [];
            registros.push(registro);

            localStorage.setItem("registros", JSON.stringify(registros));

            limparCampos();

            alert("Registro realizado com sucesso.")
        }
        else {
            alert("Preencha todos os campos obrigatórios.")
        }
    }
function limparCampos() {
    document.getElementById("registroNome").value = "";
    document.getElementById("registroSobrenome").value = "";
    document.getElementById("registroEmail").value = "";
    document.getElementById("registroSenha").value = "";
    document.getElementById("numeroTel").value = "";
}

document.getElementById("botao_criar").addEventListener("click", function (event) {
    event.preventDefault();
    adicionaRegistro();

    window.location.href = "index.html";
});


function entrarConta(){

    let email = document.getElementById("email_login").value;
    let senha = document.getElementById("senha_login").value;

    let registros = JSON.parse(localStorage.getItem("registros")) || [];
    let usuarioEncontrado = registros.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        window.location.href = "principal.html";
    } else {
        document.getElementById('erro').innerHTML= "Credenciais invalidas!"

    }
}