import React, { Component } from 'react'
import {connect} from 'react-redux'
import {    actAddTaskRequest, actUpdateTaskRequest} from '../actions/index'

class ProductEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            status: false
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params
        let {tasks} = this.props
        for (let i = 0; i < tasks.length; i++) {
            if(id === tasks[i].id){
                this.setState({
                    name: tasks[i].name,
                    status: tasks[i].status
                })
                break
            }
            
        }
    }

    render() {
        return (
            <div className="container col-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái:</label>
                        <select className="form-control" name='status' value={this.state.status}  onChange={this.onChange} >
                            <option value='true'>Kích hoạt</option>
                            <option value='false'>Ẩn</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning text-white mr-2">Lưu Lại</button>
                    <button type="button" className="btn btn-danger" onClick={()=> this.props.history.goBack()}>Hủy bỏ</button>
                </form>
            </div>
        )
    }

    onSubmit = (e) => {
        e.preventDefault()
        let {id} = this.props.match.params
        let {name, status} = this.state
        let task = {
            id : id ? id : Number(this.props.tasks[this.props.tasks.length - 1].id) + 1 ,
            name : name,
            status : status
        }
        if(id){
            this.props.actUpdateTaskRequest(task)
            this.props.history.goBack()
        }else if(name !== ''){
            this.props.actAddTask(task)
            this.props.history.goBack()
        }
    }

    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        if(value === 'true'){
             value = true
        }else if(value === 'false'){
             value = false
        }
        this.setState({
            [name] : value
        })
    }   
}

const mapStateToProps = state => {
    return {
        tasks: state.productReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddTask: task => {
            dispatch(actAddTaskRequest(task))
        },
        actUpdateTaskRequest: task => {
            dispatch(actUpdateTaskRequest(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)