let data = {};
let slug = "";
let selectedSize = "a4";

function init() {
  try {
    const s = localStorage.getItem("dumpitData2");
    data = s
      ? JSON.parse(s)
      : {
          name1: "Nama",
          name2: "Nama",
        };
  } catch (e) {
    data = {
      name1: "Nama",
      name2: "Nama",
    };
  }

  const n1 =
    (data.name1 || "user")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 8) || "user";
  const n2 =
    (data.name2 || "partner")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 8) || "partner";
  slug = n1 + "-" + n2 + "-" + Math.random().toString(36).slice(2, 7);

  document.getElementById("pairNames").innerHTML =
    (data.name1 || "Nama") + " &hearts; " + (data.name2 || "Nama");
  document.getElementById("linkBox").textContent = "dumpit.app/s/" + slug;
  document.getElementById("flipbookBtn").href = "flipbook3.php?slug=" + slug;
}

function copyLink() {
  const url = "dumpit.app/s/" + slug;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  } else {
    const t = document.createElement("textarea");
    t.value = url;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }
  const btn = document.getElementById("copyBtn");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Tersalin`;
  btn.classList.add("copied");
  document.getElementById("copyNote").classList.add("show");
  setTimeout(() => {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Salin`;
    btn.classList.remove("copied");
    document.getElementById("copyNote").classList.remove("show");
  }, 2500);
}

function shareWA() {
  const text = encodeURIComponent(
    "Hai! Aku buat scrapbook buat kamu di DumpIt\nBuka di: dumpit.app/s/" + slug,
  );
  window.open("https://wa.me/?text=" + text, "_blank");
}

function shareOther() {
  if (navigator.share) {
    navigator.share({
      title: "Sweet Memories Scrapbook",
      url: "https://dumpit.app/s/" + slug,
    });
  } else {
    copyLink();
  }
}

function downloadPDF() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  const msgs = [
    "Menyusun halaman...",
    "Menambahkan foto...",
    "Hampir selesai...",
  ];
  let i = 0;
  const iv = setInterval(() => {
    document.getElementById("overlayMsg").textContent = msgs[i++ % msgs.length];
  }, 900);
  setTimeout(() => {
    clearInterval(iv);
    overlay.style.display = "none";
    window.open(
      "flipbook3.php?slug=" + slug + "&print=1&size=" + selectedSize,
      "_blank",
    );
  }, 2700);
}

init();