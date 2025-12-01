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
      id: 2,
      name: 'DUKES',
      description: 'Dual chamber & postless tech',
      capacity: '0.5+0.5mL/1.0+1.0mL/1.5+1.5mL',
      image: DUKES,
      background: DUKES_HOVER,
      alt: 'DUKES',
      isNew: true,
      linkType: 'product2',
    },
  ],
  1: [
    {
      id: 105,
      name: 'UNIVERSE Series',
      description: 'UNICORE™ tech & super mini',
      capacity: '1mL/2mL',
      image: UNIVERSE_Series,
      background: UNIVERSE_Series_HOVER,
      alt: 'UNIVERSE Series',
      isNew: true,
      linkType: 'product1',
    },
    {
      id: 101,
      name: 'UNICORN Series',
      description: 'UNICORE™ tech & ultra-slim',
      capacity: '0.5mL/1mL',
      image: UNICORN_Series,
      background: UNICORN_Series_HOVER,
      alt: 'UNICORN Series',
      isNew: true,
      linkType: 'product1',
    },
    {
      id: 102,
      name: 'UNIT PRO',
      description: 'UNICORE™ tech & large display',
      capacity: '1mL/2mL',
      image: UNIT_PRO,
      background: UNIT_PRO_HOVER,
      alt: 'UNIT PRO',
      isNew: true,
      linkType: 'product2',
    },
  ],
}
