const ktTextfield = document.querySelector(".kt-textfield");

ktTextfield.addEventListener('click', (e)=>{
    e.stopPropagation();
    ktTextfield.classList.add("active");
});
document.addEventListener('click', ()=>{
    ktTextfield.classList.remove("active");
});

const cities = [
    {id:0,name:"تهران",slug:"Tehran",isActive:true,province_id:0},
    {id:1,name:"مشهد",slug:"Mashhad",isActive:true,province_id:1},
    {id:2,name:"کرج",slug:"Karaj",isActive:true,province_id:2},
    {id:3,name:"شیراز",slug:"Shiraz",isActive:true,province_id:3},
    {id:4,name:"اصفهان",slug:"Esfehan",isActive:true,province_id:4},
    {id:5,name:"اهواز",slug:"Ahvaz",isActive:true,province_id:5},
    {id:6,name:"تبریز",slug:"Tabriz",isActive:true,province_id:6},
    {id:7,name:"کرمانشاه",slug:"Kermanshah",isActive:true,province_id:7},
    {id:8,name:"قم",slug:"Ghom",isActive:true,province_id:8},
    {id:9,name:"رشت",slug:"Rasht",isActive:true,province_id:9}
];
const categories = [
  {
    id: 0,
    title: "موبایل",
    description: "خرید و فروش انواع گوشی‌های موبایل نو و دست دوم"
  },
  {
    id: 1,
    title: "لوازم خانگی",
    description: "انواع تلویزیون، یخچال، ماشین لباسشویی و سایر لوازم منزل"
  },
  {
    id: 2,
    title: "خودرو",
    description: "خرید و فروش انواع خودروهای سواری، وانت و سنگین"
  },
  {
    id: 3,
    title: "لپ‌تاپ و کامپیوتر",
    description: "لپ‌تاپ، کیس، مانیتور، قطعات جانبی و تجهیزات شبکه"
  },
  {
    id: 4,
    title: "ورزش و سرگرمی",
    description: "دوچرخه، وسایل ورزشی، آلات موسیقی و سرگرمی‌های دیگر"
  },
  {
    id: 5,
    title: "لوازم منزل",
    description: "مبل، فرش، پرده، میز و وسایل دیگر دکوراسیون داخلی"
  }
];
const advertisements = [
    // city_id: 0
    {id:0,title:"گوشی آیفون ۱۳ تمیز",description:"...",price:35000000,city_id:0,category_id:0,user_id:5,created_at:"...",status:"published",image_url:"../images/iphone13.jpeg"},
    {id:1,title:"تلویزیون ال‌جی ۴۳ اینچ سالم",description:"تلویزیون ال‌جی ۴۳ اینچ، بدون خط و خش، کنترل دارد. فقط فروش",price:7200000,city_id:0,category_id:1,image_url:"../images/tvLG.jpg"},
    {id:2,title:"پراید ۱۳۱ مدل ۹۴، کم‌کارکرد",description:"پراید مدل ۹۴، کارکرد ۷۵۰۰۰، بیمه تا ۶ ماه آینده، بی‌رنگ",price:128000000,city_id:0,category_id:2,image_url:"../images/pride.jpg"},
    {id:3,title:"لپ‌تاپ لنوو آیدیاپد Core i5",description:"CPU: i5 نسل هشتم، رم ۸، SSD 256، باتری سالم، تمیز",price:19500000,city_id:0,category_id:3,image_url:"../images/idpad.jpg"},
    {id:4,title:"دوچرخه کوهستان حرفه‌ای",description:"دوچرخه حرفه‌ای، کمک‌دار، دنده‌ای، بدنه آلومینیومی سبک",price:4700000,city_id:0,category_id:4,image_url:"../images/bicycle.jpeg"},
    {id:5,title:"مبل ۷ نفره راحتی، تمیز",description:"یک دست مبل ۷ نفره، سالم و تمیز، پارچه نانو، فوری فروشی",price:8600000,city_id:0,category_id:5,image_url:"../images/sofa.jpg"},
    // city_id: 1
    {id:6,title:"لپ‌تاپ لنوو i5 نسل ۱۰",description:"رم ۸، SSD 256، باتری سالم، تمیز",price:18500000,city_id:1,category_id:2,image_url:"../images/lenovo-V15.jpg"},
    {id:7,title:"فرش ۱۲ متری دستباف",description:"کاملاً سالم، طرح ترنج، خریداری شده از تبریز",price:27000000,city_id:1,category_id:1,image_url:"../images/farsh.jpg"},
    {id:8,title:"دوربین عکاسی کانن EOS 200D",description:"لنز ۱۸-۵۵، شاتر پایین، تمیز و بدون خط و خش",price:25000000,city_id:1,category_id:2,image_url:"../images/camera.jpg"},
    {id:9,title:"میز ناهارخوری ۶ نفره چوبی",description:"رنگ قهوه‌ای سوخته، ضد آب، بدون خط و خوردگی",price:9500000,city_id:1,category_id:1,image_url:"../images/desk.jpg"},
    {id:10,title:"کفش اسپرت نایک اصل",description:"سایز ۴۲، رنگ مشکی، فقط یک بار پوشیده شده",price:1600000,city_id:1,category_id:3,image_url:"../images/snikers.jpg"},
    {id:11,title:"اسکوتر برقی ۶.۵ اینچ",description:"مدل ۲۰۲۴، باتری قوی، با شارژر",price:5200000,city_id:1,category_id:4,image_url:"../images/smart-balance-wheel-4.jpg"},
     // city_id: 2
    { id: 12, title: "موتور سیکلت هوندا ۱۲۵", description: "مدل ۹۹، بیمه تا آخر سال", price: 27000000, city_id: 2, category_id: 5, image_url:"../images/honda125.jpg" },
    { id: 13, title: "تلویزیون ۵۵ اینچ سامسونگ", description: "۴K، ریموت هوشمند، تمیز", price: 21000000, city_id: 2, category_id: 1,image_url:"../images/تلویزیون-55-اینچ-سامسونگ-BU8100-5.jpg" },
    { id: 14, title: "PS5 کارکرده", description: "دو دسته، ۳ بازی رایگان", price: 33000000, city_id: 2, category_id: 4,image_url: "../images/ps5.jpg" },
    { id: 15, title: "مبل راحتی ۷ نفره", description: "بدون پارگی، فنر سالم", price: 18500000, city_id: 2, category_id: 1, image_url:"../images/مبل-راحتی-7-نفره-پاریس.jpg" },
    { id: 16, title: "دوچرخه کوهستان حرفه‌ای", description: "دنده‌ای، ترمز دیسکی، سبک", price: 7500000, city_id: 2, category_id: 3,image_url:"../images/moantainb.jpg" },
    { id: 17, title: "گوشی سامسونگ A54", description: "۵G، ۱۲۸ گیگ، با جعبه", price: 15500000, city_id: 2, category_id: 2,image_url:"../images/a54.jpg" },

    // city_id: 3
    { id: 18, title: "لپتاپ لنوو i7", description: "۱۶ گیگ رم، SSD، تمیز", price: 40000000, city_id: 3, category_id: 2,image_url:"../images/lenovoi7.jpg" },
    { id: 19, title: "یخچال فریزر دو قلو", description: "سالم و تمیز، برند امرسان", price: 23000000, city_id: 3, category_id: 1,image_url:"../images/refrig.jpg" },
    { id: 20, title: "کنسول Xbox Series X", description: "نو با گارانتی", price: 36000000, city_id: 3, category_id: 4,image_url:"../images/xbox.jpg" },
    { id: 21, title: "صندلی اداری ارگونومیک", description: "مناسب کار طولانی", price: 4500000, city_id: 3, category_id: 1,image_url:"../images/chair.jpg" },
    { id: 22, title: "دوچرخه جاده‌ای حرفه‌ای", description: "سبک، آلومینیومی", price: 11000000, city_id: 3, category_id: 3,image_url:"../images/مسابقه_ای.jpg" },
    { id: 23, title: "گوشی Xiaomi Note 12", description: "رم ۸، ۲۵۶ گیگ", price: 12000000, city_id: 3, category_id: 2,image_url:"../images/xiaomiNote12.jpg" },

    // city_id: 4
    { id: 24, title: "کولر گازی ۱۸۰۰۰", description: "اینورتر، کم‌مصرف", price: 14500000, city_id: 4, category_id: 1,image_url:"../images/cooler.webp" },
    { id: 25, title: "میز کامپیوتر MDF", description: "دارای کشو و طبقه", price: 2000000, city_id: 4, category_id: 1,image_url:"../images/cpDesk.jpg" },
    { id: 26, title: "PS4 Slim 1TB", description: "تمیز، با ۵ بازی", price: 18000000, city_id: 4, category_id: 4,image_url:"../images/ps4.webp" },
    { id: 27, title: "تبلت سامسونگ S6 Lite", description: "با قلم و کاور", price: 9500000, city_id: 4, category_id: 2,image_url:"../images/tablet.webp" },
    { id: 28, title: "دوچرخه بچگانه", description: "سالم، رنگ صورتی", price: 1300000, city_id: 4, category_id: 3,image_url:"../images/biceKido.jpg" },
    { id: 29, title: "گوشی iPhone 12 Pro", description: "۱۲۸ گیگ، خاکستری", price: 32000000, city_id: 4, category_id: 2,image_url:"../images/iphone12promax.jpg" },

    // city_id: 5
    { id: 30, title: "ماشین ظرفشویی بوش", description: "ساخت آلمان، سالم", price: 26000000, city_id: 5, category_id: 1,image_url:"../images/zarfmachine.webp" },
    { id: 31, title: "اسکوتر برقی", description: "تا ۲۰ کیلومتر باطری", price: 8700000, city_id: 5, category_id: 3,image_url:"../images/skooter.webp" },
    { id: 32, title: "گوشی Poco X6", description: "۵G، حافظه ۲۵۶", price: 14000000, city_id: 5, category_id: 2,image_url:"../images/pocox6.jpg" },
    { id: 33, title: "کامپیوتر گیمینگ", description: "گرافیک 3060، رم ۳۲", price: 58000000, city_id: 5, category_id: 2,image_url:"../images/cpgaming.png" },
    { id: 34, title: "مبل تختخواب‌شو", description: "دو نفره، رنگ زرشکی", price: 7500000, city_id: 5, category_id: 1,image_url:"../images/sofaAndBed.jpg" },
    { id: 35, title: "نینتندو سوییچ OLED", description: "تمیز، با کیف", price: 19000000, city_id: 5, category_id: 4,image_url:"../images/nintendo.jpg" },

    // city_id: 6
    { id: 36, title: "سرویس چوب خواب", description: "کمد، تخت، میز", price: 30000000, city_id: 6, category_id: 1,image_url:"../images/woodenBed.jpg" },
    { id: 37, title: "اسکیت برد حرفه‌ای", description: "چوبی، برند معروف", price: 2700000, city_id: 6, category_id: 3,image_url:"../images/skateBord.jpg" },
    { id: 38, title: "گوشی iPhone 14 Pro", description: "مشکی، ۲۵۶ گیگ", price: 47000000, city_id: 6, category_id: 2,image_url:"../images/iphone14ProMax.jpg" },
    { id: 39, title: "PS4 Fat کارکرده", description: "۱ ترابایت، با ۲ دسته", price: 16000000, city_id: 6, category_id: 4,image_url:"../images/ps4fat.webp"},
    { id: 40, title: "تلویزیون ۴۳ اینچ ال جی", description: "Full HD، سالم", price: 9800000, city_id: 6, category_id: 1,image_url:"../images/lg43.webp" },
    { id: 41, title: "دوچرخه کورسی", description: "ساخت تایوان", price: 8800000, city_id: 6, category_id: 3,image_url:"../images/raceBice.webp" },

    // city_id: 7
    { id: 42, title: "لباسشویی اتوماتیک", description: "درام بزرگ، تمیز", price: 16500000, city_id: 7, category_id: 1,image_url:"../images/clothewash.jpg" },
    { id: 43, title: "لپتاپ ایسوس i5", description: "SSD، رم ۸", price: 28000000, city_id: 7, category_id: 2,image_url:"../images/isus.webp"},
    { id: 44, title: "گوشی Huawei Nova 11", description: "نو، آنباکس نشده", price: 17800000, city_id: 7, category_id: 2,image_url:"../images/hoavi.jpg" },
    { id: 45, title: "میز گیمینگ RGB", description: "مناسب استریمرها", price: 4200000, city_id: 7, category_id: 1,image_url:"../images/RGBdesk.jpg"},
    { id: 46, title: "نینتندو Wii", description: "با دسته‌ها و بازی", price: 8500000, city_id: 7, category_id: 4,image_url:"../images/wii.webp" },
    { id: 47, title: "دوچرخه بچه‌گانه پسرانه", description: "سالم و تمیز", price: 1600000, city_id: 7, category_id: 3,image_url:"../images/runner.jpg" },

    // city_id: 8
    { id: 48, title: "گوشی iPhone SE 2022", description: "کوچک و قدرتمند", price: 19000000, city_id: 8, category_id: 2,image_url:"../images/se2022.jpg" },
    { id: 49, title: "مبل کلاسیک سلطنتی", description: "با میز و صندلی", price: 38000000, city_id: 8, category_id: 1,image_url:"../images/مبل-کلاسیک-سلطنتی-ظریف.jpg"},
    { id: 50, title: "پلی‌استیشن ۳ با ۱۰ بازی", description: "قدیمی اما سالم", price: 6000000, city_id: 8, category_id: 4,image_url:"../images/ps3.webp" },
    { id: 51, title: "دوچرخه BMX", description: "سایز متوسط، سبک", price: 2900000, city_id: 8, category_id: 3,image_url:"../images/bmx.jpg" },
    { id: 52, title: "لپتاپ HP i3", description: "مناسب کارهای سبک", price: 16500000, city_id: 8, category_id: 2,image_url:"../images/hpI3.jpg" },
    { id: 53, title: "یخچال بالا پایین ال جی", description: "کم صدا، سالم", price: 22000000, city_id: 8, category_id: 1,image_url:"../images/lgRefrig.webp" },

    // city_id: 9
    { id: 54, title: "میز تحریر کودک", description: "رنگی و مقاوم", price: 1200000, city_id: 9, category_id: 1,image_url:"../images/tahrir.jpg" },
    { id: 55, title: "گوشی OnePlus 11R", description: "۵G، شارژ سریع", price: 21000000, city_id: 9, category_id: 2,image_url:"../images/onePlus.webp" },
    { id: 56, title: "اسپیکر بلوتوث JBL", description: "صدا عالی، باس قوی", price: 1600000, city_id: 9, category_id: 1,image_url:"../images/JBL.webp" },
    { id: 57, title: "کنسول PSP", description: "نوستالژیک، سالم", price: 4500000, city_id: 9, category_id: 4, image_url:"../images/psp.webp" },
    { id: 58, title: "دوچرخه بزرگسال کوهستان", description: "مناسب مسیرهای سخت", price: 8200000, city_id: 9, category_id: 3,image_url:"../images/bozorgKoohestan.jpg" },
    { id: 59, title: "گوشی Realme C55", description: "باطری قوی، صفحه بزرگ", price: 9800000, city_id: 9, category_id: 2,image_url:"../images/Realme-C55-1.jpg" }
]; 
const cityCards = document.querySelectorAll('.city_card');
window.onload = function(){
  const citiesLocal = localStorage.getItem('cities');
  const categoriesLocal = localStorage.getItem('categories');
  const advertisementsLocal = localStorage.getItem('advertisements');

  if(!citiesLocal && !categoriesLocal && !advertisementsLocal){
    localStorage.setItem("cities", JSON.stringify(cities));
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("advertisement",JSON.stringify(advertisements));
  }
}
cityCards.forEach(card => {
  card.addEventListener('click', function () {
    localStorage.setItem('dataCity', JSON.stringify(card.id));
    window.location.href = "assets/pages/content.html";
  });
});

//------------searchCity
function searchCity(){
  const input = document.getElementById("textfield-input").value.toLowerCase();
  if(input===''){
    cityCards.forEach(c=>{
      c.style.display = "inline-block";
    })
  }
  else{
    cityCards.forEach(c=>{
      if(c.textContent.includes(input)){
        c.style.display = "inline-block";
      }
      else{
        c.style.display = "none";
      }
    });
    
  }
}
//---------------------