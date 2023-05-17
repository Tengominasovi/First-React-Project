import Person from "../photos/hossen.jpg";


function SupportTeam() {
    return (
        <div class="support-team">
        <section>
            <p>Support Team</p>
            <h1>Our Dedicated Support Team<br/>For Help You All Time</h1>
        </section>
        <figure>
            <img src={Person} alt=""/>
            <img src={Person} alt=""/>
            <img src={Person} alt=""/>
            <img src={Person} alt=""/>
        </figure>
    </div>
    );
}
export default SupportTeam