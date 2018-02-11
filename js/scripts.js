function increaseLikeCount(element) {

	var likeNumberElement = element.parentElement.parentElement.firstElementChild.firstElementChild; 
	var likeNumberValue = Number(likeNumberElement.innerHTML);
	likeNumberElement.innerHTML = likeNumberValue + 1;
}