function increaseLikeCount(element) {

	var likeNumberElement = element.parentElement.parentElement.firstElementChild.firstElementChild; 
	var likeNumberValue = Number(likeNumberElement.innerHTML);
	likeNumberElement.innerHTML = likeNumberValue + 1;
}

function addMessage(inputId, msgContainerId, sevenId) {

	var inputElement = document.getElementById(inputId);
	var msgContainerElement = document.getElementById(msgContainerId);
	var sevenElement = document.getElementById(sevenId);

	var sevenValue = Number(sevenElement.innerHTML);
	sevenElement.innerHTML = sevenValue + 1;
	
	msgContainerElement.innerHTML = msgContainerElement.innerHTML + getMessageTemplate(inputElement.value); 
	// clear input text
	inputElement.value = "";
}

function getMessageTemplate(messageText) {

	var template = '<div class="single-message">' +
						'<div class="border-woman1"></div>' +
						'<img src="img/current-user-img.png" alt="Current-user">' +
						'<p>' + messageText + '</p>' + 
						'<span class="date">' + new Date().toDateString() + '</span>' +
				   '</div>';

	return template;
}
