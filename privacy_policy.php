<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Privacy Policy</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0392b'/%3E%3Cstop offset='100%25' stop-color='%23f08080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='4' y='4' width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Crect x='10' y='10' width='14' height='20' rx='2' fill='white' opacity='.95'/%3E%3Crect x='12' y='14' width='10' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='17' width='8' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='20' width='9' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='12' y='23' width='6' height='1.5' rx='1' fill='%23c0392b' opacity='.5'/%3E%3Crect x='25' y='11' width='2' height='18' rx='1' fill='white' opacity='.4'/%3E%3Cpath d='M27 11 Q32 14 32 20 Q32 26 27 29' stroke='white' stroke-width='1.5' fill='none' opacity='.6' stroke-linecap='round'/%3E%3C/svg%3E" />

    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :root {
            --red-deep: #c0392b;
            --red-mid: #e05555;
            --red-light: #f08080;
            --white: #ffffff;
            --text-dark: #1a1a1a;
            --text-mid: #555555;
            --text-light: #888888;
            --bg-soft: #fdf6f5;
            --border-soft: rgba(192, 57, 43, 0.10);
            --shadow-card: 0 8px 40px rgba(192, 57, 43, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06);
            --radius-lg: 20px;
            --font-display: 'Playfair Display', serif;
            --font-body: 'Lato', sans-serif;
            --nav-h: 64px;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-body);
            background: var(--bg-soft);
            color: var(--text-dark);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            height: var(--nav-h);
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-soft);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5%;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
        }

        .logo-text {
            font-family: var(--font-display);
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--red-deep);
            letter-spacing: -0.5px;
        }

        .logo-icon {
            display: flex;
            align-items: center;
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            font-family: var(--font-body);
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--text-mid);
            text-decoration: none;
            letter-spacing: 0.3px;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--red-deep);
        }

        .legal-page {
            flex: 1;
            min-height: 100vh;
            background: linear-gradient(135deg, #fdf6f5 0%, #fce8e6 40%, #fdf6f5 100%);
            padding: calc(var(--nav-h) + 3rem) 5% 4rem;
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

        .footer {
            background: #1a0a09;
            color: #e8d5d3;
            padding: 3rem 5% 1.5rem;
        }

        .footer-top {
            display: flex;
            gap: 3rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
        }

        .footer-brand {
            flex: 1;
            min-width: 200px;
        }

        .footer-logo {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }

        .footer-logo .logo-text {
            color: #f08080;
        }

        .footer-tagline {
            font-size: 0.85rem;
            color: #9a7a78;
            line-height: 1.6;
        }

        .footer-links {
            display: flex;
            gap: 3rem;
            flex-wrap: wrap;
        }

        .footer-col h4 {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #f08080;
            margin-bottom: 1rem;
        }

        .footer-col ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }

        .footer-col a {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: #9a7a78;
            text-decoration: none;
            font-size: 0.88rem;
            transition: color 0.2s;
        }

        .footer-col a:hover {
            color: #f08080;
        }

        .footer-bottom {
            border-top: 1px solid rgba(240, 128, 128, 0.1);
            padding-top: 1.5rem;
            font-size: 0.82rem;
            color: #6a4a48;
            text-align: center;
        }

        .footer-bottom a {
            color: #f08080;
            text-decoration: none;
        }

        .footer-bottom a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            :root {
                --nav-h: 60px;
            }

            .navbar {
                padding: 0 4%;
            }

            .nav-links {
                gap: 1.2rem;
            }

            .nav-links a {
                font-size: 0.85rem;
            }

            .legal-page {
                padding: calc(var(--nav-h) + 2rem) 4% 3rem;
            }

            .legal-card {
                padding: 2rem 1.75rem;
                border-radius: 16px;
            }

            .legal-title {
                font-size: 1.6rem;
            }

            .footer-top {
                flex-direction: column;
                gap: 2rem;
            }

            .footer-links {
                gap: 2rem;
            }
        }

        @media (max-width: 480px) {
            :root {
                --nav-h: 56px;
            }

            .navbar {
                padding: 0 1rem;
            }

            .logo-text {
                font-size: 1.2rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .nav-links a {
                font-size: 0.8rem;
            }

            .legal-page {
                padding: calc(var(--nav-h) + 1.5rem) 1rem 2.5rem;
            }

            .legal-card {
                padding: 1.5rem 1.25rem;
                border-radius: 14px;
            }

            .legal-tag {
                font-size: 0.7rem;
                padding: 0.25rem 0.8rem;
            }

            .legal-title {
                font-size: 1.4rem;
                margin-bottom: 1.5rem;
            }

            .legal-block {
                margin-bottom: 1.2rem;
                padding-bottom: 1.2rem;
            }

            .legal-block p {
                font-size: 0.9rem;
                line-height: 1.7;
            }

            .legal-back {
                font-size: 0.82rem;
                margin-bottom: 1.5rem;
            }

            .footer {
                padding: 2.5rem 1rem 1.25rem;
            }

            .footer-links {
                flex-direction: column;
                gap: 1.5rem;
            }

            .footer-bottom {
                font-size: 0.78rem;
            }
        }

        @media (max-width: 360px) {
            .logo-text {
                font-size: 1.1rem;
            }

            .nav-links a {
                font-size: 0.75rem;
            }

            .legal-title {
                font-size: 1.25rem;
            }
        }
    </style>
</head>

<body>

    <nav class="navbar">
        <div class="nav-logo">
            <a href="index.php" class="logo-icon">
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
            </a>
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
            <h1 class="legal-title">Privacy Policy</h1>

            <div class="legal-block">
                <p>We value your privacy. This digital scrapbook website only collects basic information needed to provide our services, such as account data, uploaded content, and usage activity. Your personal data will not be sold or shared with third parties without permission, except when required by law.</p>
            </div>

            <div class="legal-block">
                <p>All uploaded photos, notes, and scrapbook content remain your property. We take reasonable steps to protect your data and maintain platform security.</p>
            </div>

            <div class="legal-block">
                <p>By using this website, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
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
                            <path d="M27 11 Q32 14 32 20 Q32 26 27 29" stroke="white" stroke-width="1.5" fill="none" opacity="0.6" stroke-linecap="round" />
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
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
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
            <p>© 2026 DumpIt. Made with love by <a href="https://github.com/nelifauziyah88" target="_blank">Neli Fauziyah</a>.</p>
        </div>
    </footer>

</body>

</html>