const photos = Array(9).fill(null);   
const photoFiles = Array(9).fill(null); 
const grid = document.getElementById('photoGrid');

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  toastText.textContent = message;

  toast.classList.remove("success", "error", "show");
  toast.classList.add(type);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

for (let i = 0; i < 9; i++) {
    const slot = document.createElement('div');
    slot.className = 'photo-slot';
    slot.id = 'slot' + i;
    slot.innerHTML = `
    <input type="file" accept="image/*" onchange="handlePhoto(event,${i})">
    <img id="ph${i}" alt="">
    <div class="slot-label" id="lbl${i}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="#8b1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="slot-num">${i + 1}</span>
    </div>
    <button class="slot-rm" id="rm${i}" onclick="removePhoto(event,${i})">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="3" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>`;
    grid.appendChild(slot);
}

function handlePhoto(e, i) {
    const f = e.target.files[0];
    if (!f) return;
    photoFiles[i] = f;
    const r = new FileReader();
    r.onload = (ev) => {
        photos[i] = ev.target.result;
        const img = document.getElementById('ph' + i);
        img.src = ev.target.result;
        img.style.display = 'block';
        document.getElementById('lbl' + i).style.display = 'none';
        document.getElementById('rm' + i).classList.add('visible');
        updateCount();
    };
    r.readAsDataURL(f);
}

function removePhoto(e, i) {
    e.stopPropagation();
    e.preventDefault();
    photos[i] = null;
    photoFiles[i] = null;
    const img = document.getElementById('ph' + i);
    img.style.display = 'none';
    img.src = '';
    document.getElementById('lbl' + i).style.display = 'flex';
    document.getElementById('rm' + i).classList.remove('visible');
    updateCount();
}

function updateCount() {
    document.getElementById('pcVal').textContent = photos.filter(Boolean).length;
}

let coverFile = null;
let coverData = null;

function handleCover(e) {
    const f = e.target.files[0];
    if (!f) return;
    coverFile = f;
    const r = new FileReader();
    r.onload = (ev) => {
        coverData = ev.target.result;
        const img = document.getElementById('coverImg');
        img.src = ev.target.result;
        img.style.display = 'block';
        document.getElementById('coverPlaceholder').style.display = 'none';
        const mi = document.getElementById('miniCoverImg');
        mi.src = ev.target.result;
        mi.style.display = 'block';
        document.getElementById('miniPh').style.display = 'none';
    };
    r.readAsDataURL(f);
}

function updatePreview() {
    const n1 = document.getElementById('name1').value || 'Nama';
    const n2 = document.getElementById('name2').value || 'Nama';
    document.getElementById('miniNames').innerHTML = n1 + ' &hearts; ' + n2;
}

async function saveData() {
    const nama_kamu     = document.getElementById('name1').value.trim();
    const nama_pasangan = document.getElementById('name2').value.trim();

    if (!nama_kamu || !nama_pasangan) {
        showToast('Nama kamu dan nama pasangan wajib diisi!', 'error');
        return false;
    }

    const totalFoto = photos.filter(Boolean).length;
    if (totalFoto === 0 && !coverData) {
        showToast('Upload minimal 1 foto untuk membuat scrapbook!', 'error');
        return false;
    }

    const btn = document.querySelector('.btn-create');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<span style="opacity:.7">Menyimpan...</span>`;
    btn.style.pointerEvents = 'none';

    const fd = new FormData();
    fd.append('nama_kamu',     nama_kamu);
    fd.append('nama_pasangan', nama_pasangan);
    fd.append("flipbook_file", "flipbook6.php");

    if (coverFile) {
        fd.append('cover', coverFile);
    }

    photoFiles.forEach((f) => {
        if (f) fd.append('photos[]', f);
    });

    try {
        const res  = await fetch('api/save_flipbook.php', { method: 'POST', body: fd });
        const data = await res.json();

        if (data.success) {
            localStorage.setItem('dumpitSlug', data.slug);
            localStorage.setItem('dumpitData', JSON.stringify({
                name1:  nama_kamu,
                name2:  nama_pasangan,
                slug:   data.slug,
                cover:  data.foto.cover  ? '/' + data.foto.cover  : coverData,
                photos: data.foto.photos
                    ? data.foto.photos.map(p => '/' + p)
                    : photos.filter(Boolean),
            }));

            window.location.href = 'slug_link_flipbook6.php?slug=' + data.slug;
        } else {
            showToast('Gagal menyimpan: ' + (data.message || 'Coba lagi'), 'error');
            btn.innerHTML = originalHTML;
            btn.style.pointerEvents = '';
        }
    } catch (err) {
      console.log(err);
        showToast('Terjadi kesalahan jaringan. Coba lagi.', 'error');
        btn.innerHTML = originalHTML;
        btn.style.pointerEvents = '';
    }

    return false;
}