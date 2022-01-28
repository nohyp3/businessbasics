
class NavBar extends React.Component {
    render() {
      return (
          <div>
          <nav>
          <div id="logo">
          <h1 class="name"><a href="/index.html">Business Basics</a></h1>
          </div>
          <ul>
              <li><a href="/learn.html">Learn</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="basics.html">Basics</a></li>
              <li><a href="csr.html">Corporate Social Responsibility</a></li>
              <li><a href="internationaltrade.html">International Trade</a></li>
              <li><a href="hrm.html">Human Resource Management</a></li>
              <li><a href="production.html">Managing Operations & Productions</a></li>
              <li><a href="marketing.html">Marketing</a></li>
              <li><a href="accounting.html">Accounting</a></li>
              <li><a href="investing.html">Investing</a></li>
          </ul>
          </nav>
          </div>
      );
    }
  }
const domContainer2 = document.getElementById('nav');
ReactDOM.render(<NavBar />, domContainer2);

function Quiz() {
  var currentQuestion = 0;
  var showScore = false;
  var score = 0;
  var questions = 
  [
    {
      question: "question 1",
      answers: [{text:"ans1", isCorrect: false}, {text:"ans2", isCorrect: true},{text:"ans3", isCorrect: false},
      {text:"ans4", isCorrect: false}]
    },
    {
      question: "question 2",
      answers: [{text:"ans1", isCorrect: false}, {text:"ans2", isCorrect: true},{text:"ans3", isCorrect: false},
      {text:"ans4", isCorrect: false}]
    },
    {
      question: "question 3",
      answers: [{text:"ans1", isCorrect: false}, {text:"ans2", isCorrect: true},{text:"ans3", isCorrect: false},
      {text:"ans4", isCorrect: false}]
    }

  ]
  const handleClick = (isCorrect) => {
    if(isCorrect){
        alert("correct");
    }
    if(currentQuestion + 1 <= questions.length){
      currentQuestion++;
    }
    else {
      showScore = true;
    }
  }
  return(
    <div>
    <h1>{questions[currentQuestion].question}</h1>
    <h1>Score: {score}</h1>
    <div className="answerPart">
      {questions[currentQuestion].answers.map((answers, index) => (
        <button onClick={() => handleClick(answers.isCorrect)}>{answers.text}</button>
      ))}
    </div>
    </div>
  )
}
const element = <Quiz />;
ReactDOM.render(<Quiz />, document.getElementById('quiz'));