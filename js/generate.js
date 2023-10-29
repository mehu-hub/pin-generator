function getPin() {
    const pin = generatePin();
    const pinString = pin + ''
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
//-------------------------------------------
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
//-------------------------------------------
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

//-------------------------------------------

document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    const typeNumbersField = document.getElementById('type-numbers');
    const prevtypeNumber = typeNumbersField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumbersField.value = '';
        }
        else if (number === '<') {
            const digits = prevtypeNumber.split('');
            digits.pop();
            const reminingDigits = digits.join('');
            typeNumbersField.value = reminingDigits;
        }
    }
    else {
        const newTypeNumber = prevtypeNumber + number;
        typeNumbersField.value = newTypeNumber;
    }
}) 

//---------------------------------------------

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;
    //-------------------------------------------------------------
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrong = document.getElementById('pin-wrong');
    if (typeNumber === currentPin) { 
        pinSuccessMessage.style.display = "block";
        pinWrong.style.display = 'none'
    }
    else { 
        pinWrong.style.display = 'block'
        pinSuccessMessage.style.display = "none";
    }
})