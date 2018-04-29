import React from 'react'

import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'

class ConstituencySelect extends React.Component {
    state = {
        open            : false,
    }

    render() {
        const {items, value, onChange} = this.props

        const itemComponents = [
            <MenuItem key='' value='initial'>
                <em>Valitse vaalipiiri</em>
            </MenuItem>,

            ...Object.keys(items).map(slug => (
                <MenuItem
                    value={items[slug].id}
                    key={items[slug].id}
                    children={items[slug].name}
                />
            ))
        ]

        return (
            <Select
                value='initial'
                onChange={onChange}
                children={itemComponents}
            />
        )
    }
}

export default ConstituencySelect
