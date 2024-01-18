import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti accusamus, eaque quia quasi ut error repudiandae, repellendus itaque, maiores hic esse nulla est eveniet veritatis ea tempora velit modi.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}