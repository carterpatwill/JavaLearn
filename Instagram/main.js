// create the box
let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EFxfCKQKtWIqaJ1imwmAq_ZSIdgatZ_EpN97nSNyZf3OvwuzH8VBpGWzsAoR0psxDZ8&usqp=CAU"
let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevv9wSDWvhXxA_PVtSmNf5R1GryKpb86GByhi0yp-w8i75qliQX5B5lAAjijrTk3Tihw&usqp=CAU"
let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRloJ5woz1slIJ7kodPpxsu61yIzPro8ZO8niqJzHmaeo1kMImrpWMuBIhT4pbKQeV88&usqp=CAU"
let img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lywjEkY5lJWZYsiEf1IryZxelPSLS0EtYLROqcA070ogWbCZ1jukjYcbFBQZ5bkRk-g&usqp=CAU"
const images = [
    {src: img1, comment:" wow great time"},
    {src: img2, comment:" oh how wonderful"},
    {src: img3, comment:" yayayay"},
    {src: img4, comment:" mmm goodie"},

]




for( let theImage of images){ 

//make the box div 
let box = document.createElement("div");
box.classList.add("box");

//make the row div
let row = document.createElement("div")
row.classList.add("row");

// create the image
let img = document.createElement("img");
img.src = theImage.src;
img.style.maxWidth = "100%";
img.style.maxHeight = "100%";
img.style.borderRadius = "10px";

// put image inside box
box.appendChild(img);
box.appendChild(row);

let comment = document.createElement("p");
comment.innerText = theImage.comment;

row.appendChild(comment)

let button = document.createElement("button");
button.innerText = "like";
button.classList.add("likeButton");
row.appendChild(button);


// add box to page
document.getElementById("leftCol").appendChild(box);
}

let counter = document.createElement("h2");
let likes = 0;
counter.innerText = `Likes: ${likes}`;
document.getElementById("rightCol").appendChild(counter);

const allButtons = document.querySelectorAll(".likeButton");

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        likes++;
        counter.innerText = `Likes: ${likes}`;
        console.log("counter =", counter);
    });
});