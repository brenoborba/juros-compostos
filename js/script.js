const slider = document.querySelector(".slider")
const output = document.querySelector(".slider-output")
output.innerHTML = `${slider.value} ano`

slider.oninput = function () {
    output.innerHTML = `${this.value} anos`

    if(this.value == 1){
        output.innerHTML = `${this.value} ano`
    }
}