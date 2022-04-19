import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>

            <div className='journal__entry-picture' style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5fd777415cafe8d7da0e2314/curiosidades-universo_0.jpg)'
            }}>

            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-tittle'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Lorem  texo basura
                </p>

            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
