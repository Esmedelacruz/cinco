// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
	$('#izquierda').on("swipeleft",function(){
		navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion5","Aceptar"});	
        });//barrer izquierda
		
		
		$('#derecha').on("swiperight",function(){
			navigator.notofication.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
	
		case 1:
		navigator.notofication.beep(1);
		break;
		
		case 2:
		navigator.notofication.vibrate(1000);
		break;
		}//switch opt
			},"Aplicaion5","Beep,Vibrar,Cancelar");//confirm
			
		});//barrer derecha
		
		
	},false);//ready device
});//document