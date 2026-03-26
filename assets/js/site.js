"use strict";

const navToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const today = new Date();
const timezoneOffset = today.getTimezoneOffset() * 60000;
const localIsoDate = new Date(today.getTime() - timezoneOffset).toISOString().split("T")[0];

document.querySelectorAll("[data-min-today]").forEach((field) => {
  field.setAttribute("min", localIsoDate);
});

const safeText = (value, fallback) => {
  const trimmed = value.trim();
  return trimmed ? trimmed : fallback;
};

const syncSummary = () => {
  const fields = document.querySelectorAll("[data-summary-source]");
  fields.forEach((field) => {
    const target = document.querySelector(`[data-summary-target="${field.dataset.summarySource}"]`);

    if (!target) {
      return;
    }

    target.textContent = safeText(field.value, field.dataset.summaryFallback || "Not provided");
  });
};

document.querySelectorAll("[data-summary-source]").forEach((field) => {
  field.addEventListener("input", syncSummary);
  field.addEventListener("change", syncSummary);
});

syncSummary();

document.querySelectorAll("[data-secure-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const trap = form.querySelector('input[name="company"]');
    if (trap && trap.value.trim() !== "") {
      if (status) {
        status.dataset.state = "error";
        status.textContent = "Unable to process this request.";
      }
      return;
    }

    if (!form.reportValidity()) {
      if (status) {
        status.dataset.state = "error";
        status.textContent = "Please review the highlighted fields and try again.";
      }
      return;
    }

    if (status) {
      status.dataset.state = "success";
      status.textContent =
        "This secure front-end demo validates your request locally. Connect a protected server-side intake endpoint to activate live submissions.";
    }

    form.reset();
    syncSummary();
  });
});
