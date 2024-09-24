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

// donation-btn-action
document.getElementById("donation-btn")
  .addEventListener("click", function () {
  goPage("history-sec", "donation-sec");
  changeBtn("donation-btn", "history-btn");
});


// donate_for_noakhali-btn-action
document.getElementById("donate_for_noakhali")
  .addEventListener("click", function () {
    let totalAccount = getAmount("total_account");
    let donateNoakhali = getAmount("donate_noakhali");
    let inputTakaNoakhali = document.getElementById("input_noakhali").value;
    const resonNoakhali = "famine-2024 at Noakhali";
    const inputNoakhaliNumber = parseInt(inputTakaNoakhali);
    const formattedDate = getFormattedDate();

        if (isNaN(inputTakaNoakhali) === true || inputTakaNoakhali <= 0 || inputTakaNoakhali > totalAccount) {
          alert("Invalid Input");
        } else {
          modal_1.showModal();
          document.getElementById("donate_noakhali").innerText = donateNoakhali + inputNoakhaliNumber;
          document.getElementById("total_account").innerText = totalAccount - inputNoakhaliNumber;
          document.getElementById("input_noakhali").value = "";
          document.getElementById(
            "history-sec"
          ).innerHTML += `<div class="border border-border-card border-solid rounded-2xl lg:p-8 md:p-7 p-6">
                <h3 class="lg:text-xl md:text-lg text-base font-bold lg:mb-4 md:mb-3 mb-2">${inputNoakhaliNumber} Taka is Donated for ${resonNoakhali}, Bangladesh</h3>
                <p class="lg:text-base md:text-sm text-xs font-light">Date: ${formattedDate} (Bangladesh Standard Time)</p>
            </div>`;
        }
  });

// donate_for_feni-btn-action
document.getElementById("donate_for_feni")
.addEventListener("click", function () {
  let totalAccount = getAmount("total_account");
  let donateFeni = getAmount("donate_feni");
  let inputTakaFeni = document.getElementById("input_feni").value;
  const resonFeni = "Flood Relief in Feni";
  const inputFeniNumber = parseInt(inputTakaFeni);
  const formattedDate = getFormattedDate();

      if (isNaN(inputTakaFeni) === true || inputTakaFeni <= 0 || inputTakaFeni > totalAccount) {
        alert("Invalid Input");
      } else {
        modal_2.showModal();
        document.getElementById("donate_feni").innerText = donateFeni + inputFeniNumber;
        document.getElementById("total_account").innerText = totalAccount - inputFeniNumber;
        document.getElementById("input_feni").value = "";
        document.getElementById(
          "history-sec"
        ).innerHTML += `<div class="border border-border-card border-solid rounded-2xl lg:p-8 md:p-7 p-6">
                <h3 class="lg:text-xl md:text-lg text-base font-bold lg:mb-4 md:mb-3 mb-2">${inputFeniNumber} Taka is Donated for ${resonFeni}, Bangladesh</h3>
                <p class="lg:text-base md:text-sm text-xs font-light">Date: ${formattedDate} (Bangladesh Standard Time)</p>
            </div>`;
      }
});

// donate_for_movement-btn-action
document.getElementById("donate_for_movement")
.addEventListener("click", function () {
  let totalAccount = getAmount("total_account");
  let donateMovement = getAmount("donate_movement");
  let inputTakaMovement = document.getElementById("input_movement").value;
  const resonMovement = "Injured in the Quota Movement";
  const inputMovementNumber = parseInt(inputTakaMovement);
  const formattedDate = getFormattedDate();

      if (isNaN(inputTakaMovement) === true || inputTakaMovement <= 0 || inputTakaMovement > totalAccount) {
        alert("Invalid Input");
      } else {
        modal_2.showModal();
        document.getElementById("donate_movement").innerText = donateMovement + inputMovementNumber;
        document.getElementById("total_account").innerText = totalAccount - inputMovementNumber;
        document.getElementById("input_movement").value = "";
        document.getElementById(
          "history-sec"
        ).innerHTML += `<div class="border border-border-card border-solid rounded-2xl lg:p-8 md:p-7 p-6">
                <h3 class="lg:text-xl md:text-lg text-base font-bold lg:mb-4 md:mb-3 mb-2">${inputMovementNumber} Taka is Donated for ${resonMovement}, Bangladesh</h3>
                <p class="lg:text-base md:text-sm text-xs font-light">Date: ${formattedDate} (Bangladesh Standard Time)</p>
            </div>`;
      }
});








































// document.getElementById("donate_for_noakhali")
//   .addEventListener("click", function () {
//     btnAction(input_noakhali, donateNoakhali, donate_noakhali);
//   });

// document
//   .getElementById("donate_for_feni")
//   .addEventListener("click", function () {
//     btnAction(input_feni, donateFeni);
//   });

// document
//   .getElementById("donate_for_movement")
//   .addEventListener("click", function () {
//     btnAction(input_movement, donateMovement, "donate_noakhali");
//   });