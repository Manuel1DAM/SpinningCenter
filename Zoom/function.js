// Inicializamos el Zoom
imageZoom("myimage", "myresult");

function imageZoom(imgID, resultID) {
	var img, lens, result, cx, cy;
	img = document.getElementById(imgID);
	result = document.getElementById(resultID);

	/* Creamos la lupa */
	lens = document.createElement("DIV");
	lens.setAttribute("class", "img-zoom-lens");

	/*Insertamos la lupa */
	img.parentElement.insertBefore(lens, img);

	/* Caluculamos el Radio del resultado del Div del zoom:*/
	cx = result.offsetWidth / lens.offsetWidth;
	cy = result.offsetHeight / lens.offsetHeight;

	/* Estilo del resultado del Div del zoom*/
	result.style.backgroundImage = "url('" + img.src + "')";
	result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

	/* Ejecutamos la function imageZoom() cuando el cursor pase por encima de la imagen */
	lens.addEventListener("mousemove", moveLens);
	img.addEventListener("mousemove", moveLens);
	
	/* Para pantallas Tactiles*/
	lens.addEventListener("touchmove", moveLens);
	img.addEventListener("touchmove", moveLens);
	function moveLens(e) {
	  var pos, x, y;
	  
	  e.preventDefault();

	  /* Obtener el eje X y el eje Y del cursor*/
	  pos = getCursorPos(e);

	  /* Calcular la posicion de la lupa*/
	  x = pos.x - (lens.offsetWidth / 2);
	  y = pos.y - (lens.offsetHeight / 2);

	  /* Evitar que la lente se coloque fuera de la imagen */
	  if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	  if (x < 0) {x = 0;}
	  if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	  if (y < 0) {y = 0;}

	  /* Poner la posicion de la lupa */
	  lens.style.left = x + "px";
	  lens.style.top = y + "px";
	  
	  /* Mostrar por pantalla lo que la lupa ve */
	  result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	}
	
	function getCursorPos(e) {
	  var a, x = 0, y = 0;
	  e = e || window.event;
	  /* Obtener las posiciones X y la posicion Y de la imagen */
	  a = img.getBoundingClientRect();
	  /*calcular las coordenadas X y Y del cursor, relativas a la imagen */
	  x = e.pageX - a.left;
	  y = e.pageY - a.top;
	  /* Desplazamiento de página */
	  x = x - window.pageXOffset;
	  y = y - window.pageYOffset;
	  return {x : x, y : y};
	}
  }