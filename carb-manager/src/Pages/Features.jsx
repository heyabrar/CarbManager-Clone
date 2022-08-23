import { Image } from "@chakra-ui/react";
import CarbManagerByNumbers from "../Components/CarbManagerByNumber";
import GetToKnowCarb from "../Components/GetToKnowCarb";
import KetoForBeyond from "../Components/KetoForBeyond";
import KetoForEveryone from "../Components/KetoForEveryone";
import KetoForLife from "../Components/KetoForLife";
import KetoForYou from "../Components/KetoForYou";
import Sponsors from "../Components/SponsorsImages";

export default function Featuress( ){
    return (
        <>
        <div className="Features-Banner-Outter-Div">
            <div className="Keto-Headline-Div">
                <h1 className="H1-Headline">Keto & Low-Carb Made Easy</h1> 
                <p className="The1">The #1 Low-Carb and Keto Diet App</p> 
                <p className="ForHealthy">For healthy & sustainable low-carb living</p>
               <div>
               <input type="text" placeholder="Enter Email Address" className="Input-Email"/>
               <button className="CreateAccountButton">Create Free Account</button>
               </div>
               <div className="GoogleAppleStore">
                <img src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png" alt="GooglePlay" />
                <img src="https://www.carbmanager.com/_nuxt/img/189f2dc.png" alt="AppleStore" />
               </div>
            </div>
            <div className="MobileDiv">
                <Image className="MobileScreenBanner" src="https://www.carbmanager.com/_nuxt/img/9bfac4e.png"/>
            </div>
        </div>
        <Sponsors/>
        <div className="GetToKnowDiv">
            <h1>Get to Know Keto & Low-Carb </h1>
            <p>And get results in as little as  <b style={{color: '#2dd29a'}}>3 weeks</b>.</p>
        </div>
        <KetoForYou/>
        <KetoForEveryone/>
        <KetoForLife/>
        <KetoForBeyond/>
        <GetToKnowCarb/>
        <CarbManagerByNumbers/>
        </>
    )
}