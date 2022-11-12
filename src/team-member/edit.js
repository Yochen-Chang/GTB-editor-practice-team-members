import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { name, bio } = attributes;
	const onchangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onchangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};
	return (
		<div {...useBlockProps()}>
			<RichText
				placeholder={__('Member Name', 'team-member')}
				tagName="h4"
				onChange={onchangeName}
				value={name}
				allowedFormats={[]}
			/>
			<RichText
				placeholder={__('Member Bio', 'team-member')}
				tagName="p"
				onChange={onchangeBio}
				value={bio}
				allowedFormats={[]}
			/>
		</div>
	);
}
