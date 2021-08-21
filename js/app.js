//update total price
function updateTotalPrice(){
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);

    //update total price
    document.getElementById('total-amount').innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;

    //update total
    document.getElementById('total-price').innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
}

//coupon code apply
function couponApply(){
    const couponCodeField = document.getElementById('coupon-field');
    const couponCode = couponCodeField.value;
    if(couponCode == 'stevekaku'){
        const totalPrice = parseFloat(document.getElementById('total-price').innerText);
        //update total after coupon apply
        document.getElementById('total-price').innerText = totalPrice - ((totalPrice * 20) / 100);
        couponCodeField.value = '';
    }
    else{
        alert('Please enter valid coupon code!!!');
        couponCodeField.value = '';
    }
}

//update extra cost
function updateCost(product, price){
    if(product == 'delivery'){
        document.getElementById(product + '-charge').innerText = price;
    }
    else{
        document.getElementById('extra-' + product + '-cost').innerText = price;
    }
}

//8gb memory button event handle
document.getElementById('memory-8gb-btn').addEventListener('click', function(){
    updateCost('memory', 0);
    updateTotalPrice();
});
//16gb memory button event handle
document.getElementById('memory-16gb-btn').addEventListener('click', function(){
    updateCost('memory', 180);
    updateTotalPrice();
});
//256gb storage button event handle
document.getElementById('storage-256gb-btn').addEventListener('click', function(){
    updateCost('storage', 0);
    updateTotalPrice();
});
//512gb storage button event handle
document.getElementById('storage-512gb-btn').addEventListener('click', function(){
    updateCost('storage', 100);
    updateTotalPrice();
});
//1TB storage button event handle
document.getElementById('storage-1tb-btn').addEventListener('click', function(){
    updateCost('storage', 180);
    updateTotalPrice();
});
//free delivery button event handle
document.getElementById('delivery-free').addEventListener('click', function(){
    updateCost('delivery', 0);
    updateTotalPrice();
});
//$20 delivery button event handle
document.getElementById('delivery-prime').addEventListener('click', function(){
    updateCost('delivery', 20);
    updateTotalPrice();
});