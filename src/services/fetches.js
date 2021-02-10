
export const fetchAllBreeds = (page) => {
    return fetch(`https://api.thedogapi.com/v1/breeds?api_key=f6649eee-08fa-4449-8abe-b57e7641ab6f&limit=15&page=${page}`)
        .then((res) => res.json());
};

export const fetchSingleBreed = (id) => {
    return fetch(`https://api.thedogapi.com/v1/images/search?api_key=f6649eee-08fa-4449-8abe-b57e7641ab6f&breed_id=${id}`)
        .then((res) => res.json())
        .then(json => ({
            image: json[0].url,
            name: json[0].breeds[0].name,
            temperament: json[0].breeds[0].temperament,
            origin: json[0].breeds[0].origin,
            bred_for: json[0].breeds[0].bred_for,
        }));
};
