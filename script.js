// <!-- script of about section -->
{/* <script> */ }
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// </script>
// <!-- script of side menu -->
// <script>
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.width = "200px";
}
function closemenu() {
  sidemenu.style.width = "0";
}
// </script>
// // <!-- script for go to top button -->
// <script>
// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// </script>
// <!-- form linking scripts -->
// <script>
const scriptURL = 'https://script.google.com/macros/s/AKfycbzzV6OA5KRucTUFCMWLPrEpEv_R1VzXvLJtjXfNOvyUKAYTvMVnyGmsm6Y2GBNROWQvhA/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(_response => { alert("Message sent successfully, we'll get in touch with you asap (if needed)") })
  form.reset()
    .catch(_error => { alert("Oops something went wron, please try again") })
})
// stars script
function gotoRating() {
  window.open("https://g.page/r/CSgQT-1k_Ts0EAI/review")
}