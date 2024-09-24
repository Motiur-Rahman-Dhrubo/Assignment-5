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