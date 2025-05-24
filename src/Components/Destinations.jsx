import React from 'react'



const destinations = [
  { name: 'India', image: 'https://imgs.search.brave.com/ojtbjEUCru_QTHY1Egpewe-wisqrDM8uVqlMPj5Hmm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVVJfejBL/dFJ3cm14YkF5OUZH/SHZvd0hkTXNKM1Bx/cEtDeVZEa1NpWGN1/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9jR3hoYm1W/MGQyRnlaUzVqL2Iy/MHZkM0JwYldGblpY/TXYvTWpBeU1DOHdN/UzlwYm1ScC9ZUzFw/Ymkxd2FXTjBkWEps/L2N5MWlaV0YxZEds/bWRXd3QvY0d4aFky/VnpMWFJ2TFhCby9i/M1J2WjNKaGNHZ3Rk/R0ZxL0xXMWhhR0Zz/TG1wd1p3.jpeg', price: '$1,299'  },
  { name: 'London', image: 'https://imgs.search.brave.com/vecnX9qx615HhpPjNhqa-RLOIq1cQU9TOB7ECOeZjtc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcEluWUdM/QjJEN1JTSlZXdHNw/M0JZMHVkUldYTXRV/bFkyWE1TRWw0eUgy/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9U/VXkvTXpjMU9UUXlM/M0JvYjNSdi9MM2Rs/YzNSdGFXNXpkR1Z5/L0xYQmhjbXhwWVcx/bGJuUXQvWW1sbkxX/SmxiaTFoYm1RdC9k/R2hsTFhSb1lXMWxj/eTEzL2FYUm9MV0pz/ZFdVdGMydDUvTG1w/d1p6OXpQVFl4TW5n/Mi9NVEltZHowd0pt/czlNakFtL1l6MWhS/SE5VYlRBeE1HSXov/YVhGblowVkVPSGxu/VmtFeS9TMmxxV1VV/MlowVXhkV0oyL2FE/UjBWVlJTTnpselBR.jpeg', price: '$1,899' },
  { name: 'New York', image: 'https://imgs.search.brave.com/KaiDn2nEJl5nuNNBtpSOT5KjMcsXaXYdnd9t2qp7030/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcWVWWF9L/eTdjclhhbDJiMlJX/Z1BQN3JBQ2JYY2Ra/Q1JQWEpHVkF3NDF0/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2Y0dodmRH/OXovTDNSb1pTMXpk/R0YwZFdVdC9iMll0/YkdsaVpYSjBlUzEz/L2FYUm9MWGR2Y214/a0xYUnkvWVdSbExX/TmxiblJsY2kxaS9Z/V05yWjNKdmRXNWtM/V3hoL2JtUnRZWEpy/Y3kxdlppMXcvYVdO/MGRYSmxMV2xrTVRB/MS9PVFl4TkRJeE9E/OXJQVEl3L0ptMDlN/VEExT1RZeE5ESXgv/T0NaelBUWXhNbmcy/TVRJbS9kejB3Sm1n/OU5EZzVjMmh2L01Y/VnVZV0pqVURsc2Ru/cHkvWjJoNFFUVkhP/VWxCTmxaWi9kM0pU/UVMxNE9FZG9jRmhp/L1RUMA.jpeg', price: '$999'},
  { name: 'Paris', image: 'https://imgs.search.brave.com/ixGFsWRh-60_I6iA_ywrzPznBu5hmKTS6WdZbeESqyQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTXlpV0RL/LUptc1RwcmE5c01V/QTFROWo0UmpMYnFo/d1Y3c2dWSTlGbWNu/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2YVdRdk1U/RTIvTlRnM09UWXlN/aTl3YUc5MC9ieTls/YVdabVpXd3RkRzkz/L1pYSXRkMmwwYUMx/b1lYVnovYzIxaGJt/NHRZWEJoY25SdC9a/VzUwTFdKMWFXeGth/VzVuL2N5MXBiaTFt/YjNKbFozSnYvZFc1/a0xYQmhjbWx6TFda/eS9ZVzVqWlM1cWNH/Y19jejAyL01USjRO/akV5Sm5jOU1DWnIv/UFRJd0ptTTljVVox/TmtsSS9kM1J0Y25Z/eWIwWktNa3h6L1ZI/SlVObFJKVDNsMFdu/Tm8vUVRVdExWcHBl/a2RCYjNFMS9PRDA.jpeg',price: '$1,599' },
];
const Destinations = () => {
  return (
    <div className=" card-container">
      <h2>Adventure Awaits </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}></div>
  {destinations.map((destination, ) => (
          <div className="card"  style={{ width: 'calc(35% - 10px)' }}>
            <img src={destination.image} alt={destination.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{destination.name}</h3>
            <p>Price {destination.price}</p>
          </div>
          ))}
      </div>
    
  );
};

export default Destinations