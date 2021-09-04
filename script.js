class TextBlock {
	constructor(name, price, description) {
		this.name = name;
		this.price = price;
		this.description = description;
	}
}
document.querySelector("#product").focus();
// this class contains all the content that interacts with the client
class UI {
	resetForm() {
		let form = document.querySelector(".needs-validation");
		form.classList.remove("was-validated");
		form.reset();
		document.querySelector("#product").focus();
	}
	addContent() {
		const name = document.querySelector("#product").value;
		const price = document.querySelector("#price").value;
		const description = document.querySelector("#description").value;
		let newContent = new TextBlock(name, price, description);
		const tableOfContent = document.querySelector(".table-of-content");
		let content = document.createElement("div");
		content.classList.add("mw-100");
		content.innerHTML = `<div class="container-all-content text-center p-4 mb-2 w-100 border">
			<div class="container-button col-md-10 m-md-auto my-md-0 row">
					<p class="product-name col-6">
						<strong>Product Name = </strong> ${newContent.name}
					</p>
					<p class="product-price col-6">
						<strong>Product Price = </strong> $ ${newContent.price}
					</p>
					<p class="product-description mw-50 col-12 text-start">
						${newContent.description}
					</p>
			</div>
				<input type="button" value="Eliminar" class="btn-remove bg-danger btn" />
		</div>`;
		tableOfContent.appendChild(content);
	}
	removeContent() {
		const button = document.querySelectorAll(".btn-remove");
		button.forEach((e) => {
			e.addEventListener("click", (e) => {
				e.target.parentElement.parentElement.remove();
			});
		});
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
					form.classList.add("was-validated");
				} else {
					event.preventDefault();
					let reset = new UI();
					reset.addContent();
					let userInter = new UI();
					userInter.resetForm();
					let remove = new UI();
					userInter.removeContent();
				}
			},
			false
		);
	});
})();
