import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({id,year,title,summary,poster,genres,rating,ytCode}) {
    rating = String(rating).length < 2 ? `${rating}.0` : rating;
    summary = summary.length > 150 ? `${summary.slice(0,150)}...` : summary;
    
    return (
            <div className='movie'>
                 <Link to={{
                    pathname : `movie/${id}`,
                    state : {year,title,summary,poster,genres,rating,ytCode},
                }}>
                    <img src={poster} alt={title} title={title}/>
                </Link>
                <div className='data'>
                    <h3 className='title'>{title}</h3>
                    <h5 className='year'>{year}</h5>
                    <ul className='genres'>
                        {genres.map((genre,index)=><li key={index} className='genre'>{genre}</li>)}
                    </ul>
                    <div className='rating'>Score : <span>{rating}</span></div>
                    <p className='summary'>{summary}</p>
                    {ytCode===''
                    ? ''
                    :<a className='trailer' href={`https://www.youtube.com/watch?v=${ytCode}`} target='_blank' rel='noreferrer'><span>Trailer</span></a>
                    }
                </div>
            </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    rating : PropTypes.number.isRequired,
    ytCode : PropTypes.string.isRequired,
}

export default Movie;