import { List, ListIcon, ListItem } from "@chakra-ui/react";
import {MdRadioButtonChecked } from "react-icons/md";  

export default function KetoForLife( ){
    return (
       <>
       <div className="KetoOutterDiv">
       <div>
            <img className="KetoForLifeImage" src="https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max" alt="KetoForLifeImage" />
        </div>

       <div>
            <h1 className="KFL-H1">Keto for <b>life<b style={{color : '#2dd29a'}}>.</b></b></h1>
            <p  className="KFL-Content">Carb Manager is here to help you stick to your low-carb lifestyle.</p>
           <div className="KFL-List">
           <List spacing={3}>
                <ListItem><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Worried about cravings?</ListItem>
                <ListItem><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'} />Want to know how your kids can do it too?</ListItem>
                <ListItem><ListIcon as={MdRadioButtonChecked} color='green.500' fontSize={'18px'}/>Wonder how long before you see results?</ListItem>
                <ListItem><p>Our popular blog will keep you inspired and informed. And our active social media community lets you stay connected to other low-carb folks, so you’ll always get the support you need.</p></ListItem>
            </List>
           </div>
        </div>
       </div>
       </>
    )
}