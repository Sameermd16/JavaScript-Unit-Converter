const feetInput = document.getElementById('feet')
const inchInput = document.getElementById('inch')

feetInput.addEventListener('input', () => {
    let feetValue = feetInput.value 
    let inchValue = inchInput.value
    inchValue = feetValue * 12
    inchInput.value = inchValue
})
inchInput.addEventListener('input', () => {
    let feetValue = feetInput.value 
    let inchValue = inchInput.value
    feetValue = inchValue / 12
    if(!Number.isInteger(feetValue)) {
        feetValue = feetValue.toFixed(2)
    }
    feetInput.value = feetValue
})