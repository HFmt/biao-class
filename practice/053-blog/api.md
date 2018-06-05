
# 列出文章 
`/api/article/read`

## 请求参数

- 方法 : `get`
- 可为空，默认返回最近10条文章。


|键 | 值 | 说明 |
|- | :-: | -:|
|`page`|`integer`|第几页|
|`limit`|`integer`|	每页几条，≤30|
|`star`|`boolean`|优质文章|

### 响应成功:
`/api/article/read?limit=15`

```
json

{
    "ok": true,
    "data":{
        "title": 'Asam',
        "desc": '...',
        "content": 'ak47ak47ak47ak47ak47ak47ak47ak47ak47',
        "view_count": 4
    }
}
```
#### 响应失败:
`/api/article/read?limit=100`

```
json

{
    "ok": false,
    "message": 'Invalid limit'
    
}
```

- 列出标签 /api/tag/read

## 更新标签 
`api/tah/updata`

### 请求参数

- 方法 : `post`


|键 | 值 | 说明 | 可选 |
| :---| :---| :--- | :--- |
|`id`|`integer`	|更新哪一条	|否|
|`name`|`string	`|名称|是|
|`desc`|`text`	|描述|是|



#### 响应成功:

/api/tag/update?id=1&name=html&HTML决定了两性的长期关系

```
json
{
  "ok": true,
  "data": {
    "id": 1,
    "name": "html",
    "desc": "HTML决定了两性的长期关系",
  }
}
```

#### 响应失败:

`/api/tag/update?id=0`

```
json

{
    "ok": false,
    "message": 'Invalid limit'
}
```
