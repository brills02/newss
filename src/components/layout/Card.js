import newscard from './assets/aubameyang.jpeg';
import awards from './assets/awards.jpeg';
import caps from './assets/caps.jpeg';
import donna from './assets/donna.jpeg';
import dynamos from './assets/dynamos.jpg.gif';
import kaunda from './assets/scottland.jpeg';
import scottland from './assets/scottland.jpeg';
import uganda from './assets/uganda.jpeg';
import arsenal from './assets/arsenal.jpeg';
import zambia from './assets/zambia.jpeg';
import nigeria from './assets/nnigeria.jpeg';
import chan from './assets/chan.jpeg';
import mwila from './assets/mwila.jpeg'



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
        <h2>Uganda Cranes traveling squad to Morrocco for International friendlies</h2>
        <p>The Uganda Cranes will depart for Marrakech, Morrocco on Monday evening aboard Qatar Airways as they gear up for two high-profile international friendlies. The team is scheduled to face African heavyweights Cameroon on Friday, 6th June followed by a clash aganist the Gambia on Monday 9th June 2025</p>
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
        <img className="card-image" src={arsenal} alt="kaunda" />
        <h2>Arsenal pre-season</h2>
        <p>rsenal defeat Newcastle 3-2 Odegaard and Max Dowman shine for gunners</p>
      </div>
      <div className="card">
        <img className="card-image" src={zambia} alt="kaunda" />
        <h2>Zambia 's women could be barred from football at Olympics</h2>
        <p>Zambia's women might be barred from participating in the Olympics due to a FIFA suspension. The suspension is linked to the Football Association of Zambia (FAZ) being prevented from holding its annual general meeting due to a court order.</p>
    </div>
    <div className="card">
        <img className="card-image" src={mwila} alt="kaunda" />
        <h2>Mwila returns for Zambia after two-year absence, injured trio out</h2>
        <p>In-form striker Brian Mwila has been handed a return to the Zambian national team after a two-year absence after being named in the squad for the upcoming 2026 World Cup qualifiers.</p>
</div>
<div className="card">
        <img className="card-image" src={chan} alt="kaunda" />
        <h2>CHAN new trophy unveiled</h2>
        <p>The Confédération Africaine de Football (CAF) has unveiled the new trophy for the TotalEnergies CAF African Nations Championship (CHAN), PAMOJA 2024, in a reveal that featured three of the continent’s most celebrated football icons – Victor Wanyama (Kenya), Denis Onyango (Uganda) and Mrisho Ngasa (Tanzania).</p>
</div>
<div className="card">
        <img className="card-image" src={nigeria} alt="kaunda" />
        <h2>New Nigeria Proffesional Football League season postponed</h2>
        <p>The 2022/2023 Nigeria Proffesional Football League seaon which was scheduled to begin on 28 December has been rescheduled</p>
</div>
</div>
  );
}
export default Card;