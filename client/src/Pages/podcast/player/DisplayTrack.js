import { useSelector } from "react-redux";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="audio-image">
          <div className="flex gap-2">
            <img
              src={currentTrack.thumnail}
              className="w-[50px] h-[50px] rounded-md"
              alt=""
            />
            <div className="text-white">
              <p className="text-[16px] font-semibold">{currentTrack.title}</p>
              <p className="text-[12px] text-gray-300">{currentTrack.author}</p>
            </div>
          </div>
        </div>
        {/* <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div> */}
      </div>
    </div>
  );
};
export default DisplayTrack;
