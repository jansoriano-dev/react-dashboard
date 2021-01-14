import axios from 'axios';

export const API = axios.create({
    baseURL: `https://api.adalo.com/v0/apps/d247fb81-8cb9-4acf-b35a-2372c1790476/collections/t_47oxkabh6spvmc4qsygxlzs52`,
    headers: {
        authorization: `Bearer dr6crmgblojdex7707gh3uo99`
    }
})


export default API