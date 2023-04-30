"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = 'fal';
var iconName = "dungeon";
var width = 512;
var height = 512;
var aliases = [];
var unicode = "f6d9";
var svgPathData = "M302.2 143.5C293.8 146.6 284.6 147.3 276 145.8C269.5 144.6 262.9 144 256 144C249.1 144 242.5 144.6 235.1 145.8C227.4 147.3 218.2 146.6 209.8 143.5C205.9 151.6 199.9 158.6 192.7 163.6C186.6 167.8 180.9 172.6 175.7 177.1C169.5 184.3 161.6 188.1 152.1 191.4C154.5 200.3 153.7 209.4 150.7 217.7C147.7 225.9 145.7 234.5 144.7 243.5C143.5 253.9 138.1 264.1 131.8 272C139.4 280.5 144 291.7 144 304V352C144 364.3 139.4 375.5 131.8 384C139.4 392.5 144 403.7 144 416V464C144 490.5 122.5 512 96 512H48C21.49 512 0 490.5 0 464V416C0 403.7 4.622 392.5 12.22 384C4.622 375.5 0 364.3 0 352V304C0 291.7 4.631 280.5 12.25 271.1C4.354 263.2-.312 251.3 .641 237.8C2.781 207.4 10.22 178.5 22.05 151.9C28.18 138.2 39.36 129.5 51.85 126.1C49.73 113.3 52.84 99.5 62.69 88.17C80.56 67.6 101.7 49.9 125.2 35.88C138.2 28.17 152.3 27.57 164.5 31.96C170.2 20.27 180.7 10.81 195.3 7.249C214.8 2.506 235.1 0 256 0C276.9 0 297.2 2.506 316.7 7.249C331.3 10.81 341.8 20.27 347.5 31.96C359.7 27.58 373.8 28.17 386.8 35.88C410.3 49.9 431.4 67.59 449.3 88.17C459.2 99.5 462.3 113.3 460.2 126.1C472.6 129.5 483.8 138.2 489.1 151.9C501.8 178.5 509.2 207.4 511.4 237.8C512.3 251.3 507.6 263.2 499.8 271.1C507.4 280.5 512 291.7 512 304V352C512 364.3 507.4 375.5 499.8 384C507.4 392.5 512 403.7 512 416V464C512 490.5 490.5 512 464 512H416C389.5 512 368 490.5 368 464V416C368 403.7 372.6 392.5 380.2 384C372.6 375.5 368 364.3 368 352V304C368 291.7 372.6 280.5 380.2 272C373 264.1 368.5 253.9 367.3 243.5C366.3 234.5 364.3 225.9 361.3 217.7C358.3 209.4 357.5 200.3 359 191.4C350.4 188.1 342.5 184.3 336.3 177.1C331.1 172.6 325.4 167.8 319.3 163.6C312.1 158.6 306.1 151.6 302.2 143.5L302.2 143.5zM421.7 131.6C429.3 126.6 431.2 116.1 425.2 109.2C409.5 91.14 391 75.65 370.4 63.37C362.4 58.6 352.2 62.51 348.8 71.18L330.6 116.6C327.6 124.1 330.7 132.6 337.4 137.2C345.3 142.6 352.6 148.8 359.3 155.7C365.1 161.6 374.3 163.2 381.3 158.6L421.7 131.6zM391.3 206.7C395.2 217.3 397.8 228.5 399.1 240C400.1 248.8 407.2 256 416 256H464C472.8 256 480.1 248.8 479.4 240C477.6 213.4 471.1 188.2 460.7 164.1C456.9 156.4 446.2 153.8 438.4 158.1L397.5 186.2C390.9 190.6 388.6 199.2 391.3 206.7L391.3 206.7zM400 416V464C400 472.8 407.2 480 416 480H464C472.8 480 480 472.8 480 464V416C480 407.2 472.8 400 464 400H416C407.2 400 400 407.2 400 416zM210.9 104.2C213.1 111.8 222.3 115.7 230.3 114.3C238.7 112.8 247.2 112 256 112C264.8 112 273.3 112.8 281.7 114.3C289.7 115.7 298.1 111.7 301.1 104.1L319.2 58.87C322.7 50.28 318.1 40.53 309.1 38.34C292.1 34.2 274.3 32 256 32C237.7 32 219.9 34.2 202.9 38.34C193.9 40.53 189.3 50.28 192.8 58.87L210.9 104.2zM86.84 109.2C80.83 116.1 82.67 126.6 90.3 131.6L130.7 158.6C137.6 163.2 146.9 161.6 152.7 155.7C159.4 148.8 166.7 142.6 174.6 137.2C181.3 132.6 184.4 124.1 181.4 116.6L163.2 71.16C159.8 62.51 149.6 58.6 141.6 63.37C120.1 75.65 102.5 91.14 86.84 109.2L86.84 109.2zM32.56 240C31.94 248.8 39.16 256 48 256H96C104.8 256 111.9 248.8 112.9 240C114.2 228.5 116.8 217.3 120.7 206.7C123.4 199.2 121.1 190.6 114.5 186.2L73.6 158.1C65.77 153.7 55.1 156.4 51.28 164.1C40.94 188.2 34.44 213.4 32.56 240L32.56 240zM112 304C112 295.2 104.8 288 96 288H48C39.16 288 32 295.2 32 304V352C32 360.8 39.16 368 48 368H96C104.8 368 112 360.8 112 352V304zM400 352C400 360.8 407.2 368 416 368H464C472.8 368 480 360.8 480 352V304C480 295.2 472.8 288 464 288H416C407.2 288 400 295.2 400 304V352zM32 464C32 472.8 39.16 480 48 480H96C104.8 480 112 472.8 112 464V416C112 407.2 104.8 400 96 400H48C39.16 400 32 407.2 32 416V464zM272 464C272 472.8 264.8 480 256 480C247.2 480 240 472.8 240 464V192C240 183.2 247.2 176 256 176C264.8 176 272 183.2 272 192V464zM208 464C208 472.8 200.8 480 192 480C183.2 480 176 472.8 176 464V224C176 215.2 183.2 208 192 208C200.8 208 208 215.2 208 224V464zM336 464C336 472.8 328.8 480 320 480C311.2 480 304 472.8 304 464V224C304 215.2 311.2 208 320 208C328.8 208 336 215.2 336 224V464z"

exports.definition = {
 prefix: prefix,
 iconName: iconName,
 icon: [width, height, aliases, unicode, svgPathData],
};

exports.faDungeon = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
