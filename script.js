function sendMessage() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  if (name === "" || message === "") {
    document.getElementById("response").innerHTML = 
    "⚠️ Please fill in all fields!";
    document.getElementById("response").style.color = "red";
  } else {
    document.getElementById("response").innerHTML = 
    "✅ Thank you " + name + "! We received your message.";
    document.getElementById("response").style.color = "lightgreen";
  }
}
