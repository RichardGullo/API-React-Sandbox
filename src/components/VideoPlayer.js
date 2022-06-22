function VideoPlayer(props) {
    const { data } = props;

    const videoSrc = `http://www.youtube.com/embed/${data.id.videoId}`;

    return (
        <div class="d-flex flex-column justify-content-center align-items-center mt-4">
            <div>
                <iframe title="video player" src={videoSrc} style={{ width: '500px', height: '500px' }} />
            </div>
            <div style={{width:'500px'}}>
                <h4 class="text-white">{data.snippet.title}</h4>
                <p class="text-white">{data.snippet.description}</p>
            </div>

        </div>


    );


}

export default VideoPlayer;