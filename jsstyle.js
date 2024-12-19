document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a"); // Ambil semua tautan di navigasi
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah perilaku default dari klik link
        const targetId = link.getAttribute("href").substring(1); // Ambil ID tujuan dari href
        const targetElement = document.getElementById(targetId); // Temukan elemen tujuan
  
        if (targetElement) {
          // Perpindahan scroll dengan smooth effect
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");
  
    // Event listener untuk scroll
    window.addEventListener("scroll", () => {
      const halfway = document.documentElement.scrollHeight / 2;
  
      // Tampilkan tombol ketika scroll melewati setengah halaman
      if (window.scrollY > halfway) {
        scrollToTopButton.style.display = "flex";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Event listener untuk tombol scroll to top
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll ke atas
      });
    });
  });