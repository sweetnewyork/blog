import React from 'react'
import FontAwesome from 'react-fontawesome'

import './scss/common.scss'

const Footer = () => (
    <footer>
        <nav className="clear-fix">
            <dl>
                <dt>follow me</dt>
                <dd><FontAwesome name="weibo"/>&nbsp;&nbsp;<a href="http://weibo.com/itsweet">weibo</a></dd>
                <dd><FontAwesome name="weixin"/>&nbsp;&nbsp;<a href="javascript:void(0)">wechat</a></dd>
            </dl>
            <dl>
                <dt>friendly link</dt>
                <dd><a href="https://www.youzan.com/">youzan</a></dd>
                <dd><a href="http://wowubuntu.com/markdown/index.html">markdown</a></dd>
            </dl>
            <dl>
                <dt>contact me</dt>
                <dd><FontAwesome name="envelope-o"/>&nbsp;<a href="javascript:void(0)">shaytang@163.com</a></dd>
                <dd><FontAwesome name="phone"/>&nbsp;<a href="javascript:void(0)">15751837585</a></dd>
            </dl>
        </nav>
    </footer>
)

export default Footer