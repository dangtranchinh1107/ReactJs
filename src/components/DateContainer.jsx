import React, { useState } from 'react'
import DateDisplay from './DateDisplay';

const DateContainer = () => {
    // useState: quản lý trạng thái
    const [date, setDate] = useState(Date.now()) // useState(value.default) giá trị lúc bắt đầu
    console.log(date);
    return (

        <div className='text-center mt-7 text-3xl'>
            <input type="date" onChange={(e) => setDate(e.target.value)} />  {/* e là event  */}

            <DateDisplay date={date} />
        </div>
    )
}

export default DateContainer