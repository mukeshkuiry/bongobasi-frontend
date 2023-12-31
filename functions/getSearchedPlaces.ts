import axios from "axios"

export default async function getSearchedPLaces(enteredLocationString: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${enteredLocationString.replace(/\s/g, "")}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&autocomplete=true&limit=1`
    console.log(enteredLocationString);
    
    try {
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        console.log(err)
    }
}