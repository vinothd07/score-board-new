import React from 'react'
const images = [
    'https://images.pexels.com/photos/2039938/pexels-photo-2039938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/61135/pexels-photo-61135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3800541/pexels-photo-3800541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    'https://images.pexels.com/photos/3452356/pexels-photo-3452356.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16062158/pexels-photo-16062158/free-photo-of-man-playing-cricket.jpeg?auto=compress&cs=tinysrgb&w=600'
]
const tournaments = [
    {
        name: 'KPL 2019',
        date: new Date()
    },
    {
        name: 'KPL 2020',
        date: new Date()
    },
    {
        name: 'KPL 2021',
        date: new Date()
    },
    {
        name: 'KPL 2022',
        date: new Date()
    }
];

const Tournament = ({ onTournamentSelect }) => {
    const getImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const handleSelect = (tournament) => {
        onTournamentSelect(tournament);
    };

    return (
        <div className='flex flex-col gap-4 w-full mt-4 px-4'>
            {tournaments.map(tournament => {
                return (
                    <div className="relative max-w-xl mt-0" key={tournament.name} onClick={() => handleSelect(tournament)}>
                        <img className="h-40 w-full object-cover rounded-md" src={getImage()} alt="Random" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">{tournament.name}</h2>
                            <p className='text-white  bottom-1 right-2 text-sm font-medium'>{tournament.date.toLocaleString()}</p>
                        </div>
                        {/* <p className='text-white absolute bottom-1 right-2 text-sm font-medium'>{tournament.date.toLocaleString()}</p> */}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tournament