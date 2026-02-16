const loadoCategories = async() => {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json();
    displayCategories(data)
}


const loadoByCategories = async(category) => {
    // console.log(category)
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await res.json();
    // console.log(data)
    displayloadoByCategories(data)
}
loadoByCategories("jewelery")


const displayCategories = (categories) => {
    const categorieId = document.getElementById("categorie-id");
    for (let categorie of categories) {
        const btnDiv = document.createElement("li");
        btnDiv.innerHTML = `
            <button onclick='loadoByCategories("${categorie}")' class="btn btn-outline rounded-xl"> ${categorie}</button>
        `;
        categorieId.append(btnDiv);
    }
}
loadoCategories();



const displayloadoByCategories = (products) => {
    const levelByCategories = document.getElementById("loadbycategory");
    levelByCategories.innerHTML = "";

    for (let product of products) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <div>
                <div class="card bg-base-100 shadow-sm ">
                    <figure class="bg-gray-200">
                        <img class="p-8"
                        src="${product.image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <div class="badge text-primary bg-gray-200">${product.category}</div>
                            <div class="text-gray-500"> <span class="text-yellow-500"><i class="fa-solid fa-star"></i></span> ${product.rating.rate} <span>(${product.rating.count})</span></div>
                        </div>
                        <h2 class="card-title my-2">${product.title} </h2>
                        <div class="card-actions justify-between">
                            <button class="btn btn-outline btn-primary flex-1"> <i class="fa-solid fa-eye"></i> Details</button>
                            <button class="btn btn-primary flex-1"><i class="fa-solid fa-cart-plus"></i> Add</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        levelByCategories.append(btnDiv);
    }
}