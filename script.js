class text {
	constructor(nombre, price) {
		this.nombre = nombre;
		this.price = price;
	}
}
const button = document
	.querySelector(".button")
	.addEventListener("click", (e) => {
		const nombre = document.querySelector("#nombre").value;
		const número = document.querySelector("#número").value;
		let book = new text(nombre, número);
		console.log(book);
		e.preventDefault();
	});
