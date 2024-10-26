import { useContext, useState } from 'react'
import PlayerCard from './PlayerCard'
import { CricketersContext } from '../Context/Cricketers'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const AvailablePlayers = () => {
  const [players, setPlayers] = useState([])
  const [showAvailable, setShowAvailable] = useState(true)
  const { selectedPlayers, setSelectedPlayers } = useContext(CricketersContext)
  // Fetch local data
  fetch('players.json')
    .then(res => res.json())
    .then(players => setPlayers(players))

  // handle Available button

  const handleAvailablePlayers = () => {
    setShowAvailable(true)
  }

  // handle select button
  const handleSelectedPlayers = () => {
    setShowAvailable(false)
  }

  // handle delete button
  const handleDeletePlayer = (event, itemId) => {
    event.preventDefault();
    const remainingPlayers = selectedPlayers.filter(item => {
      return item.id !== itemId;
    })
    setSelectedPlayers([...remainingPlayers])
  }

  return (
    <>
      <div className='flex justify-between mt-12 mb-20 mx-5 text-black'>
        <h1 className='text-3xl font-bold'>
          {showAvailable
            ? 'Available Players'
            : `Selected players(${selectedPlayers.length}/6)`}
        </h1>
        <div className='text-xl'>
          <button
            className={`border border-r-0 py-1 px-2 rounded-lg rounded-e-none ${
              showAvailable ? 'bg-yellow-300' : 'bg-gray-300'
            }`}
            onClick={handleAvailablePlayers}
          >
            Available
          </button>
          <button
            className={`border border-l-0 py-1 px-2 rounded-lg rounded-s-none ${
              !showAvailable ? 'bg-yellow-300' : 'bg-gray-300'
            }`}
            onClick={handleSelectedPlayers}
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>
      {showAvailable ? (
        <div className='grid md:grid-cols-3 gap-5 mx-5'>
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <div className='mx-32'>
          {selectedPlayers.length === 0 ? (
            <div>
              <p className='text-3xl font-semibold text-red-600'>
                No player selected yet
              </p>
            </div>
          ) : (
            selectedPlayers.map(player => (
              <div
                key={player.id}
                className='flex border p-4  items-center gap-5 rounded-lg mb-5 text-black'
              >
                <img
                  src={player.imageUrl}
                  alt=''
                  className='rounded-2xl w-16 h-16'
                />
                <div className='flex-grow'>
                  <h2 className='text-xl font-bold'>{player.name}</h2>
                  <div className='text-md font-semibold '>
                    <p>Role: {player.batting}</p>
                    <p>Price: {player.price}</p>
                  </div>
                </div>
                <button
                  className='text-red-600'
                  onClick={e => handleDeletePlayer(e, player.id)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            ))
          )}
          <button
            onClick={handleAvailablePlayers}
            className='border border-r-0 py-1 px-2 rounded-lg font-semibold bg-yellow-300 text-black mt-8'
          >
            Add more player
          </button>
        </div>
      )}
    </>
  )
}

export default AvailablePlayers
