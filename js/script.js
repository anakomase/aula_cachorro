var distancia = 100;
var altura = 400;

$("#campo").keydown(function(evento){

if(evento.which == 39){
 $("#cachorro").css('margin-left',distancia);
 	distancia = distancia + 10;

}
if(evento.which == 38){
	$("#cachorro").css('margin-top',altura);
	altura = altura - 10;
}


});