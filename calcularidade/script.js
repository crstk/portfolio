function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Mulher'
                if(idade < 2){
                    //Bebê
                    img.setAttribute('src', 'imagens/mbebe.png')
                }else if(idade < 10){
                    //Criança
                    img.setAttribute('src', 'imagens/mcrianca.png')
                }else if(idade <18){
                    //Jovem
                    img.setAttribute('src', 'imagens/mjovem.png')
                }else if(idade < 39){
                    //Adulto jovem
                    img.setAttribute('src', 'imagens/madjovem.png')
                }else if(idade < 60){
                    //Adulto maduro
                    img.setAttribute('src', 'imagens/madmadura.png')
                }else if(idade > 60){
                    //Idoso
                    img.setAttribute('src', 'imagens/midosa.png')
                }

        }else if(fsex[1].checked){
            genero = 'Homem'
                if(idade < 2){
                    //Bebê
                    img.setAttribute('src', 'imagens/hbebe.png')
                }else if(idade < 10){
                    //Crinça
                    img.setAttribute('src', 'imagens/hcrianca.png')
                }else if(idade <18){
                    //Jovem
                    img.setAttribute('src', 'imagens/hjovem.png')
                }else if(idade < 39){
                    //Adulto jovem
                    img.setAttribute('src', 'imagens/hadjovem.png')
                }else if(idade < 60){
                    //Adulto maduro
                    img.setAttribute('src', 'imagens/hadmaduro.png')
                }else if(idade > 60){
                    //Idoso
                    img.setAttribute('src', 'imagens/hidoso.png')
                }
            
        }else if(fsex[2].checked){
            genero = 'Indivíduo'
                //Sexo Não informado,
            img.setAttribute('src', 'imagens/tempo.png')
        }
        
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }


}