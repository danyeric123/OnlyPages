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

  handleAddFriend = async (id) => {
    await this.props.handleAddFriend(id)
    const profiles = await getAllProfiles()
    this.setState({ profiles })
  }

  handleRemoveFriend = async (id) => {
    await this.props.handleRemoveFriend(id)
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
          handleAddFriend={this.handleAddFriend}
          handleRemoveFriend={this.handleRemoveFriend}
        />
        ))}
      </>
    );
  }
}
 
export default ProfileList;