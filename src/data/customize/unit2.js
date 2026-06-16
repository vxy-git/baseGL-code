export const unit2Data = {
  title: "Let's Demo",
  arrowIcon: '/api/uploads/file/default/assets/img/icon4_active.png',
  splideOptions: {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: '50px',
    speed: 800,
    arrows: false,
    pagination: false,
    drag: true,
    keyboard: true,
    fixedWidth: '1300px',
    rewind: true,
    breakpoints: {
      768: {
        fixedWidth: '100%',
        gap: '0px',
      },
    },
  },
  slides: [
    {
      image: '/assets/customize/demo-left.png',
      alt: 'Custom product demo for 0.5mL and 1mL devices',
    },
    {
      image: '/assets/customize/demo-right.png',
      alt: 'Custom product demo for 1mL and 2mL devices',
    },
    {
      image: '/assets/customize/demo-left.png',
      alt: 'Custom product demo for 0.5mL and 1mL devices',
    },
    {
      image: '/assets/customize/demo-right.png',
      alt: 'Custom product demo for 1mL and 2mL devices',
    },
  ],
}
