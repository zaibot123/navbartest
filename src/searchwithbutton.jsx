import React from "react";

function SearchButton(){

    return (
    <div className="header-search">
    <input
        type="text"
        id="h"
        placeholder="Search..."
        name="s" 
        />
   <button type="submit" className="btn-grad">Filter</button>
   </div>
    )
}
export default SearchButton

         
