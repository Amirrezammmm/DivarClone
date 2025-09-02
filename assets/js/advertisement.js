// ---------- variables 
  const cities = JSON.parse(localStorage.getItem('cities'));
  const categories = JSON.parse(localStorage.getItem('categories'));
  const advertisements = JSON.parse(localStorage.getItem('advertisement'));
  const dataCity = JSON.parse(localStorage.getItem('dataCity'));
  const adTitle = localStorage.getItem('adTitle');
//----------------


// ------------- renderDataCity
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
//----------------------------

//--------persianFormat
function formatNumberToPersian(num) {
    if (typeof num !== "number" || isNaN(num)) {
        return 0;  
    }
    return num.toLocaleString('fa-IR');
}
//---------------------

// ----modal
const modal = document.getElementById('myModal');
  function renderModal(){
    modal.style.display='flex';
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
    window.location.href = "../pages/content.html";
  });
});
// ---endModal


//--------------filterByAdTitle
const adFilteredItem = advertisements.find(item => item.title === adTitle);
function filterByAdTitle(){
    console.log(adFilteredItem);

    const h1 = document.querySelector('.col_page_h1_title');
    const subtitle = document.querySelector('.col_page_subtitle');
    const priceValue = document.querySelector('.price_value');
    const descriptionText = document.querySelector('.description_text');
    const ktImage = document.querySelector('.kt_image');

    h1.textContent = adFilteredItem.title;
    subtitle.textContent += renderDataCity(dataCity);
    priceValue.textContent = formatNumberToPersian(adFilteredItem.price) + ' تومان';
    descriptionText.textContent = adFilteredItem.description;
    ktImage.src = adFilteredItem.image_url;
}
//----------------------------


//-----------DomLoaded
document.addEventListener('DOMContentLoaded', function(){
    const tooltipText = document.querySelector(".tooltip_text");
    tooltipText.textContent = renderDataCity(dataCity);

    document.title += "-" + renderDataCity(dataCity)+"-"+adFilteredItem.title;

    filterByAdTitle();
});
//-------------------