// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const cardSelected = document.querySelector(".cardSelected");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:


function cards(data) {

  data.forEach(ele => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardtop = document.createElement("div");
    cardtop.classList.add("cardtop");
    cardtop.id = ele.id;
    const image = document.createElement("img");
    image.src = ele.src;
    const title = document.createElement("h1");
    title.textContent = ele.title;
    cardtop.append(title, image);


    const cardbottom = document.createElement("div");
    cardbottom.classList.add("cardbottom");
    const para = document.createElement("p");
    para.textContent = ele.account;
    para.classList.add("text");
    const accountImage = document.createElement("img");
    accountImage.src = ele.accountImage;
    accountImage.classList.add("secondimg");
    cardbottom.append(accountImage, para);


    const btn = document.createElement("button");
    cardbottom.append(btn);
    btn.textContent = "Please Bid";
    btn.classList.add("bt");
    btn.addEventListener("click", (e) => {
      cardSelected.textContent = ele.title;
    })
    card.append(cardtop, cardbottom);
    wrapper.append(card);
  });



}

cards(data);

