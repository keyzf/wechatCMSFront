/**
 * Created by wangjiang on 17/5/29.
 */

import React, { Component } from 'react';
import {Breadcrumb} from 'antd';
import { Link } from 'react-router-dom'


class User extends Component {

    componentWillMount(){
        //console.log(this.props.routes)
        console.log(this)
    }

    render() {
        return (
            <div>
                <Breadcrumb routes={ [
                      {
                        breadcrumbName:'dsds',
                        name:"Home",
                        path:"/user"
                      },
                      {
                         breadcrumbName:'dsds1',
                         path:"/h"
                      },
                      {
                         breadcrumbName:'dsds2',
                      },
                    ]} />
                this is user...
            </div>
        );
    }
}

export default User;
