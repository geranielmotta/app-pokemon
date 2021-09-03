import {api, pokemon} from '../router';

async function getAll() {
  return await api.get(pokemon.getAll);
}
async function getOne(id) {
  return await api.get(pokemon.getOne.replace(':id', id));
}

export {
  getAll,
  getOne
};
