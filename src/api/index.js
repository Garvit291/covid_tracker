import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;
    } catch (err) {

    }

}

