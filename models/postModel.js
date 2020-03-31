//帖子模型

//引入已经连接到 MongoDB 的mongoose
const mongoose = require('../config/db');

//定义Schema
const postSchema = new mongoose.Schema({
    //title: String 
    /**
     * 帖子标题
     * type: String      类型
     * required: true    必填项
     */
    title: { type: String, required: true },
    /**
     * 帖子内容
     */
    content: { type: String, required: true },
},
{
    //提么stamp：true ，多多出两个字段  createdAt  updatedAt
    timestamps: true,
});

//创建模型
const postModel = mongoose.model('post',postSchema);

//暴露模型
module.exports = postModel;