import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Icon, Input } from 'semantic-ui-react'
import { activateSearch, deactivateSearch } from '../../state/searchBar'
import { deactivateFilter } from '../../state/filtering'
import { onePage, activatePagination } from '../../state/pagination'
import _ from 'lodash'
import Animate from 'react-smooth'



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
            <Animate to={1} from={0.1} attributeName="opacity">
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
            </Animate>
        )
    }
}
export default connect(
    state => ({
    }),
    { activateSearch, deactivateSearch, deactivateFilter, onePage, activatePagination }
)(SearchBar)


