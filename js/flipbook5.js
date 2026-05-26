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

const SUNFLOWER_SVG = `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" fill="none">
  <g>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(0 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(22.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".7" transform="rotate(45 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(67.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".75" transform="rotate(90 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(112.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".7" transform="rotate(135 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(157.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".75" transform="rotate(180 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(202.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".7" transform="rotate(225 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(247.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".75" transform="rotate(270 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(292.5 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#f9d84a" opacity=".7" transform="rotate(315 80 80)"/>
    <ellipse cx="80" cy="18" rx="10" ry="18" fill="#d4a017" opacity=".8" transform="rotate(337.5 80 80)"/>
  </g>
  <circle cx="80" cy="80" r="28" fill="#3d2200"/>
  <circle cx="80" cy="80" r="22" fill="#2a1600"/>
  <g fill="#d4a017" opacity=".3">
    <circle cx="72" cy="72" r="2.5"/>
    <circle cx="80" cy="69" r="2.5"/>
    <circle cx="88" cy="72" r="2.5"/>
    <circle cx="91" cy="80" r="2.5"/>
    <circle cx="88" cy="88" r="2.5"/>
    <circle cx="80" cy="91" r="2.5"/>
    <circle cx="72" cy="88" r="2.5"/>
    <circle cx="69" cy="80" r="2.5"/>
    <circle cx="80" cy="80" r="2.5"/>
  </g>
</svg>`;

const DUCK_SVG = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="40" cy="52" rx="24" ry="16" fill="#f9d84a"/>
  <ellipse cx="40" cy="52" rx="24" ry="16" fill="#d4a017" opacity=".3"/>
  <circle cx="52" cy="38" r="14" fill="#f9d84a"/>
  <circle cx="52" cy="38" r="14" fill="#f5e8a0" opacity=".4"/>
  <path d="M64 36 Q72 32 70 40 Q68 44 62 42" fill="#d4a017"/>
  <circle cx="57" cy="34" r="2.5" fill="#2a1f00"/>
  <circle cx="58" cy="33" r="1" fill="#fff" opacity=".6"/>
  <path d="M22 62 Q18 68 26 66" fill="#d4a017"/>
  <path d="M30 62 Q26 68 34 66" fill="#d4a017"/>
  <path d="M38 56 Q42 64 36 62" fill="#c8920a" opacity=".6"/>
</svg>`;

const DUCK_SMALL = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <ellipse cx="20" cy="27" rx="12" ry="8" fill="#f9d84a"/>
  <circle cx="26" cy="19" r="7" fill="#f9d84a"/>
  <path d="M32 18 Q36 16 35 20 Q34 22 31 21" fill="#d4a017"/>
  <circle cx="28.5" cy="17" r="1.5" fill="#2a1f00"/>
  <path d="M11 31 Q9 34 13 33" fill="#d4a017"/>
  <path d="M15 31 Q13 34 17 33" fill="#d4a017"/>
</svg>`;

const SUNBURST_BG = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(150,150)" fill="none" stroke="#d4a017" stroke-width="0.8">
    <line x1="0" y1="-140" x2="0" y2="140"/>
    <line x1="-140" y1="0" x2="140" y2="0"/>
    <line x1="-99" y1="-99" x2="99" y2="99"/>
    <line x1="99" y1="-99" x2="-99" y2="99"/>
    <line x1="-53" y1="-128" x2="53" y2="128"/>
    <line x1="53" y1="-128" x2="-53" y2="128"/>
    <line x1="-128" y1="-53" x2="128" y2="53"/>
    <line x1="128" y1="-53" x2="-128" y2="53"/>
    <circle cx="0" cy="0" r="40" opacity=".5"/>
    <circle cx="0" cy="0" r="80" opacity=".3"/>
    <circle cx="0" cy="0" r="120" opacity=".2"/>
  </g>
</svg>`;

const LETTER = `Kepada ${N2} yang selalu menjadi alasan aku tersenyum setiap pagi

Ada banyak hal yang tidak mudah aku katakan dengan lantang, tapi selalu terasa jelas di dada

Kamu adalah jenis kehadiran yang tidak perlu aku jelaskan kepada siapapun. Rasanya sudah cukup hanya dengan tahu bahwa kamu ada di sana, di ujung hari yang panjang, menunggu dengan hangat yang khas milikmu

Aku tidak tahu persis kapan aku mulai bergantung pada tawamu, pada cara kamu mengucapkan namaku, pada ketenangan yang datang bersamamu. Yang aku tahu hanyalah bahwa hari tanpamu terasa tidak lengkap

Maka izinkan aku untuk terus memilihmu, setiap hari, tanpa syarat`;

const THINGS = [
  "Senyummu yang muncul tanpa kamu sadari",
  "Cara kamu mengingat hal kecil yang aku ceritakan",
  "Suara tawamu yang selalu melegakan",
  "Kehangatan yang kamu bawa tanpa usaha",
  "Cara kamu hadir penuh di setiap percakapan",
  "Ketenangan yang datang saat kamu di dekatku",
  "Perhatianmu yang tidak pernah setengah-setengah",
  "Cara kamu menyebut namaku dengan lembut",
  "Kepercayaanmu yang aku jaga seperti milikku sendiri",
  "Cara kamu ada. Itu saja sudah lebih dari segalanya",
];

const LOVE_NOTES = [
  {num:"I",txt:"Kamu bukan kebetulan yang datang tanpa tujuan. Kamu adalah hadiah yang aku terima dengan tangan terbuka dan hati penuh syukur.",sig:"♡"},
  {num:"II",txt:"Mencintaimu bukan soal perasaan yang selalu besar dan dramatis. Ini soal memilih tetap ada, bahkan di hari yang biasa sekalipun.",sig:"♡"},
  {num:"III",txt:"Di antara semua jalan yang bisa aku pilih, jalan yang membawaku ke kamu adalah yang paling tidak pernah aku sesali.",sig:"♡"},
  {num:"IV",txt:"Kamu bukan sekadar tempat aku pulang. Kamu adalah alasan aku menemukan arti dari kata rumah itu sendiri.",sig:"♡"},
  {num:"V",txt:"Hari yang biasa menjadi istimewa bukan karena kejadian besar, tapi karena ada kamu yang hadir di dalamnya.",sig:"♡"},
  {num:"VI",txt:"Kalau waktu bisa diputar ulang, aku tidak akan mengubah apapun selama kamu tetap ada di akhir ceritanya.",sig:"♡"},
];

const bars = Array.from({length:28},(_,i)=>{
  const h=[10,16,8,20,14,9,22,13,18,7,17,24,9,15,20,5,17,11,22,13,7,19,15,9,20,13,17,7][i]||10;
  const on=i>=8&&i<=16;
  return `<div class="sng-bar${on?" on":""}" style="height:${h}px"></div>`;
}).join("");

function buildSpreads() {
  const coverSrc = COVER || p(0);
  return [
    {
      label:"Halaman 1",
      left:`<div class="pg cov">
        <div class="cov-sunburst">${SUNBURST_BG}</div>
        <div class="cov-inner">
          <div class="cov-wreath">
            <div class="cov-wreath-svg">${SUNFLOWER_SVG}</div>
            <div class="cov-photo">${img(coverSrc,"ph")}</div>
          </div>
          <div class="cov-line"></div>
          <div class="cov-names">${N1} &amp; ${N2}</div>
          <div class="cov-sub">Anniversary Vol. 1 &nbsp;·&nbsp; Our Story</div>
          <div class="cov-duck">${DUCK_SMALL}</div>
        </div>
      </div>`,
      right:`<div class="pg ltr">
        <div class="ltr-grid"></div>
        <div class="ltr-sun">${SUNFLOWER_SVG}</div>
        <div class="ltr-head">Sepucuk Surat</div>
        <div class="ltr-to">Kepada: ${N2}</div>
        <div class="ltr-to">Dari: ${N1}</div>
        <div class="ltr-body">${LETTER}</div>
        <div class="ltr-sig">Selalu milikmu &nbsp;${N1} ♡</div>
        <div class="pn" style="left:.7rem">2</div>
      </div>`,
    },
    {
      label:"Halaman 2",
      left:`<div class="pg abt">
        <div class="abt-tex"></div>
        <div class="abt-tag">✦ The one I love</div>
        <div class="abt-name">${N2}</div>
        <div class="abt-photo">${img(p(1),"ph")}</div>
        <div class="abt-rows">
          <div class="abt-row"><div class="abt-lbl">Nama panggilanku</div><div class="abt-val">Sayang &nbsp;·&nbsp; cintaku &nbsp;·&nbsp; rumahku</div></div>
          <div class="abt-row"><div class="abt-lbl">Yang paling aku suka</div><div class="abt-val">Cara dia ada tanpa syarat, tanpa hitung-hitungan</div></div>
          <div class="abt-row"><div class="abt-lbl">Satu kata untuknya</div><div class="abt-val">Segalanya</div></div>
        </div>
        <div class="pn" style="left:.65rem;color:rgba(42,31,0,.3)">3</div>
      </div>`,
      right:`<div class="pg polar">
        <div class="polar-sun">${SUNFLOWER_SVG}</div>
        <div class="polar-title">Kenangan Kita ♡</div>
        <div class="polar-grid">
          ${[2,3,4,5].map((i,idx)=>{
            const caps=["awal semuanya","momen kita","cerita kita","bersama ♡"];
            return `<div class="polar-frame">${img(p(i),"ph")}<div class="polar-cap">${caps[idx]}</div></div>`;
          }).join("")}
        </div>
        <div class="pn" style="right:.65rem">4</div>
      </div>`,
    },
    {
      label:"Halaman 3",
      left:`<div class="pg abt2">
        <div class="abt2-dot-tl">${SUNFLOWER_SVG}</div>
        <div class="abt2-dot-br">${SUNFLOWER_SVG}</div>
        <div class="abt2-head">Tentang kamu &nbsp;${N2} ♡</div>
        <div class="abt2-items">
          <div class="abt2-item">
            <div class="abt2-lbl">Kita sempurna untuk satu sama lain</div>
            <div class="abt2-txt">Mungkin tidak sempurna, tapi di antara semua ketidaksempurnaan itu, kita sempurna untuk satu sama lain.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Cintaku tidak akan pernah habis</div>
            <div class="abt2-txt">Mencintai kamu bukan sesuatu yang aku putuskan sekali, itu adalah sesuatu yang aku pilih setiap hari dengan penuh kesadaran.</div>
          </div>
          <div class="abt2-item">
            <div class="abt2-lbl">Terima kasih sudah selalu ada</div>
            <div class="abt2-txt">Di saat aku paling membutuhkan seseorang, kamu selalu ada, dan itu bukan hal kecil, itu adalah segalanya bagiku.</div>
          </div>
        </div>
        <div class="abt2-foot">Aku mencintaimu &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">5</div>
      </div>`,
      right:`<div class="pg mlv">
        <svg class="mlv-pat-l" viewBox="0 0 80 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#d4a017" stroke-width="0.8" stroke-linecap="round"><path d="M60 0 C55 60 45 120 40 180 C35 240 30 270 25 300"/><path d="M45 80 C30 68 18 55 8 40"/><ellipse cx="8" cy="40" rx="5" ry="8" fill="#d4a017" opacity=".4"/></svg>
        <svg class="mlv-pat-r" viewBox="0 0 80 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#d4a017" stroke-width="0.8" stroke-linecap="round"><path d="M60 0 C55 60 45 120 40 180 C35 240 30 270 25 300"/><path d="M45 80 C30 68 18 55 8 40"/><ellipse cx="8" cy="40" rx="5" ry="8" fill="#d4a017" opacity=".4"/></svg>
        <div class="mlv-arch">${img(p(2),"ph")}</div>
        <div class="mlv-div"><div class="mlv-div-line"></div><div class="mlv-div-ico">🌻</div><div class="mlv-div-line"></div></div>
        <div class="mlv-big">My Love</div>
        <div class="mlv-sub">Kamu adalah orang yang paling<br>aku pilih setiap saat</div>
        <div class="mlv-badge">${N2} &nbsp;milikku selamanya</div>
        <div class="pn" style="right:.65rem">6</div>
      </div>`,
    },
    {
      label:"Halaman 4",
      left:`<div class="pg gstrip">
        <div class="gstrip-tex"></div>
        <div class="gstrip-title">Momen Kita ♡</div>
        <div class="gstrip-film">
          ${[6,7,8,9].map(i=>`<div class="gstrip-cell">${img(p(i),"ph")}</div>`).join("")}
        </div>
        <div class="gstrip-note">Setiap gambar menyimpan cerita kita</div>
        <div class="pn" style="left:.65rem;color:rgba(42,31,0,.25)">7</div>
      </div>`,
      right:`<div class="pg mom">
        <div class="mom-sun">${SUNFLOWER_SVG}</div>
        <div class="mom-head">Bersama Kamu ♡</div>
        <div class="mom-grid">
          <div class="mom-cell tall">${img(p(3),"ph")}</div>
          <div class="mom-cell" style="font-family:'Cormorant',serif;font-style:italic;font-size:.52rem;padding:.3rem;text-align:center">Tawa kita yang paling aku rindukan</div>
          <div class="mom-cell" style="font-family:'Cormorant',serif;font-style:italic;font-size:.5rem;padding:.3rem;text-align:center;color:var(--gold)">Cerita kita ♡</div>
        </div>
        <div class="mom-foot">Tiap detik bersamamu adalah hadiah ♡</div>
        <div class="pn" style="right:.65rem">8</div>
      </div>`,
    },
    {
      label:"Halaman 5",
      left:`<div class="pg sng">
        <div class="sng-sun">${SUNFLOWER_SVG}</div>
        <div class="sng-disc"></div>
        <div class="sng-tag">✦ Lagu kita</div>
        <div class="sng-title">Lagu Kita</div>
        <div class="sng-artist">Yang selalu bikin rindu</div>
        <div class="sng-wave">${bars}</div>
        <div class="sng-list">
          ${["Lagu yang pertama kita dengar bersama","Lagu yang selalu mengingatkanku padamu","Lagu yang kita nyanyikan saat perjalanan","Lagu yang jadi milik kita berdua"].map((s,i)=>`<div class="sng-item${i===0?" on":""}"><div class="sng-dot"></div>${s}</div>`).join("")}
        </div>
        <div class="pn" style="left:.65rem">9</div>
      </div>`,
      right:`<div class="pg lnv">
        <div class="lnv-tex"></div>
        <div class="lnv-head">Love Notes For You ♡</div>
        <div class="lnv-grid">
          ${LOVE_NOTES.map(n=>`<div class="lnv-card"><div class="lnv-n">Note ${n.num}</div><div class="lnv-txt">${n.txt}</div><div class="lnv-sig">${n.sig} ${N1}</div></div>`).join("")}
        </div>
        <div class="lnv-foot">Karena kamu layak tahu betapa berartinya kamu ♡</div>
        <div class="pn" style="right:.65rem;color:rgba(42,31,0,.3)">10</div>
      </div>`,
    },
    {
      label:"Halaman 6",
      left:`<div class="pg tiv">
        <div class="tiv-frame"></div>
        <div class="tiv-sun">${SUNFLOWER_SVG}</div>
        <div class="tiv-head">Hal yang Aku Cintai dari Kamu</div>
        <div class="tiv-list">
          ${THINGS.map((t,i)=>`<div class="tv"><span class="tv-n">${i+1}</span><span>${t}</span></div>`).join("")}
        </div>
        <div class="tiv-foot">Dan masih banyak lagi &nbsp;${N2} ♡</div>
        <div class="pn" style="left:.65rem">11</div>
      </div>`,
      right:`<div class="pg qpg">
        <div class="qpg-bg-tl">${SUNFLOWER_SVG}</div>
        <div class="qpg-bg-br">${SUNFLOWER_SVG}</div>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Cinta bukan hanya soal rasa yang meluap di dada. Ini soal memilih untuk tetap ada, di hari yang biasa, di momen yang sulit, dan di semua cerita yang belum kita tulis bersama.</div>
        <div class="q-attr">${N1} &amp; ${N2}</div>
        <div class="q-sub">Always &amp; Forever ♡</div>
        <div class="pn" style="right:.65rem">12</div>
      </div>`,
    },
    {
      label:"Halaman 7",
      left:`<div class="pg qpg" style="background:var(--parch)">
        <div class="qpg-bg-tl">${SUNFLOWER_SVG}</div>
        <div class="qpg-bg-br">${SUNFLOWER_SVG}</div>
        <div class="qpg-border"></div>
        <div class="q-mark">"</div>
        <div class="q-txt">Di antara semua yang pernah aku temukan di dunia ini, tidak ada yang lebih berharga dari seseorang yang membuat aku merasa aman, cukup, dan dicintai apa adanya.</div>
        <div class="q-attr">${N2}</div>
        <div class="q-sub">Ditulis dengan cinta &nbsp;${N1} ♡</div>
        <div class="pn" style="left:.65rem">13</div>
      </div>`,
      right:`<div class="pg bck">
        <div class="bck-tex"></div>
        <div class="bck-inner">
          <div class="bck-duck">${DUCK_SVG}</div>
          <div class="bck-names">${N1} &amp; ${N2}</div>
          <div class="bck-rule"></div>
          <div class="bck-vol">Anniversary Vol. 1<br>Our Love Story</div>
          <div class="bck-brand">DumpIt &nbsp;·&nbsp; kenangan indahmu tersimpan selamanya</div>
        </div>
      </div>`,
    },
  ];
}

let SPREADS=[],cur=0,flipping=false;
const FLIP_MS=460;

function renderSpread(idx){
  document.getElementById("pageL").innerHTML=SPREADS[idx].left;
  document.getElementById("pageR").innerHTML=SPREADS[idx].right;
  document.getElementById("pageInd").textContent=idx+1+" / "+SPREADS.length;
  document.getElementById("progFill").style.width=((idx+1)/SPREADS.length)*100+"%";
  updateThumbs();
}

function flipTo(next,forward){
  if(flipping||next<0||next>=SPREADS.length)return;
  flipping=true;
  const fl=document.getElementById("flipLayer");
  const ff=document.getElementById("flipFront");
  const fb=document.getElementById("flipBack");
  if(forward){
    ff.innerHTML=SPREADS[cur].right;
    fb.innerHTML=SPREADS[next].left;
    fl.style.cssText=`top:0;bottom:0;left:calc(22px + 50%);right:0;transform-origin:left center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:0 10px 10px 0;overflow:hidden;`;
    ff.style.transform="";
    fb.style.transform="rotateY(180deg)";
    document.getElementById("pageL").innerHTML=SPREADS[next].left;
  }else{
    ff.innerHTML=SPREADS[cur].left;
    fb.innerHTML=SPREADS[next].right;
    fl.style.cssText=`top:0;bottom:0;left:22px;right:calc(50%);transform-origin:right center;transform:perspective(1400px) rotateY(0deg);backface-visibility:hidden;z-index:10;border-radius:4px 0 0 10px;overflow:hidden;`;
    ff.style.transform="";
    fb.style.transform="rotateY(-180deg)";
    document.getElementById("pageR").innerHTML=SPREADS[next].right;
  }
  let start=null;
  requestAnimationFrame(function step(ts){
    if(!start)start=ts;
    const t=Math.min((ts-start)/FLIP_MS,1);
    const e=t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
    const deg=forward?-180*e:180*e;
    fl.style.transform=`perspective(1400px) rotateY(${deg}deg)`;
    const mid=Math.sin(t*Math.PI);
    fl.style.boxShadow=forward?`-${mid*10}px 0 ${mid*18}px rgba(0,0,0,${mid*0.28})`:`${mid*10}px 0 ${mid*18}px rgba(0,0,0,${mid*0.28})`;
    if(t<1){requestAnimationFrame(step);}
    else{
      cur=next;
      renderSpread(cur);
      fl.style.transform="";
      fl.style.boxShadow="";
      fl.innerHTML='<div id="flipFront"></div><div id="flipBack"></div>';
      flipping=false;
    }
  });
}

function goNext(){flipTo(cur+1,true)}
function goPrev(){flipTo(cur-1,false)}
function goTo(i){if(i!==cur)flipTo(i,i>cur)}

let drag=null,dragged=false;
const book=document.getElementById("book");

function onDown(e){drag={x:e.touches?e.touches[0].clientX:e.clientX};dragged=false}
function onMove(e){if(!drag)return;if(Math.abs((e.touches?e.touches[0].clientX:e.clientX)-drag.x)>8)dragged=true}
function onUp(e){
  if(!drag)return;
  const dx=(e.changedTouches?e.changedTouches[0].clientX:e.clientX)-drag.x;
  drag=null;
  if(!dragged)return;
  if(dx<-30)goNext();
  else if(dx>30)goPrev();
}

book.addEventListener("touchstart",onDown,{passive:true});
book.addEventListener("touchmove",onMove,{passive:true});
book.addEventListener("touchend",onUp);
book.addEventListener("mousedown",onDown);
book.addEventListener("mousemove",onMove);
book.addEventListener("mouseup",onUp);
book.addEventListener("mouseleave",()=>{drag=null;dragged=false});

document.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight"||e.key==="PageDown")goNext();
  if(e.key==="ArrowLeft"||e.key==="PageUp")goPrev();
});

function buildThumbs(){
  const strip=document.getElementById("thumbs");
  strip.innerHTML="";
  SPREADS.forEach((sp,i)=>{
    const t=document.createElement("div");
    t.className="thumb"+(i===0?" active":"");
    t.textContent=i+1;
    t.title=sp.label;
    t.onclick=()=>goTo(i);
    strip.appendChild(t);
  });
}

function updateThumbs(){
  document.querySelectorAll(".thumb").forEach((t,i)=>t.classList.toggle("active",i===cur));
  const a=document.querySelector(".thumb.active");
  if(a)a.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"});
}

const hint=document.getElementById("swipeHint");
setTimeout(()=>hint.classList.add("hide"),2800);

SPREADS=buildSpreads();
buildThumbs();
renderSpread(0);