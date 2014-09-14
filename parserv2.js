"use strict";

/**
 * Parse .cfg files from file input or pasted text.
 */
var ConfigParser = function () {
    this.config = null;
};

/**
 * Initialize a ConfigParser object by caching elements and binding events.
 */
ConfigParser.prototype.Init = function () {
  this.CacheElements();
  this.BindEvents();
};

/**
 * Cache page elements that may be referenced multiples to the cost of having
 * to look them up multiple times.
 */
ConfigParser.prototype.CacheElements = function () {
  this.$inputFile = $('input[data-upload="file"]');
  this.$inputText = $('textarea[data-upload="text"]');
};

/**
 * Bind events to page elements that the ConfigParser object will handle.
 */
ConfigParser.prototype.BindEvents = function () {
  this.$inputFile.on('change', $.proxy(this.DoParse, this));
  this.$inputText.on('input', $.proxy(this.DoParse, this));
};

/**
 * Attempt to parse a config based on the event that initiated the parse.
 * event - An event used to determine which input method initiated the parse
 * request.
 * Returns true if a parse task was successfully started.
 */
ConfigParser.prototype.DoParse = function (event) {
  console.log('DoParse: %o', event);
  var success = false;

  if(event.type == 'change') {
    success = this.ParseFromFile(event);
  }
  else if(event.type == 'input') {
    success = this.ParseFromPaste();
  }

  return success;
};

/**
 * Parse text input into a text field as a config.
 */
ConfigParser.prototype.ParseFromPaste = function () {
  console.log('ParseFromPaste');
  var pasteContent = this.$inputText.val();
  $('.content-container').append('<hr><pre>' + pasteContent + '</pre>');

  pasteContent = this.CleanFileContents(pasteContent);
  $('.content-container').append('<hr><pre>' + pasteContent + '</pre>');
  var contentArray = this.ContentStringToArray(pasteContent);
  $('.content-container').append('<hr><pre>' + contentArray + '</pre>');
  contentArray = this.ReformatContentArray(contentArray);
  $('.content-container').append('<hr><pre>' + contentArray + '</pre>');

  this.WriteConfigToModel(contentArray);
};

/**
 * Parse the contents of a file.
 * event - A change event triggered by a file input.
 * Returns true if the file was successfully opened and parsed.
 */
ConfigParser.prototype.ParseFromFile = function (event) {
  console.log('ParseFromFile');
  if(!this.ClientCanReadFiles()) {
    console.error('The client is unable to read files.');
    return false;
  }

  // get the first file only
  var file = event.target.files[0];
  if(!file) {
    console.error('File not available.');
    return false;
  }

  this.ParseContentsFromFile(file);
};

/**
 * Determine whether or not a client browser is capable of opening and reading
 * files.
 * Returns true if the client is capable of opening files.
 */
ConfigParser.prototype.ClientCanReadFiles = function () {
  console.log('ClientCanReadFiles');
  if(!FileReader) {
    return false;
  }

  if(!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    return false;
  }

  return true;
};

/**
 * Retrieve the contents of a file.
 * file - A file object to read from.
 */
ConfigParser.prototype.ParseContentsFromFile = function (file) {
  console.log('GetContentsFromFile');

  var fileReader = new FileReader();
  fileReader.onload = $.proxy(this.FileReader_OnLoad, this, fileReader);
  fileReader.readAsText(file);
};

/**
 * Method called by a FileReader object when it has successfully finished
 * reading a file.
 * fileReader - the FileReader object for which this method is set to.
 */
ConfigParser.prototype.FileReader_OnLoad = function (fileReader) {
  console.log('FileReader_OnLoad');
  var content = fileReader.result;
  content = this.CleanFileContents(content);

  var contentArray = this.ContentStringToArray(content);
  contentArray = this.ReformatContentArray(contentArray);

  this.WriteConfigToModel(contentArray);
};

/**
 * Remove extra whitespace and comments from the contents of a config.
 * content - A string containing the contents to be cleaned.
 * Returns a string of the contents after removing whitespace and comments.
 */
ConfigParser.prototype.CleanFileContents = function (content) {
  console.log('CleanFileContents');
  var newContent = content;

  // remove comments to the end of the line
  //newContent = newContent.replace(/\s+\/{2,}.*/g, '');
  newContent = newContent.replace(/\/{2,}.*/g, '');

  // remove extra white space
  newContent = newContent.replace(/\r|\n{2,}/g, '\n');

  return newContent;
};

/**
 * Convert a string into an array containing an arrays. Splits the content
 * string on news lines then splits each line by spaces.
 * content - A string to be converted to an array of arrays.
 * Returns the content string converted to an array of arrays.
 */
ConfigParser.prototype.ContentStringToArray = function (content) {
  console.log('ContentStringToArray');
  var contentArray = content.split('\n');
  for(var i = 0, length = contentArray.length; i < length; i++) {
    contentArray[i] = contentArray[i].split(' ');
  }

  return contentArray;
};

/**
 * Reformat an array into a format easier to manipulate.
 * contentArray - An array of arrays to be formatted.
 * Returns a new array based on the input array with structure and content
 * changes.
 */
ConfigParser.prototype.ReformatContentArray = function (contentArray) {
  var newContentArray = contentArray;

  for(var i = 0, length = contentArray.length; i < length; i++) {
    if(newContentArray[i].length <= 2) {  // skip blank lines
      continue;
    }
    else if(newContentArray[i][0] == 'bind') {  // handle key bindings
      for(var j = 3; j < newContentArray[i].length; j++) {
        newContentArray[i][2] += ' ' + newContentArray[i][j];
        newContentArray[i][j] = null;
      }
    }
    else {
      for(var j = 2; j < newContentArray[i].length; j++) {  // handle commands
        newContentArray[i][1] += ' ' + newContentArray[i][j];
        newContentArray[i][j] = null;
      }
    }
  }

  return newContentArray;
};

/**
 * Load a parsed config array into the store model.
 * contentArray - An array of the parsed config file.
 */
ConfigParser.prototype.WriteConfigToModel = function (contentArray) {
  this.config = [];

  for(var i = 0, length = contentArray.length; i < length; i++) {
    if(contentArray[i][0] == 'bind') {
      this.AddOptionToConfigExport(this.FormatKeyAsModelKeybind(contentArray[i][1]), contentArray[i][2]);
    }
    else if(contentArray[i][0]) {
      this.AddOptionToConfigExport(this.FormatKeyAsModelCommand(contentArray[i][0]), this.RemoveQuotes(contentArray[i][1]));
    }
  }
};

/**
 * Remove quotation marks from a string.
 * value - The string to remove all quote characters from.
 * Returns a string with all quote characters removed.
 */
ConfigParser.prototype.RemoveQuotes = function (value) {
  var newValue = value;

  newValue = newValue.replace(/"/g, '');

  return value;
};

/**
 * Convert a string of text into a format used by the data store model to
 * identify keybinds.
 * key - A string to convert to the keybind format.
 * Returns a string of the converted key.
 */
ConfigParser.prototype.FormatKeyAsModelKeybind = function (key) {
  key = key.replace(/"/g, '');
  key = key.toLowerCase();
  var newKey = 'key';

  for(var i = 0, length = key.length; i < length; i++) {
    if(key[i] == '_') {
      continue;
    }
    if(i == 0 || key[i - 1] == '_') {
      newKey += key[i].toUpperCase();
    }
    else {
      newKey += key[i];
    }
  }

  newKey = this.GetKeyAsText(newKey);
  return newKey;
};

/**
 * Convert a string of text into a format used by the data store model to
 * identify commands.
 * key - A string of text to convert to the command format.
 * Returns a string of the converted key.
 */
ConfigParser.prototype.FormatKeyAsModelCommand = function (key) {
  var newKey = '';

  for(var i = 0, length = key.length; i < length; i++) {
    if(key[i] == '_') {
      i++;
      newKey += key[i].toUpperCase();
    }
    else {
      newKey += key[i];
    }
  }

  return newKey;
};

/**
 * Get the model name of a keybinding key for special characters.
 * key - A string to convert to the special database key if needed.
 * Returns either the original string or a modified version of the string
 * matching the database field name.
 */
ConfigParser.prototype.GetKeyAsText = function (key) {
  var keyName = key;

  switch(keyName) {
    case 'key0':
    case 'key1':
    case 'key2':
    case 'key3':
    case 'key4':
    case 'key5':
    case 'key6':
    case 'key7':
    case 'key8':
    case 'key9':
      keyName = keyName.substr(0, keyName.length - 1) + 'K' + keyName[keyName.length - 1];
      break;
    case 'key-':
      keyName = 'keyHyphen';
      break;
    case 'key=':
      keyName = 'keyEquals';
      break;
    case 'key[':
      keyName = 'keyLbracket';
      break;
    case 'key]':
      keyName = 'keyRbracket';
      break;
    case 'key\\':
      keyName = 'keyBkslash';
      break;
    case 'key;':
      keyName = 'keySemicolon';
      break;
    case 'key\'':
      keyName = 'keyApostrophe';
      break;
    case 'key,':
      keyName = 'keyComma';
      break;
    case 'key.':
      keyName = 'keyPeriod';
      break;
    case 'key/':
      keyName = 'keyFwslash';
      break;
    case 'keyCaps':
      keyName = 'keyCapslock';
      break;
  }

  return keyName;
};

/**
 * Add a key, value pair object to the this.config property.
 * key - A string containing the config option name.
 * value - A string containg the value to set the option to.
 */
ConfigParser.prototype.AddOptionToConfigExport = function (key, value) {
  console.log('Key: %s | Value: %s', key, value);
  this.config.push({
    'key': key,
    'value': value
  });
};

$(document).ready(function() {
  var configParser = new ConfigParser();
  configParser.Init();
});
