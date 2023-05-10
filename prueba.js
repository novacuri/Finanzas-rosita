/* const productTemplate = document.querySelector('#product-template');
const productContainer = document.querySelector('#product-list');

const products = [
    {name: 'Product 1', description: 'Description 1', price: '$10', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fla.network%2Fciudadania-y-finanzas%2F&psig=AOvVaw32TgDskoliOPYjFVSUwYU2&ust=1683762043652000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCU5sm06f4CFQAAAAAdAAAAABAE'},
    {name: 'Product 2', description: 'Description 2', price: '$20', imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.plenainclusion.org%2Fwp-content%2Fuploads%2F2021%2F06%2Filustracion-mujer-banco-dinero-hucha.png&tbnid=ZSgpwobx7A4nFM&vet=10CAQQxiAoAmoXChMI4JTmybTp_gIVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.plenainclusion.org%2Fnoticias%2Ffinanzas-para-mortales-una-guia-en-lectura-facil-para-saber-como-controlar-tu-dinero%2F&docid=-sxPlxVLdUzUXM&w=943&h=726&itg=1&q=imagen%20finanzas&client=opera&ved=0CAQQxiAoAmoXChMI4JTmybTp_gIVAAAAAB0AAAAAEAc'},

]

products.forEach(product => {
    const instance = productTemplate.textContent.cloneNode(true);
    instance.querySelector('.product-image').src = product.imageUrl;
    instance.querySelector('.product-name').textContent = product.name;
    instance.querySelector('.product-description').textContent = product.description;
    instance.querySelector('.product-price').textContent = product.price;
    productContainer.appendChild(instance);
});
 */
const productTemplate = document.querySelector("#product-template");
// const productContainer = document.querySelector("#product-list");

console.log("Variable productTemplate es:", productTemplate);
// console.log("Variable productContainer es:", productContainer);

const products = [
	{
		name: "Product 1",
		description: "Description 1",
		price: "$10",
		imageUrl:
			"https://www.plenainclusion.org/wp-content/uploads/2021/06/ilustracion-mujer-banco-dinero-hucha.png",
	},
	{
		name: "Product 2",
		description: "Description 2",
		price: "$20",
		imageUrl:
			"https://smoda.elpais.com/wp-content/uploads/2022/03/Dinero-940x702.jpg",
	},
];

/* products.forEach((product) => {
	const instance = productTemplate.textContent.cloneNode(true);
	instance.querySelector(".product-image").src = product.imageUrl;
	instance.querySelector(".product-name").textContent = product.name;
	instance.querySelector(".product-description").textContent =
		product.description;
	instance.querySelector(".product-price").textContent = product.price;
	productContainer.appendChild(instance);
}); */

// Código prueba JPPE --------------------------------------------------------

//Templates generales para armar la estructura HTML con JavaScript
const populateProductTemplate = (product) => {
	return `<div class="product">
                <img class="product-image" width=300px src="${product.imageUrl}" alt="">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <span class="product-price">${product.price}</span>
            </div>`;
};
//Recorro el array de productos y armo los datos para cargarlos en pantalla
const loadProducts = () => {
	productTemplate.innerHTML = "";
	products.forEach(
		(product) => (productTemplate.innerHTML += populateProductTemplate(product))
	);
	console.log("Variable productTemplate interna es:", productTemplate);
	return productTemplate;
};
loadProducts();
console.log("Variable productTemplate es:", productTemplate);

//Genero una página nueva

function generateNewWindow() {
	let newWindow = window.open("");
	newWindow.document.open();

	/* const newElem = Object.assign(document.createElement(`div`), {
		id: `myBrandnewDiv2`,
		innerHTML: `div#myBrandnewDiv2 signing in. 
			I was <i>assigned</i> using <code>Object.assign</code>&hellip;`,
	});
	document.body.appendChild(newElem); */

	let dynamicContent = productTemplate.outerHTML;

	console.log("Variable dynamicContent es:", dynamicContent);
	console.log(typeof dynamicContent);

	let newPageHTMLStart =
		"<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Prueba Nueva Página</title></head><body>";

	let newPageHTMLEnd = "</body></html>";

	let newPageHTML = newPageHTMLStart + dynamicContent + newPageHTMLEnd;

	console.log("Variable newPageHTML es:", newPageHTML);

	newWindow.document.write(newPageHTML);

	newWindow.document.close();
}
generateNewWindow();
