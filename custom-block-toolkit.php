<?php
/**
 * Plugin Name:       Custom Block Toolkit
 * Description:       A collection of custom Gutenberg blocks.
 * Version:           1.0.0
 * Requires at least: 6.4
 * Requires PHP:      8.0
 * Author:            Ben Beard
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-block-toolkit
 */

// Bail if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define plugin constants
define( 'CUSTOM_BLOCK_TOOLKIT_VERSION', '1.0.0' );
define( 'CUSTOM_BLOCK_TOOLKIT_PATH', plugin_dir_path( __FILE__ ) );
define( 'CUSTOM_BLOCK_TOOLKIT_URL', plugin_dir_url( __FILE__ ) );

/**
 * Initialize the plugin
 */
function custom_block_toolkit_init() {
    // We'll add block registration here in the next step
}
add_action( 'init', 'custom_block_toolkit_init' );