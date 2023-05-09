const productTemplate = document.querySelector("#product-template");
const productContainer = document.querySelector("#product-list");

const products = [
    {name: "Product 1", description: "Description 1", price: "$10", imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fla.network%2Fciudadania-y-finanzas%2F&psig=AOvVaw32TgDskoliOPYjFVSUwYU2&ust=1683762043652000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCU5sm06f4CFQAAAAAdAAAAABAE"},
    {name: "Product 2", description: "Description 2", price: "$20", imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.plenainclusion.org%2Fwp-content%2Fuploads%2F2021%2F06%2Filustracion-mujer-banco-dinero-hucha.png&tbnid=ZSgpwobx7A4nFM&vet=10CAQQxiAoAmoXChMI4JTmybTp_gIVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.plenainclusion.org%2Fnoticias%2Ffinanzas-para-mortales-una-guia-en-lectura-facil-para-saber-como-controlar-tu-dinero%2F&docid=-sxPlxVLdUzUXM&w=943&h=726&itg=1&q=imagen%20finanzas&client=opera&ved=0CAQQxiAoAmoXChMI4JTmybTp_gIVAAAAAB0AAAAAEAc"},

]

products.forEach(product => {
    const instance = productTemplate.textContent.cloneNode(true);
    instance.querySelector(".product-image").src = product.imageUrl;
    instance.querySelector(".product-name").textContent = product.name;
    instance.querySelector(".product-description").textContent = product.description;
    instance.querySelector(".product-price").textContent = product.price;
    productContainer.appendChild(instance);
});

