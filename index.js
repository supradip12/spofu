// audioelement.play();

let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogresbar = document.getElementById('myprogresbar');
let gif = document.getElementById('gif');

let songitems = Array.from(document.getElementsByClassName('songitem'));
// let songitems = document.querySelectorAll('songitem');
const mastersongname = document.getElementById('mastersongname');
 

let songs = [
 
 {songName:"NCS-1",filePath:"songs/1.mp3",coverPath:"covers/6.jpg"},
 {songName:"NCS-2",filePath:"songs/2.mp3",coverPath:"covers/4.jpg"},
 {songName:"NCS-3",filePath:"songs/3.mp3",coverPath:"covers/1.jpg"},
 {songName:"NCS-4",filePath:"songs/3.mp3",coverPath:"covers/2.jpg"},
 {songName:"NCS-5",filePath:"songs/4.mp3",coverPath:"covers/3.jpg"},
 {songName:"NCS-6",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
 {songName:"NCS-7",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
 {songName:"NCS-8",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
 {songName:"NCS-9",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
 {songName:"NCS-10",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},

]

songitems.forEach((element,i) => {
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;  //Because getElementsByTagName() returns a set of multiple elements (note the elements). You'd need to use [0] to get the first matched.
 console.log("hello" + element.getElementsByTagName("img")[0].src);
 element.getElementsByClassName('songName')[0].innerText = songs[i].songName; 

});


masterplay.addEventListener('click',()=>{
 if(audioelement.paused || audioelement.currentTime==0){
  audioelement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
 } 
 else{
  audioelement.pause();
  masterplay.classList.remove('fa-pause-circle');
  masterplay.classList.add('fa-play-circle');
  gif.style.opacity = 0;
 }
})

audioelement.addEventListener('timeupdate',()=>{

const  progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
 myprogresbar.value =  progress;

})

myprogresbar.addEventListener('change',()=>{
 audioelement.currentTime = myprogresbar.value* audioelement.duration/100;
 // myprogresbar.value =  audioelement.currentTime;
})

const makeplayall = ()=>{
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.classList.remove('fa-pause-circle')
  element.classList.add('fa-play-circle');
 })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
 element.addEventListener('click', (e)=>{
  makeplayall();
  e.target.classList.remove('fa-play-circle')
  e.target.classList.add('fa-pause-circle')
  gif.style.opacity = 0;
  
  songindex = parseInt((e.target.id));
  mastersongname.innerText = songs[songindex].songName;
  audioelement.currentTime = 0;
  audioelement.src = `songs/${songindex+1}.mp3`;
  audioelement.play();
  element.addEventListener('click',()=>{
   if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
   }
   else{
    audioelement.pause();
    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle');
    gif.style.opacity = 0;
   }
  })
  // gif.style.opacity = 1;
  // masterplay.classList.remove('fa-play-circle');
  // masterplay.classList.add('fa-pause-circle');
 })
})

document.getElementById('next').addEventListener('click',()=>{
 if(songindex>10){
  songindex = 0;
 }
 else{

  songindex += 1;
 }
 mastersongname.innerText = songs[songindex].songName;
 audioelement.src = `songs/${songindex+1}.mp3`;
 audioelement.play();
 gif.style.opacity = 1;
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{
 if(songindex<0){
  songindex = 0;
 }
 else{

  songindex -= 1;
 }
 
 audioelement.src = `songs/${songindex+1}.mp3`;
 mastersongname.innerText = songs[songindex].songName;
 audioelement.play();
 gif.style.opacity = 1;
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
})






 
  

