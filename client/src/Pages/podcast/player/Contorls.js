import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./audioPlayer.css";
import "./progress.css";
import { BiHeart } from "react-icons/bi";

//icon
import {
  FaBackwardStep,
  FaForwardStep,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from "react-icons/fa6";
import {
  PiSpeakerSimpleSlashFill,
  PiSpeakerSimpleLowFill,
  PiSpeakerSimpleHighFill,
} from "react-icons/pi";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const index = useSelector((state) => state.data.index);
  const flag = useSelector((state) => state.data.flag);

  useEffect(() => {
    if (flag) {
      setCurrentTrack(tracks[index]);
      setIsPlaying(true);
    }
  }, [flag, index, setCurrentTrack]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper flex gap-5 w-[100%] ">
      <div className="controls flex items-center gap-3 text-white text-[16px]">
        <button onClick={handlePrevious}>
          <FaBackwardStep />
        </button>
        <button onClick={skipBackward}>
          <FaBackward />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={skipForward}>
          <FaForward />
        </button>
        <button onClick={handleNext}>
          <FaForwardStep />
        </button>
      </div>
      <div className="volume  flex justify-center gap-3 items-center text-white text-[16px]">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <PiSpeakerSimpleSlashFill />
          ) : volume < 40 ? (
            <PiSpeakerSimpleLowFill />
          ) : (
            <PiSpeakerSimpleHighFill />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #2563EB ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
      <div className="pr-10 text-[16px]">
        <BiHeart color="white " />
      </div>
    </div>
  );
};

export default Controls;
