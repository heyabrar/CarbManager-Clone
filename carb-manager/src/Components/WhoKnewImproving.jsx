import { Box, SimpleGrid,Image } from "@chakra-ui/react";

export default function WhoKnewImproving ( ){
    return (
        <>
       <SimpleGrid columns={[1,1,2]} className='WhoKnewSimpleGrid'>
        <Box className="WhoKnewBox">
            <h1 className="WhoKnewH1">Who Knew Improving Your Health Could be so <b>Delicious</b><b style={{color: '#2dd29a'}}>?</b></h1>
            <p className="WhoKnewPTag">Keto is more than a diet. It’s a lifestyle. And it’s here to stay. The Carb Manager Keto Cookbook is the easy and delicious way to join the Keto revolution and experience the power of Keto for yourself.</p>
        </Box>

        <Box className="WhoKnewBox">
            <Image className="WhoKnewImage" src="https://images.prismic.io/cm-website/d931c228-e3c6-4c72-b635-cf0f550a1279_article_4.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/>
        </Box>
       </SimpleGrid>
        </>
    )
}