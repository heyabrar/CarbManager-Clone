import { List, ListIcon, ListItem, SimpleGrid, Stack,Image } from "@chakra-ui/react";
import {BsTrophy} from 'react-icons/bs'
export default function MadeSmart( ){
    return (
        <>
        <SimpleGrid columns={[1,2,2]} className='MadeSimpleSimpleGrid'>
         <Stack className="MadeSimpleStack">
             <h1 className="MadeH1">Keto made <b>delicious</b><b style={{color:'#2dd29a'}}>.</b></h1>
             <p className="MadeContent">In addition to using Carb Manager’s 50,000+ low-carb recipe database, Premium members get to:</p>
             <List spacing={3}>
                 <ListItem className="MadeList"><ListIcon as={BsTrophy} color='green.500' fontSize={'18px'}/>Access our exclusive Premium recipes straight from the Carb Manager test kitchens.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={BsTrophy} color='green.500' fontSize={'18px'} />Import recipes from the web right into the app, so you can easily save and organize your favorite ones.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={BsTrophy} color='green.500' fontSize={'18px'}/>Build “cheat days” into your daily meal goal plan for special occasions.</ListItem>
             </List>
         </Stack>

         <Stack className="MadeSimpleStack">
             <Image  className="MadeSimpleImage" src='https://images.prismic.io/cm-website/e44f824e-dc34-4d14-b9c7-dbc3aea5bece_screen-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
         </Stack>
        </SimpleGrid>
         </>
    )
}