function xmlToJson(xml) {
    // Inicializa um objeto vazio para armazenar o JSON, e algumas variáveis para iteração
    var obj = {},
        i, j, attribute, item, nodeName, old;

    // Verifica se o nó XML é um elemento (tipo 1)
    if (xml.nodeType === 1) { // element
        // Verifica se o elemento possui atributos
        if (xml.attributes.length > 0) {
            // Cria uma propriedade especial "@attributes" para armazenar os atributos do elemento
            obj["@attributes"] = {};
            // Itera sobre os atributos do elemento
            for (j = 0; j < xml.attributes.length; j = j + 1) {
                // Pega o atributo atual
                attribute = xml.attributes.item(j);
                // Adiciona o nome e o valor do atributo ao objeto JSON
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    }
    // Verifica se o nó XML é um texto (tipo 3)
    else if (xml.nodeType === 3) { 
        // Armazena o valor do texto, removendo espaços em branco
        obj = xml.nodeValue.trim();
    }

    // Verifica se o nó XML possui nós filhos
    if (xml.hasChildNodes()) {
        // Itera sobre todos os nós filhos
        for (i = 0; i < xml.childNodes.length; i = i + 1) {
            // Pega o nó filho atual
            item = xml.childNodes.item(i);
            // Obtém o nome do nó
            nodeName = item.nodeName;
            // Verifica se o nome do nó já não existe no objeto JSON
            if ((obj[nodeName]) === undefined) {
                // Adiciona o nó filho ao objeto JSON
                obj[nodeName] = xmlToJson(item);
            } else {
                // Verifica se o nome do nó já está armazenado como uma array
                if ((obj[nodeName].push) === undefined) {
                    // Salva o nó existente
                    old = obj[nodeName];
                    // Converte o nó existente em uma array
                    obj[nodeName] = [];
                    // Adiciona o nó antigo à array
                    obj[nodeName].push(old);
                }
                // Adiciona o nó filho à array (caso existam múltiplos nós com o mesmo nome)
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    // Retorna o objeto JSON
    return obj;
}