var ans = document.getElementById("answer");
var qns = prompt('cual es su nombre ?');

if (qns =='Johan') {
	ans.innerHTML = "Bienvenido Administrador:"+qns;
}else {
	ans.innerHTML = "Bienvenido Visitante :"+qns;
}