let screenOne = document.querySelector('.questions');
let screenTwo = document.querySelector('.thanks');
let submitButton = document.querySelector('.submit-btn');
let listNumbers = document.querySelectorAll('li');
let resultText = document.querySelector('.result');


listNumbers.forEach(e =>{
    e.addEventListener('click', () =>{
        listNumbers.forEach(button =>{
            button.style.backgroundColor = ''
            button.style.color = ''
        })
        resultText.innerHTML = e.textContent
        e.style.backgroundColor = '#fb7413'
        e.style.color = '#fff'
    })
})


submitButton.addEventListener('click', () =>{
    screenOne.classList.add('hidden')
    screenTwo.classList.remove('hidden')
});