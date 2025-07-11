import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AUDIO_SRC = 'https://assets.mixkit.co/music/preview/mixkit-arcade-retro-game-over-213.mp3';

/**
 * MusicToggle controls playback of background music.
 */
export const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      <motion.button
        onClick={toggle}
        className="p-2 rounded-full bg-gray-800 text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50"
        animate={playing ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={playing ? { repeat: Infinity, duration: 1 } : {}}
      >
        {playing ? '🔊' : '🔈'}
      </motion.button>
    </div>
  );
};
