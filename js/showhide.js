var shown = false;

function showhide() {
  if (shown) {
    document.getElementById('email').innerHTML = "Show my email";
    shown = false;
  } else {
    var myemail = "<a href='mailto:servaitesk2" + "@" + "udayton.edu'>servaitesk2" + "@" + "udayton.edu</a>";
    //alert("myemail="+myemail);
    document.getElementById('email').innerHTML = myemail;
    shown = true;
  }
}
