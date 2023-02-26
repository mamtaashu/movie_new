var i=0;
var image=[];
var time=3000;
 image[0]="./images/pushpa.jpeg";
 image[1]="./images/raabta.jpeg";
 image[2]="./images/bolbachan.jpeg";
 

function changeImg(){
  document.slide.src=image[i];
  if(i<image.length-1){
  i++
  }else{
    i=0;
  }
  setTimeout("changeImg()",time);
}

window.onload=changeImg;
 var movie=[
  {
      name:"pushpa",
      release_Date:17-10-2021,
      img_src:"https://i.ytimg.com/vi/XBOVYPukO-0/maxresdefault.jpg",
      rating:2,
  },
  {
    name:"rabata",
    release_Date:9-5-2020,
    img_src:"https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=160&dpr=2.6",
    rating:3, 

  },
  {
    name:"jaggajass0s",
    release_Date:10-6-2020,
    img_src:"https://igimages.gumlet.io/hindi/gallery/movies/jaggajasoos/jagaajasoos_poster.jpg?w=160&dpr=2.6",
    rating:4, 
  },
  
  {
    
        name:"radhe",
        release_Date:20-11-2006,
        img_src:"https://i.ytimg.com/vi/0ZbIJtd1b9M/maxresdefault.jpg",
        rating:7, 
      },

      {
    
        name:"pathan",
        release_Date:20-12-2000,
        img_src:"https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/09/Pathan-film.jpg?fit=1200%2C675&ssl=1",
        rating:6, 
      },
      {
    
        name:"kgf",
        release_Date:23-10-2018,
        img_src:"https://www.behindwoods.com/tamil-movies/kgf-tamil/images/kgf-tamil-review-banner.jpg",
        rating:1, 
      },
      {
    
        name:"rrr",
        release_Date:20-11-2021,
        img_src:"https://images.indianexpress.com/2022/01/RRR-final-release-date-1200.jpg",
        rating:4, 
      },
      {
    
        name:"sataymev jayte",
        release_Date:20-12-2021,
         img_src:"https://www.filmibeat.com/img/popcorn/movie_posters/satyameva-jayate-hin-20200423162158-258.jpg",
        rating:4, 
      },

      {
    
        name:"farz",
        release_Date:20-1-1990,
         img_src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG74z9VU_Z9QDy8rThRMZ-fUBRxPEyYC96eg&usqp=CAU",
        rating:10, 
      },


]
var filterData=JSON.parse(JSON.stringify(movie));
// var movie_Data=JSON.parse(localStorage.getItem("allData"))


var movie_Data=JSON.parse(localStorage.getItem(""))|| []
document.querySelector("#sort").addEventListener("change",function(){
  var sortType=document.querySelector("#sort").value
  if(sortType=="none")
  {
    displayData(movie);
  }else{
    filterData.sort(function(a,b){
      if(sortType=="sort-lh"){
        return a.rating-b.rating;
      }
        return b.rating-a.rating;
    
    });
    displayData(filterData);
  }
  });
  let takeDataFromLocalStrogage = JSON.parse(localStorage.getItem("login"));
  console.log(takeDataFromLocalStrogage);
function displayData(movie){
 
  document.querySelector("#container").innerHTML="";
  if(takeDataFromLocalStrogage){
  movie.forEach(element => {
      
    var box=document.createElement("div");
    box.setAttribute("class","box");

    var name=document.createElement("p");
    name.textContent=element.name;


    var date=document.createElement("date");
    date.textContent=element.release_Date;

    var images=document.createElement("img");
    images.src=element.img_src;

    var rating=document.createElement("p");
    rating.textContent=element.rating;
  
    localStorage.setItem("allData",JSON.stringify(movie))
    box.append(images,name,date,rating);
    document.querySelector('#container').append(box);
    
  

  });
}else{
  var div = document.createElement("div");
  div.textContent="Please Login First";
}
}
displayData(movie)