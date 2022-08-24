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
                <Tab _selected={{ color: '#2dd29a', fontWeight : '650' }}> Made Simple </Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }}>Made Convinient</Tab>
                <Tab _selected={{ color: '#2dd29a', fontWeight : '650' }}>Made Fast</Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }}>Made Delicious</Tab>
                <Tab _selected={{ color: '#2dd29a',fontWeight : '650' }}>Made Smart</Tab>
            </TabList>

            <TabPanels className="TabPanels">
                <TabPanel className="TabPanel">
                    <MadeSimple/>
                </TabPanel>

                <TabPanel>
                    <MadeConvinent/>
                </TabPanel>

                <TabPanel>
                    <MadeFast/>
                </TabPanel>

                <TabPanel>
                   <MadeDelicious/>
                </TabPanel>

                <TabPanel>
                   <MadeSmart/>
                </TabPanel>

            </TabPanels>
        </Tabs> 
        </div>
        </>
    )
}