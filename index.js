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


// Search Box Query

var search=document.getElementById("search")
var productcontainer=document.getElementById("Product-container")
var productlist=productcontainer.querySelectorAll("div")

// console.log(productlist)

search.addEventListener("keyup",function(){
    var searchlist=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
        {
            var productname=productlist[count].querySelector("h1").textContent
            console.log(productname)
            if(productname[count].toUpperCase().indexOf(searchlist)<0)
                {
                    productlist[count].style.display="none"
                }
                else
                {
                    productlist[count].style.display="block"
                }
        }
})