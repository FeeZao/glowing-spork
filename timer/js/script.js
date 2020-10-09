function carregar(){

    var imagem = document.getElementById('imagem')
    var msg = document.getElementById('msg')

    var data = new Date()
    var hora = data.getHours() //importa a hora do pc
    var min = data.getMinutes() // os minutos
    var sec = data.getSeconds() //segundos
    var tictac = setInterval(carregar,1000) // faz com que seja atualizado constantemente o js


    if (hora < 10) {
        hora = `0${hora}`
        //adiciona um 0 na frente do numero caso for menor que 10
    }
    if (min < 10) {
        min = `0${min}`
        //adiciona um 0 na frente do numero caso for menor que 10
    }

    if (sec < 10) {
        sec =`0${sec}`
        //adiciona um 0 na frente do numero caso for menor que 10
    }

    

    msg.innerHTML = `Agora são ${hora}:${min}:${sec} horas`


    //imagens abaixo estao salvas com nome errado :c
    if (hora >=0 && hora < 12) {
        //horario da manha
        imagem.src = "img/tarde.png"
        
        document.body.style.background = 'rgb(84, 153, 170)'
        //caso horario seja manha ira alterar a imagem e a cor do background

    }else if (hora >= 12 && hora < 18){
        //horario da tarde
        imagem.src = "img/manha.png"
        document.body.style.background= 'rgb(243, 150, 96)'
        //caso horario seja tarde ira alterar a imagem e a cor do background
    }else{
        imagem.src = 'img/noite.png'
        //caso horario seja noite nada sera alterado pois é o padrao e se mantera
    }
}