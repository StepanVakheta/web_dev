// const el = document.getElementById('clickBtn')
// el.addEventListener('click', getResult(), false)

function getResult() {
    var value = document.getElementById('alcoValue').value
    if (isAdditionForm(value)) {
        renderAdditionInputForm()
    }
    console.log(value)
}

function isAdditionForm(val) {
    return (val >= 50 && val <= 60)
}


function renderAdditionInputForm() {
    var value = document.getElementById('alcoValue').value
    
    // Create an input element for checking temperature
    var inputFlashValue = document.createElement('input')
    inputFlashValue.setAttribute('type', 'number')
    inputFlashValue.setAttribute('id', 'flashValue')
    inputFlashValue.setAttribute('placeholder', 'Температура вспышки')

    // Create a submit button
    var btn = document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', 'Узнать ООН')

    // Append the temperature value from user's input
    inputFlashValue.appendChild(btn)

    document.getElementsByTagName('body')[0].appendChild(inputFlashValue)
    document.getElementsByTagName('body')[0].appendChild(btn)
}