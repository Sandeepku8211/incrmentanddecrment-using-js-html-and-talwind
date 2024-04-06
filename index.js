const counterValue =document.querySelector('#counter');

const Incremnt=() => {
    let value =parseInt(counterValue.innerHTML);
    value = value + 1;

    counterValue.innerHTML = value;


}

const decrment = ()=>{
    let value =parseInt(counterValue.innerHTML);
    value= value - 1;
    
    counterValue.innerHTML =value;
} 