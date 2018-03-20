var dom = {
    removeAll : function(node = document.body){
        while(node.firstChild){
            var removing = node.firstChild;
            node.removeChild(node.firstChild);
            console.log('removed ' + (removing.id || removing.tagName || 'comment'));
        }
    },
    write : function(node, addedHTML){
        node.innerHTML = node.innerHTML + addedHTML;
    },
    unshift : function(node, addedHTML){
        node.innerHTML = addedHTML + node.innerHTML;
    },
    insertBefore : function(node, referenceNode){
        node.parentNode.insertBefore(node, referenceNode);
    }
};