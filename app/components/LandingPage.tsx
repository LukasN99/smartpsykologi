"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'storspovar') {
      // Store authentication state
      sessionStorage.setItem('isAuthenticated', 'true');
      router.push('/home');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#faefe0] flex flex-col items-center justify-center px-4">
      <motion.div
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl text-center mb-6 text-[#072707]">
            Welcome to Smart Psychology
          </h1>
          <p className="text-center text-[#072707] text-lg mb-8">
            To access the material, please enter the required password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E85C3A] focus:border-transparent"
              placeholder="Enter password"
              required
            />
          </div>
          {error && (
            <motion.p
              className="text-red-500 text-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}
          <div>
            <button
              type="submit"
              className="w-full bg-[#E85C3A] text-white py-2 px-4 rounded-md hover:bg-[#d54d2d] transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 