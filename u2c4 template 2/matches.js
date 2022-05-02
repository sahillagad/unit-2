// write js code here corresponding to matches.html

var matcharr=JSON.parse(localStorage.getItem("schedule"))
console.log(matcharr)


document.querySelector("#filterVenue").addEventListener("click",sortbyvenue)

function sortbyvenue(){
  var select=document.querySelector("#filterVenue").value
  console.log(select)
  var result=matcharr.filter(function(elem){


    return select==elem.venue


  })
   displaydata(result)

}




var favouritesarr=JSON.parse(localStorage.getItem("favourites"))||[]

displaydata(matcharr)

function displaydata(matcharr){
    document.querySelector("tbody").innerHTML="" 
matcharr.forEach(function(elem){
  


var trtag=document.createElement("tr")
document.querySelector("tbody").append(trtag)

var tdtag1=document.createElement("td")
tdtag1.innerText=elem.matcnumber
trtag.append(tdtag1)


var tdtag2=document.createElement("td")
tdtag2.innerText=elem.team_a
trtag.append(tdtag2)



var tdtag3=document.createElement("td")
tdtag3.innerText=elem.team_b
trtag.append(tdtag3)



var tdtag4=document.createElement("td")
tdtag4.innerText=elem.date
trtag.append(tdtag4)



var tdtag5=document.createElement("td")
tdtag5.innerText=elem.venue
trtag.append(tdtag5)






var tdtag6=document.createElement("td")
tdtag6.innerText="Favourite"
tdtag6.style.color="green"
tdtag6.style.cursor="pointer"
tdtag6.addEventListener("click",function(){
    favfunction(elem)})
trtag.append(tdtag6)



});





}


function favfunction(elem){
console.log(elem)
favouritesarr.push(elem)

localStorage.setItem("favourites",JSON.stringify(favouritesarr))
}