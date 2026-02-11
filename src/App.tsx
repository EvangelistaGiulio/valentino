"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string }[]>([]);
  const yesButtonSize = noCount * 20 + 16;

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
    <div className="-mt-16 flex h-screen flex-col items-center justify-center bg-[#fff0f6]">
      
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
          <div className="my-4 text-4xl font-bold">❤️ AAAAAAAA TI AMO PATATA!! ;)) ❤️</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={
              noCount=== 0
              ? "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              : "https://gifdb.com/images/high/milk-and-mocha-love-me-rg6ve4g0z8mip842.gif"
            }
          />
          <h1 className="my-4 text-4xl">Vuoi essere la mia Valentina? 🥺</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Shi
            </button>
            {noCount<18 ? (
            <button
              onClick={handleNoClick}
              style={{
                fontSize: noCount=== 17 ? "4rem" : "1rem",
                transition: "all 0.1s"
              }}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 whitespace-pre-line text-center"
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
