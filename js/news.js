// ========>> Loading Categories  =========>>

const loadCategories = () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
    .catch(error => console.log(error))
}

// =========> Displaying Categories ==========>>
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("category-container");

    categories.forEach( (category) =>{

    const categoryDiv = document.createElement('Div');
    categoryDiv.innerHTML = `
    <button onclick="loadNews()" class="btn bg-secondary text-white link- fs-5 btn link-info">${category.category_name}</button>
    
    `;
    categoryContainer.appendChild(categoryDiv)
    })
    
}

loadCategories();


// ====>> Loadging News =========>>

 const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayNews(data.data))
    .catch(error => console.log(error))
 }


 const displayNews = newsList =>{
    
    const newscontainer = document.getElementById("news-container");

    newsList.forEach(news =>{
        console.log(news);

const newsDiv = document.createElement('div');

newsDiv.innerHTML = `
<div class="card my-4 border border-danger">
  <div class="row">
    <div class="col-md-4 border">
      <img src="${news.thumbnail_url}" class=" w-100 rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title fs-3 fw-bold">${news.title}</h5>
        <p class="card-text">${news.details}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
`;
newscontainer.appendChild(newsDiv);

        
    })
 }


 
loadNews();