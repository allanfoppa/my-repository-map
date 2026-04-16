import './assets/styles/main.css'
import { Header } from './components/Header'
import { ResultsContainer } from './components/ResultsContainer'
import { SearchBar } from './components/SearchBar'
import { Layout } from './modules/Layout'
import { update } from './utils/updateHomeView'

const app = document.querySelector<HTMLDivElement>('#app')!

let currentPage = 1
const perPage = 5
let searchQuery = ''

function init() {
  app.innerHTML = Layout({
    header: Header(),
    search: SearchBar(),
    content: ResultsContainer()
  })

  document.querySelector('#search')?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value
    currentPage = 1
    update(searchQuery, currentPage, perPage)
  })

  update(searchQuery, currentPage, perPage)
}

init()
