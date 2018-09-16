import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Product extends Component {
    render() {

        let { index, name, status, id } = this.props

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td className="text-white"><span className={status ? 'badge badge-success' : 'badge badge-danger'}>{status ? 'kích hoạt' : 'ẩn'}</span></td>
                <td>
                    <Link className='btn btn-warning text-white mr-2' to={`/edit/${id}`}><i className="far fa-edit"></i> Sửa</Link>
                    <span className='btn btn-danger' onClick={() => this.props.onDelete(id)}><i className="far fa-times-circle"></i> Xóa</span>
                </td>
            </tr>
        );
    }
}

export default Product;