document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // Dynamic copyright year
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Download toast
  var downloadBtn = document.querySelector('.btn-primary.btn-lg');
  var toast = document.getElementById('download-toast');
  if (downloadBtn && toast) {
    downloadBtn.addEventListener('click', function () {
      toast.classList.add('show');
      setTimeout(function () { toast.classList.remove('show'); }, 4000);
    });
  }
});
