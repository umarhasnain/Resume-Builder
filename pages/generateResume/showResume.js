
let btn = document.getElementById("btn");

let showFunc = () => {
    let fullName = document.getElementById("fullName");
let heading = document.getElementById("heading");
heading.innerHTML = fullName.value
console.log(fullName.value);
// console.log(userNameText);
}

btn.addEventListener("click" , showFunc)

