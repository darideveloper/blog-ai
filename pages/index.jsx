import Layout from '../components/Layout'
import { title_font, regular_font } from "@/lib/fornts"

export default function Index () {
    return (
      <Layout>
        <h1 className={title_font.className}>hello world</h1>
        <p>hello world</p>
      </Layout>
    )
}