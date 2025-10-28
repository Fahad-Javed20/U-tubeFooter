interface FooterSectionProps {
    title:string,
    links:string[],
}



const FooterSection = () => {
  return (
    <div className="pt-5 pl-5">
        <h1 className="font-bold">About Youtube</h1>
        <div className="grid gap-y-3 mt-6">
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">How Youtube Works</a>
            <a href="">Jobs</a>
            <a href="">Press</a>
            <a href="">YouTube Culture & Trends</a>
            <a href="">NFL Sunday Ticket</a>
        </div>
    </div>
  )
}



export default FooterSection
