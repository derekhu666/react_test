import React, {Component} from 'react';
import './Header.css';

import search_img from "../static/images/search.jpg";

export default class Header extends Component {

    render() {
        var keywords = ["酸辣粉","汉堡王","沙拉","鲜芋仙","面","贡茶","汤","蛋糕","肯德基"];
        return (
            <div className = "header">
                <div className = "header-info">
                    <span>position</span>
                    <span>weather</span>
                </div>
                <a herf="#">
                    <div className = "content">
                        <span><img src={search_img}/>搜索商家、商品名称</span>
                    </div>
                </a>
                <div className = "header-keywords">
                    <ul>
                        {
                            keywords.map(function(item,index){
                                return <li key={index}>{item}</li>;
                            })
                        }
                    </ul>      
                </div>
            </div>
     );
    }
}