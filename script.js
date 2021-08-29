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
					const productDescription =
						document.querySelector("#description").value;
					const tableOfContent = document.querySelector(".table-of-content");
					let content = document.createElement("div");
					content.innerHTML = `<div class="container-all-content text-center py-4 border mb-2 w-100">
					<div class="container-button col-md-10 m-md-auto d-flex my-md-0 justify-content-around">
						<p class="product-name"><strong>Product Name = </strong> ${productName}</p>
						<p class="product-price"><strong>Product Price = </strong> ${productPrice}</p>
						<p class="product-description mw-50">${productDescription}</p>
					</div>
					<input type="button" value="Eliminar" class="bg-danger btn">
				</div>`;
					tableOfContent.appendChild(content);
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
