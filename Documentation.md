# Documentation

- Use this plugin in your project of RPG MAKER MV.

- When using the method 'console.runCode' the script cannot be stopped through commands of this plugin.

## Console methods

- Console.fileScanType
  - Determines the amount of functions, variables, strings, for(loop) and etc.
  - fileName {string} the name of file.
  - filePath {string} the path of file.
  - readType {string} the type of scan.
  - saveCache {boolean} save in cache the full scan.

- ReadTyoe - Valid values
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

- Console.fileWriteDS
    - Create a default struct for new plugin.
    - fileName {string} the name of file.
    - fileConfig {object} the config of file.

> If you do not set the parameter (fileConfig) he receives the default value given by the system. When you create a default structure for the new plugin, it runs from do after your configuration.

- fileConfig - Valid elements
    - pluginName {string} the name of plugin.
    - fileAuthor {string} the name of author.
    - fileName {string} the name of file.
    - fileVersion {string} the version of plugin.
    - pluginDescription {string} the description of plugin.
    - pluginParameter {string} the name of default parameter.
    - pluginParameterDescription {string} the description of default parameter.
    - pluginParameterValue {string} the value of default parameter.
    - pluginHelpIntroduction {string} the text for the introduction to default line of help.
    - pluginVariableNameSpace {string} the global 'nameSpace' of file.
    - pluginNameSpace {string} the 'nameSpace' of file.
    - pluginCodePrefix {string} the 'codePrefix' of file.
    - pluginImportedName {string} the name to import the plugin.

- fileConfig - Default values
    - pluginName {default} pluginName
    - fileAuthor {default} author.
    - fileName {default} the parameter {fileName} of function.
    - fileVersion {default} 1.00.
    - pluginDescription {default} Plugin Description.
    - pluginParameter {default} paramName.
    - pluginParameterDescription {default} paramDesc.
    - pluginParameterValue {default} paramDefault.
    - pluginHelpIntroduction {default} Plugin introduction.
    - pluginVariableNameSpace {default} VSP
    - pluginNameSpace {default} nameSpace.
    - pluginCodePrefix {default} $.
    - pluginImportedName {default} the parameter {fileName} of function.

- Console.loadScript
    - Load the file to script.
    - fileName {string} the name of file.
    - filePath {string} the path of file.

- Console.loadScriptExist
    - Checks whether the script is already running.
    - filePath {string} the path of file.

- Console.stopScriptExist
    - Stop the execution of the script.
    - fileName {string} the name of file.
    - filePath {string} the path of file.