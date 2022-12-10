
function paymentProcess() {

    let num_of_students = prompt("Enter total number of students");

    var options = {
        "key": "rzp_test_BOJKRLdGj32zDZ", // Enter the Key ID generated from the Dashboard
        "amount": num_of_students*320*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "STUREC",
        "description": "ERP system",
        "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Sidhu Moosewala",
            "email": "sidhumoosewala@gmail.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('123456789').set({
    payment_id : response.razorpay_payment_id
    })
}