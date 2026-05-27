<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
  <title>Flipbook</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="icon" type="image/svg+xml"
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />
  <link rel="stylesheet" href="css/flipbook2.css" />
</head>

<body>

  <div id="topbar">
    <a href="index.php" class="tb-logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="22" height="22">
        <rect x="3" y="3" width="30" height="30" rx="7" fill="#1a3d26" />
        <rect x="8" y="8" width="12" height="19" rx="2" fill="white" opacity=".95" />
        <rect x="22" y="9" width="2" height="17" rx="1" fill="white" opacity=".3" />
        <path d="M24 9 Q29 13 29 18 Q29 23 24 27" stroke="white" stroke-width="1.3" fill="none" opacity=".5" stroke-linecap="round" />
      </svg>
      DumpIt
    </a>
    <span id="pageInd">1 / 7</span>
    <a href="slug_link_flipbook2.php" class="tb-back">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Kembali
    </a>
  </div>

  <div id="prog">
    <div id="progFill" style="width:14.28%"></div>
  </div>

  <div id="stage">
    <div id="book">
      <div id="spread">
        <div id="spine">
          <div id="spineText">SWEET MEMORIES</div>
        </div>
        <div id="pageL" class="pg"></div>
        <div id="pageR" class="pg"></div>
      </div>
      <div id="flipLayer">
        <div id="flipFront"></div>
        <div id="flipBack"></div>
      </div>
    </div>
  </div>

  <div id="thumbs"></div>

  <div id="swipeHint">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    Geser untuk berpindah halaman
  </div>

  <script src="js/flipbook2.js"></script>
</body>

</html>