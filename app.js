const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const remove = document.querySelectorAll(".remove");
const product_total = document.querySelectorAll(".product-total span");
const price = document.querySelector(".price span");
const show = document.querySelectorAll(".show");
const subtotal = document.querySelector(".subtotal_price");
const tax = document.querySelector(".tax_price");
const total_price = document.querySelector(".total_price");
const shipping_price = document.querySelector(".shipping_price");

let sum = 0;
product_total.forEach((item) => {
  sum += +item.textContent;
  subtotal.textContent = sum.toFixed(2) + "$";
});


tax.textContent =
  (+subtotal.textContent.replace("$", "") * 0.18).toFixed(2) + "$";
total_price.textContent =
  +subtotal.textContent.replace("$", "") +
  +tax.textContent.replace("$", "") +
  +shipping_price.textContent.replace("$", "") +
  "$";

 

increase.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.previousElementSibling.textContent < 10) {
      ++item.previousElementSibling.textContent;
    }
    item.parentElement.nextElementSibling.nextElementSibling.children[0].textContent =
      (
        item.previousElementSibling.textContent *
        item.parentElement.previousElementSibling.children[0].textContent
      ).toFixed(2);

    let sum = 0;
    product_total.forEach((item) => {
      sum += +item.textContent;
    });

    subtotal.textContent = sum.toFixed(2) + "$";
    tax.textContent =
      (+subtotal.textContent.replace("$", "") * 0.18).toFixed(2) + "$";
 if (+subtotal.textContent.replace("$", "") == 0){
      shipping_price.textContent = (0).toFixed(2) + "$"  ;
      console.log(+shipping_price.textContent.replace("$", ""));
    }
  else if (+subtotal.textContent.replace("$", "") > 0){
      shipping_price.textContent = (15).toFixed(2) + "$"  ;
      console.log("ethem");
    }
    total_price.textContent =
      (
        +subtotal.textContent.replace("$", "") +
        +tax.textContent.replace("$", "") +
        +shipping_price.textContent.replace("$", "")
      ).toFixed(2) + "$";

  if (+subtotal.textContent.replace("$", "") == 0){
      Number(shipping_price.textContent.replace("$", "")) = 0  ;
      console.log(+shipping_price.textContent.replace("$", ""));
    }

  });
});

decrease.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.nextElementSibling.textContent > 0) {
      --item.nextElementSibling.textContent;
      // item.disabled = "true"
    }
    item.parentElement.nextElementSibling.nextElementSibling.children[0].textContent =
      (
        item.nextElementSibling.textContent *
        item.parentElement.previousElementSibling.children[0].textContent
      ).toFixed(2);

    let sum = 0;
    product_total.forEach((item) => {
      sum += +item.textContent;
    });

    subtotal.textContent = sum.toFixed(2) + "$";
    tax.textContent =
      (+subtotal.textContent.replace("$", "") * 0.18).toFixed(2) + "$";
 

 if (+subtotal.textContent.replace("$", "") == 0){
      shipping_price.textContent = (0).toFixed(2) + "$"  ;
      console.log(+shipping_price.textContent.replace("$", ""));
    }
  else if (+subtotal.textContent.replace("$", "") > 0){
      shipping_price.textContent = (15).toFixed(2) + "$"  ;
    }


    total_price.textContent =
      (
        +subtotal.textContent.replace("$", "") +
        +tax.textContent.replace("$", "") +
        +shipping_price.textContent.replace("$", "")
      ).toFixed(2) + "$";

 
      
  });
 
});

remove.forEach((item) => {
  item.addEventListener("click", () => {
    item.previousElementSibling.children[1].textContent = 0;
    item.parentElement.lastElementChild.children[0].textContent = 0;

    let sum = 0;
    product_total.forEach((item) => {
      sum += +item.textContent;
    });

    subtotal.textContent = sum.toFixed(2) + "$";
    tax.textContent =
      (+subtotal.textContent.replace("$", "") * 0.18).toFixed(2) + "$";

 if (+subtotal.textContent.replace("$", "") == 0){
      shipping_price.textContent = (0).toFixed(2) + "$"  ;
      console.log(+shipping_price.textContent.replace("$", ""));
    }
  else if (+subtotal.textContent.replace("$", "") > 0){
      shipping_price.textContent = (15).toFixed(2) + "$"  ;
    }

    total_price.textContent =
      (
        +subtotal.textContent.replace("$", "") +
        +tax.textContent.replace("$", "") +
        +shipping_price.textContent.replace("$", "")
      ).toFixed(2) + "$";

    item.parentElement.parentElement.remove();


  });
});