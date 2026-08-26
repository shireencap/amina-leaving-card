(function () {
  "use strict";

  var SIGNATURE_FONTS = [
    "Caveat",
    "Shadows Into Light",
    "Indie Flower",
    "Patrick Hand",
    "Gloria Hallelujah",
    "Architects Daughter",
    "Kalam",
    "Reenie Beanie",
    "Permanent Marker",
    "Satisfy",
    "Dancing Script",
    "Nanum Pen Script",
    "Gochi Hand",
    "Just Another Hand",
  ];

  var SIGNATURE_COLOURS = [
    "#a83279",
    "#6b3d7a",
    "#3d5a8a",
    "#7a3d5a",
    "#5a3d6b",
    "#8a3d5a",
    "#3d6b7a",
    "#6b5a7a",
    "#9a3166",
    "#4a5a8a",
  ];

  var NOTE_BACKGROUNDS = [
    "#ffffff",
    "#fff8fb",
    "#fef5f9",
    "#fdf8ff",
    "#fff5f8",
    "#faf5ff",
    "#fff9fc",
  ];

  function hash(str) {
    var h = 0;
    str = String(str || "");
    for (var i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function pick(list, seed) {
    return list[seed % list.length];
  }

  function clampNumber(value, min, max, fallback) {
    var n = parseFloat(value);
    if (isNaN(n)) return fallback;
    return Math.max(min, Math.min(max, n));
  }

  function styleFor(sig, index) {
    var nameSeed = hash(sig.name + "|" + index);

    var font = SIGNATURE_FONTS.indexOf(sig.font) !== -1
      ? sig.font
      : pick(SIGNATURE_FONTS, nameSeed);

    var colour = sig.colour || sig.color || pick(SIGNATURE_COLOURS, hash(sig.name + "c"));
    var background = pick(NOTE_BACKGROUNDS, hash(sig.name + "bg"));

    var rotate = sig.rotate != null
      ? clampNumber(sig.rotate, -8, 8, 0)
      : (hash(sig.name + "r") % 9) - 4;

    var tapeRotate = (hash(sig.name + "t") % 11) - 5;

    var size = sig.size != null
      ? clampNumber(sig.size, 1.0, 2.4, 1.5)
      : 1.35 + (hash(sig.name + "s") % 6) * 0.1;

    return {
      font: font,
      colour: colour,
      background: background,
      rotate: rotate,
      tapeRotate: tapeRotate,
      size: size,
    };
  }

  function buildNote(sig, index) {
    var s = styleFor(sig, index);

    var note = document.createElement("article");
    note.className = "note";
    note.style.setProperty("--note-font", '"' + s.font + '"');
    note.style.setProperty("--note-ink", s.colour);
    note.style.setProperty("--note-bg", s.background);
    note.style.setProperty("--rotate", s.rotate + "deg");
    note.style.setProperty("--tape-rotate", s.tapeRotate + "deg");
    note.style.setProperty("--note-size", s.size.toFixed(2) + "rem");

    var tape = document.createElement("span");
    tape.className = "note__tape";
    tape.setAttribute("aria-hidden", "true");
    note.appendChild(tape);

    var message = document.createElement("p");
    message.className = "note__message";
    message.textContent = sig.message || "";
    note.appendChild(message);

    var sign = document.createElement("span");
    sign.className = "note__sign";
    sign.textContent = sig.name || "Anonymous";
    note.appendChild(sign);

    if (sig.role) {
      var role = document.createElement("span");
      role.className = "note__role";
      role.textContent = sig.role;
      note.appendChild(role);
    }

    return note;
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value) {
      el.textContent = value;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }

  function render() {
    var config = window.CARD_CONFIG || {};
    var signatures = Array.isArray(window.SIGNATURES) ? window.SIGNATURES : [];

    setText("card-title", config.recipient ? "Farewell " + config.recipient + " 💕" : "Farewell");
    setText("card-subtitle", config.subtitle || "");
    setText("card-footer-text", config.footer || "");
    document.title = config.recipient
      ? "Leaving Card — " + config.recipient
      : "Leaving Card";

    var count = signatures.length;
    setText(
      "card-count",
      count === 0 ? "" : count === 1 ? "1 message 💌" : count + " messages and counting 💌"
    );

    var container = document.getElementById("notes");
    if (!container) return;
    container.textContent = "";

    if (count === 0) {
      var empty = document.createElement("p");
      empty.className = "notes__empty";
      empty.textContent = "Be the first to sign 🍵💕";
      container.appendChild(empty);
      return;
    }

    var fragment = document.createDocumentFragment();
    signatures.forEach(function (sig, index) {
      if (sig && typeof sig === "object") {
        fragment.appendChild(buildNote(sig, index));
      }
    });
    container.appendChild(fragment);
  }

  window.SIGNATURE_FONTS = SIGNATURE_FONTS;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
