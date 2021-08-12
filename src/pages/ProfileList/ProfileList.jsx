import React, { Component } from 'react'
import { getAllProfiles } from "../../services/profileService"
import ProfileCard from '../../components/ProfileCard/ProfileCard'

class ProfileList extends Component {
  state = {
    profiles: []
  }

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
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.profiles.map((profile) => (
          <ProfileCard 
          key={profile._id}
          profile={profile}
          userProfile={this.props.userProfile}
          handleFriend={this.handleFriend}
        />
        ))}
      </>
    );
  }
}
 
export default ProfileList;