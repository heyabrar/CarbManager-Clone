import { Box, SimpleGrid,Image } from "@chakra-ui/react";

export default function KetoMadeEasy ( ){
    return (
        <>
         <Box className="TheUltimateKeto">
            <h1>The Ultimate <b style={{color:'#2dd29a'}}>Keto</b> Cookbook for Your Healthy, Low Carb Lifestyle</h1>
            <p>101 exclusive Keto-friendly recipes you won’t find anywhere else</p>
        </Box>

       <div className='KetMadeCookBookColumnFlip'>
        <Box className="KetoMadeEasyBox">
            <Image className="KetoMadeEasyImage" src="https://images.prismic.io/cm-website/9ff0d62c-3313-48a5-9f84-106eb7200ea0_article_1.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/>
        </Box>

        <Box className="KetoMadeEasyBox">
            <h1 className="KatoMadeEasyH1">Keto Made <b>Easy</b><b style={{color: '#2dd29a'}}>.</b></h1>
            <p className="KatoMadeEasyPTag">Just scan the QR code that’s included with each recipe for easy tracking in the Carb Manager app. Just scan it. Log it. And get back to living your life!</p>
        </Box>
       </div>
        </>
    )
}