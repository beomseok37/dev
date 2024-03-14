import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import InfoWithUseCallback from './Info';

function AppWithUseCallback(): ReactElement {
  const [color, setColor] = useState('');
  const [movie, setMovie] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'color') setColor(e.target.value);
    else setMovie(e.target.value);
  }, []);

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
      <InfoWithUseCallback color={color} movie={movie} />
    </div>
  );
}

export default AppWithUseCallback;
