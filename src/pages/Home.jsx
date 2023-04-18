import Header from "../components/Header";
import ImgLayout from "../components/ImgLayout";
import DescriptionLayout from "../components/DescriptionLayout";
import Footer from "../components/Footer";
import { useImages } from "../react-query";

export default function Home(){
    const {data , isLoading } = useImages();
    const images = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
    return(
        <div>
            <Header
                title="NAME"
                slogan="SLOGAN"
            />
            <ImgLayout
                imagetitle="IMAGES"
                images={images}
                isLoading={isLoading}
            />
            <DescriptionLayout

                descriptiontitle="DESCRIPTIONS"
                descriptioncontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                ullam
                eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                quod
                quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                tempora.
                Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                repudiandae temporibus! Saepe excepturi tempore iusto eos sit!"
            />
            <Footer

                address="臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系"
                copyright="&copy; Copyright All rights reserved."
            />
        </div>

    );
}