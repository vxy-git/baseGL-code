# getCmsNavPublicList API 对接说明

## 1. 接口概述

### 基本信息

- **接口名称**：获取网站导航公开列表
- **接口路径**：`/{routerPrefix}/cmsnav/getCmsNavPublicList`
- **请求方法**：`GET`
- **访问权限**：公开访问（无需 JWT 认证）
- **Content-Type**：`application/json`

### 功能描述

该接口用于分页获取网站导航列表，支持多种条件筛选和排序。这是一个公开接口，专门为前端网站提供导航数据，不需要用户登录认证。

### 路由配置位置

文件路径：`server/plugin/custom/router/cms_nav_logic.go:28`

```go
group.GET("getCmsNavPublicList", apiCmsNav.GetCmsNavList)
```

### 实现函数

- **API 层**：`server/plugin/custom/api/cms_nav_logic.go` 中的 `GetCmsNavList` 方法
- **Service 层**：`server/plugin/custom/service/cms_nav_logic.go` 中的 `GetCmsNavInfoList` 方法

---

## 2. 请求参数详解

所有参数均为可选的查询参数（Query Parameters），通过 URL 传递。

### 2.1 分页参数

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| page | int | 否 | 1 | 当前页码（从 1 开始） |
| pageSize | int | 否 | 10 | 每页显示数量 |

### 2.2 筛选参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| status | string | 否 | 启用状态：`'启用'` 或 `'禁用'` |
| navName | string | 否 | 导航名称（精确匹配） |
| navUrl | string | 否 | 导航链接 URL（精确匹配） |
| parentId | int | 否 | 父级导航 ID（0 表示顶级导航） |
| sort | int | 否 | 排序值（精确匹配） |
| icon | string | 否 | 图标类名 |
| target | string | 否 | 打开方式：`'_self'`（当前窗口）或 `'_blank'`（新窗口） |
| headerShow | boolean | 否 | 是否在 Header 显示（true/false） |
| footerShow | boolean | 否 | 是否在 Footer 显示（true/false） |
| pageType | string | 否 | 页面类型：`'home'`, `'contactus'`, `'technology'`, `'universe_series'`, `'unicorn_series'`, `'unit_pro'`, `'dukes'`, `'list'` |
| createdAtRange | array | 否 | 创建时间范围，格式：`[起始时间, 结束时间]` |

### 2.3 排序参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| order | string | 否 | 排序字段，支持：`ID`, `CreatedAt`, `sort` |

---

## 3. 响应数据结构

### 3.1 成功响应

**HTTP Status Code**: `200 OK`

```json
{
  "code": 0,
  "data": {
    "list": [
      {
        "ID": 1,
        "CreatedAt": "2025-01-05T10:30:00+08:00",
        "UpdatedAt": "2025-01-05T10:30:00+08:00",
        "status": "启用",
        "navName": "首页",
        "navUrl": "/",
        "parentId": 0,
        "sort": 1,
        "icon": "home",
        "target": "_self",
        "headerShow": true,
        "footerShow": true,
        "pageType": "home",
        "moduleList": null
      },
      {
        "ID": 2,
        "CreatedAt": "2025-01-05T10:31:00+08:00",
        "UpdatedAt": "2025-01-05T10:31:00+08:00",
        "status": "启用",
        "navName": "关于我们",
        "navUrl": "/about",
        "parentId": 0,
        "sort": 2,
        "icon": "info",
        "target": "_self",
        "headerShow": true,
        "footerShow": false,
        "pageType": "home",
        "moduleList": null
      }
    ],
    "total": 2,
    "page": 1,
    "pageSize": 10
  },
  "msg": "获取成功"
}
```

### 3.2 字段说明

#### 响应顶层字段

| 字段 | 类型 | 说明 |
|------|------|------|
| code | int | 响应状态码，0 表示成功 |
| data | object | 响应数据 |
| msg | string | 响应消息 |

#### data 对象字段

| 字段 | 类型 | 说明 |
|------|------|------|
| list | array | 导航数据列表 |
| total | int64 | 总记录数 |
| page | int | 当前页码 |
| pageSize | int | 每页大小 |

#### 导航对象字段（list 数组元素）

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | uint | 导航 ID（主键） |
| CreatedAt | datetime | 创建时间 |
| UpdatedAt | datetime | 更新时间 |
| status | string | 启用状态：`'启用'` 或 `'禁用'` |
| navName | string | 导航名称（可能为 null） |
| navUrl | string | 导航链接 URL（可能为 null） |
| parentId | int | 父级导航 ID（可能为 null，0 表示顶级） |
| sort | int | 排序值（可能为 null） |
| icon | string | 图标类名（可能为 null） |
| target | string | 打开方式：`'_self'` 或 `'_blank'` |
| headerShow | boolean | 是否在 Header 显示（可能为 null） |
| footerShow | boolean | 是否在 Footer 显示（可能为 null） |
| pageType | string | 页面类型枚举值 |
| moduleList | json | 页面模块配置（JSON 格式） |

### 3.3 失败响应

**HTTP Status Code**: `200 OK` （业务层面的错误）

#### 参数绑定错误

```json
{
  "code": 7,
  "data": {},
  "msg": "参数类型错误"
}
```

#### 数据库查询错误

```json
{
  "code": 7,
  "data": {},
  "msg": "获取失败: record not found"
}
```

#### 响应字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| code | int | 错误码，7 表示错误 |
| data | object | 空对象 |
| msg | string | 错误详情信息 |

---

## 4. 调用示例代码

### 4.1 cURL 示例

#### 基础查询（获取第一页数据）

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?page=1&pageSize=10"
```

#### 按状态筛选（只获取启用的导航）

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?status=启用&page=1&pageSize=10"
```

#### 按显示位置筛选（获取 Header 显示的导航）

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?headerShow=true&page=1&pageSize=10"
```

#### 按页面类型筛选（获取首页的导航）

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?pageType=home&page=1&pageSize=10"
```

#### 复杂筛选（首页 + 启用 + Header 显示 + 排序）

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?pageType=home&status=启用&headerShow=true&order=sort&page=1&pageSize=10"
```

#### 只获取顶级导航

```bash
curl -X GET "http://your-domain.com/api/cmsnav/getCmsNavPublicList?parentId=0&page=1&pageSize=10"
```

### 4.2 JavaScript/Fetch API 示例

```javascript
// 基础查询
async function getCmsNavList(page = 1, pageSize = 10) {
  try {
    const response = await fetch(
      `http://your-domain.com/api/cmsnav/getCmsNavPublicList?page=${page}&pageSize=${pageSize}`
    );
    const data = await response.json();

    if (data.code === 0) {
      console.log('导航列表：', data.data.list);
      console.log('总记录数：', data.data.total);
      return data.data;
    } else {
      console.error('获取失败：', data.msg);
      return null;
    }
  } catch (error) {
    console.error('请求异常：', error);
    return null;
  }
}

// 按条件筛选
async function getCmsNavByPageType(pageType) {
  const params = new URLSearchParams({
    pageType: pageType,
    status: '启用',
    headerShow: true,
    page: 1,
    pageSize: 100
  });

  const response = await fetch(
    `http://your-domain.com/api/cmsnav/getCmsNavPublicList?${params}`
  );
  const data = await response.json();
  return data.code === 0 ? data.data.list : [];
}

// 完整示例：获取首页顶部导航并渲染
async function loadHeaderNav() {
  const response = await fetch(
    'http://your-domain.com/api/cmsnav/getCmsNavPublicList?' +
    new URLSearchParams({
      pageType: 'home',
      status: '启用',
      headerShow: true,
      order: 'sort',
      page: 1,
      pageSize: 50
    })
  );

  const result = await response.json();

  if (result.code === 0) {
    const navList = result.data.list;
    const headerNav = document.getElementById('header-nav');

    // 构建导航树（只显示顶级导航）
    const topNavs = navList.filter(nav => !nav.parentId || nav.parentId === 0);

    topNavs.forEach(nav => {
      const link = document.createElement('a');
      link.href = nav.navUrl || '#';
      link.textContent = nav.navName || '';
      link.target = nav.target || '_self';
      headerNav.appendChild(link);
    });
  } else {
    console.error('加载导航失败：', result.msg);
  }
}

// 使用示例
loadHeaderNav();
```

### 4.3 Go 语言示例

```go
package main

import (
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "net/url"
)

// 响应结构体
type CmsNavResponse struct {
    Code int    `json:"code"`
    Data struct {
        List  []CmsNav `json:"list"`
        Total int64    `json:"total"`
        Page  int      `json:"page"`
        PageSize int   `json:"pageSize"`
    } `json:"data"`
    Msg string `json:"msg"`
}

type CmsNav struct {
    ID         uint       `json:"ID"`
    CreatedAt  time.Time  `json:"CreatedAt"`
    UpdatedAt  time.Time  `json:"UpdatedAt"`
    Status     string     `json:"status"`
    NavName    *string    `json:"navName"`
    NavUrl     *string    `json:"navUrl"`
    ParentId   *int       `json:"parentId"`
    Sort       *int       `json:"sort"`
    Icon       *string    `json:"icon"`
    Target     string     `json:"target"`
    HeaderShow *bool      `json:"headerShow"`
    FooterShow *bool      `json:"footerShow"`
    PageType   string     `json:"pageType"`
    ModuleList json.RawMessage `json:"moduleList"`
}

// 获取导航列表
func GetCmsNavList(baseUrl string, params map[string]string) (*CmsNavResponse, error) {
    // 构建 URL
    u, err := url.Parse(baseUrl + "/api/cmsnav/getCmsNavPublicList")
    if err != nil {
        return nil, err
    }

    // 添加查询参数
    q := u.Query()
    for key, value := range params {
        q.Set(key, value)
    }
    u.RawQuery = q.Encode()

    // 发送请求
    resp, err := http.Get(u.String())
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    // 读取响应
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return nil, err
    }

    // 解析 JSON
    var result CmsNavResponse
    err = json.Unmarshal(body, &result)
    if err != nil {
        return nil, err
    }

    return &result, nil
}

func main() {
    // 示例：获取首页启用的导航
    params := map[string]string{
        "pageType":   "home",
        "status":     "启用",
        "headerShow": "true",
        "page":       "1",
        "pageSize":   "10",
    }

    result, err := GetCmsNavList("http://your-domain.com", params)
    if err != nil {
        fmt.Printf("请求失败: %v\n", err)
        return
    }

    if result.Code == 0 {
        fmt.Printf("总记录数: %d\n", result.Data.Total)
        for _, nav := range result.Data.List {
            fmt.Printf("ID: %d, 名称: %s, URL: %s\n",
                nav.ID,
                stringValue(nav.NavName),
                stringValue(nav.NavUrl))
        }
    } else {
        fmt.Printf("获取失败: %s\n", result.Msg)
    }
}

func stringValue(s *string) string {
    if s == nil {
        return ""
    }
    return *s
}
```

### 4.4 Axios 示例（Vue/React）

```javascript
import axios from 'axios';

// API 基础配置
const api = axios.create({
  baseURL: 'http://your-domain.com/api',
  timeout: 10000
});

// 获取导航列表
export async function getCmsNavList(params = {}) {
  const defaultParams = {
    page: 1,
    pageSize: 10,
    status: '启用'
  };

  try {
    const response = await api.get('/cmsnav/getCmsNavPublicList', {
      params: { ...defaultParams, ...params }
    });

    if (response.data.code === 0) {
      return {
        success: true,
        data: response.data.data.list,
        total: response.data.data.total,
        page: response.data.data.page
      };
    } else {
      return {
        success: false,
        message: response.data.msg
      };
    }
  } catch (error) {
    console.error('请求异常：', error);
    return {
      success: false,
      message: error.message
    };
  }
}

// Vue 组件中使用
export default {
  data() {
    return {
      navList: [],
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const result = await getCmsNavList({
      pageType: 'home',
      headerShow: true,
      order: 'sort'
    });

    if (result.success) {
      this.navList = result.data;
    } else {
      this.$message.error(result.message);
    }
    this.loading = false;
  }
};
```

---

## 5. 数据库表结构

### 5.1 表信息

- **表名**：`cms_nav`
- **说明**：网站导航配置表
- **引擎**：InnoDB
- **字符集**：utf8mb4

### 5.2 字段定义

| 字段名 | 类型 | 长度 | 允许 NULL | 默认值 | 键 | 说明 |
|--------|------|------|-----------|--------|-----|------|
| id | INT | 11 | NO | | PRI | 主键 ID |
| created_at | DATETIME | | NO | CURRENT_TIMESTAMP | | 创建时间 |
| updated_at | DATETIME | | NO | CURRENT_TIMESTAMP | | 更新时间 |
| deleted_at | DATETIME | | YES | | MUL | 删除时间（软删除） |
| status | ENUM | | NO | | | 启用状态：'启用', '禁用' |
| nav_name | VARCHAR | 255 | YES | | | 导航名称 |
| nav_url | VARCHAR | 500 | YES | | | 导航链接 URL |
| parent_id | INT | 11 | YES | | | 父级导航 ID（0 表示顶级） |
| sort | INT | 5 | YES | | | 排序值（数字越小越靠前） |
| icon | VARCHAR | 100 | YES | | | 图标类名 |
| target | ENUM | | NO | | | 打开方式：'_self', '_blank' |
| header_show | TINYINT | 1 | YES | | | 是否在 Header 显示（1=是，0=否） |
| footer_show | TINYINT | 1 | YES | | | 是否在 Footer 显示（1=是，0=否） |
| page_type | ENUM | | NO | | | 页面类型枚举 |
| module_list | JSON | | YES | | | 页面模块配置（JSON 格式） |

### 5.3 枚举类型说明

#### status 字段
- `'启用'` - 启用状态
- `'禁用'` - 禁用状态

#### target 字段
- `'_self'` - 在当前窗口打开
- `'_blank'` - 在新窗口打开

#### page_type 字段
- `'home'` - 首页
- `'contactus'` - 联系我们
- `'technology'` - 技术页面
- `'universe_series'` - 宇宙系列产品页
- `'unicorn_series'` - 独角兽系列产品页
- `'unit_pro'` - Unit Pro 产品页
- `'dukes'` - Dukes 产品页
- `'list'` - 列表页

### 5.4 索引

| 索引名 | 类型 | 字段 | 说明 |
|--------|------|------|------|
| PRIMARY | PRIMARY KEY | id | 主键索引 |
| idx_deleted_at | INDEX | deleted_at | 软删除索引 |

### 5.5 示例 SQL

```sql
-- 创建表
CREATE TABLE `cms_nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `status` enum('启用','禁用') NOT NULL,
  `nav_name` varchar(255) DEFAULT NULL,
  `nav_url` varchar(500) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `sort` int(5) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `target` enum('_self','_blank') NOT NULL,
  `header_show` tinyint(1) DEFAULT NULL,
  `footer_show` tinyint(1) DEFAULT NULL,
  `page_type` enum('home','contactus','technology','universe_series','unicorn_series','unit_pro','dukes','list') NOT NULL,
  `module_list` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 插入示例数据
INSERT INTO `cms_nav` (`status`, `nav_name`, `nav_url`, `parent_id`, `sort`, `icon`, `target`, `header_show`, `footer_show`, `page_type`)
VALUES
('启用', '首页', '/', 0, 1, 'home', '_self', 1, 1, 'home'),
('启用', '产品中心', '/products', 0, 2, 'product', '_self', 1, 0, 'home'),
('启用', '关于我们', '/about', 0, 3, 'info', '_self', 1, 1, 'home');
```

---

## 6. 业务逻辑说明

### 6.1 数据查询流程

```
1. 接收请求参数
   ↓
2. 参数验证和绑定（ShouldBindQuery）
   ↓
3. 构建数据库查询条件
   ↓
4. 执行 COUNT 查询获取总数
   ↓
5. 应用分页和排序
   ↓
6. 执行分页查询获取数据
   ↓
7. 返回分页结果
```

### 6.2 支持的筛选条件

接口支持以下筛选条件的任意组合：

1. **时间范围筛选**：`createdAtRange` - 查询指定时间范围内创建的记录
2. **状态筛选**：`status` - 只返回指定状态的导航（启用/禁用）
3. **名称筛选**：`navName` - 精确匹配导航名称
4. **URL 筛选**：`navUrl` - 精确匹配导航 URL
5. **父级筛选**：`parentId` - 查询指定父级下的子导航
6. **排序值筛选**：`sort` - 精确匹配排序值
7. **图标筛选**：`icon` - 精确匹配图标类名
8. **打开方式筛选**：`target` - 筛选在新窗口或当前窗口打开的导航
9. **显示位置筛选**：
   - `headerShow` - 筛选是否在 Header 显示
   - `footerShow` - 筛选是否在 Footer 显示
10. **页面类型筛选**：`pageType` - 筛选指定页面类型的导航

### 6.3 排序和分页机制

#### 分页机制

- **offset 计算**：`offset = pageSize * (page - 1)`
- **limit 限制**：`limit = pageSize`
- **返回总记录数**：先执行 COUNT 查询，再执行数据查询

#### 排序支持

允许的排序字段（通过白名单控制）：
- `ID` - 按 ID 排序
- `CreatedAt` - 按创建时间排序
- `sort` - 按自定义排序值排序

**排序安全机制**：
```go
orderMap := make(map[string]bool)
orderMap["ID"] = true
orderMap["CreatedAt"] = true
orderMap["sort"] = true
```

### 6.4 软删除机制

- 表使用 GORM 的软删除功能（`deleted_at` 字段）
- 查询时自动过滤已删除的记录
- 数据不会真正从数据库中删除，只是标记删除时间

---

## 7. 错误码和异常处理

### 7.1 错误码定义

| 错误码 | 说明 | HTTP 状态码 |
|--------|------|-------------|
| 0 | 成功 | 200 |
| 7 | 失败（通用错误） | 200 |

### 7.2 常见错误场景

#### 7.2.1 参数类型错误

**场景**：传入的参数类型不正确

**请求示例**：
```
GET /api/cmsnav/getCmsNavPublicList?page=abc
```

**响应**：
```json
{
  "code": 7,
  "data": {},
  "msg": "参数类型错误"
}
```

#### 7.2.2 数据库连接错误

**场景**：数据库连接失败或查询超时

**响应**：
```json
{
  "code": 7,
  "data": {},
  "msg": "获取失败: dial tcp 127.0.0.1:3306: connect: connection refused"
}
```

#### 7.2.3 表不存在

**场景**：数据库表未创建或被删除

**响应**：
```json
{
  "code": 7,
  "data": {},
  "msg": "获取失败: Table 'database.cms_nav' doesn't exist"
}
```

### 7.3 异常处理机制

#### API 层异常处理

```go
// 参数绑定异常
err := c.ShouldBindQuery(&pageInfo)
if err != nil {
    response.FailWithMessage(err.Error(), c)
    return
}

// 数据库查询异常
list, total, err := serviceCmsNav.GetCmsNavInfoList(ctx, pageInfo)
if err != nil {
    global.GVA_LOG.Error("获取失败!", zap.Error(err))
    response.FailWithMessage("获取失败:" + err.Error(), c)
    return
}
```

#### Service 层异常处理

```go
// 查询异常会返回错误，由 API 层统一处理
err = db.Count(&total).Error
if err != nil {
    return
}

err = db.Find(&cmsnavs).Error
return cmsnavs, total, err
```

---

## 8. 注意事项

### 8.1 接口调用建议

#### 1. 缓存策略

由于导航数据变更频率较低，建议前端实现缓存机制：

```javascript
// 使用 localStorage 缓存导航数据（1小时）
const CACHE_KEY = 'cms_nav_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1小时

async function getCmsNavWithCache() {
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  }

  const result = await getCmsNavList();

  if (result.success) {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: result.data,
      timestamp: Date.now()
    }));
  }

  return result;
}
```

#### 2. 分页建议

- **首页导航**：建议一次性获取所有数据（`pageSize=100`），因为数据量通常不大
- **分页加载**：如果导航数据超过 100 条，建议使用分页加载

#### 3. 筛选优化

- 使用精确筛选（如 `status=启用`）减少数据传输量
- 根据显示位置筛选（`headerShow=true` 或 `footerShow=true`）获取特定区域的导航

#### 4. 排序建议

- 前端导航通常按照 `sort` 字段排序：`order=sort`
- 可以在请求中指定排序：`/getCmsNavPublicList?order=sort&page=1&pageSize=10`

### 8.2 性能优化建议

#### 1. 数据库索引优化

建议为常用查询字段添加索引：

```sql
-- 为常用筛选字段添加索引
CREATE INDEX idx_status ON cms_nav(status);
CREATE INDEX idx_page_type ON cms_nav(page_type);
CREATE INDEX idx_parent_id ON cms_nav(parent_id);
CREATE INDEX idx_header_show ON cms_nav(header_show);
CREATE INDEX idx_footer_show ON cms_nav(footer_show);

-- 组合索引（如果经常同时查询这些字段）
CREATE INDEX idx_status_page_type ON cms_nav(status, page_type);
```

#### 2. 查询优化

- 避免使用 `SELECT *`，只查询需要的字段
- 使用 `limit` 限制返回数量
- 合理使用分页，避免一次查询过多数据

#### 3. 缓存策略

- **服务端缓存**：使用 Redis 缓存导航数据（TTL: 5-10分钟）
- **CDN 缓存**：对公开接口可以使用 CDN 缓存
- **浏览器缓存**：设置合理的 HTTP 缓存头

### 8.3 安全建议

#### 1. 输入验证

虽然接口是公开的，但仍需注意：
- 前端应对用户输入进行验证
- 避免传入特殊字符导致 SQL 注入（虽然 GORM 已经做了防护）

#### 2. 访问频率限制

建议添加访问频率限制（Rate Limiting）防止滥用：

```go
// 示例：使用 Gin 的限流中间件
import "github.com/JGLTechnologies/gin-rate-limit"

func main() {
    // 配置限流：每分钟最多 100 次请求
    limiter := ginrate_limit.NewRateLimiter(
        time.Minute,
        100,
        func(ctx *gin.Context) ginrate_limit.IdentifierFunc {
            return ctx.ClientIP()
        },
    )

    router.Use(limiter)
}
```

#### 3. 数据脱敏

- 如果包含敏感信息，应在返回前进行脱敏处理
- 当前接口返回的是公开导航数据，通常不涉及敏感信息

### 8.4 版本兼容性

#### API 版本控制

建议为 API 添加版本控制，方便后续升级：

```
当前版本：v1
API 路径：/api/v1/cmsnav/getCmsNavPublicList

未来升级：
- v2 版本：/api/v2/cmsnav/getCmsNavPublicList
- 保持 v1 版本兼容，避免影响现有调用
```

#### 字段变更注意事项

如果需要修改响应结构：
1. 新增字段：向后兼容，不影响现有调用
2. 删除字段：应先标记为 deprecated，在下个大版本中移除
3. 修改字段类型：需要确保新旧格式都能兼容

### 8.5 测试建议

#### 测试用例

```javascript
// 测试用例示例
describe('getCmsNavPublicList API', () => {
  it('应返回成功状态和数据列表', async () => {
    const result = await getCmsNavList();
    expect(result.success).toBe(true);
    expect(result.data).toBeInstanceOf(Array);
  });

  it('应支持按状态筛选', async () => {
    const result = await getCmsNavList({ status: '启用' });
    result.data.forEach(nav => {
      expect(nav.status).toBe('启用');
    });
  });

  it('应支持分页', async () => {
    const page1 = await getCmsNavList({ page: 1, pageSize: 5 });
    const page2 = await getCmsNavList({ page: 2, pageSize: 5 });
    expect(page1.data).not.toEqual(page2.data);
  });

  it('应返回正确的总数', async () => {
    const result = await getCmsNavList({ pageSize: 10 });
    expect(result.total).toBeGreaterThanOrEqual(result.data.length);
  });
});
```

### 8.6 故障排查

#### 常见问题及解决方案

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 接口返回 404 | 路由配置错误 | 检查 `routerPrefix` 配置和路由路径 |
| 接口返回空数组 | 数据库无数据或筛选条件太严格 | 检查数据库数据和筛选条件 |
| 响应很慢 | 数据库查询慢或缺少索引 | 检查查询性能，添加索引 |
| 参数报错 | 参数类型或格式错误 | 检查参数类型和格式是否符合要求 |

---

## 9. 附录

### 9.1 相关文件列表

| 文件路径 | 说明 |
|---------|------|
| `server/plugin/custom/router/cms_nav_logic.go` | 路由配置 |
| `server/plugin/custom/api/cms_nav_logic.go` | API 层实现 |
| `server/plugin/custom/service/cms_nav_logic.go` | Service 层实现 |
| `server/plugin/custom/model/cms_nav_logic.go` | 数据模型定义 |
| `server/plugin/custom/model/request/cms_nav_logic.go` | 请求参数模型 |

### 9.2 代码位置索引

- **路由注册**：`server/plugin/custom/router/cms_nav_logic.go:28`
- **API 实现**：`server/plugin/custom/api/cms_nav_logic.go:149-171`
- **Service 实现**：`server/plugin/custom/service/cms_nav_logic.go:50-107`
- **模型定义**：`server/plugin/custom/model/cms_nav_logic.go:10-29`
- **请求参数**：`server/plugin/custom/model/request/cms_nav_logic.go:10-23`

### 9.3 技术栈

- **Web 框架**：Gin (github.com/gin-gonic/gin)
- **ORM 框架**：GORM (gorm.io/gorm)
- **数据库**：MySQL 5.7+
- **日志框架**：Zap (go.uber.org/zap)
- **JSON 处理**：GORM Datatypes (gorm.io/datatypes)

### 9.4 更新历史

| 日期 | 版本 | 更新内容 |
|------|------|---------|
| 2025-01-05 | v1.0 | 初始版本，创建接口文档 |
| - | - | 最近修改：从 `GetCmsNavPublic` 改为复用 `GetCmsNavList` 函数 |

---

## 10. 联系方式

如有疑问或需要技术支持，请联系：

- **开发团队**：Custom Plugin Team
- **项目仓库**：[GitHub 仓库地址]
- **Issue 跟踪**：[Issue Tracker 链接]

---

**文档版本**：v1.0
**最后更新**：2025-01-05
**文档状态**：正式发布
