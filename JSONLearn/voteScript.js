
let likeButton = document.getElementById("like-button");
let dislikeButton = document.getElementById("dislike-button");

let firstLikeText = "Be the first to like!";

//Likes Variables
let likeCounter = 0;
let likes = "Likes: "

//Like function
likeButton.addEventListener("click", () => {
   
   likeCounter ++;

   let l = document.getElementById("like-counter");
   l.value  = likes + likeCounter;

   l.innerText = l.value;
});


//Dislikes Variables
let dislikeCounter = 0;
let dislikes = "DisLikes: "

//Dislike function
dislikeButton.addEventListener("click", () => {
   
   dislikeCounter ++; //Plus 1 like

   let disl = document.getElementById("dislike-counter"); //Get like elem
   disl.value  = ("Dislikes: ") + dislikeCounter;

   disl.innerText = disl.value;
});