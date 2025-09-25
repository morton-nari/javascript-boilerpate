import { fetchData } from "./assets/data.js";

const recursiveListRes = () => {
  let dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  let data = fetchData();
  data.then(value => {
    const data = value;
    function printList(data, level = 0) {
      let lists = `<ul id="topList" >`;
      for (const item of data) {
        const childList = item.children ? printList(item.children, level + 1) : "";
        console.log('this is child list if item has children', childList);
        if (item.children) {
          lists += `<li
                        class="opened-icon"
                        id="${item.id}"><span data-lists="lists" class="par-list">${item.name}</span>  ${childList}</li>`;
        } else {
          lists += `<li id="${item.id}">${item.name}</li>`;
        }
      }
      lists += "</ul>";
      return lists;
    }
    document.getElementById("menu").innerHTML = printList(data);
    const topList = document.querySelector("#topList");
    console.log("this is main ul", topList);
    topList.addEventListener("click", e => {
      console.log(e);
      if (e.target.getAttribute("data-lists") === "lists") {
        const subParentlist = e.target.parentElement;
        const sublist = e.target.nextElementSibling;
        console.log("this is sub", sublist);
        console.log("this is parent", subParentlist);
        subParentlist.classList.toggle("close-icon");
        subParentlist.classList.toggle("expand-icon");
        sublist.classList.toggle("dis-none");
      }
    }, false);
  });
}


export default recursiveListRes;