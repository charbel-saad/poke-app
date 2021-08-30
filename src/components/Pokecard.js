import React from 'react'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'




const PokeCard = ({pokemon}) => {
    return (
        <div ><li style={{listStyle:'none'}}>
            <a style={{listStyle:'none'}}>
                <Card key={pokemon.id} style={{backgroundColor:'white',borderRadius:'20px'}}>
                 <p>#{pokemon.id}</p>
                     <Card.Img variant="top" src={pokemon.sprites['front_default'] } style={{ height: '200px' ,width:'200px',alignSelf:'center'}}/>
                     <Card.Body>
                     <Card.Title style={{fontSize:'30px',textTransform:'uppercase'}} id="name">{pokemon.name}</Card.Title>
                    <Card.Text>
                        <h6  style={{ fontSize:'20px'}} id="height" >Height: {pokemon.height}</h6>  
                        <h7 style={{fontSize:'20px'}} id="width" >Weight: {pokemon.weight}</h7>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </a>
                </li>
        </div>
    

     
    )
};

export default PokeCard