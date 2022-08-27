import { Box,Image } from "@chakra-ui/react";

export default function RecipesForFamily ( ){
    return (
        <>
       <div className='KetMadeCookBookColumnFlip'>
        <Box className="RecipesForFamilyBox">
            <Image className="RecipesForFamilyImage" src="https://images.prismic.io/cm-website/b44a1724-c7eb-441c-9a2f-47fb9523aff3_article_3.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"/>
        </Box>

        <Box className="RecipesForFamilyBox">
            <h1 className="RecipesForFamilyH1">Recipes for the Entire <b>Family</b><b style={{color: '#2dd29a'}}>.</b></h1>
            <p className="RecipesForFamilyPTag">Family-friendly Keto recipes like Blueberry Lemon Pancakes, Chicken Burrito Bowls, and Breaded Meatballs w/ Pesto Noodles that will satisfy even the pickiest eaters in your household.</p>
        </Box>
       </div>
        </>
    )
}