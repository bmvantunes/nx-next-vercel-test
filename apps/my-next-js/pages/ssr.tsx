import { GetServerSideProps } from "next"

export default function SSR(props: unknown) {
  return <div>{JSON.stringify(props)}</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: new Date().toISOString()
    }
  }
}
