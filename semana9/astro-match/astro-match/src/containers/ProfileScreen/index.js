import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.currentSelectedProfile.photo} />
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  currentSelectedProfile: state.profiles.currentSelectedProfile
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
