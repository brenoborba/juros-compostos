const name = document.getElementById('name')
const mensalidade = document.getElementById('mensalidade')
const taxaJuros = document.getElementById('taxa')
const form = document.getElementById('form')


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    let inputName = name.value
    let inputMensalidade = mensalidade.value
    let inputTaxaJuros = taxaJuros.value
    let inputSlider = slider.value

    console.log(inputTaxaJuros/100)


    let main = {
        "expr": `${inputMensalidade} * (((1 * ${inputTaxaJuros/100}))) ^ ${inputSlider * 12}) / ${inputTaxaJuros/100}`
    }

    let mainFinal = JSON.stringify(main)

    console.log(mainFinal)

})





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