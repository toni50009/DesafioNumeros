document.querySelectorAll('.btn-increment').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.previousElementSibling; 
      let valor = parseInt(input.value);
      let max = parseInt(input.max);
  
      if (valor < max) {
        valor++;
        input.value = valor;
        console.log(valor);
      }
    });
  });


document.querySelectorAll('.btn-decrement').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.nextElementSibling;
      let valor = parseInt(input.value);
      let min = parseInt(input.min);
  
      if (valor > min) {
        input.value = valor - 1;
        console.log(valor);
      }
    });
  });


function gerarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }


