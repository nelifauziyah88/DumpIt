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

  function img(src, phClass) {
    if (src) return `<img src="${src}" alt="">`;
    return `<div class="${phClass || "ph3"}">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.2"
      stroke-linecap="round" stroke-linejoin="round" opacity=".3">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  </div>`;
  }

  const REASONS = [
    "Cara kamu menyebut namaku, seperti itu adalah satu-satunya kata yang penting",
    "Tawa kamu yang jatuh bebas, tanpa beban, tanpa dibuat-buat",
    "Perhatianmu pada hal kecil yang kamu pikir tidak aku perhatikan",
    "Kehangatan yang kamu bawa bahkan lewat satu pesan sederhana",
    "Cara kamu mendengarkan, bukan hanya menunggu giliran bicara",
    "Kejujuranmu yang datang tanpa melukai, selalu dengan kelembutan",
    "Senyummu yang muncul perlahan, sebelum tawa itu tiba",
    "Semangatmu yang diam-diam membuatku ingin terus mencoba",
  ];

  const PROMISES = [
    "Memilihmu setiap hari, bukan hanya ketika mudah",
    "Hadir sungguh-sungguh, bukan sekadar ada di dekatmu",
    "Menjaga cerita kita seperti sesuatu yang benar-benar berharga",
    "Bertumbuh bersamamu, saling menopang di setiap musim",
    "Mencintaimu sebagai dirimu sendiri, bukan versi yang aku inginkan",
  ];

  const DEDICATION = `Kepada kamu yang entah bagaimana selalu tahu cara membuatku merasa cukup,

Tidak banyak yang bisa aku katakan yang belum pernah tersirat dalam senyum kita, dalam diam yang nyaman kita, dalam semua momen kecil yang hanya kita yang tahu nilainya.

Buku ini bukan tentang kenangan yang luar biasa. Ini tentang hal-hal biasa yang terasa luar biasa karena kamu ada di sana.`;

  function buildSpreads() {
    const coverSrc = COVER || p(0);

    return [
      {
        label: "Cover",
        left: `<div class="pg cv3-l">
        <div class="cv3-l-dots"></div>
        <div class="cv3-l-deco"></div>
        <div class="cv3-l-deco2"></div>
        <div class="cv3-l-inner">
          <div class="cv3-tag">Kisah Kita</div>
          <div class="cv3-photo-wrap">
            <div class="cv3-photo-border">
              ${
                coverSrc
                  ? `<img src="${coverSrc}" alt="">`
                  : `<div class="cv3-photo-ph">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </div>`
              }
            </div>
            <div class="cv3-photo-frame-outer"></div>
          </div>
          <div class="cv3-names">${N1} <span class="cv3-amp">&</span> ${N2}</div>
          <div class="cv3-sub">Catatan Manis, Cerita yang Nyata</div>
        </div>
      </div>`,
        right: `<div class="pg cv3-r">
        <div class="cv3-r-swirl"></div>
        <div class="cv3-r-swirl2"></div>
        <div class="cv3-r-inner">
          <div class="cv3-r-label">Untuk kamu membaca ini</div>
          <div class="cv3-r-bigquote">
            Untuk <strong>${N2}</strong>, yang tanpa sadar mengajariku bahwa rumah bukan selalu soal tempat, melainkan soal dengan siapa kamu merasa paling jadi dirimu sendiri.
          </div>
          <div class="cv3-r-line"></div>
          <div class="cv3-r-note">${DEDICATION}</div>
          <div class="cv3-r-vol">Vol. I &mdash; ${N1}</div>
        </div>
        <div class="pn" style="right:.7rem;bottom:.45rem">2</div>
      </div>`,
      },

      {
        label: "Tentang",
        left: `<div class="pg about3-l">
        <div class="about3-l-stripe"></div>
        <div class="about3-l-pattern"></div>
        <div class="about3-l-num">01</div>
        <div class="about3-l-inner">
          <div>
            <div class="about3-l-chip">Bab Satu</div>
            <div class="about3-l-title">Mengenalmu,<br>Lebih Dalam</div>
          </div>
          <div class="about3-l-photo">${img(p(1), "ph3")}</div>
          <div class="about3-l-foot">Yang satu ini mengubah segalanya</div>
        </div>
        <div class="pn" style="color:rgba(255,255,255,.2);left:.55rem;bottom:.45rem">3</div>
      </div>`,
        right: `<div class="pg about3-r">
        <div class="about3-r-title">Semua Tentang <em>${N2}</em></div>
        <div class="about3-card">
          <div class="about3-card-lbl">Nama</div>
          <div class="about3-card-val">${N2}</div>
        </div>
        <div class="about3-card">
          <div class="about3-card-lbl">Aku memanggilnya</div>
          <div class="about3-card-val">Sayangku ♥</div>
        </div>
        <div class="about3-card">
          <div class="about3-card-lbl">Hal pertama yang aku perhatikan</div>
          <div class="about3-card-val">Cara mereka hadir, hangat dan tulus, seolah dunia boleh berjalan lebih pelan</div>
        </div>
        <div class="about3-prose">
          Dari semua hal yang aku pelajari tentang mencintai seseorang, yang paling berarti adalah ini: ada orang yang membuat kamu ingin menjadi lebih baik, bukan karena mereka meminta, tapi karena kamu tidak ingin mengecewakan mereka. ${N2} adalah orang itu.
        </div>
        <div class="pn" style="right:.65rem;bottom:.45rem">4</div>
      </div>`,
      },

      {
        label: "Kenangan",
        left: `<div class="pg mem3-l">
        <div class="mem3-l-head">Kenangan yang Kita Simpan</div>
        <div class="mem3-l-photos">
          <div class="mem3-l-big">${img(p(2), "ph3")}</div>
          <div class="mem3-l-row">
            <div class="mem3-l-sm">${img(p(3), "ph3")}</div>
            <div class="mem3-l-sm">${img(p(4), "ph3")}</div>
          </div>
        </div>
        <div class="mem3-l-cap">Setiap momen, selalu terasa cukup ♥</div>
        <div class="pn" style="left:.65rem;bottom:.45rem">5</div>
      </div>`,
        right: `<div class="pg mem3-r">
        <div class="mem3-r-blob"></div>
        <div class="mem3-r-blob2"></div>
        <div class="mem3-r-bignum">02</div>
        <div class="mem3-r-inner">
          <div class="mem3-r-chip">✦ Bab Dua</div>
          <div class="mem3-r-title">Momen yang<br>Tidak Terlupakan</div>
          <div class="mem3-r-photo">${img(p(5), "ph3")}</div>
          <div class="mem3-r-foot">Cerita yang akan terus kita ceritakan ulang</div>
        </div>
        <div class="pn" style="right:.65rem;bottom:.45rem">6</div>
      </div>`,
      },

      {
        label: "Alasan",
        left: `<div class="pg why3-l">
        <div class="why3-l-ring"></div>
        <div class="why3-l-ring2"></div>
        <div class="why3-l-head">Mengapa Aku<br>Jatuh Cinta</div>
        <div class="why3-l-sub">Sedikit dari banyak yang ada</div>
        ${REASONS.map(
          (r, i) => `
          <div class="why3-item">
            <span class="why3-num">${String(i + 1).padStart(2, "0")}</span>
            <span class="why3-txt">${r}</span>
          </div>`,
        ).join("")}
        <div class="why3-foot">& masih banyak lagi, ${N2}</div>
        <div class="pn" style="color:rgba(255,255,255,.2);left:.5rem;bottom:.45rem">7</div>
      </div>`,
        right: `<div class="pg why3-r">
        <div class="why3-r-photo">${img(p(6), "ph3")}</div>
        <div class="why3-r-content">
          <div class="why3-r-lbl">Sebuah catatan</div>
          <div class="why3-r-title">Kita tidak sempurna,<br>dan itulah yang membuatnya nyata</div>
          <div class="why3-r-txt">
            Cinta yang paling tulus bukan yang tanpa celah. Ini yang tetap memilih untuk ada, meskipun tau semua kekurangannya. Kamu mengajariku itu setiap harinya.
          </div>
        </div>
        <div class="pn" style="right:.65rem;bottom:.45rem">8</div>
      </div>`,
      },

      {
        label: "Galeri",
        left: `<div class="pg qt3-l">
        <div class="qt3-l-bg"></div>
        <div class="qt3-l-inner">
          <div class="qt3-mark">"</div>
          <div class="qt3-deco"></div>
          <div class="qt3-txt">
            Cinta yang sesungguhnya bukan tentang menemukan orang yang sempurna, melainkan tentang belajar melihat dengan sempurna semua yang ada pada dirinya.
          </div>
          <div class="qt3-deco" style="transform:rotate(180deg)"></div>
          <div class="qt3-attr">${N1} ♥ ${N2}</div>
        </div>
        <div class="pn" style="left:.65rem;bottom:.45rem">9</div>
      </div>`,
        right: `<div class="pg gal3-r">
        <div class="gal3-head">Lebih Banyak Kenangan ♥</div>
        <div class="gal3-main">${img(p(7), "ph3")}</div>
        <div class="gal3-sub">
          <div class="gal3-cell">${img(p(8), "ph3")}</div>
          <div class="gal3-cell">${img(p(9), "ph3")}</div>
        </div>
        <div class="gal3-cap">Masih banyak cerita yang akan kita tulis bersama</div>
        <div class="pn" style="right:.65rem;bottom:.45rem">10</div>
      </div>`,
      },

      {
        label: "Janji",
        left: `<div class="pg prom3-l">
        <div class="prom3-head">Janjiku<br>Untukmu</div>
        <div class="prom3-deco"></div>
        ${PROMISES.map(
          (pr) => `
          <div class="prom3-item">
            <span class="prom3-heart">♥</span>
            <span class="prom3-txt">${pr}</span>
          </div>`,
        ).join("")}
        <div class="prom3-sig">Selalu, ${N1} ♥</div>
        <div class="pn" style="left:.65rem;bottom:.45rem">11</div>
      </div>`,
        right: `<div class="pg end3-r">
        <div class="end3-r-circle"></div>
        <div class="end3-r-ring"></div>
        <div class="end3-inner">
          <span class="end3-rose">🌸</span>
          <div class="end3-big">${N1} & ${N2}</div>
          <div class="end3-line"></div>
          <div class="end3-sub">Selalu & Selamanya</div>
        </div>
        <div class="pn" style="color:rgba(255,255,255,.2);right:.65rem;bottom:.45rem">12</div>
      </div>`,
      },

      {
        label: "Penutup",
        left: `<div class="pg back3-l">
        <div class="back3-lbl">Galeri Kita</div>
        <div class="back3-grid">
          <div class="back3-cell span2" style="height:90px">${img(p(10), "ph3")}</div>
          <div class="back3-cell">${img(p(11), "ph3")}</div>
          <div class="back3-cell" style="background:var(--p6);display:flex;align-items:center;justify-content:center">
            <span style="font-size:0.6rem;font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--p2);text-align:center;padding:.3rem">Masih banyak lagi yang akan kita rasa bersama</span>
          </div>
        </div>
        <div class="back3-brand">DumpIt <span>— kenangan kamu, tersimpan indah</span></div>
        <div class="pn" style="left:.65rem;bottom:.45rem">13</div>
      </div>`,
        right: `<div class="pg back3-r">
        <div class="back3-r-glow"></div>
        <div class="back3-r-inner">
          <div class="back3-r-vol">Akhir dari Volume I</div>
          <div class="back3-r-name">${N1}<br>&amp;<br>${N2}</div>
          <div class="back3-r-sep"></div>
          <div class="back3-r-cont">Bersambung…</div>
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
      `${idx + 1} / ${SPREADS.length}`;
    document.getElementById("progFill").style.width =
      `${((idx + 1) / SPREADS.length) * 100}%`;
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
      fl.style.cssText = `top:0;bottom:0;left:calc(16px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 12px 12px 0;overflow:hidden;`;
      ff.style.transform = "";
      fb.style.transform = "rotateY(180deg)";
      document.getElementById("pageL").innerHTML = SPREADS[next].left;
    } else {
      ff.innerHTML = SPREADS[cur].left;
      fb.innerHTML = SPREADS[next].right;
      fl.style.cssText = `top:0;bottom:0;left:16px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:3px 0 0 12px;overflow:hidden;`;
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
        ? `-${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.18})`
        : `${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.18})`;

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
    const dx = (e.touches ? e.touches[0].clientX : e.clientX) - drag.x;
    if (Math.abs(dx) > 8) dragged = true;
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
