import { h, render } from 'vue';
import loadding from './loadding.vue'

interface LoaddingFace {
  parent: any,
  close: Function
}

var nowLoadding: LoaddingFace | null = null

function createLoadding(type: string, title: string, duration: number, mark: boolean) {
  let parent = document.createElement('div')
  let Vnode = h(h(loadding), { type: type, title: title, mark: mark })
  render(Vnode, parent)
  document.body.append(parent)
  let tloadding = nowLoadding = {
    parent: parent,
    close: () => {
      document.body.removeChild(parent)
      nowLoadding = null
    }
  }
  if (duration) {
    setTimeout(() => {
      tloadding.close()
    }, duration);
  }
  return tloadding
}

/**
 * 
 * @param config 
 * 可选 
 * string:加载文字  
 * object: 
 *  type-动画类型-round/diamond round
 *  | title 
 *  | duration -动画时长/ms 0=持续显示 默认 0
 *  | mark - 是否启用全屏遮罩 默认 true
 * @returns 
 */
export function Loadding(config?: string | {
  type?: string;
  title?: string;
  duration?: number;
  mark?: boolean;
}) {
  let tconfig = {
    type: '',
    title: '',
    duration: 0,
    mark: true,
  }
  if (typeof (config) == 'string') {
    tconfig.title = config
  } else if (typeof (config) == 'object') {
    if (config.type) tconfig.type = config.type
    if (config.title) tconfig.title = config.title
    if (config.duration) tconfig.duration = config.duration
    if (config.mark != undefined) tconfig.mark = config.mark === false ? false : true
  }
  if (nowLoadding) {
    nowLoadding.close()
  }
  return createLoadding(tconfig.type, tconfig.title, tconfig.duration, tconfig.mark)
}