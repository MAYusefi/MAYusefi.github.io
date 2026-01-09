# ⚡ راهنمای بهینه‌سازی Performance

## ✅ بهینه‌سازی‌های انجام شده

### 1️⃣ CSS Optimization
- ✅ **Modular CSS**: 5 فایل جداگانه به جای 1 فایل بزرگ
- ✅ **CSS Variables**: بدون preprocessor
- ✅ **Critical CSS**: فونت‌ها با `preconnect`
- ✅ **Minification Ready**: فایل‌ها آماده minify

### 2️⃣ JavaScript Optimization
- ✅ **Vanilla JS**: بدون jQuery یا framework
- ✅ **Async Loading**: Service Worker
- ✅ **Event Delegation**: Performance بهتر
- ✅ **Debounce/Throttle**: برای scroll events

### 3️⃣ Image Optimization
- ✅ **SVG Icons**: به جای PNG
- ✅ **Lazy Loading**: `loading="lazy"` attribute
- ✅ **Responsive Images**: با `srcset` (اختیاری)

### 4️⃣ Loading Strategy
- ✅ **Service Worker**: Offline support + caching
- ✅ **Preconnect**: Google Fonts
- ✅ **DNS Prefetch**: External resources

### 5️⃣ Caching Strategy
- ✅ **`.htaccess`**: Browser caching rules
- ✅ **`_headers`**: Netlify/Cloudflare headers
- ✅ **Service Worker**: App shell caching

---

## 📊 Performance Metrics

### Expected Lighthouse Scores:
```
⚡ Performance:  95-100
♿ Accessibility: 95-100
🔍 SEO:          100
✅ Best Practices: 95-100
```

### Load Times:
```
First Contentful Paint (FCP): < 1.5s
Largest Contentful Paint (LCP): < 2.5s
Time to Interactive (TTI): < 3.5s
Total Blocking Time (TBT): < 200ms
Cumulative Layout Shift (CLS): < 0.1
```

---

## 🎯 بهینه‌سازی‌های پیشنهادی (اختیاری)

### فاز 1: تصاویر

#### A. تبدیل به WebP
```bash
# نصب cwebp (Windows - Chocolatey)
choco install webp

# تبدیل تصاویر
cwebp certificats/image.jpg -q 80 -o certificats/image.webp
```

#### B. استفاده از `<picture>` tag
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>
```

### فاز 2: CSS Minification

```bash
# نصب cssnano (optional)
npm install -g cssnano-cli

# Minify CSS files
cssnano css/variables.css css/variables.min.css
```

### فاز 3: JavaScript Minification

```bash
# نصب terser
npm install -g terser

# Minify JS
terser js/main.js -o js/main.min.js --compress --mangle
```

### فاز 4: Critical CSS

**ابزار:** [Critical CSS Generator](https://www.sitelocity.com/critical-path-css-generator)

1. URL سایت را وارد کنید
2. Critical CSS را دریافت کنید
3. در `<head>` قرار دهید (inline)
4. بقیه CSS را async load کنید

---

## 🔧 تنظیمات پیشرفته

### Google Fonts Optimization

**قبلی:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**بهینه شده:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="..." rel="stylesheet"></noscript>
```

### Defer Non-Critical JavaScript

```html
<!-- قبلی -->
<script src="js/main.js"></script>

<!-- بهینه شده -->
<script src="js/main.js" defer></script>
```

---

## 📱 Mobile Performance

### Viewport Optimization
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
```

### Touch Action
```css
.button {
  touch-action: manipulation; /* Faster tap response */
}
```

### Hardware Acceleration
```css
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* GPU acceleration */
}
```

---

## 🧪 ابزارهای تست

### 1. Google Lighthouse
```
1. باز کردن DevTools (F12)
2. تب Lighthouse
3. Generate Report
```

### 2. PageSpeed Insights
```
URL: https://pagespeed.web.dev/
- Desktop analysis
- Mobile analysis
- Core Web Vitals
```

### 3. GTmetrix
```
URL: https://gtmetrix.com/
- Performance score
- Structure score
- Waterfall analysis
```

### 4. WebPageTest
```
URL: https://www.webpagetest.org/
- Real-world testing
- Multiple locations
- Connection throttling
```

---

## 📈 Monitoring

### Google Analytics (اضافه شده)
```javascript
// در js/main.js
gtag('config', 'G-XXXXXXXXXX'); // شناسه خود را بگذارید
```

### Core Web Vitals
```javascript
// Track CLS, LCP, FID
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

---

## 🎨 CSS Performance Tips

### 1. Avoid Complex Selectors
```css
/* ❌ بد */
div > ul > li > a:hover { }

/* ✅ خوب */
.nav-link:hover { }
```

### 2. Use Transform for Animations
```css
/* ❌ بد - causes reflow */
.box:hover {
  left: 100px;
}

/* ✅ خوب - GPU accelerated */
.box:hover {
  transform: translateX(100px);
}
```

### 3. Minimize Repaints
```css
/* Properties that cause reflow/repaint */
/* width, height, top, left, margin, padding, border */

/* Properties that don't */
/* transform, opacity */
```

---

## 💾 Storage Optimization

### LocalStorage Usage
```javascript
// Check storage size
const size = new Blob(Object.values(localStorage)).size;
console.log('LocalStorage size:', size, 'bytes');

// Clear if needed
if (size > 5000000) { // 5MB
  localStorage.clear();
}
```

---

## 🌐 CDN Recommendations

### Cloudflare (رایگان)
```
1. ثبت نام در cloudflare.com
2. اضافه کردن domain
3. تغییر nameservers
4. Auto-minification فعال
5. Brotli compression فعال
6. Browser Cache TTL: 1 month
```

### Benefits:
- ✅ Global CDN
- ✅ DDoS protection
- ✅ Auto minification
- ✅ Brotli compression
- ✅ HTTP/2 & HTTP/3
- ✅ Page Rules

---

## 🔍 SEO Performance

### Structured Data Validation
```
URL: https://search.google.com/test/rich-results
- Test JSON-LD
- Fix errors
- Preview results
```

### Mobile-Friendly Test
```
URL: https://search.google.com/test/mobile-friendly
- Test responsiveness
- Fix issues
```

---

## 📋 Performance Checklist

### Pre-Deploy:
- [ ] تمام تصاویر بهینه شده (< 200KB)
- [ ] CSS minified (اختیاری)
- [ ] JS minified (اختیاری)
- [ ] Service Worker tested
- [ ] Lighthouse score > 90
- [ ] Mobile responsive tested
- [ ] All links working

### Post-Deploy:
- [ ] Google Search Console registered
- [ ] Analytics configured
- [ ] Sitemap submitted
- [ ] Core Web Vitals monitored
- [ ] Performance tested from multiple locations

---

## 🚀 Quick Wins

1. **Enable Compression** - .htaccess ✅
2. **Browser Caching** - .htaccess ✅
3. **Minify Resources** - اختیاری
4. **Optimize Images** - WebP
5. **Lazy Load Images** - `loading="lazy"`
6. **Defer JavaScript** - `defer` attribute
7. **Critical CSS** - Inline above fold
8. **CDN** - Cloudflare

---

## 📞 پشتیبانی

اگر سوالی دارید:
- GitHub Issues
- Stack Overflow
- Web.dev documentation
- MDN Web Docs

---

**نسخه:** 1.0
**آخرین به‌روزرسانی:** 2025-12-29
