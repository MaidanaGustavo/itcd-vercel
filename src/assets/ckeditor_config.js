CKEDITOR.editorConfig = function( config ) {
  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard', groups: [ 'undo', 'clipboard' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    { name: 'forms', groups: [ 'forms' ] },
    { name: 'links', groups: [ 'links' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'tools', groups: [ 'tools' ] },
    '/',
    { name: 'styles', groups: [ 'styles' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    { name: 'insert', groups: [ 'insert' ] },
    { name: 'others', groups: [ 'others' ] },
    { name: 'about', groups: [ 'about' ] }
  ];

  config.removeButtons = 'Source,Save,Form,Checkbox,Radio,TextField,Textarea,Select,HiddenField,ImageButton,Button,Smiley,Iframe,Flash,ShowBlocks,About,CreateDiv';
};
