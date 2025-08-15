import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <table border="1">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Image</th>
      </tr>
      <tr>
        <td className='blackbackground'>Gaurav</td>
        <td className='whitebackground'>Pawar</td>
        <td><img src="../assets/rohit Sharma odi.webp" width={200} ></img></td>
      </tr>
      <tr>
        <td className='whitebackground'>Shardul</td>
        <td className='blackbackground'>Pawar</td>
        <td><img src="../assets/rohit Sharma odi.webp" width={200}></img></td>
      </tr>
      <tr>
        <td className='blackbackground'>Shravani</td>
        <td className='whitebackground'>Gunjal</td>
        <td><img src="../assets/rohit Sharma odi.webp" width={200}></img></td>
      </tr>
      <tr>
        <td className='whitebackground'>Trusha</td>
        <td className='blackbackground'>Nimse</td>
        <td><img src="../assets/RohitSharma4.webp" width={200}></img></td>
      </tr>
      <tr>
        <td className='blackbackground'>Rutuja</td>
        <td className='whitebackground'>Date</td>
        <td><img src="../assets/rohit Sharma odi.webp" width={200}></img></td>
      </tr>
      <tr>
        <td className='whitebackground'>Anamika</td>
        <td className='blackbackground'>Kute</td>
        <td><img src="../assets/rohit Sharma odi.webp" width={200}></img></td>
      </tr>
    </table>
    </div>
  );
}

export default App;
