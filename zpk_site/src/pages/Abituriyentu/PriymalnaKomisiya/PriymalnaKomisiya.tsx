import './PriymalnaKomisiya.scss'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { motion, AnimatePresence } from 'framer-motion'

// ✅ Іконка для маркера
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
})

// ✅ Позиція коледжу
const position: [number, number] = [50.5241152, 26.2533035]

// ✅ Компонент плавного польоту
function FlyToMarker({ position }: { position: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(position, 17, { duration: 2 })
  }, [map, position])
  return null
}

// ✅ Кнопка "переліт до маркера"
function MapAddressButton({ position }: { position: [number, number] }) {
  const map = useMap()
  const handleClick = () => {
    map.flyTo(position, 17, { animate: true, duration: 1.5 })
  }
  return (
    <div className="map-address-label" onClick={handleClick}>
      📍 Рівненська обл., м. Здолбунів, вул. Ясна, 6
    </div>
  )
}

export default function PriymalnaKomisiya() {
  const speed = 1 // швидкість симуляції часу
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isStarted, setIsStarted] = useState(false)
  const startRealRef = useRef<number | null>(null)

  useEffect(() => {
    const targetDate = new Date('2026-06-01T09:00:00').getTime()
    if (startRealRef.current === null) startRealRef.current = Date.now()

    const tick = () => {
      const nowReal = Date.now()
      const startReal = startRealRef.current as number
      const nowSim = startReal + Math.floor((nowReal - startReal) * speed)
      const diff = targetDate - nowSim

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000)
        const days = Math.floor(totalSeconds / (24 * 3600))
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60
        setTimeLeft({ days, hours, minutes, seconds })
        setIsStarted(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsStarted(true)
      }

      setIsLoading(false)
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div>
      <Header />
      <div className="container priymalna-komisiya">
        <h4>До початку роботи приймальної комісії у 2026 році</h4>

        <AnimatePresence>
          {isLoading ? (
            <motion.div key="loading" className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="spinner-border text-primary" role="status"></div>
              <p>Обчислення часу...</p>
            </motion.div>
          ) : isStarted ? (
            <motion.div key="started" className="started-message" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              🎉 Приймальна комісія вже працює! Завітайте до нас!
            </motion.div>
          ) : (
            <motion.div key="timer" className="counter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="counter-box"><span>{timeLeft?.days ?? '--'}</span><p>днів</p></div>
              <div className="counter-box"><span>{timeLeft?.hours ?? '--'}</span><p>годин</p></div>
              <div className="counter-box"><span>{timeLeft?.minutes ?? '--'}</span><p>хвилин</p></div>
              <div className="counter-box small"><span>{timeLeft?.seconds ?? '--'}</span><p>секунд</p></div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isStarted && !isLoading && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Це свідчить про те, що вступна кампанія 2026 року розпочнеться незабаром. Ви можете завітати до нас
            на дні відкритих дверей або в будь-який будній день. Завжди раді вас бачити!
          </motion.p>
        )}

        <h4>Чекаємо Вас!</h4>

        {/* Таблиця */}
        <table className="schedule">
          <thead><tr><th>Дні тижня</th><th>Час</th></tr></thead>
          <tbody>
            <tr><td>понеділок</td><td>08:00–16:00</td></tr>
            <tr><td>вівторок</td><td>08:00–16:00</td></tr>
            <tr><td>середа</td><td>08:00–16:00</td></tr>
            <tr><td>четвер</td><td>08:00–16:00</td></tr>
            <tr><td>п'ятниця</td><td>08:00–16:00</td></tr>
            <tr><td>субота</td><td>вихідний</td></tr>
            <tr><td>неділя</td><td>вихідний</td></tr>
          </tbody>
        </table>

        {/* Контакти */}
        <div className="contacts">
          <div className="contact-item"><span><i className="bi bi-envelope-fill"></i></span><p>zplzt@ukr.net</p></div>
          <div className="contact-item"><span><i className="bi bi-telephone-fill"></i></span><p>098 523 74 94</p></div>
          <div className="contact-item"><span><i className="bi bi-geo-alt-fill"></i></span><p>Україна, Рівненська обл., м. Здолбунів, вул. Ясна, 6</p></div>
        </div>
      </div>

      {/* ✅ Мапа з маркером і кнопкою */}
      <div className="custom-map-container">
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '450px', width: '100%', borderRadius: '15px' }}>
          <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" attribution='&copy; Google' />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <strong>Здолбунівський професійний коледж</strong><br />
              вул. Ясна, 6, Здолбунів
            </Popup>
          </Marker>
          <FlyToMarker position={position} />
          <MapAddressButton position={position} />
        </MapContainer>
      </div>

      <Footer />
    </div>
  )
}
