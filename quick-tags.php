<?php 

/*
Plugin Name: Quick Tags
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