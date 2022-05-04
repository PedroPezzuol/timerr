var sec = 59;
var min = 59;
var hora = 13;
setInterval(couter, 1000)
    function couter(){
        sec--
        if(sec == 0){
            min--
            sec = 59;
        }
        if(min == 0){
            hora--
            min = 59;

        }
        if(sec.toString().length == 1)sec = "0" + sec
        if(min.toString().length == 1)min = "0" + min
        if(hora.toString().length == 1)hora = "0" + hora
        var textSec = document.querySelector("#segundo")
        textSec.innerHTML = sec
        var textMin = document.querySelector("#min")
        textMin.innerHTML = min
        var textHora = document.querySelector("#hora")
        textHora.innerHTML = hora
    }