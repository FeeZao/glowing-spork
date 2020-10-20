function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var msg = document.querySelector('div#msg')


    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(sex[0].checked){
            genero = 'homem'
        }else if(sex[1].checked){
            genero='mulher'
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}
