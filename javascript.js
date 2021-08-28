function alertFunction() {
  alert("Nothing more to see here, Goodbye !");
  setInterval(function() {
    alert("Stil there ?\nWhy ?\nGo check the other tabs !");
    }, 5000);
}

function submit_dog_text() {
  text = document.getElementById("exampleFormControlTextarea1").value;
  if (text == "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.")
  {
    document.getElementById("dogImg").style.display='block';
    console.log("good job");
  }
  else
  {
    $(".alert").show();
    setTimeout(function() {
    document.location.reload();
    }, 3000);
    
  }
  
}