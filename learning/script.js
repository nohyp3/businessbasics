

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

class Quiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			question: 1,
			score: 0,
		}
		this.getQuestion = this.getQuestion.bind(this);
		this.getOptions = this.getOptions.bind(this);
		this.validate = this.validate.bind(this);
		this.checkEnd = this.checkEnd.bind(this);
	}
	getQuestion() {
		var questions = ["what is a business?", "why are regulations important?", "what is an oliogopoly?", "congrats! check your score!", null]
		return questions[this.state.question-1]
	}
	validate(e) {
		var correctAnswers = [0,1,2]
		if(e.target.id == correctAnswers[this.state.question-1]){
			this.setState(prevState =>{
				return{
					question: prevState.question+1,
					score: prevState.score+1
				}
			})
		}
		else {
			this.setState(prevState => {
				return{
					question: prevState.question+1
				}
			})
		}
	}
	getOptions() {
		var options = [["an organization or enterprise entity engaged in commercial, industrial, or professional activities", 
		"a government-owned entity", "a place that sells stuff"],["because they give the government tax revenue","because they help protect the environment, people, companies and more","because they ensure that competition will not be able to compete"],
		["when a single entity has control over a whole industry", "when there are two entities that have complete control over a industry", "when there are a handful of companies that have complete control over a industry"]
		]
		if(this.state.question != 4){
		return (
			<div>
			<button onClick={this.validate} id="0">{options[this.state.question-1][0]}</button><br></br>
			<button onClick={this.validate} id="1">{options[this.state.question-1][1]}</button><br></br>
			<button onClick={this.validate} id="2">{options[this.state.question-1][2]}</button>
			</div>
		)
		} else{
			
		}
	}
	checkEnd() {
		if(this.state.question === 4){
			return(
				<h3 id="surprise">🎉</h3>
			)
		}
	}
	render() {
		return(
			<div id="quizbox">
			<h2>Quiz</h2>
			<h3>Score: {this.state.score}</h3>
			<h3 id="question">{this.getQuestion()}</h3>
			{this.getOptions()}
			{this.checkEnd()}
			</div>
		)
	}
}

ReactDOM.render(<Quiz />, document.getElementById('quiz'));