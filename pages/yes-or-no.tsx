import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { Header, Button } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

type YesOrNoApiResponse = {
  data: 'yes' | 'no'
}

const fetchResult = async () => {
  const res = await fetch('https://platzi-avo.vercel.app/api/yes-or-no')
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}

// λ  (Server)  server-side renders at runtime (uses getInitialProps or
// getServerSideProps) -- sólo pueden utilizarse en las /PAGES

// La diferencia es que esto se ejecuta bajo demanda en el servidor,
// en lugar de ser pre-renderizado anticipadamente. Puede ser más lento que
// getStaticProps, pero permite el acceso a datos de solicitud y base de datos
// en cada solicitud.
export async function getServerSideProps() {
  const initialResult = await fetchResult()

  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as="h1" color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color="green"
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Intentar de nuevo
          </Button>
        </p>
        <p>
          <Link href="/">
            <a className="ui black button basic">Volver al inicio</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
