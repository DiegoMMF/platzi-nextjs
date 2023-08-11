import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all given paths
    paths,
    // Display 404 for everything else - no se puede acceder a una página que no
    // se ha generado en el momento de la compilación, ergo: 404
    fallback: false,
  }
}

// This also gets called at build time -- it will fetch the product details
// and build the static page
// Por eso, debemos decirle a Next las páginas que queremos generar estáticamente
// en el momento de la compilación. Para hacer esto, necesitamos exportar una
// función llamada getStaticPaths de nuestra página.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
