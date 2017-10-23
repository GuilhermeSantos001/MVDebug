# Documentation

- Use this plugin in your project of RPG MAKER MV.

- When using the method 'console.runCode' the script cannot be stopped through commands of this plugin.

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
    - FLText {string} the text of favorite lines.
    - FLTextEnd {string} the end text of favorite lines.

- Console.runCode
    - Runs the scripts are saved in the folder "codeRun"
    - fullYear {number | array} the year of folder.
    - fileIndex {number | array} the index of file.

- Console.showfileInFolder
    - Shows the file in folder of project.
    - fileName {string} the name of file.
    - filePath {string} the path of file.
    - fileExtension {string} the extension of file.

- Console.computerUsername
    - Returns the username of the computer.

- Console.goGithub
    - Opens the github of script in your default browser.