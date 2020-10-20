function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let msg = document.getElementById('msg')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert('erro')
        msg.innerHTML=' erro '
    }else{
        msg.innerHTML = 'contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            alert('passo invalido, considerado passo = 1 ')
            p = 1
        }
        if(i<f){
            for(let c=i;c<=f;c += p){
                msg.innerHTML +=` ${c} \u{1F449}`
            }
            
        }else{
            for(let c=i;c>=f;c -= p){
                msg.innerHTML +=` ${c} \u{1F449}`
            }
        }
        msg.innerHTML+=`\u{1f3c1}` 
    }
}