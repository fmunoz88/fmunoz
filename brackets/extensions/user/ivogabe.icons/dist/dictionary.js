define(["require", "exports"], function (require, exports) {
    function findInDictionary(dictionary, fileName, secondMatch, compare) {
        var match = dictionary.findFullFileName(fileName);
        if (match !== undefined)
            return [match];
        var matches = [];
        var elements = fileName.split(".");
        // If the file name starts with a . then we don't want to match on the empty string
        if (elements[0] === '')
            elements.shift();
        var extension = elements[elements.length - 1];
        var prefix = elements[elements.length - 2];
        var add = function () {
            if (match !== undefined && !compare(matches[matches.length - 1], match)) {
                matches.push(match);
                if (secondMatch && matches.length === 1)
                    return false;
                return true;
            }
            return false;
        };
        if (secondMatch) {
            match = dictionary.findExtension(extension);
            if (add())
                return matches;
            match = dictionary.findFileName(prefix, extension);
            if (add())
                return matches;
        }
        else {
            match = dictionary.findFileName(prefix, extension);
            if (add())
                return matches;
            match = dictionary.findExtension(extension);
            if (add())
                return matches;
        }
        if (matches.length === 0) {
            matches.push(dictionary.getEmptyItem(fileName));
        }
        if (secondMatch && elements.length > 2) {
            match = dictionary.findExtensionPrefix(prefix);
            if (add())
                return matches;
            match = dictionary.findExtension(prefix);
            if (add())
                return matches;
        }
        return matches;
    }
    exports.findInDictionary = findInDictionary;
});
