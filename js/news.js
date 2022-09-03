// ========>> Loading Categories  =========>>

const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category))
    .catch((error) => console.log(error));
};

// =========> Displaying Categories ==========>>
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    const categoryDiv = document.createElement("Div");
    categoryDiv.innerHTML = `
    <button onclick="loadNews(${category.category_id})" class="btn bg-secondary text-white link- fs-5 btn link-info">${category.category_name}</button>
    
    `;
    categoryContainer.appendChild(categoryDiv);
  });
};

loadCategories();

// ====>> Loadging News =========>>

const loadNews = (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data))
    .catch((error) => console.log(error));
};

const displayNews = (newsList) => {
  const newscontainer = document.getElementById("newsHeading-container");
  newscontainer.textContent = "";

  console.log(newsList.length);
  

  newsList.forEach((news) => {

    const newsDiv = document.createElement("div");

    newsDiv.innerHTML = `
        <div class="card my-5">
        <div class="row">
            <div class="col-md-4">
            <img src="${
                news.thumbnail_url
            }" class="img-fluid h-100 rounded-start" alt="...">
            </div>
        
            <div class="col-md-7">
            <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${news.title}</h5>
                <p class="card-text mt-4 mb-5">${
                news.details.slice(0, 400) + "......"
                }</p>
        
                <div class="text-center row">
        
                <div class="col-4 d-flex gap-1">
                    <img src="${
                    news.author.img
                    }" class="img-fluid w-25 rounded-circle">
                    <div> </div>
                    <div>
                    <p class="fw-bold">${news.author.name ? news.author.name : "No data available"}</p>
                    </div>
                </div>
        
        
                <div class="col-3 pt-2">
                    <img src="images/view.png" class="img-fluid">
                    <p class="fw-bold d-inline ps-2">${news.total_view ? news.total_view : "No data available"}</p>
                </div>
                <div class="col-4 ps-5 pt-1">

                <button onclick="loadFullNews('${news._id}')" type="button" class="btn btn-dark mx-end" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>

                
                </div> 

            </div>
            </div>
            </div>
        </div>
        </div>
    `;
    newscontainer.appendChild(newsDiv);
  });
};



// =======> Loading Full News ======>

 const loadFullNews = (newsId) =>{
  const url = `https://openapi.programming-hero.com/api/news/${newsId}
  `;

  
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFullNews(data.data[0]))
    .catch(error => console.log(error))
    
};

//  =========> Display Full News ========>


const displayFullNews = (newsItem) =>{
  
 


    //  ====> News Title =====>
    const newsTitle = document.getElementById("news-title")
  newsTitle.innerText = newsItem.title;
  
    // ======> News Photo =====>
   const photoDiv = document.getElementById("photo-div");
   photoDiv.innerHTML = `<img src = "${newsItem.image_url}" class=img-fluid> `;


       // ====> Author and view Details =====>
  const authorDetail = document.getElementById("author-detail");
  authorDetail.innerHTML = `
  <img src = "${newsItem.author.img}" class="img-fluid w-25 rounded-circle">
  <p>${newsItem.author.name ? newsItem.author.name : "No data available"}</p>
  <p>Date : ${newsItem.author.published_date.slice(0,10)}</p>
  <img src="images/view.png" class="img-fluid">
  <p class="fw-bold d-inline ps-2">${newsItem.total_view ? newsItem.total_view : "No data available"}</p>
  `;
    // =======> Full News =======>
   const detailNews = document.getElementById("detail-news");
   detailNews.innerHTML = `<p>${newsItem.details}</p>`

   console.log(newsItem);
   


 
}


loadNews(01);