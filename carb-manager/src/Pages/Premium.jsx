import {BsTrophy} from 'react-icons/bs'
import {Image, List,ListIcon, ListItem} from '@chakra-ui/react'
import WithPremiumYouCan from '../Components/WithPremiumYouCan'
import PremiumFeatures from '../Components/PremiumFeatures'
export default function Premium( ){
    return (
       <>   
       <div className='dummy'></div>
       <div className='PremuimBannerDiv'>
        <div className='PremiumBannerContent'>
            <List>
                <ListItem className='ThePowerOFPremium'><ListIcon as={BsTrophy} color='#2dd29a'/>The Power of Premium</ListItem>
            </List>
            <h1> Premium Members <br /> Report 3x The Results</h1>
            <p>Get even more support for your low-carb lifestyle.</p>
            <button className='GetPremiumNowButton'><BsTrophy/>Get Premium Now</button>
        </div>

        <div>
            <Image src='https://images.prismic.io/cm-website/66210043-cb59-43f1-9163-678a14300f3a_hero-img%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
        </div>
       </div>
       <WithPremiumYouCan/>
       <PremiumFeatures/>
       </>
    )
}