import './RozkladGroup.scss'
import { useParams } from 'react-router-dom'
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"

export default function RozkladGroup() {
    const { groupId } = useParams();

    // Розклад для всіх груп
    const schedules = {
        1: [
            { time: "08:30 - 09:15", subject: "Математика" },
            { time: "09:25 - 10:10", subject: "Фізика" },
            { time: "10:30 - 11:15", subject: "Інформатика" }
        ],
        2: [
            { time: "08:30 - 09:15", subject: "Хімія" },
            { time: "09:25 - 10:10", subject: "Біологія" },
            { time: "10:30 - 11:15", subject: "Географія" }
        ],
        3: [
            { time: "08:30 - 09:15", subject: "Історія" },
            { time: "09:25 - 10:10", subject: "Література" },
            { time: "10:30 - 11:15", subject: "Математика" }
        ],
        // ... можна додати інші групи до 22
    };

    const scheduleForGroup = schedules[groupId] || [];

    return (
        <div>
            <Header/>
            <div className="container rozklad-group">
                <h2>Розклад уроків для {groupId} групи з 01.09.2025 по 26.09.2025</h2>

                {scheduleForGroup.length > 0 ? (
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>Час</th>
                                <th>Предмет</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleForGroup.map((lesson, index) => (
                                <tr key={index}>
                                    <td>{lesson.time}</td>
                                    <td>{lesson.subject}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Розклад не знайдено для цієї групи.</p>
                )}
            </div>
            <Footer/>
        </div>
    )
}
