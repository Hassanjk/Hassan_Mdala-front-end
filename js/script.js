// const data = fetch('https://api.themoviedb.org/3/configuration?api_key=3c4a75c60ab27c385698962f1c76f654');
// console.log(data)
// setTimeout(()=>{
//     console.log(data)
// },2000)

// searching the term



// const updateTerm = () =>{
//     term = document.getElementById('searchInput').value;
//     if(!term || term == ''){
//             alert("please enter a search term")
//     }else{
//         alert("not working")
//     }

// }
// for the images
// global variables
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");

let term = '';
const movieConatiner = document.getElementById('box')
function myFunction() {
    var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  var spans = document.getElementsByTagName("a");

  
  });

}
    term = document.getElementById('searchInput').value;
    console.log(term);
    if(!term || term == ''){
        alert('please enter term')
    }else{
        while(movieConatiner.firstChild){
            movieConatiner.removeChild(movieConatiner.firstChild)
        }
const url = `https://api.themoviedb.org/3/search/movie?api_key=3c4a75c60ab27c385698962f1c76f654&language=en-US&page=1&include_adult=false&query=%22${term}%22`

        fetch(url)
.then((response) => response.json())
.then((data) => {
    // console.log(data.results);
    const movies = data.results;
    return movies.map(result => {

        
        const tiltleHead = document.createElement('div')
        const  id = result.id
        console.log(id)
        const article  = document.createElement('article'),
         title  = document.createElement('p'),
         cast = document.createElement('p'),
         img = document.createElement('img'),
         description = document.createElement('p'),
         releasedate = document.createElement('p')
         const a = document.createElement('a');
         a.href = result.program
         const linkText = document.createTextNode("WATCH TRAIL");

         a.appendChild(linkText);
            description.innerHTML = "Description:" +result.overview.slice(0,30 )
            releasedate.innerHTML = "release-date:" + result.release_date
            title.innerHTML = result.original_title
            img.src = "https://cdn5.vectorstock.com/i/1000x1000/82/29/movie-and-film-retro-vintage-poster-background-vector-26878229.jpg"
            
            // article.appendChild(img)
            movieConatiner.appendChild(article) 
            tiltleHead.appendChild(img)
            
            article.appendChild(title)
            article.appendChild(a)
            article.appendChild(description)
            article.appendChild(releasedate)

        
            article.appendChild(tiltleHead)

            // adding the class movie to article div
            article.classList.add("movie");

            tiltleHead.classList.add("movie-image")
           
      
    })
})
.catch(error=> console.log('Request failed',error))
    }
  }

  // first click for upcomming movies
  function myFunction1() {
    var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  var spans = document.getElementsByTagName("a");

  
  });

}
    term = document.getElementById('searchInput').value;
    console.log(term);
    if(!term || term == ''){
        alert('please enter term')
    }else{
        while(movieConatiner.firstChild){
            movieConatiner.removeChild(movieConatiner.firstChild)
        }
const url = "https://api.themoviedb.org/3/movie/popular?api_key=3c4a75c60ab27c385698962f1c76f654&language=en-US&page=1"

        fetch(url)
.then((response) => response.json())
.then((data) => {
    // console.log(data.results);
    const movies = data.results;
    return movies.map(result => {

        
        const tiltleHead = document.createElement('div')
        const  id = result.id
        console.log(id)
        const article  = document.createElement('article'),
         title  = document.createElement('p'),
         cast = document.createElement('p'),
         img = document.createElement('img'),
         description = document.createElement('p'),
         releasedate = document.createElement('p')
         const a = document.createElement('a');
         a.href = result.program
         const linkText = document.createTextNode("WATCH TRAIL");

         a.appendChild(linkText);
            description.innerHTML = "Description:" +result.overview.slice(0,30 )
            releasedate.innerHTML = "release-date:" + result.release_date
            title.innerHTML = result.original_title
            img.src = "https://cdn5.vectorstock.com/i/1000x1000/82/29/movie-and-film-retro-vintage-poster-background-vector-26878229.jpg"
            
            // article.appendChild(img)
            movieConatiner.appendChild(article) 
            tiltleHead.appendChild(img)
            
            article.appendChild(title)
            article.appendChild(a)
            article.appendChild(description)
            article.appendChild(releasedate)

        
            article.appendChild(tiltleHead)

            // adding the class movie to article div
            article.classList.add("movie");

            tiltleHead.classList.add("movie-image")
           
      
    })
})
.catch(error=> console.log('Request failed',error))
    }
  }
    // first click for Popular movies
    function myFunction2() {
        term = document.getElementById('searchInput').value;
        console.log(term);
        if(!term || term == ''){
            alert('please enter term')
        }else{
            while(movieConatiner.firstChild){
                movieConatiner.removeChild(movieConatiner.firstChild)
            }
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=3c4a75c60ab27c385698962f1c76f654&language=en-US&page=1"
    
            fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.results);
        const movies = data.results;
        return movies.map(result => {
    
            
            const tiltleHead = document.createElement('div')
            const  id = result.id
            console.log(id)
            const article  = document.createElement('article'),
             title  = document.createElement('p'),
             cast = document.createElement('p'),
             img = document.createElement('img'),
             description = document.createElement('p'),
             releasedate = document.createElement('p')
             const a = document.createElement('a');
             a.href = result.program
             const linkText = document.createTextNode("WATCH TRAIL");
    
             a.appendChild(linkText);
                description.innerHTML = "Description:" +result.overview.slice(0,30 )
                releasedate.innerHTML = "release-date:" + result.release_date
                title.innerHTML = result.original_title
                img.src = "https://cdn5.vectorstock.com/i/1000x1000/82/29/movie-and-film-retro-vintage-poster-background-vector-26878229.jpg"
                
                // article.appendChild(img)
                movieConatiner.appendChild(article) 
                tiltleHead.appendChild(img)
                
                article.appendChild(title)
                article.appendChild(a)
                article.appendChild(description)
                article.appendChild(releasedate)
    
            
                article.appendChild(tiltleHead)
    
                // adding the class movie to article div
                article.classList.add("movie");
    
                tiltleHead.classList.add("movie-image")
               
          
        })
    })
    .catch(error=> console.log('Request failed',error))
        }
      }


          // first click for topRated movies
    function myFunction3() {
        term = document.getElementById('searchInput').value;
        console.log(term);
        if(!term || term == ''){
            alert('please enter term')
        }else{
            while(movieConatiner.firstChild){
                movieConatiner.removeChild(movieConatiner.firstChild)
            }
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3c4a75c60ab27c385698962f1c76f654&language=en-US&page=1"
    
            fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.results);
        const movies = data.results;
        return movies.map(result => {
    
            
            const tiltleHead = document.createElement('div')
            const  id = result.id
            console.log(id)
            const article  = document.createElement('article'),
             title  = document.createElement('p'),
             cast = document.createElement('p'),
             img = document.createElement('img'),
             description = document.createElement('p'),
             releasedate = document.createElement('p')
             const a = document.createElement('a');
             a.href = result.program
             const linkText = document.createTextNode("WATCH TRAIL");
    
             a.appendChild(linkText);
                description.innerHTML = "Description:" +result.overview.slice(0,30 )
                releasedate.innerHTML = "release-date:" + result.release_date
                title.innerHTML = result.original_title
                img.src = "https://cdn5.vectorstock.com/i/1000x1000/82/29/movie-and-film-retro-vintage-poster-background-vector-26878229.jpg"
                
                // article.appendChild(img)
                movieConatiner.appendChild(article) 
                tiltleHead.appendChild(img)
                
                article.appendChild(title)
                article.appendChild(a)
                article.appendChild(description)
                article.appendChild(releasedate)
    
            
                article.appendChild(tiltleHead)
    
                // adding the class movie to article div
                article.classList.add("movie");
    
                tiltleHead.classList.add("movie-image")
               
          
        })
    })
    .catch(error=> console.log('Request failed',error))
        }
      }
    
    



  document.getElementById("myBtn").addEventListener("click", myFunction);
  document.getElementById("myBtn1").addEventListener("click", myFunction1);
  document.getElementById("myBtn2").addEventListener("click", myFunction2);
  document.getElementById("myBtn3").addEventListener("click", myFunction3);
  document.getElementById("myBtn4").addEventListener("click", myFunction4);



// popular movies


// const movieConatiner2 = document.getElementById('box')


//     const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=3c4a75c60ab27c385698962f1c76f654&language=en-US&page=1"

//     fetch(url2)
// .then((response) => response.json())
// .then((data) => {
//     const movies2 = data.results;
//     return movies2.map(result => {

        
//         const tiltleHead = document.createElement('div')
//         const article  = document.createElement('article'),
//          title  = document.createElement('p'),
//          cast = document.createElement('p'),
//          img = document.createElement('img'),
//          description = document.createElement('p'),
//          releasedate = document.createElement('p')
//          const a = document.createElement('a');
//          a.href = result.program
//          const linkText = document.createTextNode("WATCH TRAIL");

//          a.appendChild(linkText);
//             description.innerHTML = "Description:" +result.overview.slice(0,30 )
//             releasedate.innerHTML = "release-date:" + result.release_date
//             title.innerHTML = result.original_title
//             img.src = "https://cdn5.vectorstock.com/i/1000x1000/82/29/movie-and-film-retro-vintage-poster-background-vector-26878229.jpg"
            
//             // article.appendChild(img)
//             movieConatiner.appendChild(article) 
//             tiltleHead.appendChild(img)
            
//             article.appendChild(title)
//             article.appendChild(a)
//             article.appendChild(description)
//             article.appendChild(releasedate)

        
//             article.appendChild(tiltleHead)

//             // adding the class movie to article div
//             article.classList.add("movie");

//             tiltleHead.classList.add("movie-image")
           
      
//     })
// })

// active button


