// ========>> Loading Categories  =========>>

const loadCategories = () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}


const displayCategories = (categories) =>{
    
    
}








loadCategories();