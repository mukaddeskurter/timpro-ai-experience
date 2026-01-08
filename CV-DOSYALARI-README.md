# CV Dosyaları Kurulum Rehberi

## 📁 Gerekli Dosyalar

Aşağıdaki dosyaları projenizin `public` klasörüne eklemeniz gerekmektedir:

### 1. Özet CV Görseli (Tek Sayfa)
- **cv-ozet.jpg** - Ana sayfada gösterilecek özet CV (tek sayfa)

### 2. Detaylı CV Görselleri (İki Sayfa)
- **cv-sayfa-1.jpg** - Detaylı CV'nin 1. sayfası
- **cv-sayfa-2.jpg** - Detaylı CV'nin 2. sayfası

### 3. PDF Dosyası
- **cv-detayli.pdf** - İndirilebilir detaylı CV (PDF formatında)

## 📂 Dosya Konumları

```
timpro-ai-experience/
├── public/
│   ├── cv-ozet.jpg       ← Buraya (Özet CV - Ana sayfada görünür)
│   ├── cv-sayfa-1.jpg    ← Buraya (Detaylı CV sayfa 1)
│   ├── cv-sayfa-2.jpg    ← Buraya (Detaylı CV sayfa 2)
│   └── cv-detayli.pdf    ← Buraya (İndirilebilir PDF)
├── src/
│   └── pages/
│       ├── ExperiencePage.jsx
│       ├── experience.css
│       └── cv-styles.css
```

## 🎨 Önerilen Dosya Özellikleri

### Özet CV Görseli (JPG/PNG)
- **Boyut**: 800-1000px genişlik (yükseklik orantılı)
- **Format**: JPG veya PNG
- **Oran**: Genellikle A4 oranı (1:1.414)
- **Kalite**: Yüksek çözünürlük (okunabilir metin)
- **DPI**: En az 150 DPI

### Detaylı CV Görselleri (JPG/PNG)
- **Boyut**: 1200px genişlik (yükseklik orantılı)
- **Format**: JPG veya PNG
- **Kalite**: Yüksek çözünürlük (okunabilir metin)
- **DPI**: En az 150 DPI

### PDF Dosyası
- **Format**: PDF
- **Boyut**: Maksimum 5 MB
- **Sayfalar**: 2 sayfa
- **Yazı Tipi**: Gömülü fontlar (embedded fonts)

## ✨ Özet CV İçeriği

Özet CV şu anda **görsel olarak** gösteriliyor:
- Ana sayfada `cv-ozet.jpg` dosyası doğrudan görüntülenir
- Kullanıcı tek sayfalık CV'yi hemen görebilir
- Altında "Detaylı CV'yi Görüntüle" ve "İndir" butonları var

## 🔄 Dosya İsimleri Değiştirmek İsterseniz

Eğer farklı dosya isimleri kullanmak isterseniz, aşağıdaki satırları güncelleyin:

### ExperiencePage.jsx içinde:

```jsx
// Satır ~647 civarı - Özet CV görseli
<img 
  src="/cv-ozet.jpg"  // ← Özet CV dosya adını buradan değiştirin
  alt="Timpro AI Asistan - Özet CV"
  className="cv-summary-img"
/>

// Satır ~892 civarı - Detaylı CV sayfa 1
<img 
  src="/cv-sayfa-1.jpg"  // ← Dosya adını buradan değiştirin
  alt="CV Sayfa 1"
  className="cv-page-image"
/>

// Satır ~898 civarı - Detaylı CV sayfa 2
<img 
  src="/cv-sayfa-2.jpg"  // ← Dosya adını buradan değiştirin
  alt="CV Sayfa 2"
  className="cv-page-image"
/>

// Satır ~657 ve ~906 civarı (2 yerde)
href="/cv-detayli.pdf"  // ← PDF dosya adını buradan değiştirin
```

## 🚀 Kullanım

Dosyaları ekledikten sonra:

1. **Özet CV (cv-ozet.jpg)** → Ana sayfada karakterin CV'si olarak doğrudan görünür
2. **"Detaylı CV'yi Görüntüle" butonu** → Modal açar, iki sayfayı gösterir (cv-sayfa-1.jpg ve cv-sayfa-2.jpg)
3. **"Detaylı CV'yi İndir" butonu** → PDF'i indirir (cv-detayli.pdf)
4. **Modal içindeki "PDF Olarak İndir"** → PDF'i indirir

## 💡 İpuçları

- CV görsellerini PNG formatında kaydederseniz daha net görünür
- PDF dosyasını optimize ederek boyutunu küçültebilirsiniz
- CV'lerde şirket bilgilerini güncelleyin
- Mobil uyumluluk için görsellerin responsive olduğundan emin olun

## 🎯 Demo İçin Placeholder

Eğer henüz CV dosyalarınız hazır değilse, geçici olarak placeholder görsel kullanabilirsiniz:
- **Özet CV**: https://via.placeholder.com/800x1131/667eea/ffffff?text=Ozet+CV
- **Detaylı Sayfa 1**: https://via.placeholder.com/1200x1600/667eea/ffffff?text=CV+Sayfa+1
- **Detaylı Sayfa 2**: https://via.placeholder.com/1200x1600/764ba2/ffffff?text=CV+Sayfa+2

---

**Not**: Dosyaları ekledikten sonra development server'ı yeniden başlatmanız gerekebilir.
