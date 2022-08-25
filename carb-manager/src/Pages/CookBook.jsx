import { List, ListIcon, ListItem, SimpleGrid, Image,Box,Button } from "@chakra-ui/react";
import {GiOakLeaf} from 'react-icons/gi'
import CommonQuestions from "../Components/CommonQuestions";
import CookBookRecipes from "../Components/CookBookRecipes";
import GetBonus from "../Components/GetBonus";
import KetoDiet from "../Components/KetoDiet";
import KetoMadeEasy from "../Components/KetoMadeEasy";
import RecipesForFamily from "../Components/RecipesForFamilt";
import WhoKnewImproving from "../Components/WhoKnewImproving";
import YouWontMissCarb from "../Components/YouWontMiss";

export default function CookBook ( ){
    return (
        <>
        <div className="CookBookDummy"></div>
        <div className="CookBookBannerDiv">
            <div className="CookBookBannerContent">
                <List>
                    <ListItem className="CookBookHeadLine"><ListIcon as={GiOakLeaf} color='#2dd29a' fontSize={'35px'}/>Carb Manager's</ListItem>
                </List>
                <h1 className="CookBookH1"><b style={{color:'#2dd29a'}}>Keto</b> <b>Diet Cookbook</b></h1>
                <p className="EasiestWayToLooseWait">The Easiest Way to <b>Lose Weight Fast with 101 Recipes That You Can Track</b> in the App with QR Codes</p>
                <p className="TheOfficaialCompanion">The Official Companion Cookbook to the #1 Keto Diet Tracking App</p>
                <Box className="CookBookButtonsBox">
                    <Button  colorScheme={'white'}  bgColor="#2dd29a" borderRadius='50px' padding={'20px'}>Buy the Softcover</Button>
                    <Button colorScheme={'black'} bgColor={'black'} borderRadius='50px' ><Image className="AmazonButtonImageKeto" src="https://www.carbmanager.com/_nuxt/img/e7696e2.png"/></Button>   
                </Box>
                <SimpleGrid columns={[4,4,4]} style={{marginLeft:'40px'}}>
                    <Image boxSize={'100px'} src='https://www.carbmanager.com/_nuxt/img/36c91f7.svg'/>
                    <Image boxSize={'100px'} src='https://www.carbmanager.com/_nuxt/img/40b7e24.svg'/>
                    <Image boxSize={'100px'} src='https://www.carbmanager.com/_nuxt/img/08305ea.svg'/>
                    <Image boxSize={'100px'} src='https://www.carbmanager.com/_nuxt/img/b069d82.svg'/>
                </SimpleGrid>
            </div>

            <div>
                <img src="https://images.prismic.io/cm-website/099ea90a-e325-4f61-bea5-f726a803d0d8_cookbook-1.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" alt="" />
            </div>
        </div>
        <KetoMadeEasy/>
        <YouWontMissCarb/>
        <RecipesForFamily/>
        <WhoKnewImproving/>
        <KetoDiet/>
        <CookBookRecipes/>
        <GetBonus/>
        <CommonQuestions/>
        </>
    )
}