const colourRotation = [
  {
    background: "bg-red",
    text: "summary-title-red",
  },
  {
    background: "bg-yellow",
    text: "summary-title-yellow",
  },
  {
    background: "bg-green",
    text: "summary-title-green",
  },
  {
    background: "bg-blue",
    text: "summary-title-blue",
  },
];

let i = 0;
const loadData = async () => {
  const dataReq = await fetch("./data.json");
  const data = await dataReq.json();

  for (let ind = 0; ind < data.length; ind++) {
    const item = data[ind];

    const req = await fetch("./summary-item-template.html");
    const template = await (await req.text()).trim();
    const holder = document.createElement("div");
    holder.innerHTML = template;

    const colour = colourRotation[ind % colourRotation.length];

    const ele = document.getElementsByClassName(
      "result-summary__section-results"
    );

    holder
      .getElementsByClassName("summary-item")[0]
      .classList.add(colour.background);

    holder
      .getElementsByClassName("result-summary-item-header")[0]
      .classList.add(colour.text);
    holder.getElementsByClassName("result-summary-item-header")[0].innerHTML =
      item.category;

    const img = document.createElement("img");
    img.setAttribute("src", item.icon);
    img.setAttribute("alt", `${item.category} Icon`);
    holder.getElementsByClassName("summary-item-title")[0].prepend(img);

    holder.getElementsByClassName("score")[0].innerHTML = item.score;
    ele[0].appendChild(holder);
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  loadData();
});
