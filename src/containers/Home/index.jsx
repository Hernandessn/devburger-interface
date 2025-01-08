import { Banner, Container} from "./styles";
import { Footer, CategoriesCarousel, OffersCarousel } from "../../components";

export function Home(){
    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                <div>
                <CategoriesCarousel />
                <OffersCarousel />
                </div>
                
            </Container>
            <Footer />
        </main>
    )
}