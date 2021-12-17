import { GetServerSideProps, GetStaticProps } from "next"

export default function SSG(props: unknown) {
  return <div>{JSON.stringify(props)}</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 3,
    props: {
      data: new Date().toISOString()
    }
  }
}
