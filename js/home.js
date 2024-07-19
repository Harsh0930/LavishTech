document.getElementById("digital_marketing").style.display = "none";
document.getElementById("graphic_designing").style.display = "none";
document.getElementById("website_list").style.backgroundColor="#cfff04"


// WEBISTE 
document.getElementById("website_list").addEventListener("click", () => {
  document.getElementById("website").style.display = "flex";
  document.getElementById("website").set
  document.getElementById("website_list").style.backgroundColor="#cfff04"
  document.getElementById("digital_marketing_list").style.backgroundColor="transparent"
  document.getElementById("graphic_designing_list").style.backgroundColor="transparent"
  document.getElementById("digital_marketing").style.display = "none";
  document.getElementById("graphic_designing").style.display = "none";
});

// DIGITAL MARKETING 
document
  .getElementById("digital_marketing_list")
  .addEventListener("click", () => {
  document.getElementById("website_list").style.backgroundColor="transparent";
  document.getElementById("digital_marketing_list").style.backgroundColor="#cfff04";
  document.getElementById("graphic_designing_list").style.backgroundColor="transparent";
    document.getElementById("website").style.display = "none";
    document.getElementById("digital_marketing").style.display = "flex";
    document.getElementById("graphic_designing").style.display = "none";
  });

//   GRAPHIC DESIGNING
document
  .getElementById("graphic_designing_list")
  .addEventListener("click", () => {
    document.getElementById("website_list").style.backgroundColor="transparent";
  document.getElementById("digital_marketing_list").style.backgroundColor="transparent";
  document.getElementById("graphic_designing_list").style.backgroundColor="#cfff04";
    document.getElementById("website").style.display = "none";
    document.getElementById("digital_marketing").style.display = "none";
    document.getElementById("graphic_designing").style.display = "flex";
  });
