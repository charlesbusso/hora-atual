function carregar(){ 
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const img = document.getElementById('imagem');




  
  const relogio = setInterval(function time() {
      let dateToday =new Date();
      let hr = dateToday.getHours();
      let min = dateToday.getMinutes();
      let s = dateToday.getSeconds();
      
      

      if (hr < 10) hr = '0' + hr;
      if (min < 10) min = '0' + min;
      if (s < 10) s = '0' + s;


      horas.textContent = hr;
      minutos.textContent = min;
      segundos.textContent = s;
      
     

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
})
}


  
 
  
   



    




