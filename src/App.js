import { useRouter } from './useRouter'
import AnticTemplate, {
  ListingDesktop,
  ListingMobile,
  ArticleDesktop,
  ArticleMobile,
} from "./pages/AnticTemplate"
import BlogTemplate from "./pages/BlogTemplate"

export default function App() {
  const { currentPage } = useRouter({
    '/': BlogTemplate,
    '/antic': AnticTemplate,
    '/antic/list_desktop': ListingDesktop,
    '/antic/list_mobile': ListingMobile,
    '/antic/article_desktop': ArticleDesktop,
    '/antic/article_mobile': ArticleMobile,
  })

  return (
    <main>
      {currentPage}
    </main>
  )
}
