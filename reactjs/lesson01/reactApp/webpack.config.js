// Importa o plugin 'html-webpack-plugin'
const HtmlwebpackPlugin = require('html-webpack-plugin')
// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivos e diretórios
const path = require('path')

// Exporta as configurações do Webpack
module.exports = {
    // Define o ponto de entrada do aplicativo
    entry: './index.js',
    // Define o modo de compilação (development ou production)
    mode: 'development',
    // Define as configurações de saída
    output: {
        // Define o diretório de saída usando um caminho absoluto
        path: path.resolve(__dirname, './dist'),
        // Define o nome do arquivo de saída
        filename: 'index_bundle.js',
    },
    // Define o alvo da compilação (neste caso, web)
    target: 'web',
    // Configurações do servidor de desenvolvimento
    devServer: {
        // Define a porta do servidor de desenvolvimento
        port: '5000',
        // Define o diretório estático a ser servido
        static: {
            directory: path.join(__dirname, 'public')
        },
        // Abre o navegador automaticamente quando o servidor é iniciado
        open: true,
        // Habilita o Hot Module Replacement (HMR)
        hot: true, 
        // Habilita a recarga ao vivo
        liveReload: true,
    },
    // Configurações de resolução de módulos
    resolve: {
        // Define as extensões de arquivos a serem resolvidas automaticamente
        extensions: ['.js', '.jsx', '.json']
    },
    // Configurações de módulos
    module: {
        // Regras para diferentes tipos de módulos
        rules: [{
            // Aplica esta regra a arquivos com extensões .js e .jsx
            test: /\.(js|jsx)$/,
            // Exclui o diretório node_modules
            exclude: /node_modules/,
            // Usa o babel-loader para transpilar arquivos JavaScript
            use: 'babel-loader'
        }]
    },
    // Configurações de plugins
    plugins: [
        // Usa o HtmlwebpackPlugin para gerar um arquivo HTML a partir de um template
        new HtmlwebpackPlugin({
            // Define o caminho para o arquivo de template HTML
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}
