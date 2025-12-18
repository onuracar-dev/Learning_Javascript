const MyCheckBox = document.getElementById(`MyCheckBox`);
const VisaBtn = document.getElementById(`VisaBtn`);
const MasterCardBtn = document.getElementById(`MasterCardBtn`);
const PaypalBtn = document.getElementById(`PaypalBtn`);
const MyCheckBoxResult = document.getElementById(`MyCheckBoxResult`);
const MyPaymentResult = document.getElementById(`MyPaymentResult`);
const MySubmit = document.getElementById(`MySubmit`);

MySubmit.onclick = function() {
    if (MyCheckBox.checked) {
        MyCheckBoxResult.textContent = `Youre subscribed`;
    }
    else {
        MyCheckBoxResult.textContent = `Youre not subscribed`;
    }
    if (VisaBtn.checked) {
        MyPaymentResult.textContent = `Youre paying with Visa`;
    }
    else if (MasterCardBtn.checked) {
        MyPaymentResult.textContent = `Youre paying with Mastercard`;
    }
    else if (PaypalBtn.checked) {
        MyPaymentResult.textContent = `Youre paying with paypal`;
    }
    else {
        MyPaymentResult.textContent = `You must select payment type`;
    }
}