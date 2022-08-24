import { SimpleGrid, Stack, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import {MdRadioButtonChecked} from 'react-icons/md'

export default function MadeSimple( ){
    return (
        <>
       <SimpleGrid columns={[1,1,2]} className='MadeSimpleSimpleGrid'>
        <Stack className="MadeSimpleStack">
            <Image  className="MadeSimpleImage" src='https://images.prismic.io/cm-website/5127c5e2-fbf4-4e64-b1c0-ff5326d27265_screen-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
        </Stack>

        <Stack className="MadeSimpleStack">
            <h1 className="MadeH1">Keto made <b>simple</b><b style={{color:'#2dd29a'}}>.</b></h1>
            <p className="MadeContent">Our Premium Keto Academy breaks down the basics of a low-carb lifestyle so you get all the details you need to start strong. Here’s a look at what you’ll discover:</p>
            <List spacing={3}>
                <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>What’s the difference between total and net carbs?</ListItem>
                <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'} />How much water should I drink?</ListItem>
                <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>How can I schedule a cheat day?</ListItem>
            </List>
        </Stack>
       </SimpleGrid>
        </>
    )
}