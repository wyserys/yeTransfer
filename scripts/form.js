const TOKEN = "5971108864:AAFAB2x5ABt_jAvi_HNDFiRR9H-AzpDg1wE";
const CHAT_ID = "-1001948901879";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');


document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault();

	let message = `<b>Откуда:</b> ${ this.fromwhere.value }\n`;
	message += `<b>Куда:</b> ${ this.where.value }\n`;
	message += `<b>Имя:</b> ${ this.name.value }\n`;
	message += `<b>Телефон:</b> ${ this.phone.value }`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: `html`,
		text: message
	})
	.then((res) => {
		this.fromwhere.value = "";
		this.where.value = "";
		this.name.value = "";
		this.phone.value = "";
		success.style.display = "block";
	})
	.catch((err) => {
		console.warn(err);
	})
	.finally(() => {
		console.log('Конец');
	})
})

const closeButton = document.getElementById('close-button');
const notification = document.getElementById('notification');

closeButton.addEventListener('click', () => {

	notification.style.display = 'none';
});