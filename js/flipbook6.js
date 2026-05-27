let D = {};
(async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || localStorage.getItem("dumpitSlug") || "";
    if (slug) {
      const res = await fetch(
        "api/get_flipbook.php?slug=" + encodeURIComponent(slug),
      );
      const json = await res.json();
      if (json.success) {
        D = {
          name1: json.nama_kamu,
          name2: json.nama_pasangan,
          cover: json.cover ? "/DumpIt/" + json.cover : null,
          photos: (json.photos || []).map((p) => "/DumpIt/" + p),
        };
        localStorage.setItem("dumpitData", JSON.stringify(D));
      }
    } else {
      const s = localStorage.getItem("dumpitData");
      if (s) D = JSON.parse(s);
    }
  } catch (e) {
    try {
      const s = localStorage.getItem("dumpitData");
      if (s) D = JSON.parse(s);
    } catch (_) {}
  }

  const N1 = D.name1 || "Nama";
  const N2 = D.name2 || "Nama";
  const PHOTOS = D.photos || [];
  const COVER = D.cover || null;

  const p = (i) => PHOTOS[i] || null;

  const img = (src, cls) =>
    src
      ? `<img src="${src}" alt="">`
      : `<div class="${cls || "ph"}"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".25"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

  const CLOUD_SVG = (
    w,
    h,
    op,
  ) => `<svg width="${w}" height="${h}" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" opacity="${op || 1}">
  <ellipse cx="100" cy="80" rx="90" ry="40" fill="white"/>
  <ellipse cx="70" cy="65" rx="45" ry="38" fill="white"/>
  <ellipse cx="120" cy="60" rx="50" ry="42" fill="white"/>
  <ellipse cx="155" cy="75" rx="38" ry="30" fill="white"/>
  <ellipse cx="45" cy="78" rx="34" ry="26" fill="white"/>
</svg>`;

  const CLOUD_WIDE = `<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="200" cy="70" rx="190" ry="35" fill="white"/>
  <ellipse cx="120" cy="52" rx="75" ry="55" fill="white"/>
  <ellipse cx="220" cy="45" rx="85" ry="60" fill="white"/>
  <ellipse cx="320" cy="58" rx="70" ry="48" fill="white"/>
  <ellipse cx="50" cy="65" rx="60" ry="40" fill="white"/>
  <ellipse cx="360" cy="68" rx="50" ry="35" fill="white"/>
</svg>`;

  const BIRD_SVG = `<svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" width="48" height="24">
  <path d="M10 20 Q20 10 30 16 Q40 10 50 20" stroke="#2d6fa3" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
  <path d="M40 22 Q50 12 60 18 Q70 12 78 22" stroke="#2d6fa3" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".4"/>
  <path d="M2 24 Q10 16 18 22" stroke="#4a90c4" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".35"/>
</svg>`;

  const BIRD_SMALL = `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" width="36" height="18">
  <path d="M8 15 Q16 8 24 13 Q32 8 38 15" stroke="#2d6fa3" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".5"/>
  <path d="M32 17 Q40 10 48 15" stroke="#4a90c4" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".35"/>
</svg>`;

  const CLOUD_LARGE = `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="150" cy="110" rx="140" ry="52" fill="white"/>
  <ellipse cx="90" cy="85" rx="68" ry="60" fill="white"/>
  <ellipse cx="170" cy="75" rx="78" ry="68" fill="white"/>
  <ellipse cx="240" cy="100" rx="60" ry="50" fill="white"/>
  <ellipse cx="40" cy="105" rx="52" ry="42" fill="white"/>
</svg>`;

  const LETTER = `Kepada ${N2} yang selalu aku rindukan bahkan saat kamu ada di sini

Ada hal yang tidak pernah berubah sejak pertama kali aku mengenalmu, yaitu rasa aman yang datang begitu saja saat aku bersamamu

Kamu adalah tempat di mana aku tidak perlu berpura-pura. Tidak perlu kuat ketika lelah, tidak perlu baik-baik saja ketika tidak baik-baik saja. Kamu tahu caranya menjadi rumah yang hangat tanpa pernah aku minta

Aku sering berpikir tentang bagaimana cara semesta bisa sebaik ini, mengirimkan seseorang seperti kamu tepat ketika aku paling membutuhkan kehadiran yang nyata

Maka izinkan aku untuk berterima kasih, bukan dengan kata-kata besar, tapi dengan terus memilih hadir untukmu, setiap harinya`;

  const THINGS = [
    "Caramu mendengarkan tanpa menghakimi",
    "Tawamu yang selalu menular ke siapa saja",
    "Keberanianmu yang kamu sembunyikan di balik lembutmu",
    "Cara kamu membuat hal rumit terasa sederhana",
    "Perhatianmu yang hadir tanpa kamu sadari sendiri",
    "Cara kamu ada penuh, tidak setengah-setengah",
    "Ketenangan yang kamu bawa ke setiap ruang",
    "Caramu mengingat detail kecil yang aku anggap sepele",
    "Senyummu yang selalu jujur dan apa adanya",
    "Cara kamu jadi alasan terbaik aku ingin pulang",
  ];

  const LOVE_NOTES = [
    {
      num: "I",
      txt: "Kehadiranmu bukan sesuatu yang aku anggap biasa. Setiap hari kamu ada adalah hari yang lebih berarti dari yang sebelumnya.",
      sig: "♡",
    },
    {
      num: "II",
      txt: "Aku tidak perlu dunia yang sempurna selama ada kamu yang menemani melangkah di dunia yang penuh ketidakpastian ini.",
      sig: "♡",
    },
    {
      num: "III",
      txt: "Mencintaimu mengajarkan aku bahwa cinta bukan tentang memiliki, tapi tentang bersedia hadir tanpa syarat apapun.",
      sig: "♡",
    },
    {
      num: "IV",
      txt: "Kamu bukan sekadar seseorang yang aku kenal. Kamu adalah alasan aku percaya bahwa hal indah itu nyata dan bisa dirasakan.",
      sig: "♡",
    },
    {
      num: "V",
      txt: "Di hari yang paling biasa sekalipun, ada satu hal yang selalu luar biasa yaitu fakta bahwa aku mengenalmu.",
      sig: "♡",
    },
    {
      num: "VI",
      txt: "Jika hidup adalah perjalanan panjang, aku bersyukur bisa melewatinya dengan seseorang yang membuat setiap langkah terasa ringan.",
      sig: "♡",
    },
  ];

  const bars = Array.from({ length: 28 }, (_, i) => {
    const h =
      [
        10, 16, 8, 20, 14, 9, 22, 13, 18, 7, 17, 24, 9, 15, 20, 5, 17, 11, 22,
        13, 7, 19, 15, 9, 20, 13, 17, 7,
      ][i] || 10;
    const on = i >= 8 && i <= 16;
    return `<div class="sng-bar${on ? " on" : ""}" style="height:${h}px"></div>`;
  }).join("");

  function buildSpreads() {
    const coverSrc = COVER || p(0);
    return [
      {
        label: "Halaman 1",
        left: `<div class="pg cov">
        <div class="cov-clouds">
          <div style="position:absolute;top:-10%;left:-5%;width:55%;opacity:0.35">${CLOUD_LARGE}</div>
          <div style="position:absolute;bottom:-5%;right:-5%;width:60%;opacity:0.28;transform:rotate(8deg)">${CLOUD_LARGE}</div>
          <div style="position:absolute;top:30%;left:5%;width:30%;opacity:0.2">${CLOUD_SVG(120, 70, 1)}</div>
        </div>
        <div class="cov-inner">
          <div class="cov-frame">
            <div class="cov-frame-ring2"></div>
            <div class="cov-frame-ring"></div>
            <div class="cov-photo">${img(coverSrc, "ph")}</div>
          </div>
          <div class="cov-divider">
            <div class="cov-divider-line"></div>
            <div class="cov-divider-dot"></div>
            <div class="cov-divider-line"></div>
          </div>
          <div class="cov-names">${N1} &amp; ${N2}</div>
          <div class="cov-sub">Anniversary Vol. 2 &nbsp;·&nbsp; Our Story</div>
          <div class="cov-bird">${BIRD_SMALL}</div>
        </div>
      </div>`,
        right: `<div class="pg ltr">
        <div class="ltr-dots"></div>
        <div class="ltr-cloud-tl" style="width:42%;opacity:0.09">${CLOUD_LARGE}</div>
        <div class="ltr-head">Sepucuk Surat</div>
        <div class="ltr-to">Kepada: ${N2}</div>
        <div class="ltr-to">Dari: ${N1}</div>
        <div class="ltr-body">${LETTER}</div>
        <div class="ltr-sig">Selalu milikmu &nbsp;${N1} ♡</div>
        <div class="pn" style="left:.7rem">2</div>
      </div>`,
      },
      {
        label: "Halaman 2",
        left: `<div class="pg abt">
        <div class="abt-cloud-dec" style="width:50%">${CLOUD_LARGE}</div>
        <div class="abt-cloud-dec2" style="width:45%">${CLOUD_LARGE}</div>
        <div class="abt-tag">✦ The one I love</div>
        <div class="abt-name">${N2}</div>
        <div class="abt-photo">${img(p(1), "ph")}</div>
        <div class="abt-rows">
          <div class="abt-row"><div class="abt-lbl">Nama panggilanku</div><div class="abt-val">Sayang &nbsp;·&nbsp; cintaku &nbsp;·&nbsp; rumahku</div></div>
          <div class="abt-row"><div class="abt-lbl">Yang paling aku kagumi</div><div class="abt-val">Cara dia mencintai tanpa pernah meminta imbalan</div></div>
          <div class="abt-row"><div class="abt-lbl">Satu kata untuknya</div><div class="abt-val">Rumah</div></div>
        </div>
        <div class="pn" style="left:.65rem;color:rgba(255,255,255,.25)">3</div>
      </div>`,
        right: `<div class="pg polar">
        <div class="polar-cloud-r" style="width:50%">${CLOUD_LARGE}</div>
        <div class="polar-title">Kenangan Kita ♡</div>
        <div class="polar-grid">
          ${[2, 3, 4, 5]
            .map((i, idx) => {
              const caps = [
                "awal cerita kita",
                "momen berharga",
                "bersama kamu",
                "selalu ♡",
              ];
              return `<div class="polar-frame">${img(p(i), "ph")}<div class="polar-cap">${caps[idx]}</div></div>`;
            })
            .join("")}
        </div>
        <div class="pn" style="right:.65rem">4</div>
      </div>`,
      },
      {
        label: "Halaman 3",
        left: `<div class="pg abt2">
        <div class="abt2-cloud-tl">${CLOUD_LARGE}</div>
        <div class="abt2-cloud-br">${CLOUD_LARGE}</div>
        <div class="abt2-head">Tentang kamu &nbsp;${N2} ♡</div>
        <div class="abt2-items">
          <div class="abt2-item">
            <div class="abt2-lbl">Kamu membuat segalanya lebih mudah</div>
            <div class="abt2-txt">Di sisimu, beban yang berat terasa ringan, bukan karena kamu menanggungnya, tapi karena kehadiranmu membuatku merasa tidak sendirian.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Cintaku tumbuh setiap harinya</div>
            <div class="abt2-txt">Semakin aku mengenalmu, semakin aku sadar bahwa tidak ada kata cukup untuk menggambarkan betapa beruntungnya aku memilikimu.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Terima kasih sudah memilihku</div>
            <div class="abt2-txt">Dari semua pilihan yang bisa kamu buat, kamu memilih untuk ada di sisiku, dan itu adalah hadiah terbesar yang pernah aku terima.</div>
          </div>
        </div>
        <div class="abt2-foot">Aku mencintaimu &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">5</div>
      </div>`,
        right: `<div class="pg mlv">
        <div class="mlv-cloud-l" style="width:65%">${CLOUD_LARGE}</div>
        <div class="mlv-cloud-r" style="width:65%">${CLOUD_LARGE}</div>
        <div class="mlv-arch">${img(p(2), "ph")}</div>
        <div class="mlv-div"><div class="mlv-div-line"></div><div class="mlv-div-ico">☁</div><div class="mlv-div-line"></div></div>
        <div class="mlv-big">My Love</div>
        <div class="mlv-sub">Kamu adalah orang yang paling<br>aku syukuri setiap harinya</div>
        <div class="mlv-badge">${N2} &nbsp;milikku selamanya</div>
        <div class="pn" style="right:.65rem">6</div>
      </div>`,
      },
      {
        label: "Halaman 4",
        left: `<div class="pg gstrip">
        <div class="gstrip-cloud-top" style="width:100%">${CLOUD_WIDE}</div>
        <div class="gstrip-title">Momen Kita ♡</div>
        <div class="gstrip-film">
          ${[6, 7, 8, 9].map((i) => `<div class="gstrip-cell">${img(p(i), "ph")}</div>`).join("")}
        </div>
        <div class="gstrip-note">Setiap gambar menceritakan kisah kita</div>
        <div class="pn" style="left:.65rem;color:rgba(255,255,255,.25)">7</div>
      </div>`,
        right: `<div class="pg mom">
        <div class="mom-cloud-bl" style="width:55%">${CLOUD_LARGE}</div>
        <div class="mom-head">Bersama Kamu ♡</div>
        <div class="mom-grid">
          <div class="mom-cell tall">${img(p(3), "ph")}</div>
          <div class="mom-cell" style="font-family:'EB Garamond',serif;font-style:italic;font-size:.5rem;padding:.3rem;text-align:center;color:var(--muted)">Momen yang selalu ingin aku ulang</div>
          <div class="mom-cell" style="font-family:'EB Garamond',serif;font-style:italic;font-size:.48rem;padding:.3rem;text-align:center;color:var(--blue)">Cerita kita ♡</div>
        </div>
        <div class="mom-foot">Bersamamu adalah tempat terbaik ♡</div>
        <div class="pn" style="right:.65rem">8</div>
      </div>`,
      },
      {
        label: "Halaman 5",
        left: `<div class="pg sng">
        <div class="sng-cloud-tl">${CLOUD_LARGE}</div>
        <div class="sng-disc"></div>
        <div class="sng-tag">✦ Lagu kita</div>
        <div class="sng-title">Lagu Kita</div>
        <div class="sng-artist">Yang selalu bikin rindu</div>
        <div class="sng-wave">${bars}</div>
        <div class="sng-list">
          ${["Lagu yang pertama kita dengar bersama", "Lagu yang selalu mengingatkanku padamu", "Lagu yang kita nyanyikan saat perjalanan", "Lagu yang jadi milik kita berdua"].map((s, i) => `<div class="sng-item${i === 0 ? " on" : ""}"><div class="sng-dot"></div>${s}</div>`).join("")}
        </div>
        <div class="pn" style="left:.65rem">9</div>
      </div>`,
        right: `<div class="pg lnv">
        <div class="lnv-cloud-top" style="width:55%">${CLOUD_LARGE}</div>
        <div class="lnv-head">Love Notes For You ♡</div>
        <div class="lnv-grid">
          ${LOVE_NOTES.map((n) => `<div class="lnv-card"><div class="lnv-n">Note ${n.num}</div><div class="lnv-txt">${n.txt}</div><div class="lnv-sig">${n.sig} ${N1}</div></div>`).join("")}
        </div>
        <div class="lnv-foot">Karena kamu berhak mendengar semua ini setiap harinya ♡</div>
        <div class="pn" style="right:.65rem;color:rgba(26,58,92,.3)">10</div>
      </div>`,
      },
      {
        label: "Halaman 6",
        left: `<div class="pg tiv">
        <div class="tiv-frame"></div>
        <div class="tiv-cloud-tr">${CLOUD_LARGE}</div>
        <div class="tiv-head">Hal yang Aku Cintai dari Kamu</div>
        <div class="tiv-list">
          ${THINGS.map((t, i) => `<div class="tv"><span class="tv-n">${i + 1}</span><span>${t}</span></div>`).join("")}
        </div>
        <div class="tiv-foot">Dan masih banyak lagi &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">11</div>
      </div>`,
        right: `<div class="pg qpg">
        <div class="qpg-cloud-tl">${CLOUD_LARGE}</div>
        <div class="qpg-cloud-br">${CLOUD_LARGE}</div>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Kamu tidak perlu menjadi sempurna untuk dicintai. Kamu hanya perlu menjadi dirimu sendiri, dan aku akan selalu ada untuk mencintai setiap bagian dari dirimu itu.</div>
        <div class="q-attr">${N1} &amp; ${N2}</div>
        <div class="q-sub">Always &amp; Forever ♡</div>
        <div class="pn" style="right:.65rem">12</div>
      </div>`,
      },
      {
        label: "Halaman 7",
        left: `<div class="pg qpg" style="background:var(--sky3)">
        <div class="qpg-cloud-tl">${CLOUD_LARGE}</div>
        <div class="qpg-cloud-br">${CLOUD_LARGE}</div>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Dari semua hal yang pernah aku temukan, tidak ada yang lebih menenangkan dari tahu bahwa ada seseorang yang benar-benar peduli, yang memilihku bukan karena terpaksa, tapi karena memang ingin.</div>
        <div class="q-attr">${N2}</div>
        <div class="q-sub">Ditulis dengan cinta &nbsp;${N1} ♡</div>
        <div class="pn" style="left:.65rem">13</div>
      </div>`,
        right: `<div class="pg bck">
        <div class="bck-cloud-t" style="width:100%">${CLOUD_WIDE}</div>
        <div class="bck-cloud-b" style="width:100%">${CLOUD_WIDE}</div>
        <div class="bck-inner">
          <div class="bck-bird">${BIRD_SVG}</div>
          <div class="bck-names">${N1} &amp; ${N2}</div>
          <div class="bck-rule"></div>
          <div class="bck-vol">Anniversary Vol. 2<br>Our Love Story</div>
          <div class="bck-brand">DumpIt &nbsp;·&nbsp; kenangan indahmu tersimpan selamanya</div>
        </div>
      </div>`,
      },
    ];
  }

  let SPREADS = [],
    cur = 0,
    flipping = false;
  const FLIP_MS = 460;

  function renderSpread(idx) {
    document.getElementById("pageL").innerHTML = SPREADS[idx].left;
    document.getElementById("pageR").innerHTML = SPREADS[idx].right;
    document.getElementById("pageInd").textContent =
      idx + 1 + " / " + SPREADS.length;
    document.getElementById("progFill").style.width =
      ((idx + 1) / SPREADS.length) * 100 + "%";
    updateThumbs();
  }

  function flipTo(next, forward) {
    if (flipping || next < 0 || next >= SPREADS.length) return;
    flipping = true;
    const fl = document.getElementById("flipLayer");
    const ff = document.getElementById("flipFront");
    const fb = document.getElementById("flipBack");
    if (forward) {
      ff.innerHTML = SPREADS[cur].right;
      fb.innerHTML = SPREADS[next].left;
      fl.style.cssText = `top:0;bottom:0;left:calc(22px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 10px 10px 0;overflow:hidden;`;
      ff.style.transform = "";
      fb.style.transform = "rotateY(180deg)";
      document.getElementById("pageL").innerHTML = SPREADS[next].left;
    } else {
      ff.innerHTML = SPREADS[cur].left;
      fb.innerHTML = SPREADS[next].right;
      fl.style.cssText = `top:0;bottom:0;left:22px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:4px 0 0 10px;overflow:hidden;`;
      ff.style.transform = "";
      fb.style.transform = "rotateY(-180deg)";
      document.getElementById("pageR").innerHTML = SPREADS[next].right;
    }
    let start = null;
    requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / FLIP_MS, 1);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const deg = forward ? -180 * e : 180 * e;
      fl.style.transform = `perspective(1400px) rotateY(${deg}deg)`;
      const mid = Math.sin(t * Math.PI);
      fl.style.boxShadow = forward
        ? `-${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.22})`
        : `${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.22})`;
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        cur = next;
        renderSpread(cur);
        fl.style.transform = "";
        fl.style.boxShadow = "";
        fl.innerHTML = '<div id="flipFront"></div><div id="flipBack"></div>';
        flipping = false;
      }
    });
  }

  function goNext() {
    flipTo(cur + 1, true);
  }
  function goPrev() {
    flipTo(cur - 1, false);
  }
  function goTo(i) {
    if (i !== cur) flipTo(i, i > cur);
  }

  let drag = null,
    dragged = false;
  const book = document.getElementById("book");

  function onDown(e) {
    drag = { x: e.touches ? e.touches[0].clientX : e.clientX };
    dragged = false;
  }
  function onMove(e) {
    if (!drag) return;
    if (Math.abs((e.touches ? e.touches[0].clientX : e.clientX) - drag.x) > 8)
      dragged = true;
  }
  function onUp(e) {
    if (!drag) return;
    const dx =
      (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - drag.x;
    drag = null;
    if (!dragged) return;
    if (dx < -30) goNext();
    else if (dx > 30) goPrev();
  }

  book.addEventListener("touchstart", onDown, { passive: true });
  book.addEventListener("touchmove", onMove, { passive: true });
  book.addEventListener("touchend", onUp);
  book.addEventListener("mousedown", onDown);
  book.addEventListener("mousemove", onMove);
  book.addEventListener("mouseup", onUp);
  book.addEventListener("mouseleave", () => {
    drag = null;
    dragged = false;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") goNext();
    if (e.key === "ArrowLeft" || e.key === "PageUp") goPrev();
  });

  function buildThumbs() {
    const strip = document.getElementById("thumbs");
    strip.innerHTML = "";
    SPREADS.forEach((sp, i) => {
      const t = document.createElement("div");
      t.className = "thumb" + (i === 0 ? " active" : "");
      t.textContent = i + 1;
      t.title = sp.label;
      t.onclick = () => goTo(i);
      strip.appendChild(t);
    });
  }

  function updateThumbs() {
    document
      .querySelectorAll(".thumb")
      .forEach((t, i) => t.classList.toggle("active", i === cur));
    const a = document.querySelector(".thumb.active");
    if (a)
      a.scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
  }

  const hint = document.getElementById("swipeHint");
  setTimeout(() => hint.classList.add("hide"), 2800);

  SPREADS = buildSpreads();
  buildThumbs();
  renderSpread(0);
})();
