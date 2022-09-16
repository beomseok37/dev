import { ChangeEvent, ReactElement, useState } from 'react';
import InfoWithoutUseMemo from './Info';

function AppWithoutUseMemo(): ReactElement {
  const [color, setColor] = useState('');
  const [movie, setMovie] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'color') setColor(e.target.value);
    else setMovie(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <label>
          What is your favorite color of rainbow ?
          <input id="color" value={color} onChange={handleChange} />
        </label>
      </div>
      <div>
        What is your favorite movie among these ?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={handleChange}
          />
          Marriage Story
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={handleChange}
          />
          The Fast And The Furious
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={handleChange}
          />
          Avengers
        </label>
      </div>
      <InfoWithoutUseMemo color={color} movie={movie} />
    </div>
  );
}

export default AppWithoutUseMemo;
