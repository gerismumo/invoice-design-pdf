import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[40px]">
        <div className="flex flex-col gap-[30px]">
            <Link to="/invoice"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Invoice Design
            </Link>
            <Link to="/salesReport"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Sales Report Design
            </Link>
            <Link to="/profitloss"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Profit Loss Report
            </Link>
            <Link to="/balanceSheet"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Balance Sheet
            </Link>
            <Link to="/laborReport"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Labor Report
            </Link>
            <Link to="/cashFlow"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Cash Flow Report
            </Link>
            <Link to="/customerReport"
            className='bg-[#525CEB] text-[#ffffff] text-[23px] px-[20px] py-[8px] w-[500px] flex flex-row justify-center rounded-[6px] '
            >
                Customer Report
            </Link>
        </div>
    </div>
  )
}

export default Home