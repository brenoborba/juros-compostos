// Stringify dados antes de enviar para a API
let button = document.querySelector(".btn")
let form = document.getElementById("form")
const inputName = document.forms['form']['name']
const inputMensalidade = document.forms['form']['mensalidade']
const inputTaxa = document.forms['form']['taxa']
const yearSelector = document.forms['form']['selector']

form.onsubmit = e => {
    e.preventDefault()
    let errorFlag = true

    if(!inputName.value){
        errorFlag = true
        inputName.classList.add('input-error')
        let span = inputName.nextSibling.nextSibling
        span.innerText = 'Insira o nome corretamente!'
    } else{
        errorFlag = false
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!inputMensalidade.value){
        errorFlag = true
        inputMensalidade.classList.add('input-error')
        let span = inputMensalidade.nextSibling.nextSibling
        span.innerText = 'Insira o valor da mensalidade corretamente!'
    } else{
        errorFlag = false
        let span = inputMensalidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!inputTaxa.value){
        errorFlag = true
        inputTaxa.classList.add('input-error')
        let span = inputTaxa.nextSibling.nextSibling
        span.innerText = 'Insira a taxa de juros corretamente!'
    } else{
        errorFlag = false
        let span = inputTaxa.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!yearSelector.value){
        errorFlag = true
        yearSelector.classList.add('input-error')
        let span = yearSelector.nextSibling.nextSibling
        span.innerText = 'Selecione o tempo de contribuição corretamente!'
    } else{
        errorFlag = false
        let span = yearSelector.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!errorFlag){
        form.submit()
    }

}



let calculator = {
    "expr": ""
}