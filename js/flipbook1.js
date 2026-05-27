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
      : `<div class="${cls || "ph"}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".25"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

  const LETTER = `Kepada kamu yang selalu ada,\n\nAda banyak hal di dunia ini yang datang dan pergi. Tapi kamu, kamu adalah salah satu hal yang ingin aku jaga.\n\nTerima kasih sudah menjadi tempat pulang. Terima kasih sudah memilih untuk terus ada, di hari-hari biasa maupun di saat yang paling sulit.\n\nKamu berarti lebih dari yang bisa aku tulis di sini.`;

  const THINGS = [
    "Cara kamu tersenyum tanpa alasan",
    "Perhatian kecil yang selalu kamu berikan",
    "Tawa kamu yang bikin semua jadi lebih ringan",
    "Kehadiran kamu yang selalu menenangkan",
    "Cara kamu dengerin tanpa menghakimi",
    "Kehangatan yang kamu bawa setiap hari",
    "Kejujuran kamu yang bisa selalu aku percaya",
    "Cara kamu bilang nama aku",
    "Mata kamu yang bicara lebih banyak dari kata-kata",
    "Pelukan kamu yang rasanya seperti rumah",
  ];

  const LOVE_NOTES = [
    {
      num: "01",
      txt: "Aku suka caramu hadir, tanpa kata-kata pun, cukup.",
      sig: "♥",
    },
    {
      num: "02",
      txt: "Tawamu adalah lagu favoritku yang nggak ada di playlist manapun.",
      sig: "♥",
    },
    {
      num: "03",
      txt: "Kamu bukan sekadar pilihan. Kamu adalah jawaban.",
      sig: "♥",
    },
    {
      num: "04",
      txt: "Bersamamu, hari biasa pun terasa seperti hadiah.",
      sig: "♥",
    },
    {
      num: "05",
      txt: "Aku tidak takut masa depan, selama kamu ada di dalamnya.",
      sig: "♥",
    },
    {
      num: "06",
      txt: "Terima kasih sudah menjadi tempat paling aman yang aku punya.",
      sig: "♥",
    },
  ];

  function buildSpreads() {
    const coverSrc = COVER || p(0);
    return [
      {
        label: "Cover",
        left: `<div class="pg cov">
                        <div class="cov-inner">
                            <div class="cov-frame">${img(coverSrc, "cov-ph")}</div>
                            <div class="cov-names">${N1} ♥ ${N2}</div>
                            <div class="cov-sub">Anniversary Vol. 1</div>
                            <div class="cov-deco">✦ Our Love Story ✦</div>
                        </div>
                    </div>`,
        right: `<div class="pg ltr">
                        <div class="ltr-h">A Letter For You</div>
                        <div class="ltr-to">To: ${N2}, my favorite person</div>
                        <div class="ltr-to">From: ${N1}</div>
                        <div class="ltr-body">${LETTER}</div>
                        <div style="padding:0 .8rem">
                            <div class="stamp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#b5292a" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                <div class="stamp-t">LOVE</div>
                            </div>
                        </div>
                        <div class="ltr-sig">Yours always, ${N1} ♥</div>
                        <div class="pn">2</div>
                    </div>`,
      },
      {
        label: "About",
        left: `<div class="pg aab">
                        <div class="aab-title">All About My Babe ♥</div>
                        <div class="aab-photo">${img(p(1), "ph")}</div>
                        <div class="aab-grid">
                            <div class="aab-box"><div class="aab-lbl">Name</div><div class="aab-val">${N2}</div></div>
                            <div class="aab-box"><div class="aab-lbl">My Name For Them</div><div class="aab-val">Sayang ♥</div></div>
                            <div class="aab-box" style="grid-column:1/-1"><div class="aab-lbl">What I love most</div><div class="aab-val">Cara dia ada, sederhana, tulus, dan selalu cukup untuk bikin hari-hariku lebih berarti</div></div>
                        </div>
                        <div class="pn">3</div>
                    </div>`,
        right: `<div class="pg abr">
                        <div class="abr-head">The one I love ♥</div>
                        <div class="abr-sec">
                            <div class="abr-lbl">Best couple in the century</div>
                            <div class="abr-txt">Kita nggak sempurna, tapi di antara semua ketidaksempurnaan itu, kita sempurna untuk satu sama lain.</div>
                        </div>
                        <div class="abr-sec">
                            <div class="abr-lbl">My love for you will never end</div>
                            <div class="abr-txt">Mencintai kamu bukan sesuatu yang aku putuskan sekali. Itu sesuatu yang aku pilih, setiap hari.</div>
                        </div>
                        <div class="abr-sec">
                            <div class="abr-lbl">Thank you for always being by my side</div>
                            <div class="abr-txt">Di saat aku paling butuh seseorang, kamu selalu ada. Itu bukan hal kecil, itu segalanya.</div>
                        </div>
                        <div class="abr-heart">♥ I love you, ${N2}</div>
                        <div class="pn" style="right:.7rem">4</div>
                    </div>`,
      },
      {
        label: "My Love",
        left: `<div class="pg mlov">
                        <div class="mlov-inner">
                            <div class="mlov-oval">${img(p(2), "mlov-ph")}</div>
                            <div class="mlov-big">My Love</div>
                            <div class="mlov-sub">The one I love</div>
                            <div class="mlov-taken">${N2}, taken by me.</div>
                        </div>
                        <div class="pn" style="color:rgba(255,255,255,.25)">5</div>
                    </div>`,
        right: `<div class="pg cstrip">
                        <div class="cstrip-title">Our Memories</div>
                        <div class="cstrip-photos">
                            ${[3, 4, 5, 6].map((i) => `<div class="cstrip-cell">${img(p(i), "")}</div>`).join("")}
                        </div>
                        <div class="cstrip-note">Kenangan yang selalu aku simpan ♥</div>
                        <div class="pn" style="right:.7rem">6</div>
                    </div>`,
      },
      {
        label: "First Date",
        left: `<div class="pg fdate-l">
                        <div class="fdate-l-inner">
                            <div class="fdate-heading">First<br>date</div>
                            <div class="fdate-chip">The Beginning</div>
                            <div class="fdate-grid" style="grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;">
                                <div class="fdate-cell" style="grid-row:1/3">${img(p(7), "")}</div>
                                <div class="fdate-cell">${img(p(8), "")}</div>
                                <div class="fdate-cell" style="display:flex;align-items:center;justify-content:center;font-family:'Dancing Script',cursive;font-size:.7rem;color:rgba(255,255,255,.5);text-align:center;padding:.3rem">Awal dari segalanya ♥</div>
                            </div>
                        </div>
                        <div class="pn" style="color:rgba(255,255,255,.25)">7</div>
                    </div>`,
        right: `<div class="pg fdate-r">
                        <div class="fdate-r-head">Best couple in the century</div>
                        <div class="fdate-r-txt">Ada momen-momen kecil yang nggak keliatan penting waktu itu, tapi ternyata itulah yang jadi awal dari semua yang kita bangun bersama.</div>
                        <div class="fdate-quote">
                            <div class="fdate-q-txt">"Kita mungkin nggak ingat semua detailnya. Tapi perasaan itu, perasaan pertama kali tahu bahwa ini berbeda, itu nggak akan pernah hilang."</div>
                            <div class="fdate-q-name">${N1} & ${N2}</div>
                        </div>
                        <div class="fdate-footer">Thank you for always being by my side ♥</div>
                        <div class="pn" style="right:.7rem">8</div>
                    </div>`,
      },
      {
        label: "Song",
        left: `<div class="pg tape-pg">
                        <div class="tape-wrap">
                            <div class="tape-hole"></div>
                            <div class="tape-reel l"></div>
                            <div class="tape-reel r"></div>
                            <div class="tape-label">
                                <div class="tape-l-title">Our Song</div>
                                <div class="tape-l-art">♥ Playlist</div>
                            </div>
                        </div>
                        <div class="tape-song">Lagu Kita</div>
                        <div class="tape-artist">Yang selalu bikin rindu</div>
                        <div class="tape-player">
                            <span class="tp-icon">⏮</span>
                            <span class="tp-icon">▶</span>
                            <div class="tp-bar"><div class="tp-fill"></div><div class="tp-dot"></div></div>
                            <span class="tp-icon">⏭</span>
                        </div>
                        <div class="pl">
                            ${["Lagu yang pertama kita dengar bareng", "Lagu yang selalu bikin kamu ingat aku", "Lagu yang kita nyanyiin waktu perjalanan", "Lagu yang jadi favorit kita berdua"].map((s, i) => `<div class="pl-item ${i === 0 ? "active" : ""}"><span class="pl-note">${i === 0 ? "♪" : "♩"}</span>${s}</div>`).join("")}
                        </div>
                        <div class="pn">9</div>
                    </div>`,
        right: `<div class="pg moments">
                        <div class="moments-title">Our Moments ♥</div>
                        <div class="moments-grid">
                            <div class="moments-cell moments-big">${img(p(8), "")}</div>
                            <div class="moments-cell" style="flex-direction:column;align-items:center;justify-content:center;gap:.2rem;padding:.3rem">
                                <div style="font-family:'Dancing Script',cursive;color:var(--brown);font-size:.65rem;text-align:center">Tawa kita</div>
                                <div style="font-size:1.1rem;color:var(--light-red)">♥</div>
                            </div>
                            <div class="moments-cell" style="align-items:center;justify-content:center;font-size:.6rem;color:var(--muted);text-align:center;padding:.3rem">Cerita kita</div>
                        </div>
                        <div class="moments-foot">Setiap detik bersamamu berharga ♥</div>
                        <div class="pn" style="right:.7rem">10</div>
                    </div>`,
      },
      {
        label: "Notes",
        left: `<div class="pg lnotes">
                        <div class="lnotes-head">Love Notes For You ♥</div>
                        <div class="lnotes-grid">
                            ${LOVE_NOTES.map(
                              (n) => `<div class="ln-card">
                                <div class="ln-num">Note ${n.num}</div>
                                <div class="ln-txt">${n.txt}</div>
                                <div class="ln-sig">${n.sig} ${N1}</div>
                            </div>`,
                            ).join("")}
                        </div>
                        <div class="lnotes-foot">Karena kamu layak tahu betapa berartinya kamu ♥</div>
                        <div class="pn">11</div>
                    </div>`,
        right: `<div class="pg things">
                        <div class="things-head">Things I Love About You</div>
                        <div class="things-list">
                            ${THINGS.map((t, i) => `<div class="ti"><span class="ti-n">${i + 1}.</span><span>${t}</span></div>`).join("")}
                        </div>
                        <div class="things-foot">Dan masih banyak lagi, ${N2} ♥</div>
                        <div class="pn" style="right:.7rem;color:rgba(255,255,255,.2)">12</div>
                    </div>`,
      },
      {
        label: "End",
        left: `<div class="pg quote-pg">
                        <div class="q-orn">"</div>
                        <div class="q-txt">Cinta bukan hanya soal perasaan. Ini soal memilih untuk tetap ada, di hari-hari biasa, di momen sulit, dan di semua cerita yang belum kita tulis.</div>
                        <div class="q-orn" style="transform:rotate(180deg)">"</div>
                        <div class="q-attr">${N1} & ${N2}</div>
                        <div class="q-dur">Always & Forever ♥</div>
                        <div class="pn">13</div>
                    </div>`,
        right: `<div class="pg back">
                        <div class="back-inner">
                            <div class="back-heart">♥</div>
                            <div class="back-names">${N1} & ${N2}</div>
                            <div class="back-sub">Anniversary Vol. 1<br>Our Love Story</div>
                            <div class="back-brand">DumpIt, Your memories, beautifully preserved.</div>
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
      fl.style.cssText = `top:0;bottom:0;left:calc(20px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 8px 8px 0;overflow:hidden;`;
      ff.style.transform = "";
      fb.style.transform = "rotateY(180deg)";
      document.getElementById("pageL").innerHTML = SPREADS[next].left;
    } else {
      ff.innerHTML = SPREADS[cur].left;
      fb.innerHTML = SPREADS[next].right;
      fl.style.cssText = `top:0;bottom:0;left:20px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:2px 0 0 8px;overflow:hidden;`;
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
        ? `-${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.28})`
        : `${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.28})`;
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
