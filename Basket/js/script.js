//#region Jquery
$(document).ready(() => {
  let say = 0;

  $(".add-item").click((e) => {
    e.preventDefault();
    let idsArray;
    let id = e.target.parentElement.id;
    let elaveolunmuslar = localStorage.getItem("added");
    let indiElaveolunacaq;
    let newArr;

    if (elaveolunmuslar == null) {
      indiElaveolunacaq = id;
      say++;
    } else {
      idsArray = localStorage.getItem("added").split(",");
      let result = idsArray.some((item) => item == id);
      newArr = idsArray.filter((item) => item != id);
      if (result) {
        say--;
        indiElaveolunacaq = newArr.join(",");
      } else {
        say++;
        indiElaveolunacaq = elaveolunmuslar + "," + id;
      }
    }
    localStorage.setItem("added", indiElaveolunacaq);
    $("#count").text(say);
  });

  if (localStorage.getItem("added") != null) {
    count.innerHTML = localStorage.getItem("added").split(",").length;
  }
});

//#endregion
/********************************************************************/
//#region Js
// let buttons = document.querySelectorAll(".add-item");
// let count = document.querySelector("#count");
// let say = 0;

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let idsArray;
//     let id = buttons[i].parentElement.id;

//     let elaveolunmuslar = localStorage.getItem("added");
//     let indiElaveolunacaq;
//     let newArr;
//     if (elaveolunmuslar == null) {
//       indiElaveolunacaq = id;
//       say++;
//     } else {
//       idsArray = localStorage.getItem("added").split(",");
//       let result = idsArray.some((item) => item == id);
//       newArr = idsArray.filter((item) => item != id);
//       console.log(newArr);
//       if (result) {
//         say--;
//         indiElaveolunacaq = newArr.join(",");
//       } else {
//         say++;
//         indiElaveolunacaq = elaveolunmuslar + "," + id;
//       }
//     }

//     localStorage.setItem("added", indiElaveolunacaq);

//     count.innerHTML = say;
//   });
// }
// window.onload = () => {
//   if (localStorage.getItem("added") != null) {
//     count.innerHTML = localStorage.getItem("added").split(",").length;
//   }
// };
//#endregion
