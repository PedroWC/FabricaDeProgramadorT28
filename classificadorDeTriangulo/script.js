function classificar() {
    // Pegar os campos
    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value
    let lado3 = document.getElementById("lado3").value

    // Classificação
    if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
        // Exibir resultado
        alert("Triangulo equilátero")

    } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        alert("Triangulo escaleno")

    } else if (
        (lado1 == lado2 && lado2 != lado3) || (lado2 == lado3 && lado3 != lado1) || (lado1 == lado3 && lado3 != lado2)) {
        alert("Triangulo isóceles")
    }

}