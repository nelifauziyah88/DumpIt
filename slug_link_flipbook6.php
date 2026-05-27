<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Link Siap</title>
    <link rel="icon" type="image/svg+xml"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="css/slug_flipbook6.css" />
</head>

<body>
    <nav>
        <a href="index.php" class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="24" height="24">
                <rect x="3" y="3" width="30" height="30" rx="7" fill="currentColor" />
                <rect x="8" y="8" width="13" height="19" rx="2" fill="white" opacity=".95" />
                <rect x="23" y="9" width="2" height="17" rx="1" fill="white" opacity=".35" />
                <path d="M25 9 Q30 13 30 18 Q30 23 25 27" stroke="white" stroke-width="1.4" fill="none" opacity=".55" stroke-linecap="round" />
            </svg>
            DumpIt
        </a>

        <a href="template.php" class="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6" />
            </svg>
            Kembali
        </a>
    </nav>

    <div class="steps">
        <div class="step done">
            <div class="step-n">1</div>
            <div class="step-label">Pilih Template</div>
        </div>

        <div class="step-line done"></div>

        <div class="step active">
            <div class="step-n">2</div>
            <div class="step-label">Generate Link</div>
        </div>

        <div class="step-line"></div>

        <div class="step">
            <div class="step-n">3</div>
            <div class="step-label">Selesai</div>
        </div>
    </div>

    <header class="header">
        <div class="header-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>

        <h1>Scrapbook Berhasil Dibuat</h1>
        <p>Link scrapbook kamu sudah siap untuk dibagikan</p>
    </header>

    <main class="main">
        <div class="name-display">
            <div class="pair" id="pairNames">Nama &hearts; Nama</div>
            <div class="sub">Above the Clouds Flipbook</div>
        </div>

        <div class="card">
            <div class="card-head">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <div class="card-title">Link Scrapbook</div>
            </div>

            <div class="card-body">
                <div class="link-row">
                    <div class="link-box" id="linkBox">dumpit.app/s/loading</div>

                    <button class="btn-copy" id="copyBtn" onclick="copyLink()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Salin
                    </button>
                </div>

                <div class="copy-note" id="copyNote">Link berhasil disalin</div>

                <div class="share-row">
                    <button class="share-btn wa" onclick="shareWA()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        WhatsApp
                    </button>

                    <button class="share-btn" onclick="shareOther()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                        Bagikan
                    </button>
                </div>
            </div>
        </div>

        <div class="nav-row">
            <a href="create_flipbook6.php" class="btn-sec">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                </svg>
                Edit Lagi
            </a>

            <a href="flipbook6.php" class="btn-open" id="flipbookBtn">
                Buka Flipbook
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </main>

    <div class="overlay" id="overlay">
        <div class="spinner"></div>
        <div class="overlay-text" id="overlayMsg">Menyusun halaman...</div>
        <div class="overlay-sub">Mohon tunggu sebentar</div>
    </div>

    <script src="js/slug_flipbook6.js"></script>
</body>

</html>