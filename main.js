import * as operacoes from './operacoes.js'

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const inputResultado = document.querySelector('.boxResultado');

const botaoCalcular = document.querySelector('.botaoCalcular');

const tipoOperacao = document.querySelector('.tipoOperacao');

const painel = document.querySelector('#painel');
const botaoVoltar = document.querySelector('.BotaoSair')


const botaoSoma = document.querySelector('aside button:nth-child(1)')
const botaoSubtracao = document.querySelector('aside button:nth-child(2)')
const botaoMultiplicacao = document.querySelector('aside button:nth-child(3)')
const botaoDivisao = document.querySelector('aside button:nth-child(4)')
const botaoRaizQuadrada = document.querySelector('aside button:nth-child(5)')
const botaoPorcentagem = document.querySelector('aside button:nth-child(6)')

botaoSoma.addEventListener('click', ()=>{  
    
    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "+"})
botaoSubtracao.addEventListener('click', ()=>{

    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "-"})
botaoMultiplicacao.addEventListener('click', ()=>{

    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "*"})
botaoDivisao.addEventListener('click', ()=>{

    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "/"})
botaoRaizQuadrada.addEventListener('click', ()=>{

    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "Raiz Quadrada"})
botaoPorcentagem.addEventListener('click', ()=>{

    input1.value = operacoes.NumeroAleatorio()
    input2.value = operacoes.NumeroAleatorio()

    painel.classList.remove('invisivel')
    tipoOperacao.textContent = "%"})

botaoVoltar.addEventListener('click', Voltar)

function Voltar(){
   painel.classList.add('invisivel')
   input1.value = " ";
   input2.value = " ";
   inputResultado.value = " ";
}

// Código para cancelar a entrada de caracteres:
input1.onkeypress = (event) => /\d/.test(event.key)
input2.onkeypress = (event) => /\d/.test(event.key)


botaoCalcular.addEventListener('click',()=> {
  
let operacao = tipoOperacao.textContent;

    switch (operacao) {
        case '+':
        {
        let number1 =Number(input1.value);
        let number2 =Number(input2.value);

        inputResultado.value = number1 + number2;
        }
        break;
        case '-':
        {
        let number1 =Number(input1.value);
        let number2 =Number(input2.value);

        inputResultado.value = number1 - number2;
        }
        break;
        case '*':
        {
        let number1 =Number(input1.value);
        let number2 =Number(input2.value);

        inputResultado.value = number1 * number2;
        }
        break;
        case '+':
        {
        let number1 =Number(input1.value);
        let number2 =Number(input2.value);

        inputResultado.value = number1 + number2;
        }
        break;
        case '/':
        {
            let number1 =Number(input1.value);
            let number2 =Number(input2.value);

            inputResultado.value = number1 / number2;
        }
        break;
     
    
        default:
            break;
    }

 
    
} )