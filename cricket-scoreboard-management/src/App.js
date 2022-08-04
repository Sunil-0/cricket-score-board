import './App.css';
import { useState } from "react";

function Header() {
  return (
      <header>
          <h1>WelCome TO SPL</h1>
      </header>
  );
}

function App() {

  var [TeamA, setTeamA] = useState("Team A");
  var [TeamB, setTeamB] = useState("Team B");
  var APlayers = ["Rohit Sharma", "Virat Kohli", "KL Rahul", "SuryaKumar Y", "S Iyer", "Rishabh Pant", "R Jadeja", "R Ashwin", "Bhuvneshwar", "H Patel", "A Singh"];
  var BPlayers = ["Brandon King", "Kule Mayers", "Nicholas Pooran", "S. Hetmyer", "Devon Thomas", "R Powell", "D Drakes", "Obed McCoy", "Jason Holder", "A Hosein", "A Joseph"];
  var batting;
  var bowling;
  var inningsCompleted = false;
  if (inningsCompleted) {
    batting = BPlayers;
    bowling = APlayers;
  } else {
    batting = APlayers;
    bowling = BPlayers;
  }
  var BatsMan = {
    player1: {
      Name: batting[0],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player2: {
      Name: batting[1],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player3: {
      Name: batting[2],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player4: {
      Name: batting[3],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player5: {
      Name: batting[4],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player6: {
      Name: batting[5],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player7: {
      Name: batting[6],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player8: {
      Name: batting[7],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player9: {
      Name: batting[8],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player10: {
      Name: batting[9],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player11: {
      Name: batting[10],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
  };

  var Bowler = {
    player7: {
      Name: bowling[6],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player8: {
      Name: bowling[7],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player9: {
      Name: bowling[8],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player10: {
      Name: bowling[9],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
    player11: {
      Name: bowling[10],
      run: 0,
      four: 0,
      six: 0,
      wkt: 0,
    },
  };
  var [BatsMan1, setBatsMan1] = useState(BatsMan.player1);
  var [BatsMan2, setBatsMan2] = useState(BatsMan.player2);
  var [strikerRun, setStrikerRun] = useState(BatsMan.player1.run)
  const handleStart = (event) => {
    document.getElementById("toss").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
    document.getElementById("admin").style.display = "block";
  }
  const handleStriker = (event) => {
    var x = event.target.value;
    if (x == BatsMan.player1.Name) {
      setBatsMan1(BatsMan.player1);
      
    }
    else if (x == BatsMan.player2.Name) {
      setBatsMan1(BatsMan.player2);
      BatsMan.player2.run = BatsMan.player2.run + strikerRun;
    }
    else if (x == BatsMan.player3.Name) {
      setBatsMan1(BatsMan.player3);
      BatsMan.player3.run = BatsMan.player3.run + strikerRun;
    }
    else if (x == BatsMan.player4.Name) {
      setBatsMan1(BatsMan.player4);
      BatsMan.player4.run = BatsMan.player4.run + strikerRun;
    }
    else if (x == BatsMan.player5.Name) {
      setBatsMan1(BatsMan.player5);
      BatsMan.player5.run = BatsMan.player5.run + strikerRun;
    }
    else if (x == BatsMan.player6.Name) {
      setBatsMan1(BatsMan.player6);
      BatsMan.player6.run = BatsMan.player6.run + strikerRun;
    }
    else if (x == BatsMan.player7.Name) {
      setBatsMan1(BatsMan.player7);
      BatsMan.player7.run = BatsMan.player7.run + strikerRun;
    }
    else if (x == BatsMan.player8.Name) {
      setBatsMan1(BatsMan.player8);
      BatsMan.player8.run = BatsMan.player8.run + strikerRun;
    }
    else if (x == BatsMan.player9.Name) {
      setBatsMan1(BatsMan.player9);
      BatsMan.player9.run = BatsMan.player9.run + strikerRun;
    }
    else if (x == BatsMan.player10.Name) {
      setBatsMan1(BatsMan.player10);
      BatsMan.player10.run = BatsMan.player10.run + strikerRun;
    }
    else if (x == BatsMan.player11.Name) {
      setBatsMan1(BatsMan.player11);
      BatsMan.player11.run = BatsMan.player11.run + strikerRun;
    }
  }
  const handleNonStriker = (event) => {
    var y = event.target.value;
    if (y == BatsMan.player1.Name) {
      setBatsMan2(BatsMan.player1);
      BatsMan.player1.run = BatsMan.player1.run + strikerRun;
    }
    else if (y == BatsMan.player2.Name) {
      setBatsMan2(BatsMan.player2);
      BatsMan.player2.run = BatsMan.player2.run + strikerRun;
    }
    else if (y == BatsMan.player3.Name) {
      setBatsMan2(BatsMan.player3);
      BatsMan.player3.run = BatsMan.player3.run + strikerRun;
    }
    else if (y == BatsMan.player4.Name) {
      setBatsMan2(BatsMan.player4);
      BatsMan.player4.run = BatsMan.player4.run + strikerRun;
    }
    else if (y == BatsMan.player5.Name) {
      setBatsMan2(BatsMan.player5);
      BatsMan.player5.run = BatsMan.player5.run + strikerRun;
    }
    else if (y == BatsMan.player6.Name) {
      setBatsMan2(BatsMan.player6);
      BatsMan.player6.run = BatsMan.player6.run + strikerRun;
    }
    else if (y == BatsMan.player7.Name) {
      setBatsMan2(BatsMan.player7);
      BatsMan.player7.run = BatsMan.player7.run + strikerRun;
    }
    else if (y == BatsMan.player8.Name) {
      setBatsMan2(BatsMan.player8);
      BatsMan.player8.run = BatsMan.player8.run + strikerRun;
    }
    else if (y == BatsMan.player9.Name) {
      setBatsMan2(BatsMan.player9);
      BatsMan.player9.run = BatsMan.player9.run + strikerRun;
    }
    else if (y == BatsMan.player10.Name) {
      setBatsMan2(BatsMan.player10);
      BatsMan.player10.run = BatsMan.player10.run + strikerRun;
    }
    else if (y == BatsMan.player11.Name) {
      setBatsMan2(BatsMan.player11);
      BatsMan.player11.run = BatsMan.player11.run + strikerRun;
    }
  }
  const handleRuns = (event) => {
    setStrikerRun(parseInt(event.target.value));
    BatsMan.run += strikerRun;
    handleStriker();
    handleNonStriker();
  }

  return (
    <>
      <div id="toss">
        <div class="inputs">
          <table class="introTable">
            <tr>
              <th>
                <label>1st Team</label>
              </th>
              <td>
                <input type="text" value={TeamA } onChange={(e)=>setTeamA(e.target.value)} />
              </td>
            </tr>

            <tr>
              <th>
                <label>2st Team</label>
              </th>
              <td>
                <input type="text" value={TeamB } onChange={(e)=>setTeamB(e.target.value)} />
              </td>
            </tr>
            <tr >
              <td  colSpan="2">
                <button onClick={handleStart}>
                  Start
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <table>
        <tr>
          <td>
          <div id="mainContainer">
            <div className="container">
            <Header />
            <div>
                <p>{TeamA} Vs {TeamB }</p>
            </div>
            <table>
            
            <tr>
              <th>Batsman</th>
              <th>Runs</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
              <th>DM</th>
            </tr>
            <tr>
              <td>{BatsMan1.Name}</td>
                    <td>{BatsMan1.run}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>NO</td>
            </tr>
            <tr class="row2">
              <td>{BatsMan2.Name}</td>
                    <td>{BatsMan2.run }</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>NO</td>
            </tr>
            <tr>
              <th>Bowler</th>
              <th>Overs</th>
              <th>M</th>
              <th>Runs</th>
              <th>ECO</th>
              <th>Wkt</th>
              </tr>
            <tr>
              <td>{BPlayers[7] }*</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            </table>
          </div>

          <div class="container">
            <table>
              
              <tr>
                <th>Bowler</th>
                <th>Overs</th>
                <th>Maiden</th>
                <th>Runs</th>
                <th>Wickets</th>
              </tr>
              <tr>
                <td>{bowling[7] }</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr class="row2">
                <td>{bowling[8] }</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{bowling[9] }</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr class="row2">
                <td>{bowling[10] }</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{bowling[6] }</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>

            </table>
          </div>

          <div class="container">
            <table>
          
              <tr>
                <th>Wkt</th>
                <th>Runs</th>
                <th>Overs</th>
                <th>Player</th>
              </tr>
            </table>
          </div>

          <div class="container ctn4">
            <table>
              
              <tr>
                <th>Team A</th>
                <th>Team B</th>
              </tr>
              <tr>
                <td>{APlayers[0] }</td>
                <td>{BPlayers[0] }</td>
              </tr>
              <tr class="row2">
                <td>{APlayers[1] }</td>
                <td>{BPlayers[1] }</td>
              </tr>
              <tr>
                <td>{APlayers[2] }</td>
                <td>{BPlayers[2] }</td>
              </tr>
              <tr class="row2">
                <td>{APlayers[3] }</td>
                <td>{BPlayers[3] }</td>
              </tr>
              <tr>
                <td>{APlayers[4] }</td>
                <td>{BPlayers[4] }</td>
              </tr>
              <tr class="row2">
                <td>{APlayers[5] }</td>
                <td>{BPlayers[5] }</td>
              </tr>
              <tr>
                <td>{APlayers[6] }</td>
                <td>{BPlayers[6] }</td>
              </tr>
              <tr class="row2">
                <td>{APlayers[7] }</td>
                <td>{BPlayers[7] }</td>
              </tr>
              <tr>
                <td>{APlayers[8] }</td>
                <td>{BPlayers[8] }</td>
              </tr>
              <tr class="row2">
                <td>{APlayers[9] }</td>
                <td>{BPlayers[9] }</td>
              </tr>
              <tr>
                <td>{APlayers[10] }</td>
                <td>{BPlayers[10] }</td>
              </tr>
            </table>
                </div>
              </div>
          </td>

          <td>
            <div id="admin">
              <table class="admin">
                <tr>
                  <td>
                    <h2>Select Striker</h2>
                    <select onChange={handleStriker}>dfcsd
                    <option value={BatsMan.player1.Name } >{BatsMan.player1.Name }</option>
                    <option value={BatsMan.player2.Name }>{BatsMan.player2.Name}</option>
                    <option value={BatsMan.player3.Name }>{BatsMan.player3.Name}</option>
                    <option value={BatsMan.player4.Name }>{BatsMan.player4.Name}</option>
                    <option value={BatsMan.player5.Name }>{BatsMan.player5.Name}</option>
                    <option value={BatsMan.player6.Name }>{BatsMan.player6.Name}</option>
                    <option value={BatsMan.player7.Name }>{BatsMan.player7.Name}</option>
                    <option value={BatsMan.player8.Name }>{BatsMan.player8.Name}</option>
                    <option value={BatsMan.player9.Name }>{BatsMan.player9.Name }</option>
                    <option value={BatsMan.player10.Name }>{BatsMan.player10.Name }</option>
                    <option value={BatsMan.player11.Name }>{BatsMan.player11.Name }</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                  <h2>Select Non `Striker</h2>
                    <select onChange={handleNonStriker}>
                    <option value={BatsMan.player1.Name }>{BatsMan.player1.Name }</option>
                    <option value={BatsMan.player2.Name }>{BatsMan.player2.Name}</option>
                    <option value={BatsMan.player3.Name }>{BatsMan.player3.Name}</option>
                    <option value={BatsMan.player4.Name }>{BatsMan.player4.Name}</option>
                    <option value={BatsMan.player5.Name }>{BatsMan.player5.Name}</option>
                    <option value={BatsMan.player6.Name }>{BatsMan.player6.Name}</option>
                    <option value={BatsMan.player7.Name }>{BatsMan.player7.Name}</option>
                    <option value={BatsMan.player8.Name }>{BatsMan.player8.Name}</option>
                    <option value={BatsMan.player9.Name }>{BatsMan.player9.Name }</option>
                    <option value={BatsMan.player10.Name }>{BatsMan.player10.Name }</option>
                    <option value={BatsMan.player11.Name }>{BatsMan.player11.Name }</option>
                   </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Runs</h2>
                    <select onClick={handleRuns}>
                      <option>0</option>
                      <option >1</option>
                      <option >2</option>
                      <option >3</option>
                      <option value={4}>4</option>
                      <option value={6}>6</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;


