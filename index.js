// select Side Nav Bar
var menuicons=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenavbar")
var closes=document.getElementById("close-nav")

menuicons.addEventListener("click",function()
{
    
    sidenav.style.right=0
})

closes.addEventListener("click",function(){
    sidenav.style.right="-50%";
})