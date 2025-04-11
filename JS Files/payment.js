your_orders = document.querySelector(".menu1");
your_orders_status = document.querySelector(".status_your_orders");

your_foodyone = document.querySelector(".menu5");
your_foodyone_status = document.querySelector(".status_your_foodyone");

your_payments = document.querySelector(".menu2");
your_payments_status = document.querySelector(".status_payments");

your_favourates = document.querySelector(".menu3");
your_favourates_status = document.querySelector(".status_favourates");

your_orders.addEventListener("click", () => {
  your_orders_status.classList.remove("display_none");
  your_foodyone_status.classList.add("display_none");
  your_payments_status.classList.add("display_none");
  your_favourates_status.classList.add("display_none");

  your_orders.classList.add("menu_selected");
  your_foodyone.classList.remove("menu_selected");
  your_payments.classList.remove("menu_selected");
  your_favourates.classList.remove("menu_selected");
});

your_foodyone.addEventListener("click", () => {
  your_foodyone_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_payments_status.classList.add("display_none");
  your_favourates_status.classList.add("display_none");

  your_foodyone.classList.add("menu_selected");
  your_orders.classList.remove("menu_selected");
  your_payments.classList.remove("menu_selected");
  your_favourates.classList.remove("menu_selected");
});

your_payments.addEventListener("click", () => {
  your_payments_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_foodyone_status.classList.add("display_none");
  your_favourates_status.classList.add("display_none");

  your_payments.classList.add("menu_selected");
  your_foodyone.classList.remove("menu_selected");
  your_orders.classList.remove("menu_selected");
  your_favourates.classList.remove("menu_selected");
});

// your_favourates.addEventListener("click", ()=>{
//     your_favourates_status.classList.remove('display_none')
//     your_payments_status.classList.add('display_none')
//     your_orders_status.classList.add('display_none')
//     your_foodyone_status.classList.add('display_none')

//     your_favourates.classList.add('menu_selected')
//     your_payments.classList.remove('menu_selected')
//     your_foodyone.classList.remove('menu_selected')
//     your_orders.classList.remove('menu_selected')
// })

// checkbox debit card credit...

let radios = document.querySelectorAll('input[name="paymentMethod"]');
let ifchecked = document.querySelector;
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      //   alert(`You selected`);
      if (radio.value == "debit") {
        document
          .querySelector(".ifcheckeddebit")
          .classList.remove("display_none");
        document
          .querySelector(".ifcheckedcredit")
          .classList.add("display_none");
        document.querySelector(".ifcheckedupi").classList.add("display_none");
        document
          .querySelector(".ifcheckedcodpod")
          .classList.add("display_none");

        // alert('debit');
      } else if (radio.value == "credit") {
        document.querySelector(".ifcheckeddebit").classList.add("display_none");
        document
          .querySelector(".ifcheckedcredit")
          .classList.remove("display_none");
        document.querySelector(".ifcheckedupi").classList.add("display_none");
        document
          .querySelector(".ifcheckedcodpod")
          .classList.add("display_none");
        // alert('credit');
      } else if (radio.value == "UPI") {
        document.querySelector(".ifcheckeddebit").classList.add("display_none");
        document
          .querySelector(".ifcheckedcredit")
          .classList.add("display_none");
        document
          .querySelector(".ifcheckedupi")
          .classList.remove("display_none");
        document
          .querySelector(".ifcheckedcodpod")
          .classList.add("display_none");
        // alert('credit');
      } else if (radio.value == "cod_pod") {
        document.querySelector(".ifcheckeddebit").classList.add("display_none");
        document
          .querySelector(".ifcheckedcredit")
          .classList.add("display_none");
        document.querySelector(".ifcheckedupi").classList.add("display_none");
        document
          .querySelector(".ifcheckedcodpod")
          .classList.remove("display_none");
        // alert('credit');
      }
    }
  });
});

console.log("working");

//address add remove
let addressarray = [

  {
    id: 1,
    name: "Ria Gupta",
    adddress:
      "Sky Mansion at Bugatti Residences in Business Bay, Dubai",
    phone: 7814731025,
  },
];

let address = document.querySelector(".addresses");

function addressch() {
  address.innerHTML = "";
  addressarray.forEach((addr, index) => {
    let newdiv = document.createElement("div");
    newdiv.classList.add("address-container");
    newdiv.innerHTML = `
      <div class="checkbox-wrapper">
      <input type="radio" id="addressSelect1" name="addressSelect">
      </div>
      <div class="address-content">
      <h2>${addr.name}</h2>
      <p>${addr.adddress}</p>
      <p>Phone number: ${addr.phone}</p>
      <div class="address-actions">
      <a href="#" class="edit-link" onclick="removeaddress(${addr.id})">Remove Address</a>
      </div>
      </div>
    `;
    address.appendChild(newdiv);
  })
}

addressch();


//remove address

function idsubs(start){
  for(let i = start; i<addressarray.length; i++){
    addressarray[i].id--;
  }
}

function removeaddress(target){
  addressarray.splice(target-1, 1);
  count--;
  addressch();
  idsubs(target-1);
  console.log(addressarray);
}



//address input 
let count = 1;
function onadding(){
  count++;
  let address = document.querySelector("#address").value
  let name = document.querySelector("#name").value
  let phone = document.querySelector("#phone").value
  console.log(address);
  console.log(name);
  console.log(phone);
  addressarray.push({
    id: count,
    name: name,
    address: address,
    phone: phone,
  })

  addressch();
  document.querySelector(".ifclickedtonewadd").classList.add("display_none");

}

//side wali cart list 


// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// let cartlist = document.querySelector(".price")
// let total = 0;
// function renderingthecartlist(){
//   total = 0;
//   cartlist.innerHTML = `
//     <div class="titlee">
//     <p1>Cart</p1>
//     </div>
//   `;
//   cart.forEach((add, index) =>{
//     let cartsing = document.createElement("div");
//     cartsing.innerHTML = `
//       <div class="items item1">
//         <div class="item">
//           <p>${add.name}</p>
//         </div>
//         <div class="itemprice">
//           <p>$ ${(add.price * add.quantity).toFixed(2)}</p>
//         </div>
//       </div>
//     `
//     total += add.price * add.quantity;
//     cartlist.appendChild(cartsing);
//   })

//   let totaldiv = document.createElement("div");
//   totaldiv.classList.add("total");
//   totaldiv.innerHTML =  `
//       <div class="headddd">
//         <p>Total</p>
//       </div>
//       <div class="sumpri">
//         <p1>$ ${total.toFixed(2)}</p1>
//         </div>
//   `
//   cartlist.appendChild(totaldiv);
// }


let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartlist = document.querySelector(".price")
let total = 0;
function renderingthecartlist(){
  total = 0;
  cartlist.innerHTML = `
    <div class="titlee">
      <p1>Cart</p1>
    </div>
  `;
  
  cart.forEach((add, index) => {
    let cartsing = document.createElement("div");
    cartsing.classList.add("items", "item1"); // Add both classes directly
    cartsing.innerHTML = `
      <div class="item">
        <p>${add.name}</p>
      </div>
      <div class="itemprice">
        <p>$ ${(add.price * add.quantity).toFixed(2)}</p>
      </div>
    `;
    total += add.price * add.quantity;
    cartlist.appendChild(cartsing);
  })

  let totaldiv = document.createElement("div");
  totaldiv.classList.add("total");
  totaldiv.innerHTML = `
    <div class="headddd">
      <p1>Total</p1>
    </div>
    <div class="sumpri">
      <p1>$ ${total.toFixed(2)}</p1>
    </div>
  `;
  cartlist.appendChild(totaldiv);
}

renderingthecartlist();