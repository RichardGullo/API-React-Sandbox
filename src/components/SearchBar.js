import { useState, useEffect } from "react";

function SearchBar(props) {
    const[term, setTerm] = useState("");

    function doRequest(evt){
        evt.preventDefault();
        props.onRequest(term);
    }

    return (
        <div class="mr-2">
            <form onSubmit={doRequest}>
                    <div class="form-group">
                        <input type="text" placeholder="Enter Search Term" class="form-control" style={{width:'500px'}} onChange={(evt)=>setTerm(evt.target.value)} value={term} />
                    </div>
                    <div class=" form-group d-flex justify-content-center mb-0">
                        <input type="submit" class="btn btn-primary" value="Query" />
                    </div>
            </form>
        </div>
    );

}

export default SearchBar;