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
        </ul>
        </nav>
        </div>
    );
  }
}
class learnNavBar extends React.Component {
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
            <li><a href="">Basics</a></li>
        </ul>
        </nav>
        </div>
    );
  }
}
const domContainer = document.getElementById('nav');
ReactDOM.render(<NavBar />, domContainer);
const domContainer2 = document.getElementById('learnNav');
ReactDOM.render(<learnNavBar />, domContainer2);

