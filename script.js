function Carregar() {
    var tempo = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();    
    

  var tempo_total = hr + ":" + min +":" + s +  "  horas";
  
  
  tempo.innerHTML = tempo_total;
 
  
    if (hr >= 0 && hr < 6) {
        // BOM DIA !!
        document.body.style.background = '#023059'
        img.src = 'imagens/madrugada.jpg'
        
    } else if (hr >=6 && hr < 12){
    
        // BOA TARDE !!
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#CAB8A1'
        
    } else if (hr >= 12 && hr <16){
        // BOA TARDE !!!
        img.src = 'imagens/meio-dia.png'
        document.body.style.background = '#F2D230'
    }   

        else if (hr >= 16 && hr <18){
            img.src = 'imagens/tardezinha.png'
            document.body.style.background = '#D99F59'
        }
        
    else {
        //BOA NOITE!!!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
  }
  setInterval(Carregar,500);


    




