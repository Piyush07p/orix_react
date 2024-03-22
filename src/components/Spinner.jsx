import React from 'react'

const Spinner = () => {
    return (
        <>
            <div class="page-loader">
                <div class="spinner">
                    <p>loading...</p>
                    <div class="spinner-area spinner-first"></div>
                    <div class="spinner-area spinner-second"></div>
                    <div class="spinner-area spinner-third"></div>
                </div>
            </div>

        </>
    )
}

export default Spinner