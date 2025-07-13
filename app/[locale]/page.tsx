'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Settings, 
  Clock, 
  AlertTriangle, 
  Wrench, 
  Shield, 
  ChevronDown,
  Github,
  Globe,
  Languages
} from 'lucide-react'
import { translations, getTranslation, type Language } from '../translations'
import { useParams, useRouter } from 'next/navigation'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function MaintenancePage() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale as Language
  
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Bakım bitiş tarihi (5 gün sonra)
  const maintenanceEndDate = new Date()
  maintenanceEndDate.setDate(maintenanceEndDate.getDate() + 5)

  const maintenanceSteps = [
    { 
      id: 1, 
      title: getTranslation(locale, 'step1Title'), 
      status: 'completed', 
      description: getTranslation(locale, 'step1Desc') 
    },
    { 
      id: 2, 
      title: getTranslation(locale, 'step2Title'), 
      status: 'in-progress', 
      description: getTranslation(locale, 'step2Desc') 
    },
    { 
      id: 3, 
      title: getTranslation(locale, 'step3Title'), 
      status: 'pending', 
      description: getTranslation(locale, 'step3Desc') 
    },
    { 
      id: 4, 
      title: getTranslation(locale, 'step4Title'), 
      status: 'pending', 
      description: getTranslation(locale, 'step4Desc') 
    },
    { 
      id: 5, 
      title: getTranslation(locale, 'step5Title'), 
      status: 'pending', 
      description: getTranslation(locale, 'step5Desc') 
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = maintenanceEndDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        alert(getTranslation(locale, 'timeFinished'))
      }
    }, 1000)

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % maintenanceSteps.length)
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(stepTimer)
    }
  }, [locale])

  const toggleLanguage = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr'
    router.push(`/${newLocale}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 min-h-screen flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.header 
          className="glass-effect border-b border-white/10 responsive-header-padding"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="responsive-logo-size bg-white rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-black animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">IIENSTITU</h1>
                <p className="text-xs text-gray-400">Teknik Departmanı</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 sm:space-x-2 glass-effect px-2 py-1 sm:px-3 sm:py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Languages className="responsive-icon-size text-gray-300" />
                <span className="text-xs sm:text-sm text-gray-300 uppercase">{locale}</span>
              </button>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="status-indicator bg-yellow-500"></div>
                <span className="text-xs sm:text-sm text-gray-300 hidden sm:inline">{getTranslation(locale, 'systemStatus')}</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center responsive-main-padding">
          <div className="responsive-max-width mx-auto text-center responsive-space-y">
            
            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 glass-effect px-4 py-2 sm:px-6 sm:py-3 rounded-full">
                <Wrench className="responsive-icon-size text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">{getTranslation(locale, 'maintenanceMode')}</span>
              </div>
              
              <h1 className="responsive-text-hero font-bold leading-tight">
                <span className="text-gradient">{getTranslation(locale, 'temporaryOffline')}</span>
                <br />
                <span className="text-white">{getTranslation(locale, 'serviceUnavailable')}</span>
              </h1>
              
              <p className="responsive-text-lg text-gray-400 max-w-xs sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                {getTranslation(locale, 'description')}
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="responsive-text-xl font-semibold text-white mb-4 sm:mb-8">{getTranslation(locale, 'estimatedCompletion')}</h3>
              
              <div className="responsive-grid-countdown">
                {[
                  { label: getTranslation(locale, 'days'), value: timeLeft.days },
                  { label: getTranslation(locale, 'hours'), value: timeLeft.hours },
                  { label: getTranslation(locale, 'minutes'), value: timeLeft.minutes },
                  { label: getTranslation(locale, 'seconds'), value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="glass-effect p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
                    <div className="responsive-countdown-text font-mono font-bold text-white mb-1 sm:mb-2">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Progress Steps */}
            <motion.div variants={itemVariants} className="responsive-space-y">
              <h3 className="responsive-text-xl font-semibold text-white">{getTranslation(locale, 'maintenanceProcess')}</h3>
              
              <div className="glass-effect responsive-step-padding rounded-2xl sm:rounded-3xl responsive-max-width mx-auto">
                <div className="space-y-4">
                  {maintenanceSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        index === currentStep ? 'bg-white/10 border border-white/20' : ''
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        step.status === 'completed' 
                          ? 'bg-green-500 border-green-500' 
                          : step.status === 'in-progress'
                          ? 'bg-yellow-500 border-yellow-500 animate-pulse'
                          : 'border-gray-600'
                      }`}>
                        {step.status === 'completed' ? (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        ) : step.status === 'in-progress' ? (
                          <div className="w-3 h-3 bg-black rounded-full animate-spin" />
                        ) : (
                          <div className="w-3 h-3 border border-gray-400 rounded-full" />
                        )}
                      </div>
                      
                      <div className="flex-1 text-left">
                        <h4 className="font-medium text-white">{step.title}</h4>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                      
                      <div className={`text-xs px-3 py-1 rounded-full ${
                        step.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : step.status === 'in-progress'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-600/20 text-gray-400'
                      }`}>
                        {step.status === 'completed' ? getTranslation(locale, 'completed') : 
                         step.status === 'in-progress' ? getTranslation(locale, 'inProgress') : getTranslation(locale, 'pending')}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="glass-effect border-t border-white/10 p-4 sm:p-6"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>{getTranslation(locale, 'dataSecure')}</span>
              <span>•</span>
              <span>{getTranslation(locale, 'sslProtected')}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{getTranslation(locale, 'lastUpdate')}: {new Date().toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US')}</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  )
}
