import "./Administration.scss"
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"


//img
import dyrektor from './img/dyrektor.jpg'
import zamdyrektor1 from './img/zamdyrektor1.jpg'
import zamdyrektor2 from './img/zamdyrektor2.jpg'
import metodyst from './img/metodyst.jpg'
import mayster from './img/mayster.jpg'
import physical from './img/physical.jpg'
import zangospodar from './img/zangospodar.jpg'
import booker from './img/booker.jpg'


type Person = {
  id: number
  name: string
  position: string
  photo: string
}

const people: Person[] = [
  {
    id: 1,
    name: "Шевчук Руслан Іванович",
    position: "Директор",
    photo: dyrektor,
  },
  {
    id: 2,
    name: "Романюк Ольга Миколаївна",
    position: "Заступник директора",
    photo: zamdyrektor1,
  },
  {
    id: 3,
    name: "Корчинська Ольга Василівна",
    position: "Заступник директора",
    photo: zamdyrektor2,
  },
  {
    id: 4,
    name: "Боярчук Ірина Сергіївна",
    position: "Методист",
    photo: metodyst,
  },
  {
    id: 5,
    name: "Павлюк Микола Васильович",
    position: "в. о. старшого майстра",
    photo: mayster,
  },
  {
    id: 6,
    name: "Піщалюк Анатолій Михайлович",
    position: "в.о. керівника фізичного виховання",
    photo: physical,
  },
  {
    id: 7,
    name: "Панасюк Василь Степанович",
    position: "Завідуючий господарством",
    photo: zangospodar,
  },
  {
    id: 8,
    name: "Бутинська Тетяна Миколаївна",
    position: "Головний бухгалтер",
    photo: booker,
  },
]

export default function Administration() {
  return (
    <div>
      <Header />
      <div className="administration">
        <h1 className="administration-title">Адміністрація</h1>
        <div className="administration-grid">
          {people.map((person) => (
            <div key={person.id} className="administration-card">
              <div className="administration-photo-wrap">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="administration-photo"
                />
              </div>
              <h2 className="administration-name">{person.name}</h2>
              <p className="administration-position">{person.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
