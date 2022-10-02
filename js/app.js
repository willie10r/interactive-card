const fCard = document.querySelector('#f-card-info');
const btnCon = document.querySelector('#btn-con');
const cdName = document.querySelector('#in-card-name');
const cdNumber = document.querySelector('#in-card-number');
const cdExpMonth = document.querySelector('#cd-exp-mm');
const cdExpYear = document.querySelector('#cd-exp-yy');
const cdCvc = document.querySelector('#cvc-input');
const hidePage = document.querySelector('.grid-container');
const thankYou = document.querySelector('.after');
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
let numberOfGoodFields = 0;
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
function goodColor(itemChange, itemHide) {
    itemHide.style.display = 'none';
    itemChange.style.borderColor = '#776E7C';
    itemChange.style.color = '#776E7C';
};
function errorColor(itemChange, itemShow) {
    itemShow.style.display = 'block';
    itemChange.style.borderColor = 'red';
    itemChange.style.color = 'red'; 
};
trying(activeName, actName);
trying(activeNumber, actNumber);
trying(activeExp, actExp);
trying(activeCvc, actCvc);
cdNumber.addEventListener('keyup', function(e) {
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
                    goodColor(cdName, erName);
                    numberOfGoodFields++
                    break;
                default:
                    errorColor(cdName, erName);
                    console.log('name not good');
                    break;
            }
            //number section
            onlyNumbers(cdNumber.value);
            switch(numberCheck){
                case true:
                    actNumber = document.createTextNode(cdNumber.value);
                    reps(activeNumber, actNumber);
                    goodColor(cdNumber, erNumber);
                    numberOfGoodFields++
                    if(cdNumber.value.length != 19) {
                        numberOfGoodFields--;
                        errorColor(cdNumber, erNumber);
                        };
                    break;
                default:
                    errorColor(cdNumber, erNumber);
                    console.log('card number bad');
                    break;
            }
            //exp month section
            onlyNumbers(cdExpMonth.value);
            switch(numberCheck){
                case true:
                    twoNumber(cdExpMonth);
                    console.log(checkingLeng);
                    goodColor(cdExpMonth, erExp);
                    numberOfGoodFields++
                    if(cdExpMonth.value.length != 2) {
                        numberOfGoodFields--;
                        errorColor(cdExpMonth, erExp);
                        };
                    break;
                default:
                    errorColor(cdExpMonth, erExp);
                    console.log('exp month bad');
                    break;
            }
            //exp year section
            onlyNumbers(cdExpYear.value);
            switch(numberCheck){
                case true:
                    actExp = document.createTextNode(`${cdExpMonth.value}/${cdExpYear.value}`);
                    reps(activeExp, actExp);
                   
                    twoNumber(cdExpYear);
                    goodColor(cdExpYear, erExp);
                    numberOfGoodFields++
                    if(cdExpYear.value.length != 2) {
                        numberOfGoodFields--;
                        errorColor(cdExpYear, erExp);
                        };
                    console.log(checkingLeng);
                    break;
                default:
                    errorColor(cdExpYear, erExp);
                    console.log('exp year bad');
                    break;
            }
            //cvc section
            onlyNumbers(cdCvc.value);
            switch(numberCheck){
                case true:
                    actCvc = document.createTextNode(cdCvc.value);
                    reps(activeCvc, actCvc);
                    threeNumber(cdCvc);
                    goodColor(cdCvc, erCvc);
                    numberOfGoodFields++;
                    console.log(checkingLeng);
                    if(cdCvc.value.length != 3) {
                    numberOfGoodFields--;
                    errorColor(cdCvc, erCvc);
                    };
                    break;
                default:
                    errorColor(cdCvc, erCvc);
                    console.log('cvc number bad');
                    break;
            }
            console.log(numberOfGoodFields);
            e.target.style.backgroundColor = '#776E7C';
        break;
        default: 
        console.log('sub btn not clicked');
        break;
    }
    switch(numberOfGoodFields) {
       case 5: 
         //add the screen change if all the fields are correct
         hidePage.style.display = 'none';
         thankYou.style.display = 'block';
        break;
       default:
        break;
    };
    numberOfGoodFields = 0;
};
