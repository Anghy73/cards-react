import { Footer } from './Footer'
import { GithubCard } from './GithubCard'

const profiles = [
  {
    name: 'Andy Ruz',
    userName: 'Anghy73',
    isLiked: true,
  },
  {
    name: 'Miguel Ángel Durán',
    userName: 'midudev',
    isLiked: true
  },
  {
    name: 'Bobby',
    userName: 'BobbyWibowo',
    isLiked: false
  },
  {
    name: 'bluuweb',
    userName: 'bluuweb',
    isLiked: true
  },
]

export function App() {
  return (
    <>
      <h1 className='app__title'>Profiles Cards</h1>
      <div className="content">
        {
          profiles.map(({name, userName, isLiked}) => (
              <GithubCard
                name={name}
                userName={userName}
                initialIsLiked={isLiked}
                key={userName}/>
            )
          )
        }
      </div>
      <Footer />
    </>
  )
}