import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

/**
 *reminder
 * https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save: Save,
} );