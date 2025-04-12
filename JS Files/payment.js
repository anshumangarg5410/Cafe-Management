your_orders = document.querySelector(".menu1");
your_orders_status = document.querySelector(".status_your_orders");

your_foodyone = document.querySelector(".menu5");
your_foodyone_status = document.querySelector(".status_your_foodyone");

your_payments = document.querySelector(".menu2");
your_payments_status = document.querySelector(".status_payments");

your_orders.addEventListener("click", () => {
  your_orders_status.classList.remove("display_none");
  your_foodyone_status.classList.add("display_none");
  your_payments_status.classList.add("display_none");

  your_orders.classList.add("menu_selected");
  your_foodyone.classList.remove("menu_selected");
  your_payments.classList.remove("menu_selected");
});

your_foodyone.addEventListener("click", () => {
  your_foodyone_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_payments_status.classList.add("display_none");

  your_foodyone.classList.add("menu_selected");
  your_orders.classList.remove("menu_selected");
  your_payments.classList.remove("menu_selected");
});

your_payments.addEventListener("click", () => {
  seladdaddress();
  try {
    paymentloader(); // agar yahan error aaye to neeche wala code fir bhi chalega
  } catch (e) {
    console.error("Error in paymentloader:", e);
  }
  your_payments_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_foodyone_status.classList.add("display_none");
  
  your_payments.classList.add("menu_selected");
  your_foodyone.classList.remove("menu_selected");
  your_orders.classList.remove("menu_selected");

});

function paymentopen(){
  seladdaddress();
  try {
    paymentloader(); // agar yahan error aaye to neeche wala code fir bhi chalega
  } catch (e) {
    console.error("Error in paymentloader:", e);
  }
  your_payments_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_foodyone_status.classList.add("display_none");
  
  your_payments.classList.add("menu_selected");
  your_foodyone.classList.remove("menu_selected");
  your_orders.classList.remove("menu_selected");
}

function paymentopen2(){
  your_foodyone_status.classList.remove("display_none");
  your_orders_status.classList.add("display_none");
  your_payments_status.classList.add("display_none");

  your_foodyone.classList.add("menu_selected");
  your_orders.classList.remove("menu_selected");
  your_payments.classList.remove("menu_selected");
}



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



// /proceed krne par arrya mei sotre hojee


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
        <input type="radio" id="addressSelect1" name="addressSelect" checked>
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
  if (addressarray.length == 1){
    alert("There must be one address in the list!");
    return;
  } else{
    addressarray.splice(target-1, 1);
    count--;
    addressch();
    idsubs(target-1);
    console.log(addressarray);
  }

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

// showing the selected address! 

let selectedaddress = document.querySelector(".paymentreviewstatus");

function seladdaddress() {
  selectedaddress.innerHTML = "";

  let selectedRadio = document.querySelector('input[name="addressSelect"]:checked');
  if (!selectedRadio) {
    selectedaddress.innerHTML = "";
    let paymentdiv = document.createElement("div");
    paymentdiv.classList.add("selpayment")
    paymentdiv.classList.add("selectedthings")
    paymentdiv.innerHTML = `
    <div class="notheaddd"><p>Nothing Selected!?</p></div>
    `
    selectedaddress.appendChild(paymentdiv)
    return
    }

  let addressContainer = selectedRadio.closest(".address-container");
  console.log(addressContainer);
  let addressContent = addressContainer.querySelector(".address-content");

  let lines = addressContent.querySelectorAll("p");
  let linesh = addressContent.querySelectorAll("h2");
  let addressHTML = "";
  linesh.forEach(line => {
    addressHTML += `<h2>${line.textContent}</h2>`;
  });
  lines.forEach(line => {
    addressHTML += `<p>${line.textContent}</p>`;
  });


  let newdivv = document.createElement("div");
  newdivv.classList.add("seladdress");

  newdivv.innerHTML = `
    <div class="headdd"><p> Selected Address </p></div>
    <div class="address-container second">
      <div class="address-content">
        ${addressHTML}
      </div>
    </div>
  `;

  selectedaddress.appendChild(newdivv);

  let paymentdiv = document.createElement("div");
  paymentdiv.classList.add("selpayment")
  paymentdiv.classList.add("selectedthings")
  paymentdiv.innerHTML = `
  <div class="headdd"><p> Selected Payment Method </p></div>
  `
  selectedaddress.appendChild(paymentdiv)
}

seladdaddress();


//showing the seleced payment option 




function paymentloader(){
  console.log("working")
  let selectedPaymentMethod = "";  

  let selectedRadio = document.querySelector('input[name="paymentMethod"]:checked');
  if (!selectedRadio) {
    selectedPaymentMethod = "";
    return;
  }

  let paymentcontainer = selectedRadio.closest(".payment-option-container");
  console.log(paymentcontainer.querySelector(".option-header").querySelector("input").value);
  let method =  paymentcontainer.querySelector(".option-header").querySelector("input")?.value || "N/A";;
  let creditnumber = document.querySelector("#creditcardnumber")?.value || "N/A";
  let debitnumber = document.querySelector("#debitcardnumber")?.value || "N/A";
  let cexpiry = document.querySelector("#cexpiryDate")?.value || "N/A";
  let dexpiry = document.querySelector("#dexpiryDate")?.value || "N/A";
  console.log(creditnumber)
  console.log(debitnumber)

  let selectedthing = document.querySelector(".selpayment");
  console.log(selectedthing);
  let newdivision = document.createElement("div");
  newdivision.classList.add("address-container");
  if (method == "debit"){
    newdivision.innerHTML = `
    <div class="${method}-content ">
    <p>Card Number: ${debitnumber} </p>
    <p>Date of Expiry: ${dexpiry} </p>
    </div>
  `
  }

  else if (method == "credit"){
    newdivision.innerHTML = `
    <div class="${method}-content ">
    <p>Card Number: ${creditnumber} </p>
    <p>Date of Expiry: ${cexpiry} </p>
    </div>
  `
  }
  else if (method == "cod_pod"){
    newdivision.innerHTML = `
    <div class="${method}-content">
    <h2>COD / POD</h2>
    <p>Please make sure to handle the exact amount to the delivery person and avoid change! </p>
    </div>
  `
  }
  else if (method == "UPI") {
    newdivision.innerHTML = `
    <div class="${method}-content">
    <h2>UPI</h2>
    <p>UPI ID: ${document.querySelector("#UPI_IDD").value}</p>
  `
  }
  else console.log("fail");
  document.querySelector(".selpayment").appendChild(newdivision);

  let finalorder = document.createElement("div");
  finalorder.classList.add("placeorder");
  finalorder.innerHTML = `
  <div onclick="popupcomeandgo()" class="placee">Place Order!</div>
  `
  document.querySelector(".selpayment").appendChild(finalorder);

}
let condition = 0;
function popupcomeandgo(){
  let popup = document.querySelector(".bigbigpopup");
  if (condition) {
    popup.classList.remove("display_none");
    condition = 0;
  }
  else {
    popup.classList.add("display_none");
    condition = 1;
  }

  localStorage.clear();
  
}

//onclicking proceed

