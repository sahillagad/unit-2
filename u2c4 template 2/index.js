// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",myfunction)

var matchdetail=JSON.parse(localStorage.getItem("schedule"))||[];

function myfunction(){
event.preventDefault()

var matchobj={

    matcnumber:document.querySelector("#matchNum").value,
    team_a:document.querySelector("#teamA").value,
    team_b:document.querySelector("#teamB").value,
    date:document.querySelector("#date").value,
    venue:document.querySelector("#venue").value,



}
matchdetail.push(matchobj)
console.log(matchdetail)

localStorage.setItem("schedule",JSON.stringify(matchdetail))

}