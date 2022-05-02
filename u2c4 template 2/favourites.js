// write js code here corresponding to favourites.html

var favouritesarr=JSON.parse(localStorage.getItem("favourites")) 
console.log(favouritesarr)

displaydata(favouritesarr)

function displaydata(favouritesarr){

favouritesarr.forEach(function(elem,ind){
    

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
tdtag6.innerText="Delete"
tdtag6.style.color="red"
tdtag6.style.cursor="pointer"
tdtag6.addEventListener("click",function(){
    deletefunction(elem,ind)})
trtag.append(tdtag6)


});
}


function deletefunction(elem,ind){
    favouritesarr.splice(ind,1)
    localStorage.setItem("favourites",JSON.stringify(favouritesarr))
    window.location.reload()

}
