let btns=document.getElementsByClassName("btn");
let cartIcon=document.getElementById("cart-icon");
let cartNo=document.getElementById("cart-no");


for (var btn of btns){
    btn.addEventListener("click",(e)=>{
          let selectedBtn=e.target;
          let parentOfBtn=selectedBtn.parentElement
          let productPrice=parentOfBtn.querySelector(".color-yellow-light");
          let productTitle=parentOfBtn.parentElement.querySelector(".card-title");

          
        // console.log(productTitle,productPrice);
        updateCartNo(selectedBtn)
        updatingCart(productTitle,productPrice)
    })
   
}

let productCount=0;
function updateCartNo(selectedBtn){
    productCount++;
    cartNo.innerText=productCount;
    cartIcon.style.color="red"
    cartNo.style.display="block"
    // console.log("clicked")
    selectedBtn.setAttribute("disabled",true);
}



// cart section

function updatingCart(productTitle,productPrice){
    let container=document.querySelector("#product-price");
    // console.log("clicked")
    var rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.innerHTML=`
    <div class="col-md-7 center-item">
    
    <h6>${productTitle.innerText}</h6>
 </div>

 <div class="col-md-5 center-item">
    <h5><span class="price">${productPrice.innerText}</span></h5>
    <img src="images/remove.png" alt="" class="remove-item">
 </div>

 
    `

    container.append(rowDiv);



    upadatingTotal()
}


function upadatingTotal(){
    let prices=document.getElementsByClassName("price")
    var priceValue="";
    let totalPrice=0;
    for (var price of prices){
          priceValue= price.innerHTML;
         let priceNum=priceValue.replace(priceValue[0],"")
         totalPrice+=parseFloat(priceNum);
      
        
         
    }
    console.log(totalPrice)
    document.getElementById("total-price").innerText=totalPrice;

    // console.log(price);
}