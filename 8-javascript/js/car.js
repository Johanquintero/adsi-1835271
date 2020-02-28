//Var attributes
var brand       = document.getElementById('brand');
var reference   = document.getElementById('reference');
var cc          = document.getElementById('cc');
var model       = document.getElementById('model');
var color       = document.getElementById('color');


var btn_on = document.getElementById('btn-on');
var btn_off = document.getElementById('btn-off');
var btn_forw = document.getElementById('btn-forw');
var btn_back = document.getElementById('btn-back');
var btn_stop = document.getElementById('btn-stop');



var engineOn = false;
var stopeOn = true;
var reverseOn = false;
var advanceOn = false;
//var sounds

var start = document.getElementById('start');
var engine = document.getElementById('engine');
var encendido = document.getElementById('encendido');




var path  = document.getElementById('path');
var vehicle  = document.getElementById('vehicle');

var car = {
    //Atributos
    brand: 'Porsche',
    reference: 'Cayman',
    cc:        4.8,
    model:     2020,
    color:      'Yellow',
    image:      'imgs/porsche.png',
    //Metodos
    info: function(){
        brand.innerText = this.brand;
        reference.innerText = this.reference;
        cc.innerText = this.cc;
        model.innerText = this.model;
        color.innerText = this.color;
        vehicle.style.backgroundImage = "url("+this.image+")";
    },
    on: function(){
        if (engineOn == false){
            start.play();
            engine.play();
         vehicle.classList.add('on');
         engineOn = true;
        }else{
            alert("el auto ya esta encendido");
        }

       // console.log('on');
    },
    off: function(){
        if(stopeOn == true){

            if(engineOn == true){
                engine.pause();
                engine.currentTime = 0;
                vehicle.classList.remove('on');
                engineOn= false;
    
            }else{
                alert("El Auto ya esta apagado");
            }

        }else{
            alert("Para apagar debe detener");
        }
        

        
        //console.log('off');
    },
    stop: function(){
       
        if(advanceOn == true || reverseOn == true){

            if(stopeOn == false){
                encendido.pause();
                encendido.currentTime = 0;
                engine.play();
                path.classList.add('stop');
                stopeOn = true;
                reverseOn = false;
                advanceOn =false;
                
            }

        }else{
            alert("Para detener debe avanzar");
        }
        
        //console.log('stop');
    },
    forward: function(){
        if(advanceOn==false){
            advanceOn=true;
            if(engineOn==true){
                if(stopeOn == true){
                    encendido.play();
                    engine.pause();
                    engine.currentTime = 0;
                    path.classList.remove('stop');
                    path.classList.remove('backward');
                    path.classList.add('forward');
        
                    stopeOn = false;
                }else{
                    alert("para avanzar debe detener");
                }
    
            }else{
                alert("para avanzar debe encender");
            }

        }else{
            alert("el auto ya esta avanzando");
        }
        //console.log('forward');
    },

    backward: function(){
    if(reverseOn == false){
        reverseOn=true;
        if(engineOn==true){
            if(stopeOn == true){
                path.classList.remove('stop');
                path.classList.add('backward');
                stopeOn = false;
            }else{
                alert("para retroceder debe detener");
            }

        }else{
            alert("para retroceder debe encender;")
        }
        
        


    }else{
        alert("el auto ya esta retrocediendo");
    }
       

        //console.log('backward');
    }
};

car.info();

btn_on.onclick = function(){
    car.on();
}

btn_off.onclick = function(){
    car.off();
}

btn_forw.onclick = function(){
    car.forward();
}

btn_back.onclick = function(){
    car.backward();
}

btn_stop.onclick = function(){
    car.stop();
}
