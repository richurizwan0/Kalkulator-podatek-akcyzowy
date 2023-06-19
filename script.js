let price = document.querySelector('.price')
let taxField = document.querySelector('.tax')
let vehicleSelect = document.querySelector('.select')
let calculateBtn =document.querySelector('.calculateBtn')
let taxProcent = 3.10
let text

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    taxField.value = (price.value*taxProcent)/100  


    if(vehicleSelect.value == 1){
        taxProcent = 3.10
    }
    else if(vehicleSelect.value == 2 || vehicleSelect.value == 8){
        taxProcent = 18.6
    }
    else if(vehicleSelect.value == 3 || vehicleSelect.value == 4 || vehicleSelect.value == 9){
        taxProcent = 0
    }
    else if(vehicleSelect.value == 5 || vehicleSelect.value == 7){
        taxProcent = 9.30
    }
    else if(vehicleSelect.value == 6){
        taxProcent = 1.55
    }
    taxField.value = (price.value*taxProcent)/100
})

document.querySelector('.taxProcent').textContent = taxProcent + "%"

vehicleSelect.addEventListener('change', () => {
    if(vehicleSelect.value == 1){
        taxProcent = 3.10
    }
    else if(vehicleSelect.value == 2 || vehicleSelect.value == 8){
        taxProcent = 18.6
    }
    else if(vehicleSelect.value == 3 || vehicleSelect.value == 4 || vehicleSelect.value == 9){
        taxProcent = 0
    }
    else if(vehicleSelect.value == 5 || vehicleSelect.value == 7){
        taxProcent = 9.30
    }
    else if(vehicleSelect.value == 6){
        taxProcent = 1.55
    }
    
    document.querySelector('.taxProcent').textContent = taxProcent + "%"
})