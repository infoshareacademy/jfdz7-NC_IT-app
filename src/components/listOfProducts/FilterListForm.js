import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateFilter, deactivateFilter } from '../../state/filtering'
import { Grid, Button } from 'semantic-ui-react'


class FilterListForm extends Component {
    render() {
        return (
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={10}>
            <div>
                {this.props.category.map(categoryName => (
                    <Button primary
                        key={categoryName}
                        onClick={() => { this.props.deactivateFilter(); this.props.activateFilter(categoryName);}}
                    >
                        POKAŻ: {categoryName}
                    </Button>
                ))}
                <Button primary onClick={() => this.props.deactivateFilter()}>POKAŻ WSZYSTKIE</Button>
            </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default connect(
    state => ({
        category: Object.keys(
            state.products.data
                .map(task => task.category)
                .reduce((uniqueCategoryNames, nextCategoryName) => {
                    uniqueCategoryNames[nextCategoryName] = true
                    return uniqueCategoryNames
                }, {})
        )
    }),
    { activateFilter, deactivateFilter }
)(FilterListForm)
