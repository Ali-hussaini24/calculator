let inputValue = document.querySelector('.input-Value')

function addToInputBox(item){
    inputValue.value += item
}

function DeleteAll(){
    inputValue.value = "";
}

function DeleteOneByOne(){
    inputValue.value = inputValue.value.toString().slice(0,-1)
}

function calculate(){
    try {
        inputValue.value = eval(inputValue.value)
    } catch (error) {
        inputValue.value = 'Error'
    }
}


























