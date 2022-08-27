import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MadeConvinent from "./MadeConvinent";
import MadeDelicious from "./MadeDelicious";
import MadeFast from "./MadeFast";
import MadeSimple from "./MadeSimple";
import MadeSmart from "./MadeSmart";

export default function PremiumFeatures( ){
    return (
        <>
        <div className="PremiumFeaturesHeader">
            <h1>Premium Features That Make a Difference</h1>
        </div>
        
        <div>
        <Tabs className="Tabs">
            <TabList className="TabList">
                <Tab _selected={{ color: '#2dd29a', fontWeight : '650' }} className='Tab' > Made Simple </Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }} className='Tab'>Made Convinient</Tab>
                <Tab _selected={{ color: '#2dd29a', fontWeight : '650' }} className='Tab'>Made Fast</Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }} className='Tab'>Made Delicious</Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }} className='Tab'>Made Smart</Tab>
            </TabList>

            <TabPanels className="TabPanels">
                <TabPanel className="TabPanel">
                    <MadeSimple/>
                </TabPanel>

                <TabPanel className="TabPanel">
                    <MadeConvinent/>
                </TabPanel>

                <TabPanel className="TabPanel">
                    <MadeFast/>
                </TabPanel>

                <TabPanel className="TabPanel">
                   <MadeDelicious/>
                </TabPanel>

                <TabPanel className="TabPanel">
                   <MadeSmart/>
                </TabPanel>

            </TabPanels>
        </Tabs> 
        </div>
        </>
    )
}