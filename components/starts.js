import Script from 'next/script';

export default function Starts () {
  return(
    <div>
      <Script src="../components/Stars/index.js"></Script>
      <canvas id="stars"></canvas>
    <div className="slider">
    <input type="range" min="8" max="15" value="2" step="0.5"/>
    Speed: <span id="speed"></span>
    </div>
    </div>
  )
}