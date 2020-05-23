function salvar() {
    // coletar os campos
    let nome = document.getElementById("nome").value
    let email = document.getElementById("mail").value
    let cpf = document.getElementById("cpf").value

    // imprimir no console
    console.log(nome)
    console.log(email)
    console.log(cpf)

    //se o nome/CPF/Email é/são igual a uma string vazia ("")
    if (nome == "") {
        exibirAlertaErro()
    } else if (email == "") {
        exibirAlertaErro()
    } else if (cpf = "") {
        exibirAlertaErro()
    }
}
// exibir o alerta
function exibirAlertaErro() {
    let aler = document.querySelector(".alerta")

    aler.style.visibility = "visible"
    aler.style.backgroundColor = "lightcoral"
    document.querySelector(".alerta p").style.color = "red"
}

function exibirAlertaSucesso() {
    document.querySelector(".alerta").style.visibility = "visible"
}