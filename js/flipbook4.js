let D = {};
try {
  const s = localStorage.getItem("dumpitData");
  if (s) D = JSON.parse(s);
} catch (e) {}

const N1 = D.name1 || "Nama";
const N2 = D.name2 || "Nama";
const PHOTOS = D.photos || [];
const COVER = D.cover || null;

const p = (i) => PHOTOS[i] || null;

const img = (src, cls) =>
  src
    ? `<img src="${src}" alt="">`
    : `<div class="${cls || "ph"}"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".25"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

const BRANCH_SVG = `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1.2" stroke-linecap="round">
  <path d="M100 290 C100 250 95 200 100 150 C105 100 95 50 100 10"/>
  <path d="M100 220 C80 205 60 195 40 185"/>
  <path d="M100 200 C120 185 140 170 155 155"/>
  <path d="M100 170 C75 158 55 145 35 132"/>
  <path d="M100 148 C122 135 140 120 160 108"/>
  <path d="M100 120 C82 110 65 98 48 88"/>
  <path d="M100 100 C118 90 135 78 148 65"/>
  <path d="M40 185 C30 178 22 170 18 160"/>
  <path d="M155 155 C162 145 165 135 163 124"/>
  <path d="M35 132 C25 124 20 115 18 104"/>
  <path d="M160 108 C168 98 170 88 167 76"/>
  <circle cx="18" cy="160" r="3" fill="#5a3620"/>
  <circle cx="163" cy="124" r="3" fill="#5a3620"/>
  <circle cx="18" cy="104" r="3" fill="#5a3620"/>
  <circle cx="167" cy="76" r="3" fill="#5a3620"/>
  <circle cx="40" cy="185" r="2.5" fill="#5a3620"/>
  <circle cx="35" cy="132" r="2.5" fill="#5a3620"/>
  <ellipse cx="100" cy="10" rx="6" ry="9" fill="#a67856" opacity=".6"/>
  <ellipse cx="48" cy="88" rx="5" ry="8" fill="#a67856" opacity=".5"/>
  <ellipse cx="148" cy="65" rx="5" ry="7" fill="#a67856" opacity=".5"/>
</svg>`;

const WREATH_SVG = `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" fill="none">
  <g stroke="#5a3620" stroke-width="1" stroke-linecap="round" opacity=".7">
    <path d="M80 20 C55 22 35 38 25 60"/>
    <path d="M80 20 C105 22 125 38 135 60"/>
    <path d="M25 60 C18 80 22 102 35 118"/>
    <path d="M135 60 C142 80 138 102 125 118"/>
    <path d="M35 118 C50 135 65 142 80 143"/>
    <path d="M125 118 C110 135 95 142 80 143"/>
    <path d="M80 20 C70 30 62 35 55 38" stroke-width="0.8"/>
    <path d="M80 20 C90 30 98 35 105 38" stroke-width="0.8"/>
    <path d="M25 60 C32 55 36 50 38 44" stroke-width="0.8"/>
    <path d="M135 60 C128 55 124 50 122 44" stroke-width="0.8"/>
    <path d="M35 118 C38 108 38 100 35 93" stroke-width="0.8"/>
    <path d="M125 118 C122 108 122 100 125 93" stroke-width="0.8"/>
  </g>
  <g fill="#a67856" opacity=".6">
    <ellipse cx="80" cy="17" rx="5" ry="7" transform="rotate(-5 80 17)"/>
    <ellipse cx="23" cy="58" rx="5" ry="7" transform="rotate(-70 23 58)"/>
    <ellipse cx="137" cy="58" rx="5" ry="7" transform="rotate(70 137 58)"/>
    <ellipse cx="35" cy="120" rx="5" ry="7" transform="rotate(-130 35 120)"/>
    <ellipse cx="125" cy="120" rx="5" ry="7" transform="rotate(130 125 120)"/>
    <ellipse cx="80" cy="145" rx="5" ry="7" transform="rotate(175 80 145)"/>
  </g>
  <g fill="#c9a880" opacity=".4">
    <circle cx="52" cy="36" r="3"/>
    <circle cx="108" cy="36" r="3"/>
    <circle cx="30" cy="80" r="3"/>
    <circle cx="130" cy="80" r="3"/>
    <circle cx="42" cy="118" r="3"/>
    <circle cx="118" cy="118" r="3"/>
    <circle cx="80" cy="143" r="3"/>
  </g>
</svg>`;

const CORNER_SVG = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="0.8" stroke-linecap="round" opacity=".7">
  <path d="M5 5 C5 5 25 8 35 20 C45 32 42 50 50 60 C58 70 72 72 75 75"/>
  <path d="M5 5 C10 15 8 25 15 32"/>
  <path d="M35 20 C40 15 48 14 55 18"/>
  <path d="M50 60 C55 55 62 54 68 58"/>
  <ellipse cx="5" cy="5" rx="4" ry="6" fill="#a67856" opacity=".5"/>
  <ellipse cx="55" cy="18" rx="3" ry="5" fill="#a67856" opacity=".4"/>
  <ellipse cx="68" cy="58" rx="3" ry="5" fill="#a67856" opacity=".4"/>
  <circle cx="15" cy="32" r="2" fill="#c9a880" opacity=".5"/>
</svg>`;

const LETTER = `Kepada ${N2} yang selalu aku syukuri kehadirannya

Ada hal-hal kecil yang mungkin jarang aku ungkapkan dengan kata-kata tapi selalu aku rasakan setiap hari

Cara kamu hadir tanpa perlu diminta adalah salah satu hal paling berharga yang pernah aku terima. Cara kamu mengerti tanpa perlu penjelasan panjang adalah sesuatu yang tidak semua orang punya

Bersama kamu hari-hari terasa lebih ringan. Bukan karena hidup menjadi mudah tapi karena ada kamu di sampingku untuk melewatinya bersama

Terima kasih sudah memilih untuk ada. Itu lebih dari cukup`;

const THINGS = [
  "Cara kamu hadir tanpa perlu diminta",
  "Suara kamu yang jadi hal pertama ingin aku dengar",
  "Tawa kamu yang membuat semua terasa ringan",
  "Perhatian kecil yang kamu kira tidak aku sadari",
  "Cara kamu menatap seolah aku satu-satunya",
  "Keberanian kamu yang selalu membuatku kagum",
  "Hangat genggaman tangan kamu",
  "Cara kamu menyebut namaku",
  "Kesabaran kamu yang tidak pernah habis",
  "Cara kamu ada. Itu saja sudah lebih dari cukup",
];

const LOVE_NOTES = [
  {
    num: "I",
    txt: "Kamu bukan kebetulan. Kamu adalah jawaban dari doa yang bahkan tidak aku sadari sedang aku panjatkan.",
    sig: "♡",
  },
  {
    num: "II",
    txt: "Mencintai kamu terasa seperti bernapas. Mudah dan alami dan tidak bisa aku bayangkan hidup tanpanya.",
    sig: "♡",
  },
  {
    num: "III",
    txt: "Di antara semua versi hidupku yang ada kamu di dalamnya adalah versi yang paling aku syukuri.",
    sig: "♡",
  },
  {
    num: "IV",
    txt: "Kamu bukan hanya tempat aku pulang. Kamu adalah alasan aku ingin pulang.",
    sig: "♡",
  },
  {
    num: "V",
    txt: "Hari biasa terasa luar biasa hanya karena kamu ada di dalamnya.",
    sig: "♡",
  },
  {
    num: "VI",
    txt: "Kalau harus mengulang segalanya aku akan tetap memilih jalan yang membawaku ke kamu.",
    sig: "♡",
  },
];

const bars = Array.from({ length: 28 }, (_, i) => {
  const h =
    [
      10, 16, 8, 20, 14, 9, 22, 13, 18, 7, 17, 24, 9, 15, 20, 5, 17, 11, 22, 13,
      7, 19, 15, 9, 20, 13, 17, 7,
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
        <svg class="cov-bg-branch" viewBox="0 0 350 500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M320 0 C310 60 280 120 260 180 C240 240 230 300 210 360 C190 420 170 470 150 500"/>
          <path d="M260 180 C235 168 210 158 185 145"/>
          <path d="M230 240 C255 228 275 215 295 200"/>
          <path d="M210 300 C185 290 162 278 140 262"/>
          <path d="M185 145 C172 135 162 122 158 108"/>
          <path d="M295 200 C308 188 315 175 312 162"/>
          <ellipse cx="158" cy="108" rx="7" ry="10" fill="#a67856" opacity=".5"/>
          <ellipse cx="140" cy="262" rx="6" ry="9" fill="#a67856" opacity=".4"/>
          <circle cx="185" cy="145" r="4" fill="#c9a880" opacity=".4"/>
          <circle cx="295" cy="200" r="4" fill="#c9a880" opacity=".4"/>
        </svg>
        <div class="cov-inner">
          <div class="cov-wreath">
            <div class="cov-wreath-svg">${WREATH_SVG}</div>
            <div class="cov-photo">${img(coverSrc, "ph")}</div>
          </div>
          <div class="cov-line"></div>
          <div class="cov-names">${N1} &amp; ${N2}</div>
          <div class="cov-sub">Anniversary Vol. 1 &nbsp;·&nbsp; Our Story</div>
          <div class="cov-seal">♥</div>
        </div>
      </div>`,
      right: `<div class="pg ltr">
        <div class="ltr-lines"></div>
        <svg class="ltr-branch" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M180 0 C170 50 155 100 145 150 C135 200 125 250 115 300"/>
          <path d="M145 80 C125 70 108 58 92 45"/>
          <path d="M135 140 C155 128 170 115 182 100"/>
          <ellipse cx="92" cy="45" rx="6" ry="9" fill="#a67856" opacity=".5"/>
          <ellipse cx="182" cy="100" rx="5" ry="8" fill="#a67856" opacity=".4"/>
        </svg>
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
        <svg class="abt-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
          <path d="M40 300 C50 240 70 180 80 120 C90 60 85 20 100 0"/>
          <path d="M80 180 C100 168 118 155 132 140"/>
          <path d="M75 240 C55 228 38 215 25 200"/>
          <ellipse cx="132" cy="140" rx="6" ry="9" fill="#fff" opacity=".4"/>
          <ellipse cx="25" cy="200" rx="5" ry="8" fill="#fff" opacity=".3"/>
        </svg>
        <div class="abt-tag">✦ The one I love</div>
        <div class="abt-name">${N2}</div>
        <div class="abt-photo">${img(p(1), "ph")}</div>
        <div class="abt-rows">
          <div class="abt-row">
            <div class="abt-lbl">Nama panggilanku</div>
            <div class="abt-val">Sayang &nbsp;·&nbsp; cintaku &nbsp;·&nbsp; rumahku</div>
          </div>
          <div class="abt-row">
            <div class="abt-lbl">Yang paling aku suka</div>
            <div class="abt-val">Cara dia ada tanpa syarat dan tanpa hitung-hitungan</div>
          </div>
          <div class="abt-row">
            <div class="abt-lbl">Satu kata untuknya</div>
            <div class="abt-val">Segalanya</div>
          </div>
        </div>
        <div class="pn" style="left:.65rem;color:rgba(255,255,255,.2)">3</div>
      </div>`,
      right: `<div class="pg polar">
        <svg class="polar-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M160 0 C150 50 135 100 125 150 C115 200 105 250 95 300"/>
          <path d="M125 90 C105 78 88 65 72 52"/>
          <path d="M115 150 C135 138 150 125 162 110"/>
          <ellipse cx="72" cy="52" rx="6" ry="9" fill="#a67856" opacity=".5"/>
        </svg>
        <div class="polar-title">Kenangan Kita ♡</div>
        <div class="polar-grid">
          ${[2, 3, 4, 5]
            .map((i, idx) => {
              const caps = [
                "awal semuanya",
                "momen kita",
                "cerita kita",
                "bersama ♡",
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
        <svg class="abt2-corner tl" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">${CORNER_SVG.replace(/<svg[^>]*>/, "").replace("</svg>", "")}</svg>
        <svg class="abt2-corner br" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">${CORNER_SVG.replace(/<svg[^>]*>/, "").replace("</svg>", "")}</svg>
        <div class="abt2-head">Tentang kamu &nbsp;${N2} ♡</div>
        <div class="abt2-items">
          <div class="abt2-item">
            <div class="abt2-lbl">Kita sempurna untuk satu sama lain</div>
            <div class="abt2-txt">Mungkin tidak sempurna tapi di antara semua ketidaksempurnaan itu kita sempurna untuk satu sama lain.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Cintaku tidak akan pernah habis</div>
            <div class="abt2-txt">Mencintai kamu bukan sesuatu yang aku putuskan sekali. Itu sesuatu yang aku pilih setiap hari dengan penuh kesadaran.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Terima kasih sudah selalu ada</div>
            <div class="abt2-txt">Di saat aku paling membutuhkan seseorang kamu selalu ada. Itu bukan hal kecil. Itu adalah segalanya bagiku.</div>
          </div>
        </div>
        <div class="abt2-foot">Aku mencintaimu &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">5</div>
      </div>`,
      right: `<div class="pg mlv">
        <svg class="mlv-bg-l" viewBox="0 0 80 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M60 0 C55 60 45 120 40 180 C35 240 30 270 25 300"/>
          <path d="M45 80 C30 68 18 55 8 40"/>
          <path d="M38 160 C25 148 14 135 5 120"/>
          <ellipse cx="8" cy="40" rx="5" ry="8" fill="#a67856" opacity=".5"/>
          <ellipse cx="5" cy="120" rx="5" ry="7" fill="#a67856" opacity=".4"/>
        </svg>
        <svg class="mlv-bg-r" viewBox="0 0 80 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M60 0 C55 60 45 120 40 180 C35 240 30 270 25 300"/>
          <path d="M45 80 C30 68 18 55 8 40"/>
          <path d="M38 160 C25 148 14 135 5 120"/>
          <ellipse cx="8" cy="40" rx="5" ry="8" fill="#a67856" opacity=".5"/>
          <ellipse cx="5" cy="120" rx="5" ry="7" fill="#a67856" opacity=".4"/>
        </svg>
        <div class="mlv-arch">${img(p(2), "ph")}</div>
        <div class="mlv-div">
          <div class="mlv-div-line"></div>
          <div class="mlv-div-ico">♡</div>
          <div class="mlv-div-line"></div>
        </div>
        <div class="mlv-big">My Love</div>
        <div class="mlv-sub">Kamu adalah orang yang paling<br>aku pilih setiap saat</div>
        <div class="mlv-badge">${N2} &nbsp;milikku selamanya</div>
        <div class="pn" style="right:.65rem">6</div>
      </div>`,
    },

    {
      label: "Halaman 4",
      left: `<div class="pg gstrip">
        <svg class="gstrip-bg" viewBox="0 0 100 500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
          <path d="M80 0 C75 80 65 160 58 240 C50 320 45 400 40 500"/>
          <path d="M62 120 C45 108 30 95 18 80"/>
          <path d="M55 220 C70 208 82 195 90 180"/>
          <path d="M50 320 C35 308 22 295 12 280"/>
          <ellipse cx="18" cy="80" rx="5" ry="8" fill="#fff" opacity=".3"/>
          <ellipse cx="90" cy="180" rx="5" ry="7" fill="#fff" opacity=".3"/>
          <ellipse cx="12" cy="280" rx="5" ry="7" fill="#fff" opacity=".25"/>
        </svg>
        <div class="gstrip-title">Momen Kita ♡</div>
        <div class="gstrip-film">
          ${[6, 7, 8, 9].map((i) => `<div class="gstrip-cell">${img(p(i), "ph")}</div>`).join("")}
        </div>
        <div class="gstrip-note">Setiap gambar menyimpan cerita kita</div>
        <div class="pn" style="left:.65rem;color:rgba(200,160,80,.25)">7</div>
      </div>`,
      right: `<div class="pg mom">
        <svg class="mom-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M160 300 C150 240 130 180 120 120 C110 60 105 20 100 0"/>
          <path d="M125 180 C105 168 88 155 72 140"/>
          <path d="M118 240 C138 228 155 215 168 200"/>
          <ellipse cx="72" cy="140" rx="5" ry="8" fill="#a67856" opacity=".4"/>
          <ellipse cx="168" cy="200" rx="5" ry="7" fill="#a67856" opacity=".35"/>
        </svg>
        <div class="mom-head">Bersama Kamu ♡</div>
        <div class="mom-grid">
          <div class="mom-cell tall">${img(p(3), "ph")}</div>
          <div class="mom-cell" style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.52rem;padding:.3rem;text-align:center">Tawa kita yang paling aku rindukan</div>
          <div class="mom-cell" style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.5rem;padding:.3rem;text-align:center;color:var(--brown2)">Cerita kita ♡</div>
        </div>
        <div class="mom-foot">Tiap detik bersamamu adalah hadiah ♡</div>
        <div class="pn" style="right:.65rem">8</div>
      </div>`,
    },

    {
      label: "Halaman 5",
      left: `<div class="pg sng">
        <svg class="sng-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M20 0 C30 60 50 120 60 180 C70 240 75 270 80 300"/>
          <path d="M55 100 C75 88 90 75 102 60"/>
          <path d="M62 170 C42 158 28 145 18 130"/>
          <ellipse cx="102" cy="60" rx="6" ry="9" fill="#a67856" opacity=".4"/>
          <ellipse cx="18" cy="130" rx="5" ry="8" fill="#a67856" opacity=".35"/>
        </svg>
        <div class="sng-disc"></div>
        <div class="sng-tag">✦ Lagu kita</div>
        <div class="sng-title">Lagu Kita</div>
        <div class="sng-artist">Yang selalu bikin rindu</div>
        <div class="sng-wave">${bars}</div>
        <div class="sng-list">
          ${[
            "Lagu yang pertama kita dengar bersama",
            "Lagu yang selalu mengingatkanku padamu",
            "Lagu yang kita nyanyikan saat perjalanan",
            "Lagu yang jadi milik kita berdua",
          ]
            .map(
              (s, i) =>
                `<div class="sng-item${i === 0 ? " on" : ""}"><div class="sng-dot"></div>${s}</div>`,
            )
            .join("")}
        </div>
        <div class="pn" style="left:.65rem">9</div>
      </div>`,
      right: `<div class="pg lnv">
        <svg class="lnv-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
          <path d="M50 300 C60 240 78 180 88 120 C98 60 95 20 100 0"/>
          <path d="M85 160 C105 148 120 135 132 120"/>
          <path d="M78 220 C58 208 42 195 30 180"/>
          <ellipse cx="132" cy="120" rx="5" ry="8" fill="#fff" opacity=".3"/>
          <ellipse cx="30" cy="180" rx="5" ry="7" fill="#fff" opacity=".25"/>
        </svg>
        <div class="lnv-head">Love Notes For You ♡</div>
        <div class="lnv-grid">
          ${LOVE_NOTES.map(
            (n) => `<div class="lnv-card">
            <div class="lnv-n">Note ${n.num}</div>
            <div class="lnv-txt">${n.txt}</div>
            <div class="lnv-sig">${n.sig} ${N1}</div>
          </div>`,
          ).join("")}
        </div>
        <div class="lnv-foot">Karena kamu layak tahu betapa berartinya kamu ♡</div>
        <div class="pn" style="right:.65rem;color:rgba(200,160,80,.3)">10</div>
      </div>`,
    },

    {
      label: "Halaman 6",
      left: `<div class="pg tiv">
        <div class="tiv-corner-tl"></div>
        <div class="tiv-corner-br"></div>
        <svg class="tiv-bg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="1" stroke-linecap="round">
          <path d="M160 0 C150 60 130 120 120 180 C110 240 105 270 100 300"/>
          <path d="M125 100 C145 88 158 75 168 58"/>
          <path d="M118 180 C98 168 82 155 68 140"/>
          <ellipse cx="168" cy="58" rx="6" ry="9" fill="#a67856" opacity=".5"/>
          <ellipse cx="68" cy="140" rx="5" ry="8" fill="#a67856" opacity=".4"/>
        </svg>
        <div class="tiv-head">Hal yang Aku Cintai dari Kamu</div>
        <div class="tiv-list">
          ${THINGS.map((t, i) => `<div class="tv"><span class="tv-n">${i + 1}</span><span>${t}</span></div>`).join("")}
        </div>
        <div class="tiv-foot">Dan masih banyak lagi &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">11</div>
      </div>`,
      right: `<div class="pg qpg">
        <svg class="qpg-bg-tl" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="0.8" stroke-linecap="round">
          <path d="M5 5 C5 5 25 8 35 20 C45 32 42 50 50 60 C58 70 72 72 75 75"/>
          <path d="M5 5 C10 15 8 25 15 32"/>
          <path d="M35 20 C40 15 48 14 55 18"/>
          <ellipse cx="5" cy="5" rx="4" ry="6" fill="#a67856" opacity=".5"/>
          <ellipse cx="55" cy="18" rx="3" ry="5" fill="#a67856" opacity=".4"/>
        </svg>
        <svg class="qpg-bg-br" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="0.8" stroke-linecap="round">
          <path d="M5 5 C5 5 25 8 35 20 C45 32 42 50 50 60 C58 70 72 72 75 75"/>
          <path d="M5 5 C10 15 8 25 15 32"/>
          <path d="M35 20 C40 15 48 14 55 18"/>
          <ellipse cx="5" cy="5" rx="4" ry="6" fill="#a67856" opacity=".5"/>
          <ellipse cx="55" cy="18" rx="3" ry="5" fill="#a67856" opacity=".4"/>
        </svg>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Cinta bukan hanya tentang perasaan yang menggebu. Ini tentang memilih untuk tetap ada di hari biasa di momen yang sulit dan di semua cerita yang belum kita tulis bersama.</div>
        <div class="q-attr">${N1} &amp; ${N2}</div>
        <div class="q-sub">Always &amp; Forever ♡</div>
        <div class="pn" style="right:.65rem">12</div>
      </div>`,
    },

    {
      label: "Halaman 7",
      left: `<div class="pg qpg" style="background:var(--sand2)">
        <svg class="qpg-bg-tl" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="0.8" stroke-linecap="round">
          <path d="M5 5 C5 5 25 8 35 20 C45 32 42 50 50 60 C58 70 72 72 75 75"/>
          <path d="M5 5 C10 15 8 25 15 32"/>
          <path d="M35 20 C40 15 48 14 55 18"/>
          <ellipse cx="5" cy="5" rx="4" ry="6" fill="#a67856" opacity=".5"/>
        </svg>
        <svg class="qpg-bg-br" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5a3620" stroke-width="0.8" stroke-linecap="round">
          <path d="M5 5 C5 5 25 8 35 20 C45 32 42 50 50 60 C58 70 72 72 75 75"/>
          <path d="M5 5 C10 15 8 25 15 32"/>
          <path d="M35 20 C40 15 48 14 55 18"/>
          <ellipse cx="5" cy="5" rx="4" ry="6" fill="#a67856" opacity=".5"/>
        </svg>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Semua yang indah di dunia ini tidak ada yang melebihi indahnya menemukan seseorang yang membuat kamu merasa aman untuk menjadi dirimu sendiri.</div>
        <div class="q-attr">${N2}</div>
        <div class="q-sub">Ditulis dengan cinta &nbsp;${N1} ♡</div>
        <div class="pn" style="left:.65rem">13</div>
      </div>`,
      right: `<div class="pg bck">
        <svg class="bck-bg" viewBox="0 0 350 500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
          <path d="M175 0 C165 60 148 120 140 180 C132 240 128 300 120 360 C112 420 100 470 90 500"/>
          <path d="M140 120 C115 108 92 95 72 80"/>
          <path d="M132 200 C155 188 172 175 185 158"/>
          <path d="M125 280 C102 268 82 255 65 240"/>
          <ellipse cx="72" cy="80" rx="6" ry="9" fill="#fff" opacity=".3"/>
          <ellipse cx="185" cy="158" rx="5" ry="8" fill="#fff" opacity=".25"/>
          <ellipse cx="65" cy="240" rx="5" ry="7" fill="#fff" opacity=".2"/>
        </svg>
        <div class="bck-inner">
          <div class="bck-seal">♥</div>
          <div class="bck-names">${N1} &amp; ${N2}</div>
          <div class="bck-rule"></div>
          <div class="bck-vol">Anniversary Vol. 1<br>Our Love Story</div>
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
    fl.style.cssText = `top:0;bottom:0;left:calc(20px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 8px 8px 0;overflow:hidden;`;
    ff.style.transform = "";
    fb.style.transform = "rotateY(180deg)";
    document.getElementById("pageL").innerHTML = SPREADS[next].left;
  } else {
    ff.innerHTML = SPREADS[cur].left;
    fb.innerHTML = SPREADS[next].right;
    fl.style.cssText = `top:0;bottom:0;left:20px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:3px 0 0 8px;overflow:hidden;`;
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
      ? `-${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.32})`
      : `${mid * 10}px 0 ${mid * 18}px rgba(0,0,0,${mid * 0.32})`;
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
