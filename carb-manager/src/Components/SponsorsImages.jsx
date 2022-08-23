import {SimpleGrid, Image } from "@chakra-ui/react";

export default function Sponsors( ){
    return (
        <div className="SponsorsDiv">
            <SimpleGrid columns={[2,3,6]} spacing='10px' className="SponsorsSimpleGrid">
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/85c79988-767d-486a-82ca-9e9482b92455_company-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/6bd07041-3f55-485d-89c1-5229f6555f10_company-2%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/a0b2f5b5-ccfe-4a2f-917e-d42744ff546c_company-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/9606bffa-ce4e-4669-931f-bd24ffacf062_company-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/9cb7402b-b14f-45e7-9b92-9eeddfb5973f_company-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
                    <Image className="SponsorsImg" src="https://images.prismic.io/cm-website/7edf097e-db2c-4f7b-9384-3017911f6fc0_company-6%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max" />
            </SimpleGrid>
        </div>
    )
}