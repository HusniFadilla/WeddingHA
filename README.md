# Amel & Husni Wedding Invitation — 13 fitur
1. Cover/amplop
2. Nama tamu otomatis: `?to=Nama%20Tamu`
3. Musik
4. Struktur siap animasi/petal
5. Countdown
6. Google Maps
7. RSVP ke Google Sheets
8. Guestbook
9. Google Calendar
10. Galeri responsive
11. WhatsApp RSVP/share
12. URL personal tamu
13. Siap Cloudflare Pages/GitHub Pages/Netlify + custom domain

## Setup
- Edit `script.js`: nomor WhatsApp, tanggal acara, dan `sheetsApiUrl`.
- Musik: masukkan `assets/music.mp3`.
- Google Sheets: buka `google-apps-script.gs`, isi SHEET_ID, deploy sebagai Web App (Execute as Me, access Anyone), lalu masukkan URL `/exec` ke `sheetsApiUrl`.
- Google Maps: ganti link dengan lokasi final.
- Untuk nama tamu: `https://domainkamu.com/?to=Bapak%20Ahmad`.

## Hosting
Cloudflare Pages paling saya rekomendasikan untuk website static ini; Netlify juga mudah untuk upload langsung.
