import React from 'react'
import './About.css'
import { FaFaceAngry, FaWebflow } from 'react-icons/fa6'

const About = () => {

    const cardSection = [
        {
            icon: <FaWebflow />,
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },
        {
            icon: <FaWebflow />,
            title: 'Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tempore.'
        },

    ]
    return (
        <div className='about-section'>
            <h1 className='about-heading'>About Me</h1>

            <span className='aboutme-underline' />


            <div className='about-section-paragraph'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum in est modi ipsam nostrum numquam ad iusto perferendis, maiores labore. Alias odit consequuntur mollitia quidem ipsum? Magni, totam perspiciatis!</p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet dolorem accusamus vero quam ab error voluptates cum quo, id aspernatur sint porro vel quibusdam praesentium libero alias sed optio!
                    Quibusdam quasi a vero dolorum dignissimos ducimus? Neque, reprehenderit unde labore at delectus, aspernatur repellat laudantium distinctio totam quibusdam sunt alias ab quis doloribus, corporis deserunt est hic. Sint, laborum?
                </p>
            </div>



            <div className='what-Iam-doing'>
                <h1>What I'm Doing</h1>



                <div className='card-container'>
                    <span><FaFaceAngry /></span>


                    <div>
                        <h2>Web Design</h2>
                        <p>alsljdasd asdasd asdas d asd asd asd asd asd asd as das das d sa</p>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default About
