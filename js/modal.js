	// Modal==================
	let modal = document.querySelector('#myModal');
	let closeModal = document.querySelector('#close');

	document.addEventListener("click", (event) => {
	    if (event.target.closest('.product-body')) {
	        modal.style.opacity = "1";
	        modal.style.visibility = "visible";

	        bgBlack.style.opacity = "1";
	        bgBlack.style.visibility = "visible";

	        document.body.style.overflow = "hidden";
	    } else if (event.target.closest('#close')) {
	        modal.style.opacity = "0";
	        modal.style.visibility = "hidden";

	        bgBlack.style.opacity = "0";
	        bgBlack.style.visibility = "hidden";

	        document.body.style.overflow = "auto";
	    }
	});