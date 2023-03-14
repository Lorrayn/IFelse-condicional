let button = document.getElementById('button');
let fundo_azul = false;
button.style.width = '120px' 
button.style.height ='60px'
button.style.fontSize = '16px'
function mudar_fundo(){
    if ( fundo_azul == false){
        fundo_azul = true;
        document.body.style.background = '#40E0D0';
        button.style.background = 'purple';
        button.style.color =  'black'
        button.style.width = '120px' 
        button.style.height ='60px'
        button.style.fontSize = '16px'     
    }else{
        fundo_azul= false;
        document.body.style.background = 'black';
        button.style.background = 'purple';
        button.style.color = 'black';
        button.style.fontSize = '16px'
    }
    
}