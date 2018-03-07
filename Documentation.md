# Documentação

- Use este plugin no seu projeto de RPG MAKER MV.

- Ao usar o método 'console.runCode', o script não pode ser interrompido através dos comandos deste plugin.

## Console methods

- Console.fileScanType
  - Determina a quantidade de funções, variáveis, strings, loops e etc.
  - fileName {string} o nome do arquivo
  - filePath {string} o caminho para o arquivo
  - readType {string} o tipo de varredura
  - saveCache {boolean} salve no cache a varredura completa.

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
    - Cria um arquivo com base nas linhas de favoritos.
    - fileName {string} o nome do arquivo.
    - filePath {string} o caminho do arquivo.
    - FLText {string} o texto das linhas favoritas.
    - FLTextEnd {string} o texto final das linhas favoritas.

- Console.runCode
    - Executa os scripts guardados na pasta "codeRun"
    - fullYear {number | array} o ano da pasta.
    - fileIndex {number | array} o índice do arquivo.

- Console.showfileInFolder
    - Mostra o arquivo na pasta do projeto.
    - fileName {string} o nome do arquivo.
    - filePath {string} o caminho do arquivo.
    - fileExtension {string} a extensão do arquivo.

- Console.computerUsername
    - Retorna o nome de usuário do computador.

- Console.goGithub
    - Abre o github do script no seu navegador padrão.

- Console.fileWriteDS
    - Crie uma estrutura padrão para o novo plugin.
    - fileName {string} o nome do arquivo.
    - fileConfig {object} a configuração do arquivo.

> Se você não definir o parâmetro (fileConfig) ele recebe o valor padrão fornecido pelo sistema. Quando você cria uma estrutura padrão para o novo plugin, ele é executado depois da configuração.

- fileConfig - Elementos válidos
    - pluginName {string} o nome do plugin.
    - fileAuthor {string} o nome do autor
    - fileName {string} o nome do arquivo
    - fileVersion {string} a versão do plugin.
    - pluginDescription {string} a descrição do plugin.
    - pluginParameter {string} o nome do parâmetro padrão.
    - pluginParameterDescription {string} a descrição do parâmetro padrão.
    - pluginParameterValue {string} o valor do parâmetro padrão.
    - pluginHelpIntroduction {string} O texto para a introdução da linha de ajuda padrão.
    - pluginVariableNameSpace {string} o 'namespace' global do arquivo.
    - pluginNameSpace {string} o 'namespace' do arquivo.
    - pluginCodePrefix {string} o 'códigoPrefixo' do arquivo.
    - pluginImportedName {string} o nome para importar o plugin.

- fileConfig - Valores padrões
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
    - Carregue o arquivo no script.
    - fileName {string} o nome do arquivo.
    - filePath {string} o caminho do arquivo.

- Console.loadScriptExist
    - Verifica se o script já está sendo executado.
    - filePath {string} o caminho do arquivo.

- Console.stopScriptExist
    - Pare a execução do script.
    - fileName {string} o nome do arquivo.
    - filePath {string} o caminho do arquivo.
    
- Console.setStepsSprite 
    - Troque o sprite para capturar o eixo x e y do movimento.
    - sprite {string} player ou event.
    - index {number} null ou id do evento
