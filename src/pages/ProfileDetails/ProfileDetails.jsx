import React from 'react'

const ProfileDetails = ({ location, userProfile }) => {
  const profile = location.state.userProfile
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
      
    </>
  );
}
 
export default ProfileDetails;