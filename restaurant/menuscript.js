// document.addEventListener('DOMContentLoaded', function () {
//     const menu = document.querySelector('.menu');
//     const menuPages = document.querySelectorAll('.menu-page');
//     let currentPage = 0;
let array = [
  `<div class="menu-page ">
<h1>Asian</h1>
<ul>
    <li>Classic Hakka Noodles</li>
    <li>Veg Manchurian</li>
    <li>Chilli Paneer</li>
    <li>Classic Veg Momos</li>
    <li>Chilli Potato</li>
    <li>Honey Chilli Potato</li>
    <li>Mushroom Soup</li>
    <li>Chiili Garlic Noodles</li>
    <li>Chicken Fried Rice</li>
    <li>Spicy Chicken Momos</li>
    <li>Dynamite Chicken</li>
    <li>Chilli Chicken</li>
</ul>
</div>`,
`<div class="menu-page ">
<h1>Platters</h1>
<ul>
    <li>Amritsari Kulche</li>
    <li>Matar Kulcha</li>
    <li>Chole Bhature</li>
    <li>Tandoori Platter</li>
    <li>Chinese Platter</li>
    <li>Veg Thali</li>
    <li>Aloo Paratha Thali</li>
    <li>South Indian Platter</li>
</ul>
</div>`,
` <div class="menu-page">
<h1>South Indian</h1>
<ul>
    <li>Sambar Vada</li>
    <li>Idli Sambar</li>
    <li>PLain Dosa</li>
    <li>Masala Dosa</li>
    <li>Rawa Masala Dosa</li>
    <li>Onion Uttapam</li>
    <li>Tomato Uttapam</li>
    <li>Paneer Uttapam</li>
    <li>Kerala Prawn Curry</li>
    <li>Bisi Bele Bhaat</li>
    <li>Appam</li>
    <li>Rassam</li>
</ul>
</div>`,
`<div class="menu-page">
<h1>Main Course</h1>
<ul>
    <li>Butter Chicken</li>
    <li>Palak Paneer</li>
    <li>Rogan Josh</li>
    <li>Shahi Paneer</li>
    <li>Paneer Lababdaar</li>
    <li>Dal Makhani</li>
    <li>Sarson Ka Saag</li>
    <li>Mix Veg</li>
    <li>Baagh-e-Bahaar</li>
    <li>Kadai Paneer</li>
    <li>Dal Tadka</li>
    <li>Malai Kofta</li>
</ul>
</div>`,
`<div class="menu-page ">
<h1>Starters</h1>
<ul>
    <li>Aloo Samosa</li>
    <li>Chicken Tikka</li>
    <li>Chicken Lollipops</li>
    <li>Aloo Tikki</li>
    <li>Paneer Tikka</li>
    <li>Aloo Chaat</li>
    <li>Spring Roll</li>
    <li>Golgappe</li>
    <li>Raj Kachori</li>
    <li>Papdi Chaat</li>
    <li>Dahi Bhalle</li>
    <li>Grilled Sandwich</li>
    <li>Pav Bhaji</li>
</ul>
</div>`,
`<div class="menu-page">
<h1>Khazana-e-Kabab</h1>
<ul>
    <li>Hara Kebab</li>
    <li>Malai Soya Chaap</li>
    <li>Spicy Golden Paneer Fingers</li>
    <li>Tandoori Broccoli</li>
    <li>Dahi De Kebab</li>
    <li>Peri Peri Murgh Tikka</li>
    <li>Mutton Seekh Kebab</li>
    <li>Amritsari Fish Fry</li>
    <li>Murgh Afghani</li>
    <li>Kalmi Kebab</li>
    <li>Lehsooni Tangri Kebab</li>
</ul>
</div>`
];
let i=0;

function flipMenu() {
  menu.classList.toggle("active");
}

menu.addEventListener("click", function () {
//   const nextPage = (currentPage + 1) % menuPages.length;
//   menuPages[currentPage].classList.add("hidden");
//   menuPages[nextPage].classList.remove("hidden");
//   currentPage = nextPage;
let container = document.getElementById("menu");
container.innerHTML=array[i];
if (i%2==1) {
    container.classList.toggle("mirror");
}
else if(container.classList.contains("mirror")){
    container.classList.remove("mirror");
}
console.log(container);

i++;
if (i==array.length) i=0;

  flipMenu();
});
