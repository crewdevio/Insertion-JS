/* @jsx insertionJsx */

import insertionJsx from '../dom/componentJsx.js';

function Fragment({ metaFragment, children }) {
    if (metaFragment) {
        return insertionJsx(
            'div',
            {
                id: metaFragment.id,
                className: metaFragment.className,
                nameComponent: metaFragment.nameComponent },
            children
        );
    } else {
        return insertionJsx(
            'div',
            null,
            children
        );
    }
};

export default Fragment;