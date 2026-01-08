import './RozkladGroup.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function RozkladGroup() {
  const { groupId } = useParams()
  const navigate = useNavigate()
  const [scheduleForGroup, setScheduleForGroup] = useState<any[]>([])

  // Розклад часу
  const lessonTimes = [
    "8:20 – 9:05",
    "9:10 – 9:55",
    "10:05 – 10:50",
    "10:55 – 11:40",
    "11:50 – 12:35",
    "12:40 – 13:25",
    "13:30 – 14:15",
    "14:20 – 15:05",
    "15:10 – 15:55"
  ]

  // Нумерація уроків (твоя власна)
  const lessonNumbers = ["1", "2", "3", "4", "5", "6o", "6", "7", "8"]

  useEffect(() => {
    const load = async () => {
      const data = await fetch('/schedules.json', { cache: "no-store" }).then(r => r.json())
      setScheduleForGroup(data[groupId!] || [])
    }
    load()
  }, [groupId])

  return (
    <>
      <Header />
      <div className="container rozklad-group">
        <h2 className="title">
          Розклад для групи <span>{groupId}</span>
        </h2>

        {scheduleForGroup.length > 0 ? (
          <div className="mobile-schedule">
            {scheduleForGroup.map((dayBlock, i) => (
              <div key={i} className="mobile-day">
                <div className="mobile-day-name">{dayBlock.day}</div>

                {dayBlock.lessons.map((lesson: any, j: number) => (
                  <div key={j} className="mobile-lesson">
                    <div className="lesson-number">{lessonNumbers[j]}</div>

                    <div className="lesson-info">
                      <div className="lesson-subject">{lesson.subject}</div>
                      <div className="lesson-time">⏱ {lessonTimes[j]}</div>
                      <div className="lesson-room">📍 каб. {lesson.room}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="not-found">Розклад відсутній</p>
        )}

        <button className="back-btn centered" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
      <Footer />
    </>
  )
}
