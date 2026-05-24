<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DumpIt</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />
    <link rel="stylesheet" href="css/style.css" />
    <style>
        .legal-page {
            min-height: 100vh;
            background: var(--grad-hero);
            padding: 7rem 5% 4rem;
            position: relative;
            z-index: 1;
        }

        .legal-card {
            max-width: 640px;
            margin: 0 auto;
            background: var(--white);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-card);
            padding: 3rem 3.5rem;
            border: 1px solid rgba(192, 57, 43, 0.08);
        }

        .legal-tag {
            display: inline-block;
            background: rgba(192, 57, 43, 0.10);
            color: var(--red-deep);
            border: 1px solid rgba(192, 57, 43, 0.20);
            border-radius: 50px;
            padding: 0.3rem 1rem;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .legal-title {
            font-family: var(--font-display);
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 2rem;
            line-height: 1.2;
        }

        .legal-block {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(192, 57, 43, 0.08);
        }

        .legal-block:last-of-type {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .legal-block p {
            font-size: 0.95rem;
            line-height: 1.8;
            color: var(--text-mid);
        }

        .legal-back {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            text-decoration: none;
            color: var(--red-deep);
            font-size: 0.88rem;
            font-weight: 700;
            margin-bottom: 2rem;
            opacity: 0.75;
            transition: opacity 0.2s;
        }

        .legal-back:hover {
            opacity: 1;
        }

        @media (max-width: 600px) {
            .legal-card {
                padding: 2rem 1.5rem;
            }

            .legal-title {
                font-size: 1.5rem;
            }
        }
    </style>
</head>

<body>

    <nav class="navbar">
        <div class="nav-logo">
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
                    <path d="M27 11 Q32 14 32 20 Q32 26 27 29" stroke="white" stroke-width="1.5" fill="none" opacity="0.6" stroke-linecap="round" />
                </svg>
            </span>
            <span class="logo-text">DumpIt</span>
        </div>
        <ul class="nav-links">
            <li><a href="index.php#about">About</a></li>
            <li><a href="index.php#templates">Templates</a></li>
        </ul>
    </nav>

    <div class="legal-page">
        <div class="legal-card">
            <a href="index.php" class="legal-back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back to Home
            </a>
            <div class="legal-tag">Legal</div>
            <h1 class="legal-title">Terms & Conditions</h1>

            <div class="legal-block">
                <p>By using this digital scrapbook website, you agree to use the platform responsibly and respectfully. Users are responsible for the content they upload, including photos, text, and other materials.</p>
            </div>

            <div class="legal-block">
                <p>You must not upload harmful, illegal, or copyrighted content without permission. We reserve the right to remove content or suspend accounts that violate these rules.</p>
            </div>

            <div class="legal-block">
                <p>All scrapbook content remains the property of the user. While we strive to keep the service available and secure, we cannot guarantee uninterrupted access or prevent all technical issues.</p>
            </div>

            <div class="legal-block">
                <p>By continuing to use this website, you agree to these Terms & Conditions.</p>
            </div>
        </div>
    </div>

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

</body>

</html>