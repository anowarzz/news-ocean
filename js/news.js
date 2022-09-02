// ========>> Loading Categories  =========>>

const loadCategories = () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}


const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("category-container");

    categories.forEach( (category) =>{

    const categoryDiv = document.createElement('Div');
    categoryDiv.innerHTML = `
    <a href = "" class="btn bg-secondary text-white link- fs-5 btn bg-seconday px-3 border border-dark">${category.category_name}</a>
    `;
    categoryContainer.appendChild(categoryDiv)
    })
    
}



loadCategories();