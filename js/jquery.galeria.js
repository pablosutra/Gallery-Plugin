(function($){

	// Para jQuery $.fn seria equivalene mas o menos a Prototype en javascript puro
	$.fn.galeria = function(options){

		var defaults = {
			anchoImg : '640',
			velocidadAnim : 500,
			mostrarDesc : true
		}

		//Hace un "merge" entre valores de default y los parametros que mandemos
		var params = $.extend( defaults, options);

		//Con this.each  permite el "chaining" 
		return $(this).each(function(){
			var currentPic = 0;
			var el = $(this); 
			var imagenes = el.find('img');

			var numImg = imagenes.length;
			el.addClass('galeria')

			imagenes.addClass('fLeft')
			//Boton Anterior
			$("<a></a>").addClass("btnAnterior btn fLeft")
				.click(function(e){
					setCurrent(currentPic - 1)
					cambiaImagen();
				})
				.html("<<")
				.prependTo(el);

			//Boton Sguiente
			$("<a></a>").addClass("btnSiguente btn fLeft")
				.click(function(e){
					setCurrent(currentPic + 1 )
					cambiaImagen();
				})
				.html(">>")
				.appendTo(el);

			//Ajustar ancho de imagenes
			el.find('img').css('width',params.anchoImg).hide();

			//Div descripcion
			var descPic = $("<div></div>").addClass("descripcionFoto");
			
			//Muestra primera imagen
			$(imagenes[currentPic]).show();

			//Muestra la descripcion
			if(params.mostrarDesc == true){
				descPic.appendTo(el)
			};

			function setCurrent(numero){
				if(numero < 0){
					currentPic = numImg-1
				}else if (numero > (numImg-1) ){
					currentPic = 0
				}else{
					currentPic = numero;	
				}
				
			} 
			function cambiaImagen(){
				if(params.mostrarDesc == true){
					descPic.html($(imagenes[currentPic]).attr("rel"))
				}
				$(imagenes).hide(500);
				$(imagenes[currentPic]).show(500);
			}

		
		})
	};

})(jQuery)
 