export default function ExerciseAnimation({ grupo }) {
  const animaciones = {
    Pecho: (
      <g className="anim-press">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="50" y2="55" />
        <line x1="50" y1="55" x2="35" y2="75" />
        <line x1="50" y1="55" x2="65" y2="75" />
        <line className="brazo-izq" x1="50" y1="35" x2="25" y2="30" />
        <line className="brazo-der" x1="50" y1="35" x2="75" y2="30" />
      </g>
    ),
    Espalda: (
      <g className="anim-remo">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="45" y2="55" />
        <line x1="45" y1="55" x2="35" y2="80" />
        <line x1="45" y1="55" x2="55" y2="80" />
        <line className="brazo-izq" x1="50" y1="35" x2="20" y2="45" />
        <line className="brazo-der" x1="50" y1="35" x2="20" y2="55" />
      </g>
    ),
    Hombro: (
      <g className="anim-hombro">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="50" y2="55" />
        <line x1="50" y1="55" x2="35" y2="80" />
        <line x1="50" y1="55" x2="65" y2="80" />
        <line className="brazo-izq" x1="50" y1="35" x2="35" y2="15" />
        <line className="brazo-der" x1="50" y1="35" x2="65" y2="15" />
      </g>
    ),
    Pierna: (
      <g className="anim-sentadilla">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="50" y2="50" />
        <line className="pierna-izq" x1="50" y1="50" x2="38" y2="80" />
        <line className="pierna-der" x1="50" y1="50" x2="62" y2="80" />
        <line x1="50" y1="35" x2="30" y2="45" />
        <line x1="50" y1="35" x2="70" y2="45" />
      </g>
    ),
    'Pierna/Espalda': (
      <g className="anim-pesomuerto">
        <circle cx="50" cy="18" r="8" />
        <line className="torso-pm" x1="50" y1="26" x2="50" y2="55" />
        <line x1="50" y1="55" x2="35" y2="80" />
        <line x1="50" y1="55" x2="65" y2="80" />
        <line className="brazo-pm" x1="50" y1="35" x2="45" y2="65" />
      </g>
    ),
    Brazo: (
      <g className="anim-curl">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="50" y2="55" />
        <line x1="50" y1="55" x2="35" y2="80" />
        <line x1="50" y1="55" x2="65" y2="80" />
        <line x1="50" y1="35" x2="70" y2="40" />
        <line className="antebrazo" x1="70" y1="40" x2="60" y2="25" />
      </g>
    ),
    Core: (
      <g className="anim-plancha">
        <circle cx="20" cy="55" r="7" />
        <line x1="27" y1="55" x2="75" y2="55" />
        <line x1="27" y1="55" x2="20" y2="70" />
        <line x1="75" y1="55" x2="82" y2="70" />
      </g>
    ),
    Cardio: (
      <g className="anim-cardio">
        <circle cx="50" cy="18" r="8" />
        <line x1="50" y1="26" x2="50" y2="55" />
        <line className="pierna-izq-c" x1="50" y1="55" x2="35" y2="80" />
        <line className="pierna-der-c" x1="50" y1="55" x2="65" y2="80" />
        <line className="brazo-izq-c" x1="50" y1="35" x2="30" y2="45" />
        <line className="brazo-der-c" x1="50" y1="35" x2="70" y2="25" />
      </g>
    ),
    General: (
      <g className="anim-general">
        <circle cx="50" cy="20" r="8" />
        <line x1="50" y1="28" x2="50" y2="55" />
        <line x1="50" y1="55" x2="35" y2="80" />
        <line x1="50" y1="55" x2="65" y2="80" />
        <line x1="50" y1="35" x2="30" y2="45" />
        <line x1="50" y1="35" x2="70" y2="45" />
      </g>
    ),
  }

  return (
    <div className="w-full flex justify-center bg-neutral-800 rounded-lg py-3">
      <svg viewBox="0 0 100 90" width="90" height="80" className="exercise-svg">
        <style>{`
          .exercise-svg line { stroke: #ef4444; stroke-width: 4; stroke-linecap: round; }
          .exercise-svg circle { fill: #ef4444; }

          .anim-press .brazo-izq, .anim-press .brazo-der {
            animation: pressMove 1.4s ease-in-out infinite;
            transform-origin: 50px 35px;
          }
          @keyframes pressMove {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          .anim-remo .brazo-izq, .anim-remo .brazo-der {
            animation: remoMove 1.4s ease-in-out infinite;
            transform-origin: 50px 35px;
          }
          @keyframes remoMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }

          .anim-hombro .brazo-izq, .anim-hombro .brazo-der {
            animation: hombroMove 1.4s ease-in-out infinite;
            transform-origin: 50px 35px;
          }
          @keyframes hombroMove {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(15px); }
          }

          .anim-sentadilla {
            animation: sentadillaMove 1.6s ease-in-out infinite;
            transform-origin: 50px 45px;
          }
          @keyframes sentadillaMove {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px) scaleY(0.85); }
          }

          .anim-pesomuerto .torso-pm, .anim-pesomuerto .brazo-pm {
            animation: pmMove 1.8s ease-in-out infinite;
            transform-origin: 50px 26px;
          }
          @keyframes pmMove {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(25deg); }
          }

          .anim-curl .antebrazo {
            animation: curlMove 1.2s ease-in-out infinite;
            transform-origin: 70px 40px;
          }
          @keyframes curlMove {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-50deg); }
          }

          .anim-plancha {
            animation: plancaMove 2s ease-in-out infinite;
          }
          @keyframes plancaMove {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(2px); }
          }

          .anim-cardio .pierna-izq-c, .anim-cardio .brazo-der-c {
            animation: cardioA 0.6s ease-in-out infinite;
            transform-origin: 50px 55px;
          }
          .anim-cardio .pierna-der-c, .anim-cardio .brazo-izq-c {
            animation: cardioB 0.6s ease-in-out infinite;
            transform-origin: 50px 55px;
          }
          @keyframes cardioA {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(8px); }
          }
          @keyframes cardioB {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-8px); }
          }

          .anim-general .brazo-izq, .anim-general .brazo-der {
            animation: generalMove 1.4s ease-in-out infinite;
            transform-origin: 50px 35px;
          }
          @keyframes generalMove {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
        {animaciones[grupo] || animaciones.General}
      </svg>
    </div>
  )
}
