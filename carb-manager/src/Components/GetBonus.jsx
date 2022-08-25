import { Box, Image, List, ListItem, SimpleGrid,ListIcon, Button } from "@chakra-ui/react";
import {MdRadioButtonChecked} from 'react-icons/md'

export default function GetBonus ( ){
    return (
        <>
         <Box className="TheUltimateKeto">
            <h1 style={{fontSize:'40px', lineHeight:'50px'}}><b style={{color:'#2dd29a'}}>Get Bonuses</b> for ordering the Carb Manager Ultimate Keto Cookbook</h1>
        </Box>
        <SimpleGrid columns={[1,1,2]} className='GetBonusSimpleGrid'>
            <Box className="GetBonusBox">
                <Image  className="GetBonusImage" src="https://images.prismic.io/cm-website/a9fa17e2-7f8b-437b-ab08-591a738cdd14_cookbook-4.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/>
            </Box>
            <Box className="GetBonusBox">
                <List>
                <ListItem  className="GetBonusListContent"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Printable Keto Pantry List</ListItem>
                <ListItem  className="GetBonusListContent"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'} />Exclusive Bonus Recipes E-book</ListItem>
                <ListItem  className="GetBonusListContent"><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>25% Off Your Carb Manager Premium Membership</ListItem>
                </List>
                <Button bgColor={'#2dd29a'} colorScheme='white' borderRadius='50px' padding={'25px'}>Claim Your Bonus </Button>
            </Box>
        </SimpleGrid>
        </>
    )
}