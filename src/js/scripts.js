// document.addEventListener("click", clickHandlers);

// store the link plus the API key in a variable
const api =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=I1v92ZQoxXVhltaR4Di8ZiNndFaWe16C";

function getStories() {
  // if (!event.target.matches("button")) return;
  fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  var looped = stories
    .map((story) => `
    <div class="item">
    <picture>
    <img src="${story.multimedia[2].url}" alt="" />
    <caption>${story.multimedia[2].caption}</caption>
    </picture>
      <h3><a href="${story.url}">${story.title}</a></h3>
      <p>${story.abstract}</p>
    </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

if(document.querySelector('.home')){
  getStories()
}


// function clickHandlers(event) {
//   if (!event.target.matches("button")) return;
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then(function (data){
//       showData(data);
//     });
// }

// function showData(data) {

//   // for (let post of data) {
//   //   content += `<h3>${post.title}</h3><p>${post.body}</p>`; // new
//   // }
//     let content = data.map((post) => `
//     <h3>${post.title}</h3>
//     <p>${post.body}</p>
//     `
//     ).join("");
  
//     document.querySelector(".stories").innerHTML = content;
  // }
