import { List, ListIcon, ListItem, SimpleGrid, Stack,Image } from "@chakra-ui/react";
import {MdRadioButtonChecked} from 'react-icons/md'

export default function MadeConvinent( ){
    return (
        <>
        <div columns={[1,1,2]} className='MadeSimpleSimpleGridFlip'>
         <Stack className="MadeSimpleStack">
             <h1 className="MadeH1">Keto made <b>convenient</b><b style={{color:'#2dd29a'}}>.</b></h1>
             <p className="MadeContent">Unlike other diet tracker apps, we make things personal. Fully customize your Carb Manager app for a unique low-carb experience and a hassle-free Keto lifestyle.</p>
             <List spacing={3}>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Curate meals to accomodate dietary restrictions and the picky eaters in your family</ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'} />Generate Keto meal plans and grocery lists to save you extra trips to the store.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Get seamless integration with FitBit, Garmin, and hundreds of other fitness apps and devices so you can track your holistic health progress in one convenient place.</ListItem>
             </List>
         </Stack>

         <Stack className="MadeSimpleStack">
             <Image  className="MadeSimpleImage" src='https://images.prismic.io/cm-website/8cbe5fef-bcff-4411-93a4-0016278bed73_screen-2%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
         </Stack>
        </div>
         </>
    )
}