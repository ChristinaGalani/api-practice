const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "assets/logo.png";
const container = document.createElement("div");
container.setAttribute("class", "container");
container.setAttribute("id", "mainContent");
app.appendChild(logo);
app.appendChild(container);

const useFetchApi = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(data => {
      data.forEach(movie => {
        // Create a div with a card class
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        // Create an h1 and set the text content to the film's title
        const h2 = document.createElement("h2");
        h2.textContent = movie.title;
        // Create a p and set the text content to the film's description
        const p = document.createElement("p");
        movie.description = movie.description.substring(0, 300); // Limit to 300 chars
        p.textContent = `${movie.description}...`; // End with an ellipses

        const p2 = document.createElement("p");
        p2.textContent = "Directed by: " + movie.director;

        // Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
      });
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });

  const code = document.getElementById("code");
  code.innerHTML =
    '<blockquote>fetch<font color="#009900">&#40;</font><font color="#ea9106">&quot;https://ghibliapi.herokuapp.comfilms&quot;</font><font color="#009900">&#41;</font><br/>&nbsp;&nbsp;.<font color="#e20de2">then</font><font color="#009900">&#40;</font>response&nbsp;<font color="#339933">=&gt;</font>&nbsp;response.<font color="#e20de2">json</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><br/>&nbsp;&nbsp;.<font color="#e20de2">then</font><font color="#009900">&#40;</font>data&nbsp;<font color="#339933">=&gt;</font>&nbsp;<font color="#009900">&#123;</font><br/>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#e20de2">log</font><font color="#009900">&#40;</font>data<font color="#009900">&#41;</font><font color="#339933">;</font><br/><font color="#009900">&#125;</font><font color="#009900">&#41;</font></blockquote>';
};

const useXMLHttpRequest = () => {
  var request = new XMLHttpRequest();
  request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(movie => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h2 = document.createElement("h2");
        h2.textContent = movie.title;

        const p = document.createElement("p");
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;

        container.appendChild(card);
        card.appendChild(h2);
        card.appendChild(p);
      });
    } else {
      const errorMessage = document.createElement("alert");
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
    const code = document.getElementById("code");
    code.innerHTML =
      '<blockquote><font color="#fbf60e">var</font>&nbsp;request&nbsp;<font color="#339933">=</font>&nbsp;<font color="#fbf60e">new</font>&nbsp;XMLHttpRequest<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font><br/>&nbsp;&nbsp;request.<font color="#e20de2">open</font><font color="#009900">&#40;</font><font color="#ea9106">&quot;GET&quot;</font><font color="#339933">,</font>&nbsp;<font color="#ea9106">&quot;https://ghibliapi.herokuapp.com/films&quot;</font><font color="#339933">,</font>&nbsp;<font color="#ed6d46">true</font><font color="#009900">&#41;</font><font color="#339933">;</font><br/>&nbsp;&nbsp;request.<font color="#e20de2">onload</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#fbf60e">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font><br/>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#fbf60e">var</font>&nbsp;data&nbsp;<font color="#339933">=</font>&nbsp;JSON.<font color="#e20de2">parse</font><font color="#009900">&#40;</font><font color="#fbf60e">this</font>.<font color="#e20de2">response</font><font color="#009900">&#41;</font><font color="#339933">;</font><br/>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#e20de2">log</font><font color="#009900">&#40;</font>data<font color="#009900">&#41;</font><font color="#009900">&#125;</font><font color="#339933">;</font><br/>&nbsp;&nbsp;<font color="#009900">&#125;</font></blockquote>';
  };

  request.send();
};

const usejQuery = () => {
  $(document).ready(function() {
    $.ajax({
      url: "https://ghibliapi.herokuapp.com/films",
      dataType: "json",
      success: function(data) {
        data.forEach(movie => {
          // Create a div with a card class
          const card = document.createElement("div");
          card.setAttribute("class", "card");

          // Create an h1 and set the text content to the film's title
          const h2 = document.createElement("h2");
          h2.textContent = movie.title;
          // Create a p and set the text content to the film's description
          const p = document.createElement("p");
          movie.description = movie.description.substring(0, 300); // Limit to 300 chars
          p.textContent = `${movie.description}...`; // End with an ellipses
          const p2 = document.createElement("p");
          p2.textContent = "Released in: " + movie.release_date;

          // Append the cards to the container element
          container.appendChild(card);

          // Each card will contain an h1 and a p
          card.appendChild(h2);
          card.appendChild(p);
          card.appendChild(p2);
        });
      }
    });
  });
  const code = document.getElementById("code");
  code.innerHTML =
    '<blockquote>$.<font color="#e20de2">ajax</font><font color="#009900">&#40;</font><font color="#009900">&#123;</font><br/>&nbsp;&nbsp;url<font color="#339933">:</font>&nbsp;<font color="#ea9106">&quot;https://ghibliapi.herokuapp.com/films&quot;</font><font color="#339933">,</font><br/>&nbsp;&nbsp;dataType<font color="#339933">:</font>&nbsp;<font color="#ea9106">&quot;json&quot;</font><font color="#339933">,</font><br/>&nbsp;&nbsp;success<font color="#339933">:</font>&nbsp;<font color="#fbf60e">function</font><font color="#009900">&#40;</font>data<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font><br/>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#e20de2">log</font><font color="#009900">&#40;</font>data<font color="#009900">&#41;</font><font color="#339933">;</font><br/>&nbsp;&nbsp;<font color="#009900">&#125;</font></blockquote>';
};

$("#XMLHttpRequest").click(useXMLHttpRequest);
$("#fetch").click(useFetchApi);
$("#jquery").click(usejQuery);
