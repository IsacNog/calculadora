//selecionando o campo onde exibe o resultados e os numeros digitados (<p> com o id #resultado)
let resultado = document.querySelector('#resultado');


//função que preenche o campo de resultados de acordo com o que foi digitado (o parametro num é passado por cada botao no html)
function digitaNum(num){
    resultado.innerHTML = resultado.innerHTML + num;
};

//função que apaga o ultimo digito do campo de exibição
function back(){
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
};

//selecionando o botao C
let btnC = document.getElementById('C')

//função que faz com que sempre que clicado, o botão C apague os digitos no campo de exibição
btnC.addEventListener('click', function() {
    resultado.innerHTML = "";
});

//selecionando o botao de igual
let btnIgual = document.getElementById('=');

//função que calcula oque está no campo de exibição
btnIgual.addEventListener('click', function () {
    resultado.innerHTML = eval(resultado.innerHTML);
});

//observação, todos os botões no index.html estão com a função "onclick = digitaNum()" (exceto o botão = e o botão C)