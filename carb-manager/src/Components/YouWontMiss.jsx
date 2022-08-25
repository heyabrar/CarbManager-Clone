import { Box, SimpleGrid,Image } from "@chakra-ui/react";

export default function YouWontMissCarb ( ){
    return (
        <>
       <SimpleGrid columns={[1,1,2]} className='YouWontMissSimpleGrid'>
        <Box className="YouWontMissBox">
            <h1 className="YouWontMissH1">You Won’t Even Miss the <b>Carbs</b><b style={{color: '#2dd29a'}}>.</b></h1>
            <p className="YouWontMissPTag">From easy, weeknight-friendly dinners to make-ahead, freezable meal prep, to snacks, sides and delectable sweet treats, you’ll find tasty choices for every craving and occasion.</p>
        </Box>

        <Box className="YouWontMissBox">
            <Image className="YouWontMissImage" src="https://images.prismic.io/cm-website/93b4b384-1b94-4f8a-8f08-4f24a2b4b590_article_2.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/>
        </Box>
       </SimpleGrid>
        </>
    )
}