import React from 'react'
import _reduce from 'lodash/reduce'
import { BBQ } from 'models'
import { GiBarbecue } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'

import './styles.scss'

interface cardProps {
    key?: string,
    onClick: any,
    eventData: BBQ
}

const Card: React.FC<cardProps> = ({ eventData, onClick }) => {
    const { name, date, guests } = eventData
    console.log('BBQ: ', eventData)

    const accCbk = (acc: any, guest: any) => {
      if (!guest.paid) return acc
      return acc += guest.value
    }

    const earned = _reduce(guests, accCbk, 0)

    console.log("O que o evento arrecadou: ", earned)
    return (
      <button onClick={onClick} className="card">
        <h3>{date}</h3>
        <h4>{name}</h4>
        <div className="icon"><GiBarbecue /></div>
        <div className="resume">
          <span>R$ {earned}</span>
          <span> <HiOutlineUserGroup /> {guests.length}</span>
        </div>
      </button>
    )
}

export default Card;