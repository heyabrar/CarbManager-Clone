import { List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react";
import {SiCodechef } from "react-icons/si";  
import {FiDatabase } from "react-icons/fi";  
import {GiKitchenScale } from "react-icons/gi";  

export default function KetoForEveryone( ){
    return (
       <>
       <div className="KetoOutterDiv">
       <div>
            <h1 className="KFE-H1">Keto for <b>everyone<b style={{color : '#2dd29a'}}>.</b></b></h1>
            <p  className="KFE-Content">Keto isn’t just another diet. It’s a lifestyle. And Carb Manager isn’t just another Keto diet tracker. Our state-of-the-art features make it convenient and fun for everyone to join in.</p>
           <SimpleGrid className="KFE-List">
           <List spacing={3}>
                <ListItem><ListIcon as={SiCodechef} color='green.500' fontSize={'18px'}/>Save time with automatic meal plans and grocery lists tailored to specific food preferences and allergies</ListItem>
                <ListItem><ListIcon as={FiDatabase} color='green.500' fontSize={'18px'} />Stay inspired by our database of thousands of Keto recipes</ListItem>
                <ListItem><ListIcon as={GiKitchenScale} color='green.500' fontSize={'18px'}/>Have fun tracking the macros and micros of over 1 million foods with cutting-edge features, like our popular Snap Foods feature that uses photo recognition technology</ListItem>
            </List>
           </SimpleGrid>
        </div>

        <div>
            <img className="KetoForEveryoneImage" src="https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" alt="KetoForEveryoneImage" />
        </div>
       </div>
       </>
    )
}