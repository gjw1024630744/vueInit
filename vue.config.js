module.exports = {
    devServer: {
        proxy: {     // 设置代理
            '/api':{
                target:'http://r.qzone.qq.com',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        },
    }
}
