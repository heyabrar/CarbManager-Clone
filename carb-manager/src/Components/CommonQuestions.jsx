import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import {AiOutlineMinus} from 'react-icons/ai'
import { GrAdd } from "react-icons/gr";

export default function CommonQuestions( ){
    return (
        <>
        <Box className="QuestionsDiv">
            <h1>Have Any <b>Questions</b><b style={{color:'#2dd29a'}}>?</b></h1>
            <p>We’ve answered some of your most popular questions below</p>
        </Box>
        <Accordion allowMultiple className="CQAccordion">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{color:'#2dd29a'}}>
        <Box flex='1' textAlign='left' className="CQBox">
          Is this an ebook or a real book?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='CQAccordionPanel'>
     It's 100% a Real Book! 😉 You can order it on Amazon (or your favorite online retailer) right now, or find it in Barnes & Noble, Target, and many other local bookshops.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
              Is it available on Kindle?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px'  />
            ) : (
              <GrAdd fontSize='16px'/>
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes! Get the Paperback or Kindle edition from Amazon right there
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
              Will there be an audioboo?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            No - it's a cookbook full of 101 exclusive Keto recipes that you'll want ti reference visually while you cook!
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
             Is it available in my country?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         The Kindle version is available worldwide, and the paperback is available in many contries outside the US, but please check Amazon or kicak bookstores in yout location.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
             I already jave access to all the recipes inside the Carb Manager app, why do i need this book? 
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          While we do release a handful of brand-new recipes created by our test kitchen chefs every month for Carb Manager Premium members, this book contains 101 exclusive recipes crafted, tested and perfected over thr past yeat by Carb Manager co-founder Mandy Davis and a team of professional recipe-writers and chiefs 😋
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
             How do the QR codes work?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        on iOS or Android. Then, just open the barcode scanner in the app, and scan the QR code in the book. The recipe will be unlocked in-app, where you’ll be able to add it to your food diary, track recipe macros, access detailed nutritional information, and add the recipe to custom meal plans!
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
            Do i need to have a Carb Manager Premium app subscription to unlock the recipes using the QR codes?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          While we do release a handful of brand-new recipes created by our test kitchen chefs every month for Carb Manager Premium members, this book contains 101 exclusive recipes crafted, tested and perfected over thr past yeat by Carb Manager co-founder Mandy Davis and a team of professional recipe-writers and chiefs
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
            Is this Book for Beginners for skillde chef?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
                 While we do release a handful of brand-new recipes created by our test kitchen chefs every month for Carb Manager Premium members, this book contains 101 exclusive recipes crafted, tested and perfected over thr past yeat by Carb Manager co-founder Mandy Davis and a team of professional recipe-writers and chiefs
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{color:'#2dd29a'}}>
            <Box flex='1' textAlign='left' className="CQBox">
           Will my family like this recipe?
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='16px' />
            ) : (
              <GrAdd fontSize='16px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
                 While we do release a handful of brand-new recipes created by our test kitchen chefs every month for Carb Manager Premium members, this book contains 101 exclusive recipes crafted, tested and perfected over thr past yeat by Carb Manager co-founder Mandy Davis and a team of professional recipe-writers and chiefs
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
</>
    )
}