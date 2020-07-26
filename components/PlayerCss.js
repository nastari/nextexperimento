// import 'videojs-youtube'

const PlayerCSS = () => {
  return (
    <>
      <h1>The implementation below is without react functions</h1>
      <div data-vjs-player>
        <video style={{width: 500, height: 500 }}
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          data-setup='{ "techOrder": ["flash","html5"], "sources": [{ "type": "video/mp4", "src": "http://localhost:5558/files/3e6b931d19-fb.mp4"}] }'
        ></video>
      </div>
    </>
  )
}

export default PlayerCSS
