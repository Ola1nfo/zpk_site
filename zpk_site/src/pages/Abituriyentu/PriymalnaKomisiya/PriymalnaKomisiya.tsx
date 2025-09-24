import './PriymalnaKomisiya.scss'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Іконка для маркера
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

// Тип для FlyToMarker
interface FlyToMarkerProps {
    position: [number, number]
}

// Компонент для плавного польоту до маркера
function FlyToMarker({ position }: FlyToMarkerProps) {
    const map = useMap()
    useEffect(() => {
        map.flyTo(position, 17, { duration: 2 })
    }, [map, position])
    return null
}

export default function PriymalnaKomisiya() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

    useEffect(() => {
        const targetDate = new Date('2026-06-01T09:00:00') // старт приймальної комісії

        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / (1000 * 60)) % 60)

                setTimeLeft({ days, hours, minutes })
            } else {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0 })
            }
        }, 1000 * 60)

        return () => clearInterval(interval)
    }, [])

    const position: [number, number] = [50.5203, 26.2389] // координати Здолбунова

    return (
        <div>
            <Header />
            <div className="container priymalna-komisiya">
                <h4>До початку роботи приймальної комісії у 2025 році</h4>

                {/* Лічильник */}
                <div className="counter">
                    <div className="counter-box">
                        <span>{timeLeft.days}</span>
                        <p>днів</p>
                    </div>
                    <div className="counter-box">
                        <span>{timeLeft.hours}</span>
                        <p>годин</p>
                    </div>
                    <div className="counter-box">
                        <span>{timeLeft.minutes}</span>
                        <p>хвилин</p>
                    </div>
                </div>

                <p>
                    Це свідчить про те, що вступна кампанія-2025 розпочалася, а приймальна комісія
                    працюватиме та прийматиме документи від вступників у 2025 році відповідно до
                    Правил прийому! А Ви можете завітати до нас на дні відкритих дверей або в будь-який
                    день тижня з понеділка по п'ятницю на знайомство з нами! Завжди раді вас бачити!
                </p>

                <h4>Чекаємо Вас!</h4>

                {/* Таблиця */}
                <table className="schedule">
                    <thead>
                        <tr>
                            <th>Дні тижня</th>
                            <th>Час</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>понеділок</td><td>08:00-16:00 без перерви</td></tr>
                        <tr><td>вівторок</td><td>08:00-16:00 без перерви</td></tr>
                        <tr><td>середа</td><td>08:00-16:00 без перерви</td></tr>
                        <tr><td>четвер</td><td>08:00-16:00 без перерви</td></tr>
                        <tr><td>п'ятниця</td><td>08:00-16:00 без перерви</td></tr>
                        <tr><td>субота</td><td>вихідний</td></tr>
                        <tr><td>неділя</td><td>вихідний</td></tr>
                    </tbody>
                </table>

                {/* Контакти */}
                <div className="contacts">
                    <div className="contact-item">
                        <span><i className="bi bi-envelope-fill"></i></span>
                        <p>zplzt@ukr.net</p>
                    </div>
                    <div className="contact-item">
                        <span><i className="bi bi-telephone-fill"></i></span>
                        <p>098 523 74 94</p>
                    </div>
                    <div className="contact-item">
                        <span><i className="bi bi-geo-alt-fill"></i></span>
                        <p>Україна, Рівненська обл., м. Здолбунів, вул. Ясна, 6</p>
                    </div>
                </div>
            </div>

            {/* Мапа */}
            <div className="custom-map-container">
                <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="map">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            Рівненська обл., м. Здолбунів<br />вул. Ясна, 6
                        </Popup>
                    </Marker>
                    <FlyToMarker position={position} />
                </MapContainer>
            </div>

            <Footer />
        </div>
    )
}
