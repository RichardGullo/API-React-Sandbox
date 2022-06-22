function Select(props){

    function printSelection(evt){
        props.onSelect(evt.target.value);
    }

    return(
        <div>
            <select class="form-control" onChange={printSelection}>
                <option>Unsplash</option>
                <option>Dog Api</option>
                <option>Youtube</option>
            </select>
        </div>
    );

}

export default Select;