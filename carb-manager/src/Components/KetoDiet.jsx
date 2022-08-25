import { Box, Image, SimpleGrid,Button } from "@chakra-ui/react";

export default function KetoDiet ( ){
    return (
        <>
        <SimpleGrid columns={[1,1,2]} className='KetoDietSimpleGrid'>
            <Box className="KetoDietBox">
                <Image className="KetoDietImage" src='https://images.prismic.io/cm-website/a2336937-a862-433f-909a-fbcd645f6c5b_kindle.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
            </Box>

            <Box className="KetoDietBox">
                <h1>Available on Amazon Kindle!</h1>
                <p>As convenient as the Carb Manager app, grab the cookbook on Kindle and have it in your pocket—and kitchen—wherever you are!</p>
                <Box className="ButtonsBox">
                    <Button  colorScheme={'white'}  bgColor="#2dd29a" borderRadius='50px' padding={'20px'}>Buy the Softcover</Button>
                    <Button colorScheme={'black'} bgColor={'black'} borderRadius='50px' ><Image className="AmazonButtonImageKeto" src="https://www.carbmanager.com/_nuxt/img/e7696e2.png"/></Button>   
                </Box>
            </Box>
        </SimpleGrid>
        </>
    )
}