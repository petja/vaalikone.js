import React from 'react'

import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'

class ConstituencySelect extends React.Component {
    state = {
        open            : false,
    }

    render() {
        const {items, value, onChange} = this.props

        const itemComponents = items.map(item => (
            <MenuItem
                value={item.id}
                key={item.id}
                children={item.name}
            />
        ))

        return (
            <Select
                value='east'
                onChange={onChange}
                children={itemComponents}
            />
        )
    }
}

export default ConstituencySelect
