//song list
let All_song = [
   {
     name: "Backbone",
     path: "1.mp3",
     img: "11.jpg",
     singer: "Hardy Sandhu"
   },
   {
     name: "Bol Do Na Zara",
     path: "2.mp3",
     img: "22.jpg",
     singer: "Armaan Malik"
   },
   {
     name: "Chale Aana",
     path: "3.mp3",
     img: "33.jpg",
     singer: "Armaan Malik"
   },
   {
     name: "Besabriyaan",
     path: "4.mp3",
     img: "44.jpg",
     singer: "Armaan Malik"
   },
   {
     name: "Aayat",
     path: "5.mp3",
     img: "55.jpg",
     singer: "Arijit Singh"
   },
   {
    name: "Duniyaa",
    path: "6.mp3",
    img: "66.jpg",
    singer: "Dhvani Bhanusali, Akhil"
   },
   {
     name: "Chahun Main Ya Naa",
     path: "7.mp3",
     img:  "77.jpg",
     singer: "Arijit Singh, Palak Muchhal"
   },
   {
     name:"Ek onkaar",
     path: "8.mp3",
     img: "88.jpg",
     singer: "Jasbir Jassi"
   },
   {
    name:"Hamdard",
    path: "9.mp3",
    img: "99.jpg",
    singer: "Arijit Singh"
  },
  {
    name:"Humnava Mere",
    path: "10.mp3",
    img: "1010.jpg",
    singer: "Jubin Nautiyal"
  }
];

/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};