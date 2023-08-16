import React from 'react'

const Card = (Props) => {
    return (
        <>
            <div className='CardBody'>
                <img src={Props.imgsrc} alt='Movie'></img>
                <div className='OverLay'>
                    <div className='TitleBox'>
                        <p className='origin'>{Props.origin} Presents</p>
                        <p className='title'>{Props.title}</p>
                    </div>
                    <p className='details'>{Props.details}</p>
                    <div className='ButtonGroup'>
                        <button>Watch Now</button>
                        <button>Add to favourite</button>
                    </div>
                </div>
            </div>
        </>
    )
}



const Demo=()=>{
    return (
        <>
            <div className='CardBody'>
                <img src="https://m.media-amazon.com/images/I/41ThYzbpUcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt='Movie'></img>
                <div className='OverLay'>
                    <div className='TitleBox'>
                        <p className='origin'>Netflix Presents</p>
                        <p className='title'>Black Mirror</p>
                    </div>
                    <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto vel et id ut facilis aut possimus o</p>
                    <div className='ButtonGroup'>
                        <button>Watch Now</button>
                        <button>Add to favourite</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
