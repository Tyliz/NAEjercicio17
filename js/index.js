const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
	alert('click en el botón')
})

$('#btn').click(function () {
	console.log('Hola, estoy utilizando jQuery');
});
