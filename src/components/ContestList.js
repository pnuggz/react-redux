import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { contestsFetchData } from '../actions/contests';

class ContestList extends Component {
    componentDidMount() {
        this.props.fetchData('http://api.dailysportboss.com/lobby/contests/');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.contests.data.active_contests.map((contest) => (
                    <li>
                        {contest.contest_id}
                    </li>
                ))}
            </ul>
        );
    }
}

ContestList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        contests: state.contests,
        hasErrored: state.contestsHasErrored,
        isLoading: state.contestsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(contestsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestList);
