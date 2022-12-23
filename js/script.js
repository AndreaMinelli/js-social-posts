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

//Creo funzione per creare foto profilo se non presente
const getProfilePic = (author, authorPic) => {
  let profilePic = `
    <img class="profile-pic-default" src="${authorPic}" alt="${author}"/>
    `;

  if (!authorPic) {
    const splitName = author.split(" ");
    let firstLetter = "";
    splitName.forEach((word) => {
      firstLetter += word[0].toUpperCase();
    });
    profilePic = ` <span class="profile-pic">${firstLetter}</span>`;
  }
  return profilePic;
};

//Creo funzione per formattare la data
const getLocalDate = (date) => {
  const msDate = Date.parse(date);
  const formattedDate = new Date(msDate);
  const localDate = formattedDate.toLocaleDateString("en-GB");
  return localDate;
};

//Creo array di post
const posts = [
  {
    author: "Tiziana Cesaroni",
    authorPic: "",
    date: "12/23/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/600/300?random=1",
    likesCounter: 3,
  },
  {
    author: "Gastone Amato",
    authorPic: "https://picsum.photos/300/300?random=2",
    date: "01/02/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "",
    likesCounter: 18,
  },
  {
    author: "Paloma Ferraris",
    authorPic: "",
    date: "09/20/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/600/300?random=3",
    likesCounter: 15,
  },
  {
    author: "Elena Balla",
    authorPic: "https://picsum.photos/300/300?random=4",
    date: "11/05/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "",
    likesCounter: 50,
  },
  {
    author: "Geronimo Germano",
    authorPic: "https://picsum.photos/300/300?random=5",
    date: "10/14/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/600/300?random=6",
    likesCounter: 22,
  },
  {
    author: "Giampiero Semitecolo",
    authorPic: "https://picsum.photos/300/300?random=7",
    date: "05/29/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio\
            minima iusto. Ad ad maiores et sint voluptate recusandae architecto.\
            Et nihil ullam aut alias.",
    image: "https://picsum.photos/600/300?random=8",
    likesCounter: 44,
  },
];

//Targhettizzo gli elementi della pagina
const postsListElement = document.querySelector(".posts-list");

let postList = "";

posts.forEach((post, i) => {
  //Recupero le chiavi dell'oggetto
  const { author, authorPic, date, text, image, likesCounter } = post;
  //Creo ID
  const id = (post.id = ++i);
  //Genero la foto profilo
  const authorProfilePic = getProfilePic(author, authorPic);
  //Setto la data con formato italiano
  const localDate = getLocalDate(date);
  postList += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                ${authorProfilePic}
                </div>
                <div class="post-meta__data">
                <div class="post-meta__author">${author}</div>
                <div class="post-meta__time">${localDate}</div>
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
                <b id="like-counter-${id}" class="js-likes-counter">${likesCounter}</b> persone
                </div>
            </div>
        </div>
    </div>
`;
  return postList;
}, "");

postsListElement.innerHTML = postList;

//Recupero i bottoni likes dei post
const likesButtons = document.querySelectorAll(".likes .like-button");
const likesField = document.querySelectorAll(".likes .js-likes-counter");

//Aggiungo funzione click bottoni

likesButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("like-button--liked")) {
      button.classList.add("like-button--liked");
      const updateCounter = ++posts[i].likesCounter;
      likesField[i].innerText = updateCounter;
    } else {
      button.classList.remove("like-button--liked");
      const updateCounter = --posts[i].likesCounter;
      likesField[i].innerText = updateCounter;
    }
  });
});
