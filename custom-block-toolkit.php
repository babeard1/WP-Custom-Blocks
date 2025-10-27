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
 * Add custom block category
 */
function custom_block_toolkit_category( $categories ) {
    return array_merge(
        array(
            array(
                'slug'  => 'custom-block-toolkit',
                'title' => __( 'Custom Block Toolkit', 'custom-block-toolkit' ),
                'icon'  => 'admin-customizer',
            ),
        ),
        $categories
    );
}
add_filter( 'block_categories_all', 'custom_block_toolkit_category' );

/**
 * Initialize plugin and register block(s)
 */
function custom_block_toolkit_init() {
    register_block_type( CUSTOM_BLOCK_TOOLKIT_PATH . 'build/accordion' );
}
add_action( 'init', 'custom_block_toolkit_init' );