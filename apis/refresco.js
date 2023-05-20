Para hacer que solo una parte específica de una página HTML se refresque cada 60 segundos, puedes utilizar JavaScript y la función `setInterval()`.

Primero, debes asignar un ID a la sección de la página que deseas actualizar. Por ejemplo, si tienes un elemento `div` en la página que deseas actualizar, puedes agregar un ID a ese elemento de la siguiente manera:

html
<div id="mi-seccion">
  Contenido que quiero actualizar
</div>


Luego, puedes utilizar JavaScript para actualizar ese elemento en intervalos regulares utilizando la función `setInterval()`. Aquí te muestro un ejemplo:

html
<!DOCTYPE html>
<html>
<head>
	<title>Mi página</title>
</head>
<body>
	<div id="mi-seccion">
		<p>Contenido que quiero actualizar</p>
	</div>
	<script>
		// Función que actualiza el contenido de la sección cada 60 segundos
		setInterval(function(){
			var seccion = document.getElementById('mi-seccion');
			seccion.innerHTML = '<p>Nuevo contenido actualizado</p>';
		}, 60000); // 60000 milisegundos = 60 segundos
	</script>
</body>
</html>


En este ejemplo, la función `setInterval()` se utiliza para actualizar el contenido del elemento con ID "mi-seccion" cada 60 segundos. La función utiliza `document.getElementById()` para obtener el elemento y luego actualiza el contenido utilizando la propiedad `innerHTML`.

Es importante tener en cuenta que esta técnica puede tener un impacto en el rendimiento de la página si se utiliza para actualizar contenido pesado o para actualizar frecuentemente. En ese caso, es posible que debas considerar otras soluciones, como utilizar tecnologías de actualización en tiempo real como WebSockets.