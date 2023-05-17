import HTML from "../photos/f14.png";
import CSS from "../photos/f15.png";
import Jquery from "../photos/f16.png";
import Rsp from "../photos/rsp.png";

function InnerImages() {
    return (
        <>
         <section class="lot-img d-flax">
        <h1>The #1 Best Selling IT Solution And <br />
            Multi-Purpose HTML5 Template</h1>
        <p>A high-performant Multi-Purpose WordPress theme <br /> 
            suitable for any kind of WordPress project</p>
    </section>
    <section class="d-flax brand">
        <figure class="first-brand"><img src={HTML} alt=""/></figure>
        <figure><img src={CSS} alt=""/></figure>
        <figure><img src={Jquery} alt=""/></figure>
        <figure class="last-brand"><img src={Rsp} alt=""/></figure>
    </section>
        </>
    );
}
export default InnerImages;