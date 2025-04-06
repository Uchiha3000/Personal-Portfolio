// document.addEventListener("DOMContentLoaded", function () {
//     const sidebar = document.querySelector(".sidebar");
//     const toggleButton = document.getElementById("sidebarToggle");

//     toggleButton.addEventListener("click", function () {
//         sidebar.classList.toggle("hidden");
//     });
// });

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }