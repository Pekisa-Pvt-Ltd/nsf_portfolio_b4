import React from 'react'
import './section1.css'
import profilePicture from '../images/subahn.jpg'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const Section1 = () => {


    const userDetail = [
        {
            img: <MdEmail />,
            title: "Email",
            value: "tanweer@gmail.com"

        },
        {
            img: <FaPhone />,
            title: "Phone",
            value: "+923312345678"
        },
        {
            img: <FaBirthdayCake />,
            title: "Date of Birth",
            value: "5th May, 2000"
        },
        {
            img: <FaMapMarkerAlt />,
            title: "Location",
            value: "Karachi, Pakistan"
        },
    ]

    return (
        <div className='section-1'>

            <div className='section-1-first'>

                <div>
                    <img src={profilePicture} className='section-1-pp' />
                </div>

                <h1>Daniyal</h1>

                <div>
                    <p>Frontend Developer</p>
                </div>

                <span className='section-1-first-line'></span>
            </div>


            <div className='section-1-second'>
                {userDetail.map((item, index) => {
                    return (
                        <div className='section-1-data'>
                            <img src={item.img} />


                            <div>
                                <h1>{item.title}</h1>
                                <h4>{item.value}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>




        </div>
    )
}

export default Section1
