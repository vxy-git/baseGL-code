## Stage 1: 结构调整（模板）
**Goal**: 使用语义化区块重写 About 模板为文档流结构，并集成全局 Header/Footer。
**Success Criteria**: 模板不依赖绝对定位；Header/Footer 正常显示；页面可渲染。
**Tests**: 访问 `/about`，查看结构区块是否按顺序展示。
**Status**: Complete

## Stage 2: 样式重构（布局）
**Goal**: 使用 flex/grid 构建布局，移除绝对定位样式，形成响应式栅格。
**Success Criteria**: 表单采用两列栅格（宽屏）、单列（窄屏）；主要区域不使用 `position: absolute` 布局。
**Tests**: 在宽屏与窄屏下检查表单布局与按钮宽度。
**Status**: Complete

## Stage 3: 资源与头图
**Goal**: 头图使用 `/about.jpg` 背景，文案可读性良好。
**Success Criteria**: 标题与邮箱文案显示正确，背景图覆盖容器。
**Tests**: 打开 `/about` 验证头图与文案显示。
**Status**: Complete

## Stage 4: 页脚整合
**Goal**: 使用全局 Footer 替代页面内自定义底部内容，减少重复。
**Success Criteria**: Footer 出现且不与页面内容重复；布局保持文档流。
**Tests**: Footer 样式与链接正常渲染。
**Status**: Complete

## Stage 5: 响应式与边距微调
**Goal**: 根据断点优化间距与卡片位置，完善在 768px/1024px 下的体验。
**Success Criteria**: 768px 下表单栅格变为单列；1024px 下卡片间距合理；无溢出。
**Tests**: 缩放浏览器宽度检查视觉与间距。
**Status**: In Progress