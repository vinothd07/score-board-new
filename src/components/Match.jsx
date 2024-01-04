import { Badge } from 'antd';
import React from 'react';

const matches = [
    {
        teams: [
            {
                name: 'Kudalur A',
                image: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
            },
            {
                name: 'Kudalur B',
                image: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
            }
        ],
        date: '2022-01-17',
        toss: {
            won: 'Kudalur B',
            opted: 'bowl'
        },
        status: 'Started'
    }
]

const Match = ({ tournament }) => {
    return (
        <div className='match'>
            {matches.map(match =>
                <div className='running-border p-2 rounded-xl bg-[#2B2B3D] w-full h-20 relative flex flex-col gap-0 justify-between' key={match.name}>
                    <div>
                        <p className='text-gray-300 text-[8px]'></p>
                    </div>
                    <div className='flex gap-2 justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='flex flex-col'>
                                <p className='text-xs'>{match.teams[0].name}</p>
                                <p className='text-[10px] text-center'>10/3 (8)</p>
                            </div>
                            <img src={match.teams[0].image} alt='team' className='w-7' />
                        </div>

                        <div className='flex flex-col'>
                            {/* <p className='text-gray-300 text-[11px]'>{match.date}</p> */}
                            <p className='text-[10px] text-center flex gap-1 items-center justify-center'>Live <Badge color="green" status="processing" /></p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={match.teams[1].image} alt='team' className='w-7' />
                            <div className='flex flex-col'>
                                <p className='text-xs'>{match.teams[1].name}</p>
                                <p className='text-[10px] text-center'>79 (10)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <p className='text-gray-300 text-[9px]'>{match.date}</p> */}
                    </div>
                    <p className='absolute text-[9px] text-gray-300 bottom-0 left-0 right-0 mx-auto text-center'>{match.teams[0].name} needs 70 runs from 16 balls.</p>
                </div>
            )}
        </div>
    );
};

export default Match