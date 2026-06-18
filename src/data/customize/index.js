import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit3Data } from './unit3.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit7Data } from './unit7.js'

export default {
  route: '/customize',
  routeName: 'customize',
  showInHeader: true,
  showInFooter: true,
  navLabel: 'Customize',
  navOrder: 4,
  template: 'CustomizePage',
  meta: {
    title: 'Customize - Caleaf',
    description: 'Custom vaporizer design, extract matching, and end-to-end production support.',
  },
  modules: {
    unit1: {
      enabled: true,
      data: unit1Data,
    },
    unit2: {
      enabled: true,
      data: unit2Data,
    },
    unit3: {
      enabled: true,
      data: unit3Data,
    },
    unit4: {
      enabled: true,
      data: unit4Data,
    },
    unit5: {
      enabled: true,
      data: unit5Data,
    },
    unit6: {
      enabled: true,
      data: unit6Data,
    },
    unit7: {
      enabled: true,
      data: unit7Data,
    },
  },
}
