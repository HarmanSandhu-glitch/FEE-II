const gallery = document.querySelector(".gallery");

let listOfImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAPpGEqCGKbkVsGi06-ejyb5tGngiU6shCSe51a4oyiYCWr5JFpXZCWFYG2nYaBQVjLHb6tEzuIjJwS-Vg-0OiplB3u5tu0C9Z6j69bCV4rxWTL69lyP0CQg&usqp=CAE",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0D2ILYuaH1_TX5M2MXTOziPqSMHZcrUnSDdcgYnljneWTcrEsp5sMqN01k2HqldqmOh8ESOB6VC7-bxnGuNFngqAhuUTnJfD-akUgf7rbMGdYjfdQH3iFZQ&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQW8ovfAf3TUWPpshk5xS3osPV_11cLRTKgTVuy_bl-rBlcD4lENB9TGJ6yilZBRn5FL2f80oycYOhvyLFkqmv29Uj3SGjVhGoIGadiu8ZDHd63oY3b_ui7&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQW8ovfAf3TUWPpshk5xS3osPV_11cLRTKgTVuy_bl-rBlcD4lENB9TGJ6yilZBRn5FL2f80oycYOhvyLFkqmv29Uj3SGjVhGoIGadiu8ZDHd63oY3b_ui7&usqp=CAE",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLl5jOfnfl4uhNQaC2ysyZPc17JAG-OWxRw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BqNAqUF1EJy6QlpBu16vflZ2tMvO5ZFDAQ&s",
  "https://www.boat-lifestyle.com/cdn/shop/files/LunarCall_1.png?v=1701763426",
];

listOfImages.forEach((link) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img class="card-img-top " style="height:84%;object-fit:cover" src="${link}"  alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary w-100">Buy</a>
  </div>
  `;
  gallery.appendChild(div);
});
