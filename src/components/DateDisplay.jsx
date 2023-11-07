import React from 'react'
import moment from 'moment'
const DateDisplay = (props) => {
    //Props truyền dữ liệu giữa các component
    const { date } = props
    return (
        <div className='text-3xl text-gray-500 text-center mt-6'>My date is: {moment(date).format('LLL')}
        </div>
    )
}

export default DateDisplay