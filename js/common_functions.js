// change-page
function goPage(id1, id2) {
    document.getElementById(id1).classList.add("hidden");
    document.getElementById(id1).classList.remove("flex");
    document.getElementById(id2).classList.remove("hidden");
    document.getElementById(id2).classList.add("flex");
}

// change-active-btn
function changeBtn(id1, id2) {
    document.getElementById(id1).classList.add("bg-btn-alfa", "text-text-alfa");
    document.getElementById(id1).classList.remove("border", "border-border-btn", "border-solid", "bg-white-beta", "text-text-gamma");
    document.getElementById(id2).classList.remove("bg-btn-alfa", "text-text-alfa");
    document.getElementById(id2).classList.add("border", "border-border-btn", "border-solid", "bg-white-beta", "text-text-gamma");
};

// get-taka-in-number
function getAmount(id){
    let totalTaka = document.getElementById(id).innerText;
    let totalNumber = parseInt(totalTaka);
    return totalNumber;
}

// time-date-format
function getFormattedDate() {
  const currentDate = new Date();
  const options = { 
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit', 
    hour12: false
  };
  const timezoneOffset = currentDate.getTimezoneOffset();
  const timezoneInHours = -(timezoneOffset / 60);
  const formattedTimezone = `GMT ${timezoneInHours >= 0 ? '+' : ''}${timezoneInHours.toString().padStart(2, '0')}00`;
  return currentDate
    .toLocaleString('en-US', options)
    .replace(/,/g, '') + ` ${formattedTimezone}`;
}