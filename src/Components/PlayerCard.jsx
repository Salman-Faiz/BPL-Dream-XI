/* eslint-disable react/prop-types */
import { FaUserLarge } from 'react-icons/fa6'
import { FaFlag } from 'react-icons/fa'
import { useContext } from 'react'
import { CricketersContext } from '../Context/Cricketers'
import { Bounce, toast } from 'react-toastify'

const PlayerCard = ({ player }) => {
  const { selectedPlayers, setSelectedPlayers, freeCredit, setFreeCredit } =
    useContext(CricketersContext)
  const { id, name, imageUrl, nationality, type, batting, bowling, price } =
    player

  const handleSelectPlayer = (event, player) => {
    event.stopPropagation()

    const found = selectedPlayers.find(item => {
      return item.id === player.id
    })
    if (!found && freeCredit >= player.price) {
      if (selectedPlayers.length < 6) {
        setFreeCredit(freeCredit - player.price)
        setSelectedPlayers([...selectedPlayers, player])
        toast.success(`${player.name} is selected`, {
          transition: Bounce,
          theme: 'dark',
        })
      } else {
        toast.error('You cannot select more than 6 players', {
          transition: Bounce,
          theme: 'dark',
        })
      }
    } else {
      toast.error(
        `Do you have sufficient credit, or have you already selected ${player.name}?`,
        { transition: Bounce, theme: 'dark' }
      )
    }
  }

  return (
    <div className='border p-6 rounded-xl  space-y-4 text-lg shadow-lg text-black'>
      <img
        src={imageUrl}
        alt=''
        className='md:w-[450px] h-[270px] rounded-xl'
      />
      <h1 className='flex gap-2 items-center'>
        <FaUserLarge className='text-xl' />
        <span className='text-2xl font-semibold'>{name}</span>
      </h1>
      <div className='flex justify-between text-lg text-gray-500'>
        <h4 className='flex gap-2 items-center'>
          <FaFlag /> <span className='text-xl font-bold'>{nationality}</span>
        </h4>

        <h4 className='font-bold border bg-slate-200 px-2 py-1 rounded-md'>
          {type}
        </h4>
      </div>
      <hr />
      <h3 className='font-bold'>Rating</h3>

      <div className='flex justify-between items-center font-medium text-slate-600'>
        <p>{batting}</p>
        <p>{bowling}</p>
      </div>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold'>Price {price}</h3>
        <button
          className='border px-2 py-1 rounded-md font-semibold bg-slate-100 hover:bg-yellow-300'
          onClick={e => handleSelectPlayer(e, player)}
        >
          Choose player
        </button>
      </div>
    </div>
  )
}

export default PlayerCard
