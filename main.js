(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../../libs/react-ui/src/lib/v2/Button/Button.tsx":
/*!***************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Button/Button.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../../../../node_modules/@material-ui/core/esm/Button/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = (_ref) => {
  let {
    tvhVariant
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tvhVariant"]);

  switch (tvhVariant) {
    case 'primary':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
        color: "primary",
        variant: "contained"
      }, props));

    case 'secondary':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
        color: "default",
        variant: "outlined"
      }, props));

    case 'ghost':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
        color: "default",
        variant: "text"
      }, props));

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Button/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Button/index.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../../../libs/react-ui/src/lib/v2/Button/Button.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.styles.ts":
/*!***************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.styles.ts ***!
  \***************************************************************************************************/
/*! exports provided: useGameStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGameStyles", function() { return useGameStyles; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");

const useStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  canvasContainer: {
    // height: 'calc(100% - 74px)',
    padding: theme.spacing(0, 2),
    flexGrow: 1
  },
  arrowBoxContainer: {
    flexGrow: 0,
    zIndex: theme.zIndex.drawer,
    width: '334px'
  },
  arrowBox: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '334px',
    height: '100%'
  },
  arrow: {
    margin: theme.spacing(0, 1),
    height: '42px'
  },
  'arrow--inverted': {
    filter: 'invert(100%)'
  }
}));
const useGameStyles = () => {
  const theme = Object(_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return {
    backgroundFill: theme.palette.common.white,
    streetLineFill: theme.palette.primary.main,
    hitboxStroke: theme.palette['accent'].promo,
    scoreTextFill: theme.palette.primary.main,
    highScoreTextFill: theme.palette.text.primary
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.tsx":
/*!*********************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.tsx ***!
  \*********************************************************************************************/
/*! exports provided: ErrorGame, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGame", function() { return ErrorGame; });
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ "../../../../node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Popper */ "../../../../node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorGameRestartDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorGameRestartDialog */ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/index.ts");
/* harmony import */ var _ErrorGameStartDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorGameStartDialog */ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/index.ts");
/* harmony import */ var _ErrorGame_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorGame.styles */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.styles.ts");
/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-engine */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/game-engine.ts");
/* harmony import */ var _resources_left_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/left-arrow.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/left-arrow.svg");
/* harmony import */ var _resources_right_arrow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/right-arrow.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/right-arrow.svg");









const ErrorGame = ({
  language,
  seed
}) => {
  var _canvasRef$current;

  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const arrowBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const classes = Object(_ErrorGame_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [running, setRunning] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [score, setScore] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [highScore, setHighScore] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [dialog, setDialog] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('START_GAME');
  const [anchorEl, setAnchorEl] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [leftButtonPressed, setLeftButtonPressed] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [rightButtonPressed, setRightButtonPressed] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const gameStyles = Object(_ErrorGame_styles__WEBPACK_IMPORTED_MODULE_5__["useGameStyles"])();
  const game = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(new _game_engine__WEBPACK_IMPORTED_MODULE_6__["Game"](gameStyles, seed));

  const startGame = () => {
    game.current.reset();
    setScore(0);
    setRunning(true);
    setDialog('');
  };

  const endGame = () => {
    setScore(Math.round(game.current.score));
    setHighScore(game.current.highScore);
    setRunning(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!running && score > 0) {
      setDialog('RESTART_GAME');
    }
  }, [running, score]);

  const keyDownListener = event => {
    switch (event.key) {
      case 'ArrowLeft':
        game.current.arrowLeftDown();
        setRightButtonPressed(false);
        setLeftButtonPressed(true);
        break;

      case 'ArrowRight':
        game.current.arrowRightDown();
        setLeftButtonPressed(false);
        setRightButtonPressed(true);
        break;
    }
  };

  const keyUpListener = event => {
    switch (event.key) {
      case 'ArrowLeft':
        game.current.arrowLeftUp();
        setLeftButtonPressed(false);
        break;

      case 'ArrowRight':
        game.current.arrowRightUp();
        setRightButtonPressed(false);
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    canvasRef.current.height = canvasRef.current.offsetHeight;
  }, [(_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.offsetHeight]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const context2d = canvasRef.current.getContext('2d');
    canvasRef.current.style.height = '100%';
    canvasRef.current.style.width = '295px';
    setAnchorEl(arrowBoxRef.current);
    let lastFrameTime = 0;
    let requestId;
    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);
    game.current.init(canvasRef.current, context2d);

    const render = time => {
      if (time - lastFrameTime < _game_engine__WEBPACK_IMPORTED_MODULE_6__["FRAME_MIN_TIME"] || context2d === null) {
        // skip the frame if the call is too early
        requestId = requestAnimationFrame(render);
        return; // return as there is nothing to do
      }

      lastFrameTime = time; // remember the time of the rendered frame

      if (!game.current.running && game.current.score > 0) {
        endGame();
      } // render the frame


      game.current.cycle();
      requestId = requestAnimationFrame(render); // get next farme
    };

    requestId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(requestId);
      document.removeEventListener('keydown', keyDownListener);
      document.removeEventListener('keyup', keyUpListener);
    };
  }, []);
  const open = Boolean(dialog);
  const id = open ? 'transitions-popper' : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.canvasContainer,
    ref: containerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("canvas", {
    width: "295",
    height: "0",
    ref: canvasRef
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.arrowBoxContainer,
    ref: arrowBoxRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: classes.arrowBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: leftButtonPressed ? classes.arrow + ' ' + classes['arrow--inverted'] : classes.arrow,
    src: _resources_left_arrow_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: rightButtonPressed ? classes.arrow + ' ' + classes['arrow--inverted'] : classes.arrow,
    src: _resources_right_arrow_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "right"
  }))), Boolean(anchorEl) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    id: id,
    anchorEl: anchorEl,
    container: anchorEl,
    placement: "top-end",
    modifiers: {
      offset: {
        enabled: true,
        offset: '160px, 50px'
      }
    }
  }, dialog === 'START_GAME' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ErrorGameStartDialog__WEBPACK_IMPORTED_MODULE_4__["ErrorGameStartDialog"], {
    onClick: startGame
  }), dialog === 'RESTART_GAME' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ErrorGameRestartDialog__WEBPACK_IMPORTED_MODULE_3__["ErrorGameRestartDialog"], {
    onClick: startGame,
    score: score,
    highScore: highScore
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorGame);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/game-engine.ts":
/*!**********************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/game-engine.ts ***!
  \**********************************************************************************************/
/*! exports provided: FRAME_MIN_TIME, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAME_MIN_TIME", function() { return FRAME_MIN_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _perlin_noise_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perlin-noise-generator */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/perlin-noise-generator.ts");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FRAMES_PER_SECOND = 30; // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame

const FRAME_MIN_TIME = 1000 / 60 * (60 / FRAMES_PER_SECOND) - 1000 / 60 * 0.5;
const LINE_WIDTH = 11;
const ENGINE_RUMBLE = 1;
const displayHitboxes = false;
const drawPerlinLine = false;
class Game {
  constructor(gameStyles, seed) {
    this.score = void 0;
    this.highScore = void 0;
    this.running = void 0;
    this._streetStart = void 0;
    this._playerPosition = void 0;
    this._movingPlayerX = void 0;
    this._movingPlayerY = void 0;
    this._obstacles = void 0;
    this._multiplier = void 0;
    this._perlinNoiseGenerator = void 0;
    this._noiseLine = void 0;
    this._canvas = void 0;
    this._context2d = void 0;
    this._gameStyles = void 0;
    this._ticker = void 0;
    this._rumble = void 0;
    this._seed = void 0;
    this._gameStyles = gameStyles;
    this._seed = seed;
  }

  init(canvas, context2d) {
    this._canvas = canvas;
    this._context2d = context2d;
    this._streetStart = 30;
    this._ticker = 0;
    this._noiseLine = [];
    this._rumble = {
      x: 0,
      y: 0
    };
    this.highScore = 0;
    this._perlinNoiseGenerator = new _perlin_noise_generator__WEBPACK_IMPORTED_MODULE_0__["PerlinNoiseGenerator"](canvas.width, canvas.width - (2 * LINE_WIDTH + _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].width), 113, // Player cart height
    this._seed);

    this._initGame();
  }

  reset() {
    this._initGame();

    this._startGame();
  }

  cycle() {
    this._ticker++;

    if (this.running || this.score === 0) {
      this._calculateGameState();
    }

    this.renderGame();
  }

  arrowLeftDown() {
    this._movingPlayerX = -1;
  }

  arrowLeftUp() {
    if (this._movingPlayerX === -1) {
      this._movingPlayerX = 0;
    }
  }

  arrowRightDown() {
    this._movingPlayerX = 1;
  }

  arrowRightUp() {
    if (this._movingPlayerX === 1) {
      this._movingPlayerX = 0;
    }
  }

  _startGame() {
    this.running = true;
  }

  _stopGame() {
    this.running = false;
  }

  _initGame() {
    this._playerPosition = {
      x: (this._canvas.width - _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].width) / 2,
      y: this._canvas.height - _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].height - 48
    };
    this._obstacles = [];
    this._multiplier = 1;
    this._movingPlayerX = 0;
    this._movingPlayerY = 0;
    this.running = false;
    this.score = 0;
  }

  _calculateGameState() {
    this._rumbleCart();

    if (!this.running) {
      return;
    } // Update perlin noise


    this._perlinNoiseGenerator.update(this._multiplier);

    this._updatePerlinLine(); // Update obstacles


    this._updateObstacles();

    if (this._obstacles.some(obstacle => this._evaluateHit(obstacle, this._playerPosition))) {
      this._stopGame();

      this.highScore = Math.max(this.highScore, this.score);
      return;
    }

    this._streetStart = Math.min(this._streetStart + 1 * this._multiplier, this._canvas.height);
    this.score = this.score + 1 / FRAMES_PER_SECOND * this._multiplier;
    this._playerPosition = _objectSpread(_objectSpread({}, this._playerPosition), {}, {
      x: Math.max(LINE_WIDTH, Math.min(this._playerPosition.x + 5 * this._movingPlayerX, this._canvas.width - _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].width - LINE_WIDTH))
    });
    this._multiplier = this._multiplier * 1.0005;
  }

  _rumbleCart() {
    switch (this._ticker % 4) {
      case 0:
        this._rumble.x -= ENGINE_RUMBLE;
        break;

      case 1:
        this._rumble.y -= ENGINE_RUMBLE;
        break;

      case 2:
        this._rumble.x += ENGINE_RUMBLE;
        break;

      case 3:
        this._rumble.y += ENGINE_RUMBLE;
        break;
    }
  }

  _updatePerlinLine() {
    this._noiseLine = this._noiseLine.map(noise => _objectSpread(_objectSpread({}, noise), {}, {
      y: noise.y + 1 * this._multiplier
    })).filter(noise => noise.y < this._canvas.height);

    this._noiseLine.push({
      x: this._perlinNoiseGenerator.x,
      y: 0
    });
  }

  _updateObstacles() {
    this._obstacles = this._obstacles.map(obstacle => _objectSpread(_objectSpread({}, obstacle), {}, {
      y: obstacle.y + 1 * this._multiplier
    })).filter(obstacle => obstacle.y < this._canvas.height);

    if (this._obstacles.filter(obstacle => obstacle.y < _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].height * 1.3).length < 2) {
      const placeOnLeft = this._perlinNoiseGenerator.getRandom() < 0.5;
      const leftSpace = this._perlinNoiseGenerator.x - LINE_WIDTH;
      const rightSpace = this._canvas.width - LINE_WIDTH - this._perlinNoiseGenerator.x;
      const possibleObjects = _resources__WEBPACK_IMPORTED_MODULE_1__["OBSTACLES"].filter(possibleObstacle => possibleObstacle.hitbox.width < (placeOnLeft ? leftSpace : rightSpace));
      const obstacleIdx = Math.round(this._perlinNoiseGenerator.getRandom() * possibleObjects.length) % possibleObjects.length;
      const obstacle = possibleObjects[obstacleIdx];

      if (!obstacle) {
        return;
      }

      const newObstacle = {
        image: obstacle.image,
        hitbox: obstacle.hitbox,
        x: placeOnLeft ? LINE_WIDTH + this._perlinNoiseGenerator.getRandom() * (leftSpace - obstacle.image.width) : this._perlinNoiseGenerator.x + this._perlinNoiseGenerator.getRandom() * (rightSpace - obstacle.image.width),
        y: -obstacle.image.height
      };

      if ((this._perlinNoiseGenerator.x > newObstacle.x + newObstacle.image.width + (_resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].width / 2 + 5) || this._perlinNoiseGenerator.x < newObstacle.x - (_resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].width / 2 + 5)) && (this._perlinNoiseGenerator.y > newObstacle.y + newObstacle.image.height + (_resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].height / 2 + 5) || this._perlinNoiseGenerator.y < newObstacle.y - (_resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"].height / 2 + 5)) && !this._obstacles.some(existingObstacle => this._obstacleOverlap(existingObstacle, newObstacle))) {
        this._obstacles.push(newObstacle);
      }
    }
  }

  renderGame() {
    this._context2d.fillStyle = this._gameStyles.backgroundFill;

    this._context2d.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this._context2d.fillStyle = this._gameStyles.streetLineFill;

    this._context2d.fillRect(0, 0, LINE_WIDTH, this._streetStart);

    this._context2d.fillRect(this._canvas.width - LINE_WIDTH, 0, LINE_WIDTH, this._streetStart);

    this._context2d.strokeStyle = this._gameStyles.hitboxStroke;

    this._obstacles.concat().reverse().forEach(obstacle => {
      this._context2d.drawImage(obstacle.image, obstacle.x, obstacle.y);

      if (displayHitboxes) {
        this._context2d.strokeRect(obstacle.x + obstacle.hitbox.x, obstacle.y + obstacle.hitbox.y, obstacle.hitbox.width, obstacle.hitbox.height);
      }
    });

    if (drawPerlinLine) {
      this._noiseLine.concat().reverse().forEach(noise => {
        this._context2d.fillRect(noise.x, noise.y, 1, 1);
      });
    } // Fix for resizing window


    this._playerPosition.y = this._canvas.height - _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].height - 48;

    this._context2d.drawImage(_resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART"], this._playerPosition.x + this._rumble.x, this._playerPosition.y + this._rumble.y);

    if (displayHitboxes) {
      this._context2d.strokeRect(this._playerPosition.x + _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].x, this._playerPosition.y + _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].y, _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].width, _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].height);
    }

    this._context2d.fillStyle = this._gameStyles.scoreTextFill;
    this._context2d.textAlign = 'left';
    this._context2d.font = '20px TVHPro';

    this._context2d.fillText(`Score: ${this.score.toFixed(0)}`, 30, 30);

    if (this.highScore > 0) {
      this._context2d.textAlign = 'left';
      this._context2d.font = '12px TVHPro';
      this._context2d.fillStyle = this._gameStyles.highScoreTextFill;

      this._context2d.fillText(`High Score: ${this.highScore.toFixed(0)}`, 30, 45);
    }
  }

  _obstacleOverlap(a, b) {
    if (a.x >= b.x + b.image.width || b.x >= a.x + a.image.width) {
      return false;
    } // If one rectangle is above other


    if (a.y >= b.y + b.image.height || b.y >= a.y + a.image.height) {
      return false;
    }

    return true;
  }

  _evaluateHit(obstacle, playerPosition) {
    const playerCartHitbox = _objectSpread(_objectSpread({}, _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"]), {}, {
      x: _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].x + playerPosition.x,
      y: _resources__WEBPACK_IMPORTED_MODULE_1__["PLAYER_CART_HITBOX"].y + playerPosition.y
    });

    const obstacleHitbox = _objectSpread(_objectSpread({}, obstacle.hitbox), {}, {
      x: obstacle.hitbox.x + obstacle.x,
      y: obstacle.hitbox.y + obstacle.y
    });

    if (obstacleHitbox.x >= playerCartHitbox.x + playerCartHitbox.width || playerCartHitbox.x >= obstacleHitbox.x + obstacleHitbox.width) {
      return false;
    } // If one rectangle is above other


    if (obstacleHitbox.y >= playerCartHitbox.y + playerCartHitbox.height || playerCartHitbox.y >= obstacleHitbox.y + obstacleHitbox.height) {
      return false;
    }

    return true;
  }

}

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/index.ts":
/*!****************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/index.ts ***!
  \****************************************************************************************/
/*! exports provided: ErrorGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorGame */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/ErrorGame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGame", function() { return _ErrorGame__WEBPACK_IMPORTED_MODULE_0__["ErrorGame"]; });



/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/perlin-noise-generator.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/perlin-noise-generator.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PerlinNoiseGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerlinNoiseGenerator", function() { return PerlinNoiseGenerator; });
class PerlinNoiseGenerator {
  // Used for perlin function
  // Used for PseudoRandom
  constructor(width, amp, wl, seed) {
    this.x = void 0;
    this.y = void 0;
    this.seed = void 0;
    this._width = void 0;
    this._amp = void 0;
    this._wl = void 0;
    this._a = void 0;
    this._b = void 0;
    this._M = void 0;
    this._A = void 0;
    this._C = void 0;
    this._Z = void 0;
    this._width = width;

    this._initPseudoRandomizer(seed);

    this._initPerlinNoise(amp, wl);
  }

  update(multiplier = 1) {
    const wl = Math.round(this._wl / multiplier);

    if (this.y % wl === 0) {
      this._a = this._b;
      this._b = this._pseudoRand();
      this.x = this._width / 2 + this._a * this._amp;
    } else {
      this.x = this._width / 2 + this._interpolate(this._a, this._b, this.y % wl / wl) * this._amp;
    }

    this.y++;
  }

  getRandom() {
    return this._pseudoRand() + 0.5;
  }

  _initPseudoRandomizer(seed) {
    this._M = 4294967296; // a - 1 should be divisible by m's prime factors

    this._A = 1664525; // c and m should be co-prime

    this._C = 1;
    this._Z = seed || Math.floor(Math.random() * this._M);
    this.seed = this._Z;
  }

  _pseudoRand() {
    this._Z = (this._A * this._Z + this._C) % this._M;
    return this._Z / this._M - 0.5;
  }

  _initPerlinNoise(amp, wl) {
    this.x = this._width / 2;
    this.y = 0;
    this._amp = amp; // amplitude

    this._wl = wl; // wavelength

    this._a = this._pseudoRand();
    this._b = this._pseudoRand();
  }

  _interpolate(pa, pb, px) {
    const ft = px * Math.PI,
          f = (1 - Math.cos(ft)) * 0.5;
    return pa * (1 - f) + pb * f;
  }

}

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/banana.svg":
/*!****************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/banana.svg ***!
  \****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBanana; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 41,
  height: 18,
  fill: "url(#pattern0)"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: 1,
  height: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#image0",
  transform: "translate(0 -0.0955882) scale(0.00321543 0.00735294)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
  id: "image0",
  width: 311,
  height: 162,
  xlinkHref: "data:image/png;base64,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"
}));

var SvgBanana = function SvgBanana(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 41,
    height: 18,
    viewBox: "0 0 41 18",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      mixBlendMode: "darken"
    }
  }, _ref2), _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "banana.a84dfe1.svg");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: PLAYER_CART, PLAYER_CART_HITBOX, OBSTACLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_CART", function() { return PLAYER_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_CART_HITBOX", function() { return PLAYER_CART_HITBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSTACLES", function() { return OBSTACLES; });
/* harmony import */ var _banana_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banana.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/banana.svg");
/* harmony import */ var _largeBox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./largeBox.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/largeBox.svg");
/* harmony import */ var _mediumBox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediumBox.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/mediumBox.svg");
/* harmony import */ var _oilSpill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oilSpill.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/oilSpill.svg");
/* harmony import */ var _playerCart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerCart.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/playerCart.svg");
/* harmony import */ var _smallBox_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smallBox.svg */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/smallBox.svg");






const PLAYER_CART = document.createElement('img');
PLAYER_CART.src = _playerCart_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
const PLAYER_CART_HITBOX = {
  x: 6,
  y: 6,
  width: 33,
  height: 80
};
const BANANA = document.createElement('img');
BANANA.src = _banana_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
const BANANA_HITBOX = {
  x: 0,
  y: 0,
  width: 41,
  height: 18
};
const SMALL_BOX = document.createElement('img');
SMALL_BOX.src = _smallBox_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
const SMALL_BOX_HITBOX = {
  x: 4,
  y: 0,
  width: 52,
  height: 48
};
const MEDIUM_BOX = document.createElement('img');
MEDIUM_BOX.src = _mediumBox_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
const MEDIUM_BOX_HITBOX = {
  x: 4,
  y: 0,
  width: 86,
  height: 48
};
const LARGE_BOX = document.createElement('img');
LARGE_BOX.src = _largeBox_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
const LARGE_BOX_HITBOX = {
  x: 4,
  y: 0,
  width: 122,
  height: 48
};
const OIL_SPILL = document.createElement('img');
OIL_SPILL.src = _oilSpill_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
const OIL_SPILL_HITBOX = {
  x: 0,
  y: 0,
  width: 41,
  height: 34
};
const OBSTACLES = [{
  image: BANANA,
  hitbox: BANANA_HITBOX
}, {
  image: OIL_SPILL,
  hitbox: OIL_SPILL_HITBOX
}, {
  image: SMALL_BOX,
  hitbox: SMALL_BOX_HITBOX
}, {
  image: MEDIUM_BOX,
  hitbox: MEDIUM_BOX_HITBOX
}, {
  image: LARGE_BOX,
  hitbox: LARGE_BOX_HITBOX
}];


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/largeBox.svg":
/*!******************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/largeBox.svg ***!
  \******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLargeBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter1_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M110.148 15.1348H123.735L125.733 26.8389H108.15L110.148 15.1348Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M108.15 26.8398H125.732L123.734 39.7547H110.148L108.15 26.8398Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter2_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M96.9613 14.5293H110.548L112.546 26.2334H94.9634L96.9613 14.5293Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M94.9631 26.2344H112.545L110.547 39.1493H96.9611L94.9631 26.2344Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter3_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M82.9755 16.3457H96.5617L98.5597 28.0498H80.9775L82.9755 16.3457Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M80.9775 28.0508H98.5597L96.5617 40.9657H82.9755L80.9775 28.0508Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter4_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M84.9743 1.61328H98.5605L100.558 13.3174H82.9763L84.9743 1.61328Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M82.9753 13.3184H100.557L98.5595 26.2332H84.9733L82.9753 13.3184Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter5_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M110.149 0H123.735L125.733 11.7041H108.151L110.149 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M108.15 11.7031H125.732L123.734 24.618H110.148L108.15 11.7031Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter6_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M98.559 2.82422H112.145L114.143 14.5283H96.561L98.559 2.82422Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M96.561 14.5293H114.143L112.145 27.4442H98.559L96.561 14.5293Z",
  fill: "#EF5350"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter7_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter8_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M74.1655 15.1348H87.7516L89.7496 26.8389H72.1675L74.1655 15.1348Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M72.1665 26.8398H89.7486L87.7507 39.7547H74.1645L72.1665 26.8398Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter9_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M60.9777 14.5293H74.5639L76.5619 26.2334H58.9797L60.9777 14.5293Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M58.9802 26.2344H76.5624L74.5644 39.1493H60.9782L58.9802 26.2344Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter10_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.9924 16.3457H60.5786L62.5765 28.0498H44.9944L46.9924 16.3457Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M44.9941 28.0508H62.5763L60.5783 40.9657H46.9921L44.9941 28.0508Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter11_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M48.9909 1.61328H62.5771L64.5751 13.3174H46.9929L48.9909 1.61328Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.9919 13.3184H64.5741L62.5761 26.2332H48.9899L46.9919 13.3184Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter12_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M74.1655 0H87.7516L89.7496 11.7041H72.1675L74.1655 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M72.1665 11.7031H89.7486L87.7507 24.618H74.1645L72.1665 11.7031Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter13_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M62.5756 2.82422H76.1618L78.1598 14.5283H60.5776L62.5756 2.82422Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M60.5776 14.5293H78.1598L76.1618 27.4442H62.5756L60.5776 14.5293Z",
  fill: "#EF5350"
})));

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter14_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter15_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M33.1713 15.1348H46.7575L48.7555 26.8389H31.1733L33.1713 15.1348Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M31.1721 26.8398H48.7543L46.7563 39.7547H33.1701L31.1721 26.8398Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter16_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.9836 14.5293H33.5698L35.5677 26.2334H17.9856L19.9836 14.5293Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M17.9858 26.2344H35.568L33.57 39.1493H19.9838L17.9858 26.2344Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter17_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.99797 16.3457H19.5842L21.5821 28.0498H4L5.99797 16.3457Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M4 28.0508H21.5821L19.5842 40.9657H5.99797L4 28.0508Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter18_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M7.99553 1.61328H21.5817L23.5797 13.3174H5.99756L7.99553 1.61328Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.99756 13.3184H23.5797L21.5817 26.2332H7.99553L5.99756 13.3184Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter19_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M33.1713 0H46.7575L48.7555 11.7041H31.1733L33.1713 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M31.1721 11.7031H48.7543L46.7563 24.618H33.1701L31.1721 11.7031Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter20_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21.5815 2.82422H35.1677L37.1656 14.5283H19.5835L21.5815 2.82422Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.5837 14.5293H37.1659L35.1679 27.4442H21.5817L19.5837 14.5293Z",
  fill: "#EF5350"
})));

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter0_d",
  x: 80.9775,
  y: 0,
  width: 64.7552,
  height: 60.9657,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter1_d",
  x: 104.15,
  y: 15.1348,
  width: 25.5826,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter2_d",
  x: 90.9631,
  y: 14.5293,
  width: 25.5824,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter3_d",
  x: 76.9775,
  y: 16.3457,
  width: 25.5821,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter4_d",
  x: 78.9753,
  y: 1.61328,
  width: 25.5831,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter5_d",
  x: 104.15,
  y: 0,
  width: 25.5829,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter6_d",
  x: 92.561,
  y: 2.82422,
  width: 25.5821,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter7_d",
  x: 44.9941,
  y: 0,
  width: 64.7555,
  height: 60.9657,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter8_d",
  x: 68.1665,
  y: 15.1348,
  width: 25.5831,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter9_d",
  x: 54.9797,
  y: 14.5293,
  width: 25.5826,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter10_d",
  x: 40.9941,
  y: 16.3457,
  width: 25.5824,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter11_d",
  x: 42.9919,
  y: 1.61328,
  width: 25.5831,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter12_d",
  x: 68.1665,
  y: 0,
  width: 25.5831,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter13_d",
  x: 56.5776,
  y: 2.82422,
  width: 25.5821,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter14_d",
  x: 4,
  y: 0,
  width: 64.7555,
  height: 60.9657,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter15_d",
  x: 27.1721,
  y: 15.1348,
  width: 25.5834,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter16_d",
  x: 13.9856,
  y: 14.5293,
  width: 25.5824,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter17_d",
  x: 0,
  y: 16.3457,
  width: 25.5821,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter18_d",
  x: 1.99756,
  y: 1.61328,
  width: 25.5821,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter19_d",
  x: 27.1721,
  y: 0,
  width: 25.5834,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter20_d",
  x: 15.5835,
  y: 2.82422,
  width: 25.5824,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgLargeBox = function SvgLargeBox(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 146,
    height: 61,
    viewBox: "0 0 146 61",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3, _ref4, _ref5);
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "largeBox.81de070.svg");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/left-arrow.svg":
/*!********************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/left-arrow.svg ***!
  \********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLeftArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M16.99 20H29V22H16.99V25L13 21L16.99 17V20Z",
  fill: "#E3E3E3"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: -0.5,
  y: 0.5,
  width: 41,
  height: 41,
  rx: 3.5,
  transform: "matrix(-1 0 0 1 41 0)",
  stroke: "#E3E3E3"
});

var SvgLeftArrow = function SvgLeftArrow(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 42,
    height: 42,
    viewBox: "0 0 42 42",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2Ljk5IDIwSDI5VjIySDE2Ljk5VjI1TDEzIDIxTDE2Ljk5IDE3VjIwWiIgZmlsbD0iI0UzRTNFMyIvPgo8cmVjdCB4PSItMC41IiB5PSIwLjUiIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSIgcng9IjMuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNDEgMCkiIHN0cm9rZT0iI0UzRTNFMyIvPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/mediumBox.svg":
/*!*******************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/mediumBox.svg ***!
  \*******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMediumBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter1_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M74.164 15.1348H87.7502L89.7482 26.8389H72.166L74.164 15.1348Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M72.1658 26.8379H89.7479L87.7499 39.7528H74.1637L72.1658 26.8379Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter2_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M60.9767 14.5293H74.5629L76.5609 26.2334H58.9788L60.9767 14.5293Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M58.979 26.2324H76.5611L74.5632 39.1473H60.977L58.979 26.2324Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter3_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.9921 16.3457H60.5783L62.5763 28.0498H44.9941L46.9921 16.3457Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M44.9937 28.0488H62.5758L60.5778 40.9637H46.9916L44.9937 28.0488Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter4_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M48.9894 1.61328H62.5756L64.5736 13.3174H46.9915L48.9894 1.61328Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.9917 13.3164H64.5738L62.5759 26.2313H48.9897L46.9917 13.3164Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter5_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M74.164 0H87.7502L89.7482 11.7041H72.166L74.164 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M72.1658 11.7051H89.7479L87.7499 24.62H74.1637L72.1658 11.7051Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter6_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M62.5756 2.82422H76.1618L78.1598 14.5283H60.5776L62.5756 2.82422Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M60.5771 14.5273H78.1593L76.1613 27.4422H62.5751L60.5771 14.5273Z",
  fill: "#EF5350"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter7_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter8_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M33.1708 15.1348H46.757L48.755 26.8389H31.1729L33.1708 15.1348Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M31.1724 26.8379H48.7545L46.7565 39.7528H33.1703L31.1724 26.8379Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter9_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.9831 14.5293H33.5693L35.5672 26.2334H17.9851L19.9831 14.5293Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M17.9854 26.2324H35.5675L33.5695 39.1473H19.9833L17.9854 26.2324Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter10_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.99797 16.3457H19.5842L21.5821 28.0498H4L5.99797 16.3457Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M4 28.0488H21.5821L19.5842 40.9637H5.99797L4 28.0488Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter11_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M7.99577 1.61328H21.582L23.5799 13.3174H5.9978L7.99577 1.61328Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.99854 13.3164H23.5807L21.5827 26.2313H7.99651L5.99854 13.3164Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter12_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M33.1708 0H46.757L48.755 11.7041H31.1729L33.1708 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M31.1724 11.7051H48.7545L46.7565 24.62H33.1703L31.1724 11.7051Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter13_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21.5817 2.82422H35.1679L37.1659 14.5283H19.5837L21.5817 2.82422Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.5835 14.5273H37.1656L35.1677 27.4422H21.5815L19.5835 14.5273Z",
  fill: "#EF5350"
})));

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter0_d",
  x: 44.9937,
  y: 0,
  width: 64.7545,
  height: 60.9637,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter1_d",
  x: 68.1658,
  y: 15.1348,
  width: 25.5824,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter2_d",
  x: 54.9788,
  y: 14.5293,
  width: 25.5824,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter3_d",
  x: 40.9937,
  y: 16.3457,
  width: 25.5826,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter4_d",
  x: 42.9915,
  y: 1.61328,
  width: 25.5824,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter5_d",
  x: 68.1658,
  y: 0,
  width: 25.5824,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter6_d",
  x: 56.5771,
  y: 2.82422,
  width: 25.5826,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter7_d",
  x: 4,
  y: 0,
  width: 64.755,
  height: 60.9637,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter8_d",
  x: 27.1724,
  y: 15.1348,
  width: 25.5826,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter9_d",
  x: 13.9851,
  y: 14.5293,
  width: 25.5824,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter10_d",
  x: 0,
  y: 16.3457,
  width: 25.5821,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter11_d",
  x: 1.9978,
  y: 1.61328,
  width: 25.5829,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter12_d",
  x: 27.1724,
  y: 0,
  width: 25.5826,
  height: 32.62,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter13_d",
  x: 15.5835,
  y: 2.82422,
  width: 25.5824,
  height: 32.618,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgMediumBox = function SvgMediumBox(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 110,
    height: 61,
    viewBox: "0 0 110 61",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3, _ref4);
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "mediumBox.ff248fd.svg");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/oilSpill.svg":
/*!******************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/oilSpill.svg ***!
  \******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgOilSpill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M18.5259 4.40719C13.8145 -1.42546 12.4288 8.57338 7.99462 15.517C1.34331 13.2952 -4.19945 23.8492 4.39183 23.2937C12.9831 22.7382 18.5259 25.7934 9.65745 28.5709C0.789033 31.3484 10.2117 36.3478 18.5259 32.7371C26.84 29.1264 54.2767 25.5157 33.2142 16.9056C12.1517 8.29548 27.9486 15.517 33.2142 8.85103C38.4798 2.18503 27.1171 -4.75851 27.9486 4.40719C28.78 13.5729 23.2372 10.2399 18.5259 4.40719Z",
  fill: "#333333"
});

var SvgOilSpill = function SvgOilSpill(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 41,
    height: 34,
    viewBox: "0 0 41 34",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA0MSAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjUyNTkgNC40MDcxOUMxMy44MTQ1IC0xLjQyNTQ2IDEyLjQyODggOC41NzMzOCA3Ljk5NDYyIDE1LjUxN0MxLjM0MzMxIDEzLjI5NTIgLTQuMTk5NDUgMjMuODQ5MiA0LjM5MTgzIDIzLjI5MzdDMTIuOTgzMSAyMi43MzgyIDE4LjUyNTkgMjUuNzkzNCA5LjY1NzQ1IDI4LjU3MDlDMC43ODkwMzMgMzEuMzQ4NCAxMC4yMTE3IDM2LjM0NzggMTguNTI1OSAzMi43MzcxQzI2Ljg0IDI5LjEyNjQgNTQuMjc2NyAyNS41MTU3IDMzLjIxNDIgMTYuOTA1NkMxMi4xNTE3IDguMjk1NDggMjcuOTQ4NiAxNS41MTcgMzMuMjE0MiA4Ljg1MTAzQzM4LjQ3OTggMi4xODUwMyAyNy4xMTcxIC00Ljc1ODUxIDI3Ljk0ODYgNC40MDcxOUMyOC43OCAxMy41NzI5IDIzLjIzNzIgMTAuMjM5OSAxOC41MjU5IDQuNDA3MTlaIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/playerCart.svg":
/*!********************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/playerCart.svg ***!
  \********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPlayerCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 30.1411,
  y: 76.8457,
  width: 3.64391,
  height: 7.36069,
  rx: 1,
  fill: "#333333"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 11.4658,
  y: 76.8457,
  width: 3.64391,
  height: 7.36069,
  rx: 1,
  fill: "#333333"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter1_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M9.49358 21.3555H23.465L25.5196 33.3914H7.43896L9.49358 21.3555Z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M7.43848 33.3926H25.5191L23.4645 46.6736H9.49309L7.43848 33.3926Z",
  fill: "#9B9B9B"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter2_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.0551 6H22.0265L24.0811 18.0359H6.00049L8.0551 6Z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M6 18.0352H24.0806L22.026 31.3162H8.05461L6 18.0352Z",
  fill: "#9B9B9B"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter3_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M23.2582 23.0156H37.2296L39.2842 35.0515H21.2036L23.2582 23.0156Z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21.2036 35.0508H39.2842L37.2296 48.3318H23.2582L21.2036 35.0508Z",
  fill: "#9B9B9B"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter4_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21.8207 7.66016H35.7921L37.8467 19.6961H19.7661L21.8207 7.66016Z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19.7666 19.6973H37.8472L35.7926 32.9783H21.8212L19.7666 19.6973Z",
  fill: "#9B9B9B"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.5686 55.3887H34.4811L35.0185 65.4293L31.5257 79.5403H13.5241L10.0313 65.4293L10.5686 55.3887Z",
  fill: "#333333"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  rx: 1.25159,
  ry: 1.58493,
  transform: "matrix(0.788469 0.615074 -0.607455 0.794354 18.4293 57.146)",
  fill: "#EDB7AB"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  rx: 2.86155,
  ry: 3.62369,
  transform: "matrix(0.788469 0.615074 -0.607455 0.794354 20.6673 59.2128)",
  fill: "#E4002B"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 28.0327,
  y: 69.498,
  width: 1.3434,
  height: 1.6282,
  fill: "#CA2826"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  cx: 20.2405,
  cy: 71.9421,
  rx: 4.83624,
  ry: 2.98504,
  fill: "#3A526C"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M15.1361 63.5283C14.4913 63.5283 14.3301 64.7947 14.3301 65.4279C14.4644 67.1918 15.8078 68.1416 16.0765 68.5486C16.3452 68.9557 14.8674 69.6341 15.1361 70.0412C15.4048 70.4482 17.0169 71.9407 17.9573 72.6191C18.8976 73.2976 21.9875 72.8905 23.5995 72.8905C25.2116 72.8905 25.6146 70.9909 25.8833 70.0412C26.152 69.0914 25.4803 69.6341 25.0773 68.9557C24.6743 68.2773 25.749 64.3424 25.6146 63.664C25.4803 62.9856 23.4652 63.5283 22.6592 63.3927C21.8531 63.257 22.5248 64.2068 22.5248 64.8852C22.5248 65.5636 20.6441 65.9706 19.3007 65.835C17.9573 65.6993 18.2259 64.8852 17.9573 63.9354C17.6886 62.9856 15.9422 63.5283 15.1361 63.5283Z",
  fill: "#EFFA32"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 18.0918,
  y: 75.1973,
  width: 5.64228,
  height: 0.814101,
  fill: "#79521B"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 28.3013,
  y: 73.5703,
  width: 2.6868,
  height: 1.89957,
  fill: "#A5A492"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 28.5698,
  y: 72.7559,
  width: 1.61208,
  height: 0.542734,
  fill: "#739D85"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 62.4434,
  width: 23.9125,
  height: 1.89957,
  fill: "#8591A9"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 64.3438,
  width: 23.9125,
  height: 1.08547,
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 48.332,
  width: 23.9125,
  height: 0.271367,
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 51.3184,
  width: 23.9125,
  height: 0.271367,
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 54.5742,
  width: 23.9125,
  height: 0.271367,
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 10.5679,
  y: 48.332,
  width: 16.5534,
  height: 1.07472,
  transform: "rotate(90 10.5679 48.332)",
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 35.5557,
  y: 48.332,
  width: 16.5534,
  height: 1.07472,
  transform: "rotate(90 35.5557 48.332)",
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.5692 64.8867L14.062 78.5908L12.9873 78.5908L9.49444 64.8867L10.5692 64.8867Z",
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M34.4816 64.8867L30.9888 78.5908L32.0635 78.5908L35.5563 64.8867L34.4816 64.8867Z",
  fill: "#1F2523"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12.9863 78.4551H32.0626L30.0755 86.3247H15.5033L12.9863 78.4551Z",
  fill: "#E4002B"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 16.021,
  y: 34.0625,
  width: 2.27744,
  height: 18.4017,
  fill: "#2A2B2C"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 27.8638,
  y: 34.0625,
  width: 2.73293,
  height: 18.4017,
  fill: "#2A2B2C"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 14.5991,
  y: 31.7793,
  width: 16.3895,
  height: 2.17094,
  fill: "#8591A9"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 14.5991,
  y: 29.3379,
  width: 16.3895,
  height: 2.17094,
  fill: "#02131B"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 30.9888,
  y: 28.5234,
  width: 1.07472,
  height: 5.15597,
  fill: "#6883A1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 13.5239,
  y: 28.5234,
  width: 1.07472,
  height: 5.15597,
  fill: "#6883A1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 15.4053,
  y: 27.166,
  width: 1.88076,
  height: 1.89957,
  fill: "#0A0B0F"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 28.5703,
  y: 27.166,
  width: 1.88076,
  height: 1.89957,
  fill: "#0A0B0F"
}));

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter0_d",
  x: 0,
  y: 0,
  width: 65.2842,
  height: 112.325,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMorphology", {
  radius: 6,
  operator: "dilate",
  "in": "SourceAlpha",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0.0196078 0 0 0 0 0.0784314 0 0 0 0 0.607843 0 0 0 0.08 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter1_d",
  x: 3.43848,
  y: 21.3555,
  width: 26.0811,
  height: 33.3181,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter2_d",
  x: 2,
  y: 6,
  width: 26.0811,
  height: 33.3162,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter3_d",
  x: 17.2036,
  y: 23.0156,
  width: 26.0806,
  height: 33.3162,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter4_d",
  x: 15.7661,
  y: 7.66016,
  width: 26.0811,
  height: 33.3181,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgPlayerCart = function SvgPlayerCart(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 66,
    height: 113,
    viewBox: "0 0 66 113",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3, _ref4, _ref5);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iMTEzIiB2aWV3Qm94PSIwIDAgNjYgMTEzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIzMC4xNDExIiB5PSI3Ni44NDU3IiB3aWR0aD0iMy42NDM5MSIgaGVpZ2h0PSI3LjM2MDY5IiByeD0iMSIgZmlsbD0iIzMzMzMzMyIvPgo8cmVjdCB4PSIxMS40NjU4IiB5PSI3Ni44NDU3IiB3aWR0aD0iMy42NDM5MSIgaGVpZ2h0PSI3LjM2MDY5IiByeD0iMSIgZmlsbD0iIzMzMzMzMyIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2QpIj4KPHBhdGggZD0iTTkuNDkzNTggMjEuMzU1NUgyMy40NjVMMjUuNTE5NiAzMy4zOTE0SDcuNDM4OTZMOS40OTM1OCAyMS4zNTU1WiIgZmlsbD0iI0Q4RDhEOCIvPgo8cGF0aCBkPSJNNy40Mzg0OCAzMy4zOTI2SDI1LjUxOTFMMjMuNDY0NSA0Ni42NzM2SDkuNDkzMDlMNy40Mzg0OCAzMy4zOTI2WiIgZmlsbD0iIzlCOUI5QiIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2QpIj4KPHBhdGggZD0iTTguMDU1MSA2SDIyLjAyNjVMMjQuMDgxMSAxOC4wMzU5SDYuMDAwNDlMOC4wNTUxIDZaIiBmaWxsPSIjRDhEOEQ4Ii8+CjxwYXRoIGQ9Ik02IDE4LjAzNTJIMjQuMDgwNkwyMi4wMjYgMzEuMzE2Mkg4LjA1NDYxTDYgMTguMDM1MloiIGZpbGw9IiM5QjlCOUIiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19kKSI+CjxwYXRoIGQ9Ik0yMy4yNTgyIDIzLjAxNTZIMzcuMjI5NkwzOS4yODQyIDM1LjA1MTVIMjEuMjAzNkwyMy4yNTgyIDIzLjAxNTZaIiBmaWxsPSIjRDhEOEQ4Ii8+CjxwYXRoIGQ9Ik0yMS4yMDM2IDM1LjA1MDhIMzkuMjg0MkwzNy4yMjk2IDQ4LjMzMThIMjMuMjU4MkwyMS4yMDM2IDM1LjA1MDhaIiBmaWxsPSIjOUI5QjlCIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjRfZCkiPgo8cGF0aCBkPSJNMjEuODIwNyA3LjY2MDE2SDM1Ljc5MjFMMzcuODQ2NyAxOS42OTYxSDE5Ljc2NjFMMjEuODIwNyA3LjY2MDE2WiIgZmlsbD0iI0Q4RDhEOCIvPgo8cGF0aCBkPSJNMTkuNzY2NiAxOS42OTczSDM3Ljg0NzJMMzUuNzkyNiAzMi45NzgzSDIxLjgyMTJMMTkuNzY2NiAxOS42OTczWiIgZmlsbD0iIzlCOUI5QiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMC41Njg2IDU1LjM4ODdIMzQuNDgxMUwzNS4wMTg1IDY1LjQyOTNMMzEuNTI1NyA3OS41NDAzSDEzLjUyNDFMMTAuMDMxMyA2NS40MjkzTDEwLjU2ODYgNTUuMzg4N1oiIGZpbGw9IiMzMzMzMzMiLz4KPGVsbGlwc2Ugcng9IjEuMjUxNTkiIHJ5PSIxLjU4NDkzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjc4ODQ2OSAwLjYxNTA3NCAtMC42MDc0NTUgMC43OTQzNTQgMTguNDI5MyA1Ny4xNDYpIiBmaWxsPSIjRURCN0FCIi8+CjxlbGxpcHNlIHJ4PSIyLjg2MTU1IiByeT0iMy42MjM2OSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43ODg0NjkgMC42MTUwNzQgLTAuNjA3NDU1IDAuNzk0MzU0IDIwLjY2NzMgNTkuMjEyOCkiIGZpbGw9IiNFNDAwMkIiLz4KPHJlY3QgeD0iMjguMDMyNyIgeT0iNjkuNDk4IiB3aWR0aD0iMS4zNDM0IiBoZWlnaHQ9IjEuNjI4MiIgZmlsbD0iI0NBMjgyNiIvPgo8ZWxsaXBzZSBjeD0iMjAuMjQwNSIgY3k9IjcxLjk0MjEiIHJ4PSI0LjgzNjI0IiByeT0iMi45ODUwNCIgZmlsbD0iIzNBNTI2QyIvPgo8cGF0aCBkPSJNMTUuMTM2MSA2My41MjgzQzE0LjQ5MTMgNjMuNTI4MyAxNC4zMzAxIDY0Ljc5NDcgMTQuMzMwMSA2NS40Mjc5QzE0LjQ2NDQgNjcuMTkxOCAxNS44MDc4IDY4LjE0MTYgMTYuMDc2NSA2OC41NDg2QzE2LjM0NTIgNjguOTU1NyAxNC44Njc0IDY5LjYzNDEgMTUuMTM2MSA3MC4wNDEyQzE1LjQwNDggNzAuNDQ4MiAxNy4wMTY5IDcxLjk0MDcgMTcuOTU3MyA3Mi42MTkxQzE4Ljg5NzYgNzMuMjk3NiAyMS45ODc1IDcyLjg5MDUgMjMuNTk5NSA3Mi44OTA1QzI1LjIxMTYgNzIuODkwNSAyNS42MTQ2IDcwLjk5MDkgMjUuODgzMyA3MC4wNDEyQzI2LjE1MiA2OS4wOTE0IDI1LjQ4MDMgNjkuNjM0MSAyNS4wNzczIDY4Ljk1NTdDMjQuNjc0MyA2OC4yNzczIDI1Ljc0OSA2NC4zNDI0IDI1LjYxNDYgNjMuNjY0QzI1LjQ4MDMgNjIuOTg1NiAyMy40NjUyIDYzLjUyODMgMjIuNjU5MiA2My4zOTI3QzIxLjg1MzEgNjMuMjU3IDIyLjUyNDggNjQuMjA2OCAyMi41MjQ4IDY0Ljg4NTJDMjIuNTI0OCA2NS41NjM2IDIwLjY0NDEgNjUuOTcwNiAxOS4zMDA3IDY1LjgzNUMxNy45NTczIDY1LjY5OTMgMTguMjI1OSA2NC44ODUyIDE3Ljk1NzMgNjMuOTM1NEMxNy42ODg2IDYyLjk4NTYgMTUuOTQyMiA2My41MjgzIDE1LjEzNjEgNjMuNTI4M1oiIGZpbGw9IiNFRkZBMzIiLz4KPHJlY3QgeD0iMTguMDkxOCIgeT0iNzUuMTk3MyIgd2lkdGg9IjUuNjQyMjgiIGhlaWdodD0iMC44MTQxMDEiIGZpbGw9IiM3OTUyMUIiLz4KPHJlY3QgeD0iMjguMzAxMyIgeT0iNzMuNTcwMyIgd2lkdGg9IjIuNjg2OCIgaGVpZ2h0PSIxLjg5OTU3IiBmaWxsPSIjQTVBNDkyIi8+CjxyZWN0IHg9IjI4LjU2OTgiIHk9IjcyLjc1NTkiIHdpZHRoPSIxLjYxMjA4IiBoZWlnaHQ9IjAuNTQyNzM0IiBmaWxsPSIjNzM5RDg1Ii8+CjxyZWN0IHg9IjEwLjU2NzkiIHk9IjYyLjQ0MzQiIHdpZHRoPSIyMy45MTI1IiBoZWlnaHQ9IjEuODk5NTciIGZpbGw9IiM4NTkxQTkiLz4KPHJlY3QgeD0iMTAuNTY3OSIgeT0iNjQuMzQzOCIgd2lkdGg9IjIzLjkxMjUiIGhlaWdodD0iMS4wODU0NyIgZmlsbD0iIzFGMjUyMyIvPgo8cmVjdCB4PSIxMC41Njc5IiB5PSI0OC4zMzIiIHdpZHRoPSIyMy45MTI1IiBoZWlnaHQ9IjAuMjcxMzY3IiBmaWxsPSIjMUYyNTIzIi8+CjxyZWN0IHg9IjEwLjU2NzkiIHk9IjUxLjMxODQiIHdpZHRoPSIyMy45MTI1IiBoZWlnaHQ9IjAuMjcxMzY3IiBmaWxsPSIjMUYyNTIzIi8+CjxyZWN0IHg9IjEwLjU2NzkiIHk9IjU0LjU3NDIiIHdpZHRoPSIyMy45MTI1IiBoZWlnaHQ9IjAuMjcxMzY3IiBmaWxsPSIjMUYyNTIzIi8+CjxyZWN0IHg9IjEwLjU2NzkiIHk9IjQ4LjMzMiIgd2lkdGg9IjE2LjU1MzQiIGhlaWdodD0iMS4wNzQ3MiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTAuNTY3OSA0OC4zMzIpIiBmaWxsPSIjMUYyNTIzIi8+CjxyZWN0IHg9IjM1LjU1NTciIHk9IjQ4LjMzMiIgd2lkdGg9IjE2LjU1MzQiIGhlaWdodD0iMS4wNzQ3MiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMzUuNTU1NyA0OC4zMzIpIiBmaWxsPSIjMUYyNTIzIi8+CjxwYXRoIGQ9Ik0xMC41NjkyIDY0Ljg4NjdMMTQuMDYyIDc4LjU5MDhMMTIuOTg3MyA3OC41OTA4TDkuNDk0NDQgNjQuODg2N0wxMC41NjkyIDY0Ljg4NjdaIiBmaWxsPSIjMUYyNTIzIi8+CjxwYXRoIGQ9Ik0zNC40ODE2IDY0Ljg4NjdMMzAuOTg4OCA3OC41OTA4TDMyLjA2MzUgNzguNTkwOEwzNS41NTYzIDY0Ljg4NjdMMzQuNDgxNiA2NC44ODY3WiIgZmlsbD0iIzFGMjUyMyIvPgo8cGF0aCBkPSJNMTIuOTg2MyA3OC40NTUxSDMyLjA2MjZMMzAuMDc1NSA4Ni4zMjQ3SDE1LjUwMzNMMTIuOTg2MyA3OC40NTUxWiIgZmlsbD0iI0U0MDAyQiIvPgo8cmVjdCB4PSIxNi4wMjEiIHk9IjM0LjA2MjUiIHdpZHRoPSIyLjI3NzQ0IiBoZWlnaHQ9IjE4LjQwMTciIGZpbGw9IiMyQTJCMkMiLz4KPHJlY3QgeD0iMjcuODYzOCIgeT0iMzQuMDYyNSIgd2lkdGg9IjIuNzMyOTMiIGhlaWdodD0iMTguNDAxNyIgZmlsbD0iIzJBMkIyQyIvPgo8cmVjdCB4PSIxNC41OTkxIiB5PSIzMS43NzkzIiB3aWR0aD0iMTYuMzg5NSIgaGVpZ2h0PSIyLjE3MDk0IiBmaWxsPSIjODU5MUE5Ii8+CjxyZWN0IHg9IjE0LjU5OTEiIHk9IjI5LjMzNzkiIHdpZHRoPSIxNi4zODk1IiBoZWlnaHQ9IjIuMTcwOTQiIGZpbGw9IiMwMjEzMUIiLz4KPHJlY3QgeD0iMzAuOTg4OCIgeT0iMjguNTIzNCIgd2lkdGg9IjEuMDc0NzIiIGhlaWdodD0iNS4xNTU5NyIgZmlsbD0iIzY4ODNBMSIvPgo8cmVjdCB4PSIxMy41MjM5IiB5PSIyOC41MjM0IiB3aWR0aD0iMS4wNzQ3MiIgaGVpZ2h0PSI1LjE1NTk3IiBmaWxsPSIjNjg4M0ExIi8+CjxyZWN0IHg9IjE1LjQwNTMiIHk9IjI3LjE2NiIgd2lkdGg9IjEuODgwNzYiIGhlaWdodD0iMS44OTk1NyIgZmlsbD0iIzBBMEIwRiIvPgo8cmVjdCB4PSIyOC41NzAzIiB5PSIyNy4xNjYiIHdpZHRoPSIxLjg4MDc2IiBoZWlnaHQ9IjEuODk5NTciIGZpbGw9IiMwQTBCMEYiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjUuMjg0MiIgaGVpZ2h0PSIxMTIuMzI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU1vcnBob2xvZ3kgcmFkaXVzPSI2IiBvcGVyYXRvcj0iZGlsYXRlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZU9mZnNldCBkeD0iMTAiIGR5PSIxMCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMDE5NjA3OCAwIDAgMCAwIDAuMDc4NDMxNCAwIDAgMCAwIDAuNjA3ODQzIDAgMCAwIDAuMDggMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9kIiB4PSIzLjQzODQ4IiB5PSIyMS4zNTU1IiB3aWR0aD0iMjYuMDgxMSIgaGVpZ2h0PSIzMy4zMTgxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZCIgeD0iMiIgeT0iNiIgd2lkdGg9IjI2LjA4MTEiIGhlaWdodD0iMzMuMzE2MiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIzX2QiIHg9IjE3LjIwMzYiIHk9IjIzLjAxNTYiIHdpZHRoPSIyNi4wODA2IiBoZWlnaHQ9IjMzLjMxNjIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyNF9kIiB4PSIxNS43NjYxIiB5PSI3LjY2MDE2IiB3aWR0aD0iMjYuMDgxMSIgaGVpZ2h0PSIzMy4zMTgxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/right-arrow.svg":
/*!*********************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/right-arrow.svg ***!
  \*********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRightArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M25.01 20H13V22H25.01V25L29 21L25.01 17V20Z",
  fill: "#E3E3E3"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 0.5,
  y: 0.5,
  width: 41,
  height: 41,
  rx: 3.5,
  stroke: "#E3E3E3"
});

var SvgRightArrow = function SvgRightArrow(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 42,
    height: 42,
    viewBox: "0 0 42 42",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjAxIDIwSDEzVjIySDI1LjAxVjI1TDI5IDIxTDI1LjAxIDE3VjIwWiIgZmlsbD0iI0UzRTNFMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQxIiBoZWlnaHQ9IjQxIiByeD0iMy41IiBzdHJva2U9IiNFM0UzRTMiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGame/resources/smallBox.svg":
/*!******************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGame/resources/smallBox.svg ***!
  \******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSmallBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter1_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M38.1498 17.7188H54.0552L56.3942 31.4208H35.8108L38.1498 17.7188Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M35.8108 31.4199H56.3942L54.0552 46.5394H38.1498L35.8108 31.4199Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter2_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M22.7123 17.0098H38.6177L40.9567 30.7118H20.3733L22.7123 17.0098Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M20.3735 30.7129H40.957L38.6179 45.8324H22.7126L20.3735 30.7129Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter3_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M6.33903 19.1367H22.2444L24.5834 32.8387H4L6.33903 19.1367Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M4.00049 32.8398H24.5839L22.2449 47.9593H6.33952L4.00049 32.8398Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter4_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.67814 1.88867H24.5835L26.9226 15.5907H6.33911L8.67814 1.88867Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M6.33911 15.5879H26.9226L24.5835 30.7074H8.67814L6.33911 15.5879Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter5_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M38.1501 0H54.0554L56.3945 13.702H35.811L38.1501 0Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M35.8108 13.7031H56.3942L54.0552 28.8226H38.1498L35.8108 13.7031Z",
  fill: "#EF5350"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter6_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M24.5829 3.30664H40.4883L42.8273 17.0087H22.2439L24.5829 3.30664Z",
  fill: "#FFCBCA"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M22.2439 17.0078H42.8273L40.4883 32.1273H24.5829L22.2439 17.0078Z",
  fill: "#EF5350"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter0_d",
  x: 4,
  y: 0,
  width: 72.3945,
  height: 67.9593,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: 10,
  dy: 10
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter1_d",
  x: 31.8108,
  y: 17.7188,
  width: 28.5834,
  height: 36.8206,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter2_d",
  x: 16.3733,
  y: 17.0098,
  width: 28.5837,
  height: 36.8226,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter3_d",
  x: 0,
  y: 19.1367,
  width: 28.5839,
  height: 36.8226,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter4_d",
  x: 2.33911,
  y: 1.88867,
  width: 28.5834,
  height: 36.8187,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter5_d",
  x: 31.8108,
  y: 0,
  width: 28.5837,
  height: 36.8226,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter6_d",
  x: 18.2439,
  y: 3.30664,
  width: 28.5834,
  height: 36.8206,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgSmallBox = function SvgSmallBox(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 77,
    height: 68,
    viewBox: "0 0 77 68",
    fill: "none"
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title) : null, _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA3NyA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kKSI+CjxwYXRoIGQ9Ik0zOC4xNDk4IDE3LjcxODhINTQuMDU1Mkw1Ni4zOTQyIDMxLjQyMDhIMzUuODEwOEwzOC4xNDk4IDE3LjcxODhaIiBmaWxsPSIjRkZDQkNBIi8+CjxwYXRoIGQ9Ik0zNS44MTA4IDMxLjQxOTlINTYuMzk0Mkw1NC4wNTUyIDQ2LjUzOTRIMzguMTQ5OEwzNS44MTA4IDMxLjQxOTlaIiBmaWxsPSIjRUY1MzUwIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZCkiPgo8cGF0aCBkPSJNMjIuNzEyMyAxNy4wMDk4SDM4LjYxNzdMNDAuOTU2NyAzMC43MTE4SDIwLjM3MzNMMjIuNzEyMyAxNy4wMDk4WiIgZmlsbD0iI0ZGQ0JDQSIvPgo8cGF0aCBkPSJNMjAuMzczNSAzMC43MTI5SDQwLjk1N0wzOC42MTc5IDQ1LjgzMjRIMjIuNzEyNkwyMC4zNzM1IDMwLjcxMjlaIiBmaWxsPSIjRUY1MzUwIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjNfZCkiPgo8cGF0aCBkPSJNNi4zMzkwMyAxOS4xMzY3SDIyLjI0NDRMMjQuNTgzNCAzMi44Mzg3SDRMNi4zMzkwMyAxOS4xMzY3WiIgZmlsbD0iI0ZGQ0JDQSIvPgo8cGF0aCBkPSJNNC4wMDA0OSAzMi44Mzk4SDI0LjU4MzlMMjIuMjQ0OSA0Ny45NTkzSDYuMzM5NTJMNC4wMDA0OSAzMi44Mzk4WiIgZmlsbD0iI0VGNTM1MCIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXI0X2QpIj4KPHBhdGggZD0iTTguNjc4MTQgMS44ODg2N0gyNC41ODM1TDI2LjkyMjYgMTUuNTkwN0g2LjMzOTExTDguNjc4MTQgMS44ODg2N1oiIGZpbGw9IiNGRkNCQ0EiLz4KPHBhdGggZD0iTTYuMzM5MTEgMTUuNTg3OUgyNi45MjI2TDI0LjU4MzUgMzAuNzA3NEg4LjY3ODE0TDYuMzM5MTEgMTUuNTg3OVoiIGZpbGw9IiNFRjUzNTAiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyNV9kKSI+CjxwYXRoIGQ9Ik0zOC4xNTAxIDBINTQuMDU1NEw1Ni4zOTQ1IDEzLjcwMkgzNS44MTFMMzguMTUwMSAwWiIgZmlsbD0iI0ZGQ0JDQSIvPgo8cGF0aCBkPSJNMzUuODEwOCAxMy43MDMxSDU2LjM5NDJMNTQuMDU1MiAyOC44MjI2SDM4LjE0OThMMzUuODEwOCAxMy43MDMxWiIgZmlsbD0iI0VGNTM1MCIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXI2X2QpIj4KPHBhdGggZD0iTTI0LjU4MjkgMy4zMDY2NEg0MC40ODgzTDQyLjgyNzMgMTcuMDA4N0gyMi4yNDM5TDI0LjU4MjkgMy4zMDY2NFoiIGZpbGw9IiNGRkNCQ0EiLz4KPHBhdGggZD0iTTIyLjI0MzkgMTcuMDA3OEg0Mi44MjczTDQwLjQ4ODMgMzIuMTI3M0gyNC41ODI5TDIyLjI0MzkgMTcuMDA3OFoiIGZpbGw9IiNFRjUzNTAiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjQiIHk9IjAiIHdpZHRoPSI3Mi4zOTQ1IiBoZWlnaHQ9IjY3Ljk1OTMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR4PSIxMCIgZHk9IjEwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2QiIHg9IjMxLjgxMDgiIHk9IjE3LjcxODgiIHdpZHRoPSIyOC41ODM0IiBoZWlnaHQ9IjM2LjgyMDYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9kIiB4PSIxNi4zNzMzIiB5PSIxNy4wMDk4IiB3aWR0aD0iMjguNTgzNyIgaGVpZ2h0PSIzNi44MjI2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjNfZCIgeD0iMCIgeT0iMTkuMTM2NyIgd2lkdGg9IjI4LjU4MzkiIGhlaWdodD0iMzYuODIyNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXI0X2QiIHg9IjIuMzM5MTEiIHk9IjEuODg4NjciIHdpZHRoPSIyOC41ODM0IiBoZWlnaHQ9IjM2LjgxODciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyNV9kIiB4PSIzMS44MTA4IiB5PSIwIiB3aWR0aD0iMjguNTgzNyIgaGVpZ2h0PSIzNi44MjI2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjZfZCIgeD0iMTguMjQzOSIgeT0iMy4zMDY2NCIgd2lkdGg9IjI4LjU4MzQiIGhlaWdodD0iMzYuODIwNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.styles.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.styles.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");

const useStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  dialog: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minWidth: '200px'
  },
  dialogText: {
    fontWeight: 'bold'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.tsx":
/*!***********************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: ErrorGameRestartDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGameRestartDialog", function() { return ErrorGameRestartDialog; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../../../../libs/react-ui/src/lib/v2/Button/index.ts");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Typography */ "../../../../libs/react-ui/src/lib/v2/Typography/index.ts");
/* harmony import */ var _ErrorGameRestartDialog_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorGameRestartDialog.styles */ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.styles.ts");





const ErrorGameRestartDialog = ({
  onClick,
  score,
  highScore
}) => {
  const classes = Object(_ErrorGameRestartDialog_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.dialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.dialogText
  }, "Game over!"), highScore > score ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    paragraph: true
  }, "Score: ", score) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    paragraph: true
  }, "New High Score: ", score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "small",
    tvhVariant: "secondary",
    onClick: onClick
  }, "Retry"));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorGameRestartDialog);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameRestartDialog/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ErrorGameRestartDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorGameRestartDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorGameRestartDialog */ "../../../../libs/react-ui/src/lib/v2/ErrorGameRestartDialog/ErrorGameRestartDialog.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGameRestartDialog", function() { return _ErrorGameRestartDialog__WEBPACK_IMPORTED_MODULE_0__["ErrorGameRestartDialog"]; });



/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.styles.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.styles.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");

const useStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  dialog: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minWidth: '200px'
  },
  dialogText: {
    fontWeight: 'bold'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.tsx":
/*!*******************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: ErrorGameStartDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGameStartDialog", function() { return ErrorGameStartDialog; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../../../../libs/react-ui/src/lib/v2/Button/index.ts");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Typography */ "../../../../libs/react-ui/src/lib/v2/Typography/index.ts");
/* harmony import */ var _ErrorGameStartDialog_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorGameStartDialog.styles */ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.styles.ts");





const ErrorGameStartDialog = ({
  onClick
}) => {
  const classes = Object(_ErrorGameStartDialog_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.dialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    paragraph: true,
    className: classes.dialogText
  }, "Care to move some boxes with us?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "small",
    tvhVariant: "secondary",
    onClick: onClick
  }, "Start"));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorGameStartDialog);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/index.ts":
/*!***************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ErrorGameStartDialog/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: ErrorGameStartDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorGameStartDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorGameStartDialog */ "../../../../libs/react-ui/src/lib/v2/ErrorGameStartDialog/ErrorGameStartDialog.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGameStartDialog", function() { return _ErrorGameStartDialog__WEBPACK_IMPORTED_MODULE_0__["ErrorGameStartDialog"]; });



/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.styles.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.styles.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");

const useStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    fontSize: '16px',
    backgroundColor: theme.palette.common.white,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: theme.palette.common.white,
    padding: '0.75em 0 0.5em',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    zIndex: theme.zIndex.appBar
  },
  container: {
    padding: theme.spacing(0, '10%'),
    position: 'relative'
  },
  innerContainer: {
    padding: theme.spacing(0, '10%'),
    flexGrow: 1
  },
  grid: {
    height: '100%',
    width: '100%'
  },
  contentBox: {
    alignSelf: 'center',
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.common.white,
    filter: 'drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.25))',
    zIndex: theme.zIndex.drawer,
    minHeight: '91px'
  },
  dialog: {
    padding: theme.spacing(4)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.tsx":
/*!***************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.tsx ***!
  \***************************************************************************************************/
/*! exports provided: ErrorPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ErrorGame */ "../../../../libs/react-ui/src/lib/v2/ErrorGame/index.ts");
/* harmony import */ var _ErrorPage_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorPage.styles */ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.styles.ts");
/* harmony import */ var _footer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.png */ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/footer.png");
/* harmony import */ var _footer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.png */ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/header.png");






const ErrorPage = ({
  children,
  game: _game = true
}) => {
  const classes = Object(_ErrorPage_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    component: "header",
    className: classes.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _header_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "TVH"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    className: classes.innerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    wrap: "nowrap",
    className: classes.grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.contentBox
  }, children), _game && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorGame__WEBPACK_IMPORTED_MODULE_2__["ErrorGame"], {
    language: "en"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    component: "footer",
    className: classes.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _footer_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "TVH"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/footer.png":
/*!************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Pages/ErrorPage/footer.png ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "footer.235e89a.png";

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/header.png":
/*!************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Pages/ErrorPage/header.png ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAA8CAYAAAA60Bs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABL7SURBVHgB7V0JcFTXlb29qbXvltgsxA4SIBA7Y8RisLHjjSmXU8bJeIaaSSUzScXJlCdOZlIpT5aa8TKZxK6xnYwrGWey2sQhmODYsR2QwcQgCFjCCBCLsAAJJLS2Wr38n3te6/eCu7/6/e4WWv5xdalNd//+/fu8+849977XFpVBJkyMXfzYSiZMjHGYJDcx5mEnEyZSCVbDansnKW1X+X7gnyz5eWSdWMwhdnhirElyE6mF30+e12up/zvPEXl94p8cd22gzO98mSwZThoOmCQ3kVpw9FZ7+kg5fZ7UQZLbWtuIFD8NF0xNbmLMwyS5iTEPk+QmxjwMafKOjg7yeDw0UutIFr5lZWdTTk5O3K/x+XzUee0a50Y+SjVwXllZWWSxWKI+7udkrbOzU1xjGaSlpVFRUZG4r3b1knKpjYKWxjBDOCilRXE91+12i5uV3ZZs/t6sSXZdpEkOYu/evZvOnztHIxVWJs+i6mravHlzXM/HZ2ppaaFfb99O/f39lGps2rSJlixdGpPk13iw7dixg1ovXyYZlJeX09aHHhK2ne/9o+T6+nfF/RuBtHs3UcaX/o4ZZtN9Hgby2bNnA9edz7W0tJQmTZ4c89oYgTTJu7q66GRjI128eJFGKnCBCgoL436+1+ul2r176fjx45RqIEphUOlFq97eXjpx4oSYWWSwatWqwB2fn/wnzpDvT8foRsFWVUEqz0iWIUiOCN7T3U15+fni/sVLl6iouJjS09MpWZCeF5qamkSkGckAiQYGBuJ+/unTp6muro6GA5AUTmdsfxjnDjnY73KRDGw2G02bPj1wjAEP+RtO02iBlc/dyxEdEs6aggKRVCSHVmxraxuWKT1RYBrE+eLL1wMGw949e8glSSoxnaKaR3LI54ilN8vgnI8cOSJyBBlAy2ZmZor7ak8ved54l8JOliyZGTwSUuczqG4OKh4vycLhcIhrCXK3X71KJSxX7Pbklm+kjuZhQnSO8CiuAQOxp6dHkCoWEDUPHDhA9fX1pCgKySC/oEBcj76+PqnXTZw4kSaz5owFSKdLPGXLng/I4eRZAvCdOEtK65XgY5aCXMp+6UmylU+hVKHv8WfI+/JukgVkSVVVlQgyIDdmuhtK8h7Wih999BGNBiCSQ+PpAQNh/759UtIGwJcwgUnV2toqRXIbRyu4H3qzCyL5AJ+3rHM1Z/Zsyh50k5QTTUKXa7CUFJKtYibZpqWO5NaS+HOgcCCK43rm5uZSqiA1f0GLnz9/nkYDQBbFr186rv/gAzpz5gzJ4uabb6ZZTCrZ3MTOU3MxJ1V6OMvnIyudHBz9EMm1weM71ABPNPT48iqyFhfQeIUUya9cuSLIMxqA6X5Ax2fu5oz+1VdfJVlkZGTQrRs3UhoTVjbaYiquqKiI+TiOB4cHMkvqnHjKLygIkFhBn0gTByIlcG6WNAfZOYpbsjNpvEKK5C0sVWS14o0CJEisBBmf4ejRo6LgIgNMrTNmzqTp7GLIEhFAYlh8000xH4fE6uMoLjt4cNySkhJxH66Kcj7M3i3koszc6SL5HK+Im+QgxjkuAI2W1XIgeB/nENHQ3NxMf3jzTWkHA3r6tttuE/cPHjxIspjHUVzPIsPAwQwjC0TxvLw8cV9pbiGlK3QMa1EBWcsm03hG3CRHggX/drSQHOfpjzHr1B06JBwMGSBpRLFlNmtxENEtmawChUxGPZJDDhqpJFdUVgb1uHr1GqndoWQYzoptzjQaz4jbXcFU/cAnPyksrmiAVj/4/vvU0NBAMkAB4L4tW3QrXKiuvv3WW1IuiNDk/HyQPbxE3M0V233sqMgO1omTJtFKJjlIerGlZcik9nrgHKZy2T1WuRrnc5V94t4Ys48eZsyYIf4qnd3kra0TCxU02FdVs0eevOrhaETcJEexYcmSJTEfhyPwwTH5MvJNrFHXrl2r26sAR2ffu+9KW31tbPFhUKYN+se4v2vXLmlvGwMQ/SaQKyAjei1km6cmTJgQTA6jAUFCdnbRALcHUDiK+/ZGyijHyioa70ia6w5P2oiHDituqGYcUe4donIZDZcvXxa6WyM57MJjPBBlkmdE7vJp06hq0SIhCUBuI8WaQq5yYpC1t7dHfRwD2AjJp/G5BdsE+lykdEQm07aZU2m8Iykk1/ot0LwlCy0K6QGVPCM9DRh44WSsra0VkkAGGGDr168XfwG0NRj5nJBxslIuHlTOnx8MEsol/mzu0GxnYW/cWlpM4x1JaWbQpnBZDx2VrqI4ugVt/DwjXWmaJgcuXLggbEMZgDxLly2jWbNmBf8NkXjAQNKZKhSEtS14froj4rG0rfcQ5WbTeEfSSA4SyZIcfRzxtMRiMCxcuFA4HDKA9sY5QbLAMnRLNpah/bOmpiZi8YXR5DAVwHXJGSyHqzzwfEc+DD3IA9SxuEIUg8Y7kkJyRDbhOEjqVLgCmr+rB3yZM7kIYzFAcpzTqVOnRBOWDKC/q6urI5qpIH/QrzJSCmKYYbBQAlBbOwKdgBpsVrYPc1LaeThakJQrgIRJtogBKYCGong6zqDH0U0om3wi0UPUhTPTK1mhLCsrE4Wf8KQYvSqNjY00UoA+GC1I+OpPknotrAhUPoVss8e3P64hKSRHMjZUx9/1QB8xOs/iTSjRK4KbDCBVTp48SYfq6kiR8MVxbresWSMckXDAWek2kHSmAiJIaOsh+bN5aw+R2hkiOVwV24wyMpEEkkOPI8LJJmP4girmzYv7+fgyHZIkx7m9tnMn+SXK93ifRYsX02K+XW9totdF1mNPFXCeMwcTYrWHrcNTaMoalFF2G5fyJyIykIkkkBxFIERyWZ2KZA7tofHCye5Kbhz6/XrIkhLvsXr1ajEIwwHpc+Tw4RHT1gCZhxYDACuBlMttwccsTrZcyyaRiQASJjnchnNsH8oC1T+ZFdlocS2VGBRGAOIsYN95dpQCFRwaI73nqQKklFYEUjq6yH861OdvycqktNtraNiAtl5l5PY0JVwMQmJnZGFz2VS5Spym4UG+VEXTUi69r9+wIVghDQc+p28Y9mSJF+il0Qaiv/EsqVdC34GltIgTzxRHcp+f1O5e8u7/M88iV8h/VCIh9yqkutzy207ge7HLV74TIjnIhkQsVtNWLMCemzNnjtRroEFzBt0Y2feLByD2Gk424d1HAzoEjbxvPF+kkUE7iy1VDV4sWg6Ti9hYyPX1/ybnp+4l+5JKIV+S1U8Om1Jp44LYi9vFJp6e3+1BBCBVQq76jjSQ6ytPkcUhRz/n1rvIvnY5ySIhksO9aGT3QrYIBNtLr1kpFqCTsdQrFSSfPGUKLePqZixLE81nsjYpjoXjaqvoowFy7yoPIBmiizWmYYPRXxdZA1CaL9LAC78g72vvkGPtMnL+06fJUV3JLEksEUXEdr/wSxr4+U5Smi5ELLGTOk5TMw3wTRa2RXPJXrNMesAmRHIsTDjNhRbZpBMFFr29R2IBZIGNKLcCMr7jrlu3Lua2cnCO2js6DK2g37ZtW8x1nSD28889J0guA/T7aEFC9XjFRkI0uEVG2MFJ+egyE3KXkBQZX95GaQ/eRdYi+eRdxWZFbFG6/uMH5INVCbv4+kH5MeKNnJVICZEcOnVAsuUUmGSQ5CALCCm7bE0PkBOwDBcsWBBTWmAwG/HHc+EglZTEnB3gTMkuRIFsm8R6XHN/1PMtZEM7Lc+m6rUuUi9eFX3lwSjLA1M5e4Fc//o0+fkvtm6zTi6JOxpCnnhe+T31P/ED8h8/ze8TNtD5EJbsLM4Bisk6oVhYlhb+D7vRWLFQQyve4b3g5ycimfBag69PiOQocXslSY4EsowjkRGSY2WNkdfpAY4NugyvtwzDgUGFSC4LuDR6FV0sBom3iIbjTOMSPtp+N9x6a3ALB+v0Msrd8XxgX08mtu9QPXl+8yZ53ztC/iOhbe+QJA4885LQ6xmPf4Fsk4d2qjBLDPzkt+T60rdEohgevS2F+eTYsILS7txAjjvXBDYvCichJ4giF+BBZps3g9K23R+xmMMIsCDbCNETIjm2jJMtAkES6C3m1QO88pwkOiw4DnQ4pn+9FTvXmOBGNlWaGda9GA0g+VC7kWmVzY0bN4pzxWwW0cOD3bGyQgRzbFrNOnwp+T88Q/3P/oQ8L+8WxBafxesjzy92knVKKWU8+veB18UCqqhv7qf+J39Ial/oHLG3oXXlYsr43IPkuKOGrAV5Ea8Rt/Coy9EceYGjZikljOGO5CA3Vt4Y2c5Mb1crPcCVmcJSp6G+PilbY0zhpBDbS+ht9oPPec7gXjN6vr7o3Gxu1o3kkCY4x7vvuYfms38vZgWM7d5+Uq62k8K2odLWwVHUSdbiQrIU5wf2V+Hk3FY1l7K+92+ivN//9I/YYgws1gBh3f/zM7JNZcn48BZsARz1vZWWVnJ94/siSQyCZ1HHlk2U+c1HyDZ9SkCCwErsdYltolX265X2Ttb9+SLSWyawlYlWX1zfG7hbgGGSw2kwoo0xzRrdLUnsVosiEi5uolMfE+auu+8OLoaIBTg5kGWywIylJ4GQz2Dlkt6MhBnmwa1bg2s41X43R9d9HJ1fJ9/hhkDCqSXD6U6ys4NiX1FF6Q//NdkqpgsJkf7I35J1Ygm5/uUJUloDC0ZAePf3XyL7LdVRt46DTOnngeA/XB+SKDwYYOGB4FZIHSS2XT00wM/DNtHed7ka3H4tGMlBcpyLY91yMZisNxXeMKIbJnmPAZKLfgv2d43udQeSo+ye6KXCcbBsTG+jHw0gOdqIZQFpoddrA5mid/0wQO69774AwUGo1nbq/97/kedH24NkjQAniL79h5lwx8i75yClf+YBSv+bLeIX1tLuv538Zy6Q+8n/ZW0dkB6+46fI9dhTHNEnfYx8ILlnx1sRGtx+yzLK+OpnAwTn6O1rOEX9jz9L3t/XBo8ZOoAqCO/93R/Jt6+OvG+9R5nf+ALZly0wVMxJFIbYhujT2tYmTXKQG5vPG4UWyRPd3he69rbbb49rtZGRXXxxftpmP7EAZyVWpRjJNRZraAUz5dIV6nv0P1lP74oo+kQFy0dE4L5/bhIyIv3znwpE9M9tJV9dA3l3vRMgL4j86zcoHljYOcl47DMsfQJdjRhMfZ//d/J9MHSVU+Voj4HQe7GNMv/ra5R268phj+iG2AI9bGQ3LZA0z0CTVfjrQUxbgrueQt9WVlbG9Vxs2yZLckRw9MrHSmZx3bBNcayiFvpSqpcsCbQXYANQJrfnldcjCQ73gq07+7KFZFs4hyx5OZE//srau/+JH5LvvT+L/8WGnE72yWH5SQHdnzXLWXasEORU2rvI9e3nRf96OCwZ6aKH3b5iEVlnlRPhNzrDPr//RJOYSaLOQimGIZIj2cQuVLLAlg5otEoE0NBIxowCWvnOT3wi7rZdzFayyTV6YPQiOZLZ/fv3R9XjmAXmzp0rvHDhcLy2h9xPvRix97eVJUb6Fx+mgjNvU977r1D+0Z38dzs5H7oHIyz4PJXL731ffUpsVQHCpW1ew1p9BskAgyf9kYeF7IE7g3PxvnMgQsrYOBfI/unTVHDqDco78Csq+PB1ynn5WbIvXxgiOr/W+/Z75H7m/1kODW8PkKGQiEgea2sFPSxfsYISBaIbXIuTBlboQC5tvuOOuGcTrTdH1slBwqgtS4sGRPLunp6oJMfgwyZGIm9hYnsPHRPldA2W/FzKfuFb7FHztB/W+2GbXU5Z3/2a+DEq93M/C9p+auNZ8u7eQ85P38fJYB6l/+ND5FtdHXjRddE2Gmzs1jhWLgociyuoguBhM5Bj/SrKevHbgQRWO5TNyv55jehpdz36BHnfqA0MCg4W3r2HyMmOjW3edBouGCI59ldxGfi5DywpSxT48rOzJKfcQUCmrFi+PO7uN+xAcFnyx6lwbMgNvffA/uOx9mnE50NVF6/H1D6Aje0HBwMamlCet19H8OB7s3WX8dhnxYJmRE2RsHIV1Hf4OKU9cKcozqC0n3Y/fjAMLoh16Op7mOft4wHjrw8FFwsHnIxvfpEJPvnjx8G+4/NnUcZX/oGLUvXC6gT8PGj9LHVsc6cNmzY3JFfQrCS7F+BQv5UTLzCdOw3+aBKWtOVJePSwDmXbiHF+hUPsQHCUr1+sXXERDLTEGhadeimsryUznSXJ3brde5aivECUD/P+/ccahYctHufXYts4JKOQIJb0IW7OUNuxcvJcRGHIOqecHH9VHZusIPqS+WSdPzv4HNHF2Nwi+mGGC4YiOXzqm1kXy1Qd4Wgk49cEQAAcS08ORAOawuZJLLeDpMCgnDp1qnSHIGYMPWC1Elp6ox0X2+aJfEENLEQASeCSAFYUWLKGzmlslbM4AWQ9PKh9RXGGEgfeG4muBvjgQ8LBFc91q9hOcof6XvLi/33VZMCijpZtak2YMIYfm5tymBjzMEluYszDJLmJMQ+T5CbGPEySmxjzMEluYszDJLmJMQ+T5CbGPEySmxjz+AuQASmgiWTrcgAAAABJRU5ErkJggg==");

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Pages/ErrorPage/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorPage */ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/ErrorPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return _ErrorPage__WEBPACK_IMPORTED_MODULE_0__["ErrorPage"]; });



/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/ThemeProvider.tsx":
/*!***************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/ThemeProvider.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../../../../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "../../../../libs/react-ui/src/lib/v2/theme.ts");





const ThemeProvider = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["theme"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Typography/Typography.tsx":
/*!***********************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Typography/Typography.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "../../../../node_modules/@material-ui/core/esm/Typography/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/Typography/index.ts":
/*!*****************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/Typography/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ "../../../../libs/react-ui/src/lib/v2/Typography/Typography.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Typography__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/font.ts":
/*!*****************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/font.ts ***!
  \*****************************************************************************/
/*! exports provided: TVHProBlack, TVHProBold, TVHProMedium, TVHPro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVHProBlack", function() { return TVHProBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVHProBold", function() { return TVHProBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVHProMedium", function() { return TVHProMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVHPro", function() { return TVHPro; });
const TVHProBlack = {
  fontFamily: 'TVHPro',
  fontStyle: 'normal',
  fontWeight: 900,
  src: 'url(/fonts/TVHPro/TVHPro-Black.woff) format("woff")'
};
const TVHProBold = {
  fontFamily: 'TVHPro',
  fontStyle: 'normal',
  fontWeight: 700,
  src: 'url(/fonts/TVHPro/TVHPro-Bold.woff) format("woff")'
};
const TVHProMedium = {
  fontFamily: 'TVHPro',
  fontStyle: 'normal',
  fontWeight: 500,
  src: 'url(/fonts/TVHPro/TVHPro-Medium.woff) format("woff")'
};
const TVHPro = {
  fontFamily: 'TVHPro',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url(/fonts/TVHPro/TVHPro.woff) format("woff")'
};

/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/index.ts":
/*!******************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/index.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "../../../../libs/react-ui/src/lib/v2/ThemeProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/styles.ts":
/*!*******************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/styles.ts ***!
  \*******************************************************************************/
/*! exports provided: useTheme, createStyles, makeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "../../../../libs/react-ui/src/lib/v2/theme.ts");



const useTheme = () => _theme__WEBPACK_IMPORTED_MODULE_1__["theme"];



/***/ }),

/***/ "../../../../libs/react-ui/src/lib/v2/theme.ts":
/*!******************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/libs/react-ui/src/lib/v2/theme.ts ***!
  \******************************************************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "../../../../libs/react-ui/src/lib/v2/font.ts");


const GREY_PALETTE = {
  // Cod Gray
  50: '#EFEFEF',
  // Alto
  100: '#D8D8D8',
  // Seashell
  300: '#C0C0C0',
  // Gray
  500: '#9B9B9B',
  // Dove Gray
  700: '#646464',
  // Mine Shaft
  900: '#333333'
};
const ACTION_PALETTE = {
  disabled: GREY_PALETTE[100],
  disabledBackground: GREY_PALETTE[100],
  hover: GREY_PALETTE[900]
}; // it is impossible to use default breakpoints in the theme config
// so they are defined here and included to the theme config

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  breakpoints: {
    values: BREAKPOINTS
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: 'contained',
      color: 'primary',
      // removes the box-shadow
      disableElevation: true
    },
    MuiTab: {
      disableRipple: true
    }
  },
  typography: {
    // arial is a fallback font
    fontFamily: 'TVHPro, arial',
    h1: {
      marginBottom: '1rem',
      fontSize: '1.8125rem',
      lineHeight: '2.5rem',
      fontWeight: 900,
      [`@media (min-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '2.125rem',
        lineHeight: '3rem'
      }
    },
    h2: {
      marginBottom: '.5rem',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 700,
      [`@media (min-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '1.6875rem',
        lineHeight: '2.5rem'
      }
    },
    h3: {
      marginBottom: '.5rem',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: 700,
      [`@media (min-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '1.375rem',
        lineHeight: '2rem'
      }
    },
    h4: {
      marginBottom: '.5rem',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 700,
      [`@media (min-width:${BREAKPOINTS.sm}px)`]: {
        fontSize: '1.125rem',
        lineHeight: '1.5rem'
      }
    }
  },
  palette: {
    primary: {
      main: '#E4002B',
      dark: '#B30021'
    },
    success: {
      light: '#E3EED7',
      main: '#9CCC65',
      dark: '#37501A'
    },
    warning: {
      light: '#FFF9C6',
      main: '#FFEE58',
      dark: '#7D6522'
    },
    error: {
      light: '#FFCBCA',
      main: '#EF5350',
      dark: '#490807'
    },
    info: {
      light: '#D5F1FE',
      main: '#29B6F6',
      dark: '#043F59'
    },
    grey: GREY_PALETTE,
    text: {
      primary: GREY_PALETTE[900]
    },
    action: ACTION_PALETTE,
    // material-ui palette doesn't include these colors
    // default theme has been extended to include accent colors
    accent: {
      equipment: '#007BC4',
      promo: '#009BA4',
      favorites: '#F18700'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [_font__WEBPACK_IMPORTED_MODULE_1__["TVHProBlack"], _font__WEBPACK_IMPORTED_MODULE_1__["TVHProBold"], _font__WEBPACK_IMPORTED_MODULE_1__["TVHProMedium"], _font__WEBPACK_IMPORTED_MODULE_1__["TVHPro"]],
        img: {
          maxWidth: '100%'
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 500
      },
      contained: {
        padding: '8px 16px',
        '&$disabled': {
          color: '#fff'
        }
      },
      outlined: {
        padding: '7px 15px',
        backgroundColor: '#fff',
        borderColor: GREY_PALETTE[100],
        '&:hover': {
          backgroundColor: '#fff',
          borderColor: GREY_PALETTE[900]
        }
      },
      text: {
        padding: '8px 16px',
        '&:hover': {
          backgroundColor: GREY_PALETTE[50]
        }
      }
    },
    MuiTabs: {
      root: {
        position: 'relative',
        marginBottom: -1
      },
      indicator: {
        display: 'none'
      }
    },
    MuiTab: {
      root: {
        marginRight: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderStyle: 'solid',
        borderWidth: '1px 1px 0 1px',
        borderColor: 'transparent',
        textTransform: 'none',
        fontWeight: 400,
        [`@media (min-width:${BREAKPOINTS.sm}px)`]: {
          minWidth: 'auto'
        },
        '&:last-child': {
          marginRight: 0
        },
        '&$selected': {
          backgroundColor: '#fff',
          borderColor: GREY_PALETTE[100]
        }
      },
      textColorInherit: {
        color: GREY_PALETTE[900],
        opacity: 1
      }
    }
  }
});

/***/ }),

/***/ "../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "../../../../node_modules/postcss-loader/src/index.js?!../../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /Users/OrDe/Development/tvh/fe-parts/node_modules/postcss-loader/src??embedded!/Users/OrDe/Development/tvh/fe-parts/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app/app.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vZmUtZGVtby9zcmMvYXBwL2FwcC5zY3NzIn0= */"

/***/ }),

/***/ "./app/ErrorContent.tsx":
/*!******************************!*\
  !*** ./app/ErrorContent.tsx ***!
  \******************************/
/*! exports provided: ErrorContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorContent", function() { return ErrorContent; });
/* harmony import */ var _fe_parts_react_ui_v2_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fe-parts/react-ui/v2/styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ErrorContent = () => {
  const theme = Object(_fe_parts_react_ui_v2_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1"
  }, "Sorry, MTS is unavailable (error 404)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      color: theme.palette.primary.main
    }
  }, "it's not you it is us,"), " we are updating the website with new features!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    paragraph: true
  }, "Dear customer,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    paragraph: true
  }, "MyTotalSource is currently unavailable. We are doing everything in our power to resolve this as soon as possible. We do apologize for any inconvenience this may cause."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    paragraph: true
  }, "Your TVH Sales Team"));
};

/***/ }),

/***/ "./app/app.scss":
/*!**********************!*\
  !*** ./app/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/postcss-loader/src??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app.scss */ "../../../../node_modules/postcss-loader/src/index.js?!../../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _fe_parts_react_ui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fe-parts/react-ui/v2 */ "../../../../libs/react-ui/src/lib/v2/index.ts");
/* harmony import */ var _fe_parts_react_ui_v2_Pages_ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fe-parts/react-ui/v2/Pages/ErrorPage */ "../../../../libs/react-ui/src/lib/v2/Pages/ErrorPage/index.ts");
/* harmony import */ var _fe_parts_react_ui_v2_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fe-parts/react-ui/v2/styles */ "../../../../libs/react-ui/src/lib/v2/styles.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ErrorContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorContent */ "./app/ErrorContent.tsx");








const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  const theme = Object(_fe_parts_react_ui_v2_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fe_parts_react_ui_v2__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fe_parts_react_ui_v2_Pages_ErrorPage__WEBPACK_IMPORTED_MODULE_1__["ErrorPage"], {
      game: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h1"
    }, "Welcome to MyTotalSource!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      style: {
        padding: theme.spacing(2),
        maxWidth: '400px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/page-2"
    }, "Click here to see what's new"))))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/page-2",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fe_parts_react_ui_v2_Pages_ErrorPage__WEBPACK_IMPORTED_MODULE_1__["ErrorPage"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ErrorContent__WEBPACK_IMPORTED_MODULE_7__["ErrorContent"], null))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/OrDe/Development/tvh/fe-parts/apps/demo/fe-demo/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map