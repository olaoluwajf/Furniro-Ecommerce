import React from 'react'
import { GrAchievement } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { FiCheckCircle } from 'react-icons/fi';
import { FcCustomerSupport } from "react-icons/fc";
import Featur from './UI/Featur';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className='bg-amber-50 p-[80px] mt-5 items-center'>
        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center mx-2 px-3'>
            <Link className='px-4'>
                 <Featur p='Crafted from top materials' span='High Quality' icon={<GrAchievement/>}/>
            </Link>

            <Link className='px-4'>
                <Featur p='Over two years' span='Warranty Protection' icon={<FiCheckCircle/>}/>
            </Link>

            <Link>
                <Featur p='Crafted from top materials' span='High Quality' icon={<FaShippingFast/>}/>
            </Link>

            <Link>
                <Featur p='Dedicated Support' span='24/7 support' icon={<FcCustomerSupport/>}/>
            </Link>
        </div>
    </div>
  )
}

export default Features