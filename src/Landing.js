export function Loading() {
  return <></>;
}
export default function Landing({ handleStartGame }) {
  // console.log("In Landing Page");
  return (
    <div className="landing">
      <h1 className="landing--heading">Quizical</h1>
      <p className="landing--text">
        Test your knowledge with a random 5 question quiz
      </p>
      <div onClick={handleStartGame} className="landing--startButton">
        <p className="button landing--startButtonText">Start Quiz</p>
      </div>
    </div>
  );
}
