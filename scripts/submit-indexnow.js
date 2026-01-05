const payload = {
  host: "www.unitsboard.com", // Your domain name WITHOUT https://
  key: "116ae2da00b347919387609cb4c5e5c4", // ← Replace with your actual 64-char hex key
  keyLocation: "https://www.unitsboard.com/116ae2da00b347919387609cb4c5e5c4.txt", // ← Update with your real key filename
  urlList: [
    "https://www.unitsboard.com/",
    "https://www.unitsboard.com/about/",
    "https://www.unitsboard.com/contact/",
    "https://www.unitsboard.com/privacy-policy/",
    "https://www.unitsboard.com/terms-of-service/",
    "https://www.unitsboard.com/units-converter/",
    "https://www.unitsboard.com/units-details/"
  ]
};

fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
  .then(response => console.log("Response Status:", response.status))
  .catch(error => console.error("Network Error:", error));