import newscard from './assets/aubameyang.jpeg';
import awards from './assets/awards.jpeg';
import caps from './assets/caps.jpeg';
import donna from './assets/donna.jpeg';
import dynamos from './assets/dynamos.jpg.gif';
import kaunda from './assets/scottland.jpeg';
import scottland from './assets/scottland.jpeg';
import uganda from './assets/uganda.jpeg';


function Card() {
  return (
    
    <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      <div className="card">
        <img className="card-image" src={awards} alt="newscard" />
        <h2>2025 Betway Premier League Awards</h2>
        <p>Sundowns Star scopes multiple awards at the 2025 football awards ceremony</p>
      </div>
            <div className="card">
        <img className="card-image" src={newscard} alt="awards" />
        <h2>Aubameyang proves his far from losing it</h2>
        <p>At 35 Pierre-Emerick Aubameyang proves he is far from losing his shine.</p>
      </div>
            <div className="card">
        <img className="card-image" src={donna} alt="donna" />
        <h2>Transfer News</h2>
        <p>Donnarumma eyes move to Saudi Arabia</p>
      </div>
            <div className="card">
        <img className="card-image" src={kaunda} alt="kaunda" />
        <h2>Knowledge Musona return delights coach Ndiraya</h2>
        <p>Scottland coach Tonderai Ndiraya has expressed his excitement following Knowledge 's arrival at the club</p>
      </div>
       <div className="card">
        <img className="card-image" src={uganda} alt="kaunda" />
        <h2>Aubameyang proves his far from losing it</h2>
        <p>At 35 Pierre-Emerick Aubameyang proves he is far from losing his shine.</p>
      </div>
       <div className="card">
        <img className="card-image" src={scottland} alt="kaunda" />
        <h2>Knowledge Musona return delights coach Ndiraya</h2>
        <p>Scottland coach Tonderai Ndiraya has expressed his excitement following Knowledge 's arrival at the club</p>
      </div>
       <div className="card">
        <img className="card-image" src={dynamos} alt="kaunda" />
        <h2>Dynamos FC on brink of relegation</h2>
        <p>In a shock turn of events, Dynamos FC one of the most storied clubs in Zimbabwean football history finds itself on the precise of relegation</p>
      </div>
       <div className="card">
        <img className="card-image" src={caps} alt="kaunda" />
        <h2>Kaunda backs the appointment of Nkwazi</h2>
        <p>Former Nkwazi head coach Kaunda has thrown his full support behind Keagan Phiri</p>
      </div>
    </div>
  );
}
export default Card;