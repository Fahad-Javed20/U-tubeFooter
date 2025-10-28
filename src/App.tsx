import FooterParent from "./components/FooterParent"
import type { FooterSectionType } from "./types/FooterSextionType"


function App() {

  const sections:FooterSectionType[] = [{
    title:"About Youtube",
    links:["About", "Blog","How Youyube Works", "Jobs","Press","Youtube Culture & Trends", "NFL Sunday Tickets"]
  },
  {
    title:"Products",
    links:["Youtube Kids", "Youtube Music","Youtube Originals", "Youtube Select", "Youtube Studio", "Youtube TV"]
  },
  {
    title:"For Bussiness",
    links:["Developers", "Youtube Advertising"]
  },
  {
    title:"For Creators",
    links:["Creating For Youtube Kids", "Creator Research","Youtube Artists", "Youtube Creators", "Youtube NextUp", "Youtube VR"]
  },
  {
    title:"Our Commitments",
    links:["Cretor For Change", "CSAI Match"]
  },
]

  return (
    <>
      <FooterParent />
    </>
  )
}

export default App
