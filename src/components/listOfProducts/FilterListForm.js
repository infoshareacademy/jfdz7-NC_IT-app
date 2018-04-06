import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateFilter, deactivateFilter } from '../../state/filtering'
import { onePage, activatePagination } from '../../state/pagination'
import { Grid, Button, Icon, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class FilterListForm extends Component {
    render() {
        const {favorites} = this.props;
        return (
            <Grid centered>
                <Grid.Row>
                    <Grid.Column>
                        <div className="filter_button">
                            {this.props.category.map(categoryName => (
                                <Button primary
                                        key={categoryName}
                                        onClick={() => {
                                            this.props.deactivateFilter();
                                            this.props.activateFilter(categoryName);
                                            this.props.onePage();
                                        }}
                                >
                                    POKAŻ: {categoryName}
                                </Button>
                            ))}
                            <Button primary onClick={() => {
                                this.props.activatePagination();
                                this.props.deactivateFilter();
                            }}>POKAŻ WSZYSTKIE</Button>
                            <br/>
                            <NavLink to="/storage">
                                <Button  style={{ marginTop: 15 }} as='div' labelPosition='right'>
                                    <Button color='green'>
                                        <Icon name='cart' />
                                        Obserwujesz
                                    </Button>
                                    <Label as='a' basic color='green' pointing='left'><p><b>{favorites.length} </b> produkty/-ów.</p></Label>
                                </Button>
                            </NavLink>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
export default connect(
    state => ({
        category: Object.keys(
            state.products.data
                .map(product => product.category)
                .reduce((uniqueCategoryNames, nextCategoryName) => {
                    uniqueCategoryNames[nextCategoryName] = true
                    return uniqueCategoryNames
                }, {})
        ),
        favorites: state.favorites.data,
    }),
    { activateFilter, deactivateFilter, onePage, activatePagination }
)(FilterListForm)


