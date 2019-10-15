import React, { Component } from 'react'
import Axios from 'axios';
export default class Request extends Component {
    constructor(){//对象的构造方法
        super();
        this.state = {//状态
            data:[]//空
        }
    }
    componentDidMount(){
        fetch('https://api.apiopen.top/musicRankingsDetails?type=1',{method:'post',body:'{name:111}'}).then((res)=>{
            return res.json();
        })
        .then((res)=>{
            this.setState({//重新设置状态
                data:res.result
            })
            console.log(res);
        })
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        //     .then((res)=>{
        //         console.log(res);
        //         this.setState({
        //             data: res.data.result
        //         })
        //     })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index)=>(
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}