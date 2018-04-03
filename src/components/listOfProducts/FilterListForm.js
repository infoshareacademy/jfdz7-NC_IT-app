import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateFilter, deactivateFilter } from '../../state/filtering'
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
                                        }}
                                >
                                    POKAŻ: {categoryName}
                                </Button>
                            ))}
                            <Button primary onClick={() => this.props.deactivateFilter()}>POKAŻ WSZYSTKIE</Button>
                            <NavLink to="/storage">
                                <div>
                                    <Button as='div' labelPosition='right'>
                                        <Button color='green'>
                                            <Icon name='cart' />
                                            Schowek
                                        </Button>
                                        <Label as='a' basic color='green' pointing='left'><b>{favorites.length} produkty/-ów</b></Label>
                                    </Button>
                                </div>
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


