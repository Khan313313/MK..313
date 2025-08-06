function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const phoneNumber = "923258575790"; // Your WhatsApp number
  const finalMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
  window.open(url, "_blank");
}

document.getElementById("profilePic").onchange = function (evt) {
  const [file] = this.files;
  if (file) {
    document.getElementById("preview").style.display = "block";
    document.getElementById("preview").src = URL.createObjectURL(file);
  }
};
