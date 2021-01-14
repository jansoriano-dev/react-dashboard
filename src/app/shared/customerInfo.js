import axios from 'axios';

export const API = axios.create({
    baseURL: `https://api.adalo.com/v0/apps/d247fb81-8cb9-4acf-b35a-2372c1790476/collections/t_8yhy0oobea2jbvcbd7h0lmzqv`,
    headers: {
        authorization: `Bearer dr6crmgblojdex7707gh3uo99`
    }
})


export default API