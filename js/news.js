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
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
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
<div class="card my-5">
  <div class="row">
    <div class="col-md-4">
      <img src="${news.thumbnail_url}" class="img-fluid h-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title fs-3 fw-bold">${news.title}</h5>
        <p class="card-text my-4">${news.details.slice(0,400) + '......'}</p>

        <div class="text-center row">

          <div class="col-4 d-flex gap-1">
            <img src="${news.author.img}" class="img-fluid w-25 rounded-circle">
            <div> </div>
            <div>
            <p class="fw-bold">${news.author.name}</p>
             </div>
          </div>



          <div class="col-4">
            Column 2
          </div>
          <div class="col-4">
            Column 3
          </div>
          <div class="">
          <button type="button" class="btn btn-dark">Read More</button>
          </div>
          
      </div>

      </div>
    </div>
  </div>

  
  
</div>
`;
newscontainer.appendChild(newsDiv);

        
    })
 }


 
loadNews();