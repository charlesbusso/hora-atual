function relogio() {
    var tempo = window.document.getElementById('relogio')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    Var s = date.getSeconds();

   var tempo_total = hr + ":" + min + ":" + s;
   msg.innerHTML = tempo_total;

    if (hora >= 0 && hora < 6) {
        // BOM DIA !!
        document.body.style.background = '#e2cd9f'
        img.scr = 'imagens/noite.jpg'
        
    } else if (hora >=12 && hora < 16){
        // BOA TARDE !!
        img.src = 'imagens/meio-dia.png'
        document.body.style.background = '#b9846f'
        
    } else if ( hora >= 16 && hora <18){
        // BOA TARDE !!!
        img.src = 'imagens/tardezinha.png'
        document.body.style.background = '#b9846f'
        
    } else {
        //BOA NOITE!!!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
      setInterval(Relogio,500);
}

