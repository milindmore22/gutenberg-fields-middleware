const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gb-m-example/simple-block', {

	title: __( 'Simple Example Block' ),

	description: __( 'Creates simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	attributes: {
		url: {
			type: 'string',
			field: {
				type: 'link',
				placement: 'inspector',
				label: 'Enter Link',
			},
		},
		text: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: __( 'Enter link text' ),
			},
		},
		richText: {
			type: 'string',
			field: {
				type: 'rich-text',
				placeholder: __( 'Enter rich text' ),
			},
		},
		image: {
			type: 'object',
			field: {
				type: 'image',
				buttonText: __( 'Upload' ),
				imagePlaceholder: true,
				removeButtonText: __( 'Remove' ),
			},
		},
		option: {
			type: 'string',
			field: {
				type: 'select',
				label: 'Select Numbers',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		radio: {
			type: 'string',
			field: {
				type: 'radio',
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		check: {
			type: 'boolean',
			field: {
				type: 'checkbox',
				heading: 'User',
				label: 'Is author',
				help: 'Is the user a author or not?',
			},
		},
		switch: {
			type: 'string',
			field: {
				type: 'switch',
				label: __( 'Form Toggle' ),
				placement: 'inspector',
			},
		},
		range: {
			type: 'string',
			field: {
				type: 'range',
			},
		},
		button: {
			type: 'string',
			field: {
				type: 'button',
				isLarge: true,
			},
		},
		buttonEditable: {
			type: 'object',
			field: {
				type: 'button-editable',
			},
		},
		treeSelect: {
			type: 'string',
			field: {
				type: 'tree-select',
				label: __( 'Parent page' ),
				placement: 'inspector',
				tree: [
					{
						name: __( 'Page 1' ),
						id: 'p1',
						children: [
							{ name: __( 'Descend 1 of page 1' ), id: 'p11' },
							{ name: __( 'Descend 2 of page 1' ), id: 'p12' },
						],
					},
					{
						name: __( 'Page 2' ),
						id: 'p2',
						children: [
							{
								name: __( 'Descend 1 of page 2' ),
								id: 'p21',
								children: [
									{
										name: __( 'Descend 1 of Descend 1 of page 2' ),
										id: 'p211',
									},
								],
							},
						],
					},
				],
			},
		},
		color: {
			type: 'string',
			field: {
				type: 'color',
				placement: 'inspector',
			},
		},
		dropdown: {
			type: 'string',
			field: {
				type: 'dropdown',
				position: 'top left',
			},
		},
		dateTime: {
			type: 'string',
			field: {
				type: 'date-time',
				placement: 'inspector',
			},
		},
		textarea: {
			type: 'string',
			field: {
				type: 'textarea',
				label: __( 'Textarea' ),
				help: __( 'Textarea help text' ),
				placement: 'inspector',
			},
		},
		email: {
			type: 'string',
			field: {
				type: 'email',
				label: __( 'Email' ),
				placement: 'inspector',
			},
		},
		hidden: {
			type: 'string',
			field: {
				type: 'hidden',
				placement: 'inspector',
			},
		},
		number: {
			type: 'string',
			field: {
				type: 'number',
				label: __( 'Number' ),
				placement: 'inspector',
			},
		},
		search: {
			type: 'string',
			field: {
				type: 'search',
				label: __( 'Search' ),
				placement: 'inspector',
			},
		},
		tel: {
			type: 'string',
			field: {
				type: 'tel',
				label: __( 'Telephone' ),
				placement: 'inspector',
			},
		},
		editor: {
			type: 'string',
			field: {
				type: 'editor',
			},
		},
		layoutOption: {
			type: 'string',
			field: {
				type: 'radio',
				placement: 'inspector',
				label: __( 'Layout Options' ),
				options: [
					{
						value: 'one',
						label: 'one',
					},
					{
						value: 'two',
						label: 'two',
					},
				],
			},
		},
		columns: {
			type: 'string',
			field: {
				type: 'range',
				label: __( 'Columns' ),
				placement: 'inspector',
			},
		},
	},

	/**
	 * This is optional, if not defined, save would be null.
	 *
	 * @param {object} props Same properties we get in default edit method.
	 * @return {*}
	 */
	save( props ) {
		const attributes = props.attributes;
		const image = attributes.image ? el( 'img', {
			src: attributes.image.url,
		}, null ) : '';

		return el( 'div', null, [
			image,
			el( 'a', {
				href: attributes.url,
			}, attributes.text ),
		] );
	},

} );
