//Make navigation bar CHECK
//DOM post text from input field CHECK

//JSON
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
       
      var response = JSON.parse(xhttp.responseText); //get objects
      var article = response.article;      

      var output = "";
      for (i = 0; i < article.length; i++) 
      {
          output += "" + article[i].title+ "</li>"; 
          output += "" + article[i].body+ "</li>"; 
      }

      document.getElementById("post").innerHTML = output;

    }
};
xhttp.open("GET", "articles.json", true);
xhttp.send();



//get input CHECK
var artTitle = document.getElementById("artTitle");
var artBody = document.getElementById("artBody");

var postArtButton = document.getElementById("postArt");

postArtButton.addEventListener("click", function createPost(){
   //Get value from input fields // Title and body
   var t = artTitle.value;
   var b = artBody.value;
   
   //Get post container
   const postContainer = document.getElementById("post-container");
      
   //Create div/space/slot for a post
   let div = document.createElement('div');
   div.className = 'posts'; //Add id to div
      
   //Create title for article post
   let postTitle = document.createElement("h3");
   postTitle.innerHTML = t;
   div.appendChild(postTitle);
      
   //Create body for article post
   let postBody = document.createElement("p");
   postBody.textContent = b;
   div.appendChild(postBody);   

   //Comment section
   //let commentSec = document.createElement("input");
   
   postContainer.appendChild(div); //Add post to post container
   
});

//To comment
//function addComment(){


//Output articles under articles CHECK

