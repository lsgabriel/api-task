import React, {useState, useEffect, useCallback} from 'react';
import Card from '../../components/Card';
import api from '../../services/api';

import {ContainerStyles ,Bg} from './styles';

const Home = () =>{
    const [pictures, setPictures] = useState([]);

    const loadingPictures = useCallback(async ()=>{
        try{
            const response = await api.get(`search?query=black`,{
                headers:{
                    'Authorization': '563492ad6f917000010000018248432e88334375a6b5ecf2cf51a3a0',
                },
            });
            console.log(response.data);
            if(response.data) setPictures(response.data.photos);
            
        } catch (error){
            console.log("Erro ao acessar API");
        }
    }, []);
    
    useEffect(()=>{
        loadingPictures();
      }, [loadingPictures]);
      
  
    return(
        <ContainerStyles>
            <Bg></Bg>
            <h1 style={{color:'lightgray'}} className="display-1 text-center">Pictures</h1>
            <ul>
                {pictures.map(d => {
                    return(
                        <Card key={d.id.toString()} data={d} />
                    );
                })}
            </ul>
            <Bg></Bg>
        </ContainerStyles>
    );
}

export default Home;