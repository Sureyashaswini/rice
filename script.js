function changeLanguage() {
  let lang = document.getElementById("language").value;

  if (lang === "en") {
    document.querySelector("h2").innerText = "About Rice";
    document.getElementById("text1").innerText =
      "Rice is one of the most important staple foods in the world, feeding more than half of the global population every day.";
    document.getElementById("text2").innerText =
      "It is mainly grown in Asia and requires warm climate and abundant water. India is one of the largest producers of rice.";
    document.getElementById("text3").innerText =
      "Popular varieties include Basmati, Sona Masoori, Jasmine Rice, Brown Rice, and Sticky Rice.";
    document.getElementById("text4").innerText =
      "Rice is used in many dishes such as biryani, fried rice, idli, dosa, and sweets across different cultures.";
  }

  if (lang === "te") {
    document.querySelector("h2").innerText = "బియ్యం గురించి";
    document.getElementById("text1").innerText =
      "బియ్యం ప్రపంచంలో ముఖ్యమైన ఆహారాలలో ఒకటి.";
    document.getElementById("text2").innerText =
      "ఇది ఎక్కువగా ఆసియా దేశాలలో సాగు చేయబడుతుంది.";
    document.getElementById("text3").innerText =
      "బాస్మతి, సోనా మసూరి, జాస్మిన్ రైస్ వంటి రకాలు ఉన్నాయి.";
    document.getElementById("text4").innerText =
      "బియ్యంతో బిర్యానీ, ఫ్రైడ్ రైస్, ఇడ్లీ, దోస వంటి వంటకాలు తయారవుతాయి.";
  }

  if (lang === "hi") {
    document.querySelector("h2").innerText = "चावल के बारे में";
    document.getElementById("text1").innerText =
      "चावल दुनिया का एक प्रमुख भोजन है।";
    document.getElementById("text2").innerText =
      "यह मुख्य रूप से एशिया में उगाया जाता है।";
    document.getElementById("text3").innerText =
      "बासमती, सोना मसूरी, जैस्मिन जैसे प्रकार होते हैं।";
    document.getElementById("text4").innerText =
      "चावल से बिरयानी, फ्राइड राइस, इडली, डोसा जैसे व्यंजन बनते हैं।";
  }

  if (lang === "ta") {
    document.querySelector("h2").innerText = "அரிசி பற்றி";
    document.getElementById("text1").innerText =
      "அரிசி உலகின் முக்கிய உணவுகளில் ஒன்றாகும்.";
    document.getElementById("text2").innerText =
      "இது பெரும்பாலும் ஆசியாவில் பயிரிடப்படுகிறது.";
    document.getElementById("text3").innerText =
      "பாஸ்மதி, சோனா மசூரி, ஜாஸ்மின் போன்ற வகைகள் உள்ளன.";
    document.getElementById("text4").innerText =
      "அரிசியால் பிரியாணி, ஃப்ரைட் ரைஸ், இட்லி, தோசை போன்ற உணவுகள் செய்யப்படுகின்றன.";
  }
}
let mode = "login";

function openAuth(type) {
  mode = type;

  document.getElementById("authScreen").classList.add("active");

  document.getElementById("authTitle").innerText =
    type === "login" ? "Sign In" : "Sign Up";
}

function closeAuth() {
  document.getElementById("authScreen").classList.remove("active");
}

function submitAuth() {
  let user = document.getElementById("authUser").value;
  let pass = document.getElementById("authPass").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  if (mode === "register") {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Registered Successfully");
    window.location.href = "shop.html";
  } else {
    let u = localStorage.getItem("user");
    let p = localStorage.getItem("pass");

    if (user === u && pass === p) {
      alert("Login Successful");
      window.location.href = "shop.html";
    } else {
      alert("Invalid Credentials");
    }
  }
}
  let cart = [];

  function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
  }

  function updateCount() {
    document.getElementById("cart-count").innerText = cart.length;
  }

  function goToCart() {
    window.location.href = "cart.html";
  }

  updateCount();
  