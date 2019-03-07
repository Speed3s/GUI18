import React, {Component} from "react";
import {Link} from "react-router-dom";
import { TiHome } from 'react-icons/ti';
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

var isoCountries = {
    'AR' : 'Argentina',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'BD' : 'Bangladesh',
    'BE' : 'Belgium',
    'BR' : 'Brazil',
    'CA' : 'Canada',
    'CN' : 'China',
    'CR' : 'Costa Rica',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'EG' : 'Egypt',
    'FJ' : 'Fiji',
    'GR' : 'Greece',
    'IT' : 'Italy',
    'JP' : 'Japan',
    'KR' : 'South Korea',
    'MG' : 'Madagascar',
    'MU' : 'Mauritius',
    'MA' : 'Morocco',
    'NL' : 'Netherlands',
    'NZ' : 'New Zealand',
    'SO' : 'Somalia',
    'TR' : 'Turkey',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'VA' : 'Vatican City',
    'ZW' : 'Zimbabwe'
};

function getCountryName(countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

function Countries(countryCode){
    switch(countryCode){   
        case "AR": return [3858204,3428577,3866425,3435525,3435765,3843436,3433487,3429949,3430383,3839482];
        case "AU": return [2207349,2058430,2171000,2154855,2166584,6943577,2065337,2176264,7839760,2206089];
        case "AT": return [2760380,2760523,2760704,2760797,2760814,2761689,2761772,7873700,7873332,7873305];
        case "BD": return [1185099,1185116,1185138,1185206,1185251,1336136,1185100,1185241,1205733,1336133];
        case "BE": case "BF": return [2784549,2793079,2795101,2354349,6930703,2792008,2783856,2783213,2792119,2802627];
        case "BR": return [3449340,3398584,2802248,2787601,6957848,3398584,3449340,3461874,3462103,3386042];
        case "CA": return [5969093,6173577,6138201,5946222,6166580,6064180,5964214,5909294,6158027,6168768];
        case "CN": return [2052479,1281659,1790413,2033115,1529144,1786455,1787837,1791056,1791347,1791464];
        case "CR": return [3621194,3621054,3623369,3621644,3624171,3623064,3623580,3622660,3623307,3621768];
        case "CZ": return [3072342,3064531,3073760,3063853,3064377,3064379,3069236,3067882,3074692,3061412];
        case "DK": return [2616011,2618525,2864067,2911288,2613539,2616933,2622666,2618515,2614565,2615351];
        case "EG": return [358115,358172,358269,358274,358970,359173,359280,359576,360048,360531];
        case "FJ": return [2201079,2204113,4036017,2202999,2201391,7302224,2205218,2202179,2198148,2201316];
        case "GR": return [264670,734712,733839,8133837,258634,262187,8133919,8133694,8133777,8133922];
        case "IT": return [6537727,6542286,6539304,6537912,6537811,6542103,6539851,6541973,6541296,6541351];
        case "JP": return [1861387,1857578,2130135,1863250,1852699,1853163,1864427,1861816,1857451,2128894];
        case "KR": return [1832257,1832501,1832743,1832909,1840886,1841976,1845519,1846095,1925943,6367618];
        case "MG": return [1054035,1073482,1076194,1079088,1076454,1078553,1083968,1062663,1069166,1082992];
        case "MU": return [1106788,934778,1106771,934154,1106763,1106782,934195,934240,934072,1547449];
        case "MA": return [2528659,2538474,6545495,6547296,2550252,2542997,2537878,6547286,6545720,2528907];
        case "NZ": return [6209526,6217081,6217203,6241300,2186239,2207730,6244857,2182715,6612108,2190767];
        case "NL": return [2751688,2753467,2754273,7874246,2748760,2759797,2755251,2746012,2758991,2755498];
        case "SO": return [6268943,61993,64661,64013,58933,53654,56335,56399,63571,65785];
        case "TR": return [750594,325363,311044,746574,315373,743439,750605,315498,862468,749184];
        case "AE": return [291696,291696,290594,292223,290845,292913,291110,292953,8056564,292239];
        case "GB": return [2643743,2649889,7290629,2637490,2643123,2653261,2647461,2633858,2648579,2650225];
        case "US": return [5128581,4310411,4347820,4159872,4736286,7217562,4494053,4896861,5413481,5731315,5273134];
        case "VA": return [6691831];
        case "ZW": return [884428,889191,889453,889942,893697,894239,890299,1106407,1085520,893549,886864];
        default: return ; 
    }
}

function HumidityFound(currentH, chosenHum){
    if ((chosenHum-8) < currentH && currentH < (chosenHum+8)) {
        return true;
    }
}

function TempFound(currentTemp, chosenTemp){
    if ((chosenTemp - 3) < currentTemp && currentTemp < (chosenTemp + 3)){
        return true;
    }
} 


class FinalPage extends Component{
    constructor(props)
    {
        super(props);
        this.state = { 
            Country : props.location.country,
            Temperature : props.location.temperature,
            Humidity : props.location.humidity,
            size: 0, 
            locations: [],              
        }
    }

    

    async componentDidMount() {

        try{
            const getCityID = Countries(this.state.Country)
            for (var i = 0; i < getCityID.length; i++ ){
                const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${getCityID[i]}&appid=${Api_Key}&units=metric`);
                const res = await api_call.json();
                console.log(res);

                if (HumidityFound(res.main.humidity, this.state.Humidity)){
                    if (TempFound(res.main.temp, this.state.Temperature)) {
                        this.setState(state => {
                            const size = state.size + 1;

                            var lo = state.locations.concat(
                                res.name+"     " ,
                                res.main.temp + "°C",
                                res.weather[0].description,
                                "Humidity: " + res.main.humidity+"%",)
        
                            const locations = lo;
                            return {size,locations};
                        })
                    }
                }
            }
        }
        catch(err){
            
            
        }
    }

    createTable = () => {
        let table = []
        var white = 1
        // Outer loop to create parent
        for (let i = 0; i < this.state.size; i++) {
            let children = []
            children.push(<div><br></br><br></br><br></br></div>)
          //Inner loop to create children
            for (let j = 0; j < 2; j++) {
               if((i%2)===0){
                    if(j===0){
                        white +=1
                        if(white%2===0){
                            children.push(<td class="white"><h2>{this.state.locations[j+(i*2)]}  </h2></td>)
                        }
                        else{
                            children.push(<td class="blue"><h2>{this.state.locations[j+(i*2)]}  </h2></td>)
                        }
                    }
                    else{
                        if(white%2===0){
                            children.push(<td class ="white"><h1>{this.state.locations[j+(i*2)]}</h1></td>)
                        }
                        else{
                            children.push(<td class ="blue"><h1>{this.state.locations[j+(i*2)]}</h1></td>)
                        }
                    }
                }
                else{
                    if(white%2===0){
                        children.push(<td class = "white"><h3>{this.state.locations[j+(i*2)]}</h3></td>)
                    }
                    else{
                        children.push(<td class = "blue"><h3>{this.state.locations[j+(i*2)]}</h3></td>)
                    }
                }
            }
          
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }

    
      render() {
        return(

            <div>
                <Link to="./Home" onClick={()=>this.pushState('./Home')}>
                    <TiHome size={42} />
                </Link>
                <h1>{getCountryName(this.state.Country)}</h1>
                {this.createTable()}
            </div>
        )
    }
}


export default FinalPage;
