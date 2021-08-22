let btns=document.getElementsByClassName("btn");
let cartIcon=document.getElementById("cart-icon");
let cartNo=document.getElementById("cart-no");


for (var btn of btns){
    btn.addEventListener("click",(e)=>{
          let selectedBtn=e.target;
          let parentOfBtn=selectedBtn.parentElement
          let productPrice=parentOfBtn.querySelector(".color-yellow-light");
          let productTitle=parentOfBtn.parentElement.querySelector(".card-title");

          
        console.log(productTitle,productPrice);
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
    let container=document.getElementById("cartItem-container");
    console.log("clicked")
    var rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.innerHTML=`
    <div class="col-md-7 center-item">
    
    <h5>${productTitle.innerText}</h5>
 </div>

 <div class="col-md-5 center-item">
    <div class="input-group number-spinner">
       <button id="phone-minus" class="btn btn-default"><i class="fas fa-minus"></i></button>
       <input id="phone-num" type="number" min="0" class="form-control text-center" value="1">
       <button id="phone-plus" class="btn btn-default"><i class="fas fa-plus"></i></button>
    </div>
    <h5>$<span id="phone-price">${productPrice.innerText}</span></h5>
    <img src="images/remove.png" alt="" class="remove-item">
 </div>
    `

    container.appendChild(rowDiv);
}