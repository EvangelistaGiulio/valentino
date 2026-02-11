"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string }[]>([]);
  const yesButtonSize = Math.min(noCount * 20 + 24, 220);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100 + "vw",
        duration: Math.random() * 3 + 2 + "s",
        size: Math.random() * 1.5 + 0.5 + "rem",
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No :(",
      "ah",
      "Vediamo, magari se te lo\n chiedo più dolcemente.. ",
      "Cucciola perfavore 👉👈",
      "Ti prendo 2 pokè da pasta eat",
      "E CI AGGIUNGO UN WHITE MOCHA",
      "PERFAVORE AMORE",
      "Ma :*(",
      "Morirò",
      "Ok, sono morto",
      "Stai parlando col fantasma di Giulio 👻👻",
      "Amore eddai",
      ":(((((((",
      "BIMBAAA MIAAA",
      "Ah così è?",
      "ok.",
      "Fanculo.",
      "🖕"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen w-full max-w-full flex-col items-center justify-center bg-[#fff0f6] overflow-hidden px-4">
      
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          ❤️
        </span>
      ))}
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center PX-2">❤️ AAAAAAAA TI AMO PATATA!! ;)) ❤️</div>
        </>
      ) : (
        <>
          <img
            className="h-40 md:h-[200px] object-contain"
            src={
              noCount=== 0
              ? "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              : "https://gifdb.com/images/high/milk-and-mocha-love-me-rg6ve4g0z8mip842.gif"
            }
          />
          <h1 className="my-6 text-3xl md:text-5xl font-bold text-center leading-tight">Vuoi essere la mia Valentina? 🥺</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[400px] md:max-w-full z-50">
            <button
              className={`w-auto min-w-[150px] rounded bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-700 transition-all shadow-lg`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Shi
            </button>
            {noCount<18 ? (
            <button
              onClick={handleNoClick}
              style={{
                fontSize: noCount=== 17 ? "4rem" : "1.5rem",
                transition: "all 0.1s"
              }}
              className="w-auto min-w-[150px] rounded bg-red-500 px-8 py-4 font-bold text-white hover:bg-red-700 whitespace-pre-line text-center shadow-lg"
            >
              {noCount === 0 ? "No :(" : getNoButtonText()}
            </button>
            ): null}
          </div>
        </>
      )}
    </div>
  );
}
