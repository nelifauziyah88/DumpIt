<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Buat Scrapbook</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="icon" type="image/svg+xml"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/create_flipbook5.css" />
</head>

<body>

    <nav>
        <a href="index.php" class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="28" height="28">
                <rect x="3" y="3" width="30" height="30" rx="7" fill="#d4a017" />
                <rect x="8" y="8" width="13" height="19" rx="2" fill="white" opacity=".95" />
                <rect x="10" y="12" width="9" height="1.4" rx="1" fill="#d4a017" opacity=".45" />
                <rect x="10" y="15" width="7" height="1.4" rx="1" fill="#d4a017" opacity=".45" />
                <rect x="10" y="18" width="8" height="1.4" rx="1" fill="#d4a017" opacity=".45" />
                <rect x="23" y="9" width="2" height="17" rx="1" fill="white" opacity=".35" />
                <path d="M25 9 Q30 13 30 18 Q30 23 25 27" stroke="white" stroke-width="1.4" fill="none" opacity=".55" stroke-linecap="round" />
            </svg>
            DumpIt
        </a>
        <a href="index.php" class="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6" />
            </svg>
            Kembali
        </a>
    </nav>

    <div class="steps">
        <div class="step active">
            <div class="step-n">1</div>
            <div class="step-label">Isi Data</div>
        </div>
        <div class="step-line"></div>
        <div class="step">
            <div class="step-n">2</div>
            <div class="step-label">Generate Link</div>
        </div>
        <div class="step-line"></div>
        <div class="step">
            <div class="step-n">3</div>
            <div class="step-label">Flipbook</div>
        </div>
    </div>

    <div class="header">
        <h1>Sunny Days Vol. 5</h1>
        <p>Isi nama & upload foto — semua teks sudah otomatis dari template</p>
    </div>

    <div class="main">
        <div class="form-col">

            <div class="tags">
                <div class="tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Sunny Days Vol. 5
                </div>
                <div class="tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                    20 Halaman
                </div>
                <div class="tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Teks Otomatis
                </div>
            </div>

            <div class="card">
                <div class="card-head">
                    <div class="card-num">1</div>
                    <div>
                        <div class="card-title">Nama Pasangan</div>
                        <div class="card-desc">Akan tampil di seluruh halaman scrapbook</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="form-group">
                            <label>Nama Kamu</label>
                            <input type="text" id="name1" placeholder="Nama kamu..." maxlength="20" oninput="updatePreview()">
                        </div>
                        <div class="form-group">
                            <label>Nama Pasangan</label>
                            <input type="text" id="name2" placeholder="Nama dia..." maxlength="20" oninput="updatePreview()">
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-head">
                    <div class="card-num">2</div>
                    <div>
                        <div class="card-title">Foto Cover</div>
                        <div class="card-desc">Foto utama untuk halaman pertama</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="cover-drop" id="coverDrop">
                        <input type="file" accept="image/*" onchange="handleCover(event)">
                        <img id="coverImg" alt="cover">
                        <div class="drop-label" id="coverPlaceholder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a017" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <div class="drop-text">Klik atau drag foto cover</div>
                            <div class="drop-hint">JPG, PNG — portrait direkomendasikan</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-head">
                    <div class="card-num">3</div>
                    <div>
                        <div class="card-title">Foto Kenangan</div>
                        <div class="card-desc">Upload hingga 9 foto — tersebar otomatis di halaman scrapbook</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="photo-grid" id="photoGrid"></div>
                </div>
            </div>

        </div>

        <div class="preview-col">
            <div class="preview-card">
                <div class="prev-head">
                    <div class="prev-title">Preview Cover</div>
                    <div class="prev-live">LIVE</div>
                </div>
                <div class="prev-body">
                    <div class="mini-book">
                        <div class="mini-frame" id="miniFrame">
                            <img id="miniCoverImg" alt="">
                            <svg xmlns="http://www.w3.org/2000/svg" id="miniPh" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                        <div class="mini-names" id="miniNames">Nama &hearts; Nama</div>
                        <div class="mini-sub">Sunny Days Vol. 5</div>
                    </div>
                    <div class="count-row">
                        <div class="count-lbl">Foto Terupload</div>
                        <div><span class="count-val" id="pcVal">0</span><span class="count-max"> / 9</span></div>
                    </div>
                </div>
            </div>

            <a href="slug_link_flipbook5.php" class="btn-create" onclick="saveData(); return true;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Buat Scrapbook
            </a>
            <div class="prev-note">Minimal 1 foto untuk membuat scrapbook.<br>Semua teks terisi otomatis dari template.</div>
        </div>

    </div>

    <script src="js/create_flipbook5.js"></script>
</body>

</html>