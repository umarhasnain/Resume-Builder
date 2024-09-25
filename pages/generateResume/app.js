
let btn = document.getElementById("btn");
let showResume = document.getElementById("showResume");
showResume.style.display = "none";

let showFunc = () => {
  let name = document.getElementById("name");
  let job_rule = document.getElementById("job-rule");
  let objective = document.getElementById("objective");
  let phoneNumber = document.getElementById("phoneNumber");
  let email = document.getElementById("email");
  let github = document.getElementById("Github");
  let linkedin = document.getElementById("linkedin");
  let expTittle = document.getElementById("expTittle");
  let expCompany = document.getElementById("expCompany");
  let expStartDate = document.getElementById("expStartDate");
  let expEndDate = document.getElementById("expEndDate");
  let eduTittle = document.getElementById("eduTittle");
  let edufrom = document.getElementById("edufrom");
  let eduStartDate = document.getElementById("eduStartDate");
  let eduEndDate = document.getElementById("eduEndDate");
  // var todo_input = document.getElementById("todo_input");
  var skillArea = document.getElementById("skillArea");
  var address = document.getElementById("address");
 
  
  //Show Reume Name:
  let showFulname = document.getElementById("showFulname");
  let jobRole = document.getElementById("jobRole");
  let showObjective = document.getElementById("showObjective");
  let showPhoneNumber = document.getElementById("showPhoneNumber");
  let showEmail = document.getElementById("showEmail");
  let showGithub = document.getElementById("showGithub");
  let showLinkedin = document.getElementById("showLinkedin");
  let showExpTittle = document.getElementById("showExpTittle");
  let showExpCompany = document.getElementById("showExpCompany");
  let showExpStartDate = document.getElementById("showExpStartDate");
  let showExpEndDate = document.getElementById("showExpEndDate");
  let showEduTittle = document.getElementById("showEduTittle");
  let showEduName = document.getElementById("showEduName");
  let showEduStartDate = document.getElementById("showEduStartDate");
  let showEduEndDate = document.getElementById("showEduEndDate");
  let skillList = document.getElementById("skillList");
  let showAddress = document.getElementById("showAddress");

 

  showFulname.innerHTML = name.value;
  jobRole.innerHTML = job_rule.value;
  showPhoneNumber.innerHTML = phoneNumber.value;
  showGithub.innerHTML = github
  showLinkedin.innerHTML = linkedin.value;
  showEmail.innerHTML = email.value;
  showObjective.innerHTML = objective.value
  showExpTittle.innerHTML = expTittle.value
  showExpCompany.innerHTML = expCompany.value
  showExpStartDate.innerHTML = expStartDate.value
  showExpEndDate.innerHTML = expEndDate.value
  showEduTittle.innerHTML = eduTittle.value
  showEduName.innerHTML = edufrom.value
  showEduStartDate.innerHTML = eduStartDate.value
  showEduEndDate.innerHTML = eduEndDate.value
  skillList.innerHTML = skillArea.value
  showAddress.innerHTML = address.value

  showResume.style.display = "block";


  
};

btn.addEventListener("click", showFunc);

