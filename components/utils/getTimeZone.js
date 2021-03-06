function getTimeZone(stateCode){
    switch(stateCode){
        case "AL":
            return "CST";
        case "AK":
            return "AKST";
        case "AZ":
            return "MST";
        case "AR":
            return "CST";
        case "CA":
            return "PST";
        case "CO":
            return "MST";
        case "CT":
            return "EST";
        case "DE":
            return "EST";
        case "FL":
            return "EST";
        case "GA":
            return "EST";
        case "HI":
            return "HST";
        case "ID":
            return "MST";
        case "IL":
            return "CST";
        case "IN":
            return "EST";
        case "IA":
            return "CST";
        case "KS":
            return "CST";
        case "KY":
            return "CST";
        case "LA":
            return "CST";
        case "ME":
            return "EST";
        case "MD":
            return "EST";
        case "MA":
            return "EST";
        case "MI":
            return "EST";
        case "MN":
            return "CST";
        case "MS":
            return "CST";
        case "MO":
            return "CST";
        case "MT":
            return "MST";
        case "NE":
            return "CST";
        case "NV":
            return "PST";
        case "NH":
            return "EST";
        case "NJ":
            return "EST";
        case "NM":
            return "MST";
        case "NY":
            return "EST";
        case "NC":
            return "EST";
        case "ND":
            return "EST";
        case "OH":
            return "EST";
        case "OK":
            return "CST";
        case "OR":
            return "PST";
        case "PA":
            return "EST";
        case "RI":
            return "EST";
        case "SC":
            return "EST";
        case "SD":
            return "CST/MST";
        case "TN":
            return "CST/EST";
        case "TX":
            return "CST";
        case "UT":
            return "MST";
        case "VT":
            return "EST";
        case "VA":
            return "EST";
        case "WA":
            return "PST";
        case "WV":
            return "EST";
        case "WI":
            return "CST";
        case "WY":
            return "MST";
        default:
            return "";
    }
}

export default getTimeZone;