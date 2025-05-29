import React from 'react'
import { GrAchievement } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { FiCheckCircle } from 'react-icons/fi';
import { FcCustomerSupport } from "react-icons/fc";
import Featur from './UI/Featur';

const Features = () => {
  return (
    <div className='bg-amber-50 p-[100px] mt-5'>
        <div className='flex justify-center mx-2 px-3'>
            <div className='px-4'>
                 <Featur p='Crafted from top materials' span='High Quality' icon={<GrAchievement/>}/>
            </div>

            <div className='px-4'>
                <Featur p='Over two years' span='Warranty Protection' icon={<FiCheckCircle/>}/>
            </div>

            <div>
                <Featur p='Crafted from top materials' span='High Quality' icon={<FaShippingFast/>}/>
            </div>

            <div>
                <Featur p='Dedicated Support' span='24/7 support' icon={<FcCustomerSupport/>}/>
            </div>
        </div>
    </div>
  )
}

export default Features