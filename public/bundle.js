/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/katieswanson/team-leia/photo-gallery-service/src/index.js: Unexpected token, expected \\\",\\\" (14:6)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m      alt\\u001b[33m:\\u001b[39m []\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m      username\\u001b[33m:\\u001b[39m []\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m      photos\\u001b[33m:\\u001b[39m {}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Object.unexpected (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Object.expect (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:8370:28)\\n    at Object.parseObj (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9954:14)\\n    at Object.parseExprAtom (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9582:28)\\n    at Object.parseExprAtom (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:4116:20)\\n    at Object.parseExprSubscripts (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Object.parseMaybeUnary (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Object.parseExprOps (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Object.parseMaybeConditional (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Object.parseMaybeAssign (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Object.parseMaybeAssign (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:9027:25)\\n    at Object.parseExpression (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Object.parseStatementContent (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10787:23)\\n    at Object.parseStatement (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Object.parseBlockBody (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Object.parseBlock (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11205:10)\\n    at Object.parseFunctionBody (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10220:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10190:10)\\n    at Object.parseMethod (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10160:10)\\n    at Object.pushClassMethod (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11638:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11555:12)\\n    at Object.parseClassMember (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11497:10)\\n    at withTopicForbiddingContext (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11452:14)\\n    at Object.withTopicForbiddingContext (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10533:14)\\n    at Object.parseClassBody (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11429:10)\\n    at Object.parseClass (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:11403:22)\\n    at Object.parseStatementContent (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10700:21)\\n    at Object.parseStatement (/Users/katieswanson/team-leia/photo-gallery-service/node_modules/@babel/parser/lib/index.js:10658:17)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });