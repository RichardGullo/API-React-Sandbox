import SearchBar from "./SearchBar";
import Select from "./Select";
import NumberBar from "./NumberBar";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import Api from '../constants/api';
import VideoPlayer from "./VideoPlayer";

function Form() {
    const [selection, setSelection] = useState("unsplash");
    const [data, setData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    function getSelectValue(option) {
        setSelection(option.replace(/\s/g, '').toLowerCase());
        console.log(option.trim().toLowerCase());
        setSelectedVideo(null);
        setData([]);
    }

    function getSelectedVideo(obj){
        setSelectedVideo(obj);
    }

    async function makeRequest(value) {

        let response = null;
        let result = null;
        if (selection == 'dogapi') {
            response = await fetch(`https://dog.ceo/api/breeds/image/random/${value}`);
            result = await response.json();
            setData(result.message);
        }
        else if(selection == 'unsplash'){
            response = await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=50&client_id=${Api.unsplashKey}`);
            result = await response.json();
            setData(result.results);
        }
        else if(selection == 'youtube'){
            console.log("Youtube was selected");
            response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&maxResults=50&key=${Api.youtubeKey}`);
            result = await response.json();
            setData(result.items);
        }
    }

    let bar = null;

    if (selection == 'dogapi')
        bar = <NumberBar onRequest={makeRequest}/>
    else
        bar = <SearchBar onRequest={makeRequest}/>



    return (
        <>
            <div class="d-flex justify-content-center mt-3">
                {bar}
                <Select onSelect={getSelectValue} />
            </div>
            <div class="" style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
            {selectedVideo && <VideoPlayer data={selectedVideo}/>}  
            <Cards selection={selection} data={data} onSelectVideo={getSelectedVideo} />

            </div>


        </>

    )

}

export default Form;