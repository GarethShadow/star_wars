const _apiBase = "https://swapi.dev/api";
const _imageBase = "https://starwars-visualguide.com/assets/img";

export const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return res.json();
};

const extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
};

const transformPerson = (person) => {
    return {
        id: extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
    }
};

export const getAllPeople = async () => {
    const res = await getResource("/people/");
    return res.results.map((item) => transformPerson(item)).slice();
};

export const getPerson = async (id) => {
    const res = await getResource(`/people/${id}`)
    return transformPerson(res);
};

export const getPersonImage = (id) => {
    return `${_imageBase}/characters/${id}.jpg`;
};

const transformPlanet = (planet) => {
    return {
        id: extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
    }
};

export const getAllPlanets = async () => {
    const res = await getResource("/planets/")
    return res.results.map((item) => transformPlanet(item)).slice();
};

export const getPlanet = async (id) => {
    const res = await getResource(`/planets/${id}/`);
    return transformPlanet(res);
}

export const getPlanetImage = (id) => {
    return `${_imageBase}/planets/${id}.jpg`
}

const transformStarship = (starship) => {
    return {
        id: extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
    }
};

export const getAllStarships = async () => {
    const res = await getResource("/starships/")
    return res.results.map((item) => transformStarship(item)).slice();
};

export const getStarship = async (id) => {
    const res = await getResource(`/starships/${id}/`);
    return transformStarship(res);
}

export const getStarsipImage = (id) => {
    return `${_imageBase}/starships/${id}.jpg`;

}