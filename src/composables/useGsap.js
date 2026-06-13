import { onMounted, onUnmounted, getCurrentInstance } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { logger } from '@/utils/logger'

// 注册 GSAP 插件（全局只需要注册一次）
gsap.registerPlugin(ScrollTrigger)

/**
 * GSAP 动画组合式函数
 * 必须在组件的 setup 作用域中调用
 * @param {Object} options 动画配置
 * @returns {Object} GSAP 实例和方法
 */
export function useGsap(options = {}) {
  let ctx

  onMounted(() => {
    // 创建 GSAP 上下文，便于统一管理和清理
    ctx = gsap.context(() => {
      // 在这里执行动画
      if (options.onInit) {
        options.onInit(gsap, ScrollTrigger)
      }
    })
  })

  onUnmounted(() => {
    // 清理动画，防止内存泄漏
    if (ctx) ctx.revert()
  })

  return {
    gsap,
    ScrollTrigger,
  }
}

/**
 * 滚动触发动画
 * 必须在组件的 setup 作用域中调用
 * @param {String|Element} trigger 触发元素
 * @param {Object} animationProps 动画属性
 * @param {Object} scrollTriggerProps ScrollTrigger 配置
 */
export function useScrollAnimation(trigger, animationProps, scrollTriggerProps = {}) {
  // 确保在 Vue 组件上下文中调用
  if (!getCurrentInstance()) {
    logger.warn('[useScrollAnimation] 必须在组件的 setup() 中调用')
    return
  }

  let animation

  onMounted(() => {
    animation = gsap.to(trigger, {
      ...animationProps,
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTriggerProps,
      },
    })
  })

  onUnmounted(() => {
    if (animation) {
      animation.kill()
      animation.scrollTrigger?.kill()
    }
  })
}

/**
 * 视差滚动效果
 * 必须在组件的 setup 作用域中调用
 * @param {String|Element} element 元素选择器
 * @param {Number} speed 速度（负值向上，正值向下）
 */
export function useParallax(element, speed = 0.5) {
  // 确保在 Vue 组件上下文中调用
  if (!getCurrentInstance()) {
    logger.warn('[useParallax] 必须在组件的 setup() 中调用')
    return
  }

  let animation

  onMounted(() => {
    animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  onUnmounted(() => {
    if (animation) {
      animation.kill()
      animation.scrollTrigger?.kill()
    }
  })
}
