
import  {MovieCard}  from './MovieCard'

export const MovieList = ({list}) => {

  return (
    <div>
    {list.map((el) => (
      <MovieCard mov={el} key={el.id}/>
    ))}
    </div>
  );
};
