import { List, ListIcon, ListItem, SimpleGrid, Stack,Image } from "@chakra-ui/react";
import {MdOutlineKeyboardVoice,MdAddAPhoto} from 'react-icons/md'
import {RiBarcodeFill} from 'react-icons/ri'

export default function MadeFast( ){
    return (
        <>
        <SimpleGrid columns={[1,1,2]} className='MadeSimpleSimpleGrid'>
         <Stack className="MadeSimpleStack">
             <Image  className="MadeSimpleImage" src='https://images.prismic.io/cm-website/a164a9a4-3762-41b5-bf62-660c9c755090_screen-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
         </Stack>
 
         <Stack className="MadeSimpleStack">
             <h1 className="MadeH1">Keto made <b>fast</b><b style={{color:'#2dd29a'}}>.</b></h1>
             <p className="MadeContent">Taking too long to search for a food? Save time with our state-of-the-art food logging features.</p>
             <List spacing={3}>
                 <ListItem className="MadeList"><ListIcon as={MdAddAPhoto} color='green.500' fontSize={'18px'}/>Photo Recognition <p>Our popular Snap Foods feature uses photo recognition, so it’s literally a snap.</p> </ListItem>
                 <ListItem className="MadeList"><ListIcon as={RiBarcodeFill} color='green.500' fontSize={'18px'} />Barcode Scanner <p>Scan the barcode of almost any food to find macros and micros in seconds.</p></ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdOutlineKeyboardVoice} color='green.500' fontSize={'18px'}/>Voice Log <p>Just say it using our voice-logging feature to keep track of carbs and exercises on the go.</p></ListItem>
             </List>
         </Stack>
        </SimpleGrid>
         </>
    )
}