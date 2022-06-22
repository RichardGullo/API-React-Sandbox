function Cards(props) {
    const { data, selection } = props;

    function selectVideo(video){
        props.onSelectVideo(video);
    }

    return (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
                {data.map((element) => {
                    if (selection == "dogapi")
                        return <img src={element} style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '10px', marginBottom: '10px' }} />
                    else if (selection == "unsplash") {
                        return <img src={element.urls.regular} style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '10px', marginBottom: '10px' }} />
                    }
                    else if (selection == "youtube") {
                        return <img onClick={()=>selectVideo(element)} src={element.snippet.thumbnails.medium.url} style={{ width: '320px', height: '180px', objectFit: 'cover', marginRight: '10px', marginBottom: '20px', cursor:'pointer' }} />
                    }
                })}
            </div>
        </div>

    )
}

export default Cards;