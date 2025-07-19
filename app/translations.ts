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
      date: '19 Temmuz 2025, 15:40',
      type: 'critical',
      message: 'Database index fragmentation seviyesi %87 ye ulaştı. B-tree rebalancing algorithm çalıştırılıyor.',
      location: 'Database Engine - PGSQL-CLUSTER-PROD'
    },
    log2: {
      date: '19 Temmuz 2025, 13:25',
      type: 'maintenance',
      message: 'Deadlock prevention mechanism timeout değerleri artırıldı. MVCC isolation level optimization devam ediyor.',
      location: 'ACID Compliance Layer - DB-ISOLATION-01'
    },
    log3: {
      date: '19 Temmuz 2025, 11:10',
      type: 'performance',
      message: 'Connection pooling algorithm yetersiz kaldı. HikariCP max-pool-size 200 den 500 e yükseltildi.',
      location: 'Application Layer - JDBC-POOL-MANAGER'
    },
    log4: {
      date: '19 Temmuz 2025, 09:45',
      type: 'analysis',
      message: 'Query execution plan cost estimation %340 artış gösterdi. Vakum ve reindex operasyonları başlatıldı.',
      location: 'Query Optimizer - POSTGRES-PLANNER'
    },
    log5: {
      date: '16 Temmuz 2025, 11:45',
      type: 'infrastructure',
      message: 'Service mesh architecture refactoring tamamlandı. Istio sidecar injection pattern optimization deployed.',
      location: 'Microservices Infrastructure - TR-IST-MESH01'
    },
    log6: {
      date: '16 Temmuz 2025, 09:20',
      type: 'performance',
      message: 'Database sharding strategy implementation ve horizontal partitioning performance baseline established.',
      location: 'Data Architecture - EU-CENTRAL-SHARD'
    },
    log7: {
      date: '15 Temmuz 2025, 17:30',
      type: 'security',
      message: 'OAuth 2.0 token lifecycle management ve JWT refresh mechanism security audit completed successfully.',
      location: 'Identity Provider - TR-IST-AUTH01'
    },
    log8: {
      date: '15 Temmuz 2025, 13:15',
      type: 'monitoring',
      message: 'Distributed tracing correlation ID propagation ve OpenTelemetry collector configuration optimized.',
      location: 'Observability Pipeline - OTEL-COLLECTOR-EU'
    },
    log9: {
      date: '14 Temmuz 2025, 21:50',
      type: 'update',
      message: 'Circuit breaker pattern implementation ve resilience4j bulkhead isolation strategy deployment executed.',
      location: 'Fault Tolerance Layer - TR-IST-RESILIENCE'
    },
    log10: {
      date: '14 Temmuz 2025, 16:40',
      type: 'backup',
      message: 'Container registry vulnerability scanning ve image provenance verification pipeline activated.',
      location: 'DevSecOps Pipeline - HARBOR-REGISTRY-EU'
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
      date: 'July 19, 2025, 15:40',
      type: 'critical',
      message: 'Database index fragmentation reached 87%. B-tree rebalancing algorithm initiated.',
      location: 'Database Engine - PGSQL-CLUSTER-PROD'
    },
    log2: {
      date: 'July 19, 2025, 13:25',
      type: 'maintenance',
      message: 'Deadlock prevention mechanism timeout values increased. MVCC isolation level optimization ongoing.',
      location: 'ACID Compliance Layer - DB-ISOLATION-01'
    },
    log3: {
      date: 'July 19, 2025, 11:10',
      type: 'performance',
      message: 'Connection pooling algorithm insufficient. HikariCP max-pool-size increased from 200 to 500.',
      location: 'Application Layer - JDBC-POOL-MANAGER'
    },
    log4: {
      date: 'July 19, 2025, 09:45',
      type: 'analysis',
      message: 'Query execution plan cost estimation increased by 340%. Vacuum and reindex operations initiated.',
      location: 'Query Optimizer - POSTGRES-PLANNER'
    },
    log5: {
      date: 'July 13, 2025, 14:30',
      type: 'network',
      message: 'Emergency patch deployment completed for CVE-2025-0847 security vulnerability.',
      location: 'Production Cluster - TR-IST-PROD01'
    },
    log6: {
      date: 'July 12, 2025, 09:15',
      type: 'maintenance', 
      message: 'PostgreSQL connection pool rebalancing and query execution plan optimization.',
      location: 'Database Layer - EU-WEST-RDS'
    },
    log7: {
      date: 'July 11, 2025, 22:45',
      type: 'network',
      message: 'BGP route advertisement updated. Failover mechanism stress test successful.',
      location: 'Network Infrastructure - TR-ANK-CORE'
    },
    log8: {
      date: 'July 10, 2025, 16:20',
      type: 'security',
      message: 'Zero-trust network policy implementation and micro-segmentation deployment.',
      location: 'Security Perimeter - EU-CENTRAL-FW'
    },
    log9: {
      date: 'July 9, 2025, 11:00',
      type: 'performance',
      message: 'Redis cluster resharding completed. Memory fragmentation cleanup executed.',
      location: 'Cache Layer - Global-Redis-Cluster'
    },
    log10: {
      date: 'July 8, 2025, 08:30',
      type: 'backup',
      message: 'Point-in-time recovery validation and cross-region backup consistency check.',
      location: 'Disaster Recovery - TR-IZM-DR01'
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
