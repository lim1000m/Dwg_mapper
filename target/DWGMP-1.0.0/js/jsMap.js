function JMap() {
    
    /** ??? index ?? */
    this._INDEX_KEY = 0;
    this._INDEX_VALUE = 1;
    
    /** private ??? ?? Array */
    this._elementData = new Array(0);

    this.put = function(key, value) {
        var index = this._findIndexByKey(key);
        if (index >= 0) {
            (this._elementData[index])[this._INDEX_VALUE] = value;
        } else {
            var pair = new Array(2);
            pair[this._INDEX_KEY] = key;
            pair[this._INDEX_VALUE] = value;
            this._elementData.splice(this._elementData.length, 0, pair);
        }
    }
    
    /**
     * public
     * ??? key ? ???? value ? ???
     * @param key ??
     * @return ?? ???? ?
     */
    this.get = function(key) {
        var index = this._findIndexByKey(key);
        if (index >= 0) {
            return (this._elementData[index])[this._INDEX_VALUE];
        }
        return null;
    }
    
    /**
     * public
     * ??? key ? ???? value ? ????
     * @param key ??
     */
    this.remove = function(key) {
        var removeIndex = this._findIndexByKey(key);
        if (removeIndex >= 0) {
            this._elementData.splice(removeIndex, 1);
        }
    }
    
    /**
     * public
     * ?? ?? Key ??? ??? ???
     * @return key ??? Array
     */
    this.keys = function() {
        var keys = new Array(this._elementData.length);
        for (var i = 0; i < this._elementData.length; i++) {
            keys[i] = (this._elementData[i])[this._INDEX_KEY];
        }
        return keys;
    }
    
    /**
     * public
     * ?? ?? ??? ??? ???.
     * @return key ??? Array
     */
    this.values = function() {
        var values = new Array(this._elementData.length);
        for (var i = 0; i < this._elementData.length; i++) {
            values[i] = (this._elementData[i])[this._INDEX_VALUE];
        }
        return values;
    }
    
    /**
     * public
     * ?? key ? ???? ??? true
     * @param key ??
     * @return ?? ?? ??
     */
    this.containsKey = function(key) {
        return (this._findIndexByKey(key) >= 0);
    }
    
    /**
     * public
     * ?? ????? true
     * @return ?? ????? ??
     */
    this.isEmpty = function() {
        return (this.size() == 0);
    }
    
    /**
     * public
     * ?? ???
     */
    this.clear = function() {
        this._elementData.splice(0, this._elementData.length);
    }
    
    /**
     * public
     * ?? ??? ???
     * @return ?? ??
     */
    this.size = function() {
        return this._elementData.length;
    }
    
    /**
     * public
     * ??? ???? ???? (key^value|key^value|... ??)
     * @return ???
     */
    this.toString = function() {
        var str = "";
        for (var i = 0; i < this._elementData.length; i++) {
            if (i > 0) {
                str += "|";
            }
            str += (this._elementData[i]).join("^");
        }
        return str;
    }
    
    /**
     * private
     * ?? key ? index ? ???.
     * ?? ??? -1 ? return ??. (0?? ??? ?? ??)
     * @param key ??
     * @exception JException 
     */
    this._findIndexByKey = function(key) {
        if (key == null) {
            throw new JNullPointerException("map's key is null");
        }
        
        for (var i = this._elementData.length - 1; i >= 0; i--) {
            var oldKey = (this._elementData[i])[this._INDEX_KEY];
            if (key == oldKey) {
                return i;
            }
        }
        return -1;
    }
} // End of JMap Class