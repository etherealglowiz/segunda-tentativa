//ARRAY//
var motivos= [
    'Assistir de qualquer lugar',
'Muitos filmes e séries.',
'Programas para toda a família',
'Custo benefício',
'Programas educacionais',
]
var imagens= [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWm_MrsCXenIS42gUmpImZFY-Id_WAn7QAg&s',
    'https://www.otempo.com.br/image/contentid/policy:1.1791078:1527002924/image-image-jpg.jpg?f=3x2&w=1224',
    'https://maesamigas.com.br/wp-content/uploads/2017/07/15-filmes-da-Netflix-para-assistir-com-os-filhos-nas-ferias-capa-1.jpg',
    'https://comparaplano.com.br/wp-content/uploads/2019/08/assistir-netflix-na-tv.png',
    'https://www.ospaparazzi.com/imagem/202009/17102857.jpg?p=25',
    
    
]
console.log(motivos)
var posicao=0
function start(){
    document.getElementById("button").innerHTML='next'
    if(posicao==motivos.length){
        posicao=0
    }
    document.getElementById("motivos").innerHTML= motivos[posicao]
    document.getElementById("img").src = imagens[posicao]
    posicao++
}