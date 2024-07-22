let aBody = document.getElementById("aBody");
let aBody4 = document.getElementById("aBody4");
let today = document.getElementById("today");
let thisWeek = document.getElementById("thisWeek");
let thisMonth = document.getElementById("thisMonth");
let allTime = document.getElementById("allTime");

let artistsData = [
  {
    id: 1,
    img: "./rankingsImg/img-1.png",
    name: "Jaydon Ekstrom Bothman",
    change: 1.41,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 2,
    img: "./rankingsImg/img-2.png",
    name: "Ruben Carder",
    change: 2.41,
    sold: 603,
    volume: "13.4 ETH",
  },
  {
    id: 3,
    img: "./rankingsImg/img-3.png",
    name: "Alfredo Septimus",
    change: 3.41,
    sold: 612,
    volume: "12.5 ETH",
  },
  {
    id: 4,
    img: "./rankingsImg/img-4.png",
    name: "Davis Franci",
    change: 1.51,
    sold: 702,
    volume: "12.5 ETH",
  },
  {
    id: 5,
    img: "./rankingsImg/img-5.png",
    name: "Livia Rosser",
    change: 4.61,
    sold: 606,
    volume: "10.4 ETH",
  },
  {
    id: 6,
    img: "./rankingsImg/img-6.png",
    name: "Kianna Donin",
    change: 5.31,
    sold: 632,
    volume: "32.4 ETH",
  },
  {
    id: 7,
    img: "./rankingsImg/img-7.png",
    name: "Phillip Lipshutz",
    change: 7.41,
    sold: 605,
    volume: "12.4 ETH",
  },
  {
    id: 8,
    img: "./rankingsImg/img-8.png",
    name: "Maria Rosser",
    change: 1.73,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 9,
    img: "./rankingsImg/img-9.png",
    name: "Kianna Stanton",
    change: 10.41,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 10,
    img: "./rankingsImg/img-10.png",
    name: "Alisson Torff",
    change: 3.31,
    sold: 802,
    volume: "12.4 ETH",
  },
  {
    id: 11,
    img: "./rankingsImg/img-11.png",
    name: "Davis Workman",
    change: 1.41,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 12,
    img: "./rankingsImg/img-12.png",
    name: "Lindsey Lipshutz",
    change: 2.41,
    sold: 603,
    volume: "13.4 ETH",
  },
  {
    id: 13,
    img: "./rankingsImg/img-13.png",
    name: "Randy Carder",
    change: 3.41,
    sold: 612,
    volume: "12.5 ETH",
  },
  {
    id: 14,
    img: "./rankingsImg/img-14.png",
    name: "Lydia Culhane",
    change: 1.51,
    sold: 702,
    volume: "12.5 ETH",
  },
  {
    id: 15,
    img: "./rankingsImg/img-15.png",
    name: "Rayna Bator",
    change: 5.41,
    sold: 606,
    volume: "10.4 ETH",
  },
  {
    id: 16,
    img: "./rankingsImg/img-16.png",
    name: "Jocelyn Westervelt",
    change: 5.31,
    sold: 632,
    volume: "32.4 ETH",
  },
  {
    id: 17,
    img: "./rankingsImg/img-17.png",
    name: "Marilyn Torff",
    change: 7.41,
    sold: 605,
    volume: "12.4 ETH",
  },
  {
    id: 18,
    img: "./rankingsImg/img-18.png",
    name: "Skylar Levin",
    change: 1.73,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 19,
    img: "./rankingsImg/img-19.png",
    name: "Kianna Stanton",
    change: 9.41,
    sold: 602,
    volume: "12.4 ETH",
  },
  {
    id: 20,
    img: "./rankingsImg/img-20.png",
    name: "Terry Dorwart",
    change: 3.31,
    sold: 802,
    volume: "12.4 ETH",
  },
];

artistsData.forEach((item) => {
  aBody.innerHTML += `<div id="artistSame">
     <ul>
     <h4 id="artistId">${item.id}</h4>
     <img src="${item.img}">
     <h2 id="artistName">${item.name}</h2></ul>
     <ul>
     <h3 id="artistChange">+${item.change}%</h3>
     <h3 id="artistSold">${item.sold}</h3>
     <h3 id="artistVolume">${item.volume}</h3></ul>
     </div>`;
});

today.addEventListener("click", () => {
  today.classList.toggle("todayActive");
});

thisWeek.addEventListener("click", () => {
  thisWeek.classList.toggle("thisWeekActive");
});

thisMonth.addEventListener("click", () => {
  thisMonth.classList.toggle("thisMonthActive");
});

allTime.addEventListener("click", () => {
  allTime.classList.toggle("allTimeActive");
  aBody.style.display = "none";
  let result = artistsData.sort((a, b) => b.change - a.change);
  aBody4.style.display = "block";
  result.forEach((item) => {
    aBody4.innerHTML += `<div id="artistSame">
         <ul>
         <h4 id="artistId">${item.id}</h4>
         <img src="${item.img}">
         <h2 id="artistName">${item.name}</h2></ul>
         <ul>
         <h3 id="artistChange">+${item.change}%</h3>
         <h3 id="artistSold">${item.sold}</h3>
         <h3 id="artistVolume">${item.volume}</h3></ul>
         </div>`;
  });
});
