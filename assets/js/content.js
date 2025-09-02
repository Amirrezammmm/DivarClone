//-----------variables
  const cities = JSON.parse(localStorage.getItem('cities'));
  const categories = JSON.parse(localStorage.getItem('categories'));
  const advertisements = JSON.parse(localStorage.getItem('advertisement'));
  const dataCity = JSON.parse(localStorage.getItem('dataCity'));
  const postListContent = document.querySelector(".post_list_content");
//-----------------------

//-----------renderDataCity
  function renderDataCity(data){
    if(data === "Tehran"){ return "تهران" }
    else if(data === "Mashhad"){ return "مشهد"}
    else if(data === "Karaj"){ return "کرج"}
    else if(data === "Shiraz"){ return "شیراز"}
    else if(data === "Esfehan"){ return "اصفهان"}
    else if(data === "Ahvaz"){ return "اهواز"}
    else if(data === "Tabriz"){ return "تبریز"}
    else if(data === "Kermanshah"){ return "کرمانشاه"}
    else if(data === "Ghom"){ return "قم"}
    else if(data === "Rasht"){ return "رشت"}
  };
//--------------------------------


//-----------persianFormat
function formatNumberToPersian(num) {
    if (typeof num !== "number" || isNaN(num)) {
        return 0;  
    }
    return num.toLocaleString('fa-IR');
}
//------------------------

// ----------- filterAdvertisement
const cityFound = cities.find(city => city.slug === dataCity );
const cityId = cityFound.id ;
const filteredAdvertisements = advertisements.filter(ad => ad.city_id === cityId );
function filterByCityId(result=filteredAdvertisements){
      postListContent.innerHTML = '';
      const postListRow = document.createElement("div");
      postListRow.className ="post_list_row";
      postListContent.appendChild(postListRow);

      result.forEach(item => {
        const widgetCol = document.createElement("div");
        widgetCol.className = "widget_col";
        postListRow.appendChild(widgetCol);

        const postCardArticle = document.createElement("article");
        postCardArticle.className = "post_card_article";
        widgetCol.appendChild(postCardArticle);


        const postCardLink = document.createElement("a");
        postCardLink.className = "post_card_link";
        postCardArticle.appendChild(postCardLink);


        const postCardBody = document.createElement("div");
        postCardBody.className = "post_card_body";
        postCardLink.appendChild(postCardBody);


        const postCardInfo = document.createElement("div");
        postCardInfo.className =  "post_card_info";
        postCardBody.appendChild(postCardInfo);


        const postCardTitle = document.createElement("h2");
        postCardTitle.className = "post_card_title";
        postCardTitle.innerHTML = item.title ;
        postCardInfo.appendChild(postCardTitle);


        const postCardPrice = document.createElement("div");
        postCardPrice.className = "post_card_price";
        postCardPrice.innerHTML = formatNumberToPersian(item.price) + " تومان";
        postCardInfo.appendChild(postCardPrice);


        const postCardBottom = document.createElement("div");
        postCardBottom.className = "post_card_bottom";
        postCardBottom.innerHTML = " لحظاتی پیش در "  + renderDataCity(dataCity);
        postCardInfo.appendChild(postCardBottom);


        const postCardThumbnail = document.createElement("div");
        postCardThumbnail.className = "post_card_thumbnail";
        postCardBody.appendChild(postCardThumbnail);


        const pictureCard = document.createElement("picture");
        pictureCard.className = "picture_card";
        postCardThumbnail.appendChild(pictureCard);


        const imageCard = document.createElement("img");
        imageCard.className = "image_card";
        imageCard.src = item.image_url;
        pictureCard.appendChild(imageCard);
        

     });
     


  }
// ------------filterAdvertisement

// ---- modal
const modal = document.getElementById('myModal');
  function renderModal(){
    modal.style.display='flex'
  }
  
function closeModal() {
  modal.style.display = 'none';
}

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

function persianToEnglish(data){
    if(data === "تهران"){ return "Tehran" }
    else if(data === "مشهد"){ return "Mashhad"}
    else if(data === "کرج"){ return "Karaj"}
    else if(data === "شیراز"){ return "Shiraz"}
    else if(data === "اصفهان"){ return "Esfehan"}
    else if(data === "اهواز"){ return "Ahvaz"}
    else if(data === "تبریز"){ return "Tabriz"}
    else if(data === "کرمانشاه"){ return "Kermanshah"}
    else if(data === "قم"){ return "Ghom"}
    else if(data === "رشت"){ return "Rasht"}
}
const modalCities = document.querySelectorAll(".modal-cities-item");
modalCities.forEach(city => {
  city.addEventListener('click', function() {
    const cityName = city.textContent.trim(); 
    localStorage.setItem('dataCity', JSON.stringify(persianToEnglish(cityName)));
    console.log(JSON.parse(localStorage.getItem('dataCity')));
    location.reload();
  });
});
// ------------ endModal

//-------------------searchAd
function searchAd(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    
    if (input === '') {
        filterByCityId();
    } else {
        postListContent.innerHTML = '';
        const searchResults = filteredAdvertisements.filter(ad => 
            ad.title.toLowerCase().includes(input)
        );
        
        filterByCityId(searchResults);
    }
}
//---------------------------

//-------------DomLoaded
document.addEventListener('DOMContentLoaded',function(){
    const tooltipText = document.querySelector(".tooltip_text");
    tooltipText.textContent = renderDataCity(dataCity);

    document.title += "-" + renderDataCity(dataCity);

    filterByCityId();

    
    
    document.addEventListener('click', function (e) {
      const card = e.target.closest('.post_card_link');
      if (card) {
        e.preventDefault();
        const h2 = card.querySelector('.post_card_title');
        const title = h2 ? h2.textContent.trim() : '';
        localStorage.setItem('adTitle', title);
        window.location.href = "../pages/advertisement.html";
      }
    });



});
//----------------------