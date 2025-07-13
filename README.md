# Premium Maintenance Page

Bu proje, premium seviye siyah-beyaz tasarımında bir bakım sayfasıdır. Next.js, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Premium Tasarım**: Siyah-beyaz minimal tasarım
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile yumuşak geçişler
- **Gerçek Zamanlı Sayaç**: Bakım bitiş tarihine kadar geri sayım
- **İlerleme Takibi**: Bakım adımlarının görsel takibi
- **Modern UI**: Cam efekti ve gradient geçişler
- **TypeScript**: Tip güvenli kod

## 🛠️ Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim için derle
npm run build

# Üretim sunucusunu başlat
npm start
```

## 🎨 Özelleştirme

### Bakım Bitiş Tarihi
`app/page.tsx` dosyasında `maintenanceEndDate` değişkenini düzenleyin:

```typescript
const maintenanceEndDate = new Date()
maintenanceEndDate.setDate(maintenanceEndDate.getDate() + 2) // 2 gün sonra
```

### Bakım Adımları
`maintenanceSteps` array'ini düzenleyerek bakım sürecini özelleştirin.

### Renkler ve Tema
`tailwind.config.js` dosyasında renk paletini değiştirin.

## 📱 Responsive Tasarım

- Desktop: Tam özellikli görünüm
- Tablet: Optimize edilmiş düzen
- Mobile: Dokunmatik dostu arayüz

## 🔧 Bileşenler

- **Ana Sayfa**: Bakım durumu ve geri sayım
- **İlerleme Göstergesi**: Bakım adımlarının takibi
- **İletişim Bölümü**: Acil durum iletişim bilgileri
- **Animasyonlar**: Yumuşak geçişler ve mikroetkileşimler

## 📄 Lisans

MIT License
