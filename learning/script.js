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