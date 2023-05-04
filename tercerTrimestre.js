var toggle =document.getElementById('container');
var body =document.getElementById(' body ');

toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}