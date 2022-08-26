import { List, ListIcon, ListItem,SimpleGrid } from "@chakra-ui/react";
import {MdCheckCircleOutline } from "react-icons/md";  

export default function KetoForBeyond( ){
    return (
       <>
       <div className="KetoOutterDiv">
        <div>
            <h1 className="KFB-H1">Keto <b>beyond<b style={{color : '#2dd29a'}}>.</b></b></h1>
            <p  className="KFB-Content">We go way beyond the typical low-carb tracker to make sure you’re at your best. With Carb Manager, you can easily track your:</p>
           <SimpleGrid className="KFB-List">
           <List spacing={3}>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Ketonesly</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Insuliny</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Glycemic load</ListItem>
            </List>
                
            <List spacing={3}>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Blood glucose</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />Intermittent fasting</ListItem>
                <ListItem><ListIcon as={MdCheckCircleOutline} color='green.500' fontSize={'18px'} />GKI and much more...</ListItem>
            </List> 
           </SimpleGrid>
        </div>
        <div>
            <img className="KetoForBeyond" src="https://images.prismic.io/cm-website/21877cf5-6425-41cf-b50d-41a16715d23b_article-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" alt="KetoBeyond" />
        </div>
       </div>
       </>
    )
}