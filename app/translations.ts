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
    timeFinished: 'Bakım süresi tamamlandı!',

    // System Logs
    systemLogs: 'Sistem Logları',
    recentActivity: 'Son Aktiviteler',
    
    // Log entries (last 10 days)
    log1: {
      date: '13 Temmuz 2025, 14:30',
      type: 'critical',
      message: 'CVE-2025-0847 güvenlik açığı için emergency patch deployment tamamlandı.',
      location: 'Production Cluster - TR-IST-PROD01'
    },
    log2: {
      date: '12 Temmuz 2025, 09:15', 
      type: 'maintenance',
      message: 'PostgreSQL connection pool rebalancing ve query execution plan optimizasyonu.',
      location: 'Database Layer - EU-WEST-RDS'
    },
    log3: {
      date: '11 Temmuz 2025, 22:45',
      type: 'network',
      message: 'BGP route advertisement güncellendi. Failover mechanism stress test başarılı.',
      location: 'Network Infrastructure - TR-ANK-CORE'
    },
    log4: {
      date: '10 Temmuz 2025, 16:20',
      type: 'security',
      message: 'Zero-trust network policy implementation ve micro-segmentation deployment.',
      location: 'Security Perimeter - EU-CENTRAL-FW'
    },
    log5: {
      date: '9 Temmuz 2025, 11:00',
      type: 'performance',
      message: 'Redis cluster resharding tamamlandı. Memory fragmentation cleanup executed.',
      location: 'Cache Layer - Global-Redis-Cluster'
    },
    log6: {
      date: '8 Temmuz 2025, 08:30',
      type: 'backup',
      message: 'Point-in-time recovery validation ve cross-region backup consistency check.',
      location: 'Disaster Recovery - TR-IZM-DR01'
    },
    log7: {
      date: '7 Temmuz 2025, 19:45',
      type: 'update',
      message: 'Kubernetes cluster upgrade v1.28.2 ve ingress controller blue-green deployment.',
      location: 'Container Orchestration - K8S-PROD'
    },
    log8: {
      date: '6 Temmuz 2025, 13:10',
      type: 'monitoring',
      message: 'Prometheus metrics retention policy update ve Grafana dashboard optimization.',
      location: 'Observability Stack - TR-IST-OBS'
    },
    log9: {
      date: '5 Temmuz 2025, 20:25',
      type: 'infrastructure',
      message: 'Auto-scaling group reconfiguration ve instance replacement strategy deployment.',
      location: 'Compute Infrastructure - AWS-EU-WEST-2'
    },
    log10: {
      date: '4 Temmuz 2025, 15:50',
      type: 'analysis',
      message: 'Application Performance Monitoring baseline establishment ve SLI/SLO review.',
      location: 'Performance Analytics - TR-IST-APM'
    }
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
    timeFinished: 'Maintenance time completed!',

    // System Logs
    systemLogs: 'System Logs',
    recentActivity: 'Recent Activity',
    
    // Log entries (last 10 days)
    log1: {
      date: 'July 13, 2025, 14:30',
      type: 'critical',
      message: 'Emergency patch deployment completed for CVE-2025-0847 security vulnerability.',
      location: 'Production Cluster - TR-IST-PROD01'
    },
    log2: {
      date: 'July 12, 2025, 09:15',
      type: 'maintenance', 
      message: 'PostgreSQL connection pool rebalancing and query execution plan optimization.',
      location: 'Database Layer - EU-WEST-RDS'
    },
    log3: {
      date: 'July 11, 2025, 22:45',
      type: 'network',
      message: 'BGP route advertisement updated. Failover mechanism stress test successful.',
      location: 'Network Infrastructure - TR-ANK-CORE'
    },
    log4: {
      date: 'July 10, 2025, 16:20',
      type: 'security',
      message: 'Zero-trust network policy implementation and micro-segmentation deployment.',
      location: 'Security Perimeter - EU-CENTRAL-FW'
    },
    log5: {
      date: 'July 9, 2025, 11:00',
      type: 'performance',
      message: 'Redis cluster resharding completed. Memory fragmentation cleanup executed.',
      location: 'Cache Layer - Global-Redis-Cluster'
    },
    log6: {
      date: 'July 8, 2025, 08:30',
      type: 'backup',
      message: 'Point-in-time recovery validation and cross-region backup consistency check.',
      location: 'Disaster Recovery - TR-IZM-DR01'
    },
    log7: {
      date: 'July 7, 2025, 19:45',
      type: 'update',
      message: 'Kubernetes cluster upgrade v1.28.2 and ingress controller blue-green deployment.',
      location: 'Container Orchestration - K8S-PROD'
    },
    log8: {
      date: 'July 6, 2025, 13:10',
      type: 'monitoring',
      message: 'Prometheus metrics retention policy update and Grafana dashboard optimization.',
      location: 'Observability Stack - TR-IST-OBS'
    },
    log9: {
      date: 'July 5, 2025, 20:25',
      type: 'infrastructure',
      message: 'Auto-scaling group reconfiguration and instance replacement strategy deployment.',
      location: 'Compute Infrastructure - AWS-EU-WEST-2'
    },
    log10: {
      date: 'July 4, 2025, 15:50',
      type: 'analysis',
      message: 'Application Performance Monitoring baseline establishment and SLI/SLO review.',
      location: 'Performance Analytics - TR-IST-APM'
    }
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

export const getTranslation = (lang: Language, key: TranslationKey): any => {
  return translations[lang][key] || translations.en[key] || key
}
