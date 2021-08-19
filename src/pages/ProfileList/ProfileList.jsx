import React, { Component } from 'react'
import { getAllProfiles } from "../../services/profileService"
import ProfileCard from '../../components/ProfileCard/ProfileCard'
// import React, { useState, useEffect } from 'react';


class ProfileList extends Component {
  state = {
    profiles: []
  }

  /* const [profiles, setProfiles] = useState([]) */

  async componentDidMount() {
    const profiles = await getAllProfiles()
    this.setState({ profiles })
  }

  handleFriend = async (id) => {
    await this.props.handleFriend(id)
    const profiles = await getAllProfiles()
    this.setState({ profiles })
  }

  render() { 
    return (
      // <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.profiles.map((profile) => (
          <ProfileCard 
          key={profile._id}
          profile={profile}
          userProfile={this.props.userProfile}
          handleFriend={this.handleFriend}
        />
        ))}
        </div>
        
      // </div>
    );
  }
}
 
export default ProfileList;