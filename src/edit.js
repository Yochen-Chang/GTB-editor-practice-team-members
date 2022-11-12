import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;
	const onchangeColumns = (newColumns) =>
		setAttributes({
			columns: newColumns,
		});
	return (
		<div
			{...useBlockProps({
				className: `has-${columns}-columns`,
			})}
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Columns', 'team-members')}
						min={1}
						max={6}
						onChange={onchangeColumns}
						value={columns}
					></RangeControl>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={['blocks-course/team-member']}
				template={[
					['blocks-course/team-member'],
					['blocks-course/team-member'],
					['blocks-course/team-member'],
				]}
			/>
		</div>
	);
}
