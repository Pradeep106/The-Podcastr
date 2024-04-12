import { useEffect, useRef, useState } from "react";
import { tracks } from "../data/tracs";

// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Contorls";
import ProgressBar from "./ProgressBar";
import "./audioPlayer.css";
import { track } from "../../../features/dataSlice";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <div className="audio-player">
        <div className="inner py-3 px-5">
          <div className="w-[20%]">
            <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                progressBarRef,
                handleNext,
              }}
            />
          </div>
          <div className="w-[100%] gap-3 flex flex-col justify-center items-center">
            <div>
              <Controls
                {...{
                  audioRef,
                  progressBarRef,
                  duration,
                  setTimeProgress,
                  tracks,
                  trackIndex,
                  setTrackIndex,
                  setCurrentTrack,
                  handleNext,
                }}
              />
            </div>
            <div className="w-[80%]">
              <ProgressBar
                {...{ progressBarRef, audioRef, timeProgress, duration }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
// import Toggle from "../../../components/Toggle";
// import { FaPlay, FaPause } from "react-icons/fa";
// import "../podcast.css";
// const AudioPlayer = () => {
//   const audioRef = useRef();
//   const progressBarRef = useRef();

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [timeProgress, setTimeProgress] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const playAnimationRef = useRef();

//   const repeat = useCallback(() => {
//     const currentTime = audioRef.current.currentTime;
//     setTimeProgress(currentTime);
//     progressBarRef.current.value = currentTime;
//     progressBarRef.current.style.setProperty(
//       `--range-progress`,
//       `${(progressBarRef.current.value / duration) * 100}%`
//     );
//     playAnimationRef.current = requestAnimationFrame(repeat);
//   }, [audioRef, duration, progressBarRef, setTimeProgress]);

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       playAnimationRef.current = requestAnimationFrame(repeat);
//     } else {
//       audioRef.current.pause();
//       cancelAnimationFrame(playAnimationRef.current);
//     }
//   }, [isPlaying, audioRef, repeat]);
//   const togglePlayPause = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   const handleProgressChange = () => {
//     audioRef.current.currentTime = progressBarRef.current.value;
//     setTimeProgress(audioRef.current.currentTime);
//   };

//   const onLoadedMetadata = () => {
//     const seconds = audioRef.current.duration;
//     setDuration(seconds);
//     progressBarRef.current.max = seconds;
//   };

//   const formatTime = (time) => {
//     if (time && !isNaN(time)) {
//       const minutes = Math.floor(time / 60);
//       const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//       const seconds = Math.floor(time % 60);
//       const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//       return `${formatMinutes}:${formatSeconds}`;
//     }
//     return "00:00";
//   };

//   return (
//     <div>
//       <audio
//         ref={audioRef}
//         src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
//         onLoadedMetadata={onLoadedMetadata}></audio>

//       <div className="w-[45%] justify-center items-center gap-2 flex">
//         <div className="progress">
//           <span className="time current">{formatTime(timeProgress)}</span>
//           <input
//             type="range"
//             ref={progressBarRef}
//             defaultValue=""
//             onClick={handleProgressChange}
//           />
//           <span className="time">{formatTime(duration)}</span>
//         </div>
//         <AiOutlineStepBackward className="text-color" />
//         <button onClick={togglePlayPause}>
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//         <AiFillStepForward />
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;
