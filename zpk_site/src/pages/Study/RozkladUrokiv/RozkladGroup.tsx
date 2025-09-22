import './RozkladGroup.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
import schedules from "../../../json/schedules.json"

export default function RozkladGroup() {
    const { groupId } = useParams();
    const navigate = useNavigate();

    const scheduleForGroup = schedules[groupId as keyof typeof schedules] || [];

    return (
        <div>
            <Header/>
            <div className="container rozklad-group">
                <h2>Розклад уроків для {groupId} групи з 01.09.2025 по 26.09.2025</h2>

                {scheduleForGroup.length > 0 ? (
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>День</th>
                                <th>Предмет</th>
                                <th>Аудиторія</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleForGroup.map((dayBlock, dayIndex) => (
                                <>
                                    {dayBlock.lessons.map((lesson, lessonIndex) => {
                                        const isLastLesson = lessonIndex === dayBlock.lessons.length - 1;
                                        return (
                                            <tr
                                                key={`${dayIndex}-${lessonIndex}`}
                                                className={isLastLesson ? "day-separator" : ""}
                                            >
                                                {lessonIndex === 0 && (
                                                    <td
                                                        rowSpan={dayBlock.lessons.length}
                                                        className="day-cell"
                                                    >
                                                        {dayBlock.day}
                                                    </td>
                                                )}
                                                <td>{lesson.subject}</td>
                                                <td>{lesson.room}</td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Розклад не знайдено для цієї групи.</p>
                )}
                <button className="back-btn" onClick={() => navigate(-1)}>
                    Повернутися назад
                </button>
            </div>
            <Footer/>
        </div>
    )
}
