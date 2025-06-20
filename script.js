function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.webp')
            } else {
                //idoso 
                img.setAttribute('src', 'idosoM.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoF.webp')
            } else {
                //idoso 
                img.setAttribute('src', 'idosoF.webp')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}