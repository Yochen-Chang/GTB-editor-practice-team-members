import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import { __ } from '@wordpress/i18n';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team member item', 'team-members'),
	icon: 'admin-users',
	parent: ['blocks-course/team-members'],
	edit: () => Edit,
	save: () => <p>save</p>,
});
