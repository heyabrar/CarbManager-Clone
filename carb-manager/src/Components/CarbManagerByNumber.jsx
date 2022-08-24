import { List, ListIcon, SimpleGrid } from "@chakra-ui/react";
import {GiChickenLeg,GiKitchenScale} from 'react-icons/gi'
import {RiChatSmile3Fill} from 'react-icons/ri'
import {BsStarHalf} from 'react-icons/bs'

 
export default function CarbManagerByNumbers ( ){
    return (
        <>
        <div  className="CarbManagerByNumbersDiv">
            <h1>Carb Manager by the Numbers</h1>
            <p>Join the millions who’ve discovered how easy it is to plan, track, and manage a low-carb Keto diet with Carb Manager.</p>
        </div>
        <SimpleGrid columns={[1,2,4]} className='CrabManagerByNumberSimpleGrid'>
            <List><ListIcon as={GiChickenLeg} color='red' fontSize='50px'/><p className="Followers">3000+</p><p className="FollowersContent"><b>Exclusive Keto recipes</b> in our database. You’ll always have an answer when your family asks “Whats for dinner?”</p></List>
            <List><ListIcon as={RiChatSmile3Fill} color='lightblue' fontSize='50px'/><p className="Followers">8M</p><p className="FollowersContent"><b>Happy customers</b> living a healthy, vibrant, low-carb lifestyle with the help of Carb Manager.</p></List>
            <List><ListIcon as={BsStarHalf} color='orange' fontSize='50px'/><p className="Followers">4.8</p><p className="FollowersContent"><b>Average app store rating. </b> People love us! Carb Manager is one of the highest rated health & fitness apps in both the iOS store and Google Play.</p></List>
            <List><ListIcon as={GiKitchenScale} color='green' fontSize='50px'/><p className="Followers" >84M+</p><p className="FollowersContent"><b>Avocados eaten </b> by hungry Carb Manager users on low-carb health and wellness journeys.  </p></List>
        </SimpleGrid>
        </>
    )
}