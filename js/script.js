const nameInput = document.getElementById('name')
const mensalidade = document.getElementById('mensalidade')
const taxaJuros = document.getElementById('taxa')
const form = document.getElementById('form')
const requestResult = document.querySelector('.requestResult')

//SLIDER
const slider = document.getElementById("slider")
const output = document.querySelector(".slider-output")
output.innerHTML = `${slider.value} ano`

slider.oninput = function () {
    output.innerHTML = `${this.value} anos`

    if(this.value == 1){
        output.innerHTML = `${this.value} ano`
    }
}

const url = "http://api.mathjs.org/v4/"

//FORM SUBMISSION
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let inputMensalidade = mensalidade.value
    let inputTaxaJuros = taxaJuros.value
    let inputSlider = slider.value

    let main = {
        expr: `
            ${inputMensalidade} * (((1 + (${inputTaxaJuros} * 0.01)) ^ ${inputSlider * 12} - 1) / (${inputTaxaJuros} * 0.01))
        `
    }
    console.log(api(main))
    requestResult.style.display = ''
    
}) 

//API POST
const configs = (expr) => ({
    method: "POST",
    mode: "cors",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(expr)
})

async function api(expr){
    return fetch(url, configs(expr))
    .then(res => res.json())
    .then(data => displayResults(data))
}

//Display Results function

function displayResults(data){
    form.style.display = 'none'
    let str = data.result
    str = str.slice(1, str.length - 1)
    strFloat = parseFloat(str)
    strFloat = strFloat.toFixed(2)
    strFloat = strFloat.replace('.', ',')
    let main = strFloat

    requestResult.innerHTML = `<p>Olá ${nameInput.value}, juntando R$${commaReplacer(mensalidade.value)} todo mês, você terá R$${main} em ${slider.value} ano(s).</p>
    <button id="home-btn" class="btn">SIMULAR NOVAMENTE</button>`

    const homeBtn = document.getElementById('home-btn')

    homeBtn.addEventListener('click', function(){ 
        form.style.display = ''
        requestResult.style.display = 'none'
    })

}

function commaReplacer(str){
    let main = str.value
    strFloat = parseFloat(str)
    strFloat = strFloat.toFixed(2)
    strFloat = strFloat.replace('.', ',')
    return strFloat
}



