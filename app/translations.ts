export const translations = {
  tr: {
    // Header
    systemStatus: 'Bakım Modunda',
    premiumPlatform: 'Premium Platform',
    
    // Main Title
    maintenanceMode: 'Sistem Bakımda',
    temporaryOffline: 'Geçici',
    serviceUnavailable: 'Hizmet Dışı',
    description: 'Platformumuz daha iyi bir deneyim sunmak için güncelleniyor. Kısa bir süre sonra gelişmiş özelliklerle geri döneceğiz.',
    
    // Countdown
    estimatedCompletion: 'Tahmini Tamamlanma Süresi',
    days: 'Gün',
    hours: 'Saat',
    minutes: 'Dakika',
    seconds: 'Saniye',
    
    // Maintenance Steps
    maintenanceProcess: 'Bakım Süreci',
    step1Title: 'Sistem Analizi',
    step1Desc: 'Sistem durumu kontrol edildi',
    step2Title: 'Veritabanı Optimizasyonu',
    step2Desc: 'Performans iyileştirmeleri yapılıyor',
    step3Title: 'Güvenlik Güncellemeleri',
    step3Desc: 'Yeni güvenlik yamaları uygulanacak',
    step4Title: 'Test ve Doğrulama',
    step4Desc: 'Sistem testleri gerçekleştirilecek',
    step5Title: 'Servis Aktivasyonu',
    step5Desc: 'Sistemler tekrar aktif edilecek',
    
    // Status
    completed: 'Tamamlandı',
    inProgress: 'Devam Ediyor',
    pending: 'Beklemede',
    
    // Footer
    dataSecure: 'Tüm verileriniz güvende',
    sslProtected: 'SSL Korumalı',
    lastUpdate: 'Son güncelleme',
    
    // Time finished message
    timeFinished: 'Bakım süresi tamamlandı!'
  },
  
  en: {
    // Header
    systemStatus: 'Maintenance Mode',
    premiumPlatform: 'Premium Platform',
    
    // Main Title
    maintenanceMode: 'System Under Maintenance',
    temporaryOffline: 'Temporarily',
    serviceUnavailable: 'Offline',
    description: 'Our platform is being upgraded to provide you with a better experience. We\'ll be back shortly with enhanced features.',
    
    // Countdown
    estimatedCompletion: 'Estimated Completion Time',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    
    // Maintenance Steps
    maintenanceProcess: 'Maintenance Process',
    step1Title: 'System Analysis',
    step1Desc: 'System status has been checked',
    step2Title: 'Database Optimization',
    step2Desc: 'Performance improvements in progress',
    step3Title: 'Security Updates',
    step3Desc: 'New security patches will be applied',
    step4Title: 'Testing & Verification',
    step4Desc: 'System tests will be performed',
    step5Title: 'Service Activation',
    step5Desc: 'Systems will be reactivated',
    
    // Status
    completed: 'Completed',
    inProgress: 'In Progress',
    pending: 'Pending',
    
    // Footer
    dataSecure: 'All your data is secure',
    sslProtected: 'SSL Protected',
    lastUpdate: 'Last update',
    
    // Time finished message
    timeFinished: 'Maintenance time completed!'
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.tr

export const detectUserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.toLowerCase()
  
  if (browserLang.startsWith('tr')) {
    return 'tr'
  }
  
  return 'en'
}

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key] || translations.en[key] || key
}
