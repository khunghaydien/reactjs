import search from './../../image/search.svg'
import "./Search.scss"
type SearchProps = {
    handleChange: (e: any) => void
    onKeyDown: (e: any) => void
}
const ROOT = "search"
const Search = ({ handleChange, onKeyDown }: SearchProps) => {
    return (
        <div className={ROOT}>
            <img src={search} className={`${ROOT}-logo`} alt="search" />
            <input className={`${ROOT}-input`} placeholder="Search" type="text" onChange={(e: any) => handleChange(e)} onKeyDown={(e: any) => onKeyDown(e)} />
        </div>
    )
}
export default Search