function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var retorno = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]Digite uma data valida!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-menina.jpg')

            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-menina.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-adulta.jpg')
            }
        }
        retorno.innerHTML = `<p>Detectamos ${gênero} com ${idade} ano.</p>`
        retorno.appendChild(img)
    }
}