import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Icon, Input } from 'semantic-ui-react'
import { activateSearch, deactivateSearch } from '../../state/searchBar'
import { deactivateFilter } from '../../state/filtering'
import { onePage, activatePagination } from '../../state/pagination'
import _ from 'lodash'



class SearchBar extends Component {
    handleChange = event => {
        const searchValue = event.target.value.toLowerCase().substr(0, 20);
        const filterName = this.props.deactivateFilter('');
        _.isEmpty(searchValue) ? (this.props.deactivateSearch(searchValue)) : this.props.activateSearch(searchValue);
        this.props.onePage();
    }
    handleClick= event => {
        const searchValue = event.target.value.toLowerCase().substr(0, 20);
        _.isEmpty(searchValue) ? this.props.activatePagination() : null;
    }

    render() {
        return (
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={10}>
        <div>
            <Input fluid
                icon={<Icon name='search' inverted circular link />}
                placeholder='Wyszukaj...' value={this.props.searchBar}
                onChange={this.handleChange} onKeyUp={this.handleClick}/>
        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default connect(
    state => ({
    }),
    { activateSearch, deactivateSearch, deactivateFilter, onePage, activatePagination }
)(SearchBar)


