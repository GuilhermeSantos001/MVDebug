//=============================================================================
// MVDebug
// By LZOGames
// MVDebug.js
// Version: 1.01
//=============================================================================
/*:
 * @plugindesc v1.01 - Great utility library that provides to big system debug.
 *
 * @author GuilhermeSantos
 *
 * @help
 * ==============================================================================
 *    Introduction
 * ==============================================================================
 * The MVDebug (MVD) plugin is a Software Development Kit (SDK) intended to
 * help plugin makers by providing a standard way to do debug functions.
 *
 * This help file will explain the provided functions and what their purpose
 * is.
 *
 * ==============================================================================
 *    The MVDebug module (Aliased as MVD)
 * ==============================================================================
 * Access all functions and make your advanced debugging on the system.
 *
 * ==============================================================================
 *    Stay Up To Date
 * ==============================================================================
 * We advise that you regularly check to ensure that the MVD plugin is upto date.
 * Plugin updates will include things like bugfixes, code optimization, and of
 * course, new features, so it is highly recommended you have the latest version.
 *
 * You can get the latest version by going to any of the following web addresses:
 * https://github.com/GuilhermeSantos001/MVDebug
 */
//=============================================================================
// IMPORT PLUGIN
//=============================================================================
var Imported = Imported || {};
Imported["GS_debuggEx"] = "1.01";

var GS = GS || {};
var MVDebug = {};
var MVD = MVDebug;

GS.MVDebug = MVDebug;
GS.MVD = MVD;

//=============================================================================
// MVDEBUG MODULE
//=============================================================================
(function (_) {
  "use strict";

  //-----------------------------------------------------------------------------
  // Global Variables
  //

  /** 
   * @MVDebug {public}
   * @description Array to save all codes that are being executed by the plugin.
   * @type {array}
   */
  var scriptsRun = [];

  //-----------------------------------------------------------------------------
  // Console
  //
  console.fileScanType = function (fileName, filePath, readType, saveCache) {
    fileScanType.apply(this, arguments);
  };

  console.fileScanFL = function (fileName, filePath, FLText, FLTextEnd) {
    fileScanFL.apply(this, arguments);
  };

  console.runCode = function (fullYear, fileIndex) {
    runCode.apply(this, arguments);
  };

  console.showfileInFolder = function (fileName, filePath, fileExtension) {
    showfileInFolder.apply(this, arguments);
  };

  console.computerUsername = function () {
    return computerUsername.call(this);
  };

  console.goGithub = function () {
    goGithub.call(this);
  };

  /**
   * @MVDebug {private}
   * @description Creates the folder name for the cache, based on the current year.
   * @return {string} path to folder cache.
   */
  var pathFileDebuggExCache = function () {
    var timer = new Date();
    return 'system/debuggEx/cache_' + timer.getFullYear();
  };

  /**
   * @MVDebug {private}
   * @description Creates the folder name for the run code, based on the current year.
   * @return {string} path to folder cache.
   */
  var pathFileDebuggExCodeRun = function () {
    var timer = new Date();
    return 'system/debuggEx/codeRun_' + timer.getFullYear();
  };

  /**
   * @description Let the first letter in uppercase.
   * @return {string}
   */
  String.prototype.oneLettertoUpperCase = function () {
    return this[0].toUpperCase() + this.substr(1, this.length);
  };

  /**
   * Call the essentials functions.
   *
   * @description Scene_Boot.prototype.initialize
   */
  const sceneBoot_initialize = Scene_Boot.prototype.initialize;
  Scene_Boot.prototype.initialize = function () {
    sceneBoot_initialize.call(this);
    welcomeMessageSystem(Imported["GS_debuggEx"]);
    createFolderSystem();
    createFolderDebuggEx();
    createFolderDebuggExCodeRun();
    createFolderDebuggExFilesCache();
  };

  /**
   * @MVDebug {private}
   * @description Show welcome message of system.
   * @param systemVersion {string} The version of the code.
   */
  function welcomeMessageSystem(systemVersion) {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      var args = ['\n %c %c %c \u2730 DEBUG ' + systemVersion + ' \u2730 ' + ' %c  %c  \u2726 LZOGAMES \u2726  %c %c \u2605%c\u2605%c\u2605 \n\n',
        'background: #448eff; padding:5px 0;',
        'background: #ff4444; padding:5px 0;',
        'color: #fff; background: #ffae00; padding:5px 0;',
        'background: #ff4444; padding:5px 0;',
        'background: #448eff; color: #fff; padding:5px 0;',
        'background: #ff4444; padding:5px 0;',
        'color: #448eff; background: #fff; padding:5px 0;',
        'color: #ff4444; background: #fff; padding:5px 0;',
        'color: #ffae00; background: #fff; padding:5px 0;'
      ];
      window.console.log.apply(console, args);
    } else if (window.console) {
      window.console.log('DEBUG ' + systemVersion + ' - LZOGAMES ');
    }
  }


  /**
   * @MVDebug {private}
   * @description Give a the path to the folder indicated.
   * @param p {string} The path to convertion.
   * @return {string}
   */
  function localPath(p) {
    if (p.substring(0, 1) === '/') p = p.substring(1);
    var path = require('path');
    var base = path.dirname(process.mainModule.filename);
    return path.join(base, p);
  };

  /**
   * @MVDebug {private}
   * @description Create a directory to system.
   * @return {null}
   */
  function createFolderSystem() {
    var fs = require('fs');
    var pathFolder = localPath('system');
    if (!fs.existsSync(pathFolder)) {
      fs.mkdirSync(pathFolder);
      var message = '%c ✰ Create a directory to system ✰ ';
      console.info(message, 'background: #232323; font-size: 120%; color: #ffffff');
    }
  };

  /**
   * @MVDebug {private}
   * @description Create a directory to system of debug.
   * @return {null}
   */
  function createFolderDebuggEx() {
    var fs = require('fs');
    var pathFolder = localPath('system/debuggEx');
    if (!fs.existsSync(pathFolder)) {
      fs.mkdirSync(pathFolder);
      var message = '%c ✰ Create a directory to system of debug ✰ ';
      console.info(message, 'background: #232323; font-size: 120%; color: #ffffff');
    }
  };

  /**
   * @MVDebug {private}
   * @description Create a directory to system of debug.
   * @return {null}
   */
  function createFolderDebuggExCodeRun() {
    var fs = require('fs');
    var pathFolder = localPath('system/debuggEx');
    var pathFolderCodeRun = localPath(pathFileDebuggExCodeRun());
    if (fs.existsSync(pathFolder) && !fs.existsSync(pathFolderCodeRun)) {
      fs.mkdirSync(pathFolderCodeRun);
      var message = '%c ✰ Create a directory to code run ✰ ';
      console.info(message, 'background: #232323; font-size: 120%; color: #ffffff');
    }
  };

  /**
   * @MVDebug {private}
   * @description Create a directory to files in cache after scan.
   * @return {null}
   */
  function createFolderDebuggExFilesCache() {
    var fs = require('fs');
    var pathFolder = localPath('system/debuggEx');
    var pathFolderFilesCache = localPath(pathFileDebuggExCache());
    if (fs.existsSync(pathFolder) && !fs.existsSync(pathFolderFilesCache)) {
      fs.mkdirSync(pathFolderFilesCache);
      var message = '%c ✰ Create a directory to files in cache after scan ✰ ';
      console.info(message, 'background: #232323; font-size: 120%; color: #ffffff');
    }
  };

  /** 
   * @MVDebug {public}
   * @description Opens the github of script in your default browser.
   */
  function goGithub() {
    if (Utils.isNwjs()) {
      var gui = require('nw.gui');
      var url = MVDebug.github || '';
      var http = null;
      if (url.substring(0, 5).match(/https/) || url.substring(0, 5).match(/http/)) {
        http = true;
      }
      if (http) {
        gui.Shell.openExternal(MVDebug.github);
      }
    }
  };

  /** 
   * @MVDebug {public}
   * @description Returns the username of the computer.
   * @return {string}
   */
  function computerUsername() {
    if (process && process.env) {
      return process.env['USERNAME'];
    }
  };

  /** 
   * @MVDebug {public}
   * @description Determines the amount of functions, variables, strings, for(loop) and etc.
   * @param fileName {string} the name of file.
   * @param filePath {string} the path of file.
   * @param readType {string} the type of scan.
   * @param saveCache {boolean} save in cache the full scan.
   */
  function fileScanType(fileName, filePath, readType, saveCache) {
    var fs = require('fs');
    var pluginPath = fileName;
    var filePath = localPath(filePath + '/') + pluginPath + '.js';
    var fileCountRead = 0;
    var linesSaveCache = [];
    var linesCout = 0;
    if (fs.existsSync(filePath)) {
      const readline = require('readline');
      const readStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: readStream
      });
      rl.on('line', function (line) {
        linesCout++;
        var linesCoutString = linesCout.padZero(2);
        if (typeRead(readType, line)) {
          fileCountRead++;
          if (readType === 'function') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'string') {
            var stringLine = line;
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'number') {
            var stringLine = line;
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'array') {
            var stringLine = line;
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'for') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'boolean') {
            var stringLine = line;
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'forin') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'variable') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'require') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          } else if (readType === 'forof') {
            var stringLine = line.replace('{', '').trim();
            stringLine = stringLine.replace('}', '').trim();
            if (stringLine[stringLine.length - 1] === ';')
              stringLine = stringLine.substr(0, stringLine.length - 1).trim();
            linesSaveCache.push(
              'LINE(' + linesCoutString + '): ' + stringLine
            );
          }
        }
      }).on('close', function () {
        var groupName = '%c ✰ ' + readType.oneLettertoUpperCase() + ' debug to(' + '%c' + pluginPath + '.js' + '%c) is completed ✰ ';
        showMessageComplete(groupName);
        if (saveCache) saveInCache(groupName);
      });
    }

    function showMessageComplete(groupName) {
      var message = '%c The file(%c' + pluginPath + '.js' + '%c) It has a total of ' + '%c' + fileCountRead;
      if (fileCountRead > 1) {
        message += ' %c' + readType + 's' + ' declared ';
      } else if (fileCountRead == 0) {
        message = '%c The file(%c' + pluginPath + '.js' + '%c) It\'s not has a ' + readType + '%c%c ';
      } else {
        message += ' %c' + readType + ' declared ';
      }
      if (readType == 'function') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #80bfff',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #80bfff'
        );
      } else if (readType == 'string') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #fffc75',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #fffc75'
        );
      } else if (readType == 'number') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #0080ff',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #0080ff'
        );
      } else if (readType == 'array') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #ff8888',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #ff8888'
        );
      } else if (readType == 'for') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #ffa851',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #ffa851'
        );
      } else if (readType == 'boolean') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #a2e01f',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #a2e01f'
        );
      } else if (readType == 'forin') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #beea64',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #beea64'
        );
      } else if (readType == 'variable') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #5155fd',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #5155fd'
        );
      } else if (readType == 'require') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #ee6060',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #ee6060'
        );
      } else if (readType == 'forof') {
        console.group(groupName,
          'background: #222; font-size: 120%; color: #beea64',
          'background: #222; font-size: 130%; color: #ffffff',
          'background: #222; font-size: 120%; color: #beea64'
        );
      }
      console.log(message,
        'background: #222; font-size: 120%; color: #00fff6',
        'background: #222; font-size: 130%; color: #ffffff;',
        'background: #222; font-size: 120%; color: #00fff6',
        'background: #222; font-size: 130%; color: #ffffff;',
        'background: #222; font-size: 120%; color: #00fff6'
      );
      if (!saveCache) console.groupEnd(groupName);
    };

    function typeRead(readType, line) {
      switch (readType) {
        case 'function':
          return readFunctions(line);
        case 'string':
          return readString(line);
        case 'number':
          return readNumber(line);
        case 'array':
          return readArray(line);
        case 'for':
          return readFor(line);
        case 'boolean':
          return readBoolean(line);
        case 'forin':
          return readForin(line);
        case 'variable':
          return readVariable(line);
        case 'require':
          return readRequire(line);
        case 'forof':
          return readForof(line);
      }
    }

    function saveInCache(groupName) {
      var fs = require('fs');
      var timer = new Date();
      var dayMonth = timer.getDate();
      var numberMonth = timer.getMonth();
      var fullYear = timer.getFullYear();
      var hours = timer.getHours();
      var minutes = timer.getMinutes();
      var seconds = timer.getSeconds();
      var completeDate = dayMonth.padZero(2) + '_' + numberMonth.padZero(2) + '_' + fullYear.padZero(2);
      var completeHour = hours.padZero(2) + '_' + minutes.padZero(2) + '_' + seconds.padZero(2);
      var data = JSON.stringify(linesSaveCache, null, 2);

      var pathDebuggExCache = localPath(pathFileDebuggExCache());
      if (fs.existsSync(pathDebuggExCache)) {

        var pathFolderFile = getfolderPath();
        if (!fs.existsSync(pathFolderFile)) {
          fs.mkdirSync(pathFolderFile);
        }

        var pathFile = pathFolderFile + '\\' + 'debug_type_' + readType + '_file_' + fileName + '_date_' + completeDate + '_time_' + completeHour + '.json';
        fs.writeFileSync(pathFile, data);

        var message = '%c Added scan(' + readType + ') in cache(' + pathFileDebuggExCache() + ') ';
        console.log(message, 'background: #222; font-size: 120%; color: #ffffff');
        console.groupEnd(groupName);

        function getfolderPath() {
          var allFolders = fs.readdirSync(pathDebuggExCache);
          var i = 0;
          var length = allFolders.length;
          var folderPathCount = null;
          for (; i < length; i++) {
            var folder = localPath(pathFileDebuggExCache()) + '\\' + allFolders[i];
            var folderBarIndex = folder.indexOf('(') - readType.length;
            if (folder.substr(folderBarIndex, readType.length) === readType) {
              var folderCountFiles = fs.readdirSync(folder).length + 1;
              folderPathCount = pathDebuggExCache + '\\' + 'cache_file_' + fileName + '_type_' + readType;
              folderPathCount += '(' + folderCountFiles + ')';
              fs.renameSync(folder, folderPathCount);
            }
          }
          if (folderPathCount) {
            return folderPathCount;
          } else {
            return pathDebuggExCache + '\\' + 'cache_file_' + fileName + '_type_' + readType + '(1)';
          }
        }

      }
    }

    function readFunctions(line) {
      var requisiteTypeIsValid = line.indexOf('function');
      var requisitesIsValid = [
        line.indexOf('('),
        line.indexOf(')'),
        line.indexOf('{')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 &&
          requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1) return true;
      }
      if (requisiteTypeIsValid > -1 && requisites()) {
        return true;
      }
    };

    function readString(line) {
      var requisitesIsValid = [
        line.indexOf('\"'),
        line.indexOf('\''),
        line.indexOf('('),
        line.indexOf(')'),
        line.toLowerCase().indexOf('new'),
        line.toLowerCase().indexOf('string'),
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 || requisitesIsValid[1] > -1 ||
          requisitesIsValid[2] > -1 && requisitesIsValid[3] > -1 &&
          requisitesIsValid[4] > -1 && requisitesIsValid[5] > -1) return true;
      }
      if (requisites()) {
        return true;
      }
    };

    function readNumber(line) {
      var requisitesIsValid = [
        line.indexOf('('),
        line.indexOf(')'),
        line.toLowerCase().indexOf('new'),
        line.toLowerCase().indexOf('number')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 && requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1 && requisitesIsValid[3] > -1) return true;
      }

      var numberIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }

        function isNumber(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        var n = isNumber(stringReplace);
        if (n) return true;
      }
      if (numberIsValid() || requisites()) {
        return true;
      }
    };

    function readArray(line) {
      var requisitesIsValid = [
        line.indexOf('('),
        line.indexOf(')'),
        line.toLowerCase().indexOf('new'),
        line.toLowerCase().indexOf('array')
      ];
      var arrayIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        if (stringReplace.indexOf('[') > -1 || stringReplace.indexOf(']') > -1) {
          return true;
        }
      }
      var requisites = function () {
        if (requisitesIsValid[0] > -1 &&
          requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1 &&
          requisitesIsValid[3] > -1) return true;
      }
      if (arrayIsValid() || requisites()) {
        return true;
      }
    };

    function readFor(line) {
      var requisiteTypeIsValid = line.toLowerCase().indexOf('for');
      var requisitesIsValid = [
        line.toLowerCase().indexOf('in'),
        line.toLowerCase().indexOf('of'),
        line.indexOf('('),
        line.indexOf(')'),
        line.indexOf('{')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] == -1 &&
          requisitesIsValid[1] == -1 &&
          requisitesIsValid[2] > -1 &&
          requisitesIsValid[3] > -1 &&
          requisitesIsValid[4] > -1) return true;
      }
      var forIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        var stringReplace = stringValue.replace('undefined', '');

        function forIsOther() {
          var forComum = true;
          if (stringReplace.toLowerCase().indexOf('in') > -1) forComum = false;
          if (stringReplace.toLowerCase().indexOf('of') > -1) forComum = false;
          return forComum;
        };
        if (stringReplace.toLowerCase().indexOf('for') > -1 && forIsOther() && stringReplace.indexOf('(') > -1 && stringReplace.indexOf(')') > -1) {
          return true;
        }
      }
      if (forIsValid() || requisiteTypeIsValid > -1 && requisites()) {
        return true;
      }
    };

    function readBoolean(line) {
      var requisitesIsValid = [
        line.indexOf('('),
        line.indexOf(')'),
        line.toLowerCase().indexOf('new'),
        line.toLowerCase().indexOf('boolean')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 && requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1 && requisitesIsValid[3] > -1) return true;
      }

      var booleanIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        if (stringReplace === "false" || stringReplace === "true") {
          return true;
        }
      }
      if (booleanIsValid() || requisites()) {
        return true;
      }
    };

    function readForin(line) {
      var requisiteTypeIsValid = line.toLowerCase().indexOf('for');
      var requisitesIsValid = [
        line.toLowerCase().indexOf('in'),
        line.indexOf('('),
        line.indexOf(')'),
        line.indexOf('{')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 &&
          requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1 &&
          requisitesIsValid[3] > -1) return true;
      }
      var forinIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        var stringReplace = stringValue.replace('undefined', '');
        if (stringReplace.toLowerCase().indexOf('for') > -1 && stringReplace.toLowerCase().indexOf('in') > -1 &&
          stringReplace.indexOf('(') > -1 &&
          stringReplace.indexOf(')') > -1) {
          return true;
        }
      }
      if (forinIsValid() || requisiteTypeIsValid > -1 && requisites()) {
        return true;
      }
    };

    function readVariable(line) {
      var varIsValid = function () {
        var string = line;
        var stringLength = string.length;
        var stringValue = '';
        var i = 0;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        if (stringReplace.toLowerCase().indexOf('var') > -1) return true;
      }
      if (varIsValid()) {
        return true;
      }
    };

    function readRequire(line) {
      var requisiteTypeIsValid = line.toLowerCase().indexOf('require');
      var requisitesIsValid = [
        line.indexOf('('),
        line.indexOf(')')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 &&
          requisitesIsValid[1] > -1) return true;
      }
      var requireValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        var stringReplace = stringValue.replace('undefined', '');
        if (stringReplace.toLowerCase().indexOf('require') > -1 && stringReplace.indexOf('(') > -1 && stringReplace.indexOf(')') > -1) {
          return true;
        }
      }
      if (requireValid() || requisiteTypeIsValid > -1 && requisites()) {
        return true;
      }
    };

    function readForof(line) {
      var requisiteTypeIsValid = line.toLowerCase().indexOf('for');
      var requisitesIsValid = [
        line.toLowerCase().indexOf('of'),
        line.indexOf('('),
        line.indexOf(')'),
        line.indexOf('{')
      ];
      var requisites = function () {
        if (requisitesIsValid[0] > -1 &&
          requisitesIsValid[1] > -1 &&
          requisitesIsValid[2] > -1 &&
          requisitesIsValid[3] > -1) return true;
      }
      var forofIsValid = function () {
        var string = line;
        var equalIndex = string.indexOf('=');
        var stringLength = string.length;
        var stringValue = '';
        var i = equalIndex;
        for (; i < stringLength; i++) {
          var letter = string[i];
          if (letter != '=' && letter != ';') {
            stringValue += letter;
          }
        }
        var stringReplace = stringValue.replace(/\s{1,}/g, '');
        var stringReplace = stringValue.replace(/[\\", \\']/g, '');
        var stringReplace = stringValue.replace('undefined', '');
        if (stringReplace.toLowerCase().indexOf('for') > -1 && stringReplace.toLowerCase().indexOf('of') > -1 &&
          stringReplace.indexOf('(') > -1 &&
          stringReplace.indexOf(')') > -1) {
          return true;
        }
      }
      if (forofIsValid() || requisiteTypeIsValid > -1 && requisites()) {
        return true;
      }
    };
  };

  /** 
   * @MVDebug {public}
   * @description Creates a file based on the favorites lines.
   * @param fileName {string} the name of file.
   * @param filePath {string} the path of file.
   * @param FLText {string} the text of favorite lines.
   * @param FLTextEnd {string} the end text of favorite lines.
   */
  function fileScanFL(fileName, filePath, FLText, FLTextEnd) {
    var fs = require('fs');
    var pluginPath = fileName;
    var filePath = localPath(filePath + '/') + pluginPath + '.js';
    var fl_active = null;
    var fl_lines = [];
    var fl_text = FLText.replace(/\s{1,}/g, '').trim().toLowerCase();
    var fl_text_end = FLTextEnd.replace(/\s{1,}/g, '').trim().toLowerCase();
    if (fl_text === fl_text_end) {
      var message = '%c The parameter {FLText: ' + fl_text_end + '} is equal the parameter {FLTextEnd: ' + fl_text_end + '} ';
      return console.log(message, 'background: #800000; font-size: 120%; color: #ffffff');
    }
    if (fs.existsSync(filePath)) {
      const readline = require('readline');
      const readStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: readStream
      });
      rl.on('line', function (line) {
        isFavoriteLine(line);
        if (fl_active) {
          fl_lines.push(line);
        }
      }).on('close', function () {
        var groupName = '%c ✰ Debug favorite lines(FL) to (' + '%c' + pluginPath + '.js' + '%c) is completed ✰ ';
        writeFileSync();
      });

      function writeFileSync() {
        deleteFLTag();
        var timer = new Date();
        var dayMonth = timer.getDate();
        var numberMonth = timer.getMonth();
        var fullYear = timer.getFullYear();
        var hours = timer.getHours();
        var minutes = timer.getMinutes();
        var seconds = timer.getSeconds();
        var completeDate = dayMonth.padZero(2) + '_' + numberMonth.padZero(2) + '_' + fullYear.padZero(2);
        var completeHour = hours.padZero(2) + '_' + minutes.padZero(2) + '_' + seconds.padZero(2);

        var fl_path = localPath(pathFileDebuggExCodeRun()) + '\\' + 'CodeRun_file_' + pluginPath + '_date_' + completeDate + '_time_' + completeHour + '.js';
        fs.writeFileSync(fl_path, fl_lines.join('\r\n'));
      }

      function isFavoriteLine(line) {
        var string_fl_index = line.indexOf(fl_text);
        var string_fl_end_index = line.indexOf(fl_text_end);
        var string_fl_line = line.replace(/\s{1,}/g, '');
        var string_fl_line = string_fl_line.replace(/[\/, \/]/g, '');
        var string_fl_line_end = line.replace(/\s{1,}/g, '');
        var string_fl_line_end = string_fl_line_end.replace(/[\/, \/]/g, '');
        if (string_fl_line.trim().toLowerCase() == fl_text) {
          fl_active = true;
        }
        if (string_fl_line_end.trim().toLowerCase() == fl_text_end) {
          fl_active = false;
        }
      }

      function deleteFLTag() {
        var i = 0;
        var length = fl_lines.length;
        var tagIndex = [];
        var tagReplace = false;
        for (; i < length; i++) {
          var string_fl_value = fl_lines[i];
          var string_fl_index = string_fl_value.indexOf(fl_text);
          var string_fl_line = string_fl_value.replace(/\s{1,}/g, '');
          var string_fl_line = string_fl_line.replace(/[\/, \/]/g, '');
          if (string_fl_line.trim().toLowerCase() == fl_text) {
            tagIndex.push(i);
          }
        }
        tagIndex.filter(function (tag) {
          if (!tagReplace) {
            fl_lines[tag] = '/**\n' +
              ' * LZOGames\n' +
              ' * Debug system v' + Imported["GS_debuggEx"] + '\n' +
              ' */';
            tagReplace = true;
          } else {
            fl_lines[tag] = '';
          }
        });
      }
    }
  };

  /** 
   * @MVDebug {public}
   * @description Runs the scripts are saved in the folder "codeRun"
   * @param fullYear {number | array} the year of folder.
   * @param fileIndex {number | array} the index of file.
   */
  function runCode(fullYear, fileIndex) {
    var fs = require('fs');
    var pathfullYear = getfolderPath();
    var pathFileIndex = getFileIndex();

    function getfolderPath() {
      var pathArray = [];
      if (fullYear instanceof Array) {
        pathArray = fullYear;
      } else if (typeof fullYear == 'number') {
        pathArray.push(fullYear);
      } else {
        return null;
      }
      return pathArray;
    }

    function getFileIndex() {
      var pathArray = [];
      if (fileIndex instanceof Array) {
        pathArray = fileIndex;
      } else if (typeof fileIndex == 'number') {
        pathArray.push(fileIndex);
      } else {
        return null;
      }
      return pathArray;
    }

    function runCode(filePath, fileName, fileIndex) {
      var name = fileName;
      var url = filePath;
      var script = document.createElement('script');
      script.id = filePath;
      script.type = 'text/javascript';
      script.src = url;
      script.async = false;
      script.onerror = runCodeError.bind(this);
      script._url = url;
      if (codeAlreadyRun(script.src)) {
        var message = '%c The script(' + name + ') is already running! ';
        console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
        // var scriptId = document.getElementById(filePath);
        // scriptId.parentElement.removeChild(scriptId);
      } else {
        var message = '%c The file index(' + fileIndex + ') is running... ';
        console.log(message, 'background: #009300; font-size: 120%; color: #ffffff');
        document.body.appendChild(script);
        scriptsRun.push(script.src);
      }
    }

    function runCodeError(e) {
      var url = e.target._url;
      throw new Error('It was not possible to run the code:' + url);
    };

    function codeAlreadyRun(scriptSrc) {
      var scriptRun = false;
      scriptsRun.filter(function (src) {
        if (src == scriptSrc) scriptRun = true;
      });
      return scriptRun;
    };

    if (pathfullYear && pathFileIndex) {
      var i = 0;
      var length = pathfullYear.length;
      for (; i < length; i++) {
        var folderPath = localPath('system/debuggEx/codeRun_' + pathfullYear);
        if (fs.existsSync(folderPath)) {
          var folderFiles = fs.readdirSync(folderPath);
          pathFileIndex.filter(function (fileIndex) {
            var file = folderFiles[fileIndex - 1];
            if (file) {
              var filePath = folderPath + '\\' + file;
              runCode(filePath, file, fileIndex);
            } else {
              var message = '%c The file index(' + fileIndex + ') no exist ';
              console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
            }
          });
        }
      }
    } else {
      var groupName = '%c The parameters are not supported, function (runCode) ';
      console.group(groupName,
        'background: #ec0000; font-size: 120%; color: #ffffff'
      );
      var message = '%c The parameters that are supported are: number or array ';
      console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
      console.groupEnd(groupName);
    }
  };

  /** 
   * @MVDebug {public}
   * @description Shows the file in folder of project.
   * @param fileName {string} the name of file.
   * @param filePath {string} the path of file.
   * @param fileExtension {string} the extension of file.
   */
  function showfileInFolder(fileName, filePath, fileExtension) {
    if (typeof fileName == 'number' || typeof filePath == 'number' ||
      typeof fileExtension == 'number' || typeof fileName == 'object' ||
      typeof filePath == 'object' || typeof fileExtension == 'object') {
      var groupName = '%c The parameters are not supported, function (showfileInFolder) ';
      console.group(groupName,
        'background: #ec0000; font-size: 120%; color: #ffffff'
      );
      var message = '%c The parameter(fileName) are supported: string ';
      console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
      var message = '%c The parameter(filePath) are supported: string or boolean ';
      console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
      var message = '%c The parameter(fileExtension) are supported: string ';
      console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
      console.groupEnd(groupName); return;
    }
    var fs = require('fs');
    if (!filePath || filePath == '') {
      var pathFile = localPath(fileName + '.' + fileExtension);
    } else {
      var pathFile = localPath(filePath) + '\\' + fileName + '.' + fileExtension;
    }
    if (fs.existsSync(pathFile)) {
      if (Utils.isNwjs()) {
        var gui = require('nw.gui');
        gui.Shell.showItemInFolder(pathFile);
      }
    } else {
      var message = '%c The file (' + fileName + '.' + fileExtension + ') no exist ';
      console.log(message, 'background: #ec0000; font-size: 120%; color: #ffffff');
    }
  };

  //-----------------------------------------------------------------------------
  // MVDebug - IMPORT CODE
  //  
  MVDebug.scriptRun = scriptsRun;
  MVDebug.fileScanType = fileScanType;
  MVDebug.fileScanFL = fileScanFL;
  MVDebug.runCode = runCode;
  MVDebug.showfileInFolder = showfileInFolder;
  MVDebug.latestVersion = Imported["GS_debuggEx"];
  MVDebug.releaseDate = '10/20/2017';
  MVDebug.github = 'https://github.com/GuilhermeSantos001/MVDebug';
  MVDebug.goGithub = goGithub;
  MVDebug.computerUsername = computerUsername;

})(MVDebug);
//=============================================================================
//           ✰ LZOGAMES ✰ KADOKAWA ✰ Yoji Ojima ✰ Degica ✰
//=============================================================================