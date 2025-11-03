import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { items } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="accordion">
                {items.map((item, index) => (
                    <div key={index} className="accordion-item" data-accordion-item>
                        <button 
                            className="accordion-header"
                            aria-expanded="false"
                            data-accordion-trigger
                        >
                            <RichText.Content 
                                tagName="span" 
                                value={item.title} 
                                className="accordion-title"
                            />
                            <span className="accordion-icon" aria-hidden="true">+</span>
                        </button>
                        <div 
                            className="accordion-content"
                            data-accordion-content
                            hidden
                        >
                            <div className="accordion-content-inner">
                                <RichText.Content 
                                    tagName="div"
                                    multiline="p"
                                    value={item.content} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}