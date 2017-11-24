import React, {Component} from 'react';

import './Nav.css';

import hongbao_img from "../static/images/hongbao.jpg";

export default class Nav extends Component {

    render() {

        var navItem = [
            {img:require('../static/images/1.jpg'),title:'美食'},
            {img:require('../static/images/2.jpg'),title:'下午茶'},
            {img:require('../static/images/3.jpg'),title:'商超便利'},
            {img:require('../static/images/4.jpg'),title:'果蔬生鲜'},
            {img:require('../static/images/5.jpg'),title:'新店特惠'},
            {img:require('../static/images/6.jpg'),title:'米粉面馆'},
            {img:require('../static/images/7.jpg'),title:'甜品饮品'},
            {img:require('../static/images/8.jpg'),title:'医药健康'},
        ];

        return(
            <div className = "mint-item">
                <div className="container">
                    {
                        navItem.map(function(item,index){
                            return (
                                <dl key={index}>
                                    <dt><img src={item.img}/></dt>
                                    <dd>{item.title}</dd>
                                </dl>
                            );
                        })
                    }

                </div>
                <img className="hongbao" src = {hongbao_img}/>
            </div>
            );
    }
}
