// ================= DARK MODE =================

const darkModeBtn =
    document.getElementById("darkModeBtn");


// Kiểm tra trạng thái đã lưu
const savedMode =
    localStorage.getItem("darkMode");

if (savedMode === "enabled") {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";
}


// Click nút Dark Mode
darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

        darkModeBtn.textContent = "☀️";

    } else {

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

        darkModeBtn.textContent = "🌙";
    }

});