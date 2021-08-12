import React from 'react'

const ProfileDetails = ({ location, userProfile }) => {
  const profile = location.state.profile
  const movies = profile.media.filter(media=>media.type==="movie")
  const tv = profile.media.filter(media=>media.type==="tv")
  return (
    <>
      <h1>{profile.name}'s Deets</h1>

      <h2>Friends</h2>
      {profile.friends.map(profile => 
        <>
          <h3 key={profile._id}>
            {profile.name}
          </h3>
        </>
      )}
      <h2>TV Shows</h2>
      {tv.map(show =>
          <a href={`/tv/${show.api_id}`}>
            <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt="poster" />
          </a>
        )}
      <h2>Movies</h2>
        {movies.map(movie =>
          <a href={`/movies/${movie.api_id}`}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
          </a>
        )}
    </>
  );
}
 
export default ProfileDetails;