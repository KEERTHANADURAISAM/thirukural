let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container");
newDiv.setAttribute("id", "contain");
let newNav = document.createElement("nav");
newNav.setAttribute("class", "navbar");
let head = document.createElement("h4");
head.innerHTML = "திருக்குறள் உலக பொதுமறை / THIRUKKURAL";
let newDiv1 = document.createElement("div");
newDiv1.setAttribute("class", "divsec");
let newInput = document.createElement("input");
newInput.setAttribute("type", "text");
newInput.setAttribute("class", "input");
newInput.setAttribute("id", "txt");
newInput.setAttribute("placeholder", "Search");
let newBut = document.createElement("button");
newBut.setAttribute("class", "button");
newBut.setAttribute("type", "search");
newBut.setAttribute("id", "find");
let itag = document.createElement("i");
itag.setAttribute("class", "fa-solid fa-magnifying-glass");
let ptag = document.createElement("p");
ptag.setAttribute("class", "message");
ptag.innerHTML =
  "Once you search please Refresh the page because using promise";
let newDiv2 = document.createElement("div");
newDiv2.setAttribute("class", "container");
let newDiv3 = document.createElement("div");
newDiv3.setAttribute("class", "row");
let newDiv3A = document.createElement("div");
newDiv3A.setAttribute("class", "col-md-4");
let image = document.createElement("img");
image.setAttribute(
  "src",
  "https://images-eu.ssl-images-amazon.com/images/I/41o3sVUwXTL.jpg"
);
let newDiv3B = document.createElement("div");
newDiv3B.setAttribute("class", "col-md-8");
newDiv3B.setAttribute("id", "result");

document.body.append(newDiv);
newDiv.appendChild(newNav);
newNav.appendChild(head);
newDiv.append(newDiv1);
newDiv1.append(newInput, newBut);
newDiv.append(ptag);
newBut.append(itag);
newDiv.append(newDiv2);
newDiv2.append(newDiv3);
newDiv3.append(newDiv3A, newDiv3B);
newDiv3A.append(image);

let thirukkural = new Promise((resolve, reject) => {
  let thirukkuralinput = document.getElementById("find");
  thirukkuralinput.addEventListener("click", () => {
    let request = new XMLHttpRequest();
    request.open(
      `GET`,
      `https://api-thirukkural.vercel.app/api?num=${txt.value}`
    );
    request.send();
    request.onload = function () {
      if (request.status == 200) {
        let data = JSON.parse(request.response);
        resolve(data);
      } else {
        reject("Enter valid number");
      }
    };
  });
});
thirukkural
  .then((res) => {
    console.log(res);
    newDiv3B.innerHTML = `<p><b>குறள் எண்:${res.number}</p></b>
  <p><b>இயல்:${res.sect_tam}</p></b>
  <p><b>அதிகாரம்:${res.chapgrp_tam}</p></b>
  <p><b>பாயிரவியல்:${res.chap_tam}</p></b>
  <p><b>குறள் அடி-1:${res.line1}</p></b>
  <p><b>குறள் அடி-2:${res.line2}</p></b>
  <p><b>விளக்கம்:${res.tam_exp}</p></b>
  <p><b>Section:${res.sect_eng}</p></b>
  <p><b>Chapter:${res.chapgrp_eng}</p></b>
  <p><b>Chapter:${res.chap_eng}</p></b>
  <p><b>Couplet:${res.eng}</p></b>
  <p><b>Transliteration:${res.eng_exp}</p></b>

 `;
  })
  .catch((err) => {
    console.log(err);
    newDiv3B.innerHTML = `<p><b>This is Error : Enter the correct number</b></p>`;
  });
