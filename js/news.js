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
  const newscontainer = document.getElementById("news-container");
  newscontainer.textContent = "";

  newsList.forEach((news) => {
    console.log(news);

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
                    <p class="fw-bold">${news.author.name}</p>
                    </div>
                </div>
        
        
                <div class="col-3 pt-2">
                    <img src="images/view.png" class="img-fluid">
                    <p class="fw-bold d-inline ps-2">${news.total_view}</p>
                </div>
                <div class="col-4 ps-5 pt-1">
                <button type="button" class="btn btn-dark mx-end">Read More</button>
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

// displayNews();
