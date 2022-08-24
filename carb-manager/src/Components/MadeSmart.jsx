import { List, ListIcon, ListItem, SimpleGrid, Stack,Image } from "@chakra-ui/react";
import {MdRadioButtonChecked} from 'react-icons/md'
export default function MadeSmart( ){
    return (
        <>
        <SimpleGrid columns={[1,1,2]} className='MadeSimpleSimpleGrid'>
        <Stack className="MadeSimpleStack">
             <Image  className="MadeSimpleImage" src='https://images.prismic.io/cm-website/c22aeaa6-6b38-41ed-af47-4d9acc79aac3_screen-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
         </Stack>
         <Stack className="MadeSimpleStack">
             <h1 className="MadeH1">Keto made <b>smart</b><b style={{color:'#2dd29a'}}>.</b></h1>
             <p className="MadeContent">Want to unlock the real genius of going low-carb? Check out these other amazing features.</p>
             <List spacing={3}>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Advanced insights & reporting on your daily nutrition to understand specifically where you can improve.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'} />Weight change predictions based on your profile and net calorie target.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Meal analysis to discover better ways to boost your metabolism and reduce hunger.</ListItem>
                 <ListItem className="MadeList"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Correlations to plot your nutrition, sleep, exercise, and other variables against vital health readings.</ListItem>
             </List>
         </Stack>        
        </SimpleGrid>
         </>
    )
}