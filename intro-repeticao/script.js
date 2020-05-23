function repetirWhile() {

    console.log("Antes da repetição")

    // 'repeticoes' controlará o número de repetições
    let repeticoes = 0

    while (repeticoes < 5) {
        console.log("Durante a repetição")
            // Contagem das repetições
        repeticoes = repeticoes + 1
    }

    console.log("Depois da repetição")

}


function repetirFor() {


    console.log("Antes da repetição")

    for (let i = 0; i < 5; i++) {
        console.log("Durante a repetição")
    }

    console.log("Depois da repetição")

}