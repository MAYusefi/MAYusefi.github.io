# ✅ چک‌لیست نهایی قبل از Deploy

## 📋 تست صفحات

### صفحه به صفحه:

#### ✅ index.html
- [ ] Hero section با typing animation
- [ ] Navigation links کار می‌کنند
- [ ] Theme toggle (dark/light)
- [ ] Language toggle (EN/FA)
- [ ] دکمه‌های CTA کار می‌کنند
- [ ] Animations smooth هستند
- [ ] Mobile responsive

#### ✅ about.html
- [ ] تصویر پروفایل لود می‌شود
- [ ] Education section کامل
- [ ] Languages progress bars
- [ ] Interests tags
- [ ] Navigation کار می‌کند
- [ ] Mobile responsive

#### ✅ resume.html
- [ ] Timeline نمایش درست
- [ ] تمام تجربیات کاری
- [ ] Education cards
- [ ] Download PDF button
- [ ] Mobile responsive

#### ✅ projects.html
- [ ] 6 پروژه نمایش داده می‌شود
- [ ] تصاویر placeholder
- [ ] Hover effects
- [ ] GitHub links (باید به‌روز شوند)
- [ ] Mobile responsive

#### ✅ skills.html
- [ ] تمام skill categories
- [ ] Progress bars انیمیت می‌شوند
- [ ] Operating systems grid
- [ ] Languages section
- [ ] Soft skills
- [ ] Mobile responsive

#### ✅ certificates.html
- [ ] 4 گواهینامه نمایش داده می‌شود
- [ ] تصاویر از پوشه certificats لود می‌شوند
- [ ] Click → Modal باز می‌شود
- [ ] Download button کار می‌کند
- [ ] ESC key → بستن modal
- [ ] Click outside → بستن modal
- [ ] Mobile responsive

#### ✅ contact.html
- [ ] Form fields کار می‌کنند
- [ ] Validation real-time
- [ ] Web3Forms access key تنظیم شده
- [ ] Submit → ایمیل ارسال می‌شود
- [ ] Contact info درست
- [ ] Social links کار می‌کنند
- [ ] Mobile responsive

#### ✅ 404.html
- [ ] صفحه خطا نمایش می‌شود
- [ ] دکمه‌های navigation
- [ ] Auto-redirect بعد از 10 ثانیه

---

## 🔧 تنظیمات فنی

### JavaScript:
- [ ] `js/main.js` - همه functions کار می‌کنند
- [ ] `js/translations.js` - ترجمه‌ها کامل
- [ ] Theme toggle → localStorage
- [ ] Language toggle → localStorage + RTL/LTR
- [ ] Scroll animations → Intersection Observer
- [ ] Form validation → real-time

### CSS:
- [ ] `css/variables.css` - design tokens
- [ ] `css/reset.css` - browser reset
- [ ] `css/animations.css` - keyframes
- [ ] `css/components.css` - UI components
- [ ] `css/layout.css` - structure
- [ ] همه در dark و light theme کار می‌کنند

### PWA:
- [ ] `manifest.json` - تنظیمات درست
- [ ] `sw.js` - Service Worker ثبت می‌شود
- [ ] Offline support کار می‌کند
- [ ] Cache strategy درست
- [ ] قابل نصب روی موبایل

### SEO:
- [ ] `sitemap.xml` - تمام صفحات
- [ ] `robots.txt` - تنظیمات درست
- [ ] Meta tags در همه صفحات
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] Alt text برای تصاویر

---

## ⚙️ شخصی‌سازی ضروری

### 🔴 حتماً باید تغییر کنند:

#### 1. Web3Forms Access Key
```html
<!-- در contact.html خط 57 -->
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
```
**چگونه:**
1. به [web3forms.com](https://web3forms.com) بروید
2. ایمیل خود را وارد کنید
3. Access Key را کپی کنید
4. در contact.html جایگزین کنید

#### 2. اطلاعات شخصی
در **تمام فایل‌های HTML** جستجو و جایگزین کنید:

| جستجو | جایگزین با |
|-------|-----------|
| `Mohammad Ali` | نام شما |
| `Ali.yusefi.ee@gmail.com` | ایمیل شما |
| `+93 780 661 347` | تلفن 1 |
| `+93 749 030 730` | تلفن 2 |
| `Kabul, Afghanistan` | شهر شما |
| `Ghor Province` | استان/منطقه شما |
| `linkedin.com/in/mohammad-ali-engineer` | لینک LinkedIn |
| `github.com/mohammad-ali-portfolio` | لینک GitHub |

#### 3. URLها
در این فایل‌ها `yourusername.github.io` را جایگزین کنید:
- `sitemap.xml` (6 مکان)
- `robots.txt` (1 مکان)
- `index.html` و سایر HTML files (meta tags)

#### 4. تصاویر
```
assets/profile.svg → عکس پروفایل شما (PNG/JPG/SVG)
assets/resume.pdf → فایل PDF رزومه شما
assets/project-placeholder.svg → تصاویر پروژه‌های واقعی
```

#### 5. Google Analytics (اختیاری)
```javascript
// در js/main.js خط 322
gtag('config', 'G-XXXXXXXXXX'); // شناسه خود را بگذارید
```

---

## 🧪 تست نهایی

### Browser Testing:
- [ ] Chrome (Windows)
- [ ] Firefox
- [ ] Edge
- [ ] Safari (اگر دسترسی دارید)

### Device Testing:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Functionality Testing:
- [ ] تمام لینک‌های internal
- [ ] تمام لینک‌های external
- [ ] Download buttons
- [ ] Form submission
- [ ] Theme toggle
- [ ] Language toggle
- [ ] Mobile menu
- [ ] Modal viewer (certificates)

### Performance Testing:
- [ ] Lighthouse score > 90
- [ ] Load time < 3s
- [ ] No console errors
- [ ] Images load properly
- [ ] Fonts load properly

---

## 📦 آماده‌سازی Deploy

### Git Repository:
```bash
# بررسی وضعیت
git status

# اضافه کردن فایل‌های جدید
git add .

# Commit با توضیح
git commit -m "Complete professional portfolio - Ready for production"

# Push به GitHub
git push origin main
```

### GitHub Pages:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save
5. صبر 2-5 دقیقه
6. بررسی: `https://username.github.io`

---

## 🔍 بررسی نهایی بعد از Deploy

### ✅ Checklist:
- [ ] سایت باز می‌شود: `https://username.github.io`
- [ ] HTTPS فعال است (GitHub Pages خودکار)
- [ ] تمام صفحات لود می‌شوند
- [ ] تمام تصاویر نمایش داده می‌شوند
- [ ] CSS و JS لود شده‌اند
- [ ] Theme toggle کار می‌کند
- [ ] Language toggle کار می‌کند
- [ ] Form ایمیل می‌فرستد
- [ ] Mobile responsive است
- [ ] No 404 errors

### Google Search Console:
1. به [search.google.com/search-console](https://search.google.com/search-console) بروید
2. Add Property → URL prefix
3. Verify ownership (HTML file upload)
4. Submit sitemap: `https://username.github.io/sitemap.xml`

### Analytics:
- [ ] Google Analytics نصب شده
- [ ] Page views ثبت می‌شوند
- [ ] Events track می‌شوند

---

## 🚀 Post-Deploy Tasks

### 1. Share & Promote:
- [ ] URL را در LinkedIn profile اضافه کنید
- [ ] URL را در رزومه قرار دهید
- [ ] Post در LinkedIn share کنید
- [ ] به recruiters ایمیل کنید

### 2. Monitor:
- [ ] Google Analytics روزانه
- [ ] Search Console هفتگی
- [ ] Core Web Vitals ماهانه
- [ ] Broken links ماهانه

### 3. Update Regularly:
- [ ] پروژه‌های جدید
- [ ] گواهینامه‌های جدید
- [ ] تجربه کاری جدید
- [ ] مهارت‌های جدید

---

## ⚠️ مشکلات رایج و حل‌ها

### مشکل: CSS لود نمی‌شود
**علت:** مسیر نسبی اشتباه
**حل:** 
```html
<!-- درست -->
<link rel="stylesheet" href="css/style.css">

<!-- اشتباه (در GitHub Pages) -->
<link rel="stylesheet" href="/css/style.css">
```

### مشکل: فرم کار نمی‌کند
**علت:** Web3Forms access key تنظیم نشده
**حل:** 
1. web3forms.com → Get key
2. در contact.html جایگزین کنید
3. ایمیل را verify کنید

### مشکل: تصاویر 404
**علت:** نام فایل یا مسیر اشتباه
**حل:**
1. بررسی نام فایل (case-sensitive)
2. بررسی مسیر (relative path)
3. F12 → Console → ارورها را ببینید

### مشکل: زبان تغییر نمی‌کند
**علت:** JavaScript لود نشده یا خطا دارد
**حل:**
1. F12 → Console → ارورها
2. بررسی `js/main.js` لود شده
3. Hard refresh: Ctrl+Shift+R

### مشکل: Deploy نمی‌شود
**علت:** GitHub Actions خطا دارد
**حل:**
1. Repository → Actions tab
2. بررسی logs
3. Fix errors و دوباره push

---

## 📊 Expected Results

بعد از Deploy موفق:

✅ **سایت زنده:** `https://username.github.io`
✅ **Lighthouse Score:** 95+
✅ **Mobile-Friendly:** Pass
✅ **SEO Ready:** Indexed by Google
✅ **Professional:** Ready for recruiters
✅ **Functional:** All features working
✅ **Fast:** < 3s load time
✅ **Secure:** HTTPS enabled

---

## 🎉 تبریک!

اگر تمام checklist ها ✅ شدند:

🚀 **پورتفولیوی شما Production Ready است!**

### مراحل بعدی:
1. ✅ Deploy کنید
2. ✅ در رزومه قرار دهید
3. ✅ به recruiters بفرستید
4. ✅ در LinkedIn share کنید
5. ✅ منتظر فرصت‌های شغلی باشید!

---

**موفق باشید! 🌟**

تاریخ: 2025-12-29
نسخه: 1.0 - Production Ready
