import { useState } from 'react';
import { motion } from 'framer-motion';
import { quizQuestions } from '../data/quiz';
import { QuizService } from '../core/services/QuizService';
import { Button } from '../components/Button';

const service = new QuizService(quizQuestions);

/**
 * Quiz section displays a question with selectable answers.
 */
export const Quiz = () => {
  const q = quizQuestions[0];
  const [error, setError] = useState(false);

  const handleAnswer = (index: number) => {
    const correct = service.validate(q.id, index);
    if (!correct) {
      setError(true);
      setTimeout(() => setError(false), 600);
    } else {
      alert('Chính xác!');
    }
  };

  return (
    <section className="py-20" data-scroll-section>
      <motion.div
        className="max-w-md mx-auto bg-gray-800 p-6 rounded shadow-md"
        animate={error ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
      >
        <h3 className="text-xl font-semibold mb-4">{q.question}</h3>
        <ul className="space-y-2">
          {q.answers.map((a, idx) => (
            <li key={a}>
              <Button onClick={() => handleAnswer(idx)}>{a}</Button>
            </li>
          ))}
        </ul>
        {error && (
          <motion.div
            className="mt-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BrokenRune />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

/**
 * BrokenRune visualizes an incorrect answer with a cracked rune icon.
 */
const BrokenRune = () => (
  <motion.svg
    viewBox="0 0 24 24"
    className="w-12 h-12 text-red-500"
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotate: [0, 20, -20, 0] }}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" />
  </motion.svg>
);
