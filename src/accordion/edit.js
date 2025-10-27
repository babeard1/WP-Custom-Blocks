import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes;
    const blockProps = useBlockProps();

    // Add a new accordion item
    const addItem = () => {
        const newItems = [
            ...items,
            {
                title: __('New Item', 'custom-block-toolkit'),
                content: __('Add your content here...', 'custom-block-toolkit'),
                isOpen: false
            }
        ];
        setAttributes({ items: newItems });
    };

    // Remove an accordion item
    const removeItem = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setAttributes({ items: newItems });
    };

    // Update item title
    const updateTitle = (index, newTitle) => {
        const newItems = [...items];
        newItems[index].title = newTitle;
        setAttributes({ items: newItems });
    };

    // Update item content
    const updateContent = (index, newContent) => {
        const newItems = [...items];
        newItems[index].content = newContent;
        setAttributes({ items: newItems });
    };

    return (
        <div {...blockProps}>
            <div className="accordion-editor">
                {items.map((item, index) => (
                    <div key={index} className="accordion-item-editor">
                        <div className="accordion-item-header">
                            <RichText
                                tagName="h3"
                                value={item.title}
                                onChange={(newTitle) => updateTitle(index, newTitle)}
                                placeholder={__('Accordion Title...', 'custom-block-toolkit')}
                                className="accordion-title-editor"
                            />
                            <Button
                                icon={trash}
                                label={__('Remove item', 'custom-block-toolkit')}
                                onClick={() => removeItem(index)}
                                className="accordion-remove-button"
                                isDestructive
                            />
                        </div>
                        <RichText
                            tagName="div"
                            value={item.content}
                            onChange={(newContent) => updateContent(index, newContent)}
                            placeholder={__('Accordion content...', 'custom-block-toolkit')}
                            className="accordion-content-editor"
                        />
                    </div>
                ))}
                
                <Button
                    icon={plus}
                    onClick={addItem}
                    variant="secondary"
                    className="accordion-add-button"
                >
                    {__('Add Item', 'custom-block-toolkit')}
                </Button>
            </div>
        </div>
    );
}