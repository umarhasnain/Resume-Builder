
let btn = document.getElementById("btn");

let showFunc = () => {
    let name = document.getElementById("name");
    let job_rule = document.getElementById("job-rule");
    let objective = document.getElementById("objective");
    let phoneNumber = document.getElementById("phoneNumber");
    let email = document.getElementById("email");
    
    
    //Show Reume Name:
    let showFulname = document.getElementById("showFulname");
    let jobRole = document.getElementById("jobRole");
    // let objective = document.getElementById("objective");
    let showPhoneNumber = document.getElementById("showPhoneNumber");
    let showEmail = document.getElementById("showEmail");

    showFulname.innerHTML = name.value
    jobRole.innerHTML = job_rule.value
    showPhoneNumber.innerHTML = phoneNumber.value
    showEmail.innerHTML = email.value
console.log(name.value);
// console.log(userNameText);
}

btn.addEventListener("click" , showFunc)

