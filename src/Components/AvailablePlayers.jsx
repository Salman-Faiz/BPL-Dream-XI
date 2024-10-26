
import { useState } from 'react';
import PlayerCard from './PlayerCard';

const AvailablePlayers = () => {
    const [players,setPlayers] = useState([])

    fetch('players.json')
    .then(res => res.json())
    .then(players => setPlayers(players))

    return (
        <>
        <div className='flex justify-between my-12'>
            <h1 className='text-3xl font-bold'>Available Players</h1>
            <div className='text-xl'>
                <button className='border border-r-0 py-1 px-2 rounded-lg bg-yellow-300'>Available</button>
                <button className='border border-l-0 py-1 px-2 rounded-lg'>Selected <span>(0)</span></button>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-5'>
           {
            players.map(player => <PlayerCard key={player.id} player={player}/>)
           }
            
        </div>
        </>
    );
};

export default AvailablePlayers;