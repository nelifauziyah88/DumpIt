<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DumpIt</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap"
    rel="stylesheet">
  <link rel="icon" type="image/svg+xml"
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>

  <div class="flowers-bg" aria-hidden="true">
    <div class="flower f1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40">
        <g fill="#f9a8d4">
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(72 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(144 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(216 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(288 32 32)" />
        </g>
        <circle cx="32" cy="32" r="7" fill="#fbbf24" />
      </svg>
    </div>
    <div class="flower f2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40">
        <g fill="#f87171">
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(120 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(180 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(240 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(300 32 32)" />
        </g>
        <circle cx="32" cy="32" r="6" fill="#fde68a" />
      </svg>
    </div>
    <div class="flower f3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="36" height="36">
        <g fill="#fbcfe8">
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(72 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(144 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(216 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(288 32 32)" />
        </g>
        <circle cx="32" cy="32" r="7" fill="#fbbf24" />
      </svg>
    </div>
    <div class="flower f4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="38" height="38">
        <path d="M32 10 C20 10 14 22 18 34 C22 44 32 48 32 48 C32 48 42 44 46 34 C50 22 44 10 32 10Z" fill="#fb7185" />
        <rect x="30" y="46" width="4" height="14" rx="2" fill="#4ade80" />
        <path d="M30 54 C25 50 18 52 16 58" stroke="#4ade80" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    </div>
    <div class="flower f5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
        <g fill="#f9a8d4">
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(72 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(144 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(216 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(288 32 32)" />
        </g>
        <circle cx="32" cy="32" r="7" fill="#fde68a" />
      </svg>
    </div>
    <div class="flower f6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="42" height="42">
        <g fill="#f87171">
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(120 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(180 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(240 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(300 32 32)" />
        </g>
        <circle cx="32" cy="32" r="6" fill="#fde68a" />
      </svg>
    </div>
    <div class="flower f7">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="36" height="36">
        <path d="M32 10 C20 10 14 22 18 34 C22 44 32 48 32 48 C32 48 42 44 46 34 C50 22 44 10 32 10Z" fill="#c084fc" />
        <rect x="30" y="46" width="4" height="14" rx="2" fill="#4ade80" />
        <path d="M30 54 C25 50 18 52 16 58" stroke="#4ade80" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    </div>
    <div class="flower f8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="38" height="38">
        <g fill="#fda4af">
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(72 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(144 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(216 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(288 32 32)" />
        </g>
        <circle cx="32" cy="32" r="7" fill="#fbbf24" />
      </svg>
    </div>
    <div class="flower f9">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="34" height="34">
        <g fill="#f43f5e">
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(120 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(180 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(240 32 32)" />
          <ellipse cx="32" cy="14" rx="6" ry="13" transform="rotate(300 32 32)" />
        </g>
        <circle cx="32" cy="32" r="6" fill="#fde68a" />
      </svg>
    </div>
    <div class="flower f10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40">
        <g fill="#fbcfe8">
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(72 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(144 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(216 32 32)" />
          <ellipse cx="32" cy="14" rx="7" ry="13" transform="rotate(288 32 32)" />
        </g>
        <circle cx="32" cy="32" r="7" fill="#fbbf24" />
      </svg>
    </div>
  </div>

  <nav class="navbar">
    <a href="index.php" class="nav-logo">
      <span class="logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="36" height="36">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#c0392b" />
              <stop offset="100%" style="stop-color:#f08080" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logoGrad)" />
          <rect x="10" y="10" width="14" height="20" rx="2" fill="white" opacity="0.95" />
          <rect x="12" y="14" width="10" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
          <rect x="12" y="17" width="8" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
          <rect x="12" y="20" width="9" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
          <rect x="12" y="23" width="6" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
          <rect x="25" y="11" width="2" height="18" rx="1" fill="white" opacity="0.4" />
          <path d="M27 11 Q32 14 32 20 Q32 26 27 29" stroke="white" stroke-width="1.5" fill="none" opacity="0.6"
            stroke-linecap="round" />
        </svg>
      </span>
      <span class="logo-text">DumpIt</span>
    </a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#templates">Templates</a></li>
    </ul>
  </nav>

  <section class="hero">
    <div class="hero-badge">Anniversary Scrapbook</div>
    <h1 class="hero-title">
      Your memories,<br>
      <em>beautifully preserved.</em>
    </h1>
    <p class="hero-subtitle">
      Pick a template, upload your photos, and get a beautiful scrapbook you can share and save as PDF.
    </p>
    <a href="#templates" class="btn-primary">Browse Templates</a>
  </section>

  <section class="about" id="about">
    <div class="about-inner">
      <div class="section-label">About DumpIt</div>
      <h2 class="section-title">Made for moments that matter</h2>
      <p class="about-text">
        DumpIt was born from a love of preserving memories in a way that feels personal and beautiful.
        Simple, free, and made with love.
      </p>
      <div class="about-values">
        <div class="value"><strong>Simplicity</strong><span>No learning curve. Just upload and create.</span></div>
        <div class="value"><strong>Privacy</strong><span>Your photos, your memories. Always protected.</span></div>
        <div class="value"><strong>Free Forever</strong><span>No hidden fees. No subscriptions.</span></div>
      </div>
    </div>
  </section>

  <section class="templates" id="templates">
    <div class="section-label">Choose Your Template</div>
    <h2 class="section-title">9 Anniversary Templates</h2>
    <div class="templates-grid">

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 1</span>
          <div class="card-buttons">
            <a href="create.php?template=1" class="btn-use">Use Template</a>
            <a href="preview/template-1.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 2</span>
          <div class="card-buttons">
            <a href="create.php?template=2" class="btn-use">Use Template</a>
            <a href="preview/template-2.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 3</span>
          <div class="card-buttons">
            <a href="create.php?template=3" class="btn-use">Use Template</a>
            <a href="preview/template-3.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 4</span>
          <div class="card-buttons">
            <a href="create.php?template=4" class="btn-use">Use Template</a>
            <a href="preview/template-4.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 5</span>
          <div class="card-buttons">
            <a href="create.php?template=5" class="btn-use">Use Template</a>
            <a href="preview/template-5.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 6</span>
          <div class="card-buttons">
            <a href="create.php?template=6" class="btn-use">Use Template</a>
            <a href="preview/template-6.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 7</span>
          <div class="card-buttons">
            <a href="create.php?template=7" class="btn-use">Use Template</a>
            <a href="preview/template-7.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 8</span>
          <div class="card-buttons">
            <a href="create.php?template=8" class="btn-use">Use Template</a>
            <a href="preview/template-8.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-preview portrait"></div>
        <div class="card-info">
          <span class="card-name">Anniversary Vol. 9</span>
          <div class="card-buttons">
            <a href="create.php?template=9" class="btn-use">Use Template</a>
            <a href="preview/template-9.pdf" class="btn-preview" target="_blank">Preview</a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.php" class="footer-logo" style="text-decoration:none;">
          <span class="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="32" height="32">
              <defs>
                <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#e05555" />
                  <stop offset="100%" style="stop-color:#f9a8d4" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logoGradFooter)" />
              <rect x="10" y="10" width="14" height="20" rx="2" fill="white" opacity="0.95" />
              <rect x="12" y="14" width="10" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
              <rect x="12" y="17" width="8" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
              <rect x="12" y="20" width="9" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
              <rect x="12" y="23" width="6" height="1.5" rx="1" fill="#c0392b" opacity="0.5" />
              <rect x="25" y="11" width="2" height="18" rx="1" fill="white" opacity="0.4" />
              <path d="M27 11 Q32 14 32 20 Q32 26 27 29" stroke="white" stroke-width="1.5" fill="none" opacity="0.6"
                stroke-linecap="round" />
            </svg>
          </span>
          <span class="logo-text">DumpIt</span>
        </a>
        <p class="footer-tagline">Your memories, beautifully preserved.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/nelifauziyah88" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:nelifauziyahh@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                nelifauziyahh@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="terms_and_condition.php">Terms & Conditions</a></li>
            <li><a href="privacy_policy.php">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 DumpIt. Made with love by <a href="https://github.com/nelifauziyah88" target="_blank">Neli Fauziyah</a>.
      </p>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>

</html>