(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level2",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js"
        }
    },
 "height":16,
 "infinite":false,
 "layers":[
        {
         "data":[12, 2, 17, 3, 25, 11, 19, 9, 17, 25, 9, 20, 4, 17, 19, 18, 17, 2, 19, 3, 27, 25, 12, 4,
            28, 30, 25, 27, 10, 12, 34, 42, 33, 42, 41, 33, 41, 41, 49, 33, 34, 10, 18, 18, 26, 3, 9, 26,
            10, 18, 19, 41, 41, 49, 33, 33, 33, 50, 49, 49, 49, 33, 34, 34, 42, 34, 49, 19, 26, 3, 9, 3,
            1, 34, 49, 42, 33, 41, 41, 41, 33, 50, 33, 42, 1, 23, 19, 33, 42, 34, 33, 41, 20, 3, 17, 1,
            33, 42, 33, 50, 41, 33, 30, 3, 10, 28, 3, 25, 3, 12, 1, 10, 9, 33, 41, 34, 18, 17, 25, 10,
            41, 34, 50, 41, 10, 28, 12, 18, 4, 11, 27, 3, 11, 26, 17, 12, 9, 42, 34, 34, 41, 25, 28, 4,
            50, 41, 9, 28, 12, 4, 27, 26, 27, 2, 17, 9, 25, 27, 27, 26, 27, 28, 33, 33, 33, 30, 20, 19,
            1, 9, 27, 11, 3, 11, 4, 19, 9, 3, 18, 25, 9, 20, 4, 2, 3, 19, 41, 33, 41, 12, 19, 1,
            18, 18, 28, 11, 17, 3, 4, 28, 2, 26, 20, 9, 27, 4, 2, 10, 17, 12, 50, 41, 33, 18, 25, 18,
            19, 1, 9, 10, 10, 9, 28, 19, 26, 18, 1, 19, 25, 18, 30, 25, 27, 34, 49, 41, 34, 4, 28, 26,
            18, 26, 1, 25, 9, 4, 18, 2, 3, 26, 12, 2, 26, 17, 11, 42, 50, 49, 34, 33, 17, 25, 1, 11,
            25, 10, 9, 17, 28, 5, 26, 27, 41, 42, 42, 34, 50, 50, 34, 34, 34, 33, 49, 50, 26, 18, 12, 4,
            50, 42, 33, 34, 49, 33, 42, 50, 50, 50, 49, 49, 41, 34, 42, 41, 50, 50, 49, 20, 27, 10, 20, 28,
            49, 49, 41, 49, 50, 50, 50, 49, 41, 50, 34, 50, 19, 4, 6, 3, 20, 26, 13, 24, 17, 19, 9, 4,
            42, 50, 50, 50, 33, 41, 42, 49, 18, 28, 12, 11, 27, 3, 18, 4, 20, 26, 1, 19, 4, 1, 20, 22,
            1, 18, 26, 29, 3, 19, 17, 3, 12, 11, 3, 10, 2, 26, 17, 12, 26, 17, 4, 26, 2, 26, 12, 11],
         "height":16,
         "id":2,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":24,
         "x":0,
         "y":0
        }, 
        {
         "data":[106, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            122, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0,
            0, 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 204, 205, 206, 326, 327, 328, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 220, 221, 222, 342, 343, 344, 236, 237, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 236, 237, 238, 358, 359, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206,
            204, 205, 206, 0, 0, 0, 0, 0, 0, 374, 375, 376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 221, 222,
            220, 221, 222, 0, 0, 0, 0, 0, 0, 390, 391, 392, 204, 205, 206, 0, 0, 0, 0, 0, 0, 236, 237, 238,
            236, 237, 238, 0, 0, 204, 205, 206, 0, 0, 0, 0, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            216, 0, 0, 0, 0, 220, 221, 222, 0, 0, 0, 0, 236, 237, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            232, 0, 180, 0, 0, 236, 237, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 75,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 79, 90, 91,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 94, 95, 96, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 221, 222, 0, 0, 0, 0, 110, 111, 214, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 237, 238, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":16,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":24,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 156, 513, 0, 174, 0, 0, 42, 34, 41, 33, 33, 33, 41, 42, 0, 172, 0, 515, 516, 322, 323, 324,
            0, 0, 172, 0, 514, 190, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 73, 338, 339, 340,
            174, 0, 188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 354, 355, 356,
            190, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174, 370, 371, 372,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 386, 387, 388,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 515, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 514, 0, 156, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 515, 407, 515, 513, 516, 409, 0, 0, 514, 0, 172, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 514, 0, 516, 513, 0, 516, 0, 0, 0, 0, 0, 188, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 513, 0, 0, 0, 439, 516, 515, 514, 441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 516, 0,
            0, 0, 0, 515, 515, 0, 0, 0, 0, 0, 33, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 514, 513,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 513, 513, 0, 0, 0, 515, 0, 0, 0, 0, 0, 0, 516, 0, 0, 0, 0, 0],
         "height":16,
         "id":3,
         "name":"Tile Layer 3",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":24,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0,
            82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":16,
         "id":4,
         "name":"active",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":24,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-118,
                         "y":207
                        }, 
                        {
                         "x":286,
                         "y":59
                        }, 
                        {
                         "x":482,
                         "y":57
                        }, 
                        {
                         "x":609,
                         "y":158
                        }, 
                        {
                         "x":625,
                         "y":289
                        }, 
                        {
                         "x":536,
                         "y":384
                        }, 
                        {
                         "x":286,
                         "y":407
                        }, 
                        {
                         "x":127,
                         "y":431
                        }, 
                        {
                         "x":-4,
                         "y":433
                        }, 
                        {
                         "x":-142,
                         "y":384
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":1
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":false,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/Texture\/TX Tileset Grass.tsx"
        }, 
        {
         "firstgid":65,
         "source":"..\/..\/Texture\/TX Props.tsx"
        }, 
        {
         "firstgid":321,
         "source":"..\/..\/Texture\/TX Plant.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":24
});