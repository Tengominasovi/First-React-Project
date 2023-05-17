import demo from "../photos/agency04.jpg";
function UniqueDemos() {
    return (
        <>
       <section class="center-title mt-5">
        <h1>50+ Stunning and <br/>Unique Demos</h1>
    </section>
    <div class="third-wrapper d-flax">
        <nav>
            <ul>
                <li>All</li>
                <li>IT Solution</li>
                <li>Business</li>
                <li>Agency</li>
                <li>New Demo</li>
                <li>Startup</li>
                <li>Consulting</li>
                <li>Finance</li>
                <li>Data Science</li>
                <li>SEO</li>
                <li>Marketing</li>
                <li>Oddo</li>
                <li>Insurance</li>
                <li>Dark</li>
                <li>landing</li>
            </ul>
        </nav>
    </div>
    <div class="photo-wrapper">
        <figure >
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
            <img src={demo} alt=""/>
        </figure>
    </div>
    
        </>
    );
}
export default UniqueDemos;