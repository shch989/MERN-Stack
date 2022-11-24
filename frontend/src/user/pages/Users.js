import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Buebe', 
      image: 'https://obj-sg.thewiki.kr/data/ebb88cebb2a020323031392d31302d31382e6a7067.jpg', 
      places: 3
    },
  ]; // 임시 데이터

  return (
    <UsersList items={USERS}/>
  )
}

export default Users
