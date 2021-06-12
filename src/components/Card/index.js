import React from 'react';
import {CardStyles, Image} from './styles';

const Card = ({data}) =>{
    return(
        <div>
            <CardStyles className="bg-info">
                <Image src={data.src.original} alt='img'/>
            </CardStyles>
        </div>
    );
}

export default Card;