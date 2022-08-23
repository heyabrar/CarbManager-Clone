import { List, ListIcon, ListItem } from "@chakra-ui/react";
import {MdCheckCircleOutline } from "react-icons/md";  

export default function KetoForYou( ){
    return (
       <>
       <div className="KetoOutterDiv">
        <div>
            <img className="KetoForYouImage" src="https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" alt="KetoForYouImage" />
        </div>

        <div>
            <h1 className="KFU-H1">Keto for <b>you<b style={{color : '#2dd29a'}}>.</b></b></h1>
            <p  className="KFU-Content">Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:</p>
           <div className="KFU-List">
           <List spacing={3}>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Lose weight quickly</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Optimize energy</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Restore balance</ListItem>
            </List>
                
            <List spacing={3}>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Reduce inflammation</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Gain mental clarity</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Manage cravings</ListItem>
            </List> 
           </div>
        </div>
       </div>
       </>
    )
}