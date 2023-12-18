function buttonClick(buttonNumber) {
  getNews(buttonNumber);
}

async function getNews(buttonNumber) {
  let ep = "";

  switch (buttonNumber) {
    case 1:
      ep = "tsunami";
      break;
    case 2:
      ep = "hurricane";
      break;
    case 3:
      ep = "wildfire";
      break;
    case 4:
      ep = "iceberg";
      break;
    case 5:
      ep = "volcano fire smoke";
      break;
    default:
      console.error("Il numero del pulsante non è valido.");
      return;
  }
  document.getElementById("container_loading_news").hidden = false;
  console.log("Categoria selezionata: " + ep);
  const url = `https://newsapi.org/v2/everything?q=${ep}&language=en&pageSize=70&apiKey=ed7d1b5b0cb84c59ab83a03aae693f52`;

  const response = await fetch(url);
  const data = await response.json();
  const news = data.articles;

  let riga = document.createElement("div");
  riga.classList.add("row");
  let o = 0;

  for (let i = 0; i < news.length; i++) {
    const article = news[i];

    if (o % 3 === 0 && i !== 0) {
      document.getElementById("news-container").appendChild(riga);
      riga = document.createElement("div");
      riga.classList.add("row");
    }

    if (article.title !== "[Removed]" && article.urlToImage !== null) {
      o++;
      const col = document.createElement("div");
      col.classList.add("col-md-4");
      col.classList.add("news");
      col.innerHTML = `
        <h2 class="mb-1">${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}" class="w-100">
        <p class="mb-1">${article.description}</p>
        <a href="${article.url}" class="btn btn-primary">Leggi l'articolo</a>
      `;
      document.getElementById("container_loading_news").style.display = "none";
      document.getElementById("buttons_container").style.display = "none";
      riga.appendChild(col);
    }
    document.getElementById("main").hidden = false;
  }
  document.getElementById("news-container").appendChild(riga);
  document.addEventListener("DOMContentLoaded", function () {
    fetchDataAndDisplay();
  });
}