import './RozkladDzvinkiv.scss'
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"

//img
import lesson1 from './img/lesson1.jpg'
import lesson2 from './img/lesson2.jpg'
import lesson3 from './img/lesson3.jpg'
import lesson4 from './img/lesson4.jpg'
import lesson5 from './img/lesson5.jpg'
import lesson6o from './img/lesson6o.jpg'
import lesson6 from './img/lesson6.jpg'
import lesson7 from './img/lesson7.jpg'
import lesson8 from './img/lesson8.jpg'

const lessons = [
    {
        time: "8.20 - 9.05",
        name: "1 урок",
        img: lesson1
    },
    {
        time: "9.10 - 10.55",
        name: "2 урок",
        img: lesson2
    },
    {
        time: "10.05 - 10.50",
        name: "3 урок",
        img: lesson3
    },
    {
        time: "10.55 - 11.40",
        name: "4 урок",
        img: lesson4
    },
    {
        time: "11.50 - 12.35",
        name: "5 урок",
        img: lesson5
    },
    {
        time: "12.40 - 13.25",
        name: "6о урок",
        img: lesson6o
    },
    {
        time: "13.30 - 14.15",
        name: "6 урок",
        img: lesson6
    },
    {
        time: "14.20 - 15.05",
        name: "7 урок",
        img: lesson7
    },{
        time: "15.10 - 15.55",
        name: "8 урок",
        img: lesson8
    }
]

export default function RozkladDzvinkiv() {
    return (
        <div>
            <Header />
            <div className="container rozklad">
                <h2 className="title">Розклад дзвінків</h2>
                <div className="lessons">
                    {lessons.map((lesson, index) => (
                        <div 
                            key={index} 
                            className={`lesson ${index % 2 === 1 ? "violet" : ""}`}
                        >
                            <img src={lesson.img} alt={lesson.name} />
                            <span className="time">{lesson.time}</span>
                            <span className="name">{lesson.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
