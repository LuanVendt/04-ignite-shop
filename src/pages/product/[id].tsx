import { stripe } from '@/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
    }
}

export default function Product({ product }: ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=''></Image>
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    if (!params) {
        return {
            props: {},
            revalidate: 60 * 60 * 1, // 1 hour
        }
    }

    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    if (price.unit_amount === null) {
        return {
            props: {},
            revalidate: 60 * 60 * 1, // 1 hour
        }
    }

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'pt-BR',
            }).format(price.unit_amount / 100),
            description: product.description,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}