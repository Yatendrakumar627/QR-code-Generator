
// Get the value of the given object property 
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

//  Create a QR code with the text
function generateQR() {
  // if length is not enough
  if(qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
  
    imgBox.classList.add("show-img");
  }
  else {
    qrText.classList.add("error");
    setTimeout ( ()=> {
      qrText.classList.remove("error");
    },1000)
  }

}