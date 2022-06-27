/* DESAFIO 3 */

let soma = document.getElementById('soma')! as HTMLInputElement;
let buttonAtualizar = document.getElementById('atualizar');
let butttonLimpar = document.getElementById('limpar')!;
let saldo = document.getElementById('saldo');
let saldoTotal = 0;

limparSaldo()


function somarSaldo(soma: number){
    if(saldo){
        saldoTotal += soma
        saldo.innerHTML = saldoTotal.toString();
        limparSoma();
    }
}

function limparSoma() {
    soma.value = "";
}

function limparSaldo(){
    if(saldo){
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}

if(buttonAtualizar) {
    buttonAtualizar.addEventListener('click',() => {
        somarSaldo(Number(soma.value));
    });
}

butttonLimpar.addEventListener('click', () => {
    limparSaldo();
})

