const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation menu" : "Close navigation menu"
    );
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

const technologyTrack = document.querySelector(".technology-track");
const technologyStatus = document.querySelector(".technology-status");

if (technologyTrack instanceof HTMLUListElement && technologyStatus) {
  const technologyItems = Array.from(technologyTrack.children);
  const previousButton = document.querySelector('[data-technology-direction="previous"]');
  const nextButton = document.querySelector('[data-technology-direction="next"]');

  const updateTechnologyCarousel = () => {
    const maxScroll = technologyTrack.scrollWidth - technologyTrack.clientWidth;
    const firstItem = technologyItems[0];
    const trackStyle = getComputedStyle(technologyTrack);
    const itemGap = Number.parseFloat(trackStyle.columnGap) || 0;
    const trackPadding =
      (Number.parseFloat(trackStyle.paddingLeft) || 0) +
      (Number.parseFloat(trackStyle.paddingRight) || 0);
    const itemStep = firstItem.getBoundingClientRect().width + itemGap;
    const firstVisible = Math.min(
      technologyItems.length,
      Math.floor((technologyTrack.scrollLeft + 2) / itemStep) + 1
    );
    const visibleCount = Math.max(
      1,
      Math.ceil((technologyTrack.clientWidth - trackPadding + itemGap) / itemStep)
    );
    const lastVisible = Math.min(technologyItems.length, firstVisible + visibleCount - 1);

    if (previousButton instanceof HTMLButtonElement) {
      previousButton.disabled = technologyTrack.scrollLeft <= 2;
    }

    if (nextButton instanceof HTMLButtonElement) {
      nextButton.disabled = technologyTrack.scrollLeft >= maxScroll - 2;
    }

    technologyStatus.textContent = `Showing ${firstVisible}–${lastVisible} of ${technologyItems.length} technologies`;
  };

  const scrollTechnologyTrack = (direction) => {
    const firstItem = technologyItems[0];
    const itemGap = Number.parseFloat(getComputedStyle(technologyTrack).columnGap) || 0;
    technologyTrack.scrollBy({
      left: direction * (firstItem.getBoundingClientRect().width + itemGap),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  previousButton?.addEventListener("click", () => scrollTechnologyTrack(-1));
  nextButton?.addEventListener("click", () => scrollTechnologyTrack(1));
  technologyTrack.addEventListener("scroll", updateTechnologyCarousel, { passive: true });
  technologyTrack.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollTechnologyTrack(event.key === "ArrowRight" ? 1 : -1);
    }
  });
  window.addEventListener("resize", updateTechnologyCarousel);

  updateTechnologyCarousel();
}

document.querySelectorAll("[data-consultation-form]").forEach((form) => {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Bootstrap validation
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    form.classList.add("was-validated");

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const organisation = String(formData.get("organisation") || "").trim();
    const sector = String(formData.get("sector") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const subject = `Consultation request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Sector: ${sector}`,
      "",
      "How Adara can help:",
      project,
    ].join("\n");
    const mailto = `mailto:info@adaracreativeedge.co.za?${new URLSearchParams({
      subject,
      body,
    })}`;

    const note = form.querySelector("#consultation-note");
    if (note) {
      note.textContent =
        "Your email draft is opening. Review it and select Send to submit your enquiry.";
    }

    window.location.href = mailto;
  });
});