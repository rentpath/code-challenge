import React from 'react'

import './styles.css'

/**
 * React Hooks are available for functional components.
 *
 * A classical component is provided below, if you prefer to work with those.
 */

function ScoreDisplay() {
  return (
    <div className="score-box">
      <div className="score">
        <span className="label">score:</span> n/a
      </div>
      <button className="button">
        Get Score
      </button>
    </div>
  )
}

// class ScoreDisplay extends React.Component {
//   render() {
//     return (
//       <div className="score-box">
//         <div className="score">
//           <span className="label">score:</span> n/a
//         </div>
//         <button className="button">
//           Get Score
//         </button>
//       </div>
//     )
//   }
// }

export default ScoreDisplay
