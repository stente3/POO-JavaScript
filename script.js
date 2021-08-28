class TextBlock {
	constructor(nombre, price) {
		this.nombre = nombre;
		this.price = price;
	}
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				} else {
					event.preventDefault();
					const productName = document.querySelector("#product").value;
					const productPrice = document.querySelector("#price").value;
					console.log(productName);
					console.log(productPrice);
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
