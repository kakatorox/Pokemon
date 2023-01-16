import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Detalle() {
    const { nombre } = useParams();
    const [pokemon, setPokemon] = useState('');
    const url_api ='https://pokeapi.co/api/v2/pokemon/'
    
    useEffect(() => {
        getInfoPokemon(nombre);
    }, [nombre]);

    const getInfoPokemon = async (nombre) => {
        const resp = await fetch(url_api + nombre);
        const data = await resp.json();
        console.log(data)
        let pokemonData = {
            id : data.id,
            name : data.name,
            stats : data.stats,
            img : data.sprites.other['official-artwork'].front_default,
            abilities : data.abilities


        }
        setPokemon(pokemonData)        
    };

    return (
        <div className='d-flex justify-content-center pt-5'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={pokemon?.img} />
                <Card.Body>
                    <Card.Title>
                        <b>{pokemon.name?.toUpperCase()}</b>
                        <br/> 
                        Pokedex Posicion: {pokemon?.id}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', textTransform: 'capitalize' }}>
                        <h4>Stats</h4>
                        
                            {
                                pokemon.stats?.map((e) => {
                                    return (<ListGroup.Item>{e.stat.name}: {e.base_stat}</ListGroup.Item>)
                                })                        
                            }
                        
                    </div>
                    <div style={{ width: '50%', textTransform: 'capitalize' }}>
                        <h4>Habilidades</h4>
                        
                            {
                                pokemon.abilities?.map((e) => {
                                    return (<ListGroup.Item>{e.ability.name}</ListGroup.Item>)
                                })
                            }
                        
                    </div>
                </div>
            </Card>
        </div> 
    );
}