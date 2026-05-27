let data = {};
let slug = "";

async function init() {
  const params = new URLSearchParams(window.location.search);
  slug = params.get("slug") || localStorage.getItem("dumpitSlug") || "";

  if (slug) {
    try {
      const res = await fetch(
        "/DumpIt/api/get_flipbook.php?slug=" + encodeURIComponent(slug),
      );
      const json = await res.json();

      if (json.success) {
        data = {
          name1: json.nama_kamu,
          name2: json.nama_pasangan,
          slug: json.slug,
          cover: json.cover ? "/DumpIt/" + json.cover : null,
          photos: (json.photos || []).map((p) => "/DumpIt/" + p),
          flipbook_file: json.flipbook_file || "flipbook2.php",
        };
        localStorage.setItem("dumpitData", JSON.stringify(data));
        localStorage.setItem("dumpitSlug", slug);
      } else {
        fallbackToLocal();
      }
    } catch (e) {
      fallbackToLocal();
    }
  } else {
    fallbackToLocal();
  }

  render();
}

function fallbackToLocal() {
  try {
    const s = localStorage.getItem("dumpitData");
    data = s ? JSON.parse(s) : { name1: "Nama", name2: "Nama" };
    slug = data.slug || localStorage.getItem("dumpitSlug") || "unknown";
  } catch (e) {
    data = { name1: "Nama", name2: "Nama" };
  }
}

function render() {
  const n1 = data.name1 || "Nama";
  const n2 = data.name2 || "Nama";

  document.getElementById("pairNames").innerHTML = n1 + " &hearts; " + n2;

  const baseUrl =
    window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
  const shareUrl = baseUrl + "/s/" + slug;
  const flipUrl = baseUrl + "/" + data.flipbook_file + "?slug=" + slug;

  document.getElementById("linkBox").textContent = shareUrl;
  document.getElementById("flipbookBtn").href = flipUrl;
}

function copyLink() {
  const url = document.getElementById("linkBox").textContent;
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
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/></svg> Tersalin`;
  btn.classList.add("copied");
  document.getElementById("copyNote").classList.add("show");
  setTimeout(() => {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Salin`;
    btn.classList.remove("copied");
    document.getElementById("copyNote").classList.remove("show");
  }, 2500);
}

function shareWA() {
  const url = document.getElementById("linkBox").textContent;
  const n2 = data.name2 || "Kamu";
  const text = encodeURIComponent(
    "Hai " +
      n2 +
      "! Aku buat scrapbook anniversary kita di DumpIt ♡\nBuka di: " +
      url,
  );
  window.open("https://wa.me/?text=" + text, "_blank");
}

function shareOther() {
  const url = document.getElementById("linkBox").textContent;
  if (navigator.share) {
    navigator.share({
      title: "Scrapbook Anniversary",
      text: "Lihat scrapbook anniversary kita ♡",
      url: url,
    });
  } else {
    copyLink();
  }
}

init();
