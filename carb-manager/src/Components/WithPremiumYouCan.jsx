import { List, SimpleGrid,ListIcon, Stack } from "@chakra-ui/react";
import {FaShoppingBasket} from 'react-icons/fa'
import {ImSpoonKnife} from 'react-icons/im'
import {SiCodechef} from 'react-icons/si'
import {AiTwotoneThunderbolt} from 'react-icons/ai'
import {TbDeviceWatch} from 'react-icons/tb'
import {GiNoodles,GiWeightScale} from 'react-icons/gi'
import {VscGraphLine} from 'react-icons/vsc'

export default function WithPremiumYouCan( ){
    return (
        <>
        <div className="WithPremiumYouCanHeadline">
            <h1>With Premium You Can</h1>
        </div>
        <SimpleGrid columns={[2,2,4]} className='PremiumSimpleGrid' spacing={'20px'}>
           <Stack   className="PremiumStack"> <List><ListIcon as={FaShoppingBasket} fontSize='40px' color={'#2dd29a'}/><p className="WPYC-Header">Generate</p> <p className="WPYC-Content">Personalized meal plans and shopping lists</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={ImSpoonKnife} fontSize='40px' color={'red'}/><p className="WPYC-Header">Unlock</p> <p className="WPYC-Content">State-of-the-art food logging features</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={SiCodechef} fontSize='40px' color={'brown'}/><p className="WPYC-Header">Implement</p> <p className="WPYC-Content">Carb Cycling by customizing your daily goals</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={AiTwotoneThunderbolt} fontSize='40px' color={'rgb(82, 165, 238)'}/><p className="WPYC-Header">Learn</p> <p className="WPYC-Content">About Keto with our exclusive video jumpstart course</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={TbDeviceWatch} fontSize='40px' color={'rgb(82, 165, 238)'}/><p className="WPYC-Header">Integrate</p> <p className="WPYC-Content">Your FitBit, Garmin, or other fitness device or app</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={GiNoodles} fontSize='40px' color={'orange'}/><p className="WPYC-Header">Access</p> <p className="WPYC-Content">Our delicious Premium recipes</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={VscGraphLine} fontSize='40px' color={'red'}/><p className="WPYC-Header">Use</p> <p className="WPYC-Content">Advanced analysis tools to contour your diet and goals</p></List></Stack>
           <Stack   className="PremiumStack"> <List><ListIcon as={GiWeightScale} fontSize='40px' color={'#2dd29a'}/><p className="WPYC-Header">Predict</p> <p className="WPYC-Content">Your weight change based on your specific profile</p></List></Stack>
        </SimpleGrid>
        </>
    )
}