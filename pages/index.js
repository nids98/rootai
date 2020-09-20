import Head from 'next/head'
import Layout from '../components/layout'
import Landing from '../components/landing'

export default function Home() {
  return (
    <div>
      <Layout>
        <Landing />
      </Layout>
    </div>
  )
}
