import { Box, SimpleGrid,Image } from "@chakra-ui/react";

export default function CookBookRecipes( ){
    return (
        <>
           <Box className="TheUltimateKeto">
            <h1>The Ultimate Keto Recipe Book for the Low Carb Lifestyle</h1>
            <p style={{fontSize:'15px'}}>101 delicious, exclusive, beginner-friendly recipes from the Carb Manager kitchens that aren’t available anywhere else. Each recipe includes gorgeous full page photography, macros and calorie counts (including net carbs!), and a QR code to unlock the recipe in the Carb Manager app</p>
        </Box>
        
        <SimpleGrid columns={[1,1,2]} className='RecipesOutterSimpleGrid'>
            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesLeftImage" src='https://images.prismic.io/cm-website/b10eb9c7-4971-4a69-974a-10ec6a828da8_1.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Breakfast & Morning Food</h1>
                        <p>Mornings on Keto can be so much more than bacon and eggs! Combine Asparagus and Gruyere Quiche or Blueberry-Lemon Pancakes (just 2 net carbs!) with a side of Keto coffee for an early start on hitting your daily fat macros.</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesRightImage" src='https://images.prismic.io/cm-website/7112a8d3-d44e-4833-b8f2-4c0b52ccc8eb_2.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Quick & Easy Meals</h1>
                        <p>Work, kids, chores, errands, the gym… Life can be hectic. We get it! That’s why we included an entire chapter of quick and easy, Keto-friendly weeknight family dinner recipes like Citrus Salmon and Chorizo and Shrimp Fajitas.</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesLeftImage" src='https://images.prismic.io/cm-website/97cef230-2a6c-42dd-bf2f-2fb3b46ac6b7_3.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Splendid Keto Suppers</h1>
                        <p>From go-to family favorites like Monterey Chicken, to meals fit for entertaining like Orange Glazed Spatchcocked Cornish Hens, this chapter will bring out your inner Michelin chef, while keeping you on track to your diet goals.</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesRightImage" src='https://images.prismic.io/cm-website/6d232541-8ce7-450c-92d6-e5682db2e2a6_4.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Batch Cooking & Make-Aheads</h1>
                        <p>Meal prep isn’t just a diet hack. It’s a life hack! You’ll save time and money with a full chapter of freezable make-ahead Keto recipes like our delicious Vietnamese Lemon Grass Pork Noodle bowl.</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesLeftImage" src='https://images.prismic.io/cm-website/fa303067-9ee0-474b-99a6-6daf8287b0e5_5.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Hearty Salads & Soups</h1>
                        <p>Whether you’re looking for a light lunch option like Superfood Kale Salad, or a hearty Keto-friendly soup like Italian Meatball to warm you up on a cold day, this Keto diet recipe book has you covered!</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesRightImage" src='https://images.prismic.io/cm-website/fbf614f4-1798-45e9-b3ca-d00569ef49af_6.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Satisfying Side-Dishes</h1>
                        <p>If you miss starchy sides like bread, noodles, or baked potatoes, the recipes in this chapter - like Buttermilk Biscuits and Toasted Sesame Shirataki Noodles - will satisfy your cravings without kicking you out of ketosis!</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesLeftImage" src='https://images.prismic.io/cm-website/9910d9a4-efb3-47cb-9cf6-e871236bcc34_7.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Savory Snacks & Appetizers  </h1>
                        <p>Having Keto-friendly snacks on hand when you first start eating Keto can save you from any “slip ups” that might derail your progress. Your whole family will love the Pizza Trail Mix and BLT Snack Cups - even if they’re not eating Keto!.</p>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box className="RecipesOutterBox">
                <SimpleGrid columns={[1,1,2]} className='RecipesInnerSimpleGrid'>
                    <Box className="RecipesInnerBox">
                        <Image className="RecipesRightImage" src='https://images.prismic.io/cm-website/47e4a318-e4b7-4ea5-943a-9f675bb25b14_8.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max'/>
                    </Box>
                    <Box className="RecipesInnerBox">
                        <h1>Sweets & Fat Bombs</h1>
                        <p>Who said going Keto meant giving up sweets? Indulge your sweet tooth with zero-sugar, high-fat, Keto-friendly treats, like Mini Chai-Spice Cheesecakes or Strawberry, Lime, and Basil Granita.</p>
                    </Box>
                </SimpleGrid>
            </Box>
        </SimpleGrid>
        </>
    )
}