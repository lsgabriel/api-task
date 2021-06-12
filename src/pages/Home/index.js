import React, {useState, useEffect, useCallback} from 'react';
import Card from '../../components/Card';
import api from '../../services/api';

import {Bg} from './styles';

const Home = () =>{
    const [pictures, setPictures] = useState([]);
    /* const [perPage, setPerPage] = useState(15);*/

    const loadingPictures = useCallback(async ()=>{
        try{
            const response = await api.get(`/curated`,{
                headers:{
                    'Authorization': '563492ad6f917000010000018248432e88334375a6b5ecf2cf51a3a0',
                },
            });
            console.log('##teste', response.data);
            if(response.data) setPictures(response.data.photos);
            
        } catch (error){
            console.log("Erro ao acessar API");
        }
    }, []);
    
    useEffect(()=>{
        loadingPictures();
      }, [loadingPictures]);
      
  
    return(
        <div>
            <Bg></Bg>
            <h1 className="display-1 text-center">Pictures</h1>
            <ul>
                {pictures.map(d => {
                    return(
                        <Card key={d.id.toString()} data={d} />
                    );
                })}
            </ul>

            <Bg></Bg>
        </div>
    );
}

export default Home;