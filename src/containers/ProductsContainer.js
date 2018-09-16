import React, { Component } from 'react'
import Products from '../components/Products'
import Product from '../components/Product'
import {connect} from 'react-redux'
import {actGetTasksRequest, actDeleteTaskRequest} from '../actions/index'


class ProductsContainer extends Component {

    componentDidMount(){
        this.props.actGetTasksRequest()
    }

    render() {               
        return (
            <Products>
                {this.showProduct(this.props.tasks)}
            </Products>
        )
    }

    showProduct = tasks => {
        let result = null
        if(tasks.length > 0){
            result = tasks.map((task, index) => {
                return (
                    <Product name={task.name} index={index} status={task.status} key={index} onDelete={this.props.onDelete} id={task.id}/>
                )
            })
        }
        return result
    }

}

const mapStateToProps = state => {
    return {
        tasks : state.productReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: id => {
            dispatch(actDeleteTaskRequest(id))
        },
        actGetTasksRequest : () => {
            dispatch(actGetTasksRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)