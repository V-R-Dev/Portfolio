function Copy() {
    var str = document.getElementById("addrMail").innerHTML;
    navigator.clipboard.writeText(str);
    window.alert("vous avez copié mon addresse mail : " + str);
  }