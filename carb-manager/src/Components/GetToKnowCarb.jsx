import { Image, List, ListIcon, SimpleGrid } from "@chakra-ui/react";
import {MdAssignmentTurnedIn,MdLocalGroceryStore,MdOpacity } from 'react-icons/md'
import {FaCheese} from 'react-icons/fa'
import {SiSimpleanalytics} from 'react-icons/si'

export default function GetToKnowCarb( ){
    return (
        <>
        <div className="GetToKnowHeadLineDiv">
            <h1>Get to Know Carb Manager</h1>
            <p>The all-in-one Keto app. And your new <b style={{color:' #2dd29a'}}>best friend.</b></p>
        </div>

        <SimpleGrid columns={[1,1,3]} className="threebytwo">
            <div className="Col1">
                 <List> <ListIcon as={MdAssignmentTurnedIn} color='red' fontSize='40px'/></List>
                <p className="threebytwoContentHeading">Track Every Bite</p>
                <p className="threebytwoContent">Log food and meals in seconds with the industry’s most advanced food logger, featuring new carb counts, micros, and macronutrients. Our Premium version lets you log food by just snapping a picture! #LikeMagic</p>
            </div>

            <div className="Col2">
                <Image className="MealsMobileScreen" src=" https://www.carbmanager.com/_nuxt/img/dd32400.png" alt="bla" />
            </div>

            <div className="Col3">
               <List> <ListIcon as={MdLocalGroceryStore} fontSize='40px' color='blue'/></List>
                <p className="threebytwoContentHeading">Simplify Grocery Runs</p>
                <p className="threebytwoContent">Save time at the grocery store! Generate personalized meal plans and shopping lists based on your preferences and macros, or choose from one of our many curated meal plans for all diet types.</p>
            </div>
            

            <div className="Col4" >
            <List> <ListIcon as={FaCheese} fontSize='40px' color='orange'/></List>
            <p className="threebytwoContentHeading">Cook “Yum-Worthy” Keto Meals</p>
            <p className="threebytwoContent">Who said low-carb was boring? Satisfy even the pickiest eaters in your family with our exclusive, premium database of delicious Keto recipes.</p>
            </div>

             <div className="Col5">
             <List> <ListIcon as={MdOpacity} color='blue' fontSize='40px'/></List>
                <p className="threebytwoContentHeading">Track Every Bite</p>
                <p className="threebytwoContent">Log food and meals in seconds with the industry’s most advanced food logger, featuring new carb counts, micros, and macronutrients. Our Premium version lets you log food by just snapping a picture! #LikeMagic</p>
            </div> 

            <div className="Col6">
            <List> <ListIcon as={SiSimpleanalytics} fontSize='40px' color={'purple'}/></List>
            <p className="threebytwoContentHeading">Analyze Advanced Health Metrics</p>
            <p className="threebytwoContent">Go way beyond the typical calorie counter. Track ketones, blood glucose, insulin, diabetes carbs, intermittent fasting, glycemic load, GKI, and much much more.</p>
            </div>
        </SimpleGrid>
        </>
    )
}