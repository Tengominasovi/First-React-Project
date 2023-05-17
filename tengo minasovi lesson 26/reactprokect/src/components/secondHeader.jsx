import logo from "../photos/1.png";


function secondHeader() {
    return (
        <header>
        <div class="second-wrapper header-size">
            <figure class="d-flax"><img  src={logo} alt=""/></figure>
            <div class="navigation-button">
                <nav>
                    <ul class="d-flax">
                        <li>Home</li>
                        <li>Demo</li>
                        <li>Inner page</li>
                        <li>Support</li>
                        <li>Future</li>
                        <li>Blog</li>
                    </ul>
                </nav>
                <button>Get Start</button>
            </div>
        </div>
    </header>
    );
  }
export default secondHeader;