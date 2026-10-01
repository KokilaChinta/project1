document.addEventListener('DOMContentLoaded',() =>{
const btnE1 = document.getElementById("btn");
const bmiInputE1=document.getElementById("bmi-result");
const weightConditionE1=document.getElementById("weight-condition");

function calculateBMI(){
    const heightvalue=document.getElementById("height").value/100;
    const weightvalue=document.getElementById("weight").value;
    const bmivalue=weightvalue/(heightvalue*heightvalue);
    bmiInputE1.value = bmivalue;
    if(bmivalue<18.5){
        weightConditionE1.innerText="under weight"
    }else if(bmivalue>=18.5 && bmivalue<=24.9)
    {
        weightConditionE1.innerText="normal weight"
    }else if(bmivalue>=25 && bmivalue<=29.9){
        weightConditionE1.innerText="over weight"
    }else if(bmivalue<=30){
        weightConditionE1.innerText="obesity"
    }
}
btnE1.addEventListener("click",calculateBMI);
});