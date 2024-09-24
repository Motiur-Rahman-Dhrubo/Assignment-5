// changing page
function goBlog() {
    window.location.href = "blog.html";
}
function goHome() {
  window.location.href = "index.html";
}

// history-btn-action
document.getElementById("history-btn")
  .addEventListener("click", function () {
  goPage("donation-sec", "history-sec");
  changeBtn("history-btn", "donation-btn");
});

// history-btn-action
document.getElementById("donation-btn")
  .addEventListener("click", function () {
  goPage("history-sec", "donation-sec");
  changeBtn("donation-btn", "history-btn");
});