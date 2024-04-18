


export default function Search({search, setSearch, handleSearch}){

    return <div className="search-engine">
        <input
        type = "text"
        placeHolder="Enter city name"
        name= "search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

        <button onClick={handleSearch}>search</button>
    </div>
}