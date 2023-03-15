function toggle(el) {
    if (el.classList.contains('expanded')) {
        el.classList.remove('expanded');
    } else {
        el.classList.add('expanded');
    }
}

export default function decorate(block) {
    [...block.children].forEach((row) => {
        const title = row.firstElementChild;
        const details = row.lastElementChild;
        row.classList.add('accordion-item');
        title.classList.add('accordion-title');
        details.classList.add('accordion-details');
        // add a listener to toggle details on click
        title.addEventListener('click', () => {
            toggle(row);
        });
    });
}
