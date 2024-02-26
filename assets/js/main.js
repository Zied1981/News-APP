//to do
// textinput value holen
//error mit output
//sprache select vslue holen
//sort value holen

let SearchBtn = document.querySelector(".button");
let outputText = document.querySelector(".errortext");

const fetchNewsData = (event) => {
  event.preventDefault();

  let inputText = document.querySelector("#inputText").value;
  console.log(inputText);
  if (inputText.length <= 0) {
    console.log("error");
    outputText.innerHTML = `<p>please enter a content!!!<p>`;
    outputText.style.display = "block";
    return;
  }
  let selectedlang = document.querySelector("#language").value;
  console.log(selectedlang);

  let sortedVal = document.querySelector("#sortieren").value;
  console.log(sortedVal);
  let contentOutput = document.querySelector(".contentOutput");
  console.log(contentOutput);

  fetch(
    `https://newsapi.org/v2/everything?q=${inputText}&language=${selectedlang}&sortBy=${sortedVal}&apiKey=74d16d926146498b9f2453203d57af5e`
  )
    .then((response) => response.json())
    .then((everyData) => {
      console.log(everyData);

      contentOutput.innerHTML = "";
      outputText.innerHTML = "";

      everyData.articles.forEach((element) => {
        let title = element.title;
        console.log(title);
        let articleContent = element.content;
        console.log(articleContent);
        let urlImG = element.urlToImage;
        console.log(urlImG);

        let moreInfoBTn = element.url;

        contentOutput.innerHTML += `<article>
        <h3>${title}</h3>
        <p>${articleContent}</p>
        <img src="${urlImG}" alt="">
        <a href="${moreInfoBTn}"target="_blank">zum artikel</a>
        </article>`;
      });
    })
    .catch(console.log("error im hauptfetch"));
};
