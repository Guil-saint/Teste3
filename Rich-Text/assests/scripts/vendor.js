const boldBtn = document.getElementById('btn-bold');
const italicBtn = document.getElementById('btn-italic');
const underlineBtn = document.getElementById('btn-underline');
const strikethroughBtn = document.getElementById('btn-strikethrough');
const justifyLeftBtn = document.getElementById('btn-justify-left');
const justifyCenterBtn = document.getElementById('btn-justify-center');
const justifyRightBtn = document.getElementById('btn-justify-right');
const justifyFullBtn = document.getElementById('btn-justify-full');
const cutBtn = document.getElementById('btn-cut');
const copyBtn = document.getElementById('btn-copy');
const indentBtn = document.getElementById('btn-indent');
const outdentBtn = document.getElementById('btn-outdent');
const subscriptBtn = document.getElementById('btn-subscript');
const superscriptBtn = document.getElementById('btn-superscript');
const undoBtn = document.getElementById('btn-undo');
const redoBtn = document.getElementById('btn-redo');
const ulBtn = document.getElementById('btn-ul');
const olBtn = document.getElementById('btn-ol');
const paragraphBtn = document.getElementById('btn-paragraph');
const hrBtn = document.getElementById('btn-hr');
const createLinkBtn = document.getElementById('btn-create-link');
const unlinkBtn = document.getElementById('btn-unlink');
const codeBtn = document.getElementById('btn-code');
const editBtn = document.getElementById('btn-edit');
const imageBtn = document.getElementById('btn-image');
const allBtn = document.getElementById('btn-all');
const hfsBtn = document.getElementById('btn-hfs');
const fontfBtn = document.getElementById('btn-fontf');
const fontsBtn = document.getElementById('btn-fonts');
const fontColorBtn = document.getElementById('btn-font-color');
const backColorBtn = document.getElementById('btn-back-color');

boldBtn.addEventListener('click', function(){ execCmd('bold'); });
italicBtn.addEventListener('click', function(){ execCmd('italic'); });
underlineBtn.addEventListener('click', function(){ execCmd('underline'); });
strikethroughBtn.addEventListener('click', function(){ execCmd('strikethrough'); });
justifyLeftBtn.addEventListener('click', function(){ execCmd('justifyLeft'); });
justifyCenterBtn.addEventListener('click', function(){ execCmd('justifyCenter'); });
justifyRightBtn.addEventListener('click', function(){ execCmd('justifyRight'); });
justifyFullBtn.addEventListener('click', function(){ execCmd('justifyFull'); });
cutBtn.addEventListener('click', function(){ execCmd('cut'); });
copyBtn.addEventListener('click', function(){ execCmd('copy'); });
indentBtn.addEventListener('click', function(){ execCmd('indent'); });
outdentBtn.addEventListener('click', function(){ execCmd('outdent'); });
subscriptBtn.addEventListener('click', function(){ execCmd('subscript'); });
superscriptBtn.addEventListener('click', function(){ execCmd('superscript'); });
undoBtn.addEventListener('click', function(){ execCmd('undo'); });
redoBtn.addEventListener('click', function(){ execCmd('redo'); });
ulBtn.addEventListener('click', function(){ execCmd('insertUnorderedList'); });
olBtn.addEventListener('click', function(){ execCmd('insertOrderedList'); });
paragraphBtn.addEventListener('click', function(){ execCmd('insertParagraph'); });
hrBtn.addEventListener('click', function(){ execCmd('insertHorizontalRule'); });
createLinkBtn.addEventListener('click', function(){ execCmd('createLink', prompt('Adicione uma Url', 'http://')); });
unlinkBtn.addEventListener('click', function(){ execCmd('unlink'); });
codeBtn.addEventListener('click', toggleSource);
editBtn.addEventListener('click', toggleEdit);
imageBtn.addEventListener('click', function(){ execCommandWithArg('insertImage', prompt('Enter the image Url', '')); });
allBtn.addEventListener('click', function(){ execCmd('selectAll'); });
hfsBtn.addEventListener('change', function(){ execCommandWithArg('formatBlock', this.value); });
fontfBtn.addEventListener('change', function(){ execCommandWithArg('fontName', this.value); });
fontsBtn.addEventListener('change', function(){ execCommandWithArg('fontSize', this.value); });
fontColorBtn.addEventListener('change', function(){ execCommandWithArg('foreColor', this.value); });
backColorBtn.addEventListener('change', function(){ execCommandWithArg('hiliteColor', this.value); });
