import React from 'react'

import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

function Testimonial(props) {
    const primary = (
        <span>
            <strong>Täysin samaa mieltä</strong>&nbsp;
            Olen muuttanut tässä kantani seurattuani, miten erilainen armahduspolitiikka eri presidenteillä on. Se ei anna kuvaa vakaasta ja harkitsevasta linjasta eikä sovi oikeusvaltioon. Siirtäisin päätösvallan armahduksista Korkeimmalle oikeudelle
        </span>
    )

    return (
        <ListItem>
            <Avatar src='https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=80' alt='Petja Touru' />
            <ListItemText primary={primary} secondary='Petja Touru' />
        </ListItem>
    )
}

export default Testimonial
