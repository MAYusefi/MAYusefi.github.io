# 🚀 راهنمای کامل استقرار در GitHub Pages

این راهنمای گام‌به‌گام برای استقرار پورتفولیوی شما در GitHub Pages است.

---

## 📋 پیش‌نیازها

- ✅ حساب کاربری GitHub
- ✅ Git نصب شده روی کامپیوتر
- ✅ ویرایشگر متن (VS Code پیشنهاد می‌شود)

---

## 🎯 مرحله 1: ایجاد Repository در GitHub

### روش A: Repository شخصی (پیشنهادی)
این روش URL ساده‌تری می‌دهد: `username.github.io`

1. به [GitHub.com](https://github.com) بروید
2. روی **+** (گوشه بالا سمت راست) کلیک کنید
3. **New repository** را انتخاب کنید
4. نام repository را دقیقاً `username.github.io` بگذارید (username خود را جایگزین کنید)
5. تیک **Public** را بزنید
6. **Create repository** را کلیک کنید

### روش B: Repository پروژه
URL شما: `username.github.io/portfolio`

1. نام دلخواه برای repository بگذارید (مثلاً `portfolio`)
2. بقیه مراحل مانند روش A

---

## 💻 مرحله 2: آپلود کدها به GitHub

### روش 1: استفاده از Git Command Line

```bash
# 1. به پوشه پروژه بروید
cd path/to/your/portfolio

# 2. Git را مقداردهی اولیه کنید
git init

# 3. تمام فایل‌ها را اضافه کنید
git add .

# 4. Commit اول را ایجاد کنید
git commit -m "Initial commit: Professional portfolio"

# 5. Branch اصلی را به main تغییر دهید (اگر master است)
git branch -M main

# 6. Repository راه دور را اضافه کنید
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# 7. کدها را push کنید
git push -u origin main
```

### روش 2: استفاده از GitHub Desktop (آسان‌تر)

1. [GitHub Desktop](https://desktop.github.com/) را دانلود و نصب کنید
2. File → Add Local Repository → پوشه پروژه را انتخاب کنید
3. "Create a repository" را کلیک کنید
4. **Publish repository** را کلیک کنید
5. نام و توضیحات را وارد کنید
6. **Publish Repository** را تایید کنید

### روش 3: آپلود مستقیم در وب (برای کاربران مبتدی)

1. به repository در GitHub بروید
2. **Add file** → **Upload files** را کلیک کنید
3. تمام فایل‌ها و پوشه‌ها را drag & drop کنید
4. **Commit changes** را کلیک کنید

---

## ⚙️ مرحله 3: فعال‌سازی GitHub Pages

### گام‌به‌گام:

1. به repository خود در GitHub بروید
2. روی تب **Settings** کلیک کنید
3. از منوی سمت چپ، **Pages** را انتخاب کنید
4. در قسمت **Source**:
   - **Deploy from a branch** را انتخاب کنید
   - Branch: **main** را انتخاب کنید
   - Folder: **/ (root)** را انتخاب کنید
5. **Save** را کلیک کنید
6. صبر کنید تا پیام سبز رنگ ظاهر شود (2-5 دقیقه)

✅ **سایت شما آماده است!** به آدرس: `https://username.github.io`

---

## 🎨 مرحله 4: شخصی‌سازی محتوا

### 4.1 تغییر اطلاعات شخصی

در **تمام فایل‌های HTML**، این موارد را جایگزین کنید:

```
Mohammad Ali → نام شما
Ali.yusefi.ee@gmail.com → ایمیل شما
+93 780 661 347 → شماره تماس شما
Kabul, Afghanistan → شهر شما
linkedin.com/in/mohammad-ali-engineer → لینک LinkedIn شما
github.com/mohammad-ali-portfolio → لینک GitHub شما
```

### 4.2 تنظیم فرم تماس (Web3Forms)

1. به [Web3Forms.com](https://web3forms.com) بروید
2. روی **Get Started Free** کلیک کنید
3. ایمیل خود را وارد کنید
4. **Access Key** خود را کپی کنید
5. در فایل `contact.html`، خط زیر را پیدا کنید:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
   ```
6. `YOUR_WEB3FORMS_ACCESS_KEY_HERE` را با کلید خود جایگزین کنید

### 4.3 آپدیت URLها

در این فایل‌ها، `yourusername.github.io` را با URL واقعی خود جایگزین کنید:
- `sitemap.xml`
- `robots.txt`
- تمام فایل‌های HTML (meta tags)

### 4.4 تصاویر

- `assets/profile.svg` را با عکس خود جایگزین کنید (SVG، PNG، یا JPG)
- `assets/resume.pdf` را با رزومه خود جایگزین کنید
- تصاویر پروژه‌ها را در `assets/` قرار دهید

---

## 🔄 مرحله 5: آپدیت و بروزرسانی

هر بار که تغییری دادید:

```bash
# 1. تغییرات را اضافه کنید
git add .

# 2. یک commit با توضیح بسازید
git commit -m "Updated contact information"

# 3. به GitHub push کنید
git push origin main
```

⏱️ تغییرات در 1-5 دقیقه روی سایت اعمال می‌شوند.

---

## 🌐 مرحله 6: دامنه اختصاصی (اختیاری)

اگر می‌خواهید domain شخصی داشته باشید (مثل `mohamadali.com`):

### 6.1 خرید Domain

از یکی از این سرویس‌ها:
- [Namecheap](https://www.namecheap.com) - ارزان
- [GoDaddy](https://www.godaddy.com) - محبوب
- [Cloudflare](https://www.cloudflare.com) - ارزان + CDN رایگان

### 6.2 تنظیم DNS

در پنل مدیریت domain، این رکوردها را اضافه کنید:

```
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

### 6.3 تنظیم در GitHub

1. به repository → Settings → Pages بروید
2. در قسمت **Custom domain**، domain خود را وارد کنید
3. **Save** را کلیک کنید
4. تیک **Enforce HTTPS** را بزنید (بعد از 24 ساعت)

⏳ **صبر کنید:** DNS تا 24-48 ساعت طول می‌کشد.

---

## ✅ چک‌لیست نهایی

قبل از راه‌اندازی، این موارد را بررسی کنید:

- [ ] تمام اطلاعات شخصی به‌روز شد
- [ ] Web3Forms تنظیم شد
- [ ] عکس پروفایل و رزومه آپلود شد
- [ ] URLها به‌روز شدند (sitemap, robots, meta tags)
- [ ] فرم تماس کار می‌کند (تست کنید)
- [ ] تمام لینک‌های navigation کار می‌کنند
- [ ] سایت روی موبایل درست نمایش داده می‌شود
- [ ] Theme toggle کار می‌کند
- [ ] Language switcher کار می‌کند

---

## 🐛 عیب‌یابی مشکلات رایج

### مشکل: صفحه 404 نشان می‌دهد

**راه‌حل:**
1. Settings → Pages → Source را چک کنید
2. اطمینان حاصل کنید فایل `index.html` در root است
3. 5-10 دقیقه صبر کنید برای propagation

### مشکل: CSS/JS لود نمی‌شود

**راه‌حل:**
1. مسیر فایل‌ها را چک کنید (relative paths: `css/style.css` نه `/css/style.css`)
2. کنسول مرورگر (F12) را برای ارورها چک کنید
3. Cache مرورگر را پاک کنید (Ctrl+Shift+R)

### مشکل: فرم تماس کار نمی‌کند

**راه‌حل:**
1. Access Key در `contact.html` را چک کنید
2. در Web3Forms Dashboard، ایمیل خود را verify کنید
3. Form را با ایمیل دیگری تست کنید

### مشکل: تغییرات اعمال نمی‌شود

**راه‌حل:**
1. Actions tab را چک کنید (باید سبز باشد)
2. Git push درست انجام شده؟ `git status` را اجرا کنید
3. Hard refresh: Ctrl+Shift+R (Windows) یا Cmd+Shift+R (Mac)

---

## 📞 پشتیبانی

اگر با مشکلی مواجه شدید:

1. **GitHub Docs:** [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. **Web3Forms Support:** [Web3Forms Help](https://web3forms.com/help)
3. **Community:** [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

## 🎉 تبریک!

پورتفولیوی حرفه‌ای شما آماده است! 

### مراحل بعدی:

1. ✅ سایت را در لینکدین Share کنید
2. ✅ URL را در رزومه خود اضافه کنید
3. ✅ به دوستان و recruiters معرفی کنید
4. ✅ محتوا را به‌طور منظم به‌روز کنید

---

**ساخته شده با ❤️ توسط Rovo Dev**

موفق باشید! 🚀
