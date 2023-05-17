import windows from "../photos/Screenshot_w.png";
import world from "../photos/Screenshot_8.png";
import calendar from "../photos/Screenshot_9.png";
import note from "../photos/Screenshot_10.png";


function ProcessArea() {
    return (
        <>
        <div class="process-area d-flax">
            <section class="d-flax">
                <article class="process-box d-flax">
                    <img src={windows} alt=""/>
                    <h2>Adjustable column</h2>
                </article>
                <article class="process-box d-flax">
                    <img src={world} alt=""/>
                    <h2>Attractive hover</h2>
                </article>
                <article class="process-box d-flax">
                    <img src={calendar} alt=""/>
                    <h2>Advanced single project</h2>
                </article>
                <article class="process-box d-flax">
                    <img src={note} alt=""/>
                    <h2>Different Demos</h2>
                </article>
            </section>
        </div>
        </>
    );
}
export default ProcessArea;