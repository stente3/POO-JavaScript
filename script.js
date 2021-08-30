class TextBlock {
	constructor(nombre, price) {
		this.nombre = nombre;
		this.price = price;
	}
}
// Reset form validation
function wasValidate() {
	document.querySelector(".needs-validation").classList.remove("was-validated");
}
// Add table of content with new
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
					form.classList.add("was-validated");
				} else {
					event.preventDefault();
					const productName = document.querySelector("#product").value;
					const productPrice = document.querySelector("#price").value;
					wasValidate();
					const productDescription =
						document.querySelector("#description").value;
					const tableOfContent = document.querySelector(".table-of-content");
					let content = document.createElement("div");
					content.classList.add("mw-100");
					content.innerHTML = `<div class="container-all-content text-center p-4 mb-2 w-100 border">
					<div class="container-button col-md-10 m-md-auto my-md-0 row">
						<p class="product-name col-6">
							<strong>Product Name = </strong> ${productName}
						</p>
						<p class="product-price col-6">
							<strong>Product Price = </strong> ${productPrice}
						</p>
						<p class="product-description mw-50 col-12 text-start">
							${productDescription}
						</p>
					</div>
					<input type="button" value="Eliminar" class="bg-danger btn" />
				</div>`;
					tableOfContent.appendChild(content);
					wasValidate();
				}
			},
			false
		);
	});
})();
