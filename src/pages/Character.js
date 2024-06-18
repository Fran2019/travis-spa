import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    
    <div class="Character-inner">
        <article class="Characters-card">
        <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <article class="Character-card">
                <h3>Episode: ${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: ${character.location.name}</h3>
            </article>
        </article>
    </div>
    `;
    return view;
};

export default Character;