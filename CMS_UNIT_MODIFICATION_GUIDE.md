# Product Unit 组件 CMS 对接修改指南

## 修改模式

所有 Unit 组件都使用相同的修改模式：

### 步骤 1: 添加导入

在 script setup 开头添加：
```javascript
import { computed } from 'vue';
```

### 步骤 2: 添加 props 定义

在导入语句后添加：
```javascript
// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});
```

### 步骤 3: 添加 unitData computed

在 props 定义后添加：
```javascript
// 合并 CMS 数据和本地数据
const unitData = computed(() => {
  if (props.data) {
    return { ...localStaticData, ...props.data };
  }
  return localStaticData;
});
```

### 步骤 4: 修改模板

将所有 `localStaticData` 替换为 `unitData`

**示例**：
```vue
<!-- 修改前 -->
<h1>{{ product1Unit4Data.title }}</h1>
<img :src="product1Unit4Data.image" />

<!-- 修改后 -->
<h1>{{ unitData.title }}</h1>
<img :src="unitData.image" />
```

---

## Product1 各组件的本地数据变量名

| 组件 | 本地数据变量 |
|------|------------|
| Unit1 | `product1Unit1Data` |
| Unit2 | `product1Unit2Data` |
| Unit3 | `product1Unit3Data` |
| Unit4 | `product1Unit4Data` |
| Unit5 | `product1Unit5Data` |
| Unit6 | `product1Unit6Data` |
| Unit7 | `product1Unit7Data` |
| Unit8 | `product1Unit8Data` |
| Unit9 | `product1Unit9Data` |

## Product3 各组件的本地数据变量名

| 组件 | 本地数据变量 |
|------|------------|
| Unit1 | `product3Unit1Data` |
| Unit2 | `product3Unit2Data` |
| ... | ... |

## Product4 各组件的本地数据变量名

| 组件 | 本地数据变量 |
|------|------------|
| Unit1 | `product4Unit1Data` |
| Unit2 | `product4Unit2Data` |
| ... | ... |

---

## 快速查找替换命令

### VS Code 正则表达式替换

**查找**：
```regex
(import.*from.*product\d+Unit\d+.*)
```

**替换**（在导入行前添加）：
```javascript
import { computed } from 'vue';
$1
```

**查找**（所有本地数据引用）：
```regex
(product\d+Unit\d+Data)
```

**替换为**：
```javascript
unitData
```

---

## 验证清单

每个组件修改后，确认：
- [ ] 无编译错误
- [ ] 模板正确使用 unitData
- [ ] 数据合并逻辑正确
- [ ] 组件渲染正常
