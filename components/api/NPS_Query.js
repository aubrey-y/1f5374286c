const NPS_API_KEY = "6MiloMzshmKULHF4sKKNhu1aa6QjOZ1aWxRg3Ug2";

function NPS_Query(endpoint, parkCode, fields){
    return "https://developer.nps.gov/api/v1/" + endpoint + "?limit=500&parkCode=" + parkCode + "&fields=" + fields.join() + "&api_key=" + NPS_API_KEY;
}

export default NPS_Query;