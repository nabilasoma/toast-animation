
let div = null;

window.onload = () => {
    main();
}



function main(){
    const root = document.getElementById('root');
    const inputType = document.getElementById('inputType');
    const colorBtn = document.getElementById('color-btn');
    const copyBtn = document.getElementById('copy-btn');

    colorBtn.addEventListener('click', function(){
        const colorGenerator = rgbColorGenerator();
        root.style.backgroundColor = colorGenerator;
        inputType.value = colorGenerator;
    })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(inputType.value);
        if(div != null){
            div.remove();
            div = null;
        }
        generateToastMessage(`${inputType.value} copied`)
    })

}


function rgbColorGenerator(){
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


function generateToastMessage(msg){
    div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('click', function(){
            div.remove();
            div = null;
        })
    })

    document.body.appendChild(div);
    
}
