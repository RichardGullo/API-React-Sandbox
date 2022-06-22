import { useState } from "react";

function NumberBar(props) {

    const[num, setNum] = useState(1);

    function doRequest(evt){
        evt.preventDefault();
        props.onRequest(num);
    }

    return (
        <div class="mr-2">
            <form onSubmit={doRequest}>
                    <div class="form-group">
                    <label class="text-white">Enter Num Dogs (Max 50): </label>
                    <input class="p-1" type="number" id="quantity" name="quantity" min="1" max="50" onChange={(evt)=>setNum(evt.target.value)} value={num}/>
                    </div>
                    <div class=" form-group d-flex justify-content-center mb-0">
                        <input type="submit" class="btn btn-primary" value="Query" />
                    </div>
            </form>
        </div>
    );

}

export default NumberBar;