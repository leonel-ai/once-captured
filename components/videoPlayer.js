import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
    render() {
        return (
            <ReactPlayer
                url="https://player.vimeo.com/video/349732658"
                playing loop volume="{0}" muted height="400"
            />
        );
    }
}
export default VideoPlayer
