var btnTheme =document.getElementById('theme');
var calc = document.getElementsByClassName('calc');
var dspMath = document.getElementById('displayMath');
var dspAns = document.getElementById('displayAnswer');
var memAns = null;


//buttons
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btnC = document.getElementById('btnC');
var btnDelete = document.getElementById('btnDelete');
var btnSum= document.getElementById('btnSum');
var btnRes= document.getElementById('btnRes');
var btnIgual= document.getElementById('btnIgual');
var btnx= document.getElementById('btnx');
var btnDiv= document.getElementById('btnDiv');
var btnX2= document.getElementById('btnX2');
var btnl= document.getElementById('btnl');
var btnr= document.getElementById('btnr');
var btnPt= document.getElementById('btnPt');
var btnPorc= document.getElementById('btnPorc');
var btnAns= document.getElementById('btnAns');


//Booleans
var allowOper = false;

//Functions


function setValueInDisplay(val){

    if(dspMath.value.length <= 26){

        if(val.constructor.name == "Number") {
            allowOper = true;
            dspMath.value += val;
            
        } else{
            if(allowOper){
                dspMath.value += val;
            }
            allowOper=false;
        }
    }
}

function btnC(){
    dspMath.innerText = "";
}

//Events
btnTheme.onclick =function() {
    calc[0].classList.toggle('dark');
}

btnC.onclick= function() {
    dspMath.value ='';
    dspAns.value ='';
}

btnDelete.onclick = function(){
    dspMath.value = dspMath.value.slice(0,-1);
}


btn0.onclick= function() {
    setValueInDisplay(0);
}

btn1.onclick= function() {
    setValueInDisplay(1);
}

btn2.onclick= function() {
    setValueInDisplay(2);
}
btn3.onclick= function() {
    setValueInDisplay(3);
}
btn4.onclick= function() {
    setValueInDisplay(4);
}
btn5.onclick= function() {
    setValueInDisplay(5);
}
btn8.onclick= function() {
    setValueInDisplay(8);
}
btn6.onclick= function() {
    setValueInDisplay(6);
}
btn7.onclick= function() {
    setValueInDisplay(7);
}
btn9.onclick= function() {
    setValueInDisplay(9);
}

btnSum.onclick= function() {
    setValueInDisplay('+');
}

btnRes.onclick= function() {
    setValueInDisplay('-');
}

btnIgual.onclick= function() {
    if(dspMath.value.length > 0){
        dspAns.value= eval(dspMath.value);
        dspMath.value='';

    }


    
}

btnx.onclick= function() {
    setValueInDisplay('*');
}

btnDiv.onclick= function() {
    setValueInDisplay('/');
}

btnX2.onclick= function() {
    //setValueInDisplay('');
}
btnl.onclick= function() {
    setValueInDisplay('(');
}
btnr.onclick= function() {
    setValueInDisplay(')');
}

btnPt.onclick= function() {
    setValueInDisplay('.');
}

btnPorc.onclick= function() {
    setValueInDisplay('%');
}

btnAns.onclick= function() {
    if(memAns != null){
        dspMath.value= memAns;
    }else{

        if(dspAns.value.length >0){
            memAns = dspAns.value;
            dspMath.value = memAns;
            dspAns.value = '';      
        }
    }
    
}

document.onkeyup = function(evt){
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 46:
            dspMath.value ='';
            dspAns.value ='';
        break;
        case 8:
            dspMath.value = dspMath.value.slice(0,-1);
        break;
        case 13:
            if(dspMath.value.length > 0){
                dspAns.value= eval(dspMath.value);
                dspMath.value='';
            }

        break;
        case 111:
            setValueInDisplay('/');
        break;
        case 106:
            setValueInDisplay('*');
        break;
        case 109:
            setValueInDisplay('-');
        break;
        case 107:
            setValueInDisplay('+');
        break;
        case 110:
            setValueInDisplay('.');
        break;
        case 96:
            setValueInDisplay(0);
        break;
        case 97:
            setValueInDisplay(1);
        break;
        case 98:
            setValueInDisplay(2);
        break;
        case 99:
            setValueInDisplay(3);
        break;
        case 100:
            setValueInDisplay(4);
        break;
        case 101:
            setValueInDisplay(5);
        break;
        case 102:
            setValueInDisplay(6);
        break;
        case 103:
            setValueInDisplay(7);
        break;
        case 104:
            setValueInDisplay(8);
        break;
        case 105:
            setValueInDisplay(9);
        break;
        case 16 && 56:
            setValueInDisplay('(');
        break;
        case 16 && 57:
            setValueInDisplay(')');
        break;

        default:
            alert('tecla no permitida');
        break;


    }
    
}


