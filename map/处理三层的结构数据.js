let a = [
  {
    "resourceId": 1,
    "resourceName": "系统管理",
    "children": [
      {
        "resourceId": 11,
        "resourceName": "用户管理",
        "children": [
          {
            "resourceId": 111,
            "resourceName": "用户列表",
            "children": []
          },
          {
            "resourceId": 112,
            "resourceName": "添加用户",
            "children": []
          },
          {
            "resourceId": 113,
            "resourceName": "编辑用户",
            "children": []
          },
          {
            "resourceId": 114,
            "resourceName": "用户详情",
            "children": []
          },
          {
            "resourceId": 115,
            "resourceName": "删除用户",
            "children": []
          }
        ]
      },
      {
        "resourceId": 14,
        "resourceName": "日志管理",
        "children": [
          {
            "resourceId": 141,
            "resourceName": "日志列表",
            "children": []
          }
        ]
      }
    ]
  }
]

let c = {
  "id": 0,
  "type": 1,
  "code": "root",
  "name": "超级管理员",
  "resources": null,
  "description": "系统基本角色，请勿修改！"
}
// 将a和c合并变成b，a的结构大改变成如"__children"：
let b = {
  "id": 23,
  "type": 2,
  "code": "general",
  "name": "王乾元普通人员1",
  "resources": null,
  "description": "王乾元普通人员1",
  "__children": [
    {
      "resourceId": 1,
      "resourceName": "系统管理",
      "children_resourceId": 11,
      "children_resourceName": "用户管理",
      "children_children": [
        {
          "resourceId": 111,
          "resourceName": "用户列表",
          "children": []
        },
        {
          "resourceId": 112,
          "resourceName": "添加用户",
          "children": []
        },
        {
          "resourceId": 113,
          "resourceName": "编辑用户",
          "children": []
        },
        {
          "resourceId": 114,
          "resourceName": "用户详情",
          "children": []
        },
        {
          "resourceId": 115,
          "resourceName": "删除用户",
          "children": []
        }
      ],
      "rowSpan": 2
    },
    {
      "resourceId": 1,
      "resourceName": "系统管理",
      "children_resourceId": 14,
      "children_resourceName": "日志管理",
      "children_children": [
        {
          "resourceId": 141,
          "resourceName": "日志列表",
          "children": []
        }
      ],
      "rowSpan": 0
    }
  ]
}
function handleData () {
  let arr = []
  a.map(ele => {
    const { resourceId, resourceName, children = [] } = ele
    let rowSpan = children.length
    children.map((eles, index) => {
      const item = {
        resourceId,
        resourceName,
        children_resourceId: eles.resourceId,
        children_resourceName: eles.resourceName,
        children_children: eles.children || {},
        rowSpan: 0
      }
      if (index === 0) {
        item.rowSpan = rowSpan
      }
      arr.push(item)
    })
  })
  return arr
}
c.__children = handleData()
console.group(c);

