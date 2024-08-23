document.addEventListener('DOMContentLoaded', function(){
    var catID = localStorage.getItem("catID");
    const url = "https://japceibal.github.io/emercado-api/cats_products/" + catID + ".json"
    const productos = document.querySelector("productos");
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const productosContainer = document.getElementById('productos');
            data.products.forEach(product => {
                // Crear el HTML para cada tarjeta
                const cardHTML = `
                    <div class="col-md-4 mb-4 wow">
                        <div class="card pruebaCard">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9"><h3 class="card-title">${product.name}</h3></div>
                                    <div class="col-3 text-end"><a class="fa-solid fa-bag-shopping h3 comprarIcon" href="cart.html"></a></div>
                                </div>
                                    <p class="card-text descripcionCard">${product.description}</p>
                                <div class="row">
                                    <p class="card-text priceCard col-6"><strong>Precio: </strong></p><p class="card-text priceCard col-6 text-end">${product.cost} ${product.currency}</p>
                                </div>
                                <div class="row">
                                    <p class="card-text cantCard col-6"><strong>Cantidad Vendidos:</strong></p> <p class="card-text cantCard col-6 text-end">${product.soldCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    console.log("funciona");                    
                    productosContainer.innerHTML+= cardHTML
        });
    })        
    .catch(error => console.error("Error en el fetch de productos", error));
});