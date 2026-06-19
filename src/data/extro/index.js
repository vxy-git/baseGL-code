import { itemData } from './item.js'
import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit3Data } from './unit3.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit7Data } from './unit7.js'

export default {
  route: '/extro',
  routeName: 'extro',
  showInHeader: true,
  showInFooter: true,
  navLabel: 'EXTRO',
  navOrder: 7,
  template: 'ExtroPage',
  meta: {
    title: 'EXTRO - Caleaf Tech',
    description: 'EXTRO 2mL, 3mL and 4mL device with proven stability and custom design options.',
  },
  modules: {
    item: { enabled: true, data: itemData },
    unit1: { enabled: true, data: unit1Data },
    unit2: { enabled: true, data: unit2Data },
    unit3: { enabled: true, data: unit3Data },
    unit4: { enabled: true, data: unit4Data },
    unit5: { enabled: true, data: unit5Data },
    unit6: { enabled: true, data: unit6Data },
    unit7: { enabled: true, data: unit7Data },
  },
}
