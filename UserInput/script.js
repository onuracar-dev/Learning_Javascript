let username;

document.getElementById("MySubmit").onclick = function(){
   username = document.getElementById("MyText").value;
   document.getElementById("MyH1").textContent = `Hello ${username}`
}