import phones from "../photos/phone.png";
import tablet from "../photos/tablet.png";
import laptop from "../photos/laptop.png";
function header() {
    return (
        <header class="d-flax first-header">
        <div class="wrapper">
            <a href="#">Techno- Best IT Solution & Multi-Purpose HTML5 Template</a>
            <section class="d-flax">
                <figure class="responseve">
                    <img class="phone" src={phones} alt=""/>
                </figure>
                <figure class="responseve">
                    <img class="tablet" src={tablet} alt=""/>
                </figure>
                <figure class="responseve">
                    <img class="laptop" src={laptop} alt=""/>
                </figure>
            </section>
            <button class="header-btn">Add to Cart</button>
        </div>
    </header>
    );
  }
  
  export default header;