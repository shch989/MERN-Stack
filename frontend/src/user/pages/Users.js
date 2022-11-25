import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Buebe', 
      image: 'https://w.namu.la/s/de28f198096e22c88a35b8fdfa3addb445390e4ed7befa27bd32149d33fa2a16dd4de31b3cbc03a3732c615828d39cfd89639b8150858a5c8646dfce0c963aca4dde1db639838b1439479b5e68ea7222', 
      places: 2
    },
  ]; // 임시 데이터

  return (
    <UsersList items={USERS}/>
  )
}

export default Users
