import React from 'react'

import BBQ from 'models/bbq'

interface cardProps {
    key?: string,
    data: BBQ
}

const Card: React.FC<cardProps> = ({ data }) => {
    console.log('BBQ: ', data)
    return <div>{data.name}</div>
}

export default Card;