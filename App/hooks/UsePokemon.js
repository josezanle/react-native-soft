import {useState, useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = id => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const loadPokemon = async () => {
    const res = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
