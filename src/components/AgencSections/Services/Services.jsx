/**====================Services Part start================= */

import React from 'react'
import one from "../../../assets/ServicesImg/one.png"
import two from "../../../assets/ServicesImg/two.png"
import three from "../../../assets/ServicesImg/three.png"
import four from "../../../assets/ServicesImg/four.png"
import five from "../../../assets/ServicesImg/five.png"
import six from "../../../assets/ServicesImg/six.png"




const Services = () => {
    const allServiceBox = [
        {
            id: 1,
            icon: one,
            title: "Web Design",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        },
        {
            id: 2,
            icon: two,
            title: "UI/UX Design",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        },
        {
            id: 3,
            icon: three,
            title: "Motion Graphics",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        },
        {
            id: 4,
            icon: four,
            title: "3D Animation",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        },
        {
            id: 5,
            icon: five,
            title: "Digital Marketing",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        },
        {
            id: 6,
            icon: six,
            title: "Web Development",
            description: "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."

        }

    ]

    return (
        <>
            <div className='servicePart'>

                <div className="container">
                    <div className='flex items-center justify-center flex-col mb-[50px]'>
                        <h2 className='font-bold text-[40px]'>Our Provided Services</h2>
                        <p className='w-[609px] font-normal	text-[16px] mt-5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                    </div>
                    <div className='Service flex flex-wrap gap-x-3 gap-y-3 justify-between'>
                        {allServiceBox.map((item) => (
                            <div className='serviceBox w-[390px] flex  items-center justify-center flex-col pt-[80px] pb-[47px] hover:border rounded-lg' key={item.id}>
                                <picture>
                                    <img src={item.icon} alt={item.icon} className='' />
                                </picture>
                                <h4 className='font-bold text-[25px] mt-[40px] mb-5'>{item.title}</h4>
                                <p className='w-[326px] font-normal text-[17px]'>{item.description}</p>
                            </div>
                        ))
                        }
                    </div>

                </div>


            </div>
        </>
    )
}

export default Services

/**====================Services Part end================= */
