document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('[data-accordion-item]');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('[data-accordion-trigger]');
        const content = item.querySelector('[data-accordion-content]');

        if (!trigger || !content) return;
        trigger.addEventListener('click', function() {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                closeAccordion(trigger, content);
            } else {
                openAccordion(trigger, content);
            }
        });

        // keyboard navigation 
        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.click();
            }
        });
    });

    /**
     * Opens item
     */
    function openAccordion(trigger, content) {
        trigger.setAttribute('aria-expanded', 'true');
        content.removeAttribute('hidden');
    }

    /***
     * close item
     */
    function closeAccordion(trigger, content) {
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('hidden', '');
    }
});