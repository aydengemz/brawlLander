"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Alert, AlertDescription } from './components/alert';
import { Card, CardContent } from './components/card';
import { Button } from './components/button';
import { FAQSection } from './components/FAQ';


interface ProgressStepProps {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

const generateGameName = () => {
  const prefixes = ['Pro', 'Epic', 'Noble', 'Dark', 'Royal', 'Mega', 'Ultra', 'Super', 'Ninja', 'Legend'];
  const names = ['Brawler', 'Spike', 'Star', 'Crow', 'Leon', 'Beast', 'Fighter', 'Hero', 'Master', 'Warrior'];
  const numbers = ['', ...Array.from({ length: 99 }, (_, i) => (i + 1).toString())];
  
  return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${names[Math.floor(Math.random() * names.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}`;
};

const GemIcon = () => (
  <img 
    src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81VkplRUFXa3luVkJXYXhVdm02ai5wbmcifQ:supercell:8mM-ht1uZ1N4ipp81GwFKk-B0382d0jHn052F5w4sTA?width=2400"
    alt="Gem"
    className="w-4 h-4 inline-block align-middle justify-self-center"
  />
);

const ProgressStep: React.FC<ProgressStepProps> = ({ number, title, isActive, isCompleted }) => (
  <motion.div
    className="flex items-center mb-3 justify-center w-full"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: number * 0.1 }}
  >
    <motion.div
      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3
        ${isCompleted ? 'bg-pink-400' : isActive ? 'bg-pink-500' : 'bg-pink-600'}
        text-white font-bold text-lg shadow-md`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isCompleted ? <GemIcon /> : number}
    </motion.div>
    <span className={`${isCompleted ? 'text-pink-400' : isActive ? 'text-pink-500' : 'text-pink-600'} 
      text-lg font-bold flex-1`}>
      {title}
    </span>
  </motion.div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer);
            return prev;
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="flex items-center justify-center space-x-3 text-white mb-4 bg-pink-500/80 p-3 rounded-xl backdrop-blur-sm"
      animate={{ scale: [1, 1.01, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Clock className="w-5 h-5" />
      <span className="text-xl font-bold">
        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </span>
      <span className="font-bold">remaining!</span>
    </motion.div>
  );
};

const AffiliateButton = () => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl blur-lg"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <a href="https://t.afftrackr.com/?r3x=OoPj2%2bGRZpUfwrNvJr0SIJNgo95ML%2faAvQJDRoz7h5U%3d&s1=" target="_blank" rel="noopener noreferrer">
      <Button className="relative z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-xl flex items-center gap-2 shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300">
        Claim Free Gems! <GemIcon />
      </Button>
    </a>
  </motion.div>
);

const RecentWinner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [currentName, setCurrentName] = useState(generateGameName());
  const [gemAmount, setGemAmount] = useState(Math.floor(Math.random() * 1501) + 500);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentName(generateGameName());
        setGemAmount(Math.floor(Math.random() * 1501) + 500);
        setVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="fixed top-4 inset-x-0 mx-auto max-w-sm text-center"
        >
          <Alert className="w-full bg-white/95 text-pink-600 shadow-lg p-3 rounded-lg backdrop-blur border border-pink-200">
            <AlertDescription className="font-bold text-base">
              <span className="text-pink-500">{currentName}</span> claimed {gemAmount} <GemIcon />  !
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC93Z3VYdVdyZFdUTHRXcG54M01VTC5wbmcifQ:supercell:-AP1YmHMVk5y9MZGtGH7QKMgXXH2wseKlOkMUCBaI1M?width=2400"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <RecentWinner />

      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <motion.div 
          className="w-full max-w-sm flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo positioned as a regular element in the flow */}
          <motion.div 
            className="w-24 h-24 sm:w-22 sm:h-22 mt-12 sm:mt-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://game-assets.store.supercell.com/brawlstars/d9c873ac-9f49-4397-a870-1f823a8c2d54.png"
              alt="Brawl Stars Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* <motion.div 
        className="fixed bottom-4 right-4 w-20 h-20 sm:w-20 sm:h-20 z-20"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="https://external-preview.redd.it/GeF2kYEpJe3WXdUGdGPUMXXDLU2V6bunwJc82ptUMpY.png?auto=webp&s=cf7e1d8417c90c964aff216fa023c70f18a4b064"
          alt="Brawl Stars Character"
          className="w-full h-full object-contain"
        />
      </motion.div> */}

          {/* FREE GEMS header */}
          <motion.div 
            className="text-center w-full"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h1 className="text-3xl font-bold text-white">
              FREE 2000 GEMS!
            </h1>
          </motion.div>

          <CountdownTimer />

          <Card className="w-full bg-white/95 rounded-xl border border-pink-200 backdrop-blur-sm mb-6">
            <CardContent className="p-4">
              <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
                How to Claim
              </h2>
              <ProgressStep number={1} title="Enter Your Info" isActive={true} isCompleted={false} />
              <ProgressStep number={2} title="Complete Required Deals" isActive={false} isCompleted={false} />
              <ProgressStep number={3} title="Get Your Gems!" isActive={false} isCompleted={false} />
            </CardContent>
          </Card>

          <AffiliateButton />

          <FAQSection />
        </motion.div>
      </div>
    </div>
  );
}