// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when link clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    setActiveLink(link);
  });
});

// ===== ACTIVE LINK HIGHLIGHTING =====
function setActiveLink(clickedLink) {
  navLinks.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
}

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".business-card, .value-item, .contact-card, .social-link",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
});

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== RIPPLE EFFECT ON BUTTONS =====
document
  .querySelectorAll(".btn, .link-btn, .social-link")
  .forEach((element) => {
    element.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);
    });
  });

// ===== PARALLAX EFFECT (SUBTLE) =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  }
});

// ===== IMAGE LAZY LOADING =====
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => imageObserver.observe(img));
}

// ===== MOBILE MENU CLOSE ON OUTSIDE CLICK =====
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-container")) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// ===== PERFORMANCE: THROTTLE SCROLL =====
let ticking = false;

function updateScroll() {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  },
  { passive: true },
);

// ===== CONSOLE MESSAGE =====
console.log(
  "%cDenny Malik Personal Profile",
  "font-size: 20px; color: #8B6F47; font-weight: bold;",
);
console.log(
  "%cCrafted with ❤️ for success",
  "font-size: 14px; color: #D4A574;",
);
