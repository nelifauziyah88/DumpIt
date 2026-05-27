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
    return `<div class="${phClass || "ph"}">
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
    "Cara kamu hadir — tulus dan tanpa syarat",
    "Tawa kamu yang selalu menjadi melodi terbaikku",
    "Perhatian kecilmu yang terasa besar bagiku",
    "Kehangatan yang kamu bawa di setiap saat",
    "Cara kamu mendengarkan tanpa menghakimi",
    "Kejujuran yang bisa aku andalkan sepenuhnya",
    "Senyummu yang mampu mengubah hariku",
    "Keberanian dan semangatmu yang menginspirasi",
  ];

  const PROMISES = [
    "Selalu memilihmu, di hari yang mudah maupun yang berat",
    "Hadir dengan sepenuh hati, bukan setengah-setengah",
    "Menghargai setiap momen kecil yang kita miliki",
    "Terus bertumbuh bersama, saling menguatkan",
    "Mencintaimu apa adanya, bukan karena syarat",
  ];

  const DEDICATION = `Kepada kamu yang selalu aku rindukan —

Di antara semua hal yang datang dan pergi, kehadiranmu adalah yang paling berarti. Kamu mengajarkanku bahwa cinta bukan tentang kesempurnaan, tapi tentang memilih untuk tetap ada.

Setiap halaman di sini adalah ucapan terima kasih. Terima kasih sudah menjadi bagian dari cerita terbaikku.`;

  function buildSpreads() {
    const coverSrc = COVER || p(0);

    return [
      {
        label: "Cover",
        left: `<div class="pg cv-l">
        <div class="cv-l-bg"></div>
        <div class="cv-l-grid"></div>
        <div class="cv-l-inner">
          <div class="cv-tag">✦ Our Story</div>
          <div class="cv-photo-frame">
            <div class="cv-corner tl"></div>
            <div class="cv-corner tr"></div>
            <div class="cv-corner bl"></div>
            <div class="cv-corner br"></div>
            ${
              coverSrc
                ? `<img src="${coverSrc}" alt="">`
                : `<div class="cv-photo-ph">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>`
            }
          </div>
          <div class="cv-names">${N1} <span class="cv-amp">&</span> ${N2}</div>
          <div class="cv-sub">Sweet Memories — A Love Story</div>
        </div>
      </div>`,
        right: `<div class="pg cv-r">
        <div class="cv-r-strip"></div>
        <div class="cv-r-inner">
          <div class="cv-r-label">Dedication</div>
          <div class="cv-r-big">
            Untuk <strong>${N2}</strong>, yang membuat setiap hari terasa seperti hadiah yang tidak pernah aku minta namun selalu aku syukuri.
          </div>
          <div class="cv-r-divider"></div>
          <div class="cv-r-quote">${DEDICATION}</div>
          <div class="cv-r-bottom">
            <div class="cv-r-vol">Vol. I</div>
            <div class="cv-r-leaf">🌿</div>
          </div>
        </div>
        <div class="pn" style="right:.7rem;bottom:.45rem">2</div>
      </div>`,
      },

      {
        label: "About",
        left: `<div class="pg sec-l">
        <div class="sec-l-noise"></div>
        <div class="sec-l-num">01</div>
        <div class="sec-l-inner">
          <div>
            <div class="sec-l-tag">Chapter One</div>
            <div class="sec-l-title">About<br>My Person</div>
          </div>
          <div class="sec-l-photo">${img(p(1), "ph-sec")}</div>
          <div class="sec-l-foot">The one who changed everything</div>
        </div>
        <div class="pn" style="color:rgba(255,255,255,.2);left:.5rem;bottom:.45rem">3</div>
      </div>`,
        right: `<div class="pg info-r">
        <div class="info-r-title">All About <em>${N2}</em></div>
        <div class="info-block">
          <div class="info-block-label">Name</div>
          <div class="info-block-val">${N2}</div>
        </div>
        <div class="info-block">
          <div class="info-block-label">What I call them</div>
          <div class="info-block-val">Sayang ♥</div>
        </div>
        <div class="info-block">
          <div class="info-block-label">First thing I noticed</div>
          <div class="info-block-val">Cara mereka hadir — hangat, tulus, dan tak dibuat-buat</div>
        </div>
        <div class="info-prose">
          Di antara semua hal yang aku pelajari tentang cinta, yang paling berharga adalah ini: menemukan seseorang yang membuat kamu ingin menjadi versi terbaik dirimu. Itu adalah ${N2}.
        </div>
        <div class="pn" style="right:.65rem;bottom:.45rem">4</div>
      </div>`,
      },

      {
        label: "Memories",
        left: `<div class="pg sec-l" style="background:var(--g3)">
        <div class="sec-l-noise"></div>
        <div class="sec-l-num">02</div>
        <div class="sec-l-inner">
          <div>
            <div class="sec-l-tag">Chapter Two</div>
            <div class="sec-l-title">Moments<br>We Keep</div>
          </div>
          <div class="sec-l-photo">${img(p(2), "ph-sec")}</div>
          <div class="sec-l-foot">Cerita yang tidak akan pernah kita lupa</div>
        </div>
        <div class="pn" style="color:rgba(255,255,255,.2);left:.5rem;bottom:.45rem">5</div>
      </div>`,
        right: `<div class="pg duo-pg">
        <div class="duo-head">Kenangan Kita</div>
        <div class="duo-photos">
          <div class="duo-cell">${img(p(3), "ph")}</div>
          <div class="duo-cell">${img(p(4), "ph")}</div>
        </div>
        <div class="duo-cap">Each moment, a treasure ♥</div>
        <div class="pn" style="right:.65rem;bottom:.45rem">6</div>
      </div>`,
      },

      {
        label: "Reasons",
        left: `<div class="pg reasons-pg">
        <div class="reasons-head">Mengapa Aku<br>Mencintaimu</div>
        <div class="reasons-sub">— A few of countless reasons —</div>
        ${REASONS.map(
          (r, i) => `
          <div class="reason-item">
            <span class="r-num">${String(i + 1).padStart(2, "0")}</span>
            <span class="r-txt">${r}</span>
          </div>`,
        ).join("")}
        <div class="reasons-foot">& banyak lagi, ${N2}</div>
        <div class="pn" style="color:rgba(255,255,255,.2);left:.5rem;bottom:.45rem">7</div>
      </div>`,
        right: `<div class="pg asym-pg">
        <div class="asym-photo">${img(p(5), "ph")}</div>
        <div class="asym-content">
          <div class="asym-label">A moment to remember</div>
          <div class="asym-title">Kita bukan yang sempurna,<br>tapi kita sempurna bersama</div>
          <div class="asym-txt">
            Di antara semua ketidaksempurnaan yang ada, kita saling melengkapi dengan cara yang tidak pernah bisa aku jelaskan. Dan mungkin memang tidak perlu dijelaskan — cukup dirasakan.
          </div>
        </div>
        <div class="pn" style="right:.65rem;bottom:.45rem">8</div>
      </div>`,
      },

      {
        label: "Gallery",
        left: `<div class="pg qt-pg">
        <div class="qt-line-top"></div>
        <div class="qt-mark">"</div>
        <div class="qt-txt">
          Cinta bukan hanya soal perasaan. Ini tentang memilih untuk tetap hadir — di hari biasa, di saat sulit, dan di semua cerita yang belum kita tulis bersama.
        </div>
        <div class="qt-mark" style="transform:rotate(180deg)">"</div>
        <div class="qt-attr">${N1} ♥ ${N2}</div>
        <div class="qt-line-bot"></div>
        <div class="pn" style="left:.65rem;bottom:.45rem">9</div>
      </div>`,
        right: `<div class="pg grid3-pg">
        <div class="grid3-head">More Moments ♥</div>
        <div class="grid3-row1">${img(p(6), "ph")}</div>
        <div class="grid3-row2">
          <div class="grid3-cell">${img(p(7), "ph")}</div>
          <div class="grid3-cell">${img(p(8), "ph")}</div>
        </div>
        <div class="grid3-cap">Selalu ada cerita baru untuk kita tulis</div>
        <div class="pn" style="right:.65rem;bottom:.45rem">10</div>
      </div>`,
      },

      {
        label: "Promises",
        left: `<div class="pg prom-pg">
        <div class="prom-head">Janjiku<br>Untukmu</div>
        <div class="prom-divider"></div>
        ${PROMISES.map(
          (pr) => `
          <div class="promise-item">
            <div class="prom-dot"></div>
            <div class="prom-txt">${pr}</div>
          </div>`,
        ).join("")}
        <div class="prom-sig">— ${N1} ♥</div>
        <div class="pn" style="left:.65rem;bottom:.45rem">11</div>
      </div>`,
        right: `<div class="pg end-l">
        <div class="end-l-inner">
          <div class="end-ring">🌿</div>
          <div class="end-big">${N1} & ${N2}</div>
          <div class="end-sub">Always &amp; Forever</div>
        </div>
        <div class="pn" style="color:rgba(255,255,255,.2);right:.65rem;bottom:.45rem">12</div>
      </div>`,
      },

      {
        label: "Back",
        left: `<div class="pg back-pg">
        <div class="back-label">Our Gallery</div>
        <div class="back-photos">
          <div class="back-ph-cell tall">${img(p(9), "ph")}</div>
          <div class="back-ph-cell" style="display:flex;align-items:center;justify-content:center;background:var(--g8)">
            <div style="text-align:center;padding:.4rem">
              <div style="font-family:'Playfair Display',serif;font-size:.68rem;color:var(--g2);font-style:italic;line-height:1.5">Masih banyak cerita yang akan kita buat bersama</div>
            </div>
          </div>
          <div class="back-ph-cell" style="background:var(--g6);display:flex;align-items:center;justify-content:center">
            <span style="font-size:1.2rem;opacity:.4">🌿</span>
          </div>
        </div>
        <div class="back-brand">DumpIt <span>— your memories, beautifully preserved</span></div>
        <div class="pn" style="left:.65rem;bottom:.45rem">13</div>
      </div>`,
        right: `<div class="pg" style="background:var(--g1);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(106,180,130,0.10) 0%,transparent 70%)"></div>
        <div style="position:relative;z-index:1;text-align:center;padding:.8rem">
          <div style="font-family:'Lato',sans-serif;font-size:.38rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--g5);margin-bottom:.6rem">The End of Volume I</div>
          <div style="font-family:'Great Vibes',cursive;font-size:1.4rem;color:var(--white);line-height:1.1">${N1}<br>&amp;<br>${N2}</div>
          <div style="width:32px;height:1px;background:var(--g4);margin:.5rem auto"></div>
          <div style="font-family:'Lato',sans-serif;font-size:.42rem;font-weight:300;color:rgba(255,255,255,.3);letter-spacing:.1em">To be continued…</div>
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
      fl.style.cssText = `top:0;bottom:0;left:calc(16px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 10px 10px 0;overflow:hidden;`;
      ff.style.transform = "";
      fb.style.transform = "rotateY(180deg)";
      document.getElementById("pageL").innerHTML = SPREADS[next].left;
    } else {
      ff.innerHTML = SPREADS[cur].left;
      fb.innerHTML = SPREADS[next].right;
      fl.style.cssText = `top:0;bottom:0;left:16px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:3px 0 0 10px;overflow:hidden;`;
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
        ? `-${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.2})`
        : `${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.2})`;

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
