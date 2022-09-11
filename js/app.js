const btnCon = document.querySelector('#btn-con');
const cdName = document.querySelector('#in-card-name');
const cdNumber = document.querySelector('#in-card-number');
const cdExpMonth = document.querySelector('#cd-exp-mm');
const cdExpYear = document.querySelector('#cd-exp-yy');
const cdCvc = document.querySelector('#cvc-input');
let stringCheck = '' ;
let numberCheck = 0 ;
let checkingLeng = 'no';
let numberOfBadFields = 0;


document.onclick = (e) => {

    switch (e.target.id) {
        case btnCon.id:
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
        //name section
        onlyLetters(cdName.value);
        switch(stringCheck){
            case true:
                break;
            default:
                console.log('name not good');
                break;
        }
        //number section
        onlyNumbers(cdNumber.value);
        switch(numberCheck){
            case true:
                break;
            default:
                console.log('card number bad');
                break;
        }
        //exp month section
        onlyNumbers(cdExpMonth.value);
        switch(numberCheck){
            case true:
                twoNumber(cdExpMonth);
                console.log(checkingLeng);
                break;
            default:
                console.log('exp month bad');
                break;
        }
        //exp year section
        onlyNumbers(cdExpYear.value);
        switch(numberCheck){
            case true:
                twoNumber(cdExpYear);
                console.log(checkingLeng);
                break;
            default:
                console.log('eap year bad');
                break;
        }
        //cvc section
        onlyNumbers(cdCvc.value);
        switch(numberCheck){
            case true:
                threeNumber(cdCvc);
                console.log(checkingLeng);
                break;
            default:
                console.log('cvc number bad');
                break;
        }
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