import {connect} from "react-redux"

const mapStateToProps = state => ({

    favorites: state.favorites.jobs
})