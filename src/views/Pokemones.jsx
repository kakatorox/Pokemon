import { useEffect, useState } from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export default function Pokemones() {
    
    const url_api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    const [ listadoPokemon, setListadoPokemon ] = useState('');
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");

    useEffect(() => {
        getListadoPokemones();
    }, []);

    const getListadoPokemones = async() => {
        const resp = await fetch(url_api);
        const data = await resp.json();
        let listado_pokemones = [];
        data.results.forEach(element => {
            let pokemon={
                value : element.name,
                label : element.name
            }
            listado_pokemones.push(pokemon);
        });
        setListadoPokemon(listado_pokemones);
    };

    const irPokemon = () => {
        pokemon ? navigate('/Detalle/' + pokemon.value) : alert("Selecciona un Pokemon")
    }

    const handleSelect =(data) => {
        setPokemon(data)
    }

    return (
        <div className="mt-5">
            <h2>Selecciona un pokemon</h2>  
            
            <div style={{width:350, margin:'0 auto', textTransform:'capitalize'}}>
                <Select
                    placeholder='Elija su Pokémon'
                    value={pokemon}
                    options={listadoPokemon}
                    onChange={handleSelect}
                /><button className='btn btn-danger text-white mt-3 mb-3' onClick={irPokemon}> Ver Pokemon</button>
            </div>           
        </div>
    );
}