class MarvelApiService {
    _getApiAddress = 'https://gateway.marvel.com:443/v1/public/';
    _getApiKey = 'apikey=c2fb7d3391d03d514976d0e4b75698d1';
    offset = 250;

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Sorry, it isn't working, fix it in MarvelApiService");
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this.offset) => {
        const res = await this.getResource(`${this._getApiAddress}characters?limit=9&offset=${offset}&${this._getApiKey}`);
        return res.data.results.map(item => {
            return this._transData(item);
        });
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._getApiAddress}characters/${id}?${this._getApiKey}`);
        return this._transData(res.data.results[0]);
    }

    _transData = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 200)}...` : 'Sorry, there is no description of this character.',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelApiService;