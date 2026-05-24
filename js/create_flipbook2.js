const photos = Array(9).fill(null);
const grid = document.getElementById("photoGrid");

for (let i = 0; i < 9; i++) {
  const slot = document.createElement("div");
  slot.className = "photo-slot";
  slot.id = "slot" + i;
  slot.innerHTML = `
    <input type="file" accept="image/*" onchange="handlePhoto(event,${i})">
    <img id="ph${i}" alt="">
    <div class="slot-label" id="lbl${i}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a6b49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <span class="slot-num">${i + 1}</span>
    </div>
    <button class="slot-rm" id="rm${i}" onclick="removePhoto(event,${i})">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  grid.appendChild(slot);
}

function handlePhoto(e, i) {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    photos[i] = ev.target.result;
    const img = document.getElementById("ph" + i);
    img.src = ev.target.result;
    img.style.display = "block";
    document.getElementById("lbl" + i).style.display = "none";
    const rm = document.getElementById("rm" + i);
    rm.classList.add("visible");
    updateCount();
  };
  r.readAsDataURL(f);
}

function removePhoto(e, i) {
  e.stopPropagation();
  e.preventDefault();
  photos[i] = null;
  const img = document.getElementById("ph" + i);
  img.style.display = "none";
  img.src = "";
  document.getElementById("lbl" + i).style.display = "flex";
  document.getElementById("rm" + i).classList.remove("visible");
  updateCount();
}

function updateCount() {
  document.getElementById("pcVal").textContent = photos.filter(Boolean).length;
}

let coverData = null;

function handleCover(e) {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    coverData = ev.target.result;
    const img = document.getElementById("coverImg");
    img.src = ev.target.result;
    img.style.display = "block";
    document.getElementById("coverPlaceholder").style.display = "none";
    const mi = document.getElementById("miniCoverImg");
    mi.src = ev.target.result;
    mi.style.display = "block";
    document.getElementById("miniPh").style.display = "none";
  };
  r.readAsDataURL(f);
}

function updatePreview() {
  const n1 = document.getElementById("name1").value || "Nama";
  const n2 = document.getElementById("name2").value || "Nama";
  document.getElementById("miniNames").innerHTML = n1 + " &hearts; " + n2;
}

function saveData() {
  const data = {
    name1: document.getElementById("name1").value || "Nama",
    name2: document.getElementById("name2").value || "Nama",
    photos: photos,
    cover: coverData,
    createdAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem("dumpitData2", JSON.stringify(data));
  } catch (e) {}
}