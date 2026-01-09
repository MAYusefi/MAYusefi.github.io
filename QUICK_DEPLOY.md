# 🚀 راهنمای سریع Deploy (10 دقیقه)

## ⚡ قبل از شروع - حتماً انجام دهید!

### 1️⃣ Web3Forms Setup (2 دقیقه)
```
1. به web3forms.com بروید
2. ایمیل خود را وارد کنید → دریافت Access Key
3. فایل contact.html را باز کنید
4. خط 57: value="YOUR_WEB3FORMS_ACCESS_KEY_HERE"
5. Access Key را جایگزین کنید
6. ذخیره کنید
```

### 2️⃣ اطلاعات شخصی (3 دقیقه)
```
Find & Replace در VS Code (Ctrl+Shift+H):

Mohammad Ali → [نام شما]
Ali.yusefi.ee@gmail.com → [ایمیل شما]
+93 780 661 347 → [تلفن شما]
linkedin.com/in/mohammad-ali-engineer → [لینک LinkedIn]
github.com/mohammad-ali-portfolio → [لینک GitHub]
```

### 3️⃣ تصاویر (2 دقیقه)
```
assets/profile.svg → عکس شما (PNG/JPG)
assets/resume.pdf → رزومه PDF شما
```

---

## 🎯 مرحله 1: ساخت Repository (2 دقیقه)

### روش A: Repository شخصی (پیشنهادی)
```
1. به github.com بروید
2. کلیک: New repository (دکمه +)
3. نام: username.github.io (username خودتان)
4. Public ✅
5. Create repository
```

**نتیجه:** URL شما: `https://username.github.io` ✨

### روش B: Repository پروژه
```
1. نام دلخواه: portfolio یا my-website
2. Public ✅
3. Create repository
```

**نتیجه:** URL شما: `https://username.github.io/portfolio`

---

## 📤 مرحله 2: آپلود کدها (3 دقیقه)

### روش 1: GitHub Desktop (آسان‌ترین)
```
1. دانلود GitHub Desktop از desktop.github.com
2. نصب و login
3. File → Add Local Repository
4. انتخاب پوشه پروژه
5. "Initialize Git Repository" اگر جدید است
6. Commit to main: "Initial commit"
7. Publish repository
8. نام repository را وارد کنید
9. Publish ✅
```

### روش 2: Git Command Line
```bash
# باز کردن Terminal در پوشه پروژه
cd path/to/portfolio

# مقداردهی اولیه Git
git init

# اضافه کردن همه فایل‌ها
git add .

# Commit اول
git commit -m "Professional portfolio - Ready for production"

# تغییر نام branch
git branch -M main

# اتصال به GitHub
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push کردن
git push -u origin main
```

### روش 3: آپلود مستقیم در GitHub
```
1. به repository بروید
2. Add file → Upload files
3. Drag & drop همه فایل‌ها و پوشه‌ها
4. Commit changes
```

---

## ⚙️ مرحله 3: فعال‌سازی GitHub Pages (1 دقیقه)

```
1. Repository → Settings (تب بالا)
2. از منوی چپ: Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save ✅
```

**✅ کار شما تمام است!**

صبر کنید 2-5 دقیقه...

---

## 🎉 بررسی Deploy

### بعد از 2-5 دقیقه:

1. **مراجعه به URL:**
   ```
   https://username.github.io
   ```

2. **چک کنید:**
   - ✅ سایت باز می‌شود
   - ✅ تمام صفحات کار می‌کنند
   - ✅ تصاویر نمایش داده می‌شوند
   - ✅ Theme toggle کار می‌کند
   - ✅ Language toggle کار می‌کند

3. **تست فرم:**
   - صفحه Contact
   - فرم را پر کنید
   - Submit
   - ایمیل دریافت کنید ✅

---

## 🔧 اگر مشکلی بود...

### سایت 404 نشان می‌دهد
```
راه‌حل:
1. Settings → Pages را دوباره چک کنید
2. Source: main / (root)
3. 5-10 دقیقه صبر کنید
4. Cache مرورگر را پاک کنید (Ctrl+Shift+Delete)
```

### CSS/JS لود نمی‌شود
```
راه‌حل:
1. F12 → Console → ارورها را ببینید
2. بررسی مسیرها (relative paths)
3. Hard refresh: Ctrl+Shift+R
```

### فرم کار نمی‌کند
```
راه‌حل:
1. Web3Forms access key درست است؟
2. در web3forms.com ایمیل verify شده؟
3. F12 → Network tab → ارور ببینید
```

---

## 🔄 آپدیت کردن سایت (آینده)

هر بار که تغییری دادید:

### با GitHub Desktop:
```
1. فایل‌ها را تغییر دهید
2. GitHub Desktop → Changes
3. Commit message بنویسید
4. Commit to main
5. Push origin
```

### با Command Line:
```bash
git add .
git commit -m "Updated content"
git push
```

⏱️ تغییرات در 1-5 دقیقه اعمال می‌شوند.

---

## 🌐 دامنه اختصاصی (اختیاری)

اگر می‌خواهید domain شخصی (مثل `mohamadali.com`):

### گام 1: خرید Domain
```
- Namecheap.com (ارزان)
- GoDaddy.com (محبوب)
- Cloudflare.com (ارزان + CDN)
```

### گام 2: تنظیم DNS
```
در پنل domain:

Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: username.github.io
```

### گام 3: تنظیم در GitHub
```
1. Repository → Settings → Pages
2. Custom domain: yourdomain.com
3. Save
4. صبر 24-48 ساعت (DNS propagation)
5. ✅ Enforce HTTPS را تیک بزنید
```

---

## 📈 بعد از Deploy

### ✅ انجام دهید:

1. **Google Search Console**
   ```
   - به search.google.com/search-console بروید
   - Add property
   - Verify ownership
   - Submit sitemap
   ```

2. **LinkedIn**
   ```
   - Profile → Edit
   - Website: https://username.github.io
   - Save
   - Post جدید: "Check out my new portfolio!"
   ```

3. **رزومه**
   ```
   - URL سایت را اضافه کنید
   - Section: "Portfolio" یا "Website"
   ```

4. **Share**
   ```
   - با دوستان
   - با recruiters
   - در job applications
   ```

---

## 🎯 چک‌لیست نهایی

- [ ] Web3Forms key تنظیم شد
- [ ] اطلاعات شخصی به‌روز شد
- [ ] تصاویر جایگزین شد
- [ ] Repository ساخته شد
- [ ] کدها push شد
- [ ] GitHub Pages فعال شد
- [ ] سایت لود می‌شود
- [ ] تمام صفحات کار می‌کنند
- [ ] فرم تماس کار می‌کند
- [ ] Mobile responsive است
- [ ] در رزومه قرار گرفت
- [ ] در LinkedIn اضافه شد

---

## 🆘 کمک نیاز دارید؟

### راهنماها:
- `FINAL_CHECKLIST.md` - چک‌لیست کامل
- `DEPLOYMENT_GUIDE.md` - راهنمای تفصیلی
- `SETUP_INSTRUCTIONS.md` - راهنمای شخصی‌سازی

### پشتیبانی:
- GitHub Docs: docs.github.com/pages
- Web3Forms Help: web3forms.com/help
- Stack Overflow: stackoverflow.com/questions/tagged/github-pages

---

## 🎉 تمام!

**تبریک می‌گویم!** 🎊

پورتفولیوی حرفه‌ای شما الان زنده است و آماده نمایش به دنیا!

### URL شما:
```
https://username.github.io
```

**حالا برو و شغل رویایی‌ات را پیدا کن! 🚀💼**

---

تاریخ: 2025-12-29
زمان Deploy: ~10 دقیقه
سطح سختی: ⭐⭐☆☆☆ (آسان)
