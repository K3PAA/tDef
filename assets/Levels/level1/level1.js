;(function (name, data) {
  if (typeof onTileMapLoaded === 'undefined') {
    if (typeof TileMaps === 'undefined') TileMaps = {}
    TileMaps[name] = data
  } else {
    onTileMapLoaded(name, data)
  }
  if (typeof module === 'object' && module && module.exports) {
    module.exports = data
  }
})('level-1', {
  compressionlevel: -1,
  editorsettings: {
    export: {
      format: 'js',
      target: 'level-1.js',
    },
  },
  height: 16,
  infinite: false,
  layers: [
    {
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
      height: 16,
      id: 1,
      name: 'floor',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61,
        37, 40, 37, 37, 40, 37, 37, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 61, 49, 42, 34, 42, 41, 33, 50, 41, 34, 62, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 61, 33, 42, 50, 49, 33, 50, 33, 42, 33, 41, 49, 39, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 61, 34, 41, 41, 42, 41, 49, 34, 50, 41, 33, 41, 33,
        42, 40, 0, 0, 0, 0, 0, 0, 0, 0, 61, 33, 33, 34, 34, 48, 45, 48, 46, 47,
        58, 41, 42, 42, 42, 42, 0, 0, 0, 0, 0, 0, 0, 61, 49, 42, 49, 49, 50, 0,
        0, 0, 0, 0, 0, 58, 42, 33, 49, 42, 62, 0, 0, 0, 0, 0, 61, 41, 41, 50,
        41, 50, 57, 0, 0, 0, 0, 0, 0, 0, 58, 41, 50, 41, 33, 62, 39, 39, 39, 61,
        41, 50, 49, 41, 33, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 42, 41, 33, 33,
        33, 33, 34, 49, 42, 49, 42, 50, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        34, 49, 50, 41, 33, 50, 42, 49, 50, 34, 34, 41, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 46, 58, 34, 50, 42, 41, 33, 42, 34, 42, 41, 57, 46, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 48, 48, 45, 47, 45, 47, 46, 48, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      height: 16,
      id: 2,
      name: 'path',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 766, 767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        728, 729, 0, 684, 685, 783, 0, 686, 687, 0, 0, 716, 717, 718, 719, 0, 0,
        0, 0, 0, 716, 717, 718, 719, 744, 745, 0, 700, 701, 0, 0, 702, 703, 0,
        0, 732, 733, 734, 735, 0, 0, 0, 0, 0, 732, 733, 734, 735, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 748, 749, 750, 751, 0, 0, 0, 0, 0, 748, 749, 750, 751,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766, 767, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 684, 685, 0, 0, 0, 0, 782,
        783, 0, 0, 0, 0, 0, 0, 939, 940, 941, 717, 718, 0, 0, 0, 0, 0, 700, 701,
        0, 0, 0, 0, 686, 687, 0, 0, 0, 0, 0, 0, 0, 0, 732, 733, 734, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 702, 703, 0, 0, 0, 0, 0, 0, 0, 0, 748, 749, 750,
        680, 681, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 716, 717, 718, 719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 716, 717, 718, 719,
        0, 0, 0, 0, 0, 0, 732, 733, 734, 735, 0, 0, 0, 0, 0, 0, 0, 0, 639, 0,
        732, 733, 734, 735, 0, 0, 0, 0, 0, 0, 748, 749, 750, 751, 0, 0, 0, 716,
        717, 718, 719, 0, 655, 0, 748, 749, 750, 751, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 732, 733, 734, 735, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 748, 749, 750, 751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 16,
      id: 14,
      name: 'shadow',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 172, 0, 0, 0, 174, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0, 0, 204,
        205, 206, 0, 0, 0, 0, 188, 0, 0, 0, 190, 0, 0, 0, 220, 221, 222, 0, 0,
        0, 0, 0, 0, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 237,
        238, 0, 0, 0, 0, 0, 0, 236, 237, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 172, 0, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204,
        205, 206, 0, 0, 0, 0, 0, 188, 0, 220, 221, 222, 0, 174, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 220, 221, 222, 72, 0, 0, 0, 0, 0, 0, 236, 237, 238, 0, 190,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 237, 238, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 220, 221, 222, 0,
        127, 0, 0, 0, 0, 0, 0, 0, 127, 0, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0,
        236, 237, 238, 0, 143, 0, 0, 204, 205, 206, 0, 0, 143, 0, 236, 237, 238,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 221, 222, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 237, 238, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
      ],
      height: 16,
      id: 8,
      name: 'design',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 254, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        216, 0, 0, 0, 270, 271, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254,
        255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        270, 271, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 216, 78, 79, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 94, 95, 96, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 110, 111, 112, 77, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 93, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 16,
      id: 11,
      name: 'design layer 2',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        411, 412, 413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 427, 428, 429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 443, 444, 445, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 322, 323, 324, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 338, 339, 340, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 355, 356, 0, 0, 0, 0, 0, 326, 327,
        328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 370, 371, 372, 0, 0, 0, 0,
        0, 342, 343, 344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 386, 387, 388,
        0, 0, 0, 0, 0, 358, 359, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 374, 375, 376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 390, 391, 392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
      ],
      height: 16,
      id: 12,
      name: 'trees',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 529, 514, 547, 0, 0, 0, 0, 529, 548, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 515, 529, 514, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 562, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 564, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 412, 411, 412, 413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 428, 427, 428, 429, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 444, 530, 444, 445, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 532, 0, 0, 0, 0, 513, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 563, 0,
        0, 326, 327, 326, 327, 328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 532, 0, 0, 342, 343, 342, 343, 344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 358, 359, 358, 359, 360, 0, 0, 0, 0, 0, 545, 0,
        0, 0, 0, 547, 546, 0, 0, 547, 0, 0, 0, 0, 374, 375, 374, 375, 376, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 530, 515, 0, 547, 0, 390, 391, 390,
        391, 392, 0, 0, 0, 0, 0, 0, 514, 0, 563, 0, 0, 0,
      ],
      height: 16,
      id: 13,
      name: 'trees2',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
    {
      draworder: 'topdown',
      id: 10,
      name: 'pathLine',
      objects: [
        {
          height: 0,
          id: 2,
          name: '',
          polyline: [
            {
              x: 0,
              y: 0,
            },
            {
              x: -132,
              y: 134,
            },
            {
              x: 234,
              y: 142,
            },
            {
              x: 354,
              y: 326,
            },
            {
              x: 590,
              y: 320,
            },
            {
              x: 769,
              y: 105,
            },
            {
              x: 1117,
              y: 109,
            },
          ],
          rotation: 0,
          type: '',
          visible: true,
          width: 0,
          x: 1,
          y: 0,
        },
      ],
      opacity: 1,
      type: 'objectgroup',
      visible: true,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      height: 16,
      id: 15,
      name: 'interactive',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 24,
      x: 0,
      y: 0,
    },
  ],
  nextlayerid: 16,
  nextobjectid: 3,
  orientation: 'orthogonal',
  renderorder: 'right-down',
  tiledversion: '1.10.1',
  tileheight: 32,
  tilesets: [
    {
      firstgid: 1,
      source: '../../Tiled/TX Tileset Grass.tsx',
    },
    {
      firstgid: 65,
      source: '../../Tiled/TX Props.tsx',
    },
    {
      firstgid: 321,
      source: '../../Tiled/TX Plant.tsx',
    },
    {
      firstgid: 577,
      source: '../../Tiled/TX Shadow.tsx',
    },
    {
      firstgid: 833,
      source: '../../Tiled/TX Shadow Plant.tsx',
    },
  ],
  tilewidth: 32,
  type: 'map',
  version: '1.10',
  width: 24,
})
