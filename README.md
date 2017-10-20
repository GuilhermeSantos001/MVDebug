# MVDebug
Great utility library that provides to big system debug.

# Documentation

- Use this plugin in your project of RPG MAKER MV.

### Console methods
- Console.fileScanType
  - Determines the amount of functions, variables, strings, for(loop) and etc.
  - fileName {string} the name of file.
  - filePath {string} the path of file.
  - readType {string} the type of scan.
  - saveCache {boolean} save in cache the full scan.

- ReadTyoe - list
    - function
    - for
    - forin
    - forof
    - variable
    - require
    - boolean
    - array
    - string
    - number

- Console.fileScanFL
    - Creates a file based on the favorites lines.
    - fileName {string} the name of file.
    - filePath {string} the path of file.

- Console.runCodeFL
    - Runs the scripts are saved in the folder "codeRun"
    - fullYear {number | array} the year of folder.
    - fileIndex {number | array} the index of file.
