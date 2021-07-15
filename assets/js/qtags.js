// adding a html tag

QTags.addButton('button_one','U','<u>','</u>');
QTags.addButton( 'eg_php', 'PHP', '<pre><code class=\"language-php\">', '</code></pre>', 'p', 'PHP Code', 200 );
QTags.addButton( 'eg_css', 'CSS', '<pre><code class=\"language-css\">', '</code></pre>', 'q', 'CSS Code', 201 );
QTags.addButton( 'eg_html', 'HTML', '<pre><code class=\"language-html\">', '</code></pre>', 'r', 'HTML Code', 202 );

// insert any content with QTags.insertContent();
QTags.addButton( 'add_text','ADD TEXT', add_text_callback );

function add_text_callback(){
	var text = prompt();
	QTags.insertContent(text);
}

// Showing Pop-up using thickbox
QTags.addButton( 'add_icon','FontAwesome Icon', add_icon_callback );

function add_icon_callback(){
	tb_show("FontAwesome",qticon.preview); // for opening popup
}

function FAicon(icon){
	tb_remove();
	QTags.insertContent('<i class="fa '+icon+'"></i>');
}

