import React from 'react';


function Card(props){
   return( 
        <dl className="dictionary">
            <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.img}
                </span>
                <span>{props.title}</span>
            </dt>
            <dd>
                {props.descr}
            </dd>
            </div>
        </dl>
        )
    }


export default Card;