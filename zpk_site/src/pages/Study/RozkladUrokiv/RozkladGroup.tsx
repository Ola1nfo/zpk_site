/* eslint-disable @typescript-eslint/no-explicit-any */
import './RozkladGroup.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function RozkladGroup() {
	const { groupId } = useParams()
	const navigate = useNavigate()

	const [scheduleForGroup, setScheduleForGroup] = useState<any[]>([])

	useEffect(() => {
		const fetchSchedulesJSONData = async () => {
			const json = await fetch('/schedules.json').then((r) => r.json())
			console.log(json, scheduleForGroup)
			setScheduleForGroup(json[groupId as keyof typeof json] || [])
		}
		fetchSchedulesJSONData()
	}, [])

	const formatDate = () => {
		const today = new Date()
		const dayOfWeek = today.getDay()

		const monday = new Date(today)
		monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7))

		const friday = new Date(monday)
		friday.setDate(monday.getDate() + 4)

		const mondayDd = String(monday.getDate()).padStart(2, '0')
		const mondayMm = String(monday.getMonth() + 1).padStart(2, '0')
		const mondayYyyy = monday.getFullYear()

		const fridayDd = String(friday.getDate()).padStart(2, '0')
		const fridayMm = String(friday.getMonth() + 1).padStart(2, '0')
		const fridayYyyy = friday.getFullYear()

		return `${mondayDd}.${mondayMm}.${mondayYyyy} по ${fridayDd}.${fridayMm}.${fridayYyyy}`
	}

	return (
		<div>
			<Header />
			<div className="container rozklad-group">
				<h2>
					Розклад уроків для {groupId} групи з {formatDate()}
				</h2>

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
									{dayBlock.lessons.map((lesson: any, lessonIndex: number) => {
										const isLastLesson =
											lessonIndex === dayBlock.lessons.length - 1
										return (
											<tr
												key={`${dayIndex}-${lessonIndex}`}
												className={isLastLesson ? 'day-separator' : ''}
											>
												{lessonIndex === 0 && (
													<td
														rowSpan={dayBlock.lessons.length}
														className="day-cell"
														data-label="День"
													>
														{dayBlock.day}
													</td>
												)}
												<td data-label="Предмет">{lesson.subject}</td>
												<td data-label="Аудиторія">{lesson.room}</td>
											</tr>
										)
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
			<Footer />
		</div>
	)
}
