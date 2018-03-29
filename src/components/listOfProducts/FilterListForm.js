import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateFilter, deactivateFilter } from '../../state/filtering'
import { Grid, Button } from 'semantic-ui-react'
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
                                        }}
                                >
                                    POKAŻ: {categoryName}
                                </Button>
                            ))}
                            <Button primary onClick={() => this.props.deactivateFilter()}>POKAŻ WSZYSTKIE</Button>
                            <p>Obserwujesz <b>{favorites.length}</b> produkty/-ów.</p>
                            <NavLink to="/storage">
                                PRZEJDŹ DO SCHOWKA
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
    { activateFilter, deactivateFilter }
)(FilterListForm)


