/* ============================================================
   APLUND — ELECTRIC BLUE STUDIO main.js
   Reference-Inspired Interactive Features:
   - 4 Frosted Glass Category Cards with Live Stage Switching
   - Ambient Backlight Toggle
   - Interactive Customizer / Price Estimator
   - Accessible <dialog> Product Lightbox
   - Direct WhatsApp Order Links
   ============================================================ */

/* ── CONFIGURATION ───────────────────────────────────────── */
const WHATSAPP_NUM = "2347070276427";

function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(message)}`;
}

/* ── REAL PRODUCTS PORTFOLIO DATA ────────────────────────── */
const PORTFOLIO = [
  {
    id: "insta-mirror",
    title: "Viral Insta LED Mirror",
    category: "mirrors",
    categoryLabel: "LED MIRROR",
    tag: "🔥 BESTSELLER",
    price: "From ₦25,000",
    image: "images/insta-mirror.jpg",
    glowColor: "rgba(0, 210, 255, 0.45)",
    shortDesc: "Viral iPhone / Instagram styled LED mirror with warm ambient wall backlight, dynamic island notch, and customizable handle.",
    fullDesc: "Our most viral build seen across TikTok. Precision-cut acrylic frame shaped like a modern smartphone post with warm 3000K halo LED backlight that illuminates your wall. Perfect for bedrooms, glam stations, and salon selfie corners. Includes custom handle etching.",
    craftTime: "3 - 5 Days",
    glowType: "Warm Ambient 3000K (or RGB)",
    customization: "Social handle, username & like counts"
  },
  {
    id: "krusty-mirror",
    title: "Pop Art Krusty Neon Mirror",
    category: "popart",
    categoryLabel: "POP ART & CUSTOM",
    tag: "⚡ POP ART",
    price: "From ₦30,000",
    image: "images/krusty-mirror.jpg",
    glowColor: "rgba(247, 37, 133, 0.5)",
    shortDesc: "Handcrafted cartoon pop art illuminated mirror with multi-color RGB neon aura backlight and center mirror cutout.",
    fullDesc: "Turn your room into an art gallery. Precision multi-layer acrylic woodwork featuring iconic Krusty pop art character with money eyes, dollar bag, and vibrant multi-tier neon backlight halo. A true collector piece for modern interiors and creative studios.",
    craftTime: "4 - 6 Days",
    glowType: "Multi-color Neon Aura",
    customization: "Any cartoon, KAWS, or anime character on request"
  },
  {
    id: "africa-mirror",
    title: "Africa Silhouette LED Mirror",
    category: "mirrors",
    categoryLabel: "LED MIRROR",
    tag: "✨ LUXURY DECOR",
    price: "From ₦35,000",
    image: "images/africa-mirror.jpg",
    glowColor: "rgba(255, 179, 71, 0.45)",
    shortDesc: "Architectural Africa continent outline mirror with high-CRI warm 3000K ambient LED halo. Designed for high-end dining and lounges.",
    fullDesc: "A statement tribute to our roots. Hand-cut continental contour with continuous perimeter LED glow. Mounted with heavy-duty hidden brackets to float seamlessly 25mm off the wall, creating an expansive warm halo across your wall surface.",
    craftTime: "4 - 5 Days",
    glowType: "Warm Golden (3000K) or Daylight (6000K)",
    customization: "Custom country highlights & sizes up to 7ft"
  },
  {
    id: "nike-cabinet",
    title: "Nike Drip Sneaker Locker",
    category: "furniture",
    categoryLabel: "DRIP FURNITURE",
    tag: "👟 STREETWEAR",
    price: "Quote on Request",
    image: "images/nike-cabinet.jpg",
    glowColor: "rgba(0, 102, 255, 0.45)",
    shortDesc: "Custom dual-door sneaker storage cabinet with black acrylic paint splatter finish, signature Nike swoosh, and steel hardware.",
    fullDesc: "Bespoke drip furniture for sneakerheads and streetwear enthusiasts. Hand-painted monochromatic splatter finish with wrapped Nike branding, soft-close hinges, internal sneaker display shelving, and optional interior LED illumination.",
    craftTime: "7 - 10 Days",
    glowType: "Optional Internal Shelf LED",
    customization: "Any brand (Nike, Jordan, Bape, Louis Vuitton), color & size"
  }
];

/* ── RENDER PORTFOLIO GRID ───────────────────────────────── */
const portfolioGrid = document.getElementById("portfolioGrid");
const collectionFilters = document.getElementById("collectionFilters");

let currentFilter = "all";

function renderPortfolio() {
  if (!portfolioGrid) return;
  const filtered = PORTFOLIO.filter(p => currentFilter === "all" || p.category === currentFilter);
  portfolioGrid.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "portfolio-card";

    const waMsg = `Hello Aplund, I would like to enquire about ordering the ${item.title} (${item.price}).`;
    const waUrl = getWhatsAppUrl(waMsg);

    card.innerHTML = `
      <div class="portfolio-media" data-id="${item.id}" role="button" tabindex="0" aria-label="View details for ${item.title}">
        <span class="portfolio-tag-pill">${item.tag}</span>
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="portfolio-img" 
          loading="lazy"
        >
        <span class="portfolio-price-badge">${item.price}</span>
      </div>
      <div class="portfolio-info">
        <h3 class="portfolio-title">${item.title}</h3>
        <p class="portfolio-desc">${item.shortDesc}</p>
        <div class="portfolio-action-row">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-order-wa" aria-label="Enquire about ${item.title} on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.59 5.99L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.01 1.04-3.77-.24-.39A9.96 9.96 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.47-7.28l-1.97-.56a.75.75 0 00-.72.18l-.56.56a.75.75 0 01-.82.16C12.32 14.6 10.4 12.68 9.94 11.6a.75.75 0 01.16-.82l.56-.56a.75.75 0 00.18-.72l-.56-1.97a.75.75 0 00-.71-.53H8.5a.75.75 0 00-.75.75c0 5.01 4.24 9 9 9a.75.75 0 00.75-.75v-1.07a.75.75 0 00-.53-.71z"/></svg>
            <span>Order on WhatsApp</span>
          </a>
          <button type="button" class="btn-inspect-view" data-id="${item.id}" aria-label="Open high-res photo modal for ${item.title}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </button>
        </div>
      </div>
    `;

    // Wire clicks to open dialog
    const mediaEl = card.querySelector(".portfolio-media");
    const viewBtn = card.querySelector(".btn-inspect-view");
    
    [mediaEl, viewBtn].forEach(el => {
      el.addEventListener("click", () => openProductModal(item.id));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProductModal(item.id);
        }
      });
    });

    // Dynamic mouse spotlight coordinates for glowing border effect
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    portfolioGrid.appendChild(card);
  });
}

// Category filter tabs
if (collectionFilters) {
  collectionFilters.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      collectionFilters.querySelectorAll(".filter-tab").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentFilter = btn.dataset.filter;
      renderPortfolio();
    });
  });
}



/* ── SIMPLIFIED QUICK ORDER ESTIMATOR ────────────────── */
const modelSelectGrid = document.getElementById("modelSelectGrid");
const sizeSelectGrid = document.getElementById("sizeSelectGrid");
const customHandleField = document.getElementById("customHandleField");
const sendCustomBriefBtn = document.getElementById("sendCustomBriefBtn");

// Preview elements
const configPreviewImg = document.getElementById("configPreviewImg");
const configBadge = document.getElementById("configBadge");
const configGlow = document.getElementById("configGlow");
const configModelLabel = document.getElementById("configModelLabel");
const configPriceLabel = document.getElementById("configPriceLabel");

let customConfig = {
  modelName: "Insta LED Mirror",
  modelImg: "images/insta-mirror.jpg",
  basePrice: 25000,
  sizeName: "Standard (5ft)",
  sizeMult: 1.2,
  handle: ""
};

function updateConfiguratorPreview() {
  if (configPreviewImg) configPreviewImg.src = customConfig.modelImg;
  if (configBadge) configBadge.textContent = `${customConfig.modelName} • ${customConfig.sizeName.split(' ')[0]}`;
  if (configModelLabel) configModelLabel.textContent = customConfig.modelName;

  // Calculate price estimate
  if (customConfig.modelName.includes("Nike")) {
    if (configPriceLabel) configPriceLabel.textContent = "Quote on Request";
  } else {
    const minEst = Math.round(customConfig.basePrice * customConfig.sizeMult);
    const maxEst = Math.round(minEst * 1.3);
    if (configPriceLabel) {
      configPriceLabel.textContent = `₦${minEst.toLocaleString()} - ₦${maxEst.toLocaleString()}`;
    }
  }
}

// 1. Model Chip Selection
if (modelSelectGrid) {
  modelSelectGrid.querySelectorAll(".simple-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      modelSelectGrid.querySelectorAll(".simple-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customConfig.modelName = btn.dataset.model;
      customConfig.modelImg = btn.dataset.img;
      customConfig.basePrice = parseInt(btn.dataset.base, 10);
      updateConfiguratorPreview();
    });
  });
}

// 2. Size Selection
if (sizeSelectGrid) {
  sizeSelectGrid.querySelectorAll(".simple-size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      sizeSelectGrid.querySelectorAll(".simple-size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customConfig.sizeName = btn.dataset.size;
      customConfig.sizeMult = parseFloat(btn.dataset.mult);
      updateConfiguratorPreview();
    });
  });
}

// 3. Handle / Note input
if (customHandleField) {
  customHandleField.addEventListener("input", (e) => {
    customConfig.handle = e.target.value.trim();
  });
}

// 4. One-Click WhatsApp Quick Order
if (sendCustomBriefBtn) {
  sendCustomBriefBtn.addEventListener("click", () => {
    const customText = customHandleField ? customHandleField.value.trim() : "";

    let message = `Hello Aplund Studio! I would like to order a custom build:\n\n` +
      `▪ Product: ${customConfig.modelName}\n` +
      `▪ Size: ${customConfig.sizeName}\n` +
      (customText ? `▪ Custom Name / Handle / Logo: ${customText}\n` : "") +
      `\nPlease confirm price and delivery details. Thanks!`;

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });
}

/* ── PRODUCT DETAILS MODAL (LIGHTBOX) ─────────────────── */
/* Following modern-web-guidance for <dialog closedby="any"> */
const productDialog = document.getElementById("productDialog");
const dialogCloseBtn = document.getElementById("dialogCloseBtn");
const dialogImg = document.getElementById("dialogImg");
const dialogGlow = document.getElementById("dialogGlow");
const dialogTitle = document.getElementById("dialogTitle");
const dialogPrice = document.getElementById("dialogPrice");
const dialogCategory = document.getElementById("dialogCategory");
const dialogDesc = document.getElementById("dialogDesc");
const dialogTime = document.getElementById("dialogTime");
const dialogGlowType = document.getElementById("dialogGlowType");
const dialogCustom = document.getElementById("dialogCustom");
const dialogOrderBtn = document.getElementById("dialogOrderBtn");

function openProductModal(productId) {
  const item = PORTFOLIO.find(p => p.id === productId);
  if (!item || !productDialog) return;

  dialogImg.src = item.image;
  dialogImg.alt = item.title;
  dialogTitle.textContent = item.title;
  dialogPrice.textContent = item.price;
  dialogCategory.textContent = item.categoryLabel;
  dialogDesc.textContent = item.fullDesc;
  dialogTime.textContent = item.craftTime;
  dialogGlowType.textContent = item.glowType;
  dialogCustom.textContent = item.customization;

  if (dialogGlow) {
    dialogGlow.style.background = `radial-gradient(circle at center, ${item.glowColor} 0%, transparent 70%)`;
  }

  const orderMsg = `Hello Aplund, I would like to order the ${item.title} (${item.price}). Please send me dimensions and payment details.`;
  dialogOrderBtn.href = getWhatsAppUrl(orderMsg);

  // showModal promotes to top layer, traps focus, supports escape
  productDialog.showModal();
}

if (dialogCloseBtn && productDialog) {
  dialogCloseBtn.addEventListener("click", () => productDialog.close());
}

// Fallback for light-dismiss on browsers that do not support closedby="any"
if (productDialog && !('closedBy' in HTMLDialogElement.prototype)) {
  productDialog.addEventListener('click', (event) => {
    if (event.target !== productDialog) return;
    const rect = productDialog.getBoundingClientRect();
    const isInside = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInside) {
      productDialog.close();
    }
  });
}

/* ── CONTACT QUOTE FORM ─────────────────────────────────── */
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("quoteName");
    const nameError = document.getElementById("quoteNameError");
    const cityInput = document.getElementById("quoteCity");
    const productInput = document.getElementById("quoteProduct");
    const detailsInput = document.getElementById("quoteDetails");

    const name = nameInput.value.trim();
    if (!name) {
      nameError.textContent = "Please enter your name.";
      nameInput.focus();
      return;
    }
    nameError.textContent = "";

    const city = cityInput.value;
    const product = productInput.value;
    const details = detailsInput.value.trim();

    let text = `Hello Aplund! My name is ${name}.\n` +
      `I would like a quote for: ${product}\n` +
      `Delivery City: ${city}\n` +
      (details ? `Details: ${details}\n\n` : `\n`) +
      `Please let me know how to proceed.`;

    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  });
}

/* ── MOBILE NAV DRAWER ──────────────────────────────────── */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navOverlay = document.getElementById("nav-overlay");

function openMobileNav() {
  if (!nav || !burger) return;
  nav.classList.add("open");
  burger.setAttribute("aria-expanded", "true");
  if (navOverlay) {
    navOverlay.classList.add("visible");
    navOverlay.style.display = "block";
  }
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  if (!nav || !burger) return;
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  if (navOverlay) {
    navOverlay.classList.remove("visible");
    setTimeout(() => {
      if (!nav.classList.contains("open")) navOverlay.style.display = "";
    }, 300);
  }
  document.body.style.overflow = "";
}

if (burger) {
  burger.addEventListener("click", () => {
    nav.classList.contains("open") ? closeMobileNav() : openMobileNav();
  });
}

if (navOverlay) {
  navOverlay.addEventListener("click", closeMobileNav);
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", closeMobileNav);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (nav && nav.classList.contains("open")) closeMobileNav();
  }
});

/* ── STICKY HEADER SCROLL ───────────────────────────────── */
const header = document.getElementById("header");
function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 15);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* ── AMBIENT CANVAS PARTICLES ───────────────────────────── */
function initAmbientParticles() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const PARTICLE_COUNT = Math.min(50, Math.floor((width * height) / 25000));
  const particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.4 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.45 + 0.2;
      this.alphaChange = (Math.random() - 0.5) * 0.008;
      
      const colorRoll = Math.random();
      if (colorRoll < 0.5) {
        this.color = "rgba(0, 210, 255, "; // cyan
      } else if (colorRoll < 0.85) {
        this.color = "rgba(0, 102, 255, "; // electric blue
      } else {
        this.color = "rgba(255, 255, 255, "; // white speck
      }
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.alphaChange;
      if (this.alpha <= 0.1 || this.alpha >= 0.7) {
        this.alphaChange = -this.alphaChange;
      }
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset(false);
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + Math.max(0, Math.min(1, this.alpha)) + ")";
      ctx.shadowBlur = this.size * 3;
      ctx.shadowColor = "#00d2ff";
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  let animationId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationId = requestAnimationFrame(animate);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(animate);
    }
  });

  animate();
}

/* ── SCROLL PROGRESS FALLBACK ───────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  if (window.CSS && CSS.supports && CSS.supports("animation-timeline", "scroll()")) {
    return; // Handled natively by modern CSS
  }
  function updateProgress() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? window.scrollY / scrollTotal : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

/* ── ROOM AMBIENCE TOGGLE ───────────────────────────────── */
function initAmbienceSwitcher() {
  const dayBtn = document.getElementById("dayLightBtn");
  const nightBtn = document.getElementById("nightGlowBtn");
  if (!dayBtn || !nightBtn) return;

  dayBtn.addEventListener("click", () => {
    document.body.classList.remove("night-glow-mode");
    dayBtn.classList.add("active");
    nightBtn.classList.remove("active");
  });

  nightBtn.addEventListener("click", () => {
    document.body.classList.add("night-glow-mode");
    nightBtn.classList.add("active");
    dayBtn.classList.remove("active");
  });
}

/* ── LIVE ACTIVITY TOAST TICKER ─────────────────────────── */
function initLiveActivityToast() {
  const toast = document.getElementById("liveToast");
  const toastTitle = document.getElementById("toastTitle");
  const toastDesc = document.getElementById("toastDesc");
  const toastTime = document.getElementById("toastTime");
  const closeBtn = document.getElementById("toastCloseBtn");
  if (!toast || !toastTitle || !toastDesc) return;

  const activities = [
    {
      title: "New Custom Order Inquiry",
      desc: "Client in Lekki Phase 1 customized the Viral Insta Mirror (5ft Warm Halo).",
      time: "Just now"
    },
    {
      title: "Workshop Build Completed",
      desc: "Pop Art Krusty Neon Mirror finished in our Lagos studio & ready for delivery.",
      time: "2m ago"
    },
    {
      title: "Abuja Studio Booking",
      desc: "A boutique salon in Wuse 2 ordered 3x Custom Continental LED Mirrors.",
      time: "5m ago"
    },
    {
      title: "Sneaker Locker Inquiry",
      desc: "Client in Victoria Island requested a bespoke Nike Air Jordan Drip Locker.",
      time: "8m ago"
    },
    {
      title: "Social Handle Etched",
      desc: "Production team completed personalized '@theglamroom.ng' mirror.",
      time: "12m ago"
    }
  ];

  let currentIndex = 0;
  let isHovered = false;
  let hideTimeout;
  let nextTimeout;
  let dismissed = false;

  toast.addEventListener("mouseenter", () => { isHovered = true; });
  toast.addEventListener("mouseleave", () => { isHovered = false; });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dismissed = true;
      toast.classList.remove("show");
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    });
  }

  function showNextNotification() {
    if (dismissed) return;
    const item = activities[currentIndex];
    toastTitle.textContent = item.title;
    toastDesc.textContent = item.desc;
    if (toastTime) toastTime.textContent = item.time;

    toast.classList.add("show");

    hideTimeout = setTimeout(() => {
      const tryHide = () => {
        if (isHovered) {
          setTimeout(tryHide, 1500);
          return;
        }
        toast.classList.remove("show");
        currentIndex = (currentIndex + 1) % activities.length;
        nextTimeout = setTimeout(showNextNotification, 14000);
      };
      tryHide();
    }, 5500);
  }

  // Trigger first lively toast notification after 3.2 seconds
  setTimeout(showNextNotification, 3200);
}

/* ── INITIALIZATION ─────────────────────────────────────── */
function initAll() {
  renderPortfolio();
  updateConfiguratorPreview();
  initAmbientParticles();
  initScrollProgress();
  initAmbienceSwitcher();
  initLiveActivityToast();
}

document.addEventListener("DOMContentLoaded", initAll);

// Run immediately if DOM is ready
if (document.readyState === "interactive" || document.readyState === "complete") {
  initAll();
}
