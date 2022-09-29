const fCard = document.querySelector('#f-card-info');
const btnCon = document.querySelector('#btn-con');
const cdName = document.querySelector('#in-card-name');
const cdNumber = document.querySelector('#in-card-number');
const cdExpMonth = document.querySelector('#cd-exp-mm');
const cdExpYear = document.querySelector('#cd-exp-yy');
const cdCvc = document.querySelector('#cvc-input');
let erName = document.querySelector('#er-name');
let erNumber = document.querySelector('#er-number');
let erExp = document.querySelector('#er-exp');
let erCvc = document.querySelector('#er-cvc');
let activeNumber = document.querySelector('#sh-number');
let activeName = document.querySelector('#sh-name');
let activeExp = document.querySelector('#sh-date');
let activeCvc = document.querySelector('#sh-cvc');
let stringCheck = '' ;
let numberCheck = 0 ;
let checkingLeng = 'no';
let numberOfBadFields = 0;
let actName = document.createTextNode('Jane Appleseed');
let actNumber = document.createTextNode('0000 0000 0000 0000');
let actExp = document.createTextNode('00/00');
let actCvc = document.createTextNode('000');


//active changing card parts
function trying(partChange, nam) {
  partChange.appendChild(nam);

};

function reps(partChange, nam) {
    partChange.replaceChild(nam, partChange.childNodes[0]);
};

       //checking for string only on the card name input field
function onlyLetters(str) { 
   stringCheck = /^[a-z A-Z]+$/.test(str);
   return stringCheck
   };
        //checking for numbers only
function onlyNumbers(num) { 
   numberCheck = /^[0-9 ]+$/.test(num);
   return numberCheck
   };
function twoNumber(nums) {
   if(nums.value.length === 2){
      checkingLeng = 'good';
    }else{
       checkingLeng = 'nope';
    }
    return checkingLeng;
   };
function threeNumber(nums) {
    if(nums.value.length === 3){
      checkingLeng = 'good';
    }else{
      checkingLeng = 'nope';
    }
    return checkingLeng;
    };
trying(activeName, actName);
trying(activeNumber, actNumber);
trying(activeExp, actExp);
trying(activeCvc, actCvc);

cdNumber.addEventListener('keyup', function(e){
    
    if (e.key != 'Backspace' && (cdNumber.value.length === 4 || cdNumber.value.length === 9 || cdNumber.value.length === 14)){
    cdNumber.value += ' ';
    }
  });
  
document.onclick = (e) => {

    switch (e.target.id) {
        case btnCon.id:
            
             
            //name section
            onlyLetters(cdName.value);
            switch(stringCheck){
                case true:
                    actName = document.createTextNode(cdName.value);
                    reps(activeName, actName);
                    erName.style.display = 'none';
                    break;
                default:
                    numberOfBadFields++;
                    cdName.style.borderColor = 'red';
                    cdName.style.color = 'red';
                    erName.style.display = 'block';
                    console.log('name not good');
                    break;
            }
            //number section
            onlyNumbers(cdNumber.value);
            switch(numberCheck){
                case true:
                    actNumber = document.createTextNode(cdNumber.value);
                    reps(activeNumber, actNumber);
                    erNumber.style.display = 'none';
                    break;
                default:
                    numberOfBadFields++;
                    cdNumber.style.borderColor = 'red';
                    cdNumber.style.color = 'red';
                    erNumber.style.display = 'block';
                    console.log('card number bad');
                    break;
            }
            //exp month section
            onlyNumbers(cdExpMonth.value);
            switch(numberCheck){
                case true:
                    erExp.style.display = 'none';
                    twoNumber(cdExpMonth);
                    console.log(checkingLeng);
                    break;
                default:
                    numberOfBadFields++;
                    cdExpMonth.style.borderColor = 'red';
                    cdExpMonth.style.color = 'red';
                    erExp.style.display = 'block';
                    console.log('exp month bad');
                    break;
            }
            //exp year section
            onlyNumbers(cdExpYear.value);
            switch(numberCheck){
                case true:
                    actExp = document.createTextNode(`${cdExpMonth.value}/${cdExpYear.value}`);
                    reps(activeExp, actExp);
                    erExp.style.display = 'none';
                    twoNumber(cdExpYear);
                    console.log(checkingLeng);
                    break;
                default:
                    numberOfBadFields++;
                    cdExpYear.style.borderColor = 'red';
                    cdExpYear.style.color = 'red';
                    erExp.style.display = 'block';
                    console.log('exp year bad');
                    break;
            }
            //cvc section
            onlyNumbers(cdCvc.value);
            switch(numberCheck){
               
                case true:
                    actCvc = document.createTextNode(cdCvc.value);
                    reps(activeCvc, actCvc);
                    erCvc.style.display = 'none';
                    threeNumber(cdCvc);
                    console.log(checkingLeng);
                    break;
                default:
                    numberOfBadFields++;
                    cdCvc.style.borderColor = 'red';
                    cdCvc.style.color = 'red';
                    erCvc.style.display = 'block';
                    console.log('cvc number bad');
                    break;
            }
            console.log(numberOfBadFields);
        break;
        default: 
        console.log('sub btn not clicked');
        break;
    }
    switch(numberOfBadFields) {
       case 0: 
         //add the screen change if all the fields are correct
        break;
       default:
        break;
    };
};