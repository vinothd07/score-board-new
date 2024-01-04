import React, { useEffect, useState } from 'react'
import Tournament from './Tournament'
import { TabPaneWrapper } from './TabsLayout';
import Match from './Match';
import { Tabs } from 'antd';
import Table from './Table';
import bannerimg from './../assets/1.svg';
import ballimg from './../assets/ball.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectedTournament, showTournament } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const _showTournament = useSelector((state) => state.showTournament);
  const tournamentData = useSelector((state) => state.tournamentData);

  const [tournament, setTournament] = useState(tournamentData ? tournamentData : null);

  const handleTournamentSelect = (tournament) => {
    setTournament(tournament);
    dispatch(selectedTournament(tournament));
    // _setTournament(tournament);
    dispatch(showTournament(false));
  }

  const onTabChange = ($event) => {
    // console.log('onTabChange', $event);
  }

  const tabList = [
    {
      key: "match",
      label: "Match",
      children: <TabPaneWrapper> <Match tournament={tournament} /> </TabPaneWrapper>,
    },
    {
      key: "table",
      label: "Table",
      children: <TabPaneWrapper> <Table tournament={tournament} /> </TabPaneWrapper>,
    },
    {
      key: "news",
      label: "News",
      children: <TabPaneWrapper> <Table tournament={tournament} /> </TabPaneWrapper>,
    },
  ];

  return (
    <div className='home'>
      {(!tournament || _showTournament) && <Tournament onTournamentSelect={handleTournamentSelect} />}
      {tournament &&
        <div className='px-4'>

          <div className='banner h-[177px] pt-4 rounded-2xl overflow-hidden'>
            <div className='flex relative h-[161px] shrink rounded-2xl' style={{ background: 'linear-gradient(104deg, #246BFD 0%, #0C0C69 84.11%)' }}>

              <div className='flex flex-col justify-between p-4'>
                <div className='rounded-2xl bg-white p-1 w-max'>
                  <div className='inline-flex gap-1 justify-center items-center px-3'>
                    <img src={ballimg} alt="ball" className='w-3 h-3' />
                    <p className='font-medium text-sm text-black'>Cricket</p>
                  </div>
                </div>

                <div className='w-[158px]'>
                  <p className='text-white font-bold text-base'>{tournament.name}</p>
                </div>

                <p className='text-xs text-white font-normal'>Yesterday, 06.30 PM</p>
              </div>

              <img src={bannerimg} alt='banner' className='absolute right-0 bottom-0' />
            </div>
          </div>

          {/* tabs */}
          <div className='py-4'>
            <Tabs defaultActiveKey="1" items={tabList} onChange={onTabChange} />
          </div>
        </div>
      }
    </div>
  )
}

export default Home