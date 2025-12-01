import BLENDER from '@/assets/list/D9_Distillate/BLENDER.jpg'
import BLENDER_HOVER from '@/assets/list/D9_Distillate/BLENDER-hover.jpg'

import DUKES from '@/assets/list/D9_Distillate/DUKES.jpg'
import DUKES_HOVER from '@/assets/list/D9_Distillate/DUKES-hover.jpg'

import UNICORN_Series from '@/assets/list/For_ResinRosin/UNICORN-Series.jpg'
import UNICORN_Series_HOVER from '@/assets/list/For_ResinRosin/UNICORN-Series-hover.jpg'

import UNIT_PRO from '@/assets/list/For_ResinRosin/UNIT-PRO.jpg'
import UNIT_PRO_HOVER from '@/assets/list/For_ResinRosin/UNIT-PRO-hover.png'

import UNIVERSE_Series from '@/assets/list/For_ResinRosin/UNIVERSE-Series.jpg'
import UNIVERSE_Series_HOVER from '@/assets/list/For_ResinRosin/UNIVERSE-Series-hover.jpg'

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} capacity
 * @property {string} image
 * @property {string} background
 * @property {string} alt
 * @property {boolean} isNew
 * @property {string} linkType
 */

/** @type {string[]} */
export const tabsList = ['For Resin/Rosin', 'D9 Distillate']

/** @type {Record<number, Product[]>} */
export const productsData = {
  0: [
    {
      id: 1,
      name: 'UNIT PRO',
      description: 'UNICORE™ tech & large display',
      capacity: '1mL/2mL',
      image: BLENDER,
      background: BLENDER_HOVER,
      alt: 'UNIT PRO',
      isNew: true,
      linkType: 'product1',
    },
    {
      id: 2,
      name: 'UNIT',
      description: 'Smooth for Resin/Rosin',
      capacity: '1mL/2mL',
      image: DUKES,
      background: DUKES_HOVER,
      alt: 'UNIT',
      isNew: true,
      linkType: 'product2',
    },
  ],
  1: [
    {
      id: 101,
      name: 'DUKES',
      description: 'Dual flavor system',
      capacity: '2mL',
      image: UNICORN_Series,
      background: UNICORN_Series_HOVER,
      alt: 'DUKES',
      isNew: true,
      linkType: 'product1',
    },
    {
      id: 102,
      name: 'D9 CART',
      description: 'For Distillate oils',
      capacity: '1mL',
      image: UNIT_PRO,
      background: UNIT_PRO_HOVER,
      alt: 'D9 CART',
      isNew: false,
      linkType: 'product2',
    },
    {
      id: 105,
      name: 'D9 MAX',
      description: 'High capacity distillate',
      capacity: '2mL',
      image: UNIVERSE_Series,
      background: UNIVERSE_Series_HOVER,
      alt: 'D9 MAX',
      isNew: false,
      linkType: 'product1',
    },
  ],
}
