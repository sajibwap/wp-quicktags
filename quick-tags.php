<?php 

/*
Plugin Name: Quick Tags and TinyMCE 
Plugin URI: http://msajib.com
Description: Quick tags plugin
Version: 1.00
Author: Sajib
Author URI: http://msajib.com
Text Domain: textdomain
Domain Path: /languages/
*/

class QuickTags{

	public function __construct(){
		add_action('admin_enqueue_scripts',array($this,'qt_plugins_assets'));
	}

	public function qt_plugins_assets($screen){
		if ( $screen == 'post.php' || $screen == 'post-new.php' ) {
			wp_enqueue_script(
				'qtags-js',
				plugin_dir_url( __FILE__ )."/assets/js/qtags.js",
				array('quicktags','thickbox'),
				time(),
				true
			);

			wp_localize_script( 
				'qtags-js', 
				'qticon', 
				array(
					'preview'=>plugin_dir_url( __FILE__ )."/assets/fontawesome.php"
				) 
			);
		}
	}

}
new QuickTags();

/*
** Alternative of wp_localize_script
** Add Internal JS in the footer
**/

function my_quicktags() {
	if ( wp_script_is( 'quicktags' ) ) {
		?>
		<script type="text/javascript">
	   // JS code goes here
		</script>
	<?php
}
}
add_action( 'admin_print_footer_scripts', 'my_quicktags' );


/*
** tinyMCE - Visual Text Editor
** 
**/

Class tinyMC{

	public function __construct(){
		add_action('admin_init',array($this,'tiny_mc_assets'));
	}

	public function tiny_mc_assets(){
		add_filter( 'mce_buttons', array($this,'mce_buttons_register_callback') );
		add_filter( 'mce_external_plugins', array($this,'mce_external_plugins_callback') );
	}

	public function mce_buttons_register_callback($buttons){
		$buttons[] = 'tmce_button_one';
		$buttons[] = 'tmce_button_two';
		$buttons[] = 'tmce_button_three';
		$buttons[] = 'tmce_button_form';
		return $buttons;
	}

	public function mce_external_plugins_callback($plugins){
		$plugins['tmce_plugin'] = plugin_dir_url(__FILE__)."assets/js/tinymce.js";
		return $plugins;
	}

}

new tinyMC();