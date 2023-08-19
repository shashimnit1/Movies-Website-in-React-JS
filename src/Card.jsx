import React, { useState } from 'react'


const Card = (Props) => {
    const [likeValue, setLike] = useState('like')
    function likeOp() {
        return (setLike("Liked"));
    }

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
                        <button >Watch Now</button>
                        {/* <button style={{ Color: "transparent" }}>
                            <FavoriteIcon style={{ width: "3rem", height: "3rem", Color: "pink" }} />
                        </button> */}
                        <button id="like" onClick={likeOp}>
                            <i class="fa fa-thumbs-up"></i>
                            <span class="icon">{likeValue}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Card
