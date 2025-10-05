import { fetchData } from "./assets/data.js";

const recursiveListRes = () => {
  let dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  let data = fetchData();
  data.then(value => {
    const data = value;
    function printList(data, level = 0) {
      let lists = `<ul id="topList" >`;


      for (const item of data || []) {
        const childList = item.children ? printList(item.children, level + 1) : "";
        if (item.children) {
          lists += `<li
                        class="opened-icon"
                       ><span data-lists="lists" class="par-list">${item.name}</span>  ${childList}</li>`;
        } else {
          lists += `<li>${item.name}</li>`;
        }
      }

      lists += "</ul>";
      return lists;
    }



    document.getElementById("menu").innerHTML = printList(data);
    const topList = document.querySelector("#topList");

    topList.addEventListener("click", e => {

      if (e.target.getAttribute("data-lists") === "lists") {
        const subParentlist = e.target.parentElement;
        const sublist = e.target.nextElementSibling;
        subParentlist.classList.toggle("close-icon");
        subParentlist.classList.toggle("expand-icon");
        sublist.classList.toggle("dis-none");
      }
    }, false);
  });
}



export default recursiveListRes;