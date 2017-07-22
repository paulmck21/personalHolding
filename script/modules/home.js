
var Cookies = require('js-cookie');

var contactModal = document.getElementById('contactModal');
var submittedMessage = document.getElementById('submittedMessage');

var contactBtn = document.getElementById('contact').addEventListener('click', function(e){
	e.preventDefault();
	toggleActive();
});
var closeModal = document.getElementsByClassName('modal-close');

for (var i=0;i<closeModal.length;i++){
	closeModal[i].addEventListener('click', function(e){
		e.preventDefault();
		toggleActive();
	});
}

if (Cookies.get('submit')) {
	submittedMessage.classList.add('active');
	Cookies.remove('submit');
}

var form = document.getElementById('contactForm').addEventListener('submit', function(){
	Cookies.set('submit', true)
})

function toggleActive(){
	if (contactModal.classList.contains('active')) {
		contactModal.classList.remove('active');
	} else {
		contactModal.classList.add('active');
	}
}

