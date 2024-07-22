let cate_inf = [
    {
        img : "./img/Primary Photo Placeholder.png",
        img1 : "./img/Secondary Photo Placeholder.png",
        img2 : "./img/Secondary Photo Placeholder (1).png",
        count : 1000,
        cate_name : "DSGN Animals",
        image:"./img/Avatar Placeholder (1).png",
        name : "MrFox"
    },
    {
        img : "./img/Primary Photo Placeholder.png",
        img1 : "./img/Secondary Photo Placeholder.png",
        img2 : "./img/Secondary Photo Placeholder (1).png",
        count : 1000,
        cate_name : "DSGN Animals",
        image:"./img/Avatar Placeholder (1).png",
        name : "MrFox"
    },
    {
        img : "./img/Primary Photo Placeholder.png",
        img1 : "./img/Secondary Photo Placeholder.png",
        img2 : "./img/Secondary Photo Placeholder (1).png",
        count : 1000,
        cate_name : "DSGN Animals",
        image:"./img/Avatar Placeholder (1).png",
        name : "MrFox"
    },  
]
let = creator_inf = [
    {
        id : 1 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 2 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 3 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 4 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 5 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 6 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },
    {
        id : 7 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 8 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 9,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id :10 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },
    {
        id : 11,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },

    {
        id : 12 ,
        img :  "./img/Avatar Placeholder (2).png",
        name :  "Keepitreal",
        price : 34.78
    },
]


let browse_inf = [
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },

    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },
    {
        img:"./img/Photo & Icon.png",
        name : "Art"
    },

]

cate_inf.forEach((item) => {
  let category = document.getElementById("category");

  category.innerHTML += ` 
       <div class="cate">
              <img src="${item.img}" alt="" />
              <div class="cate_imgs">
                <img src="${item.img1}" alt="" />
                <img src="${item.img2}" alt="" />
                <button>${item.count} +</button>
              </div>
              <h3>${item.cate_name}</h3>
              <div class="assist">
                <img    src="${item.image}" alt="">
                <h5>${item.name}</h5>
              </div>
            </div>`;
});


creator_inf.forEach((item) => {

    let creatorsdiv = document.getElementById("creatorsdiv");
  
    creatorsdiv.innerHTML += ` 
         <div class="creator">
              <p>${item.id}</p>
              <div>
                <img src="${item.img}" alt="" />
                <h3>${item.name}</h3>
                <h4>Total Sales : <b>${item.price} ETH</b></h4>
              </div>
            </div>`
  });


  browse_inf.forEach((item) => {

    let browes = document.getElementById("browes");
  
    browes.innerHTML += ` 
          <div class="browse">
              <img src="${item.img}" alt="" />
              <h3>${item.name}</h3>
            </div>`;
  });