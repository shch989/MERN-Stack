import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: '창석동 두식아파트',
    description: '여중생들이 가장 많이 실종되는 동네의 가장 집값이 저렴한 아파트',
    imageUrl: 'https://post-phinf.pstatic.net/MjAxODA5MjdfMTU0/MDAxNTM4MDA3NTMwMDEw.pl8Hw3QXiMyDoXTX2VQsiTas-H3-5FDEpTUEvhUAkMIg.xdUy7cG2HZ-f_QWRN1bjzC8-nua3PA6iMGqeYTm8lEsg.JPEG/mug_obj_201809270918507519.jpg?type=w1080',
    address: '서울특별시 종로구 지봉로5길 7',
    location: {
      lat: 37.5741357,
      lng: 127.0143296
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: '종로파크',
    description: '뱀눈깔에 매생이머리 굴비이빨의 원숭이가 사는 곳',
    imageUrl: 'https://post-phinf.pstatic.net/MjAxOTA2MjBfMTA4/MDAxNTYxMDA0OTkyMjg3.bXI8UiE9DYUAjD4w6ISbmOJ5ZCIDbsIV2QuDmxsuBWog.z6zmK9F1r_8c_azFJpD1ezKiAd9p1tVcHRZzA1xQHT4g.JPEG/2018865230628386_1-1.jpg?type=w1200',
    address: '서울특별시 종로구 숭인동 72-48',
    location: {
      lat: 37.5741929,
      lng: 127.0168936
    },
    creator: 'u2'
  },
]

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces
