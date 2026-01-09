# 📘 راهنمای سریع شروع کار

این راهنمای کوتاه برای شخصی‌سازی سریع پورتفولیوی شما است.

---

## ✅ چک‌لیست شخصی‌سازی (15 دقیقه)

### 1️⃣ اطلاعات شخصی (5 دقیقه)

در **همه فایل‌های HTML** این موارد را جستجو و جایگزین کنید:

| جستجو کنید | جایگزین کنید با |
|------------|-----------------|
| `Mohammad Ali` | نام شما |
| `Ali.yusefi.ee@gmail.com` | ایمیل شما |
| `+93 780 661 347` | شماره تماس 1 |
| `+93 749 030 730` | شماره تماس 2 |
| `Kabul, Afghanistan` | شهر و کشور شما |
| `Ghor Province` | استان/ایالت شما |
| `linkedin.com/in/mohammad-ali-engineer` | لینک لینکدین شما |
| `github.com/mohammad-ali-portfolio` | لینک گیت‌هاب شما |

**نکته:** از قابلیت "Find & Replace" ویرایشگر خود استفاده کنید (Ctrl+H در VS Code)

### 2️⃣ فرم تماس (2 دقیقه)

1. به [Web3Forms.com](https://web3forms.com) بروید
2. ایمیل خود را وارد کنید و کلید دریافت کنید
3. فایل `contact.html` را باز کنید
4. خط 57 را پیدا کنید:
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
```
5. `YOUR_WEB3FORMS_ACCESS_KEY_HERE` را با کلید خود جایگزین کنید

✅ **تست کنید:** فرم را پر کنید و ایمیل دریافت کنید

### 3️⃣ تصاویر (3 دقیقه)

جایگزین کنید:
- `assets/profile.svg` → عکس پروفایل شما (PNG/JPG/SVG)
- `assets/resume.pdf` → فایل PDF رزومه شما
- `assets/project-placeholder.svg` → تصاویر پروژه‌های واقعی

**توصیه:**
- عکس پروفایل: 400x400px یا بیشتر
- فرمت: PNG با پس‌زمینه شفاف یا JPG

### 4️⃣ URLها برای GitHub Pages (2 دقیقه)

در این فایل‌ها `yourusername.github.io` را با URL خود جایگزین کنید:

- [ ] `sitemap.xml` (6 جا)
- [ ] `robots.txt` (1 جا)
- [ ] `index.html` meta tags (3 جا)
- [ ] سایر فایل‌های HTML (Open Graph tags)

### 5️⃣ محتوای شخصی (اختیاری)

اگر وقت دارید، این موارد را هم ویرایش کنید:
- [ ] متن hero section در `index.html`
- [ ] بخش "About" در `about.html`
- [ ] پروژه‌ها در `projects.html`
- [ ] مهارت‌ها در `skills.html`
- [ ] تجربه کاری در `resume.html`

---

## 🚀 آپلود سریع به GitHub (5 دقیقه)

### روش 1: GitHub Desktop (آسان‌ترین)

1. [GitHub Desktop](https://desktop.github.com/) را دانلود کنید
2. File → Add Local Repository → پوشه پروژه را انتخاب کنید
3. Publish repository → نام: `username.github.io`
4. ✅ کامل شد!

### روش 2: Git Command Line

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

### روش 3: آپلود مستقیم (برای مبتدی‌ها)

1. به [github.com/new](https://github.com/new) بروید
2. نام repository: `username.github.io`
3. Create repository
4. Upload files → همه فایل‌ها را drag & drop کنید
5. Commit changes

---

## ⚙️ فعال‌سازی GitHub Pages (2 دقیقه)

1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save
5. صبر کنید 2-5 دقیقه
6. ✅ سایت شما: `https://username.github.io`

---

## 🎨 تنظیمات پیشرفته (اختیاری)

### تغییر رنگ‌ها

فایل `css/variables.css` را باز کنید:

```css
:root {
  --color-primary: #7c3aed;      /* رنگ اصلی */
  --color-secondary: #3b82f6;    /* رنگ ثانویه */
  --color-accent: #ec4899;       /* رنگ accent */
}
```

**پیشنهادات رنگ:**
- 💜 بنفش (فعلی): `#7c3aed`
- 💙 آبی: `#2563eb`
- 💚 سبز: `#059669`
- 🧡 نارنجی: `#ea580c`
- ❤️ قرمز: `#dc2626`

### افزودن Google Analytics

1. به [analytics.google.com](https://analytics.google.com) بروید
2. ایجاد property جدید
3. کپی کردن Measurement ID (مثال: `G-XXXXXXXXXX`)
4. در `js/main.js` خط 322 را ویرایش کنید:
```javascript
gtag('config', 'G-XXXXXXXXXX'); // شناسه خود را بگذارید
```

---

## 🧪 تست قبل از انتشار

- [ ] تمام صفحات لود می‌شوند؟
- [ ] Navigation links کار می‌کنند؟
- [ ] فرم تماس ایمیل ارسال می‌کند؟
- [ ] Theme toggle (تم تاریک/روشن) کار می‌کند؟
- [ ] Language switcher (EN/FA) کار می‌کند؟
- [ ] روی موبایل درست نمایش داده می‌شود؟
- [ ] رزومه PDF دانلود می‌شود؟

**تست در مرورگرها:**
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

**تست در دستگاه‌ها:**
- Desktop (1920x1080) ✅
- Tablet (768px) ✅
- Mobile (375px) ✅

---

## 🐛 مشکلات رایج

### ❌ CSS لود نمی‌شود
**راه‌حل:** کش مرورگر را پاک کنید (Ctrl+Shift+R)

### ❌ فرم کار نمی‌کند
**راه‌حل:** Access Key را چک کنید و ایمیل Web3Forms را verify کنید

### ❌ صفحه 404 نشان می‌دهد
**راه‌حل:** Settings → Pages را چک کنید، 5 دقیقه صبر کنید

### ❌ تغییرات اعمال نمی‌شود
**راه‌حل:** 
1. Git push انجام شده؟
2. Actions tab سبز است?
3. Cache مرورگر را پاک کنید

---

## 📞 کمک نیاز دارید؟

1. **راهنمای کامل:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/en/pages)
3. **Web3Forms Help:** [web3forms.com/help](https://web3forms.com/help)

---

## ✨ ویژگی‌های خاص این پورتفولیو

✅ **PWA (Progressive Web App)** - قابل نصب روی موبایل
✅ **Offline Support** - با service worker
✅ **SEO Optimized** - موتورهای جستجو راحت پیدا می‌کنند
✅ **Glassmorphism Design** - دیزاین مدرن و حرفه‌ای
✅ **Bilingual** - انگلیسی + فارسی
✅ **Dark/Light Theme** - تم قابل تغییر
✅ **Responsive** - روی همه دستگاه‌ها کار می‌کند
✅ **Animations** - انیمیشن‌های نرم و زیبا
✅ **Fast Loading** - بهینه‌سازی شده برای سرعت
✅ **Accessible** - مطابق استانداردهای WCAG

---

## 🎉 آماده است!

پورتفولیوی شما آماده استفاده است. حالا:

1. ✅ در CV خود URL را اضافه کنید
2. ✅ در لینکدین share کنید
3. ✅ به دوستان و recruiters نشان دهید
4. ✅ منتظر فرصت‌های شغلی باشید!

---

**موفق باشید! 🚀**

ساخته شده با ❤️ برای Mohammad Ali
