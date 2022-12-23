/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/

//Creo array di post
const posts = [
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
  {
    id: 1,
    author: "Pinco Pallino",
    authorPic: "https://picsum.photos/200/300?",
    date: "12-23-2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/200/300?",
    likesCounter: 3,
  },
];

//Targhettizzo gli elementi della pagina
const postsListElement = document.querySelector(".posts-list");

let postList = "";

posts.forEach((post) => {
  const { author, authorPic, date, text, image, likesCounter } = post;

  postList += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                <img
                    class="profile-pic"
                    src="${authorPic}"
                    alt="${author}"
                />
                </div>
                <div class="post-meta__data">
                <div class="post-meta__author">${author}</div>
                <div class="post-meta__time">${date}</div>
                </div>
            </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
            <img src="${image}" alt="" />
            </div>
            <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                <button
                    class="like-button js-like-button"
                    href="#"
                    data-postid="1"
                >
                    <i
                    class="like-button__icon fas fa-thumbs-up"
                    aria-hidden="true"
                    ></i>
                    <span class="like-button__label">Mi Piace</span>
                </button>
                </div>
                <div class="likes__counter">
                Piace a
                <b id="like-counter-1" class="js-likes-counter">${likesCounter}</b> persone
                </div>
            </div>
        </div>
    </div>
`;
  return postList;
}, "");

postsListElement.innerHTML = postList;
