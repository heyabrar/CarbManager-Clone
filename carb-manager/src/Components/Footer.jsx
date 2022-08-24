import {Image, List, ListIcon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {FaFacebookF,FaYoutube} from 'react-icons/fa'
import {BsInstagram,BsPinterest} from 'react-icons/bs'
import {ScrollButton} from "./ScrollTop";

export default function Footer( ){
    return (
     <>
        <div className="FooterlogoDiv">
            <Image boxSize={'50px'} src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"/> <p>Carb Manager ®️</p>
        </div>

        <SimpleGrid columns={[1,2,9]} className='FooterSimpleGrid1'>
            <Text>Features</Text>
            <Text>Premium</Text>
            <Text>Keto  Recipe</Text>
            <Text>Keto Cookbook</Text>
            <Text>Articles</Text>
            <Text>About Us</Text>
            <Text>Foods</Text>
            <Text>Log In</Text>
            <Text>Join For Free</Text>
        </SimpleGrid>

        <SimpleGrid columns={[1,2,7]} className='FooterSimpleGrid2'>
            <Text>Gift Cards</Text>
            <Text>Suppot Center</Text>
            <Text>Forums</Text>
            <Text>Terms of Service</Text>
            <Text>Privacy Policy</Text>
            <Text>Contact</Text>
            <Text>System Status</Text>
        </SimpleGrid>

        <SimpleGrid columns={[4,2,4]} className='FooterSimpleGrid3'>
            <List className="FaceBook"><ListIcon as={FaFacebookF}/></List>
            <List className="Instagram"><ListIcon as={BsInstagram}/></List>
            <List className="PintRest"><ListIcon as={BsPinterest}/></List>
            <List className="YouTube"><ListIcon as={FaYoutube}/></List>
        </SimpleGrid>

        <Stack className="FooterStack1">
            <Text>© 2010-2022 Wombat Apps LLC. All Rights Reserved.</Text>
        </Stack>

        <ScrollButton/>

        <Stack className="FooterStack">
            <Text>Carb Manager's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</Text>
        </Stack>
    </>
    )
}