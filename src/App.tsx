import { useEffect, useState } from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { LoadingScreen } from './components/LoadingScreen';
import { MusicToggle } from './components/MusicToggle';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { CultivationRoom } from './sections/CultivationRoom';
import { AdminCall } from './sections/AdminCall';
import { Quiz } from './sections/Quiz';
import { JoinUs } from './sections/JoinUs';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <MusicToggle />
      <ScrollContainer>
        <Hero />
        <Features />
        <CultivationRoom />
        <AdminCall />
        <Quiz />
        <JoinUs />
      </ScrollContainer>
    </>
  );
};
