import React from 'react'


let card = (props) => {


    const isCard = () => {
        if(props.isCard){
            return 'card grey darken-3'
        }else{
            return ''
        }
    }

    return (
        <div id="card">
            <div className="row">
                <div className={"col s12 "+isCard()}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default card