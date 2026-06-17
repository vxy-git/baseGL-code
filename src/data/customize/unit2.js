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
      video: '/assets/customize/unit2-1.mp4',
      alt: 'Custom product demo video 1',
    },
    {
      video: '/assets/customize/unit2-2.mp4',
      alt: 'Custom product demo video 2',
    },
    {
      video: '/assets/customize/unit2-3.mp4',
      alt: 'Custom product demo video 3',
    },
    {
      video: '/assets/customize/unit2-4.mp4',
      alt: 'Custom product demo video 4',
    },
  ],
}
