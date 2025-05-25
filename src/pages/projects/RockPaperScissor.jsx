import { useEffect, useState, useRef } from "react"
import('./styles/rock_paper_scissor.css')

const RockPaperScissor = (props) => {
  document.title = props.title
  const [rules, setRules] = useState(false);
  const [playerPick, setPlayerPick] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonClick = useRef(null);
  const playAgainRef = useRef(null);
  const debounceTimer = useRef(null);
  const gameDisplay = useRef(null);
  const versusDisplay = useRef(null);
  const results = useRef(null);
  
  const playerPlay = document.querySelector("#player");
  const opponentPlay = document.querySelector("#opponent");

  
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  useEffect(() => {
    setIsMobile(mediaQuery.matches);
  }, [])


  const getRandomPick = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getResult = (player, computer) => {
    if (player === computer) return "IT'S A TIE";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setScore(score + 1)
      return "YOU WIN";
    }
    setScore(score - 1)
    return "YOU LOSE";
  };

  const determineResult = () => {
    const computerPick = getRandomPick();
    const gameResult = getResult(playerPick, computerPick);
    setComputer(computerPick);
    setResult(gameResult);
    resultVisualDisplay(gameResult);

    console.log(`This prick used ${playerPick} to attack...`);
    console.log(`Computer used ${computerPick} to attack...`);
    console.log(`You got a ${gameResult}`);
  }

  const resultVisualDisplay = (gameResult) => {
    if (gameDisplay.current.classList.contains('fade-out')) return

    gameDisplay.current.classList.add('fade-out');
    
    setTimeout(() => {
      gameDisplay.current.style.display = 'none';
      versusDisplay.current.style.display = 'flex';
      versusDisplay.current.classList.add('fade-in');

      setTimeout(() => {
        opponentPlay.classList.add('fade-in')

        setTimeout(() => {
          results.current.classList.toggle("visible")
          if (gameResult === "YOU WIN") playerPlay.classList.add('halo');
          if (gameResult === "YOU LOSE") opponentPlay.classList.add('halo');
        }, 1000)
      }, 1000)
    }, 1000);
  }

  const resetGame = () => {
    // Play Sound
    if (playAgainRef.current) {
      playAgainRef.current.currentTime = 0; // reset audio
      playAgainRef.current.play().catch((err) => console.error(err));
    }

    if (playerPlay.classList.contains('halo')) playerPlay.classList.remove('halo')
    if (opponentPlay.classList.contains('halo')) opponentPlay.classList.remove('halo')

    results.current.classList.toggle('visible')
    opponentPlay.classList.remove('fade-in')
    versusDisplay.current.classList.remove('fade-in')
    gameDisplay.current.style.display = 'flex'
    setTimeout(() => {
      gameDisplay.current.classList.remove('fade-out')
      setPlayerPick(() => "")
    }, 1000)
  }

  const chosenClick = (chosen) => {
    if (isLocked) {
      // Reset debounce if player spams cause that is annoying
      clearTimeout(debounceTimer.current);
    }

    // Play Sound
    if (buttonClick.current) {
      buttonClick.current.currentTime = 0; // reset audio
      buttonClick.current.play().catch((err) => console.error(err));
    }

    setPlayerPick(chosen)
    setIsLocked(true); // Lock input for 1 second

    // Start/reset timer to unlock after 1s
    debounceTimer.current = setTimeout(() => {
      setIsLocked(false);
    }, 1000);
  }
  
  useEffect(() => {
    // If playerPick is still the initial empty string, do nothing yet.
    if (playerPick === "") {
      return;
    }
    console.log("Mobile Ver: " + isMobile)
    determineResult();
  }, [playerPick])
  
  useEffect(() => {
    const modal = document.querySelector(".modal");
    rules ? modal.showModal() : modal.close() 
  }, [rules])

  return(
    <main className="rock_paper_scissors relative">
      <header className="absolute">
        <div>
          <p className="barlow-semi-condensed-bold text_shadow">ROCK</p>
          <p className="barlow-semi-condensed-bold text_shadow">PAPER</p>
          <p className="barlow-semi-condensed-bold text_shadow">SCISSORS</p>
        </div>
        <div>
          <p className="barlow-semi-condensed-semibold display_score">S C O R E</p>
          <p className="barlow-semi-condensed-bold score_count" id="score">{score}</p>
        </div>
      </header>

      <main ref={gameDisplay} className="relative" id="game-display">
        <button className="absolute pushable paper-back" id="paper" onClick={() => chosenClick("paper")} disabled={isLocked}>
          <span className="front paper relative">
            <img className="absolute icon selector" src="/images/project-assets/icon-paper.svg" alt="Paper" />
          </span>
        </button>

        <button className="absolute pushable scissors-back" id="scissors" onClick={() => chosenClick("scissors")} disabled={isLocked}>
          <span className="front scissors relative">
            <img className="absolute icon selector" src="/images/project-assets/icon-scissors.svg" alt="Scissors" />
          </span>
        </button>

        <button className="absolute pushable rock-back" id="rock" onClick={() => chosenClick("rock")} disabled={isLocked}>
          <span className="front rock relative">
            <img className="absolute icon selector" src="/images/project-assets/icon-rock.svg" alt="Rock" />
          </span>
        </button>
        <img className="triangle selector" src="/images/project-assets/bg-triangle.svg" alt="" />
        <audio ref={buttonClick} src="/sounds/button-mechanical.mp3" preload="auto" />
      </main>

      {isMobile ? (
        <div ref={versusDisplay} className="relative" id="versus-display">
          <div>
            <button className={`feature pushable ${playerPick}-back`} id="player" style={{marginRight: "2rem"}} disabled>
              <span className={`front ${playerPick} relative`}>
                <img className="absolute icon selector" src={`/images/project-assets/icon-${playerPick}.svg`} alt={`${playerPick}`} />
              </span>
            </button>
            <button className={`feature pushable ${computer}-back`} id="opponent" style={{marginLeft: "2rem", opacity: 0}} disabled>
              <span className={`front ${computer} relative`}>
                <img className="absolute icon selector" src={`/images/project-assets/icon-${computer}.svg`} alt={`${computer}`} />
              </span>
            </button>
          </div>

          <div ref={results} className="box" id="results">
            <h1 id="display-result">{result}</h1>
            <button id="play-again" onClick={resetGame}>PLAY AGAIN</button>
            <audio ref={playAgainRef} src="/sounds/button-soundfx.mp3" preload="auto" />
          </div>
        </div>
      ) : (
        <div ref={versusDisplay} className="relative" id="versus-display">
          <button className={`feature pushable ${playerPick}-back`} id="player" style={{marginRight: "4rem"}} disabled>
            <span className={`front ${playerPick} relative`}>
              <img className="absolute icon selector" src={`/images/project-assets/icon-${playerPick}.svg`} alt={`${playerPick}`} />
            </span>
          </button>

          <div ref={results} className="box" id="results">
            <h1 id="display-result">{result}</h1>
            <button id="play-again" onClick={resetGame}>PLAY AGAIN</button>
            <audio ref={playAgainRef} src="/sounds/button-soundfx.mp3" preload="auto" />
          </div>

          <button className={`feature pushable ${computer}-back`} id="opponent" style={{marginLeft: "4rem", opacity: 0}} disabled>
            <span className={`front ${computer} relative`}>
              <img className="absolute icon selector" src={`/images/project-assets/icon-${computer}.svg`} alt={`${computer}`} />
            </span>
          </button>
        </div>
      )}

      <footer className="barlow-semi-condensed-semibold display_score absolute btn-rule" onClick={() => setRules(true)}>R U L E S</footer>

      <dialog className="modal">
        <div>
          <h1 className="barlow-semi-condensed-bold">RULES</h1>
          <button onClick={() => setRules(false)}>
            <img src="/images/project-assets/icon-close.svg" alt="Close" />
          </button>
        </div>
        <img className="selector" style={{margin:"1rem"}} src="/images/project-assets/image-rules.svg" alt="Rules of the Game" />
      </dialog>
    </main>
  )
}
export default RockPaperScissor