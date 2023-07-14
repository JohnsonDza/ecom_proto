import React from 'react'
type props={
    search:string
    setSearch: (value: string) => void;
}
function Search({search,setSearch}:props) {
    console.log(search)
 
  return (
    <form onSubmit={(e)=>{}}>
        <input className="text-black"
                placeholder="search"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}

        />
    </form>
  )
}

export default Search