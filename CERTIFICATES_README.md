# 📜 راهنمای صفحه گواهینامه‌ها

## ✅ گواهینامه‌های اضافه شده

صفحه جدید **Certificates** با موفقیت ایجاد شد که شامل:

### 🎓 گواهینامه‌های موجود:

1. **PSEA 2020 - Protection from Sexual Exploitation and Abuse**
   - صادرکننده: UN (سازمان ملل متحد)
   - فایل: `PSEA2020_Course certificate - PSEA 2020.pdf`
   - تصویر: `7.jpg`
   - دسته: UN Certified

2. **Fraud Awareness for Partners**
   - صادرکننده: Partners Program
   - فایل: `Fraud_awareness_partners_Course certificate.pdf`
   - تصویر: `CamScanner 02-05-2023 09.47_1.jpg`
   - دسته: Finance & Security
   - تاریخ: 2023

3. **Professional Development Certificate**
   - تصویر: `7.jpg`
   - دسته: Technical & Professional

4. **TOEFL Diploma**
   - صادرکننده: Star Educational Society
   - تاریخ: 2022
   - دسته: Language Certification

---

## 🎨 ویژگی‌های صفحه

### ✨ Modal Viewer
- کلیک روی هر گواهینامه → باز شدن در modal
- دکمه دانلود مستقیم
- بستن با کلیک خارج modal یا دکمه ESC
- Responsive برای موبایل

### 🌐 Bilingual Support
تمام متون دارای ترجمه فارسی و انگلیسی:
- عناوین گواهینامه‌ها
- توضیحات
- دکمه‌ها
- آمار و ارقام

### 📊 Statistics Section
- تعداد گواهینامه‌ها: 4+
- سازمان‌های صادرکننده: 3+
- آخرین گواهی: 2023
- وضعیت تایید: 100%

### 🎯 Call-to-Action
لینک‌های مرتبط به:
- رزومه کامل
- مهارت‌های فنی
- فرم تماس

---

## 📁 ساختار فایل‌ها

```
certificats/
├── 7.jpg                                              (تصویر گواهی)
├── CamScanner 02-05-2023 09.47_1.jpg                 (تصویر اسکن)
├── Fraud_awareness_partners_Course certificate.pdf   (PDF)
└── PSEA2020_Course certificate - PSEA 2020.pdf      (PDF)
```

---

## 🔧 چگونه گواهینامه جدید اضافه کنیم؟

### مرحله 1: آپلود فایل
```
1. فایل PDF یا تصویر را در پوشه certificats/ قرار دهید
2. نام فایل را یادداشت کنید
```

### مرحله 2: ویرایش certificates.html
کد زیر را کپی و در grid اضافه کنید:

```html
<div class="gradient-card reveal stagger-X hover-lift">
  <div class="certificate-card" onclick="openModal('certificats/YOUR_FILE.pdf', 'Certificate Title')">
    <div class="certificate-badge">Badge Text</div>
    <img src="certificats/YOUR_IMAGE.jpg" alt="Certificate" class="certificate-image" />
    <div class="certificate-overlay">
      <div style="color: white;">
        <strong>Click to view</strong>
      </div>
    </div>
  </div>
  <div style="padding: 1rem 0;">
    <div class="flex items-center gap-2" style="margin-bottom: 0.75rem;">
      <span class="badge badge-primary">Category</span>
      <span class="badge">Tag 1</span>
      <span class="badge">Year</span>
    </div>
    <h3 data-lang-en="English Title" data-lang-fa="عنوان فارسی">English Title</h3>
    <p class="text-secondary" style="margin-top: 0.5rem; font-size: var(--font-size-sm);">
      <span data-lang-en="English Description" data-lang-fa="توضیحات فارسی">English Description</span>
    </p>
    <a href="certificats/YOUR_FILE.pdf" download class="btn btn-ghost" style="margin-top: 1rem; width: 100%;">
      📥 <span data-lang-en="Download PDF" data-lang-fa="دانلود PDF">Download PDF</span>
    </a>
  </div>
</div>
```

### مرحله 3: به‌روزرسانی آمار
در بخش Statistics، اعداد را به‌روز کنید:
- تعداد گواهینامه‌ها
- تعداد سازمان‌ها
- آخرین سال

---

## 🌐 سیستم ترجمه (اصلاح شده)

### ✅ مشکل حل شد!

**قبلاً:** Language toggle کار نمی‌کرد

**الان:** 
- ✅ کلیک روی دکمه زبان → تغییر فوری
- ✅ ذخیره در localStorage
- ✅ RTL/LTR switching
- ✅ تغییر فونت (Vazirmatn برای فارسی)
- ✅ دکمه نمایش: "EN" یا "فا"

### چگونه کار می‌کند؟

1. **Attribute-based Translation:**
```html
<element data-lang-en="English Text" data-lang-fa="متن فارسی">
  English Text
</element>
```

2. **JavaScript:**
```javascript
// کلیک روی دکمه زبان
STATE.language = STATE.language === 'en' ? 'fa' : 'en';
translatePage(); // ترجمه خودکار
```

3. **Persistence:**
```javascript
localStorage.setItem('language', STATE.language);
// بار بعدی صفحه → زبان ذخیره شده
```

---

## 🧪 تست کردن

### چک‌لیست تست:

- [ ] صفحه certificates.html باز می‌شود
- [ ] تمام تصاویر لود می‌شوند
- [ ] کلیک روی گواهی → modal باز می‌شود
- [ ] دکمه دانلود کار می‌کند
- [ ] کلیک خارج modal → بسته می‌شود
- [ ] دکمه ESC → بسته می‌شود
- [ ] Language toggle → متون تغییر می‌کنند
- [ ] Navigation → لینک Certificates اضافه شده
- [ ] Mobile responsive → درست نمایش داده می‌شود

---

## 🎨 Customization

### تغییر رنگ Badge:
```html
<div class="certificate-badge">Text</div>
<!-- یا با رنگ سفارشی: -->
<div class="certificate-badge" style="background: #10b981;">Text</div>
```

### تغییر Layout:
```css
.certificate-image {
  height: 250px; /* تغییر ارتفاع */
}
```

---

## 📱 Responsive Design

صفحه کاملاً responsive است:

- **Desktop (1280px+):** 3 ستون
- **Tablet (768px):** 2 ستون
- **Mobile (375px):** 1 ستون

Modal نیز responsive است و در موبایل به خوبی کار می‌کند.

---

## 🔒 Security & Privacy

- ✅ فایل‌های PDF در پوشه محلی
- ✅ No external dependencies
- ✅ Download از سرور شما
- ✅ No tracking

---

## 📈 SEO

صفحه برای SEO بهینه است:
- ✅ Meta description
- ✅ Semantic HTML
- ✅ Alt text برای تصاویر
- ✅ Structured content
- ✅ در sitemap.xml اضافه شد

---

## 🚀 آپدیت‌های آینده (اختیاری)

- [ ] Filtering گواهینامه‌ها بر اساس دسته
- [ ] Search functionality
- [ ] Verification badges با لینک
- [ ] Export all certificates در یک ZIP
- [ ] Timeline view
- [ ] Badge issuer logos

---

## 💡 نکات مهم

1. **نام فایل‌ها:** از اسامی مناسب استفاده کنید (بدون فاصله)
2. **سایز تصاویر:** کمتر از 2MB برای سرعت بهتر
3. **فرمت:** PDF برای اصالت، JPG/PNG برای preview
4. **Backup:** همیشه نسخه backup از گواهینامه‌ها داشته باشید

---

## ❓ سوالات متداول

**Q: چند تا گواهینامه می‌توانم اضافه کنم؟**
A: نامحدود! فقط grid بزرگ‌تر می‌شود.

**Q: آیا می‌توانم ویدیو هم اضافه کنم؟**
A: بله! modal را کمی تغییر دهید تا `<video>` را نمایش دهد.

**Q: چطور لینک verification اضافه کنم؟**
A: یک دکمه "Verify" اضافه کنید که به URL سازمان صادرکننده لینک دهد.

---

**صفحه Certificates آماده استفاده است! 🎉**

اگر سوالی دارید، به فایل‌های راهنمای اصلی مراجعه کنید.
