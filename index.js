const products = [
    {
      title: "Uva Crimson",
      price: 8.99,
      category: "Frutas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Banana",
      price: 5.69,
      category: "Frutas",
      image: "./img/products/product_2.svg",
      imageDescription: "",
    },
    {
      title: "Mamão",
      price: 4.99,
      category: "Frutas",
      image: "./img/products/product_3.svg",
      imageDescription: "",
    },
    {
      title: "Maçã",
      price: 9.2,
      category: "Frutas",
      image: "./img/products/product_4.svg",
      imageDescription: "",
    },
    {
      title: "Refrigerante",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Vinho",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_6.svg",
      imageDescription: "",
    },
    {
      title: "Água Tônica",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Água de coco",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_8.svg",
      imageDescription: "",
    },
  
    {
      title: "Sabonete",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_9.svg",
      imageDescription: "",
    },
  
    {
      title: "Detergente",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_10.svg",
      imageDescription: "",
    },
  
    {
      title: "Limpa superfícies",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_11.svg",
      imageDescription: "",
    },
  
    {
      title: "Lustra Móveis",
      price: 8.99,
      category: "Higiene",
      image: undefined,
      imageDescription: "",
    },
  ];

function createList(){
    
    for(let i = 0; i < categories.length; i++){
        const category = categories[i][1]

        const categoryList = document.createElement('ul')
        
        for(let j = 0; j < products.length; j++){
            if(products[j].category.toLowerCase() == categories[i][0]){
                const product     = document.createElement('li')
                const img         = document.createElement('img')
                const main        = document.createElement('main')
                const h1          = document.createElement('h1')
                const h5          = document.createElement('h5')
                const strong      = document.createElement('strong')

                product.className = 'product'
                img.className     = 'product-img'
                main.className    = 'product-main'
                h1.className      = 'product-title'
                h5.className      = 'product-category'
                strong.className  = 'product-price'

                img.src           = products[j].image ? products[j].image : "img/products/no-img.svg"
                img.alt           = products[j].imageDescription
                h1.innerText      = products[j].title
                h5.innerText      = products[j].category
                strong.innerText  = products[j].price

                main.appendChild(h1)
                main.appendChild(h5)
                main.appendChild(strong)

                product.appendChild(img)
                product.appendChild(main)

                categoryList.appendChild(product)
                
                category.appendChild(categoryList)
            }
        }
    }
}

const categories = [['frutas'], ['bebidas'], ['higiene']]
const categories_EN = ['fruits', 'drinks', 'hygiene']

for(let i = 0; i < categories_EN.length; i++){
    categories[i].push(document.querySelector("." + categories_EN[i]))
}


createList()
