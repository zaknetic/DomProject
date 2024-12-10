
const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn'); // Fixed here

let counter = 0;

const updateCounter = (value) =>{
    counter = counter + value;
    counterElement.textContent = counter;

    if(counter>=10){
        plusBtn.setAttribute('disabled',true)
    }
    else{
        plusBtn.removeAttribute('disabled',false);
    }
    //minus button
    // counter = counter - 1;
    counterElement.textContent = counter;

    if(counter <=0){
        minusBtn.setAttribute('disabled',true);
    }
    else{
        minusBtn.removeAttribute('disabled',false);
    }
}


plusBtn.addEventListener('click', function () {
    updateCounter(1);
});

// Optional: Add functionality for minus button
minusBtn.addEventListener('click', function () {
    updateCounter(-1);
    
});
