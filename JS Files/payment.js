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
    id: "1",
    name: "Anshuman Garg",
    adddress:
      "5410, CAT 1, G/F, MHC, MMJ, CHD, CHANDIGARH, CHANDIGARH, 160101, India",
    phone: 7814941384,
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
      <a href="#" class="edit-link">Remove Address</a>
      </div>
      </div>
    `;
    address.appendChild(newdiv);
  })
}

addressch();




//address input 

function onadding(){
  let address = document.querySelector("#address").value
  let name = document.querySelector("#name").value
  let phone = document.querySelector("#phone").value
  console.log(address);
  console.log(name);
  console.log(phone);
  addressarray.push({
    name: name,
    address: address,
    phone: phone,
  })
  addressch();

}

