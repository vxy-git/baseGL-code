const BLENDER = '/assets/list/D9_Distillate/BLENDER.jpg'
const BLENDER_HOVER = '/assets/list/D9_Distillate/BLENDER-hover.jpg'

const DUKES = '/assets/list/D9_Distillate/DUKES.jpg'
const DUKES_HOVER = '/assets/list/D9_Distillate/DUKES-hover.jpg'

const UNICORN_Series = '/assets/list/For_ResinRosin/UNICORN-Series.jpg'
const UNICORN_Series_HOVER = '/assets/list/For_ResinRosin/UNICORN-Series-hover.jpg'

const UNIT_PRO = '/assets/list/For_ResinRosin/UNIT-PRO.jpg'
const UNIT_PRO_HOVER = '/assets/list/For_ResinRosin/UNIT-PRO-hover.png'

const UNIVERSE_Series = '/assets/list/For_ResinRosin/UNIVERSE-Series.jpg'
const UNIVERSE_Series_HOVER = '/assets/list/For_ResinRosin/UNIVERSE-Series-hover.jpg'

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
      id: 105,
      name: 'UNIVERSE Series',
      description: 'UNICORE™ tech & super mini',
      capacity: '1mL/2mL',
      image: UNIVERSE_Series,
      background: UNIVERSE_Series_HOVER,
      alt: 'UNIVERSE Series',
      isNew: true,
      linkType: 'universe_series',
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
      linkType: 'unicorn_series',
    },
    {
      id: 102,
      name: 'UNIT Pro',
      description: 'UNICORE™ tech & large display',
      capacity: '1mL/2mL',
      image: UNIT_PRO,
      background: UNIT_PRO_HOVER,
      alt: 'UNIT PRO',
      isNew: true,
      linkType: 'unit_pro',
    },
  ],
  1: [
    {
      id: 2,
      name: 'DUKES',
      description: 'Dual chamber & postless tech',
      capacity: '1ml/2ml/3ml',
      image: DUKES,
      background: DUKES_HOVER,
      alt: 'DUKES',
      isNew: true,
      linkType: '', // /dukes
    },
  ],
}